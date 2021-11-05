import { createModal, checkForElement, createOverlay} from "./utils";
import { getAuthForm, authWithEmailAndPassword } from "./authorization";
import { Question } from "./question";
const isModalBtn = checkForElement('modal-btn');

if(isModalBtn) {
    const modalBtn = document.getElementById('modal-btn');
    modalBtn.addEventListener('click', openModal);
}

function authFormHandler(event) {
    event.preventDefault()

    const email = event.target.querySelector('#email').value
    const password = event.target.querySelector('#password').value

    authWithEmailAndPassword(email, password)
        .then(token => {
            return Question.fetch(token);
        })
        .then(renderModalAfterAuth);
}

function renderModalAfterAuth(content){
    console.log('Content', content);
}

function openModal() {
    const modal = createModal('authorization', getAuthForm());
    console.log(modal);
    modal.querySelector('#auth-form').addEventListener('submit', authFormHandler, {once: true});
    modal.classList.add('m-show');
    body.append(modal);

    const overlay = createOverlay(); 
    overlay.classList.add('m-show');
    body.append(overlay);
}