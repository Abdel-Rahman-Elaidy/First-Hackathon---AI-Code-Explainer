# 01 — Project Scaffold

**What to build:** Create the complete file skeleton for the entire application so every future ticket has a solid foundation to build on. When this ticket is done, you can open `index.html` in a browser and see a styled page — even though nothing is wired up yet.

**Blocked by:** None — can start immediately.

**Status:** ready

---

## What you will create

Four files:

- `index.html` — the single HTML file that contains all pages and modals
- `style.css` — the full design system (colors, fonts, layout, components)
- `app.js` — the application controller (empty for now, just the file)
- `ai.js` — the AI integration module (empty for now, just the file)

---

## index.html requirements

The HTML file must contain all of the following, even if they are empty shells:

### `<head>`
- Correct `lang`, `charset`, and `viewport` meta tags
- A descriptive `<title>` tag
- A `<meta name="description">` tag
- Link to `style.css`
- Link to Highlight.js CSS via CDN (use the `github-dark` theme):
  ```
  https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark.min.css
  ```
- Link to Google Fonts — load both `Inter` (weights 400, 500, 600) and `JetBrains Mono` (weight 400)

### `<body>` structure

The body must contain these sections — each one is a "page" that JavaScript will show or hide:

```
<section id="page-home">        ← the home page
<section id="page-explainer">   ← the explainer page
<section id="page-learner">     ← the learner page
```

And these modals (hidden by default):

```
<div id="modal-hint">           ← hint / error modal
<div id="modal-success">        ← success modal
<div id="modal-api-key">        ← API key input modal
```

Each section and modal can be empty placeholder shells for now — content comes in later tickets.

### `<script>` tags at the bottom of `<body>`
- Highlight.js via CDN:
  ```
  https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js
  ```
- Your own `ai.js` (load before `app.js`)
- Your own `app.js`

---

## style.css requirements

### CSS custom properties (variables)

Define all of these on `:root`:

```css
/* Colors */
--color-bg: #0d0d0f;           /* page background */
--color-surface: #1a1a1f;      /* cards, panels */
--color-surface-2: #222228;    /* slightly lighter surface */
--color-border: rgba(255, 255, 255, 0.08);
--color-accent: #6366f1;       /* primary indigo */
--color-accent-hover: #4f46e5;
--color-text: #e2e2e8;         /* primary text */
--color-text-muted: #888892;   /* secondary text */
--color-error: #f87171;
--color-success: #34d399;

/* Typography */
--font-body: 'Inter', sans-serif;
--font-mono: 'JetBrains Mono', monospace;

/* Spacing */
--space-xs: 4px;
--space-sm: 8px;
--space-md: 16px;
--space-lg: 24px;
--space-xl: 40px;
--space-2xl: 64px;

/* Borders */
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
```

### Base reset
- `box-sizing: border-box` on everything
- `margin: 0`, `padding: 0` reset
- `background-color: var(--color-bg)` on `body`
- `color: var(--color-text)` on `body`
- `font-family: var(--font-body)` on `body`
- `line-height: 1.6` on `body`

### Page visibility system
All three `<section>` pages should be hidden by default:
```css
section[id^="page-"] {
  display: none;
}
section[id^="page-"].active {
  display: block;
}
```

### Modal system
All modals hidden by default, shown with an `.open` class:
```css
.modal-overlay {
  display: none;
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 100;
  align-items: center;
  justify-content: center;
}
.modal-overlay.open {
  display: flex;
}
```

### Button base styles
Define at minimum:
- `.btn-primary` — accent background, white text, rounded, hover darkens
- `.btn-secondary` — transparent background, border, muted text

### Card base style
```css
.card {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  padding: var(--space-lg);
}
```

---

## app.js starting point

The file should have one comment block explaining what it does, and one empty `showPage(pageId)` function stub:

```js
// app.js
// Controls state, navigation, and DOM updates for the Learning Loop.

function showPage(pageId) {
  // TODO: implement
}
```

---

## ai.js starting point

The file should have one comment block and two empty function stubs:

```js
// ai.js
// Handles all communication with the Gemini API.

async function explainCode(code, apiKey) {
  // TODO: implement
}

async function evaluateAnswer(payload, apiKey) {
  // TODO: implement
}
```

---

## Acceptance criteria

- [ ] `index.html` opens in a browser without errors in the DevTools console
- [ ] Google Fonts load — body text renders in Inter, not the browser default
- [ ] Highlight.js loads — `hljs` is accessible in the browser console (`typeof hljs === 'object'` returns `true`)
- [ ] All three page sections exist in the DOM (`document.getElementById('page-home')` etc. return elements)
- [ ] All three modals exist in the DOM
- [ ] `style.css` is linked and all CSS variables resolve (check with DevTools inspector)
- [ ] `app.js` and `ai.js` load without errors
- [ ] Only the home page is visible — explainer and learner sections are hidden

---

## Commit message suggestion

```
feat: project scaffold — HTML skeleton, CSS design system, JS stubs
```
