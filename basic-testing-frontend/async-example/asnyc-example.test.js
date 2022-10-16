import { test, expect } from 'vitest'
import { generateToken, generateTokenPromise } from './async-example'

// Using callback
// use done for async code test
// use try catch and pass err into done for the proper fail message
test('it should generate a token value', (done) => {
    const testUserEmail = 'testEmail@email.com'
    
    generateToken(testUserEmail, (err, token) => {
        try {
            expect(token).toBeDefined();
            // expect(token).toBe(2);
            done();
        } catch (err) {
            done(err);
        }
    })
})

// Promise testing
// You don't need to return when using async / await 
// (since a function annotated with async returns a promise implicitly).
test('it should generate a token value', () => {
    const testUserEmail = 'testEmail@email.com'

    // const token = await generateTokenPromise(testUserEmail)
    // expect(token).toBeDefined()

    return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined(); 
    // return expect(generateTokenPromise(testUserEmail)).rejects.toBe;
})