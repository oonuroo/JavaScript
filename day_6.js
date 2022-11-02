for(let i = 0; i<5;i++){
    console.log(`${i} * ${i} = ${i*i}` )
}

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
let newArr = []
for(let i = 0; i < countries.length; i++){
  newArr.push(countries[i].toUpperCase())
}
console.log(newArr)

let neww_arr = []
for(let i= 0;i< countries.length ;i++){
    neww_arr.push(newArr[i].toLowerCase())
}
console.log(neww_arr)

let numbers = [0,1,2,3,4,5] 
let v = 0
for(let i=0;i<numbers.length;i++){
    v = v + numbers[i]
}
console.log(v)

for(let elem of countries){
    console.log(elem[1])
}

let vector = []
let num = Math.random()
let num1 
for(let i = 0;i<=5;i++){
    let num = Math.ceil(Math.random()*100)
    vector.push(num)
}
console.log(vector)

//creating new array based on existying array 

const arr_1 = [1,2,3,4,5,6]
const arr_2 = []
console.log(arr_1)
for(let i = 0; i<arr_1.length;i++){
arr_2.push(arr_1[i]*2)
}
console.log(arr_2)

let i = 0 
while(i<=5){
    console.log(i)
    i++
}
console.log("-----")
let j = 0 ;
do{
    console.log(j)
    j++
}while (j<=5)

//if we are not interested in indexs 
arr_3 = ["Adana","Mersin","İstanbul","Antep"]
for(const element of arr_3){
    console.log(element.toUpperCase())
}

const sym = "#"
for(let i = 0;i<=5 ; i++){
    console.log(sym.repeat(i))
}
for ( let i = 0;i<=10;i++){
    console.log(i,i**2,i**3)
}

for(let i =0;i <=100;i++){
    if(i%2 == 0 ){
        console.log(i)
    }
}