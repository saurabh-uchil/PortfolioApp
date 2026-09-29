# AGENTS.md

## Project

This is a professional lawyer portfolio website built with Next.js,
React, and TypeScript.

The goal is a polished, modern, editorial, trustworthy experience.
Avoid generic SaaS, developer-portfolio, or overly decorative styling.

## Design Reference

The primary visual reference for the homepage is:

`docs/designs/ui-sample.png`

Always inspect this reference before implementing or significantly
changing homepage UI.

Use it as the source of truth for the visual direction, including:

- Layout and composition
- Typography hierarchy
- Spacing
- Colours
- Imagery
- Visual proportions
- Overall aesthetic

Do not introduce unrelated visual styles without approval.

## Architecture

UI components should generally follow:

ComponentName/
├── ComponentName.tsx
├── ComponentName.data.ts
└── styles.ts

- `.tsx` → UI and component logic
- `.data.ts` → static content/configuration
- `styles.ts` → component-specific styles


Prefer small, reusable, focused components over large monolithic
components.

Reuse existing components when appropriate.

## Development Workflow

For each user story:

1. Inspect the existing code and relevant design/specification.
2. Identify the files and components involved.
3. Propose an implementation plan.
4. Wait for approval before making significant changes.
5. Implement only the approved scope.
6. Run appropriate validation.
7. Report what changed and what was validated.

Do not expand the scope without approval.

## Design Principles

Maintain consistency across the entire website.

Prioritise:

- Strong typography
- Clear visual hierarchy
- Generous whitespace
- Professional imagery
- Restrained colours
- Subtle interactions
- Responsive layouts
- Accessibility

Avoid unnecessary:

- Gradients
- Glassmorphism
- Heavy shadows
- Excessive rounded cards
- Flashy animations
- Decorative UI

## Content

Never invent professional information such as:

- Qualifications
- Employers
- Clients
- Awards
- Case results
- Professional memberships

Use placeholders when real content has not been provided.

## Responsive & Accessibility

The website must work across desktop, tablet, and mobile.

Use semantic HTML, accessible controls, keyboard navigation,
appropriate labels/alt text, sufficient contrast, and respect
`prefers-reduced-motion`.

## Code Quality

Prefer clean, readable, strongly typed TypeScript.

Avoid unnecessary dependencies, duplicated logic, `any` where
unnecessary, dead code, and unrelated refactoring.

Do not expose secrets, API keys, or credentials.

## Validation

Before considering a change complete, run the relevant:

- TypeScript/type checks
- ESLint
- Tests, when applicable
- Production build, when appropriate

For UI work, visually compare the result with the design reference.

Never claim a check passed unless it was actually run.

## Git

Keep changes focused and commits meaningful.

Do not modify unrelated files or commit secrets.

## AI Behaviour

Act as a senior engineering assistant.

Understand → Inspect → Plan → Get approval → Implement → Validate → Report.

The user makes the final product, design, and architectural decisions.