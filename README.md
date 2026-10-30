# 🎓 SkillUp — Platform for Skill & Learning

> منصة تعليمية تفاعلية لتعلم البرمجة بأسلوب عملي ومتابعة التقدم في كل دورة.

![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

---

## 📸 Overview

**SkillUp** is a multi-page learning platform that lets users explore programming courses, watch lecture videos, and track their progress — all stored locally in the browser.

---

## ✨ Features

- 🏠 **Home Page** — Browse all available courses with a clean card layout
- 📚 **Course Pages** — Each course has its own dedicated module list with YouTube lecture links
- ✅ **Progress Tracking** — Check off lectures as you complete them; progress is saved via `localStorage`
- 📊 **Progress Bar** — Visual indicator showing completion percentage per course
- 📱 **Responsive Design** — Mobile-friendly with a collapsible hamburger menu
- 🎨 **Custom Theme** — Built with Tailwind CSS v4 using a custom color palette

---

## 📂 Project Structure

```
skillup/
│
├── index.html          # Home page — course listing
├── backend.html        # Back End course page
├── java.html           # Java course page
├── python.html         # Python course page
├── flutter.html        # Flutter course page
├── front.html          # Front End course page
│
├── css/
│   ├── style.css       # Compiled Tailwind output
│   └── all.min.css     # Font Awesome icons
│
├── js/
│   └── script.js       # Mobile menu + progress tracking logic
│
├── fonts/
│   ├── Lato-Bold.ttf
│   └── Lato-Regular.ttf
│
├── images/             # Course thumbnails, logo, icons
└── input.css           # Tailwind source config
```

---

## 🎨 Color Palette

| Name      | Hex       | Preview |
|-----------|-----------|---------|
| Primary   | `#F5BD33` | 🟡 Yellow |
| Secondary | `#3FBDF1` | 🔵 Blue   |
| Dark      | `#2E2E2E` | ⚫ Charcoal |
| Light     | `#CBEDFB` | 🩵 Light Blue |

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/skillup.git
cd skillup
```

### 2. Build Tailwind CSS (if editing styles)

Make sure you have [Node.js](https://nodejs.org/) installed, then:

```bash
npx @tailwindcss/cli -i ./input.css -o ./css/style.css --watch
```

### 3. Open in browser

Simply open `index.html` in your browser — no server required.

```bash
# Or use Live Server in VS Code
```

---

## 📖 How It Works

### Progress Tracking

Each course page has a `data-course` attribute (e.g. `data-course="python-course"`). When a user clicks a lecture link:

1. The lecture is marked as completed in `localStorage`
2. The checkmark icon turns yellow (primary color)
3. The progress bar updates in real time

Progress **persists across page refreshes** for each course independently.

### Mobile Menu

The hamburger menu toggles a slide-down navigation using Tailwind's `top` utility classes, handled entirely in vanilla JS.

---

## 📋 Available Courses

| Course       | Page           | Lectures |
|--------------|----------------|----------|
| 🖥️ Back End  | `backend.html` | 4        |
| ☕ Java       | `java.html`    | 5        |
| 🐍 Python    | `python.html`  | 5        |
| 💙 Flutter   | `flutter.html` | 5        |
| 🌐 Front End | `front.html`   | 3        |

---

## 🛠️ Tech Stack

- **HTML5** — Semantic markup
- **Tailwind CSS v4** — Utility-first styling with custom theme
- **Font Awesome 6** — Icons
- **Vanilla JavaScript** — Interactivity & localStorage
- **Lato Font** — Custom local font via `@font-face`

---

## 📬 Contact

- 📧 raghadsaqallah78@gmail.com
- 📞 (+972)567892382

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">Made with ❤️ — Raghad Saqallah</p>
