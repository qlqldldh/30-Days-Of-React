// Declaration Function
function sampleManyParams(parm1, parm2, ...params){
    console.log(parm1)
    console.log(parm2)
    console.log(params)
}

sampleManyParams(1,2,3,4,5,6)
/*
* expected:
* 1
* 2
* [3,4,5,6]
* */


// Arrow Function
const numbers = (nums)=>{
    nums.forEach((num, i)=>{
        console.log(i, ":", num)
    })
}

numbers([1,2,3,4,5])
/*
* expected:
* 0 : 1
* 1 : 2
* 2 : 3
* 3 : 4
* 4 : 5
* */

const numAllNums = (args)=>{
    let sum = 0
    console.log(args)
    args.forEach((num, i)=>{
        sum += num
    })
    return sum
}

console.log(numAllNums([1,2,3,4,5]))

const sumAllNums = (...args)=>{
    let sum = 0
    console.log(args)
    for (let i of args){
        sum += i
    }
    return sum
}

console.log(sumAllNums(1,2,3,4,5))
/*
* expected:
* [1,2,3,4,5]
* 15
* */

// Anonymous Function
const anoVar = function(a){
    return 2 * a
}

console.log(anoVar(3))
/*
* expected:
* 6
* */

// self Invoking Function
var squareNum = (function(a){
    return a * a
})(3)
console.log(squareNum)
/*
* expected:
* 9
* */

// setInterval and setTimeout
function intervalFunc(){
    console.log(2)
}

//setInterval(intervalFunc, 2000) : do every 2 seconds
setTimeout(intervalFunc, 2000) // do after 2 seconds

// Destructuring
/*
# What can we destructure?
- Arrays
- Objects

% -- Array -- %

# Accessing array items using a loop
for (const number of numbers) {
  console.log(number)
}

# Accessing array items manually
const numbers = [1, 2, 3]
let num1 = numbers[0]
let num2 = numbers[1]
let num3 = numbers[2]
console.log(num1, num2, num3) // 1, 2, 3

# Accessing array items using destructuring
const constants = [2.72, 3.14, 9.81,37, 100]
const [e, pi, gravity, bodyTemp, boilingTemp] = constants
console.log(e, pi, gravity, bodyTemp, boilingTemp]

# Destructuring Nested arrays
const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
]

const [frontEnd, backEnd] = fullstack
console.log(frontEnd, backEnd)
//["HTML", "CSS", "JS", "React"] , ["Node", "Express", "MongoDB"]

# Skipping an Item during destructuring
const countries = ['Finland', 'Sweden', 'Iceland', 'Norway', 'Denmark']
const [fin, , ice, , den] = countries
console.log(fin, ice, den) // Finland, Iceland, Denmark

# Destructuring when we loop through arrays
const countries = [
  ['Finland', 'Helsinki'],
  ['Sweden', 'Stockholm'],
  ['Norway', 'Oslo'],
]

for (const [country, city] of countries) {
  console.log(country, city)
}

# Getting the rest of the array using the spread operator,
 We use three dots(...) to spread or get the rest of an array during destructuring
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const [num1, num2, num3, ...rest] = nums
console.log(num1, num2, num3, rest) //1, 2, 3, [4, 5, 6, 7, 8, 9, 10]

% -- Object -- %
# destructuring to Object
const rectangle = {
  width: 20,
  height: 10,
}

let { width, height } = rectangle
console.log(width, height, perimeter) // 20, 10

# destructuring Function Parameter
const rectangle = { width: 20, height: 10 }
const calculateArea = ({ width, height }) => width * height
const calculatePerimeter = ({ width, height } = 2 * (width + height))
 */


/* Functional Programming */

// 1. forEach
var countries = ["Finland", "Estonia", "Sweden", "Norway"]
countries.forEach((country, index)=>{
    console.log(index, country)
})

// 2. map
var countries = ["Finland", "Estonia", "Sweden", "Norway"]
var newCountries = countries.map((country)=>{
    return country.toUpperCase()
})
/*
or
var newCountries = countries.map((country)=>country.toUpperCase())
 */
console.log(newCountries) // ["FINLAND", "ESTONIA", "SWEDEN", "NORWAY"]

// 3. filter
var countires = ["Finland", "Estonia", "Sweden", "Norway"]
var countriesWithLand = countries.filter((country)=>country.includes("land"))
// if negative : var countriesWithLand = countries.filter((country)=>!country.includes("land"))
console.log(countriesWithLand) // ["Finland", "Iceland"]

// 4. reduce  __ list의 누적값을 내부적으로 계산하며 결과값 리턴
var numbers = ((n)=>{
    let ret = Array()
    for (let i=0; i<n; i++){
        ret.push(i)
    }
    return ret
})(11)
var sum = numbers.reduce((acc, cur) => acc + cur)
console.log(sum) // 55

// 5. find __ 여러 개일 경우 맨 앞의 하나만 리턴
var countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
var countryWithWay = countries.find((country) => country.includes("way"))
console.log(countryWithWay) // Norway

// 6. findIndex
var countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
var index = countries.findIndex((country) => country.length === 6)
console.log(index) // 2

// 7. some __ python 의 any 와 깉은 개념(?)
var evens = [0, 2, 4, 6, 8, 10]
var someAreEvens = evens.some((n) => n%2 === 0)
var someAreOdds = evens.some((n) => n%2 !== 0)
console.log(someAreEvens) // true
console.log(someAreOdds) // false

//8. every __ python 의 all 과 같은 개념(?)
var nums = [0, 1, 2, 4, 6, 8, 10]
var allAreEvens = nums.every((n) => n%2 === 0) // false
var someAreEvens = nums.some((n) => n%2 === 0) // true


/* Classes */

// Defining & constructor & class method & getter & setter
class Person{
    constructor(firstName, lastName, age=26){ // python 의 init
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
    getFullName(){
        return this.firstName + " " + this.lastName
    }
    get getFirstName(){
        return this.firstName
    }
    get getLastName(){
        return this.lastName
    }
    set setFirstName(firstName){
        this.firstName = firstName
    }
    set setlastName(lastName){
        this.lastName = lastName
    }
    static basicAttitude(){
        console.log("narat malssami ... ")
    }
}
// Instantiation
var person = new Person("Dean", "Park")
console.log(person.getFullName()) // Dean Park

console.log(person.getFirstName) // Dean
console.log(person.getLastName) // Park

person.setFirstName = "Pat"
person.setLastName = "Kim"
console.log(person.getFirstName) // Pat
console.log(person.getLastName) // Kim
Person.basicAttitude() // call static method

// Inheritance
class Student extends Person{
    constructor(firstName, lastName, age, grade) {
        super(firstName, lastName, age);
        this.grade = grade
    }
    saySomething(){
        console.log("I am a Student person")
    }
    get getGrade(){
        return this.grade
    }
    set setGrade(grade){
        this.grade = grade
    }
}

student = new Student("Hans", "Jedec", 27)
// etc ...


/* Document Object Model (DOM) */
// Javascript 로 HTML 요소를 생성, 추가하거나 삭제할 수 있음
// React 는 React Virtual DOM 으로 필요한 변환을 update 함
