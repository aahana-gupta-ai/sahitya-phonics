# Sahitya

**A low-friction phonics learning system designed for classrooms and families that may not have access to specialised literacy support.**

Sahitya began with a practical constraint: many children who need structured literacy support are not going to download another app, attend specialist sessions, or use expensive software.

So I designed the learning system around tools families and teachers already use.

## The idea

Sahitya combines structured phonics practice, short lessons, printable resources, and simple teacher/parent workflows. My broader work on the project has included writing phonics songs and designing materials intended to make repeated practice easier to deliver at scale.

## What this repository demonstrates

- Example phonics lessons organised by teaching unit
- Written-pattern practice
- Local progress history
- Educational observation examples
- Lesson-text and fictional progress exports

This public repository does **not** diagnose dyslexia and should not be used as a clinical screening tool.

## Run the demonstration

```bash
python3 scripts/serve.py
```

Then open `http://127.0.0.1:8000`.

## What I care about here

The technical question is not just “can I make a literacy app?” It is: **how little technology can a useful intervention require?**

For Sahitya, accessibility often means reducing friction rather than adding features.

## Repository structure

- `src/` — demonstration interface
- `data/` — example lessons and fictional progress data
- `tests/` — behaviour and data-integrity tests
- `docs/` — architecture, accessibility, provenance, and workflow notes
- `schemas/`, `examples/` — export formats

## Provenance

Sahitya’s educational concept, content direction, and project work are mine. The current public demo scaffolding was created later with AI-assisted development tools and should not be confused with the original classroom implementation. See `docs/PROVENANCE.md` and `NOTICE.md`.

**Themes:** literacy · phonics · accessibility · education · low-friction design
