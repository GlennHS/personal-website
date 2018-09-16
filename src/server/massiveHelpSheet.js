'use strict'

//  Line 1 should always be 'use strict'
//  This prevents silent erroring

//////////////////////////////////////////////////////////////////////////
//                    MASSIVE JAVASCRIPT/ES6 HELP SHEET                 //
//                          GLENN HAMILTON-SMITH                        //
//////////////////////////////////////////////////////////////////////////
//!!      BEFORE USING THIS IT IS RECOMMENDED YOU HAVE INSTALLED      !!//
//!!        FIRACODE AND SET UP VSCODE TO USE THIS (see below)        !!//
///////////////////////////////////~~~~~~/////////////////////////////////
//  link: https://github.com/tonsky/FiraCode/wiki/VS-Code-Instructions  //
///////////////////////////////////~~~~~~/////////////////////////////////
//  THROUGHOUT THIS DOCUMENT THERE ARE SECTIONS DEDICATED TO THE MAIN   //
//   AREAS OF JAVASCRIPT/ES6 AS WELL AS GOOD CODING PRACTICES, NAMING   //
//  CONVENTIONS AND THE LIKE. A TABLE OF CONTENTS CAN BE FOUND ON LINE  //
//         22 OF THIS DOCUMENT. THERE ARE ALSO LINES THAT END IN        //
//   //  <==  UNCOMMENT ME. THESE SHOULD BE UNCOMMENTED (CTRL + /) TO SEE   //
//              HOW THE FUNCTIONS DEFINED ABOVE IT WORK                 //
//////////////////////////////////////////////////////////////////////////
//                               CONTENTS                               //
//////////////////////////////////////////////////////////////////////////
//                                                                      //
//                  CTRL+F A SECTION TO EASILY FIND IT                  //
//                                                                      //
//    SECTION 1 => CONSOLE LOGS AND 2 TYPPES OF NOTATION                //
//    SECTION 2 => PASSING ARGUMENTS AND JS VARIABLE TYPES              //
//    SECTION 3 => LOGIC AND IF STATEMENTS                              //
//    SECTION 4 => LOOPS AND ITERATION                                  //
//    SECTION 5 => ARRAY MANIPULATION                                   //
//    SECTION 6 => STRING MANIPULATION                                  //
//    SECTION 7 => REGULAR EXPRESSIONS                                  //
//    SECTION 8 => JAVASCRIPT OBJECT NOTATION                           //
//    SECTION 9 => CLASSES AND OOP                                      //
//    SECTION 10 => TRY/CATCH/FINALLY                                   //
//    SECTION 11 => EXAMPLE PROGRAM                                     //
//                                                                      //
//////////////////////////////////////////////////////////////////////////
//                    //!! Means it's relevant to ES6                   //
//////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////
//  Section 1                           //
//  Console Logs and 2 Types of Notation//
//////////////////////////////////////////

//  Outputting text in JavaScript is as easy as typing "console.log(string)"
//  To output the text "Hello World" you can use either of the following notations

//  Classic Function Notation
function printHello() {
  console.log("Hello World");
}

//  ES6 Arrow Notation
const arrowPrintHello = () => {
  console.log("Hello World");
}
/////////////////////////////////////////////
//  Section 2                              //
//  Passing Arguments and JS Variable Types//
/////////////////////////////////////////////

//  All variables are defined like so...
const a = 3; //  Cannot be redefined at runtime
let b, c; //  Can be redefined at runtime

/*
---Types in JavaScript/ES6---
Boolean [true/false]
Number [Any number]
String [Any collection of symbols]
Symbol [Any single character]
Object [Any bespoke/user-defined object]

Null [Nothing/The absence of ANYTHING]
Undefined [Variable has been defined (unlike Null) but has not yet been assigned anything]
NaN [No Applicable Number. Often occurs after a divide by 0 or square root of a negative]
*/

/*
Hexadecimal => 0x64
Denary => 100
Octal => 0o144
Binary => 0b1100100
Exponent => 1e2
*/

function addNums(num1, num2) {
  return num1 + num2;
}

const arrowAddNums = (num1, num2) => {
  return num1 + num2;
}

//  You can specify a default value for a function argument as shown below
//  For the remainder of this document I shall only use arrow notation

const raiseToPower = (num, power = 1) => {
  return Math.pow(num, power);
}

// console.log(raiseToPower(3))  //  <==  UNCOMMENT ME
//  Should console log 3^1 (3)

//!!  ES6 Also allows for multiple assignments in a single statement
//!!  This is known as "Variable Destructuring"

// let x, y;  //  <==  UNCOMMENT ME
// const coords = [3, -7];  //  <==  UNCOMMENT ME
// [x, y] = coords;  //  <==  UNCOMMENT ME
// console.log(`X Coord is ${x}, Y Coord is ${y}`);  //  <==  UNCOMMENT ME

/////////////////////////////
//  Section 3              //
//  Logic and If Statements//
/////////////////////////////

//!!  In ES6 you can define if statements "inline"
//!!  These are formatted as shown below

const greaterThan5 = (num) => {
  let value = (num > 5 ? true : false);
  return value;
}

// console.log(greaterThan5(6));  //  <==  UNCOMMENT ME

//  && => AND Gate
//  || => OR Gate
//  === => Strict Equals
//  == => Equals (w/Type Conversion)
//  x > y X => Greater Than Y
//  x < y X => Less Than Y
//  x >= y X => Greater Than or Equal To Y
//  x <= y X => Less Than or Equal To Y
//  !var => Inverse Logic / NOT Gate

const between3and6 = (num) => {
  return (num >= 3 && num < 7);
}

// console.log(between3and6(5)); //  <==  UNCOMMENT ME

//  JavaScript also has something called a switch statement (other languages call it case)
//  This allows a variable to be tested against various conditions

const printWeekday = () => {
  const dayOfWeek = (new Date()).getDay();
  let outDay;
  switch (dayOfWeek) {
    case 0:
      outDay = "Sunday";
      break;
    case 1:
      outDay = "Monday";
      break;
    case 2:
      outDay = "Tuesday";
      break;
    case 3:
      outDay = "Wednesday";
      break;
    case 4:
      outDay = "Thursday";
      break;
    case 5:
      outDay = "Friday";
      break;
    case 6:
      outDay = "Saturday";
      break;
  }
  console.log(`Today is ${outDay}!`);
}

// printWeekday();  //  <==  UNCOMMENT ME

/////////////////////////
//  Section 4          //
//  Loops and Iteration//
/////////////////////////

//  There are 2 main ways of looping in JavaScript. For and While

const countTo10 = () => {
  for (let i = 0; i < 10; i++) {
    console.log(i + 1);
  }
}

const whileTo10 = () => {
  let i = 0;
  while (i < 10) {
    console.log(i + 1);
    i++;
  }
}

/////////////////////////
//  Section 5          //
//  Array Maniupulation//
/////////////////////////

const myTestArr = [1, 2, 3, 4, "a", "be", "cee"];
const my2dArray = [[1, 3], [2, 5], [4, 6, 7]];

//  You can get the length of an array by using array.length
// console.log(myTestArr.length);  //  <==  UNCOMMENT ME

//  A location (index) within an array can be referenced thusly
const thirdElem = myTestArr[2]; // ARRAYS START AT 0
const subArr2Loc1 = my2dArray[1][0]; // !NOT! my2dArray[1, 0]

//  Adding elements to the end of an array is as simple as array.push(elem)
//  You can also join all elements of an array into a string using array.join()
//  You can even set what will separate each element in the string by passing a string argument

//  forEach is a way of iterating through each element of an array
//  array.forEach( (element[, index, parentArray]) => {Some Function})

//!!  ES6 Introduced a great way of putting variables into strings using "Template Literals"
//!!  Using backtick notation (`) you can reference variables easily using ${variable}
//!!  This allows for easy string concatenation

const printArray = (arr) => arr.forEach( (elem, index, parentArr) => console.log(`The element ${elem} is at position ${index} in array ${parentArr}`));

// let myArray = ["Hello", "World", "How", "Are", "You", "Today?"] //  <==  UNCOMMENT ME
// printArray(myArray); //  <==  UNCOMMENT ME

//  array.filter creates a new array comprised of elements that pass a given test
//  In this case the new array is comprised of only elements larger than 10

const keepLarger10 = (arr) => arr.filter( (elem) => elem > 10);

// console.log(keepLarger10([1, 21, 13, 4, 15, 7, 100])); //  <==  UNCOMMENT ME

//  array.map allows a new array to be made from applying a function to each element of an array
//  In this case an array is multiplied by 10

const multArrBy10 = (arr) => arr.map( (elem) => elem * 10);

// console.log(multArrBy10([1, 3, 6, 14])); //  <==  UNCOMMENT ME

//  ES6 also includes a rather neat way of checking if an element exists in an array
//!!  If a browser doesn't support a function you can define it yourself. This is known as "polyfil"

//  Version < ES6 array.prototype.includes polyfil
const includesPolyfil = (arr, searchFor) => {
  let found = false;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === searchFor) {
      found = true;
    }
  }
  return found;
}

// console.log(includesPolyfil([1, 2, 3, 4, 5], 5));  //  <==  UNCOMMENT ME

//  ES6 NOTATION
// console.log([1, 2, 3, 4, 5].includes(5));  //  <==  UNCOMMENT ME

//  ES6 Also introduced the "spread" opperator (...)
//  This allows an array to be split into its components (SEE BELOW)

// let myArr = [1, 2, 3];  //  <==  UNCOMMENT ME
// console.log(...myArr);  //  <==  UNCOMMENT ME

//  ES6 also has an array.sort() method BUT it rarely does what you expect
//  This is because it turns all array elements to unicode and compares their number

// console.log(["hello", "world", "how", "are", "you"].sort());  //  <==  UNCOMMENT ME
// console.log([12, 2, 31, 3e-4, 41].sort());  //  <==  UNCOMMENT ME

//!!  In ES6 you can splice an array to get a segment of the array from a point
//!!  Notation is Array.splice(location [, numElements]);

// const segment = [1, 2, 3, 4, 5, 6, 7, 8, 9].splice(2, 3);  //  <==  UNCOMMENT ME
// console.log(segment);  //  <==  UNCOMMENT ME

/////////////////////////
//  Section 6          //
//  String Manipulation//
/////////////////////////

//!!  As touched on before, ES6 allows something called "Template Literals"
//!!  This allows you to easily insert variables into outputs. Looks nice too!

// let myName = "Joe Bloggs";  //  <==  UNCOMMENT ME
// let time = new Date();  //  <==  UNCOMMENT ME
// console.log(`Good Day ${myName}! It is currently ${time}`);  //  <==  UNCOMMENT ME

//  In JavaScript you can get the character at a given location in a string by using the same notation you would use on an array
//  You can also get the length of a string by using string.length

// let myStr = "helloworld";  //  <==  UNCOMMENT ME
// const thirdChar = myStr[2];  //  <==  UNCOMMENT ME
// console.log(thirdChar);  //  <==  UNCOMMENT ME

//!!  In ES6 you can also get a segment of a string using the slice() method
//!!  This is similar to the array.splice method
//!!  Notation is simply string.slice(startLocation [, endLocation]);

// const myStr = "helloworld";  //  <==  UNCOMMENT ME
// console.log(myStr.slice(4, 7));  //  <==  UNCOMMENT ME

//  string.toUpperCase() and string.toLowerCase() are both useful functions, especially as "string" !== "STrInG"
//  string.trim() removes leading and trailing whitespace
//  string.includes() behaves exactly like array.includes()

//  A VERY useful function is the string.split() function. It splits a string into an array using given string
//  Notation is as follows => string.split(splitter) The splitter is not included in the array

// console.log("hello world".split(""));  //  <==  UNCOMMENT ME
// console.log("hello world".split("o"));  //  <==  UNCOMMENT ME

//  And now, a useful real world example

// const detailString = "Thomas Babel | superTom12 | F4nt4$yL4nD";  //  <==  UNCOMMENT ME
// let userArr = detailString.split(" | ");  //  <==  UNCOMMENT ME
// console.log(`Real Name: ${userArr[0]}\nUsername: ${userArr[1]}\nPassword: ${userArr[2]}`);  //  <==  UNCOMMENT ME

/////////////////////////
//  Section 7          //
//  Regular Expressions//
/////////////////////////

//  USEFUL LINK => https://regexr.com

//  Regular Expressions (or RegEx) are a way of performing pattern matching
//  A regular expression comprises two components; The pattern and the flags
//  The pattern is what is to be matched and the flags is how the incoming string should be treated

/*
Flags
g => global => check the whole phrase, not the first word
i => case insensitive => ignore case
m => multiline => allow matching over multiple lines
u => unicode => only accept unicode characters
y => sticky => only search from lastIndex() of phrase

*/

//  A regular expression can be created in 2 different ways

const firstRegex = /([a-z] ||[A-Z])+/g;
const secondRegex = new RegExp("([a-z] || [A-Z])+", "g");

//  You can get an array of strings that match a RegEx with string.match(RegExp);

const getAllWordsWithE = (phrase) => {
  return phrase.match(/\b(\w*e\w*)\b/gi);
}

// console.log(getAllWordsWithE("hello world how are you this fine morning"));   //  <==  UNCOMMENT ME

//  Big example coming up

const freqAnalysis = (text) => {
  const alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let freqArr = [];
  let str = text.replace(/\s/g, "");
  alphabetArray.forEach( (letter) => {
      const re = new RegExp(`${letter}`, "g");
      freqArr.push(((str || '').match(re) || []).length);
  });
  return freqArr;
}

// console.log(freqAnalysis("lorem ipsum dolor sit amet consiquitor serum als impestior colet dalet emptor caveat salem impiscuo"));  //  <==  UNCOMMENT ME

////////////////////////////////
//  Section 8                 //
//  Javascript Object Notation//
////////////////////////////////

//  Normally an object would need to be templated by a class but in JS that's not always necessary
//  JSON (JavaScript Object Notation) is defined thusly

const myNewJSON = {
  "employees":[
  { firstName: "John", lastName: "Doe" },
  { firstName: "Anna", lastName: "Smith" },
  { firstName: "Peter", lastName: "Jones" }
]}

//  There are 2 ways of accessing data in a JSON
// console.log(myNewJSON.employees[1].firstName);  //  <==  UNCOMMENT ME
// console.log(myNewJSON["employees"][1]["firstName"]);  //  <==  UNCOMMENT ME

const getFirstNames = (employeeJSON) => {
  let output = [];
  employeeJSON.employees.forEach( (elem) => {
    output.push(elem.firstName);
  });
  return output;
}

// console.log(getFirstNames(myNewJSON));  //  <==  UNCOMMENT ME

/////////////////////
//  Section 9      //
//  Classes and OOP//
/////////////////////

//  A class is a template for multiple objects. Classes must have a constructor
//  Referencing variables and functions in classes often requires use of "this"
//  Using this means you are targetting the object's function/variable NOT the class'

class Animal {

  constructor(name, type, breed = "none") {
    this.name = name;
    this.type = type;
    this.breed = breed;
  }

  printDetails() {
    console.log(`Hello! My name is ${this.name} and I am a ${this.type}`);
    (this.breed !== "none" ? console.log(`My breed is ${this.breed}`) : false);
  }

  changeName(newName) {
    const oldName = this.name;
    this.name = newName;
    console.log(`Success! ${oldName} is now known as ${this.name}!`);
  }
}

//  An object is created from a class by using the following notation

// let myPet = new Animal("Fluffy", "cat");  //  <==  UNCOMMENT ME
// let anotherPet = new Animal("Boxer", "dog", "pitbull");  //  <==  UNCOMMENT ME

// myPet.printDetails();  //  <==  UNCOMMENT ME
// anotherPet.printDetails();  //  <==  UNCOMMENT ME

// myPet.changeName("Tiddles");  //  <==  UNCOMMENT ME

///////////////////////
//  Section 10       //
//  Try/Catch/Finally//
///////////////////////

//  Try/Catch allows you to catch an error before it stops execution entirely
//  It also allows you to see what the error was and act accordingly
//  You can also create different exception conditions based on different errors

const evaluate = (inp) => {
  let out;
  try {
    out = eval(inp);
  } catch(error) {
    console.log("Evaluation Failed");
  } finally {
    console.log("Evaluation Attempted");
  }
  return out;
}

// console.log(evaluate('twelve'));  //  <==  UNCOMMENT ME
// console.log(evaluate('12'));  //  <==  UNCOMMENT ME

/////////////////////
//  Section 11     //
//  Example Program//
/////////////////////

/**
 * Summary. This program will take a list of users in the form of JSON and create an object for each of them
 *          It will also be able to search through people based on criteria
 */

const employeeData = {
  employees:[
    {id: 1, firstName: "Alex", lastName: "Man", salary: 32000, position: "IT Technician", yearsWorked: 5},
    {id: 2, firstName: "Bob", lastName: "Black", salary: 47000, position: "Director", yearsWorked: 10},
    {id: 3, firstName: "Carlos", lastName: "Man", salary: 20000, position: "Web Designer", yearsWorked: 3},
    {id: 4, firstName: "Carlos", lastName: "Silt", salary: 22000, position: "Web Designer", yearsWorked: 2},
    {id: 5, firstName: "Adrian", lastName: "Bander", salary: 36500, position: "Software Developer", yearsWorked: 7},
    {id: 6, firstName: "Spencer", lastName: "Murray", salary: 34750, position: "IT Technician", yearsWorked: 6},
    {id: 7, firstName: "Glenn", lastName: "Silt", salary: 52000, position: "Software Developer", yearsWorked: 6},
    {id: 8, firstName: "Samuel", lastName: "Connaire", salary: 60500, position: "Director", yearsWorked: 9},
    {id: 9, firstName: "Richard", lastName: "Black", salary: 102000, position: "CEO", yearsWorked: 14},
    {id: 10, firstName: "Sylvain", lastName: "Black", salary: 12500, position: "IT Intern", yearsWorked: 1},
    {id: 11, firstName: "Alex", lastName: "Smith", salary: 45000, position: "Software Developer", yearsWorked: 6},
  ],
  redClearanceUserIDs:[2, 8, 9, 11],
  bannedEmployees: [
    {firstName: "Alex", lastName: "Penn"},
    {firstName: "Basil", lastName: "Fawlty"},
    {firstName: "Adam", lastName: "Smith"},
  ]
}

/**
 * Summary. A class based implementation of the Employees extracted from EmployeeData
 */
class Employee {

  /**
   * 
   * @param {Number} id ID of the employee
   * @param {String} firstName First Name of the employee
   * @param {String} lastName Last Name of the employee
   * @param {Number} salary Salary earned per year
   * @param {String} position Position currently held
   * @param {Number} yearsWorked Years worked at the company in total
   * @param {Boolean} isBanned If the employee is banned from working at the company again
   */
  constructor(id = null, firstName, lastName, salary = 0, position = "banned", yearsWorked = null, isBanned = false) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.salary = salary;
    this.position = position;
    this.yearsWorked = yearsWorked;
    this.isBanned = isBanned;
  }

  changeSalary(newSal) {
    this.salary = newSal;
  }

  changeName(fName = this.firstName, lName = this.lastName) {
    this.firstName = fName;
    this.lastName = lName;
  }

  changePosition(newPos) {
    this.position = newPos;
  }

  banEmployee(newSal) {
    this.isBanned = true;
  }

  /**
   * Summary. Display the employee's data in a nice, readable format. Also make it obvious if they are banned
   */
  displayEmployee() {
    if (this.isBanned) {
      console.log(`!!BANNED!! | Name: ${this.lastName}, ${this.firstName} | !!BANNED!!`);
    } else {
      console.log(`ID: ${this.id} | Name: ${this.lastName}, ${this.firstName} | Salary: ${this.salary} | Position: ${this.position} | Years Worked: ${this.yearsWorked}`);
    }
  }
}

let employeeArr = [];
let redClearedIDs = [];

/**
 * Summary. Populate the three arrays employeeArr and redClearedIDs with Employee objects generated from employeeData
 * 
 * @see Employee
 */
const populateEmployeeArrs = () => {
  [...(employeeData.employees), ...(employeeData.bannedEmployees)].forEach( (employee) => {
    employeeArr.push(new Employee(employee.id, employee.firstName, employee.lastName, employee.salary, employee.position, employee.yearsWorked, (employeeData.bannedEmployees.includes(employee) ? true : false)));
  });
  redClearedIDs = employeeData.redClearanceUserIDs;
}

/**
 * Summary. List all red clearance users
 */
const getRedUsers = () => {
  let redUsers = [];
  employeeArr.forEach( (employee) => {
    (redClearedIDs.includes(employee.id) ? redUsers.push(employee) : false);
  });
  return redUsers;
}

/**
 * Summary. Search through all employees in employeeArr for records that match a given condition
 * 
 * @param {String} item The criterion to search against
 * @param {*} equalTo The value for the corresponding criterion to be searched for
 */
const getEmployeeByItem = (item, equalTo) => {
  let matchedEmployees = [];
  employeeArr.forEach( (employee) => {
    let lookingAt;
    switch (item) {
      case "id": lookingAt = employee.id; break;
      case "firstName": lookingAt = employee.firstName; break;
      case "lastName": lookingAt = employee.lastName; break;
      case "salary": lookingAt = employee.salary; break;
      case "position": lookingAt = employee.position; break;
      case "yearsWorked": lookingAt = employee.yearsWorked; break;
    }
    try {
      (lookingAt === equalTo ? matchedEmployees.push(employee) : false);
    } catch (error) {
      console.log("There appears to have been a problem.\nPlease make sure you have put in a valid search item");
    }
  });
  return matchedEmployees;
}

const sortEmployees = (criterion, omitBanned) => {
  let sortFunc, outArr = [];
  switch(criterion) {
    case "id": sortFunc = (a, b) => a.id - b.id; break;
    case "salary": sortFunc = (a, b) => a.salary - b.salary; break;
    case "yearsWorked": sortFunc = (a, b) => a.yearsWorked - b.yearsWorked; break;
    case "firstName": sortFunc = (a, b) => (a.firstName > b.firstName ? 1 : -1); break;
    case "lastName": sortFunc = (a, b) => (a.lastName > b.lastName ? 1 : -1); break;
    case "position": sortFunc = (a, b) => (a.position > b.position ? 1 : -1); break;
    case "isBanned": sortFunc = (a, b) => ((a.isBanned === b.isBanned) ? 0 : (a.isBanned ? 1 : -1)); break;
  }
  if (omitBanned) {
    employeeArr.forEach( (employee) => {
      (employee.isBanned ? false : outArr.push(employee));
    });
    outArr.sort(sortFunc);
  } else {
    outArr = employeeArr.sort(sortFunc);
  }
  return outArr;
}

const main = () => {
  populateEmployeeArrs();
  console.log("\n\nRED CLEARED USERS\n========");
  getRedUsers().forEach( (employee) => {
    employee.displayEmployee();
  });
  console.log("\nSearching for all users named ALEX\n========");
  getEmployeeByItem("firstName", "Alex").forEach( (employee) => {
    employee.displayEmployee();
  });
  const criterion = "lastName";  //  <== CHANGE ARGS FOR DIFFERENT SORTS!
  const omitBanned = true;  //  <== CHANGE ARGS FOR DIFFERENT SORTS!
  console.log(`\nSorting by field ${criterion}...\n`, (omitBanned ? 'Omitting Banned Employees' : 'Including Banned Employees'));
  sortEmployees(criterion, omitBanned).forEach( (employee) => {
    employee.displayEmployee();
  });
}

// main();  //  <==  UNCOMMENT ME