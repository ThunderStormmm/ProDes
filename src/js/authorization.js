export function getAuthForm(){
    return`
    <form class="forms" action="#" id="auth-form">
        <input type="email" id="email"  class="forms__input" required placeholder="Ваш E-mail" > 
        <input type="password" id="password" class="forms__input" required placeholder="Ваш пароль" >

        <button class="consultation__button">
            Регестрацыя 
        </button>
    </form>
       `
}

export function authWithEmailAndPassword(email, password) {
    const API_KEY = 'AIzaSyD0VQRlI8obWSFu0KfKU0W3EWBtTgwmxcc'
    return fetch(`
        https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${API_KEY}`,{
        method: 'POST',
        body: JSON.stringify({
            email, password
        }),
        header: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => data.idToken)
}