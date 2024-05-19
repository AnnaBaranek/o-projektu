const form = document.querySelector('#nameForm');
const inputField = document.getElementById('nameInput');
const greetContainer = document.getElementById('greetContainer');

const handleSubmit = (event) => {
  event.preventDefault();
  const jmeno = inputField.value;
  console.log(jmeno);
  greetContainer.innerHTML = `<p class="jsText">Ahoj, ${jmeno}! Díky za tvůj zájem. Právě teď mě Adéla a Anička pilně vyvíjejí, abych mohl co nejlépe pomoci ženám s jejich problémy při kojení. Mrkni se zatím do sekce <a href="o_projektu.html">o projektu</a>!</p></div>`;
};

form.addEventListener('submit', handleSubmit);
