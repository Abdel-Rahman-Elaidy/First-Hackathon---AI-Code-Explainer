Now explain what did this skill just do? why should i use? what is a spec? and anything else needed to be understood. # AI Code Learning Companion — Product Spec

## Problem Statement

Beginner developers (2–12 months experience) increasingly use AI tools to generate code. The code often works, but the developer doesn't understand it — they can't modify it, debug it, or reproduce it independently. Purely theoretical learning is too slow; pure AI dependency creates a crutch. There is no tool that sits in the middle: one that takes AI-generated code the user already has and turns it into an active understanding exercise.

---

## Solution

A focused web application that implements a single, repeatable Learning Loop:

> Paste code you built with AI → Understand it → Rewrite the part the AI removed → Explain your reasoning → Receive AI feedback → Retry with hints if wrong → See the Solution after 5 failures (then prove you understood it) → Complete the loop.

The app is not a chatbot, a code generator, or a quiz platform. Its entire value is in this loop.

---

## User Stories

### Home Page

1. As a beginner developer, I want to paste my Submitted Code into a large, clear input area on the Home page, so that I can begin a Learning Loop without needing to navigate anywhere first.
2. As a beginner developer, I want to click a single "Start Explanation" button to begin, so that the entry point to the Learning Loop is obvious and unambiguous.
3. As a first-time user, I want to be prompted for my Gemini API key when I click "Start Explanation" for the first time, so that I understand why the key is needed and can provide it in context.
4. As a returning user, I want the app to use my previously saved API key automatically, so that I never have to enter it more than once.
5. As a user, I want the "Start Explanation" button to show a spinner and disable itself while the AI is working, so that I know my request is being processed.
6. As a user, I want to see a clear inline error message if the AI call fails (e.g. wrong API key, network error), so that I can fix the problem without losing my Submitted Code.

### Explainer Page

7. As a beginner developer, I want to see my Submitted Code displayed with syntax highlighting on the left side of the Explainer page, so that it is easy to read before I study the explanations.
8. As a beginner developer, I want to read a Big Picture Explanation of my Submitted Code, so that I understand what the whole program does before looking at individual lines.
9. As a beginner developer, I want to read a Line-by-Line Explanation of my Submitted Code, so that I understand what each meaningful section does in plain language.
10. As a beginner developer, I want both explanations to use beginner-friendly language without unnecessary jargon, so that I can follow along regardless of my current knowledge level.
11. As a user, I want a "Start Learning" button on the Explainer page, so that I can move to the Learner page when I feel ready.

### Learner Page

12. As a beginner developer, I want to see a clear instruction telling me exactly what I need to rewrite, so that I understand the task without guessing.
13. As a beginner developer, I want to see the Code Context (the Submitted Code with the Gap replaced by a comment placeholder), so that I understand where the Gap belongs and what variables and surrounding logic are available.
14. As a beginner developer, I want a code editor textarea where I write my Rewrite, so that I have a dedicated, monospace-styled space to reconstruct the Gap.
15. As a beginner developer, I want an Explanation textarea below the code editor prompting "Why did you write your code this way, and what does it do?", so that I am reminded that my reasoning is part of the exercise.
16. As a user, I want to see an Attempt Counter (e.g. "Attempt 1 of 5") on the Learner page, so that I know how many tries I have remaining before the Solution is revealed.
17. As a user, I want a "Check My Answer" button that disables and shows a spinner while the AI evaluates my submission, so that I know evaluation is in progress.
18. As a user, I want to receive an inline error message if the evaluation API call fails, so that I can retry without losing my Rewrite or Explanation.

### Evaluation & Hints

19. As a beginner developer, I want the AI to accept a Rewrite that is functionally equivalent to the original Gap — not just an exact copy — so that I am rewarded for understanding rather than memorisation.
20. As a beginner developer, I want both my Rewrite and my Explanation to be evaluated, so that I cannot pass by writing correct code without demonstrating understanding.
21. As a user who submitted an incorrect Attempt, I want to see a Hint modal that tells me what was wrong (without revealing the answer) and gives me a targeted hint, so that I can try again with new understanding.
22. As a user on Attempt 2, I want a slightly more specific hint than I received on Attempt 1, so that each retry gives me more guidance as I struggle.
23. As a user on Attempt 3, I want an even more specific hint that narrows down the exact concept I am missing, so that I have a real chance of succeeding.
24. As a user on Attempt 4, I want a hint that almost points me at the answer without writing it, so that I still have to think but am not stuck.
25. As a user who has failed 5 Attempts, I want to see the Solution revealed in the modal along with a clear explanation of why it works, so that I can study it and understand what I missed.
26. As a user who has seen the Solution, I want to be returned to the Learner page and asked to complete one final Rewrite, so that viewing the Solution is a learning step — not an escape.
27. As a user completing the post-Solution Rewrite, I want the Learner page to clearly communicate that the Solution has been revealed and this is my final required Rewrite, so that I understand the context of this attempt.
28. As a user completing the post-Solution Rewrite, I want to be able to keep trying until I succeed — with no 5-attempt limit on this final Rewrite — so that I can always complete the Learning Loop.

### Success State

29. As a user who has passed evaluation, I want to see a Success modal confirming I completed the Learning Loop, so that my achievement is acknowledged.
30. As a user on the Success modal, I want a "Back to Home" button that resets all state and returns me to the Home page, so that I can start a new Learning Loop with different code.

### Settings / API Key

31. As a user, I want a way to update or remove my saved API key, so that I can change keys if needed without clearing my entire browser storage.

---

## Implementation Decisions

### Architecture

- **Single HTML file SPA.** All three pages (Home, Explainer, Learner) are `<section>` elements inside one `index.html`. JavaScript shows and hides them by toggling visibility. No router, no page reloads.
- **Two JavaScript modules.** `ai.js` owns all communication with the Gemini API. `app.js` owns state, navigation, and DOM updates. This separation means AI call failures are always diagnosed in one place.
- **No build step.** Pure HTML, CSS, and JavaScript. Third-party libraries loaded via CDN only.

### State Shape

The application holds a single state object in memory in `app.js`. Key fields:

```js
// Sketch only — not final code
{
  submittedCode: "",        // the code the user pasted
  bigPicture: "",           // AI-generated big picture explanation
  lineByLine: "",           // AI-generated line-by-line explanation
  codeContext: "",          // submittedCode with Gap replaced by comment placeholder
  gap: "",                  // the exact section the AI removed
  instructions: "",         // what the user is asked to rewrite
  rewrite: "",              // the user's current Rewrite
  explanation: "",          // the user's current Explanation
  attemptCount: 0,          // 0–5; does not reset after solution reveal
  solutionRevealed: false,  // true after 5 failed Attempts
  currentPage: "home"       // "home" | "explainer" | "learner"
}
```

### AI Integration

- **Model:** `gemini-2.0-flash`
- **API key:** Retrieved from `localStorage` on every call. Never committed to the repo.
- **Response format:** Both AI calls instruct the model to return only valid JSON. Responses are parsed with `JSON.parse()` inside a `try/catch`. A parse failure surfaces an inline error message.
- **AI Job 1 — Explain Code.** Sends the Submitted Code. Receives: `bigPicture`, `lineByLine`, `codeContext` (with Gap placeholder), `gap` (the removed section verbatim), `instructions` (task description for the user).
- **AI Job 2 — Evaluate Answer.** Sends: original Submitted Code, the Gap, the instructions, the user's Rewrite, the user's Explanation, and the current Attempt number. Receives: `correct` (bool), `understanding` (bool), `feedback` (string), `hint` (string or null), `solution` (string or null — only populated on Attempt 5+ when incorrect).

### Hint Progression

Hints escalate across Attempts. The Attempt number is sent to the AI so it can calibrate how much to reveal:
- Attempt 1: vague nudge toward the right concept
- Attempt 2: more targeted to the specific mistake
- Attempt 3: narrows to the exact concept missing
- Attempt 4: near-answer without writing it
- Attempt 5: Solution revealed with explanation (per ADR-0002)

### Post-Solution Rewrite (ADR-0002)

When `solutionRevealed` is `true`, the Learner page renders in a distinct "post-solution" mode. The Attempt Counter is no longer shown. The user's Rewrite is evaluated the same way, but there is no attempt limit. The loop only closes on a passing evaluation.

### Dual Evaluation (ADR-0001)

`correct` AND `understanding` must both be `true` for an Attempt to pass. Either being `false` is a failed Attempt. The Hint modal always communicates which part failed.

### Syntax Highlighting

Highlight.js loaded via CDN. Applied to all read-only code displays (Submitted Code on the Explainer page, Code Context on the Learner page). Not applied to the user's Rewrite textarea (editable, monospace-styled).

### Loading States

When an AI call is in flight: the triggering button's `innerHTML` changes to a spinner, its `disabled` attribute is set to `true`. On completion (success or error), the button is restored to its original label and re-enabled.

### Error Handling

Network errors and JSON parse failures surface as an inline error message directly below the button that triggered the call. The user's input (Submitted Code or Rewrite/Explanation) is preserved so they can retry immediately.

---

## Testing Decisions

There is no automated test framework for the MVP. This is intentional — the project is beginner-authored under hackathon time constraints, and the codebase is small enough that manual testing covers the risk surface adequately.

**What makes a good manual test:** test observable behaviour from the user's perspective — what appears on screen, what state changes — not internal function calls or variable values.

**The primary test seam is `ai.js`.** All AI calls flow through two functions (`explainCode` and `evaluateAnswer`). To test the rest of the app in isolation, these functions can be temporarily replaced with functions that return hardcoded mock JSON. This allows the full Learning Loop to be exercised without making real API calls.

**Manual test checklist:**

- Full happy path: paste code → explanations → Learner → correct Rewrite + Explanation → Success modal → Home
- Incorrect Rewrite (code wrong, explanation right) → fail
- Correct Rewrite (code right, explanation weak) → fail
- 4 incorrect Attempts → 4 progressively more specific hints
- 5th incorrect Attempt → Solution revealed
- Post-solution Rewrite: keep retrying until correct → Success modal
- Empty Rewrite submitted → validation error, no API call
- Wrong API key → inline error, Submitted Code preserved
- Network failure mid-evaluation → inline error, Rewrite preserved
- Valid equivalent Rewrite (not identical to Gap) → accepted

---

## Out of Scope

Per the project spec, the following are explicitly not part of the MVP:

- User accounts or authentication
- Persistent storage of Learning Loop history
- Multiple programming languages (MVP supports JavaScript only)
- Quizzes, multiple-choice questions, or other challenge types
- Multiple sections removed per Learning Loop
- AI-generated projects or code generation
- Collaborative features
- VS Code or browser extensions
- Progress dashboards or analytics
- "How to Use" page (deferred to post-MVP)
- Saved sessions
- Leaderboards or social features

---

## Further Notes

- The project is a hackathon submission. Multiple meaningful commits are required. Each development phase (scaffold, AI integration, state machine, pages, editor, edge cases, polish) should correspond to at least one commit.
- The README must disclose AI usage and credit all external resources (Highlight.js, Google Fonts, Gemini API).
- The developer is writing all code themselves, guided by this spec. No agent will write code on their behalf.
- Significant AI usage during development must be disclosed in the submission per hackathon rules.
