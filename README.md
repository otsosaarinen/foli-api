# Föli API

This project provides a public API wrapper for Föli transportation data. It allows fetching the timetable for all bus stops or a single bus stop by ID. Official documentation by Föli can be read here https://data.foli.fi/doc/siri/v0/sm

## How to install

1. Clone the repository to your local machine.

2. Install dependencies:
```bash
npm install
```

3. Start the server
```bash
npm run server
```
Runs on http://localhost:3000 by default.

## Endpoints
```bash
GET /
```
Returns the list of all bus stops.
```bash
GET /id
```
Returns the timetable for the bus stop specified in the ``id`` parameter.
```bash
GET /api-docs
```
Swagger UI API documentation
