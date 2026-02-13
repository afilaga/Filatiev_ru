# Project Agents & Roles | Filatiev.ru (Photo)

Операционные протоколы и роли AI для поддержки фото-портфолио.

## 🤖 Agents & Responsibilities

### **@plan (Architect / Strategist)**
*   **Focus**: SEO (Sochi), Content Strategy, Ecosystem Architecture.
*   **Tasks**:
    *   Анализ ключевых слов и позиций.
    *   Планирование структуры (Фото vs IT субдомены).
    *   Socratic Gate: "Does this help sell photography?"

### **@code (Frontend / Visual)**
*   **Focus**: Visual Excellence, Performance, Micro-animations.
*   **Tasks**:
    *   Реализация "Premium Dark" дизайна.
    *   Оптимизация изображений (WebP, Lazy Load).
    *   Чистый HTML/CSS без лишних фреймворков (Vanilla speed).

### **@ops (SRE / Webmaster)**
*   **Focus**: Deployment, Domain Management, Analytics.
*   **Tasks**:
    *   Настройка DNS, SSL, Subdomains.
    *   Интеграция Yandex.Metrika / Google Analytics.
    *   Git flow & GitHub Pages / Vercel deploy.

## 📜 Core Rules (The "Pure Photo" Doctrine)

1.  **Segregation of Duties**:
    *   Этот репозиторий — **ТОЛЬКО ФОТО**.
    *   Любой код/IT контент — **REJECT** (или отправляй в план для субдомена).

2.  **Local First**:
    *   Все мета-теги, map points и тексты оптимизируются под **Сочи**.

3.  **Visual Supremacy**:
    *   Изображения — главный актив. Никакого блюра, обрезки или низкого качества.
    *   Lightbox должен работать идеально на мобильных.

## 🛠 Workflows
- **Update Portfolio**: Add img to `assets/` -> Add block in `index.html` -> Commit.
- **Deploy**: Push to `main` triggers update.
