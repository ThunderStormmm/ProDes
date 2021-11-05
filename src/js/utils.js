const COMMENTS_LENGTH = 10;

export function isValid(value){
   return value.length >= COMMENTS_LENGTH;
}

export function createModal(title, content) {
   const modal = document.createElement('div');
   modal.classList.add('modal');
   const html = ` 
      <div class="modal__title">${title}</div>
      <div class="modal__content">${content}</div>
   `
   modal.innerHTML = html;

   return modal;
}

export function checkForElement(elem) {
   if(document.body.contains(document.querySelector(elem))){
       return true;
   } else{
       return false;
   }
}

export function createOverlay () {
   const overlay = document.createElement('div');
   overlay.classList.add('overlay');

   return overlay;
}