# 4. Add package mui and mui-x-date-pickers

Date: 2023-06-14

## Status

2023-06-14 proposed

2023-06-14 accepted

2023-06-14 done

## Context

- We have to implement two component
  1. `PasswordInput` a text field input with password validation function
  2. `DatePicker` : a date picker

## Decision

### thinking process

- For this `PasswordInput` component, use tailwindcss is enough
- For `DatePicker`, if we implement it by ourselves, we need to deal with a lot of user experience work, so it is better to use a library to help us
- MUI is a popular ui framework that provide very detailed customization functionality, which can be a good fit for us
- Since we used MUI, we can use its MuiTextField to implement `PasswordInput`, so we don't need to use tailwindcss to implement from scratch

### guideline for choosing ui framework for future

- Concept
  - consider flexibility : tailwindcss > mui-base > mui-material
  - consider implementation effort
  - consider component's business value or modification frequency
- How to choose (this is a simple step, maybe we can draw a decision tree to consider all cases)
  - If the component has simple logic, prefer to use `tailwindcss`
  - If the component has lots of customization and complex logic, prefer to use `MUI-base`
  - If the component has little for customization (mostly UI), and complex logic, prefer to use `MUI-Material`

## Consequences

- introduce packages (mui/material): @mui/material @emotion/react @emotion/styled
  - https://mui.com/material-ui/getting-started/installation/
- introduce packages (mui/x-date-picker) : @mui/x-date-pickers dayjs
  - https://mui.com/x/react-date-pickers/getting-started/
