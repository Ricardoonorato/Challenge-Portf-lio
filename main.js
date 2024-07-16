// Get input elements
const form = document.querySelector('.formcontato__form');
const nomeInput = document.getElementById('nome');
const emailInput = document.getElementById('email');
const assuntoInput = document.getElementById('assunto');
const mensagemTextarea = document.getElementById('mensagem');
const botaoSubmit = document.querySelector('.formcontato__botao');
const errorSpan = document.createElement('span');
errorSpan.classList.add('formcontato__error');

// Function to validate email format
function validateEmail(email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

// Event listener for form submission
form.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const nomeValue = nomeInput.value.trim();
  const emailValue = emailInput.value.trim();
  const assuntoValue = assuntoInput.value.trim();
  const mensagemValue = mensagemTextarea.value.trim();

  let isValid = true; // Initialize validity flag

  // Validate name
  if (!nomeValue) {
    errorSpan.textContent = 'O campo nome é obrigatório.';
    nomeInput.parentNode.appendChild(errorSpan);
    nomeInput.classList.add('error-nome'); // Add error class
    isValid = false;
  } else {
    errorSpan.remove();
    nomeInput.classList.remove('error-nome');
  }

  // Validate email
  if (!emailValue || !validateEmail(emailValue)) {
    errorSpan.textContent = 'Por favor, insira um e-mail válido.';
    emailInput.parentNode.appendChild(errorSpan);
    emailInput.classList.add('error-email');
    isValid = false;
  } else {
    errorSpan.remove();
    emailInput.classList.remove('error-email');
  }

  // Validate subject
  if (!assuntoValue) {
    errorSpan.textContent = 'O campo assunto é obrigatório.';
    assuntoInput.parentNode.appendChild(errorSpan);
    assuntoInput.classList.add('error-assunto');
    isValid = false;
  } else {
    errorSpan.remove();
    assuntoInput.classList.remove('error-assunto');
  }

  // Submit form if valid
  if (isValid) {
    // ... Submit the form ...

    // Clear errors and display success message
    errorSpan.remove();
    nomeInput.classList.remove('error-nome');
    emailInput.classList.remove('error-email');
    assuntoInput.classList.remove('error-assunto');

    botaoSubmit.removeAttribute('disabled'); // Enable submit button

    const successMessage = document.getElementById('success-message');
    successMessage.textContent = 'Mensagem enviada com sucesso!';
    setTimeout(() => successMessage.textContent = '', 3000); // Hide message after 3 seconds
  }
});

// Clear error messages when inputting in error fields
nomeInput.addEventListener('input', () => {
  errorSpan.remove();
  nomeInput.classList.remove('error-nome');
});

emailInput.addEventListener('input', () => {
  errorSpan.remove();
  emailInput.classList.remove('error-email');
});

assuntoInput.addEventListener('input', () => {
  errorSpan.remove();
  assuntoInput.classList.remove('error-assunto');
});






// esse comentário a baixo é referente ao -PRIMEIRO DA IA- html no index que veio na tarefa obrigatoriedaes nos campos porem basicas

// const form = document.querySelector('.formcontato__form');
// const nomeInput = document.getElementById('nome');
// const emailInput = document.getElementById('email');
// const assuntoInput = document.getElementById('assunto');
// const mensagemTextarea = document.getElementById('mensagem');
// const botaoSubmit = document.querySelector('.formcontato__botao');
// const errorSpan = document.createElement('span');
// errorSpan.classList.add('formcontato__error');

// form.addEventListener('submit', (event) => {
//   event.preventDefault(); // Prevent default form submission

//   const nomeValue = nomeInput.value.trim();
//   const emailValue = emailInput.value.trim();
//   const assuntoValue = assuntoInput.value.trim();
//   const mensagemValue = mensagemTextarea.value.trim();

//   let isValid = true; // Initialize a flag for validity

//   // Validate name
//   if (!nomeValue) {
//     errorSpan.textContent = 'O campo nome é obrigatório.';
//     nomeInput.parentNode.appendChild(errorSpan);
//     isValid = false;
//   } else {
//     // Remove any previous error for name
//     errorSpan.remove();
//   }

//   // Validate email
//   if (!emailValue || !validateEmail(emailValue)) {
//     errorSpan.textContent = 'Por favor, insira um e-mail válido.';
//     emailInput.parentNode.appendChild(errorSpan);
//     isValid = false;
//   } else {
//     // Remove any previous error for email
//     errorSpan.remove();
//   }

//   // Validate subject
//   if (!assuntoValue) {
//     errorSpan.textContent = 'O campo assunto é obrigatório.';
//     assuntoInput.parentNode.appendChild(errorSpan);
//     isValid = false;
//   } else {
//     // Remove any previous error for subject
//     errorSpan.remove();
//   }

//   if (isValid) {
//     // Submit the form if all validations pass
//     form.submit();
//   }
// });

// function validateEmail(email) {
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// }




// esse comentário a baixo é referente ao html no index que veio na tarefa mas tá sem as obrigatoriedaes nos campos

// const form = document.querySelector('.formcontato__form');
// const nomeInput = document.getElementById('nome');
// const emailInput = document.getElementById('email');
// const assuntoInput = document.getElementById('assunto');
// const mensagemTextarea = document.getElementById('mensagem');
// const botaoSubmit = document.querySelector('.formcontato__botao');
// const errorSpan = document.createElement('span');
// errorSpan.classList.add('formcontato__error');

// form.addEventListener('submit', (event) => {
//   event.preventDefault(); // Prevent default form submission

//   const nomeValue = nomeInput.value.trim();
//   const emailValue = emailInput.value.trim();
//   const assuntoValue = assuntoInput.value.trim();
//   const mensagemValue = mensagemTextarea.value.trim();

//   let isValid = true; // Initialize a flag for validity

//   // Validate name
//   if (!nomeValue) {
//     errorSpan.textContent = 'O campo nome é obrigatório.';
//     nomeInput.parentNode.appendChild(errorSpan);
//     isValid = false;
//   } else {
//     // Remove any previous error for name
//     errorSpan.remove();
//   }

//   // Validate email
//   if (!emailValue || !validateEmail(emailValue)) {
//     errorSpan.textContent = 'Por favor, insira um e-mail válido.';
//     emailInput.parentNode.appendChild(errorSpan);
//     isValid = false;
//   } else {
//     // Remove any previous error for email
//     errorSpan.remove();
//   }

//   // Validate subject
//   if (!assuntoValue) {
//     errorSpan.textContent = 'O campo assunto é obrigatório.';
//     assuntoInput.parentNode.appendChild(errorSpan);
//     isValid = false;
//   } else {
//     // Remove any previous error for subject
//     errorSpan.remove();
//   }

//   // Validate message length
//   if (mensagemValue.length < 10) {
//     errorSpan.textContent = 'Sua mensagem deve ter pelo menos 10 caracteres.';
//     mensagemTextarea.parentNode.appendChild(errorSpan);
//     isValid = false;
//   } else {
//     // Remove any previous error for message
//     errorSpan.remove();
//   }

//   if (isValid) {
//     // Submit the form if all validations pass
//     form.submit();
//   }
// });

// function validateEmail(email) {
//   const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//   return re.test(email);
// }






// esse comentário aqui em baixo é referente ao codigo html que etá comentado lá no index

// function validateForm() {
//     if (!validateName() || !validateEmail() || !validateAssunto() || !validateMensagem()) {
//       return false;
//     }
//     return true;
//   }
  
//   function validateName() {
//     const name = document.getElementById('nome').value;
//     const errorSpan = document.getElementById('nomeError');
  
//     if (!name) {
//       errorSpan.textContent = 'Por favor, preencha o campo nome.';
//       return false;
//     } else if (name.length < 3) {
//       errorSpan.textContent = 'O nome deve ter pelo menos 3 caracteres.';
//       return false;
//     } else {
//       errorSpan.textContent = '';
//       return true;
//     }
//   }
  
//   function validateEmail() {
//     const email = document.getElementById('email').value;
//     const errorSpan = document.getElementById('emailError');
  
//     if (!email) {
//       errorSpan.textContent = 'Por favor, preencha o campo email.';
//       return false;
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//       errorSpan.textContent = 'Formato de email inválido.';
//       return false;
//     } else {
//       errorSpan.textContent = '';
//       return true;
//     }
//   }
  
//   function validateAssunto() {
//     const assunto = document.getElementById('assunto').value;
//     const errorSpan = document.getElementById('assuntoError');
  
//     if (!assunto) {
//       errorSpan.textContent = 'Por favor, preencha o campo assunto.';
//       return false;