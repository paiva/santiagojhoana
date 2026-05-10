# Website Requirements: Santiago Paiva & Jhoana Moreno's Wedding

This document specifies the technical and content requirements for the official wedding website of **Santiago Paiva** and **Jhoana Moreno**, which serves as an information hub for the wedding taking place on **May 23, 2026**.

---

## 1. Project Infrastructure & Technology
* **Platform:** GitHub Pages (Static Hosting).
* **Domain (CNAME):** `santiagojhoana.com`.
* **Core Tech:** Vanilla HTML5, CSS3, and JavaScript (ES6+).
* **Frameworks:** **Strictly no frameworks** (No React, Vue, Bootstrap, etc.) to ensure simplicity and compatibility with GitHub Pages.
* **Icons:** FontAwesome integration.
* **File Structure:**
    * `/index.html` (Main entry)
    * `/css/` (Stylesheets)
    * `/js/` (Translation and UI logic)
    * `/img/` (Logo and visual assets)
    * `/docs/` (Hosted documents: menu, parking guide, welcome note, photobook information)

---

## 2. Visual Identity & Design
* **Look & Feel:** Modern, clean, and elegant.
* **Primary Palette:**
    * Background: White
    * Font: Black
    * Accent 1: Yellow (`#e3b267`)
    * Accent 2: Light Blue (`#6c8bc2`)
* **Logo:** Main logo from `img/logo S y J.png`.

---

## 3. Core Functionality
* **Multilingual Support:** The site must be available in **French, Spanish, and English**.
* **Navigation:** One-page scrolling or simple navigation between info sections.
* **Responsiveness:** Must be optimized for mobile devices, as it will be used as a reference during the wedding weekend.

---

## 4. Content Sections

### A. The Ceremony (Venue I)
* **Location:** Chapelle Notre-Dame du Sacré-Cœur, Basilique de Notre-Dame de Montréal [cite: 11].
* **Address:** 424 Saint Sulpice Street, Montreal, QC H2Y 2V5 [cite: 13].
* **Metro:** Place D'Armes [cite: 13].
* **Time:** 3:30 PM [cite: 10].
* **Policy:** A prominent notice requesting that guests **do not throw rice** or other items inside or outside the church. State that the couple will provide alternative celebration means.

### B. The Reception (Venue II)
* **Location:** L'Ambroisie (Cuisine française) [cite: 18].
* **Address:** 4020 Saint-Ambroise Street, local #140, Montreal, QC H4C 3J9 [cite: 25].
* **Metro:** Saint-Henri (30-35 min commute from the Basilica) [cite: 26].
* **Parking:**
    * Note limited parking at the Basilica due to F1 weekend traffic [cite: 29].
    * Parking at L'Ambroisie is available for **$10 per car** [cite: 30].
    * Reference documents in `/docs/` for maps/guides.

### C. Evening Schedule [cite: 20]
* **3:30 PM - 4:30 PM:** Wedding Ceremony
* **5:30 PM:** Welcome Cocktail
* **6:30 PM:** Dinner
* **8:30 PM:** Dance
* **12:00 AM:** End of Reception

### D. Menu & Registry
* **Menu:** A dedicated button/link allowing guests to download the menu PDF from `/docs/`.
* **Gifts:** A section providing information about wedding gifts/registry.

### E. Vendor & Contact Directory
* **Photographer:** Denise Barria (info@denisebarria.com)
* **DJ:** Jose Pardal (josepardaldj@gmail.com)
* **General Contact:** Jhoana Moreno or Santiago Paiva.
* **Email:** paiva.santiago@gmail.com

---

## 5. Development Roadmap (TODOs)
* [ ] Set up basic HTML structure with language toggle logic.
* [ ] Implement CSS styling according to the white/black/yellow/blue palette.
* [ ] Create `/docs/` folder and populate with menu, parking guide, and photobook info.
* [ ] **Wedding Mass Info:** Add a new document to `/docs/` (ceremony readings/liturgy) and list as a site todo.
* [ ] Test mobile responsiveness for the venue addresses and schedule.
