## To Be or Not to Be

Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".
 

Example 1:

Input: func = () => expect(5).toBe(5)
Output: {"value": true}
Explanation: 5 === 5 so this expression returns true.
Example 2:

Input: func = () => expect(5).toBe(null)
Output: {"error": "Not Equal"}
Explanation: 5 !== null so this expression throw the error "Not Equal".
Example 3:

Input: func = () => expect(5).notToBe(null)
Output: {"value": true}
Explanation: 5 !== null so this expression returns true.


## Approach
The problem requires the expect function to support making toBe and notToBe calls (e.g., expect(5).toBe(5); should return true, and expect(5).notToBe(5); should throw "Equal"). To do so, we should define the return of the expect function based on what kind of call we make. This can be done in the following format:
```js
return {
    toBe: (parameters) => {
        [doing some stuff]
    },
    notToBe: (parameters) => {
        [doing some stuff]
    }
}
```
The below solution follows this format, where toBe and notToBe both has an if else statement, such that if the throw condition is true, throw an error. Otherwise, return true.

```js
Code
var expect = function(val) {
    return {
        toBe: (val2) => {
            if (val !== val2) throw new Error("Not Equal");
            else return true;
        },
        notToBe: (val2) => {
            if (val === val2) throw new Error("Equal");
            else return true;
        }
    }
};
```
/* For example, when expect(5).toBe(4) is called,
   val is the expect parameter (so val equals 5),
   val2 is the toBe parameter (so val2 equals 4).
   Since val !== val2, aka 5 != 4, we throw error "Not Equal". */
