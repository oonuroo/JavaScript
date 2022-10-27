
const prompt=require("prompt-sync")({sigint:true});

console.log(typeof('10') == typeof(10))
console.log(parseInt(9.8) == 10) 

console.log(4 === 4 )
console.log(4 == 4 )
console.log(4 !== 4)

let word1 = 'pyhton' 
let lenword1 = word1.length ;
console.log(word1,'has',lenword1, 'characthers')
let word2 = 'jargon' 
let lenword2 = word2.length ;
console.log(word2, "has", lenword2 ,"characthers")
console.log(lenword1 == lenword2) 

let word3 = "dragon" 
let controlWord = "on"
let control1 = word1.includes(controlWord)
let control3 = word3.includes(controlWord)
console.log(control1)
console.log(control3)

const now = new Date
console.log("Year",now.getFullYear())
console.log("Month",now.getMonth()+1) 
console.log("Date",now.getDate()) 
console.log("Hours :",now.getHours())
console.log("Mins:",now.getMinutes())
console.log(Date.now())



let num4 = -5 
if(num4 > 0)
{
    console.log(`${num4} is positive number`)
}
else if(num4 == 0){
    console.log(`${num4} is zero`)
}
else if (num4 < 0){
    console.log(`${num4} is negative number`) 
}

//let weather = 'snowy'

let weather = prompt("What is the weather?")
console.log(weather)

switch(weather){
    case 'rainy' :
        console.log("Today is rainy you need to jacket")
        break;
    case 'cloudy':
         console.log("Today is cloudy weather might be cold")
         break;
    case 'snowy':
        console.log("There is snow outside weeeyyy !!")
        break;
    case 'sunny':
        console.log("Today is sunnny go outside")
        break;
}
