window.onload = sendApiRequest()

 async function sendApiRequest(){
    let response = await fetch(`https://opentdb.com/api.php?amount=1&category=12&difficulty=easy&type=multiple`)
     console.log(response)
     let data = await response.json()
     console.log(data)
     useApiData(data)
 }

function useApiData(data) {
     //Select html elements
     let btn_correct_answer = document.querySelector('#btn_correct_answer')
     let btn_incorrect_answer0 = document.querySelector('#btn_incorrect_answer0')
     let btn_incorrect_answer1 = document.querySelector('#btn_incorrect_answer1')
     let btn_incorrect_answer2 = document.querySelector('#btn_incorrect_answer2')
     let myBox = document.querySelector('#myBox')
     let nextQuestion = document.querySelector("#nextQuestion")
     let restart = document.querySelector('#restart')

     let mynum = sessionStorage.getItem('counter');   
 
      //  let audio = document.querySelector('#my_audio')
     
    //Create "question" text node
    question = document.querySelector("#question").innerHTML = `${data.results[0].question}` ;
   
    //ANSWERS

    //CORRECT ANSWER create text node

     btn_correct_answer.appendChild(document.createTextNode( `${data.results[0].correct_answer}`)); 
     
    //UNCORRECT ANSWERS create text node
   
     btn_incorrect_answer0.appendChild(document.createTextNode( `${data.results[0].incorrect_answers[0]}`));  
    
     btn_incorrect_answer1.appendChild(document.createTextNode( `${data.results[0].incorrect_answers[1]}`)); 

     btn_incorrect_answer2.appendChild(document.createTextNode( `${data.results[0].incorrect_answers[2]}`));
     
          
          
          //ButtonClickedRight function 
          function buttonClickedRight(ev){
         
          console.log(ev.type,ev.target,ev.currentTarget);
           //... then increment
              mynum ++;
         // And save back to session storage
                   sessionStorage.setItem('counter',mynum);
                   console.log(mynum)
      //  Save count to sessionsStorage
        if (mynum < 5){
            myBox.appendChild(document.createTextNode("Thats right! Your score is " + mynum + "!"));
        }
        
        if (mynum == 5) {
          myBox.appendChild(document.createTextNode("Congratulations You Win!"));
       }

        if(mynum == 5){
          return sessionStorage.clear();
        }  
        
    }
    function buttonClickedWrong(ev){
      console.log(ev.type,ev.target,ev.currentTarget);
      let mynum = sessionStorage.getItem('counter');
    //... then increment
     mynum --;
  // And save back to session storage
      sessionStorage.setItem('counter',mynum);
      if(mynum >= 0){
        myBox.appendChild(document.createTextNode("Wrong answer. Your score is " + mynum + "!"));
      } 
      
      if(mynum < 0){
        myBox.appendChild(document.createTextNode("Wrong answer. Your score is 0!")) 
      } 
      
      if(mynum < 0){
        return sessionStorage.clear()
      } 

    }
    
    // refresh page function
     function refreshPage(){
       if(mynum < 5){
        let refresh = setTimeout(function(ev){
          // console.log(ev.type,ev.target,ev.currentTarget)
          location.reload(); 
        },1000)
      }
   }
    

    function refreshPageInstant(){
        location.reload(); 
    }
 
//     function refreshPageEnter(ev){
//     console.log(ev.type,ev.target,ev.currentTarget)
//    if (KeyboardEvent.key === 13){
//     location.reload(); 
//    }  
// }
   function restartGame(ev){
   console.log(ev.type,ev.target,ev.currentTarget)
   sessionStorage.clear();
   }
  
   let stopTime = function myStopFunction() {
    clearInterval(setCount);
}

     //When clicked trigger buttonClickedWrong function
    
     btn_incorrect_answer0.addEventListener('click',buttonClickedWrong,{once:true});
     btn_incorrect_answer0.addEventListener('click',refreshPage,{once:true});
     btn_incorrect_answer0.addEventListener('click',stopTime,{once:true});
     
     btn_incorrect_answer1.addEventListener('click',buttonClickedWrong,{once:true});
     btn_incorrect_answer1.addEventListener('click',refreshPage,{once:true});
     btn_incorrect_answer1.addEventListener('click',stopTime,{once:true});
   
     btn_incorrect_answer2.addEventListener('click',buttonClickedWrong,{once:true});
     btn_incorrect_answer2.addEventListener('click',refreshPage,{once:true});
     btn_incorrect_answer2.addEventListener('click',stopTime,{once:true});

       //When clicked trigger buttonClickedRight function
     btn_correct_answer.addEventListener('click',buttonClickedRight,{once:true});
     btn_correct_answer.addEventListener('click',stopTime,{once:true});
     btn_correct_answer.addEventListener('click',refreshPage,{once:true});
     
     nextQuestion.addEventListener('click',refreshPageInstant),{once:true};
     
    //  document.addEventListener("keydown", refreshPageEnter,{once:true});

     restart.addEventListener('click',restartGame),{once:true};

     restart.addEventListener('click',refreshPageInstant),{once:true};
    }
     
 //time counter function 
 let label = document.getElementById("seconds");
 let totalSeconds = 11;
 let setCount = setInterval (setTime, 1001);

   function setTime() {
      console.log(setTime)
      --totalSeconds;
      label.innerHTML = pad(totalSeconds % 12); 
    }
    function pad(val) {
      // console.log(val)
      let valString = val + "";
      if (val > 0) {
        return valString;        
    }
       else if (val == 0){return location.reload() + valString;}     
      
   }
     
    //useApiData ends here!
    //ANSWERS ends here   
  
  //Randomise button order loop 
    let answers = document.querySelector('.answers');
    for (let i = answers.children.length; i >= 0; i--) {
    answers.appendChild(answers.children[Math.random() * i | 0]);
    }
