<div align="center">

# 🗓️ Advance Week Planner

### A gorgeous, glassmorphic weekly planner + focus timer — in a **single HTML file**.

No build step. No dependencies. No backend. No tracking.
Just open it and plan your week.

<br>

![Single File](https://img.shields.io/badge/single-HTML%20file-5b7cff?style=for-the-badge&logo=html5&logoColor=white)
![Zero Dependencies](https://img.shields.io/badge/dependencies-0-22b58a?style=for-the-badge)
![Languages](https://img.shields.io/badge/languages-6-ff5fa2?style=for-the-badge)
![RTL Ready](https://img.shields.io/badge/RTL-ready-9b5cff?style=for-the-badge)
![Offline](https://img.shields.io/badge/data-stays%20on%20your%20device-14b8c4?style=for-the-badge)
![License](https://img.shields.io/badge/license-MIT-f5b400?style=for-the-badge)

**[🇮🇷 فارسی](#-فارسی) · [✨ Features](#-features) · [🚀 Quick Start](#-quick-start) · [🎨 Customization](#-customization) · [💾 Your Data](#-your-data--privacy)**

<br>

<!-- 📸 Add a screenshot or GIF here:
<img src="docs/preview.png" alt="Advance Week Planner preview" width="860">
-->

</div>

---

## ✨ Features

### 📋 Planning

| | Feature | Details |
|---|---|---|
| 📅 | **Weekly view** | Seven day tabs with a live progress bar for the selected day |
| ⏰ | **Time & duration** | Give any task a start time and a duration — it shows up as a neat range chip (e.g. `09:00–10:30`) |
| ⚠️ | **Clash detection** | Overlapping tasks are flagged automatically, with a tooltip telling you *which* task they collide with |
| ⭐ | **Starred tasks** | Mark important tasks and filter the list to starred only |
| ✏️ | **Inline editing** | Edit any task in place — save or cancel without leaving the list |
| 🖐️ | **Drag & drop** | Reorder tasks with a drag handle (pointer-based, works on touch too) |
| ↕️ | **Sort by time** | One tap to order the day chronologically |
| ✅ | **Done to bottom** | Push completed tasks down and keep your focus on what's left |
| 📦 | **Carry over** | Move all unfinished tasks to the next day in one click |
| 🧹 | **Clear completed** | Sweep away everything you've finished |
| ↩️ | **Undo** | Toast with *Undo* button + `Ctrl/⌘ + Z` for deletes, moves and clears |
| 📊 | **Day / Week summary** | Planned time vs. starred time, with a per-day breakdown for the whole week |
| 🎉 | **Confetti** | Finish every task of the day and celebrate (respects `prefers-reduced-motion`) |

### ⏱️ Focus Timer

- Built-in **Pomodoro-style timer** with a smooth animated ring
- Presets: **15 · 25 · 45 · 60** minutes — or type **any custom duration** (1–600 min)
- Remaining time is mirrored in the **browser tab title**, so you can keep an eye on it from another tab
- Optional **beep** (Web Audio) and **vibration** when time is up

### 🕐 World Clocks

- Header clock with optional **seconds**, **12/24-hour** mode, and a **pinned city**
- **18 cities** to choose from — Tehran, Washington, Berlin, London, Tokyo, Baku, Istanbul, Dubai, Moscow, Cairo, Paris, New Delhi, Beijing, Seoul, Sydney, Toronto, Los Angeles, São Paulo
- Pin any city to show *its* time in the header

### 🌍 6 Languages, Full RTL

Switch the entire UI instantly — including layout direction, day names, number formatting and time units:

`🇮🇷 فارسی` · `🇬🇧 English` · `🇫🇷 Français` · `🇸🇦 العربية` · `🇷🇺 Русский` · `🇨🇳 中文`

- Persian & Arabic digits ⇄ Western digits toggle
- Pick which day your **week starts on** (Saturday / Sunday / Monday)

### 🎨 Make It Yours

<details open>
<summary><b>Everything is adjustable from the settings drawer</b></summary>

<br>

| Setting | Options |
|---|---|
| **Display mode** | System · Light · Dark (with a quick day/night switch in the header) |
| **Theme color** | 11 presets — Blue, Red, Orange, Purple, Green, Pink, Teal, Gold, Indigo, Lime, Mocha — a 🌈 **RGB** theme, and a **custom color picker** |
| **Corner radius** | 12 → 44 px |
| **Glass blur** | 0 → 40 px |
| **Text size** | 85% → 125% |
| **List density** | Cozy · Compact |
| **Row style** | Glass · Flat · Outline |
| **Completed look** | Strikethrough · Dimmed (or hide them entirely) |
| **Background pattern** | Plain · Dots · Grid · Grain |
| **App font** | Auto · System · Rounded · Serif · Mono |
| **Ambient blobs** | Soft animated color glows — on/off |
| **Sound / Confetti / Seconds / 12h clock** | Individual toggles |

</details>

---

## 🚀 Quick Start

**Option 1 — Just open it**

```bash
git clone https://github.com/<your-username>/<your-repo>.git
cd <your-repo>
# then double-click the HTML file, or:
open Advance-WeekPlanner.html      # macOS
xdg-open Advance-WeekPlanner.html  # Linux
start Advance-WeekPlanner.html     # Windows
```

**Option 2 — Host it for free with GitHub Pages**

1. Rename the file to `index.html`
2. Go to **Settings → Pages**
3. Choose your branch and `/ (root)` → **Save**
4. Your planner lives at `https://<your-username>.github.io/<your-repo>/`

**Option 3 — Any static host** (Netlify, Vercel, Cloudflare Pages…) — drag, drop, done.

> 💡 The only external request is the optional **Vazirmatn** web font from Google Fonts (used for Persian/Arabic). Without internet, the app falls back gracefully to system fonts.

---

## 💾 Your Data & Privacy

- 🔒 **Everything is stored locally** in your browser's `localStorage` — nothing is ever sent anywhere
- 📤 **Export** a full JSON backup (tasks + all appearance settings)
- 📥 **Import** it on another device or browser to restore everything
- 🗑️ **Two-step confirmation** on destructive actions (*Clear all tasks*, *Reset look & settings*)

---

## 🛠️ Tech

| | |
|---|---|
| **Stack** | Vanilla HTML · CSS · JavaScript — no frameworks, no bundler |
| **Design** | Glassmorphism, CSS custom properties, `backdrop-filter`, live theme tokens |
| **Accessibility** | ARIA roles & labels, `aria-live` status, visible focus rings, keyboard support, reduced-motion aware |
| **Responsive** | Mobile-first, safe-area insets for notched phones, custom styled scrollbars |
| **i18n** | Built-in dictionary for 6 languages + `Intl` for dates, clocks and numbers |
| **Persistence** | `localStorage` with sanitized import/restore |

---

## 🤝 Contributing

Ideas, bug reports and PRs are welcome!

1. Fork the repo
2. Create your branch: `git checkout -b feature/amazing-idea`
3. Commit: `git commit -m "Add amazing idea"`
4. Push and open a Pull Request

Want to add a **new language**? Add a block to the `I18N` / `I18N_EXTRA` dictionaries and a button to the language switcher.

---

## 📄 License

Released under the **MIT License** — see [`LICENSE`](LICENSE).

---

## 👤 Author

Made with care and attention to detail by **Mahdi Barkhordar** (مهدی برخوردار).

If this planner helps you get more done, drop a ⭐ — it means a lot!

---
