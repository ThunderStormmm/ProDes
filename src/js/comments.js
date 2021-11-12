import { Question } from "./question";
import { checkForElement, isValid } from "./utils";

const AVA_QUANTITY = 5;

const isForm = checkForElement('#form');

if(isForm) {
    const form = document.getElementById('form');
    const input = form.querySelector('#question-input');
    const submitBtn = form.querySelector('#submit');
        form.addEventListener('submit', (event) => submitFormHandler(event, input, submitBtn));
        input.addEventListener('input',() =>{ 
            submitBtn.disabled = ! isValid(input.value);
    })
}

window.addEventListener('load', Question.renderList);

function submitFormHandler(event, input, submitBtn) {
    event.preventDefault();
    if (isValid(input.value)) {
        const randomInt = Math.round(Math.random() * 7);
        let ava;
        if (randomInt <= AVA_QUANTITY) {
            ava = randomInt;
        }
        else {
            ava = AVA_QUANTITY;
        }
        
        const question = {
            text: input.value.trim(),
            date: new Date().toJSON(),
            ava: ava
        }
        console.log(question);
        //Async riequest to server to save question
        Question.create(question).then( () =>{
            submitBtn.disabled = false;
            input.value = '';
        })
        console.log('Question', question);
    }
}
