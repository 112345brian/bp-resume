# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS with a small vanilla JS file (`projects.js`) that renders project cards. Hosted on GitHub Pages from the `main` branch of 112345brian/bp-resume (https://112345brian.github.io/bp-resume/). No build step.

## Users

Two audiences, weighted equally: (1) hiring managers for data and policy analyst roles, (2) engineering leads and employers for software roles. Both skim for under a minute, often on a phone, and follow links to GitHub and PyPI to check claims.

## Product Purpose

A live public resume for Brian Powers: JHU M.S. student (Data Analytics and Policy, expected May 2027) with public-benefits and survey-research experience, who also publishes Python libraries on PyPI and Obsidian plugins. Success is a visitor who can state, within 20 seconds, who he is, what his strongest proof is, and how to reach him.

## Positioning

An analyst whose software work is rigorous and whose analysis is reproducible: explicit results over silent failure (the commandport/lifecycle-runner/proclaunch libraries), and Quarto/renv pipelines over one-off analyses.

## Operating Context

Content comes from Brian's most recent resume (job-apps/u-s-department-of-treasury/resume.pdf in E:\MEGA\work) and his public GitHub and PyPI accounts (112345brian). The employer-facing portfolio lives in E:\MEGA\work\portfolio (research-notes, projects, coursework, writing-samples, code-samples); its files are not published.

## Capabilities and Constraints

- Public repos link out to GitHub; PyPI packages link to pypi.org (commandport, lifecycle-runner, proclaunch, launch-runner; the last is a meta-package). All four are developed in the launch-runner monorepo.
- Must not publish phone number, health records, transcripts, references, cover letters, or application targets. The knowledge-acceptance/home/MEGA fixture holds private health data and is never used.
- Unpublished portfolio folders and blank-description repos are to be cut or curated down to roughly six featured items, not shown as unlinked cards.
- Open decisions: email address to publish (user chose "email + PDF" but has not supplied the address); which resume PDF to offer for download.

## Evidence on Hand

HopHacks 2026 1st place (data centers and county economics, ~3,090 matched counties); PyPI packages with release history; LAPD post-PredPol study; walkability/obesity mediation analysis across 364 MSAs; Reddit text analysis (85,000+ posts); employment history in the resume. Not available: testimonials, install counts, screenshots of the redesign projects.

## Product Principles

1. Lead with proof, not inventory: the few strongest credentials outrank a complete repo list.
2. Both audiences find their track in one glance, without either feeling like an afterthought.
3. Every claim is checkable: a link, a number, or a dated entry.
4. Private material stays private; publish by choice, not by default.

## Accessibility & Inclusion

Readable on a phone, meets WCAG AA contrast in light and dark, usable without JavaScript for core resume content.
