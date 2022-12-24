describe(“suite description”, () => {
    it(“describes the spec”, () => {
        const myVar = true;
        expect(myVar).toBe(true);
    });
}); 


Test Types
Truthiness

    .toBeTruthy() passes when
        The expectation has any non-zero value
        The expectation evaluates to true
    .toBeFalsy() passes when the value is:
        0
        '' (an empty string)
        undefined
        null
        NaN
    If you just need the Boolean value of false, use .toEqual()

Numerical Matchers

    .toBeCloseTo(expected value, precision)
        Passes if a value is within a specified precision of the expected value
        Precision is optional and is represented the number of decimal points to check (defaults to 2)
    .toBeGreaterThan(expected value)
    .toBeLessThan(expected value)
    .toBeGreaterThanOrEqual(expected value)
    .toBeLessThanOrEqual(expected value)

Negating Other Matchers

    In JavaScript, use the ! to negate
    In TypeScript, use not
    In Jasmine, use .not

Exceptions

    .toThrow(expected value)
    .toThrowError(expected value, expected message) (expected value and expected message are optional)

Other Matchers

    .toContain(expected value)
    .toMatch(expected value)
    .toBeDefined()
    .toBeUndefined()
    .toBeNull()
    .toBeNan()
    
    
# Some Tests #

it("should be falsey", () => { expect(myFunc(9)).toBeFalsy(); });

it("should make sure a number is always positive", () => { expect(myFunc(-9)).toBeGreaterThan(-1); });

it("should muliply a number by 5", () => { expect(myFunc(9)).toEqual(45); });

# Testing Asynchronous Code #

## The key to testing async code is letting Jasmine know when it’s ready to be tested. ## 

Using async/await syntax makes testing easier

    . Jasmine syntax mimics JavaScript syntax
    . Add async before the asynchronous function call
    . Add await before the return
    . Testing occurs after the return
Using promise syntax with Jasmine

    . Promise values are included in the return statement
    . Test is run in the .then() statement that is chained to the return value
Testing promise resolution and rejection with ES6 Promise Matchers Library

    - .toBeResolved() tests if a promise is resolved and will return true if the promise is resolved.
    - .toBeRejected() tests if a promise is rejected and will return true if the promise is rejected.
    - .toBeRejectedWith(expected value) tests if the expected error is returned.

