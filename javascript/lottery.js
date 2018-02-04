var a = [];
var minVal = 1;
var maxVal = 46;

/*$(document).on('click', function(){
    function generateRandom (minVal, maxVal){
    var randomVal = minVal+(Math.random()*(minVal - maxVal));
     console.log(randomVal);
    }
    generateRandom();
})
*/





$(document).on('click', function() {
    function generateRandom() {
        var random = Math.floor(Math.random() * 44) + 1;
        document.getElementById("lottery-numbers").innerText = random;
    }
    generateRandom();
})

