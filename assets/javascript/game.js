$(document).ready(function(){
    var random = Math.floor(Math.random()*101+19)
        $("#num").text(random);
    var num1 = Math.floor(Math.random()*11+1)
    var num2 = Math.floor(Math.random()*11+1)
    var num3 = Math.floor(Math.random()*11+1)
    var num4 = Math.floor(Math.random()*11+1)
    var Totalscore = 0;
        $("#total").text(Totalscore);
    var Wins = 0;    
    var Losses = 0;

    $("#wins").text(Wins);
    $("#losses").text(Losses);

    function restart() {
        random=Math.floor(Math.random()*101+19);
        console.log(random)
        $("#num").text(random);
        var num1 = Math.floor(Math.random()*11+1)
        var num2 = Math.floor(Math.random()*11+1)
        var num3 = Math.floor(Math.random()*11+1)
        var num4 = Math.floor(Math.random()*11+1)
        Totalscore = 0;
        $('#total').text(Totalscore);

    }

    function win (){
        Wins++;
        $("#wins").text(Wins);
        restart();
    }

    function lost() {
        Losses++;
        $("#losses").text(Losses);
        restart();
    }

    $("#green").on('click', function(){
        Totalscore = Totalscore + num1;
        $("#total").text(Totalscore);
            if(Totalscore == random){
                win();
            }
            else if(Totalscore > random){
                lost();
            }
    })

    $("#indigo").on('click', function(){
        Totalscore = Totalscore + num2;
        $("#total").text(Totalscore);
            if(Totalscore == random){
                win();
            }
            else if(Totalscore > random){
                lost();
            }
    })

    $("#lightblue").on('click', function(){
        Totalscore = Totalscore + num3;
        $("#total").text(Totalscore);
            if(Totalscore == random){
                win();
            }
            else if(Totalscore > random){
                lost();
            }
    })

    $("#red").on('click', function(){
        Totalscore = Totalscore + num4;
        $("#total").text(Totalscore);
            if(Totalscore == random){
                win();
            }
            else if(Totalscore > random){
                lost();
            }
    });
});