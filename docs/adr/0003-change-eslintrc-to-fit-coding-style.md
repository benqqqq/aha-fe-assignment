# 3. Change eslintrc to fit coding style

Date: 2023-06-14

## Status

2023-06-14 proposed

2023-06-14 done

## Context

Some eslint rule is not fit my coding style

## Decision

Change it in .eslintrc

## Consequences

- "eventHandlerPrefix" : "on" to "handle" because I thought handle is more readable
- "jsx-props-no-spreading": "on" -> "off" , spreading should be avoided at most of time, but sometimes we still need this
- "no-keyword-prefix": "on" -> "off", this rule will prevent naming like "newObject", which I thought is okay
- "prevent-abbreviations" -> add some exception : args, props, ref
