
var random_result;
var lost = 0;
var win = 0;
var previous = 0;

//setters
//getters

// $(".crystal").attr('class');

var resetAndStart = function () {

    $(".crystals").empty();

    var images = [
        'https://www.crystallight.co.nz/images/library/tuxpi.com.1474844554.jpg',
        'https://images.wisegeek.com/austrian-crystal-flower-design.jpg',
        'https://sep.yimg.com/ay/yhst-26179266651112/crystal-chandelier-earrings-6.gif',
        'http://www.livingfengshui.ca/wp-content/uploads/2013/03/rainbow-crystal.jpg']

    random_result = Math.floor(Math.random() *101 ) + 19;


    $("#result").html('Random Result: ' + random_result);

    for(var i = 0; i < 4; i++){

        var random = Math.floor(Math.random() *11) +1;

        var crystal = $("<div>");
            crystal.attr({
                "class": 'crystal',
                "data-random": random,
            });
            crystal.css({
                "background-image":"url('" + images[i] + "')",
                "background-size":"cover"
            });


        $(".crystals").append(crystal);

}


$("#previous").html("Total Score: " + previous);

}


resetAndStart();


//event delegation
$(document).on('click', ".crystal", function(){

    var num = parseInt($(this).attr('data-random')); // turning this into a number

    previous += num; // adding numbers


    $("#previous").html("Total score: " + previous);

    console.log(previous);
    
    if(previous > random_result){

        lost++;
    
        $("#lost").html("You lost: " + lost);

        previous = 0;

        resetAndStart(); 

}
else if(previous === random_result){

    win++;

    $("#win").html("You win: " + win);

    previous = 0;

    resetAndStart();

}

});


//speudo coding

// a game with 4 crystals and random result
// every crystal needs to have a random number between 1-12
// when clicking any crystal it should addinmg with the previous result
// until it equals the random result
// if it is greater than the random result, we decrement a lost counter
// if it is equal, then we increment a win counter
// a new random number should be generate every single time we win or lost
// to those 4 crystals