window.onload = sendApiRequest()

 async function sendApiRequest(){
     let response = await fetch ('https://opentdb.com/api.php?amount=10&category=12&difficulty=easy&type=multiple');
     console.log(response)
     let data = await response.json()
     console.log(data)
     useApiData(data)
 }

  
function useApiData(data) {
     
    //Select html elements
    //  let answers = document.querySelector('.answers')
     let btn_correct_answer = document.querySelector('#btn_correct_answer')
     let btn_incorrect_answer0 = document.querySelector('#btn_incorrect_answer0')
     let btn_incorrect_answer1 = document.querySelector('#btn_incorrect_answer1')
     let btn_incorrect_answer2 = document.querySelector('#btn_incorrect_answer2')
     let next_question = document.querySelector('#next_question')
     let counter = document.querySelector('#counter')
     let audio = document.querySelector('#my_audio')
    //  let counter = document.querySelector('#counter')


    //Create "question" text node
    document.querySelector("#question").innerHTML = ` ${data.results[0].question}` ;
   
    //ANSWERS
    // answers.appendChild(document.createTextNode( `${data.results[0]}`)); 
    //CORRECT ANSWER create text node

     btn_correct_answer.appendChild(document.createTextNode( `${data.results[0].correct_answer}`)); 
     
    //UNCORRECT ANSWERS create text node
   

     btn_incorrect_answer0.appendChild(document.createTextNode( `${data.results[0].incorrect_answers[0]}`));  
    
     btn_incorrect_answer1.appendChild(document.createTextNode( `${data.results[0].incorrect_answers[1]}`)); 

     btn_incorrect_answer2.appendChild(document.createTextNode( `${data.results[0].incorrect_answers[2]}`)); 
    
    //Function declarations

    window.onload=function(){
      document.getElementById("my_audio").play();
    }

    //buttonClickedRight
    function buttonClickedRight(ev){
      console.log(ev.type,ev.target,ev.currentTarget);
      let mynum = sessionStorage.getItem('counter');
      //... then increment
       mynum ++;
    //  // And save back to session storage
        sessionStorage.setItem('counter',mynum);
        // mynum.appendChild(document.createTextNode()
        window.alert("Thats right! Your score is " + mynum+" !")
    }
    //buttonClickedWrong
    function buttonClickedWrong(ev){
      console.log(ev.type,ev.target,ev.currentTarget);
      let mynum = sessionStorage.getItem('counter');
    //... then increment
     mynum --;
  //  // And save back to session storage
      sessionStorage.setItem('counter',mynum);
      // mynum.appendChild(document.createTextNode()
      window.alert("Try again! Your score is " + mynum+" !")
    }
    //refresh page function
    function refreshPage(){
      location.reload();
    }

    //  function addOne(ev){
    //    let foo = document.getElementById('counter').innerHTML;
    //    foo++;
    //    document.getElementById('counter').innerHTML = foo;
   
    //    console.log(ev.type,ev.target,ev.currentTarget);
    //  }

    // function addOne(ev){
    //   let foo = document.getElementById.('counter').innerHTML;
    //   foo++;
    //   document.getElementById('counter').innerHTML = foo;
    //   console.log(ev.type,ev.target,ev.currentTarget);
    // }

    // if (typeof(Storage) !== "undefined") {
    //   localStorage.setItem("points", "1");
    //   document.getElementById("counter").innerHTML = localStorage.getItem("points");
    //   console.log("counter")
    // } else {
    //   document.getElementById("counter").innerHTML = "Sorry, your browser does not support Web Storage...";
    // }
    
  //save points when page reload
  //    function savePoints(ev){
  //    let mynum = sessionStorage.getItem('counter');
  //   //... then increment
  //    mynum ++;
  // //  // And save back to session storage
  //     sessionStorage.setItem('counter',mynum);
  //     // mynum.appendChild(document.createTextNode()
  //     window.alert("Thats right! Your score is " + mynum+" !")
    
  //   } // Get counter from session storage or set it to 0

   
      //Add click to buttons
     next_question.addEventListener('click',refreshPage);
     
    //  btn_correct_answer.addEventListener('click',buttonClickedRight,{once:true});
    
     btn_incorrect_answer0.addEventListener('click',buttonClickedWrong),{once:true};
    
     btn_incorrect_answer1.addEventListener('click',buttonClickedWrong),{once:true};

     btn_incorrect_answer2.addEventListener('click',buttonClickedWrong),{once:true};
    
     //Add point when clicked rigth answer and greeting
    //  btn_correct_answer.addEventListener('click',addOne);

     btn_correct_answer.addEventListener('click',buttonClickedRight);
     btn_correct_answer.addEventListener('click',refreshPage);

    //click function execute

    }//useApiData ends here!
    //ANSWERS ends here
    
    //Select answers html element
      let answers = document.querySelector('.answers');
    //Randomise button order
    for (let i = answers.children.length; i >= 0; i--) {
    answers.appendChild(answers.children[Math.random() * i | 0]);
    }