# Sentiment Analyzer

## Overview

Sentiment Analyzer is a web application that allows users to upload conversation text files and analyze the sentiment of the conversation.

The application provides:

- Login functionality
- Text file upload
- Basic sentiment analysis
- KPI generation
- Conversation insights dashboard

---

## Features

### Login

Simple authentication using predefined credentials.

Demo Credentials:

Email: admin@test.com

Password: Password123

---

### File Upload

Supported Format:

- .txt

Users can upload conversation transcripts for analysis.

Example:

Agent: Hello, how may I help you today?

Customer: I have been waiting for two weeks.

Customer: This is very frustrating.

Agent: I apologize for the inconvenience.

Customer: Thank you for helping.

---

### Sentiment Analysis

The uploaded conversation is analyzed to determine:

- Positive Sentiment
- Negative Sentiment
- Neutral Sentiment

Overall sentiment is generated based on keyword-based analysis.

---

### KPIs

The application derives the following KPIs:

#### Customer Satisfaction Score

Represents the overall customer experience.

Range: 0 - 100

#### Frustration Level

Measures customer frustration identified in the conversation.

Range: 0 - 100

#### Agent Professionalism

Represents agent politeness and professionalism.

Range: 0 - 100

#### Resolution Probability

Indicates the likelihood that the customer issue was resolved.

Range: 0 - 100

---

### Conversation Summary

Provides a short summary after analysis.

Example:

Customer conversation analyzed successfully.

---

## Architecture

Current Architecture:

User
|
v
Login
|
v
Upload TXT File
|
v
Analysis API
|
v
Sentiment Engine
|
v
Dashboard Results

Future Architecture:

Frontend (React / Next.js)
|
v
n8n Workflow
|
v
OpenAI / LLM
|
v
Insights Dashboard

---

## Technology Stack

Frontend:
- Next.js
- React
- JavaScript

Backend:
- Next.js API Routes

Analysis:
- Rule-based Sentiment Engine

---

## Project Structure

sentiment-analyzer/

pages/
|
|-- api/
|   |-- analyze.js
|
|-- login.js
|-- dashboard.js
|-- index.js
|-- _app.js

sample.txt

package.json

README.md

---

## Installation

Install dependencies:

npm install

Start application:

npm run dev

Open:

http://localhost:3000

---

## Usage

Step 1:

Navigate to:

http://localhost:3000/login

Step 2:

Login using:

Email: admin@test.com

Password: Password123

Step 3:

Upload a .txt conversation file.

Step 4:

Click Analyze.

Step 5:

Review sentiment results and KPI values.

---

## Sample Input

Agent: Hello, how may I help you today?

Customer: I have been waiting for two weeks.

Customer: This is very frustrating.

Agent: I apologize for the inconvenience.

Customer: Thank you for helping.

---

## Sample Output

{
  "overallSentiment": "Negative",
  "customerSatisfaction": 40,
  "frustrationLevel": 80,
  "agentProfessionalism": 90,
  "resolutionProbability": 60,
  "summary": "Customer conversation analyzed successfully."
}

---

## Test Scenarios

Positive Example:

Thank you for your excellent support.
I am happy with the service.

Expected Result:

Positive

Negative Example:

I am very frustrated.
This service is terrible.

Expected Result:

Negative

Neutral Example:

I am calling regarding my account.

Expected Result:

Neutral

---

## Future Enhancements

- Sentence-level sentiment analysis
- OpenAI integration
- n8n workflow integration
- Emotion detection
- Recharts dashboard
- CSV support
- PDF report generation
- Topic extraction
- Advanced analytics

---

## Author

Harsh Notani
Senior Software Engineer
Indore, Madhya Pradesh