$(document).ready(function() {
    var arr = [];
    var count = 0;
    var lvl = 0;
    var buttonFinal;
    var gameStarted = false;
    var audio1;

    startNewGame();
//first time keyboard key press
    function startNewGame() {
        arr = [];
        count = 0;
        lvl = 0;
        $("body").one("keypress",function(event) {
            if(event.key.length === 1) {
                levels();
                randomButtonClick();
            }
        });
        gameStarted = true;

    }

    function randomButtonClick() {
        var buttons = $(".btn");
        var randomIndex = Math.floor(Math.random() * buttons.length);
        var randomButton = buttons.eq(randomIndex);
        var randomButtonClass = randomButton.attr("class");
        var final = randomButtonClass.slice(4,randomButtonClass.length);
        makeSound(final);
        buttonAnimation(randomButton);
        storeInArray(final);
    }

    function buttonAnimation(element) {
        element.addClass("pressed");
        setTimeout(function() {
            element.removeClass("pressed");
        },100);
    }

    function makeSound(button) {
        switch(button) {
            case "red":
                var audio = new Audio("sounds/red.mp3")
                audio.play();
                break;
            case "blue":
                var audio = new Audio("sounds/blue.mp3")
                audio.play();
                break;
            case "yellow":
                var audio = new Audio("sounds/yellow.mp3")
                audio.play();
                break;
            case "green":
                var audio = new Audio("sounds/green.mp3")
                audio.play();
                break;
        }
    }


// mouse click listener 
    
    
    $(".btn").on("click",function() {
        if(!gameStarted) {
            $("h1").text("Click any keyboard key Initially");
            startNewGame();
            return;
        }
        else{
            var buttonElement = $(this);
            var buttonElement1 = buttonElement.attr("class");
            var buttonElement2 = buttonElement1.slice(4,buttonElement1.length);
            buttonAnimation(buttonElement);
            makeSound(buttonElement2);

            if(buttonElement2 != arr[count]) {
                $("h1").text("Game Over!,Press any keyboard key to Restart");
                startNewGame();
                return;
            }
            count++;
            if(count == arr.length) {
                levels();
                count = 0;
                setTimeout(randomButtonClick,1000);
            }
        }
        
        
    });


    function levels() {
        lvl++;
        $("h1").text("Level " + lvl);
    }

    function storeInArray(buttonFinal) {
        arr.push(buttonFinal);
    }

});