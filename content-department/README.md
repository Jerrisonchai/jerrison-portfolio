# Content Department — Jerrison Portfolio

## Structure

```
content-department/
├── README.md                    ← This file
├── resume-content.md            ← COMPOSED final resume content (what goes on the site)
├── raw/
│   ├── resume-2023.txt          ← Extracted from PDF (2023 resume)
│   ├── complete-career-timeline.md ← Merged: 2023 resume + 2024-2026 work log
│   └── skills-inventory.md      ← All skills extracted from both sources
└── (future)
    ├── projects-showcase.md     ← 12 AI project descriptions
    └── metrics.json             ← Chart-able metrics data
```

## Rules

1. **raw/** = Pure extraction. No editing, no embellishment. Source of truth.
2. **resume-content.md** = Composed from raw. Concise, interesting, truthful.
3. Any update to Jerrison's career → update raw/ first, then recompose.

## Sources

- `resume-2023.txt`: Extracted from `Jerrison_Resume_2023.pdf` (OneDrive)
- `work-log-2024-2026`: Extracted from Jerrison's email (2026-06-27), saved at `../data/resume-update-email.txt`
