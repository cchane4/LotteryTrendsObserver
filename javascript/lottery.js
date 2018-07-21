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
    lotto_four.push(" "+random_four);
    lotto_four.sort(sortNumber);
    document.getElementById("four_numbers").innerText = lotto_four;
    }
  get_one_number();
});

