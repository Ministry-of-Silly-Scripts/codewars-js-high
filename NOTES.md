# Notes

## Description

Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: `a = 1, b = 2, c = 3` etc.

For example, the score of `abad` is `8` (1 + 2 + 1 + 4).

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

## Domain

- input: string of words (lowercase letters)
- output: word 

### Rules

- each letter of a word scores points according to its position in the alphabet
    - a = 1
    - b = 2
    - c = 3
    - ...
- return the highest scoring word (as string)
- tie: return word that appear earliest

---

**Label**  
✅ done 🚧 WIP ❌ ERROR 🐛 BUG

---

TODO:

# Pomodoro 1 🍅:

- initial setup
  - update README ✅
  - update NOTES ✅
  - update package.json ✅
  - update code/test files ✅
- domain discussion ✅
- perform the 'canary' test just to check if the structure works ✅
- letterScore:
    - it should return 1 for input equal to 'a' ✅
    - it should return 5 for input equal to 'e' ✅
    - it should return 26 for input equal to 'z' ✅
- it should return 'a' for input equal to 'a' ✅