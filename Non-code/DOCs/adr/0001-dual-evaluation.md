# Dual evaluation: both Rewrite and Explanation must pass

The app evaluates two things per Attempt: whether the Rewrite is functionally correct, and whether the Explanation demonstrates genuine understanding. Both must pass for the Attempt to succeed. A correct Rewrite with a weak Explanation is a failed Attempt, and vice versa.

We chose this because the core product thesis is that understanding — not just working code — is the outcome. If only the Rewrite were evaluated, a user could copy a solution they found elsewhere without learning anything. The Explanation is the proof of understanding, not a bonus.

## Considered Options

- Code only: simpler to implement and evaluate, but misses the product's core purpose.
- Explanation only: would not verify that the user can actually write working code.
- Both required (chosen): enforces the full understanding loop the product is built around.
