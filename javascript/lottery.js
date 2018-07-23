// to be put into sort function
// const sortNumber = (a,b) => {
//   return a - b;
// };

// to get the special number 
 const get_one_number = () => {
 const lotto_one = [];
  const random_one = Math.floor(Math.random() * 25) + 1;
  lotto_one.push(" "+random_one);
  document.getElementById("special_number").innerText = lotto_one;
}

//start of the overall function 

let getNumbers = (amount, minNumber, maxNumber, sorted = true) => {
  const numbers = [];
  for (let i = 0, l = maxNumber - minNumber + 1; i < l; i += 1) {
  numbers.push(minNumber + i);
  }
  const result = [];
  for (let i = 0; i < amount; i += 1) {
  result.push(numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0]);
  }
  return sorted ? result.sort((a, b) => a - b) : result;
} 

$(document).on('click',() => {
  document.getElementById("five_numbers").innerText = getNumbers(5, 1, 68);
  
  get_one_number();  
})
 
 














  //lotto_four.sort(sortNumber);
  // console.log(lotto_four); 

  
    /*document.getElementById("four_numbers").innerText = lotto_four;
    }
  get_one_number();
}); */

// function getNumbers(amount, minNumber, maxNumber, sorted = true) {
//   const numbers = [];
//   for (let i = 0, l = maxNumber - minNumber + 1; i < l; i += 1) {
//   numbers.push(minNumber + i);
//   }
//   const result = [];
//   for (let i = 0; i < amount; i += 1) {
//   result.push(numbers.splice(Math.floor(Math.random() * numbers.length), 1)[0]);
//   }
//   return sorted ? result.sort((a, b) => a - b) : result;
//   }
//   getNumbers(5, 1, 68); 