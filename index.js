//1
function countToTen(){
  for (let i = 1; i <= 10; i++){
    console.log(i)
  }
}

//2
function countFromOne(number){
  for (let i = 1; i <= number; i++){
    console.log(i)
  }
}

//3
function countEveryEven(number){
  for (let i = 2; i <= number; i+=2){
    console.log(i)
  }
}

//4
function countEveryOdd(number){
  for (let i = 1; i <= number; i+=2){
    console.log(i)
  }
}

//5 
function countEvens(numbers){
  let count = 0 
  for(let i = 0; i <= numbers.length; i++){
  if(numbers[i] % 2 === 0){
    count+=1
  }
}
return count
}
//countToTen()

// countFromOne(26)

// countEveryEven(30)

// countEveryOdd(30)

// console.log(countEvens(1,2,3,4,5,6,7,8,9,10))