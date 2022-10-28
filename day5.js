const arr = [
    'Asabeneh',
    250,
    true,
    { country: 'Finland', city: 'Helsinki' },
    { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(arr)

let js = "JavaScript" ;
console.log(js.split(""))

let companies = "Facebook,Google,Amazon,Tesla" 
let comp = companies.split(',')
console.log(comp)

let arra = ["EUR","USD","TL","HUF","XYZ"]
arra[arra.length-1] = "AUX"

console.log(arra)

let arrx = Array(9).fill("x") ;

console.log(arrx)

let name = ["ONUR"]
let surname = ["Bacaksiz"]
let full_name = name.concat(surname)
console.log(full_name)

let test = ["Ahmet","Mehmet","Mahmut","Mustafa"]
console.log(test.join(" # "))


let fruits = ['banana', 'orange', 'mango', 'lemon']
let stack = fruits.reverse()
console.log(stack)

stack = stack.sort()
console.log(stack)
stack = stack.reverse()
console.log(stack)

let new_fruits = fruits.toString() 
console.log(fruits)
console.log(new_fruits) ;

