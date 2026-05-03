# ElectionGuide AI – Civic Engagement Platform

This repository contains the complete technical code and prompting logic for the **ElectionGuide** web application.

## Overview
ElectionGuide is a comprehensive educational platform that guides Indian citizens through the democratic process. It features:
1. **Interactive Voter Journey**
2. **Dynamic Election Timeline**
3. **Gamified Knowledge Quiz**
4. **Instant-Feedback AI Assistant**
5. **Pledge-to-Vote Certificate Generator**

## Cloud Run Live URL
**[https://election-guide-836476763513.us-central1.run.app](https://election-guide-836476763513.us-central1.run.app)**

## Evaluation Focus Areas
- **Code Quality**: Structured into modular React components (`Hero`, `Timeline`, `ChatWidget`, etc.).
- **Security**: Complete XSS prevention using `DOMPurify` for the chatbot parsing. External links enforce `rel="noopener noreferrer"`.
- **Efficiency**: Pure CSS (`index.css`) animations avoid heavy JS library bloat. Highly optimized bundling via Vite. Total repo size < 10MB.
- **Testing**: Robust test coverage via `vitest` covering DOM rendering, chatbot logic, and Quiz interaction.
- **Accessibility**: Comprehensive `aria-label` integrations on all forms and interactive elements. Google Translate embedded for instant multilingual capabilities.
- **Google Services**: 
  - **Google Cloud Run**: Deployed containerized frontend via Docker.
  - **Google Translate**: Built-in widget for local languages.
  - **Google Maps**: Generates dynamic location queries for polling booths.
  - **Google Calendar**: Deep-linking for instant polling day reminders.

## How to Deploy to Cloud Run
1. Ensure you have the `gcloud` CLI installed and authenticated (`gcloud auth login`).
2. Navigate to this directory.
3. Run the deployment command:
```bash
gcloud run deploy election-guide --source . --region us-central1 --allow-unauthenticated --port 8080
```

## Running Locally
```bash
npm install
npm run dev
```
