const myform = document.getElementById('mainForm');
myform.noValidate = true;

myform.addEventListener('submit', validateForm);

function validateForm(e) {
    const form = e.target;
    const errorMessages = document.querySelectorAll('.errorMessage');

    errorMessages.forEach(errorMessage => {
        errorMessage.remove();
    });

    if (form.checkValidity()) {
        let passwords = []
      // form is valid - make further checks
        Array.from(form.elements).forEach(i => {
            if (i.type == 'password') {
                passwords.push(i.value);
            }
        });

        if (passwords[0] !== passwords[1]) {
            e.preventDefault();
            Array.from(form.elements).forEach(i => {
                if (i.type == 'password') {
                    const para = document.createElement("div");
                    const node = document.createTextNode("Passwords must match.");
                    para.classList.add('errorMessage')
                    para.appendChild(node);
                    i.parentElement.appendChild(para);
                }
            });
        }
    }
    else {
      // form is invalid - cancel submit
      e.preventDefault();
      // apply invalid class
      Array.from(form.elements).forEach(i => {
        if (!i.checkValidity()) {
            const para = document.createElement("div");
            const node = document.createTextNode("Enter a response in the correct format.");
            para.classList.add('errorMessage')
            para.appendChild(node);
            i.parentElement.appendChild(para);
        }
      });
    }
  };