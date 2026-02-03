---
layout: about
title: about
permalink: /
subtitle: CS 426 Senior Project in Computer Science, Spring 2026, @ UNR: CSE Department

selected_papers: true # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: true # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: true
  scrollable: true # adds a vertical scroll bar if there are more than 3 new posts items
  limit:  # leave blank to include all the blog posts
---

Team 12: Angelo Calingo, Joshua Matni, Kyla Trotter, Ploy Wandeevong

Instructors: Vinh Le, David Feil-Seifer

Advisors: James McDuffie (Amazon Web Services), Dr. Ben Teitelbaum (Carson Tahoe Ear, Nose, & Throat)

Our team is developing an AI-powered triage system for ENT clinics that streamlines patient intake and prioritization. When patients call the clinic, they interact with an AI agent that collects their symptoms, medical history, and other relevant information through a natural conversation. The AI then analyzes this information to determine the urgency of their condition, automatically flagging critical symptoms and generating a summary of the patient's concerns.

Clinic staff can then review all incoming cases through a dashboard that displays patients organized by urgency level, allowing them to quickly identify who needs immediate attention. Staff maintain full control over the system, with the ability to review, edit, or override any AI-generated assessments. The system aims to reduce administrative burden on clinic staff and help prioritize care for those who need it most urgently.

The system is built with a React frontend and FastAPI backend, connected to a PostgreSQL database hosted on AWS RDS. For the voice interface, we utilize Amazon Connect to handle phone calls, Amazon Lex to manage conversational flows, and AWS Lambda functions to integrate these components with our AI backend. The AI triage logic currently uses a fine-tuned model trained on ENT-specific datasets. All components communicate through RESTful APIs, with token-based authentication ensuring secure access to patient data.

By automating the initial patient intake process, the system allows clinics to handle higher call volumes efficiently to ultimately improve both operational efficiency and patient care quality.
