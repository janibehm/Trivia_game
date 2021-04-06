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
     //Select html elements ends
     
     //sessionStorage counter
     let mynum = sessionStorage.getItem('counter');   
     
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
          const buttonClickedRight = (ev) => {
           // increment
              mynum ++;
         // store key/value pair
            sessionStorage.setItem('counter',mynum);
            console.log(mynum)
      //  Save count to sessionsStorage
        if (mynum < 5){
           return myBox.appendChild(document.createTextNode("Thats right! Your score is " + mynum + "!"));
        }
        
        else if (mynum == 5){
          return myBox.appendChild(document.createTextNode("Congratulations You Win!"));
       }

       else if(mynum == 5){
          return sessionStorage.clear();
        }  
        
    }
    const buttonClickedWrong = (ev) => {
    // increment
     mynum --;
  // store key/value pair
      sessionStorage.setItem('counter',mynum);
      if(mynum >= 0){
       return myBox.appendChild(document.createTextNode("Wrong answer. Your score is " + mynum + "!"));
      } 
      
      else if(mynum < 0){
       return myBox.appendChild(document.createTextNode("Wrong answer. Your score is 0!")) 
      } 
      
      else if(mynum < 0){
         return sessionStorage.clear()
      } 
      
    }
    
    // refresh page function
     const refreshPage = () =>{
       if(mynum < 5){
        let refresh = setTimeout((ev) => {
          location.reload(); 
        },1000)
      }
   }
    
    const refreshPageInstant = () => {
        return location.reload(); 
    }
 

   const restartGame = (ev) =>{
    return sessionStorage.clear();
   }
  
   let stopTime = () => {
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

     restart.addEventListener('click',restartGame),{once:true};

     restart.addEventListener('click',refreshPageInstant),{once:true};
    }
     
 //time counter 
 let label = document.getElementById("seconds");
 let totalSeconds = 11;
 let setCount = setInterval (setTime, 1001);

   function setTime() {
      console.log(setTime)
      --totalSeconds;
      label.innerHTML = pad(totalSeconds % 12); 
    }
     const pad = (val) => {
      let valString = val + "";
      if (val > 0) {
        return valString;        
    }
       else if (val == 0){
         return location.reload() + valString;
        }     
      
   }
     
    //useApiData ends here!
    //ANSWERS ends here   
  
  //Randomise button order loop 
    let answers = document.querySelector('.answers');
    for (let i = answers.children.length; i >= 0; i--) {
    answers.appendChild(answers.children[Math.random() * i | 0]);
    }
