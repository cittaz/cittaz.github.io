//prevent the submit if the fields aren't filled
form.onsubmit = function(event) {
 if (insname.value === '' || insmail.value === '' || instext.value === '') {
    event.preventDefault();
    fillTheForm()
 }
 else {
    formAlert?.remove();
 }
};

function fillTheForm() {
  let alertText = document.getElementById("formAlert");  //return null if it doesn't exist
  if(!alertText){
  alertText = document.createElement('p');
  alertText.id = 'formAlert';
  contactParagraph.after(alertText); 
  formAlert.textContent = 'Please fill in all the requested fields';
  formAlert.style.color = 'red';
}
}
