//sets up random number user is trying to match
$(document).ready(function () 
{
    var random = Math.floor(Math.random() * 121 + 19)  //random number from 19 to 120
    $('#number-to-guess').text(random);     //generates random into text number-to-guess ID
    


    //	setting up four random numbers array, total variable and printing the wins & losses variables	
    var generatedNumbers = []       //array for randomly generated numbers
    var total = 0;
    var wins = 0;
    var losses = 0;
    $('#numberWins').text(wins);
    $('#numberLosses').text(losses);

    //sets up random numbers for each crystal
    function fourRandomNumbers() 
    {
        for (var i = 0; i < 4; i++)    
        {
            var num = Math.floor(Math.random() * 13 + 1); //random number from 1 to 12
            generatedNumbers.push(num);         // adds num to generatedNumbers array
        }
    }
    fourRandomNumbers();

    //resets the game
    function reset() 
    {
        random = Math.floor(Math.random()* 121 + 19); //starts with random number from 19 to 120
        $('#number-to-guess').text(random); 
        generatedNumbers = [];
        fourRandomNumbers();
        total = 0;
        $('#totalScore').text(total); //shows your total score in text in totalScore ID
    }

    //adds the wins to the total
    function winner() 
    {
        alert("You won!!!");
        wins++;
        $('#numberWins').text(wins);
        reset();            //executes reset function after winning
    }

    //adds the losses to the total
    function loser() 
    {
        alert("You lose!!");
        losses++;
        $('#numberLosses').text(losses);
        reset();
    }

    //sets up click for first crystal
    $('#one').on('click', function () 
    {
        total = total + generatedNumbers[0];        //adds the first index of generatedNumbers to the total score
        $('#totalScore').text(total);

        //sets win/lose conditions
        if (total == random) 
        {
            winner();
        }
        else if (total > random) 
        {
            loser();
        }
    })

    $('#two').on('click', function () 
    {
        total = total + generatedNumbers[1];
        $('#totalScore').text(total);
        
        //sets win/lose conditions
        if (total == random) 
        {
            winner();
        }
        else if (total > random) 
        {
            loser();
        }
    })

    $('#three').on('click', function () 
    {
        total = total + generatedNumbers[2];
        $('#totalScore').text(total);

        //sets win/lose conditions
        if (total == random) 
        {
            winner();
        }
        else if (total > random) 
        {
            loser();
        }
    })

    $('#four').on('click', function () 
    {
        total = total + generatedNumbers[3];
        $('#totalScore').text(total);

        //sets win/lose conditions
        if (total == random) 
        {
            winner();
        }
        else if (total > random) 
        {
            loser();
        }
    });

});