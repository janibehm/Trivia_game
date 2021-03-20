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
     let question = document.querySelector("#question")
     let btn_correct_answer = document.querySelector('#btn_correct_answer')
     let btn_incorrect_answer0 = document.querySelector('#btn_incorrect_answer0')
     let btn_incorrect_answer1 = document.querySelector('#btn_incorrect_answer1')
     let btn_incorrect_answer2 = document.querySelector('#btn_incorrect_answer2')
    
    
    //Create "question" text node
    document.querySelector("#question").innerHTML = ` Question: ${data.results[0].question}` 
   
    //ANSWERS
    
    //CORRECT ANSWER create text node

     btn_correct_answer.appendChild(document.createTextNode( `${data.results[0].correct_answer}`)); 
     
    //UNCORRECT ANSWERS create text node
     
     btn_incorrect_answers0.appendChild(document.createTextNode( `${data.results[0].incorrect_answers[0]}`));  
    
     btn_incorrect_answers1.appendChild(document.createTextNode( `${data.results[0].incorrect_answers[1]}`)); 

     btn_incorrect_answers2.appendChild(document.createTextNode( `${data.results[0].incorrect_answers[2]}`)); 
    }
    //ANSWERS ends here
     
    
    

    //Select answers html element
      let answers = document.querySelector('.answers');
    //Randomise button order
    for (let i = answers.children.length; i >= 0; i--) {
    answers.appendChild(answers.children[Math.random() * i | 0]);
     }

    //Add event listener to text nodes when clicked 
    //  function addListAfterClick () {
    //      if (inputLength() > 0) {
    //          createListElement()
    //      }
    //  }

   

      // function doSomething(event){
      //   console.log(event.type)//click
      //   console.log(event.target)//target
      // }

      // btn_correct_answer.addEventListner("click", doSomething)      
   
