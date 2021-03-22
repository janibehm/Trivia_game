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

    //function alert "Thats right!"
    function buttonClickedRight(ev){
      console.log(ev.type,ev.target,ev.currentTarget);
      alert("Thats right!")
    }
    //function alert "Try again!"
    function buttonClickedWrong(ev){
      console.log(ev.type,ev.target,ev.currentTarget);
      alert("Try again!")
    }
    //refresh page function
    function refreshPage(){
      location.reload();
    }

    // function addOne(){
    //   let foo = counter.innerHTML = foo++;
    //   counter.innerHTML = foo
    // }

    function addOne(ev){
      var foo = document.getElementById('counter').innerHTML;
      foo++;
      document.getElementById('counter').innerHTML = foo;
      console.log(ev.type,ev.target,ev.currentTarget);
    }

      //Add click to buttons
     next_question.addEventListener('click',refreshPage)
     
     btn_correct_answer.addEventListener('click',buttonClickedRight,{once:true});
    
     btn_incorrect_answer0.addEventListener('click',buttonClickedWrong),{once:true};
    
     btn_incorrect_answer1.addEventListener('click',buttonClickedWrong),{once:true};

     btn_incorrect_answer2.addEventListener('click',buttonClickedWrong),{once:true};
    
     //Add point when clicked rigth answer
     btn_correct_answer.addEventListener('click',addOne);

    //click function execute

    }//useApiData ends here!
    //ANSWERS ends here
    
    //Select answers html element
      let answers = document.querySelector('.answers');
    //Randomise button order
    for (let i = answers.children.length; i >= 0; i--) {
    answers.appendChild(answers.children[Math.random() * i | 0]);
     }

    

