````markdown
# AI Code Learning Companion — Project Context & Build Specification

## 1. Project Overview

### Working concept

A focused web application that helps beginner developers **learn from AI-generated code instead of becoming dependent on it**.

The core philosophy is:

> Use AI to build. Use this tool to understand. Then prove that you understand by rewriting part of the code yourself.

The application is not a general-purpose AI coding assistant.

It does not generate projects, provide coding challenges, or try to replace ChatGPT.

It takes code that the user has already created, potentially with the help of AI, and turns that code into a simple active-learning loop.

### Core loop

```text
Paste Code
    ↓
Understand It
    ↓
Rewrite Part of It
    ↓
Explain Why You Wrote It That Way
    ↓
AI Evaluates
    ↓
Correct → Success
Incorrect → Hint → Try Again
    ↓
After 5 Failed Attempts → AI Provides the Solution
    ↓
Understand the Solution Again
    ↓
Continue
````

The product should remain extremely simple.

---

# 2. Target User

## Primary Persona: The AI-Assisted Beginner Developer

The target user is someone who:

* Has roughly 2–12 months of programming experience.
* Is learning web development or programming.
* Already uses AI tools such as ChatGPT, Claude, Gemini, or Copilot.
* Uses AI to help generate or modify code.
* Can sometimes make projects work without fully understanding the code.
* Does not want AI to become a crutch.
* Wants to understand why generated code works.
* Wants to learn through building real projects rather than studying only theory.
* Wants AI assistance while remaining the person directing the work.
* Wants to eventually understand, modify, debug, and reproduce code independently.

### The user's core tension

They are caught between two extremes.

#### Extreme A — Purely theoretical learning

> "I need to understand everything before I build anything."

Problems:

* Slow.
* Can become overly theoretical.
* Doesn't reflect how modern developers actually work.
* Delays real project building.

#### Extreme B — AI dependency

> "I'll just ask AI to build it."

Problems:

* The project works, but the developer doesn't understand it.
* They struggle to modify the code.
* They struggle to debug it.
* They cannot reproduce the solution independently.
* AI becomes a crutch.

### Desired middle ground

```text
Build with AI
      ↓
Understand what AI produced
      ↓
Rewrite part of it yourself
      ↓
Explain your reasoning
      ↓
Receive feedback
      ↓
Become more independent
```

---

# 3. Core Problem

The product is NOT simply solving:

> "Beginners don't understand code."

The more specific problem is:

> Beginner developers increasingly use AI to generate code, but often consume the output passively. They need a way to turn AI-generated code into an opportunity to actively understand and practice the code, without abandoning AI or falling back into purely theoretical learning.

The product therefore should NOT become:

* A generic AI chatbot.
* A code generator.
* A generic code summarizer.
* A conventional coding challenge platform.
* A replacement for ChatGPT.

Its value comes from the **active learning loop**.

---

# 4. Core Product Philosophy

The product follows one simple method.

## Step 1 — Understand

The user pastes code into the application.

The AI provides exactly two forms of explanation:

### Big Picture Explanation

Explains:

* What the entire code does.
* The overall purpose.
* The major components.
* How those components work together.
* The general flow of the program.

### Line-by-Line Explanation

Explains each relevant line of the code in beginner-friendly language.

The purpose is to give the user enough understanding to work with the code.

---

## Step 2 — Rewrite

The application moves the user to the Learner page.

A section of the original code is removed.

The user must rewrite that section.

They can:

* Reproduce the original solution.
* Write an equivalent solution.
* Use a different approach that achieves the same intended result.

The objective is understanding, not memorization.

There is only ONE learning activity:

> **Rewrite part of the code and explain why you wrote it that way and what your code does.**

There are no additional challenge types.

There are no quizzes.

There are no multiple-choice questions.

There are no separate "challenge modes."

Keep the learning mechanism simple.

---

## Step 3 — Explain

After rewriting the code, the user provides an explanation.

The user answers:

> Why did you write the code this way?

and:

> What does your rewritten code do?

This is an important part of the learning loop.

The system should not only determine whether the code is correct.

It should encourage the user to demonstrate understanding.

---

## Step 4 — AI Evaluation

The AI evaluates the user's submitted code and explanation.

It determines whether:

1. The rewritten code accomplishes the intended purpose.
2. The user's explanation demonstrates understanding.

The AI should accept equivalent solutions.

It should NOT require the user's code to exactly match the original AI-generated code.

---

# 5. Mistake / Hint System

If the user's answer is incorrect:

The AI does **not** immediately provide the answer.

Instead, it gives a hint.

The user returns to the Learner page and tries again.

### Important rule

The AI should never write the solution during the first four failed attempts.

The purpose is to force active thinking.

### After five failed attempts

On the fifth failed attempt, the AI may finally provide the actual solution.

However, this does NOT end the learning loop.

Once the solution is revealed:

```text
AI provides solution
       ↓
User must understand the solution
       ↓
Return to explanation/understanding stage
       ↓
Continue learning
```

The solution is therefore not simply a way for the user to escape the problem.

It becomes another opportunity to understand what happened.

---

# 6. MVP Scope

The MVP should contain only the functionality required for this learning loop.

## MUST HAVE

1. Home page.
2. Code input/editor.
3. Big-picture AI explanation.
4. Line-by-line AI explanation.
5. Learner page.
6. Partial code removal.
7. User code editor.
8. User reasoning/explanation input.
9. AI evaluation.
10. Hint system.
11. Five-attempt counter.
12. Solution reveal after five failed attempts.
13. Success state.
14. Retry flow.
15. Return-to-home flow.

## OPTIONAL

Only after the core system works:

* How-to-use page.
* Better animations.
* Saved sessions.
* Progress history.
* Multiple programming languages.
* User accounts.
* Persistent storage.

These are NOT part of the initial MVP.

---

# 7. Application Structure

The conceptual application contains three primary pages plus modal states.

```text
HOME
EXPLAINER
LEARNER
```

And:

```text
SUCCESS MODAL
ERROR / HINT MODAL
```

The How-To page can be added later.

---

# 8. Home Page

## Purpose

The home page is the starting point.

The user should immediately understand what the application does.

### UI

Simple header.

Main content:

* Large code input/editor.
* Primary button: `Start Explanation`
* Secondary button: `How to Use`

Potential supporting text:

> Paste code you've built with AI. Understand it. Rewrite part of it. Prove you understand it.

The home page should remain extremely simple.

---

# 9. Explainer Page

## Purpose

Help the user understand their code before asking them to rewrite part of it.

### Layout

Two-column setup.

## Left column

Display the original code.

Use a code-editor/IDE-inspired presentation.

## Right column

Two cards.

### Card 1 — Big Picture

The AI explains:

* What the code does overall.
* Why it exists.
* The major components.
* How those components interact.
* The overall execution flow.

### Card 2 — Line-by-Line

The AI explains each line or meaningful section in beginner-friendly language.

The explanation should be clear without unnecessary technical complexity.

### Primary button

`Start Learning`

This moves the user to the Learner page.

---

# 10. Learner Page

The Learner page is the core of the product.

The user is no longer simply reading.

They must actively reconstruct part of the code.

## Structure

### A. Instructions

Clearly tell the user what they need to rewrite.

Example:

> Rewrite the missing section so that the function returns the calculated total.

Keep instructions concise.

---

### B. Code Context

Show the surrounding code.

The user should be able to understand:

* Where the missing section belongs.
* What variables are available.
* What the surrounding code is doing.

---

### C. Code Editor

Provide an editable section where the user writes their replacement code.

The removed section should be clearly identifiable.

---

### D. Explanation Input

Below the code editor, provide a text area.

Prompt:

> Why did you write your code this way, and what does it do?

This should be treated as a first-class part of the exercise.

---

### E. Submit

Primary CTA:

`Check My Answer`

---

# 11. Evaluation Logic

When the user submits, evaluate two things.

## 1. Code correctness

Determine whether the submitted code accomplishes the intended purpose.

The solution does NOT need to match the original code.

For example, if the original uses:

```javascript
const total = price * quantity;
return total;
```

and the user writes an equivalent valid solution, it should be accepted.

## 2. Understanding

Evaluate whether the user's explanation demonstrates that they understand:

* What their code does.
* Why they wrote it that way.
* How it fits into the larger code.

The application should prioritize genuine understanding over exact wording.

---

# 12. Incorrect Answer

If the answer is incorrect:

Display an Error / Hint modal.

The modal should contain:

* A clear indication that another attempt is needed.
* A short explanation of what is wrong, without revealing the answer.
* A useful hint.
* A `Try Again` button.
* A close mechanism.

Example:

> You're close.

> Hint: Think about what value this function needs to return after performing the calculation.

The user then returns to the Learner page.

---

# 13. Five-Attempt Rule

Maintain an attempt counter.

```text
Attempt 1 → Hint
Attempt 2 → Hint
Attempt 3 → Hint
Attempt 4 → Hint
Attempt 5 → Show solution
```

The first four mistakes should produce increasingly useful hints where appropriate.

The AI should not write the answer.

After five failed attempts:

```text
Show solution
      ↓
Explain the solution
      ↓
Return to learning/understanding
```

The exact UX for the post-solution state can remain simple during the MVP.

Do not build a complicated remediation system.

---

# 14. Successful Answer

If the user's code and explanation are acceptable:

Display a Success Modal.

### Contents

Title:

> Challenge Complete

Although the internal page is called `Learner`, the UI can use simple language such as:

> You understood this section and successfully rebuilt it.

Primary button:

`Back to Home`

Potential future button:

`Try Another`

For the MVP, returning home is sufficient.

A separate success page is NOT required.

---

# 15. How-To Page

This can be built after the MVP.

The page should explain the philosophy in a very simple sequence.

```text
1. Build
Use AI to help create something.

2. Understand
Paste the code here and understand what it does.

3. Rewrite
Recreate part of the code yourself.

4. Explain
Explain why you wrote it that way.

5. Learn
Use the feedback to improve your understanding.
```

Core message:

> You do not need to stop using AI. You need to remain the person doing the thinking.

---

# 16. Design Direction

## Overall aesthetic

Modern developer tool.

The interface should feel:

* IDE-inspired.
* Clean.
* Minimal.
* Technical.
* Modern.
* Focused.
* Comfortable for developers.

## Colors

Use approximately 1–2 primary colors.

Avoid:

* Excessive gradients.
* Neon-heavy "AI" aesthetics.
* Excessive colors.
* Generic startup landing-page visuals.

## Typography

Use a modern readable sans-serif font.

Examples:

* Inter.
* Geist.

Use a monospace font for code.

## UI elements

Prefer:

* Cards.
* Panels.
* Code editors.
* Subtle borders.
* Consistent spacing.
* Clear visual hierarchy.
* Strong primary CTA.
* Minimal secondary actions.

Avoid unnecessary visual complexity.

---

# 17. Technical Learning Goals

This project is intentionally being built by a developer who already has basic HTML/CSS knowledge but is a beginner in JavaScript and AI integrations.

The implementation should therefore teach:

## JavaScript

* Variables.
* Functions.
* Objects and arrays where necessary.
* DOM manipulation.
* Event handling.
* Form handling.
* State management.
* Async/await.
* Fetch/API requests.
* JSON.
* Error handling.
* Conditional rendering.
* Modular code.
* Basic application architecture.

The developer should understand the JavaScript being written.

Do not hide everything behind abstractions.

---

# 18. AI Integration

The AI integration can remain simple.

There are two essential AI jobs.

## AI Job 1 — Explain Code

Input:

```text
User code
```

Output:

```text
Big-picture explanation
Line-by-line explanation
```

The response should ideally be structured so the frontend can reliably display the two sections.

---

## AI Job 2 — Evaluate User Understanding

Input:

```text
Original code
Missing section
Expected purpose
User's rewritten code
User's explanation
Attempt number
```

Output should communicate:

```json
{
  "correct": true,
  "understanding": true,
  "feedback": "...",
  "hint": null
}
```

Or:

```json
{
  "correct": false,
  "understanding": false,
  "feedback": "...",
  "hint": "..."
}
```

After five failed attempts, the response can include the solution.

The exact API schema can be determined during implementation.

---

# 19. Important AI Behavior Rules

The AI should behave like a learning facilitator, not a code generator.

### The AI SHOULD:

* Explain clearly.
* Use beginner-friendly language.
* Encourage the user to think.
* Give hints when the answer is incorrect.
* Accept equivalent solutions.
* Evaluate reasoning.
* Avoid unnecessary technical jargon.
* Reveal the solution only after five failed attempts.

### The AI SHOULD NOT:

* Generate a challenge unrelated to the user's code.
* Create multiple challenge types.
* Immediately solve the user's mistake.
* Give the complete answer after the first error.
* Require exact reproduction of the original code.
* Turn the product into a chatbot.
* Generate entire projects.
* Add unnecessary complexity.

---

# 20. User Flow

The entire MVP should follow this flow:

```text
HOME
  |
  | Paste code
  ↓
EXPLAINER
  |
  | Big picture explanation
  | Line-by-line explanation
  |
  | Start Learning
  ↓
LEARNER
  |
  | Read instructions
  | View code context
  | Rewrite missing section
  | Explain reasoning
  |
  | Check My Answer
  ↓
AI EVALUATION
  |
  ├── Correct
  │      ↓
  │   SUCCESS MODAL
  │      ↓
  │   HOME
  │
  └── Incorrect
         ↓
     HINT MODAL
         ↓
       LEARNER
         |
         | Repeat
         ↓
   After 5 failed attempts
         ↓
   AI reveals solution
         ↓
   User understands solution
         ↓
   Continue learning
```

There is only one learning mechanism:

> **Rewrite a section of code and explain why you wrote it and what it does.**

---

# 21. MVP Success Metric

The primary success metric is the learning loop itself.

The question is:

> **Can a beginner take AI-generated code, understand it, rewrite part of it, explain their reasoning, receive feedback, and successfully complete the loop?**

The product does not need:

* Hundreds of users.
* A social network.
* A leaderboard.
* Accounts.
* Payments.
* Complex analytics.

A few real people successfully using the loop is meaningful validation.

---

# 22. Development Strategy

The development process should mirror the product philosophy.

The developer is using AI assistance to build the project, but should understand the code being produced.

Do NOT ask AI to generate the entire project at once.

Instead:

```text
Understand
    ↓
Build a small piece
    ↓
Run it
    ↓
Inspect it
    ↓
Ask questions
    ↓
Fix problems
    ↓
Continue
```

The developer should be able to explain the important parts of the application.

---

# 23. Development Phases

The phases should be structured from **hardest and highest-risk → easiest and lowest-risk**.

This is intentional.

The most uncertain and technically important work should happen first, while there is still plenty of time to solve problems.

---

## Phase 1 — AI Integration / Technical Risk Validation

### Goal

Prove that the hardest technical part works before spending significant time polishing the application.

Build the smallest possible test that:

1. Accepts code.
2. Sends it to the AI API.
3. Receives a response.
4. Produces:

   * Big-picture explanation.
   * Line-by-line explanation.
5. Evaluates a user's rewritten code.
6. Produces:

   * Correct/incorrect result.
   * Hint.
   * Solution after five failed attempts.

### Why first?

If the AI interaction does not work reliably, the rest of the application does not matter.

Do not build beautiful UI around an unproven AI workflow.

---

# Phase 2 — Core Application Logic / State

### Goal

Build the actual learning loop with mock or test data.

Implement:

* Code input state.
* Original code state.
* Explanation state.
* Missing-code-section state.
* User answer state.
* User reasoning state.
* Attempt counter.
* Evaluation state.
* Hint state.
* Success state.
* Navigation/state transitions.

At the end of this phase, the application should be logically capable of:

```text
Home
→ Explainer
→ Learner
→ Submit
→ Hint
→ Retry
→ Five failures
→ Solution
→ Success
```

Even if the UI is ugly.

---

# Phase 3 — Frontend Architecture and Pages

Build the actual pages:

```text
Home
Explainer
Learner
```

And:

```text
Success Modal
Error / Hint Modal
```

Connect them to the application state created in Phase 2.

The focus is functionality, not visual polish.

---

# Phase 4 — Code Editor and Code Presentation

Implement the code-focused UI.

Requirements:

* Code input.
* Syntax highlighting where practical.
* Readable code display.
* Editable learner section.
* Clear indication of missing code.
* IDE-inspired presentation.

Do not spend excessive time making a full-featured IDE.

The editor only needs to support the product workflow.

---

# Phase 5 — Evaluation and Edge Cases

Test the core learning loop aggressively.

Test:

* Correct solution.
* Incorrect solution.
* Equivalent solution.
* Empty answer.
* Poor explanation.
* Correct code with poor reasoning.
* Incorrect code with confident reasoning.
* Multiple failed attempts.
* Fifth failed attempt.
* Solution reveal.
* Retry after hint.
* Returning home.
* API failure.
* Invalid AI response.
* Long code.
* Very short code.

The goal is reliability.

---

# Phase 6 — Visual Design and UX Polish

Only after the core system works:

Improve:

* Typography.
* Spacing.
* Cards.
* Borders.
* Colors.
* Button hierarchy.
* Code presentation.
* Modal design.
* Loading states.
* Error states.
* Responsive behavior.

Keep the visual language consistent with a modern IDE.

Use 1–2 primary colors.

---

# Phase 7 — How-To Page and Final Polish

Only at the end:

* Build the How-To page.
* Add subtle transitions.
* Improve micro-interactions.
* Clean up copy.
* Remove unnecessary UI.
* Fix bugs.
* Test the complete user journey.

If time is limited, the How-To page should be sacrificed before the core learning loop.

---

# 24. Definition of Done

The MVP is finished when a real user can:

1. Open the application.
2. Paste JavaScript code.
3. Start the explanation.
4. Receive a big-picture explanation.
5. Receive a line-by-line explanation.
6. Start learning.
7. See part of the code removed.
8. Understand the surrounding code.
9. Rewrite the missing section.
10. Explain why they wrote it that way.
11. Submit their answer.
12. Receive AI evaluation.
13. Receive a hint if incorrect.
14. Retry.
15. Continue receiving hints for failed attempts.
16. Receive the actual solution after five failed attempts.
17. Understand the revealed solution.
18. Complete the learning loop.
19. See the success state.
20. Return to the home page.

If these work reliably, the MVP is DONE.

Do not delay completion to add unrelated features.

---

# 25. Explicitly Out of Scope

Do NOT build these during the MVP:

* Authentication.
* User accounts.
* Database.
* Payments.
* Subscriptions.
* Leaderboards.
* Social features.
* Public profiles.
* Complex analytics.
* Advanced gamification.
* Multiple challenge types.
* Quizzes.
* Multiple-choice questions.
* Flashcards.
* AI-generated projects.
* Generic AI chatbot.
* VS Code extension.
* Browser extension.
* Collaborative coding.
* Full code execution sandbox.
* Multiple programming languages.
* Complex progress dashboards.

These can be future ideas.

They are not part of this hackathon MVP.

---

# 26. Future Possibilities

Only after the core product has proven useful could the application potentially expand into:

* Multiple programming languages.
* Persistent learning history.
* Progress tracking.
* Difficulty adjustment.
* VS Code integration.
* Browser extension.
* Project-level learning.
* Personalized learning paths.
* More advanced code verification.

None of these should influence the MVP architecture unnecessarily.

---

# 27. Core Product Differentiation

Do NOT position the product simply as:

> "AI that explains code."

That already exists everywhere.

The stronger positioning is:

> **An active-learning companion for beginner developers who use AI to code but want to actually understand what they build.**

The distinction is the workflow.

### Typical AI coding workflow

```text
Ask AI
   ↓
Receive code
   ↓
Copy code
   ↓
It works
   ↓
Move on
```

### This product's workflow

```text
Use AI
   ↓
Receive code
   ↓
Understand it
   ↓
Rewrite part of it
   ↓
Explain your reasoning
   ↓
Receive feedback
   ↓
Try again if necessary
   ↓
Understand
```

The product is not trying to make AI more powerful.

It is trying to make the **human using AI more capable**.

---

# 28. Guiding Principle for Every Feature

Before implementing any feature, ask:

> **Does this directly help the user understand and independently work with AI-generated code?**

If yes, consider it.

If no, remove it.

The product should remain small.

The strength of the project is not the number of features.

The strength is the clarity of the learning loop:

```text
UNDERSTAND
    ↓
REWRITE
    ↓
EXPLAIN
    ↓
VERIFY
    ↓
LEARN
```

That is the product.

```
```
