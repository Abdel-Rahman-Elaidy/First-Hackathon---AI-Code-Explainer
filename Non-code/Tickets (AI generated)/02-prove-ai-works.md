# 02 — Prove the AI Works (explainCode)

**What to build:** Implement the `explainCode` function in `ai.js` and wire up the Home page so that clicking "Start Explanation" — after collecting the API key if needed — calls Gemini and proves the AI integration works. At the end of this ticket, you paste code, click the button, and see structured JSON appear in the browser console. No UI display of results yet — that comes in ticket 03.

**Blocked by:** 01 — Project Scaffold

**Status:** ready

---

## Why this comes second

This is the highest-risk part of the entire project. If calling Gemini doesn't work, nothing else matters. Proving it works early — before any UI is polished — means you have time to fix problems.

---

## Part A: Build the Home page UI in `index.html`

Inside `<section id="page-home">`, add:

A header area:
- App name/logo text (e.g. "CodeUnlock" or whatever you want to call it)
- A short tagline: *"Paste code you built with AI. Understand it. Rewrite it. Prove you get it."*

A main content area:
- A large `<textarea>` for pasting code
  - `id="input-code"`
  - `placeholder="Paste your JavaScript code here..."`
  - Monospace font (use `var(--font-mono)`)
  - Tall enough to show ~15 lines
- A primary button: `id="btn-start"`, text: `Start Explanation`
- A `<p>` element for error messages: `id="home-error"`, hidden by default

---

## Part B: Build the API key modal in `index.html`

Inside `<div id="modal-api-key">`, add:

- A modal box (`.modal-box` or similar)
- Title: `Enter your Gemini API Key`
- A short explanation: *"Your key is saved in your browser only. It is never sent anywhere except directly to the Gemini API."*
- An `<input type="password">` with `id="input-api-key"` and placeholder `Paste your API key here`
- A primary button: `id="btn-save-api-key"`, text: `Save & Continue`
- A link or small text below: `Get a free Gemini API key →` linking to `https://aistudio.google.com/app/apikey`

---

## Part C: Implement `showPage()` in `app.js`

This is the navigation function. All page transitions in the app use it.

```js
function showPage(pageId) {
  // 1. Find all elements with id starting with "page-"
  // 2. Remove the "active" class from all of them
  // 3. Add the "active" class to the element with id === pageId
}
```

Call `showPage('page-home')` at the bottom of `app.js` so the home page is visible on load.

---

## Part D: Implement the API key popup flow in `app.js`

Wire up the "Start Explanation" button click:

```
User clicks "Start Explanation"
  ↓
Is localStorage.getItem('gemini-api-key') truthy?
  YES → proceed to Part E (call explainCode)
  NO  → open the API key modal (add "open" class to #modal-api-key)
```

Wire up the "Save & Continue" button in the modal:
```
User clicks "Save & Continue"
  ↓
Read the value from #input-api-key
  ↓
Is it empty? → show a validation message inside the modal, stop
  ↓
localStorage.setItem('gemini-api-key', value)
  ↓
Close the modal (remove "open" class)
  ↓
Proceed to Part E (call explainCode)
```

---

## Part E: Implement `explainCode()` in `ai.js`

This function must:

1. Accept two arguments: `code` (string) and `apiKey` (string)
2. Build this exact prompt and send it to Gemini:

```
You are a coding tutor for beginner developers (2-12 months experience).

A user has pasted the following JavaScript code. Your job is to help them understand it and then practice rewriting part of it.

Please do the following:
1. Choose the single most instructive section to remove — a function body, a key algorithm, a loop, or a meaningful block. This should be the part that teaches the most when rewritten.
2. Provide a beginner-friendly explanation of the whole code.
3. Provide a line-by-line explanation of each meaningful line or block.

Return ONLY valid JSON with no extra text, no markdown, no code fences. The JSON must have exactly these fields:
{
  "bigPicture": "A clear explanation of what the entire code does, its purpose, major components, and how they work together. Max 150 words. Beginner-friendly.",
  "lineByLine": "A walkthrough of each meaningful line or block. Use plain language. Format as a readable paragraph or short sections — not a bulleted list.",
  "codeContext": "The full original code, but with the chosen section replaced by this exact comment: // ✏️ YOUR CODE GOES HERE",
  "gap": "The exact verbatim code that was removed — character for character.",
  "instructions": "A single clear sentence telling the user what to rewrite. Example: Rewrite the section that calculates and returns the total price."
}

Here is the code:

[CODE GOES HERE]
```

Replace `[CODE GOES HERE]` with the actual `code` argument.

3. Use `fetch()` to call the Gemini API:
   - URL: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`
   - Method: `POST`
   - Headers: `{ 'Content-Type': 'application/json' }`
   - Body: a JSON object in Gemini's format (see below)

The Gemini request body format:
```json
{
  "contents": [
    {
      "parts": [
        { "text": "YOUR FULL PROMPT HERE" }
      ]
    }
  ]
}
```

4. Extract the text from the response:
```js
const text = data.candidates[0].content.parts[0].text;
```

5. Parse it with `JSON.parse(text)` inside a `try/catch`
6. Return the parsed object on success
7. Throw a descriptive Error on failure (network error, non-OK response, parse failure)

---

## Part F: Wire it all together in `app.js`

When the API key is confirmed and the user's code is ready:

1. Read the code from `#input-code`
2. Validate it is not empty — if empty, show an error in `#home-error` and stop
3. Disable `#btn-start` and change its text to a loading indicator (e.g. `Analysing...`)
4. Call `explainCode(code, apiKey)` with `await`
5. `console.log()` the result so you can see the JSON in DevTools
6. Re-enable `#btn-start` and restore its text
7. If it throws, catch the error and show a message in `#home-error`

For now, step 5 just logs — displaying the result in the UI comes in ticket 03.

---

## How to test

1. Open `index.html` in a browser
2. Go to [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey) and create a free API key
3. Paste some JavaScript code into the textarea (e.g. a simple function you wrote before)
4. Click "Start Explanation"
5. The API key modal should appear (first time only)
6. Paste your key and click "Save & Continue"
7. The button should show a loading state
8. Open DevTools → Console
9. You should see a JSON object with `bigPicture`, `lineByLine`, `codeContext`, `gap`, `instructions`
10. Click "Start Explanation" again — the modal should NOT appear (key is already saved)

---

## Acceptance criteria

- [ ] Home page renders with a textarea and "Start Explanation" button
- [ ] Clicking "Start Explanation" with no API key saved opens the API key modal
- [ ] Entering and saving a key closes the modal and stores it in `localStorage`
- [ ] Clicking "Start Explanation" again does NOT show the modal (key already saved)
- [ ] An empty textarea shows an inline error message and does not call the API
- [ ] The button shows a loading state while the API call is in flight
- [ ] A successful call logs a valid JSON object to the console with all 5 fields
- [ ] A wrong API key shows an inline error message and re-enables the button
- [ ] The code in the textarea is NOT cleared after a failed call

---

## Commit message suggestion

```
feat: explainCode AI integration + API key popup flow
```
