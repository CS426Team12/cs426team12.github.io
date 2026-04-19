---
layout: about
title: About
permalink: /
subtitle: CS 426 Senior Project in Computer Science, Spring 2026, @ UNR, CSE Department

selected_papers: true # includes a list of papers marked as "selected={true}"
social: false # includes social icons at the bottom of the page

team:
  - "Angelo Calingo"
  - "Joshua Matni"
  - "Kyla Trotter"
  - "Ploy Wandeevong"

instructors:
  - "Vinh Le"
  - "David Feil-Seifer"

advisors:
  - "James McDuffie (Amazon Web Services)"
  - "Dr. Ben Teitelbaum (Carson Tahoe Ear, Nose, & Throat)"

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit:  # leave blank to include all the blog posts
---


# AI-Assisted ENT Triage System

CS 426 Senior Project in Computer Science, Spring 2025, @ UNR, CSE Department

Team 12: {{ page.team | join: ", " }}

Instructors: {{ page.instructors | join: ", " }}

Advisors: {{ page.advisors | join: ", " }}

ENT clinics often face long wait times, inconsistent triage decisions, and heavy administrative workloads that can delay care for patients who need urgent attention. Our project addresses these challenges by developing an AI-assisted triage system that makes the intake process more consistent, efficient, and accessible. When patients call, the system guides them through simple questions to gather key information about their symptoms. It then produces a clear summary, highlights potential concerns, and suggests how urgent the case may be. Clinic staff can view and manage this information through an easy-to-use dashboard, helping them prioritize patients, reduce manual work, and make more informed scheduling decisions.

Patients call in via Twilio and Amazon Lex, which captures symptoms through structured triage questions. The AI Integration Service processes each transcript, summarizing the call, classifying urgency, extracting flags, and validating results. The Clinic Dashboard then presents this output for staff review, appointment scheduling, and case management. Each stage is decoupled, with data flowing from phone intake through AI processing to clinical output. The AI triage logic uses a fine-tuned model trained on ENT-specific datasets. All components communicate through RESTful APIs, with token-based authentication ensuring secure access to patient data.

Clinic staff can review all incoming cases through a dashboard, built with a React frontend and FastAPI backend, that displays patients organized by urgency level, allowing them to quickly identify who needs immediate attention. Staff maintain full control over the system, with the ability to review, edit, or override any AI-generated assessments. The system aims to reduce administrative burden on clinic staff and help prioritize care for those who need it most urgently.

By automating the initial patient intake process, the system allows clinics to handle higher call volumes efficiently to ultimately improve both operational efficiency and patient care quality.

{%- comment -%} Team/instructors/advisors shown above as inline text. {%- endcomment -%}