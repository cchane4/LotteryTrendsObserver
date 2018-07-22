const sortNumber = (a,b) => {
  return a - b;
};


let get_one_number = () => {
  let lotto_one = [];
  const random_one = Math.floor(Math.random() * 25) + 1;
  lotto_one.push(" "+random_one);
  document.getElementById("special_number").innerText = lotto_one;
}

$(document).on('click',() => {
  let lotto_four = [];
  for (let i = 0; i < 5; i++){
    const random_four = Math.floor(Math.random() * 68) + 1;
  lotto_four = [new Set(lotto_four)]; 
    //lotto_four.push(""+random_four);
    

    lotto_four.sort(sortNumber);
    console.log(lotto_four); 
}
  });  
 
    /*document.getElementById("four_numbers").innerText = lotto_four;
    }
  get_one_number();
}); */

function getNumbers(amount, minNumber, maxNumber, sorted = true) {
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
  getNumbers(5, 1, 68); 