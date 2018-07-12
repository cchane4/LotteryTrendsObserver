
$(document).on('click', function() {
  lottonumber = [];
    for (var i = 0; i < 5; i++) {
        var random = Math.floor(Math.random() * 44) + 1;
        lottonumber.push(" "+random);
       document.getElementById("lottery-numbers").innerText = lottonumber;
    }

})
