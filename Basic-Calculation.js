//////////1.Print Hello world////////

const a = ("Hello World")
console.log(a)

///////2.SUM OF 2 NUMBER/////

const b = 10, c = 20, d = b + c
console.log("Sum is:", d)

///3.CALCULATE THE AREA OF RECTANGLE///

const left = 10, right = 10, area = left * right

console.log("Area of Rectangel:", area)


////////4.SWAPPING A TWO VARIABLE////////

let e = 50, f = 20

e = f + e
f = e - f
e = e - f
console.log(`After Swapping: a=${e}, b=${f}`)


/////5.CONVERT CELSIUS TO FARHINHELT//////////

const cel = 22
const g = [9 * cel / 5 + 32]

console.log("CONVERT CELSIUS TO FARHINHELT:", g)

//////////6.SIMPLE INSTEREST/////////////

let h = 20, i = 32, j = 55, k

k = h * i * j / 100

console.log("INSTEREST:", k)


////////7.Convert hours to minutes/////////
let hours=2
console.log("minutes"+hours*60)


///8.FIND THIRD ANGLE OF RIGHT TRAINGLE IF TWO OTHER ANGLE//

let leftAngle = 30, rightAngle = 50, ThirdAngle

ThirdAngle = 180 - (leftAngle + rightAngle)

console.log("ThirdAngle:", ThirdAngle)


/////9.CALCULATOR USING OPERATOR//////

let o = 5, p = 2
console.log("addisen", o + p)
console.log("subsctesion", o - p)
console.log("multiplicasen", o * p)
console.log("divisen", o / p)
console.log("modulus", o % p)
console.log("o**p", o ** p)//5^2
console.log("INCREMENT", ++o)
console.log("DECREMENT", --p)


//10. find the squre root
const number = 25;
const squareRoot = Math.sqrt(number);
console.log(`The square root of ${number} is ${squareRoot}`)

//11. Electricity Bill Calculation
let customerName = "Poojan"
let units = 120
let ratePerUnit = 7
let billAmount = units * ratePerUnit

console.log("Customer Name:", customerName)
console.log("Units Used:", units)
console.log("Bill Amount: ₹" + billAmount)

//12. Employee Salary Slip
let empName = "Smit"
let basic = 18000
let hra = basic * 0.10
let da = basic * 0.08
let ta = basic * 0.05
let gross = basic + hra + da + ta

console.log("Employee:", empName)
console.log("Gross Salary: ₹" + gross)


//13. Currency Conversion*
let usd = 50;
let inr = usd * 83

console.log(usd + " USD =", inr + " INR")

//14. convert days to hours
let days=3
console.log(days*24)

//15.Convert kilometers to meters
let Km=5
console.log(Km*1000)

//16.Convert meters to centimeters
let Meter=12
console.log(Meter*100)

//17.Convert years to months
let years = 2;
console.log("months"+years * 12);

//18.Convert Minutes to seconds
let Minutes=12
console.log("second"+Minutes*60)

//19.CONVERT FARHINHELT TO CELSIUS
let FARHINHELT=104
let CELSIUS=5/9*(FARHINHELT-32)

//20.Find squre root
let squre=25
let ans=Math.sqrt(squre)
console.log(ans)
