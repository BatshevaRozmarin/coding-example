# README

## Calculator

---

## Description

---

This project creates a calculator that accepts an exercise and returns the correct result.

## Development

---

- TS
- Node 20
- by docker
- TDD

## Usage

---

## Diagram of the project structure

```text

├── src
│   └── operatores
        └──division.ts
        └──minus.ts
        └──multiplication.ts
        └──operator.ts
        └──plus.ts
    └──CompleteExercise.ts
    └──BaseExercise.ts
    └──validation.ts
    └──server.ts
    └──
└── test
    └── operatores
        └──division.test.ts
        └──minus.test.ts
        └──multiplication.test.ts
        └──operator.test.ts
        └──plus.test.ts
    └──CompleteExercise.test.ts
    └──BaseExercise.test.ts
    └──validation.test.ts
    └──server.test.ts
└── .env
└── .env.sample
└── eslintrc.js
└── .gitignore
└── Dockerfile
└── jest.config.js
└── package.json
└── README.md
└── tsconfig.json

```

1. Navigate to the root directory of the
project (where `dockerfile` is located).

2. Start the services and build the
image:

```bash
docker build -t my-container .
```

then run the command:

```bash
docker run -p 3000:3000 my-container
```
