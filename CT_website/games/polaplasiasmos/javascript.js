var playing = false;
var vathmos;
var ypoloiposXronos;
var action;
var sostiApantisi;

//pataei start/apo tin arxi
document.getElementById("start").onclick = function(){

    //an paizei 
   if (playing == true){
        //reload page
      location.reload(); 
    }
    //an den paizei
    else
    {
        //alazei se true
        playing=true;
        vathmos=0;        
        document.getElementById("vathmosNumber").innerHTML=vathmos;

        //instructions    
        document.getElementById("instruction").innerHTML="KANE CLICK ΣΤΗ ΣΩΣΤΗ ΑΠΑΝΤΗΣΗ";

        //xronos
        show("xronos");

        //30 seconds 
        ypoloiposXronos = 30;
        document.getElementById("ypoloiposXronos").innerHTML=ypoloiposXronos;

        //hide gameover box
        hide("gameover");

        //change button to reset
        document.getElementById("start").innerHTML="ΑΠΟ ΤΗΝ ΑΡΧΗ";

        //start countdown
        startCountdown();

        //nees erotiseis kai apantiseis  
        generateQA();             
    }   
}

//pataei tin apantisi
for(var i=1; i<5; i++){
    document.getElementById("apantisi"+i).onclick=function(){    
        if(playing==true){

            //an apantisi sosti
            if (this.innerHTML==sostiApantisi)
            { 
                //sosti apantisi
                vathmos++;
                document.getElementById("vathmosNumber").innerHTML=vathmos;
                
                show("sosto");

                //show for 1 sec
                setTimeout(function(){
                    hide("sosto");
                },1000);    
                hide("lathos");
                //nees erotiseis kai apantiseis
                generateQA();
            }
            else
            { 

                //lathos apantisi
                show("lathos");

                //show for 1 sec
                setTimeout(function(){
                    hide("lathos");
                }, 1000)
                hide("sosto");
            }             
        }
    }
}

//functions 

//start countdown 20sec
function startCountdown(){
    action = setInterval(function(){
        ypoloiposXronos-=1;
        document.getElementById("ypoloiposXronos").innerHTML = ypoloiposXronos;
        if(ypoloiposXronos == 0)
        {//game over
	       if (vathmos=>20) {
			setGameOver();
            document.getElementById("gameover").innerHTML= "<p>GAME OVER!</p><p>Η ΒΑΘΜΟΛΟΓΙΑ ΣΟΥ: " + vathmos + "</p> <p> ΑΡΙΣΤΑ </p>"; 
			
           }
           if (vathmos>10 && vathmos<=20){
		   setGameOver();
            document.getElementById("gameover").innerHTML= "<p>GAME OVER!</p><p>Η ΒΑΘΜΟΛΟΓΙΑ ΣΟΥ: " + vathmos + "</p> <p> ΠΟΛΥ ΚΑΛΑ </p>";
		   
		   }
		   if (vathmos>5 && vathmos<=10){
		   setGameOver();
            document.getElementById("gameover").innerHTML= "<p>GAME OVER!</p><p>Η ΒΑΘΜΟΛΟΓΙΑ ΣΟΥ: " + vathmos + "</p> <p> ΚΑΛΑ </p>";
			
	    }
		if (vathmos>0 && vathmos<=5){
		   setGameOver();
            document.getElementById("gameover").innerHTML= "<p>GAME OVER!</p><p>Η ΒΑΘΜΟΛΟΓΙΑ ΣΟΥ: " + vathmos + "</p> <p> ΜΕΤΡΙΑ - ΕΠΑΝΑΛΗΨΗ </p>";
		
		}
	    }
    },1000);
}
function setGameOver(){
                   stopCountdown();
                   show("gameover");
				   hide("xronos");
				   hide("sosto");
                   hide("lathos");
                   playing=false;
                   document.getElementById("start").innerHTML = "Start Game";
}

//nees erotiseis kai apantiseis
function generateQA(){
    //tyxaios arithmos apo 0 - 10 
    var randomNumber1 = Math.round(Math.random()*10);   
    var randomNumber2 = Math.round(Math.random()*10);     

    document.getElementById("problem").innerHTML=randomNumber1+ " x " +randomNumber2;
    sostiApantisi=randomNumber1*randomNumber2;  
    var answerBox= (Math.round(Math.random()*3))+1;

    //sosti apantisi se tyxaio koutaki
    document.getElementById("apantisi"+answerBox).innerHTML=sostiApantisi; 

    //apothikefsi sostou    
    var answers=[sostiApantisi];

    //gemisma me tyxaies apantiseis sta ypoloipa koutakia  

    //kane exclude to koutaki me ti sosti apantisi
    for (var i=1; i<5; i++)
    {if (i!==answerBox)
    { 
        var wrongAnswer;
        // check i lathos apantisi is not equal me ti sosti i me opoiadipota alli lathos 
        //do: random apantisi, while: generate then a new possible answer, if the previous answer is not ok
        do{
            wrongAnswer = (Math.round(Math.random()*10))*(Math.round(Math.random()*10));
        }            
        while(answers.indexOf(wrongAnswer)!==-1)  //lathos apantisi einai idi sti lista me tis apantiseis synexizoume to do loop   

            document.getElementById("apantisi"+i).innerHTML=wrongAnswer;
        //lathos apantisi ston kado me tis apantiseis
        answers.push(wrongAnswer);
    }
    }
}

		
		
		returnTohomepageButton = document.createElement('button');
		returnTohomepageButton.textContent = 'Αρχική Σελίδα';
		document.body.appendChild(returnTohomepageButton);
		returnTohomepageButton.addEventListener('click', returnTohomepage);
		
		nextButton = document.createElement('button');
		nextButton.textContent = 'NEXT GAME';
		document.body.appendChild(nextButton);
		nextButton.addEventListener('click', nextGame);
		
//stop counter
function stopCountdown(){
    clearInterval(action);
}
//krypse       
function hide(id){      
    document.getElementById(id).style.display="none";      
}   
//show
function show(id){      
    document.getElementById(id).style.display="block";      
}    
//epomeno game
function nextGame(){
	window.location.href = "../find the sum/sum_tutorial.html";
}
//pisw stin arxiki
function returnTohomepage(){
	window.location.href = "../../index.html";
}