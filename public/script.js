document.addEventListener('DOMContentLoaded', () => {
    // 1. Hero Entrance Animation
    const hero = document.querySelector('.magic-hero');
    if (hero) {
        setTimeout(() => {
            hero.classList.add('visible');
        }, 100);
    }

    // 2. Intersection Observer for Scroll Reveals
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.spotlight-card, .gallery-item, .section-header').forEach(el => {
        el.classList.add('reveal-hidden');
        observer.observe(el);
    });

    // 3. Smooth Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // 3.1 Pass UTM/click IDs to outbound contact links
    const attributionKeys = [
        'utm_source',
        'utm_medium',
        'utm_campaign',
        'utm_term',
        'utm_content',
        'utm_id',
        'gclid',
        'yclid',
        'fbclid'
    ];
    const pageParams = new URLSearchParams(window.location.search);
    const trackedParams = new URLSearchParams();
    attributionKeys.forEach((key) => {
        const value = pageParams.get(key);
        if (value) trackedParams.set(key, value);
    });

    if ([...trackedParams.keys()].length > 0) {
        document.querySelectorAll('a[data-pass-utm="true"]').forEach((link) => {
            try {
                const linkUrl = new URL(link.href, window.location.origin);
                trackedParams.forEach((value, key) => {
                    if (!linkUrl.searchParams.has(key)) {
                        linkUrl.searchParams.set(key, value);
                    }
                });
                link.href = linkUrl.toString();
            } catch (error) {
                // Ignore malformed href values to keep page behavior safe.
            }
        });
    }

    // 4. MAGIC UI: Spotlight Effect for Service Cards
    document.querySelectorAll('.spotlight-card').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });
    });

    // 5. MAGIC UI: Meteor Shower
    const meteorContainer = document.getElementById('meteorContainer');
    if (meteorContainer) {
        const createMeteor = () => {
            const meteor = document.createElement('span');
            meteor.classList.add('meteor');
            meteor.style.left = Math.random() * 100 + '%';
            meteor.style.top = Math.random() * 100 + '%';
            meteor.style.animationDuration = (Math.random() * 2 + 2) + 's';
            meteor.style.animationDelay = (Math.random() * 5) + 's';
            meteorContainer.appendChild(meteor);
            setTimeout(() => {
                meteor.remove();
            }, 5000);
        };

        for (let i = 0; i < 20; i++) {
            createMeteor();
        }
        setInterval(createMeteor, 200);
    }
});

// =========================================
// LIGHTBOX FUNCTIONALITY
// =========================================
const galleryImages = [];
let currentSlideIndex = 0;

// Populate gallery images array on load
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.gallery-item').forEach(item => {
        const img = item.querySelector('img');
        const overlay = item.querySelector('.item-overlay');
        const title = overlay ? overlay.querySelector('h3')?.textContent : '';
        const subtitle = overlay ? overlay.querySelector('p')?.textContent : '';
        galleryImages.push({
            src: img.src,
            caption: title + (subtitle ? ' — ' + subtitle : '')
        });
    });
});

function openLightbox(index) {
    currentSlideIndex = index;
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');

    if (galleryImages[index]) {
        img.src = galleryImages[index].src;
        caption.textContent = galleryImages[index].caption;
    }

    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function changeSlide(direction) {
    currentSlideIndex += direction;
    if (currentSlideIndex >= galleryImages.length) currentSlideIndex = 0;
    if (currentSlideIndex < 0) currentSlideIndex = galleryImages.length - 1;

    const img = document.getElementById('lightbox-img');
    const caption = document.getElementById('lightbox-caption');

    if (galleryImages[currentSlideIndex]) {
        img.src = galleryImages[currentSlideIndex].src;
        caption.textContent = galleryImages[currentSlideIndex].caption;
    }
}

// Keyboard navigation for lightbox
document.addEventListener('keydown', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (!lightbox || !lightbox.classList.contains('active')) return;

    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') changeSlide(-1);
    if (e.key === 'ArrowRight') changeSlide(1);
});

// Close lightbox on background click
document.addEventListener('click', (e) => {
    const lightbox = document.getElementById('lightbox');
    if (e.target === lightbox) closeLightbox();
});
