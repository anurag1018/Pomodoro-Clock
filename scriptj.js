$("document").ready(function(){
   
    //Timer
    var setTimer=25;
    $("#timer").text(setTimer);
    var timerH=Math.floor(setTimer/60);
    var timerM=setTimer%60;
    var timerS;
    var breakS;
    var timerInterval;
    var breakInterval;
$("#timerPlus").click(function(){
    setTimer++;
   timerH=Math.floor(setTimer/60);
   timerM=setTimer%60;
    $("#timer").text(setTimer);
});
$("#timerMinus").click(function(){
    if(setTimer>1)
    setTimer--;
   timerH=Math.floor(setTimer/60);
   timerM=setTimer%60;
    $("#timer").text(setTimer);
});
    //Break Timer
    var setBreak=5;
    var breakH=Math.floor(setBreak/60);
        var breakM=setBreak%60;
        $("#break").text(setBreak);
    
$("#breakPlus").click(function(){
    setBreak++;
    breakH=Math.floor(setBreak/60);
    breakM=setBreak%60;
    $("#break").text(setBreak);
});
        
$("#breakMinus").click(function(){
    if(setBreak>1)
    setBreak--;
    breakH=Math.floor(setBreak/60);
    breakM=setBreak%60;
    $("#break").text(setBreak);
});
    $("#start").click(function(){
        timerH=Math.floor(setTimer/60);
        timerM=setTimer%60-1;
        timerS=59;
        $("#time").text(timerH+":"+timerM+":"+timerS);
        timerInterval=setInterval(timerFunc,1000);
    });
    function timerFunc(){

            timerS--;
            if(timerS==-1){
                timerS=59;
                timerM--;
            }
            if(timerH==0&&timerM==-1){
                clearInterval(timerInterval);
                breakH=Math.floor(setBreak/60);
                breakM=setBreak%60-1;
                breakS=59;
                $("#time").text(breakH+":"+breakM+":"+breakS);
               breakInterval=setInterval(breakFunc,1000);

            }
            if(timerM==-1){
                timerM=59;
                timerH--;
            }
        if(timerH>=0)
            $("#time").text(timerH+":"+timerM+":"+timerS);
    };

    function breakFunc(){

        breakS--;
        if(breakS==-1){
            breakS=59;
            breakM--;
        }
        if(breakH==0&&breakM==-1){
            clearInterval(breakInterval);
            timerH=Math.floor(setTimer/60);
            timerM=setTimer%60-1;
            timerS=60;
            setInterval(timerFunc,1000);
                    }
        if(breakM==-1){
            breakM=59;
            breakH--;
        }
        if(breakH>=0)
        $("#time").text(breakH+":"+breakM+":"+breakS);
    };
    $("#stop").click(function(){
        clearInterval(timerInterval);
        clearInterval(breakInterval);
    });

    });