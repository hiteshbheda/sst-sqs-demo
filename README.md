# SST + AWS SQS Demo

This repository demonstrates asynchronous job processing using:

- AWS API Gateway
- AWS Lambda
- Amazon SQS
- SST (Serverless Stack)

## Architecture

Client → API Gateway → Lambda (Producer) → SQS → Lambda (Worker)

The API Lambda sends messages to SQS while the worker Lambda processes the job in the background.

---

## Project Structure

sst-sqs-demo
├── stacks
│   └── ApiStack.ts
├── packages
│   └── functions
│       └── src
│           ├── sendJob.ts
│           └── worker.ts
├── sst.config.ts
├── package.json
└── README.md

---

## Install

npm install

---

## Run locally

npx sst dev

SST will deploy infrastructure and print the API endpoint.

---

## Test

POST /job

Example request body:

{
  "type": "generate_report",
  "userId": "123"
}

---

## Flow

API Gateway
    ↓
Lambda (Producer)
    ↓
SQS Queue
    ↓
Worker Lambda
    ↓
Background Processing

---

This project accompanies a LinkedIn technical article about using AWS SQS with SST.