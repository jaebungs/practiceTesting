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

### toEqual
 - used to check reference values. 

 ##### concurrent
 - it.concurrent('message', () => {})
 - run tests on parallel 

## Concurrency & Default Behavior
- Tests that are stored in different files are executed concurrently.
- Adding .concurrent enforce this behavior also inside the individual files.
- One downside is that tests that perform clashing(global) state manipulations may interfere with each other

## Mocking and Spies
- Testing with dependencies have side effects. For instance, testing file system or backend can actually modifey the file system or database. To prevent these, Mocking and spies come and play.
- vi.fn() and vi.mock() replace fundtion / module to empty ones.
- files in __mocks__ folder can replace modules called by vi.mock(). Use the same module name in the folder and vitest will automatically replace by searching the directory.
