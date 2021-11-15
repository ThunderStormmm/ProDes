const isNull = value => typeof value === "object" && !value;

document.addEventListener("DOMContentLoaded", function (event) {
   const http = 'sendmail.php';
   const form = document.getElementById('consultation-form');

   console.log("DOM fully loaded and parsed");

   form.addEventListener('submit', sendForm);

   async function sendForm(e) {
      e.preventDefault();
      let formData = new FormData(e.target);
      const data = {
         method: "POST",
         body: formData
      };

      let response = await fetch(http, data);

      if (response.ok) {
         let result = await response.json();

         if (isNull(result.data)) {

            alert(result.message);

         } else {

            console.table(result.message);
            console.table(result.data);

            form.reset();

         }
      }

   }

});