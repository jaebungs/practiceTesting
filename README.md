# Testing
Used Vitest
- it allows Jest syntax

test funtions - test, it
suite function - describe

### What to test and what not
- Only test that I can change.
- Do not test browser, Node or JS APIs
- Test backend if you own the backend and if it's neccessary. 
  However, don't test on the front-end. Do it on the backend.
  Test on the frontend about the reactions(responses & errors)

### Writing good tests
- Use AAA method (Arange - Act - Assert) - It helps to keep organized, strucutre and easy to understand
- Only test ONE thing
- Test only the essense, keep it minimal and simple.
- Keep number of assertion(expect) low