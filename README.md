# Shaikh Arshad - Data Engineering & Analytics Leader Portfolio

High-impact, responsive, executive-level portfolio website designed for **Technical Managers**, **Engineering Leaders**, and **Hiring Managers** on LinkedIn and Resume.

- **Name**: Shaikh Arshad
- **LinkedIn Profile**: [https://www.linkedin.com/in/arshadshaikh-ds/](https://www.linkedin.com/in/arshadshaikh-ds/)
- **GitHub Profile**: [https://github.com/Sarshad070121](https://github.com/Sarshad070121)
- **Hosted Target**: GitHub Pages (`https://Sarshad070121.github.io/portfolio`)

---

## Key Features

1. **Executive Hero Banner & Stat Counters**: Highlights 50M+ Records Processed, 99.9% Pipeline SLA, and PySpark Code Architecture snippet.
2. **Skills & Competencies Matrix**: Categorized grid covering Data Engineering (PySpark, SQL, Python, ETL, Data Lakes), Data Analytics & BI (EDA, Lead Scoring ML, Credit Risk EDA), and Data Leadership.
3. **Featured Case Studies**: Detailed breakdown of 5 core repositories (`NYC TLC Taxi Big Data`, `Lead Scoring Assignment`, `Credit EDA Assignment`, `Retail Data Analysis`, `Car Ride Sensor Telemetry`).
4. **Career Timeline & Education**: Interactive track record designed for recruiters.
5. **Theme Support**: Dark & Light mode toggle with local storage persistence.
6. **Zero-Cost GitHub Pages Hosting**: 1-click build and deployment setup using `gh-pages`.

---

## Getting Started Locally

### 1. Set Workspace
Open this folder in your IDE/Editor:
`C:\Users\shaik\.gemini\antigravity\scratch\portfolio-website`

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Local Dev Server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Customizing Content

All text, bio, social links, skills, metrics, and project case studies are structured cleanly in:
`src/data/portfolioData.js`

To update your resume link, email address, or add new projects, simply edit `src/data/portfolioData.js`.

---

## Deploying to GitHub Pages (Step-by-Step)

### Step 1: Create GitHub Repository
1. Go to [https://github.com/new](https://github.com/new)
2. Create a public repository named `portfolio` (or `Sarshad070121.github.io`).

### Step 2: Initialize Git and Link Repository
In your terminal inside `portfolio-website`, run:
```bash
git init
git add .
git commit -m "Initial commit of Data Engineering & Analytics Leader portfolio"
git branch -M main
git remote add origin https://github.com/Sarshad070121/portfolio.git
git push -u origin main
```

### Step 3: Deploy to GitHub Pages
Run the automated deploy command:
```bash
npm run deploy
```
This command automatically builds the static production bundle and pushes it to the `gh-pages` branch on GitHub.

### Step 4: Enable GitHub Pages in Repository Settings
1. Go to your repository on GitHub: `https://github.com/Sarshad070121/portfolio/settings/pages`
2. Under **Build and deployment** -> **Source**, select **Deploy from a branch**.
3. Set **Branch** to `gh-pages` and folder to `/ (root)`. Click **Save**.

Your portfolio website will now be live at:
**`https://Sarshad070121.github.io/portfolio`**

Add this URL directly to your **LinkedIn Profile (Contact Info / Featured Section)** and your **Resume header**!
