// Maximum, minimum, and average

function maxMinAvg(arr){
    let max = 0;
    let min = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] > max) max = arr[i]
        if (arr[i] < min) min = arr[i]
        sum += arr[i]
    }
    return "The minimum is " + min + ", the maximum is " + max + ", and the average is " + sum/arr.length + "."
}

// let array = [1, -2, 9, 4]
// console.log(maxMinAvg(array))

// FizzBuzz
// If the number is divisible by both 3 and 5, log "FizzBuzz" instead of the number
// If the number is divisible by 3 but not by 5, log "Fizz" instead of the number
// If the number is divisible by 5 but not by 3, log "Buzz" instead of the number

function fizzBuzz(num){
    for (let i = 1; i <= num; i++){
        if (i % 15 == 0) console.log("FizzBuzz ")
        else if (i % 3 == 0) console.log("Fizz ")
        else if (i % 5 == 0) console.log("Buzz ")
        else console.log(i)
    }
}
// fizzBuzz(15)

// Given a string, write a function that will determine whether the braces  - including parentheses (), square brackets [], and curly brackets {} - within the string are valid. That means that any braces within other braces must close before the outer set closes.
function bracesValid(str){
    let pairs = {
        ")": "(",
        "}": "{",
        "]": "["
    }
    let stack = []
    for (let i = 0; i<str.length; i++){
        if (str[i] == "(" || str[i] == "{" || str[i] == "[") stack.push(str[i])
        else if (stack[stack.length - 1] == pairs[str[i]]) stack.pop()
        else return false
    }
    return stack.length == 0
}
// console.log(bracesValid("[(()){}]"))

// Bubble sort
function bSort(arr){
    let temp;
    let swapped = false
    for (var outer=0; outer<arr.length; outer++){
        for (let inner=0; inner<(arr.length-outer-1); inner++){
            if (arr[inner]>arr[inner+1]){
                temp = arr[inner];
                arr[inner]=arr[inner+1];
                arr[inner+1]=temp;
                swapped = true
            }
        }
        if (!swapped) break
    }
    return arr;
}
// console.log(bSort([1,3,14,8,10]))

// Given a number of US cents, return the optimal configuration (meaning the largest denominations possible) of coins in an object. Use dollars, quarters, dimes, nickels, and pennies.
function coinChange(amt){
    let Dcount = 0
    let Qcount = 0
    let dimeCount = 0
    let Ncount = 0
    let Pcount = 0
    let copy = amt
    while(copy >= 100){
        copy -= 100
        Dcount++
    }
    while(copy >= 25){
        copy -= 25
        Qcount++
    }
    while(copy >= 10){
        copy -= 10
        dimeCount++
    }
    while(copy >= 5){
        copy -= 5
        Ncount++
    }
    while(copy >= 1){
        copy -= 1
        Pcount++
    }
    return {"dollars": Dcount, "quarters": Qcount, "dimes": dimeCount, "nickels": Ncount, "pennies": Pcount}
}

// console.log(coinChange(1793))

let users = [
    {
      fname: "Kermit",
      lname: "the Frog",
      languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
      interests: {
        music: ["guitar", "flute"],
        dance: ["tap", "salsa"],
        television: ["Black Mirror", "Stranger Things"]
      }
    },
    {
      fname: "Winnie",
      lname: "the Pooh",
      languages: ["Python", "Swift", "Java"],
      interests: {
        food: ["honey", "honeycomb"],
        flowers: ["honeysuckle"],
        mysteries: ["Heffalumps"]
      }
    },
    {
      fname: "Arthur",
      lname: "Dent",
      languages: ["JavaScript", "HTML", "Go"],
      interests: {
        space: ["stars", "planets", "improbability"],
        home: ["tea", "yellow bulldozers"]
      }
    }
]

function userLanguages(arrayObj){
    for (let i = 0; i < arrayObj.length; i++){
        let arr = arrayObj[i]['languages']
        let str = ""
        for (let x = 0; x < arr.length; x++){
            if (x == arr.length - 1) str += "and " + arr[x] + "."
            else str += arr[x] + ", "
        }
        let obj = arrayObj[i]['interests']
        // let en = Object.keys(arrayObj[i]['interests'])
        let str2 = ""
        // for (let y = 0; y < en.length; y++){
        //     for (let z = 0; z < obj[en[y]].length; z++){
        //         if (y == en.length - 1 && z == obj[en[y]].length - 1) str2 += "and " + obj[en[y]][z] + "."
        //         else str2 += obj[en[y]][z] + ", "
        //     }
        // }
        for (let y in obj){
            for (let z = 0; z<obj[y].length; z++){
                if (y == Object.keys(obj)[Object.keys(obj).length - 1] && z == obj[y].length - 1) str2 += "and " + obj[y][z] + "."
                else str2 += obj[y][z] + ", "
            }
        }
        console.log(arrayObj[i]['fname'] + " " + arrayObj[i]['lname'] + " knows " + str)
        console.log(arrayObj[i]['fname'] + " " + arrayObj[i]['lname'] + " is also interested in " + str2)
    }
}
// let obj = users[0]['interests']
// let en = Object.keys(users[0]['interests'])
// console.log(en)
userLanguages(users)

// binary search with recursion
function recursiveBS(arr,val){
    var length = arr.length
    var mid = Math.floor(length/2)
    if (arr[mid] > val){
        return recursiveBS(arr.slice(0,mid), val)
    }
    else if (arr[mid] < val){
        return recursiveBS(arr.slice(mid + 1, length), val)
    }
    else if (arr[mid] == val){
        return mid
    }
    return -1
}
var arr1 = [1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94, 200]
// console.log(recursiveBS(arr1, 15))

// binary search without recursion
function iterativeBS(arr, val){
    let begin = 0
    let end = arr.length - 1
    let mid = 0
    while (begin <= end){
        mid = Math.floor((begin + end)/2)
        if (arr[mid] < val) begin = mid + 1
        else if (arr[mid] > val) end = mid - 1
        else return mid
    }
    return -1
}
console.log(iterativeBS(arr1, 15))


