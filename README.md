# AHA Front-End Assignment

## Context

this is the repository that implements [aha front-end assignment exam 1](https://docs.google.com/document/d/1OfUtksOOGix-W81D6URAAtPOhabH_mcLEHEq5qZGMlg/edit)

- live demo site : [link](https://benqqqq.github.io/aha-fe-assignment/)
- figma side by side comparison : [link](<https://www.figma.com/file/RDeMksdEhjhNKpISYGMkm8/Front-end-Exam-(Mitch-Wu)?type=design&node-id=6083%3A309&t=tH2GXLqIwh3dqMVI-1>)

## Demo

## Implementation Steps

1. Initialize Project - [[PR - Chores/initial project]](https://github.com/benqqqq/aha-fe-assignment/pull/1)
2. Task 1 Input Password Step 1 - [[PR - Feat/add password input Step 1 - add UI]](https://github.com/benqqqq/aha-fe-assignment/pull/2)
3. Task 1 Input Password Step 2 - [[PR - Feat/add password input Step 2 - add logic]](https://github.com/benqqqq/aha-fe-assignment/pull/6)
4. Task 2 Date Calendar Step 1 - [[PR - feat: implement DatePicker Step 1 - Date Picker]](https://github.com/benqqqq/aha-fe-assignment/pull/7)
5. Task 2 Date Calendar Step 2 - [[PR - feat: implement DatePicker Step 2 - yearCalendar]](https://github.com/benqqqq/aha-fe-assignment/pull/8)

## Development

```bash
pnpm install
pnpm run dev
```

## Production build

```base
pnpm run build
```

## Deployment

- use GitHub Action to deploy to GitHub Page

## To be Improvement

- The color is a slightly different from Figma design (although set the same hex code)
- Responsive doesn't handle
- Accessibility doesn't handle
- es2 testing doesn't handle
- Better to have each component's design document
- Date Picker ux (such as https://github.com/Hacker0x01/react-datepicker/issues/942)
