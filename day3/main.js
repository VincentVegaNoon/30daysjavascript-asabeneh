//1.Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.

const firstName = 'Jan'
const lastName = 'Owczarczyk'
let city = 'Warsaw'
let age = 25
let isMarried = false
const now = new Date()
const year = now.getFullYear()

console.log(typeof firstName)
console.log(typeof lastName)
console.log(typeof city)
console.log(typeof age)
console.log(typeof isMarried)
console.log(typeof year)

// 2.Check if type of '10' is equal to 10

    console.log(typeof '10' == 10)

// 3.Check if parseInt('9.8') is equal to 10
    let num = '9.8'
    let numInt = parseInt(num)
    console.log(numInt == 10)

// 4.Boolean value is either true or false.
// Write three JavaScript statement which provide truthy value.

    let isRaining = true
    let num = 3
    let trueValue = 4 > 3

// Write three JavaScript statement which provide falsy value.

    let num = 0
    let falseValue = 3 > 4
    let sentence = ''

// 5.Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()

4 > 3 //true
4 >= 3 // true
4 < 3 //false
4 <= 3//false
4 == 4//true
4 === 4//true
4 != 4 //false
4 !== 4 // false
4 != '4'//true
4 == '4'//true
4 === '4'//false
// Find the length of python and jargon and make a falsy comparison statement.

    console.log('python'.length != 'jargon'.length)

//  6.Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()

4 > 3 && 10 < 12 //true
4 > 3 && 10 > 12//false
4 > 3 || 10 < 12//true
4 > 3 || 10 > 12//true
!(4 > 3)//false
!(4 < 3)//true
!(false)//true
!(4 > 3 && 10 < 12)//false
!(4 > 3 && 10 > 12)//true
!(4 === '4')//true
// There is no 'on' in both dragon and python //false
console.log('dragon' && 'jargon'.includes('on'))

// 7.Use the Date object to do the following activities
const now = new Date()
// What is the year today?
console.log(now.getFullYear())
// What is the month today as a number?
console.log(now.getMonth()+1)
// What is the date today?
console.log(now.getDate())
// What is the day today as a number?
console.log(now.getDay())
// What is the hours now?
console.log(now.getHours())
// What is the minutes now?
console.log(now.getMinutes())
// Find out the numbers of seconds elapsed from January 1, 1970 to now.
console.log(now.getTime)


//Exercises Level 2
// 1.Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
// Enter base: 20
// Enter height: 10
// The area of the triangle is 50

let base = prompt('Enter base', 'base')
let height = prompt('Enter height', 'height')
let area = 0.5 * base * height
console.log(`The area of the triangle is ${area}`)

// 2.Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)

    let sideA = prompt('Enter side A', 'sideA')
    let sideB = prompt('Enter side B', 'sideB')
    let sideC = prompt('Enter side C', 'sideC')
    let aInt = parseInt(sideA)
    let bInt = parseInt(sideB)
    let cInt = parseInt(sideC)
    let perimeter = aInt + bInt + cInt
    console.log(`The perimeter of the triangle is ${perimeter}`)

//3.Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))

let length = prompt('Enter length', 'length')
let width = prompt('Enter height', 'width')
let area = length * width
let perimeter = 2 * (parseInt(length) + parseInt(width))
console.log(`The area of the rectangle is ${area} and perimeter is ${perimeter}`)

//4.Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.

    const pI = 3.14
    let radius = prompt('Enter radius', 'radius')
    let area = pI * radius * radius
    let circumference = 2 * pI * radius
    console.log(`The radius of circle is ${area} and circumference is ${circumference}`)

//5.Calculate the value of y (y = x^2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
    
    let x = 1
    let y =  x^(2) + 6*(x) + 9
    console.log(y)

//6.Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?

let hours = prompt('Enter your hours', 'hours')
let ratePerHour = prompt('Enter your pay', 'pay per hour')
let personPay = hours * ratePerHour
console.log(`Pay of the person is ${personPay}`)

//7.If the length of your name is greater than 7 say, your name is long else say your name is short.


    let userName = prompt('Enter your Name', 'Name')
    let lengthOfName = userName.length
    lengthOfName > 7
    ? console.log(`${userName} your name is long`)
    : console.log(`${userName} your name is short`)

//8.Compare your first name length and your family name length and you should get this output.

    let firstName = 'Asabeneh'
    let lastName = 'Yetayeh'
    let compare = firstName.length > lastName.length
    ? console.log('Your first name, Asabeneh is longer than your family name, Yetayeh')
    : console.log('Your last name, Yetayeh is longer than your family name, Asabeneh')

//9.Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
let myAge = 250
let yourAge = 25
let difference = myAge - yourAge
console.log(`I am ${difference} years older than you.`)

//10.Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

let birthYear = prompt('Enter your birth year')
const now = new Date()
let year = now.getFullYear()
let userAge = year - birthYear
let afterYears = 18 - userAge 
userAge >= 18
? console.log(`You are ${userAge}. You are old enough to drive`)
: console.log(`You are ${userAge}. You will be allowed to drive after ${afterYears} years.`)

//11.Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// let userAge = prompt('How long you live')
// const now = new Date() - use
// let year = now.getFullYear() - userAge
// let seconds =  now.getTime()
// console.log(`You lived ${seconds} seconds`)

// 12.Create a human readable time format using the Date time object

    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const day = now.getDate()
    const hours = now.getHours()
    const minutes = now.getMinutes()
//YYYY-MM-DD HH:mm
console.log(`${year}/${month}/${day} ${hours}:${minutes}`)
//DD-MM-YYYY HH:mm
console.log(`${day}/${month}/${year} ${hours}:${minutes}`)
//DD/MM/YYYY HH:mm
console.log(`${day}-${month}-${year} ${hours}:${minutes}`)


// exercises level 3 
//1.Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )
const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth() + 1
    const day = now.getDate()
    const hours = now.getHours()
    const minutes = now.getMinutes()

    hours < 10 && minutes < 10
    ? console.log(`${year}/${month}/${day} 0${hours}:0${minutes}`)
    : hours < 10 && minutes > 10
    ? console.log(`${year}/${month}/${day} 0${hours}:${minutes}`)
    : hours > 10 && minutes < 10
    ? console.log(`${year}/${month}/${day} ${hours}:0${minutes}`)
    : hours > 10 && minutes > 10
    ? console.log(`${year}/${month}/${day} ${hours}:${minutes}`)
    : console.log(`${year}/${month}/${day} 0${hours}:0${minutes}`)