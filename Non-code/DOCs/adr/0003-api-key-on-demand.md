# API key collected on demand, not on app load

The Gemini API key is requested from the user only when they click "Start Explanation" for the first time — not on page load. If a key is already stored in localStorage it is reused silently. The key is never committed to the repository.

We chose this because surfacing the key prompt on page load creates friction before the user has seen any value. Triggering it on the first meaningful action (clicking "Start Explanation") means the user already has context for why the key is needed. Storing in localStorage means the prompt never appears again after the first use, which keeps the recurring experience clean.

## Considered Options

- Prompt on page load: interrupts before the user understands the product.
- Hardcode in config.js (gitignored): risks accidental commits; not appropriate for a public hackathon repo.
- On-demand popup (chosen): minimal friction, zero commit risk, teaches a real localStorage pattern.
