'use strict';
// Always apply strict mode on line 1. This tells the compiler to report
// EVERY error and prevents silent erroring. Turn it off in production builds though!

/*
---Types in Javascript/ES6---
Boolean [true/false]
Null [Nothing/The absence of ANYTHING]
Undefined [Variable has been defined (unlike Null) but has not yet been assigned anything]
Number [Any number, durr]
String [I really hope you know this]
Symbol [Any single character]
Object [Any bespoke/user-defined object]
NaN [No Applicable Number]
*/

const sampleArrayMixed = [1, "hi", 3, "strong", true, 12];
const sampleArrayNums = [1,2,3,4,5];
const sampleArrayStrings = ["hello", "world", "how", "are", "you"];
const sampleJSONArray = 
[
  {
    "name": "GitHub",
    "isUp": true
  },
  {
    "name": "Slack",
    "isUp": false
  }
];

const masterArray = [sampleArrayMixed, sampleArrayNums, sampleArrayStrings];
/* Function Declarations */

/**
 * Summary.
 * Tests if a number is larger than (but not equal to) 3
 * 
 * @param {float} num Number to be tested
 * 
 * @returns {boolean} whether or not num is larger than 3
 */
const isLargeEnough = (num) => num > 3;

const printArray = (arr) => arr.forEach( (elem) => console.log(elem));

const testArray = (arr) => arr.filter( (elem) => isLargeEnough(elem));

const mapArray = (arr) => {
  return arr.map( (elem) => {
    try {
      return elem*elem;
    } catch(error) {
      return NaN;
    }
  });
}

/*
TESTING AND FUNCTION CALLING
*/

const beginAllTests = () => {
  console.log("BEGINNING TESTS");
  console.log("PRINTING ARRAYS");
  masterArray.forEach( (subArr) => console.log(subArr));
  masterArray.forEach( (subArr) => {
    // Print the working array
    console.log("***NEW ARRAY***");
    console.log(subArr);
    // Attempt to run functions on each array
    try {
      console.log(`The elements that are greater than 3 from this array are ${testArray(subArr)}`);
    } catch(error) {
      console.log("Problem with testing array. Does it only contain numbers?");
      console.error(error);
    }
    try {
      console.log(`The elements from this array squared are ${mapArray(subArr)}`);
    } catch(error) {
      console.log("Problem with testing array. Does it only contain numbers?");
      console.error(error);
    }
    console.log("========================");
  });
  statuses();
}

const statuses = () => sampleJSONArray.forEach( (jsonElem) => {
  console.log(jsonElem.name);
  console.log(jsonElem.isUp);
});

beginAllTests();