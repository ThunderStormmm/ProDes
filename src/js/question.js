import { checkForElement } from "./utils";

export class Question{
    static create(question) {
        return fetch('https://prodes-c3765-default-rtdb.firebaseio.com/question.json', {
        method: 'POST',
        body: JSON.stringify(question),
        headers: {
                'Content-Type': "application/json"
            }
        })
        .then(response => response.json())
        .then(response => {
            question.id =response.name
            return question
        })
        .then(addToLocalStorage)
        .then(Question.renderList )
    }

    static fetch(token) {
        if(!token){
            return Promise.resolve('<p class="error">У вас нет токена</p>');
        }
        return fetch(`https://prodes-c3765-default-rtdb.firebaseio.com/question.json?auth=${token}`)
            .then(response => response.json())
            .then(response => {
                if (response.error) {
                    return `<p class="error">${response.error}</p>`
                }

                return response ? Object.keys(response).map(key => ({
                    ...response[key],
                    id: key
                })): []
            })
            
    }

    static renderList(){
        const questions = getQuestionsFromLocalStorage();
        console.log(questions);
        let isList = checkForElement('.comments__list');
        let html;
        let list;
        if (isList) {
            list = document.querySelector('.comments__list');
            html = questions.length
            ? questions.map(toCard).join('')
            : `<div class="comments__none">Покі тут нічого немає</div>`;
        } else {
            return false;
        }
        list.innerHTML = html;
    }
}
    
function addToLocalStorage(question){
    const all = getQuestionsFromLocalStorage();
    all.push(question);
    localStorage.setItem('questions', JSON.stringify(all));
}

function getQuestionsFromLocalStorage(){
    return JSON.parse(localStorage.getItem('questions')  || '[]');
}

function toCard(question) {
     const commentItem = `<li class="comments__item">
         <div class="comments__avatar">
             <img src="img/icons/avatar-${question.ava}.png" alt="" class="comments__img">
             <div class="comments__item-name">
             ${new Date(question.date).toLocaleDateString()}
             </div>
         </div>
         <div class="comments__text">${question.text}</div>
     </li>`;
     return commentItem;
    // return '11';
} 

// local time for sended questions 
// ${new Date(question.date).toLocaleTimeString()}