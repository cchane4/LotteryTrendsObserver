function sortNumber(a,b) {
    return a - b;
}

var get_one_number = function(){
  random_one = Math.floor(Math.random() * 25) + 1;
        lotto_one.push(" "+random_one);
       document.getElementById("special_number").innerText = lotto_one;
}

$(document).on('click', function() {
  lotto_four = [];
  lotto_one = [];
    for (var i = 0; i < 5; i++) {
        var random_four = Math.floor(Math.random() * 68) + 1;
        lotto_four.push(" "+random_four);
      lotto_four.sort(sortNumber);
       document.getElementById("four_numbers").innerText = lotto_four;

    }

  get_one_number();
})
