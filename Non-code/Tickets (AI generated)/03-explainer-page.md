# 03 — Explainer Page: Full Explanation Flow

**What to build:** Display the AI's response on the Explainer page. When this ticket is done, the user pastes code → clicks "Start Explanation" → sees their code with syntax highlighting on the left, and the Big Picture and Line-by-Line explanations on the right. The "Start Learning" button navigates them to the Learner page shell.

**Blocked by:** 02 — Prove the AI Works

**Status:** ready

---

## What the Explainer page must look like

```
┌─────────────────────────────────────────────────────────────┐
│  ← Back          [page title or breadcrumb]                 │
├───────────────────────────┬─────────────────────────────────┤
│                           │  ┌─────────────────────────┐   │
│  [Syntax-highlighted      │  │  🔍 Big Picture          │   │
│   code display]           │  │  [explanation text]      │   │
│                           │  └─────────────────────────┘   │
│                           │  ┌─────────────────────────┐   │
│                           │  │  📄 Line by Line         │   │
│                           │  │  [explanation text]      │   │
│                           │  └─────────────────────────┘   │
│                           │                                 │
│                           │  [Start Learning →]             │
└───────────────────────────┴─────────────────────────────────┘
```

---

## Part A: Build the Explainer page layout in `index.html`

Inside `<section id="page-explainer">`, add:

### Top bar
- A small back link or button: `id="btn-back-home"`, text: `← Start Over`
- A page label (e.g. "Understanding Your Code")

### Two-column layout
Use CSS Grid or Flexbox. Left column: ~50% width. Right column: ~50% width.

**Left column:**
- A `<pre><code>` block with `id="display-submitted-code"` and class `language-javascript`
- Wrap it in a panel with a label like "Your Code"

**Right column:**
- A card with `id="card-big-picture"`:
  - Title: "🔍 Big Picture"
  - A `<p>` or `<div>` with `id="text-big-picture"` where the explanation text will go
- A card with `id="card-line-by-line"`:
  - Title: "📄 Line by Line"
  - A `<div>` with `id="text-line-by-line"` where the explanation text will go
- A primary button at the bottom: `id="btn-start-learning"`, text: `Start Learning →`

---

## Part B: Style the Explainer page in `style.css`

### Two-column layout
```css
.explainer-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-lg);
  height: calc(100vh - 80px); /* fill the page below the top bar */
}
```

### Code panel
```css
.code-panel {
  background: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-lg);
  overflow: auto;
  padding: var(--space-md);
}

.code-panel pre {
  margin: 0;
  font-family: var(--font-mono);
  font-size: 13px;
  line-height: 1.7;
}
```

Override Highlight.js background to match your surface:
```css
.hljs {
  background: transparent !important;
}
```

### Right column cards
Cards should scroll independently if the explanations are long:
```css
.explainer-right {
  display: flex;
  flex-direction: column;
  gap: var(--space-md);
  overflow-y: auto;
}
```

---

## Part C: Store the AI response in app state (`app.js`)

After `explainCode()` returns successfully, you need to save the result so other pages can use it. Add a state object at the top of `app.js`:

```js
const state = {
  submittedCode: '',
  bigPicture: '',
  lineByLine: '',
  codeContext: '',
  gap: '',
  instructions: '',
  rewrite: '',
  explanation: '',
  attemptCount: 0,
  solutionRevealed: false,
  currentPage: 'home'
};
```

After a successful `explainCode()` call, populate the state:
```js
state.submittedCode = code;         // the code the user pasted
state.bigPicture = result.bigPicture;
state.lineByLine = result.lineByLine;
state.codeContext = result.codeContext;
state.gap = result.gap;
state.instructions = result.instructions;
```

---

## Part D: Populate the Explainer page and navigate to it (`app.js`)

Write a function called `showExplainerPage()` that:

1. Puts `state.submittedCode` into `#display-submitted-code` as `textContent`
2. Calls `hljs.highlightElement(document.getElementById('display-submitted-code'))` to apply syntax highlighting
3. Puts `state.bigPicture` into `#text-big-picture` as `textContent`
4. Puts `state.lineByLine` into `#text-line-by-line` as `textContent`
5. Calls `showPage('page-explainer')`

Call `showExplainerPage()` after the state is populated (replacing the `console.log` from ticket 02).

---

## Part E: Wire up navigation buttons (`app.js`)

**"← Start Over" button (`#btn-back-home`):**
- On click: call `showPage('page-home')`
- Do NOT reset state yet (state reset happens in ticket 07)

**"Start Learning →" button (`#btn-start-learning`):**
- On click: call `showPage('page-learner')`
- The Learner page will be built in ticket 04 — for now this just switches the visible section

---

## How to test

1. Open `index.html` in browser
2. Paste some JavaScript code into the home page textarea
3. Click "Start Explanation"
4. You should arrive at the Explainer page
5. The left column should show your code with syntax colouring
6. The right column should show two cards with the AI's explanations
7. Both explanations should be readable and in plain English
8. "← Start Over" should return you to the home page
9. "Start Learning →" should navigate to the (currently empty) learner section

---

## Acceptance criteria

- [ ] After clicking "Start Explanation" from the home page, the Explainer page is shown
- [ ] The left column shows the Submitted Code with JavaScript syntax highlighting applied
- [ ] The Highlight.js background matches the card/panel background (not white or grey)
- [ ] The Big Picture card shows a readable paragraph-style explanation
- [ ] The Line-by-Line card shows a detailed walkthrough of the code
- [ ] "← Start Over" navigates back to the home page
- [ ] "Start Learning →" navigates to the learner section (even if it's currently empty)
- [ ] No console errors

---

## Commit message suggestion

```
feat: explainer page — syntax-highlighted code + AI explanation cards
```
