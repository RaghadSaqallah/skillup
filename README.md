# 🎓 SkillUp — Learning Platform

![Docker Build](https://github.com/YOUR-USERNAME/SkillUp-Learning-Platform/actions/workflows/docker-build.yml/badge.svg)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Nginx](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

**SkillUp** is a multi-page e-learning web platform where users browse programming courses, open lecture videos, and track their learning progress. Progress is stored in the browser (`localStorage`), so no backend or database is required.

---

## ✨ Features

- 🏠 **Home page** with a card layout listing all courses
- 📚 **Course pages** (Back End, Java, Python, Flutter, Front End), each with its own lecture list and YouTube links
- ✅ **Progress tracking**: lectures are marked as completed and saved per course
- 📊 **Progress bar** showing the completion percentage of each course
- 📱 **Responsive design** with a collapsible mobile menu
- 🎨 **Custom Tailwind v4 theme** (see color palette below)

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|------------|
| Markup | HTML5 |
| Styling | Tailwind CSS v4 (compiled with `@tailwindcss/cli`) |
| Logic | Vanilla JavaScript + `localStorage` |
| Icons / Fonts | Font Awesome 6, Lato |
| Build stage | Node.js 22 (Alpine) |
| Web server | Nginx (Alpine) |
| Containerization | Docker, Docker Compose |
| CI | GitHub Actions |

---

## 📂 Project Structure

```
SkillUp-Learning-Platform/
├── src/                         # Application source
│   ├── index.html               # Home page
│   ├── backend.html             # Back End course
│   ├── java.html                # Java course
│   ├── python.html              # Python course
│   ├── flutter.html             # Flutter course
│   ├── front.html               # Front End course
│   ├── css/
│   │   ├── input.css            # Tailwind source (edit this)
│   │   ├── style.css            # Compiled output (generated)
│   │   └── all.min.css          # Font Awesome
│   ├── js/script.js             # Mobile menu + progress tracking
│   ├── fonts/  webfonts/  images/
├── docs/
│   ├── notes.md                 # Technical notes
│   └── screenshots/             # Assignment screenshots
├── Dockerfile                   # Multi-stage build (Node -> Nginx)
├── docker-compose.yml
├── .dockerignore
├── .gitignore
├── package.json
├── package-lock.json
└── README.md
```

---

## 🐳 Run with Docker

### Prerequisites

- [Docker Desktop](https://www.docker.com/products/docker-desktop/) (or Docker Engine + Compose plugin)
- Git

No Node.js installation is needed on your machine. The build happens inside the container.

### Option 1: Docker Compose (recommended)

```bash
git clone https://github.com/RaghadSaqallah/skillup.git
cd SkillUp

docker compose up --build -d
```

Open **http://localhost:8080** in your browser.

### Option 2: Plain Docker

```bash
docker build -t skillup:latest .
docker run -d --name skillup -p 8080:80 skillup:latest
```



---

## 🧹 Stop and Clean Up

```bash
# Compose
docker compose down              # stop and remove the container
docker compose down --rmi local  # also remove the built image

# Plain Docker
docker stop skillup && docker rm skillup
docker rmi skillup:latest
```

---

## ⚙️ Configuration

| Item | Value | Notes |
|------|-------|-------|
| Container port | `80` | Nginx |
| Host port | `8080` | Change the left side in `docker-compose.yml` (e.g. `"3000:80"`) |
| Environment variables | none | The app is fully static |
| Healthcheck | every 30s | `wget` request to `http://127.0.0.1/` |

Check the container health with:

```bash
docker ps        # STATUS should show "(healthy)"
```

---

## ✅ How to Test

1. Open **http://localhost:8080** and confirm the course cards appear.
2. Click a course (for example **Python**) and confirm the lecture list loads.
3. Click a lecture link. It opens the video and the check icon turns yellow.
4. Go back and confirm the **progress bar** increased.
5. Refresh the page. The progress should still be there (saved in `localStorage`).
6. Resize the window below 768px and confirm the **hamburger menu** works.

Quick command-line check:

```bash
curl -I http://localhost:8080          # expect HTTP/1.1 200 OK
curl -I http://localhost:8080/python.html
```

---

## 💻 Local Development (without Docker)

Requires **Node.js 20+** (Tailwind v4 requirement).

```bash
npm ci
npm run dev      # watches src/css/input.css and rebuilds src/css/style.css
npm run build    # one-time minified build
```

Then open `src/index.html` in a browser or use VS Code Live Server.

---


## 🎨 Color Palette

| Name | Hex |
|------|-----|
| Primary | `#F5BD33` |
| Secondary | `#3FBDF1` |
| Dark | `#2E2E2E` |
| Light | `#CBEDFB` |

---

## 📋 Available Courses

| Course | Page | Lectures |
|--------|------|----------|
| Back End | `backend.html` | 4 |
| Java | `java.html` | 5 |
| Python | `python.html` | 5 |
| Flutter | `flutter.html` | 5 |
| Front End | `front.html` | 3 |

---

## 🙏 Attribution

This project was designed and built by the author as an original work (it is not based on another repository). It uses the following open-source components:

- [Tailwind CSS](https://tailwindcss.com/): MIT License
- [Font Awesome Free](https://fontawesome.com/): icons CC BY 4.0, fonts SIL OFL 1.1, code MIT
- [Lato font](https://www.latofonts.com/): SIL Open Font License 1.1
- Course videos are hosted on YouTube and belong to their respective creators.

---


---

## 📬 Contact

Raghad Saqallah — raghadsaqallah78@gmail.com
