const emailInputElement=document.getElementById("email"),passwordInputElement=document.getElementById("password"),signupFormElement=document.querySelector("form");let emailIsValid=!1,passwordIsValid=!1;function validateEmail(e){let t=new Promise(function(t,a){"test@test.com"===e?a(Error("Email exists already")):t()});return t}function validatePassword(e){if(e.trim().length<6)throw Error("Invalid password - must be at least 6 characters long.")}async function validateInputHandler(e,t){let a=t.target,l=a.value,n=validateEmail;"password"===e&&(n=validatePassword);let r=document.getElementById(e+"-error");r&&r.remove();let s=!0;try{await n(l)}catch(d){let o=document.createElement("p");o.id=e+"-error",o.textContent=d.message,a.parentElement.append(o),s=!1}"email"===e?emailIsValid=s:passwordIsValid=s}function submitFormHandler(e){e.preventDefault();let t="An error occurred!",a="Invalid input values - please check your entered values.";emailIsValid&&passwordIsValid&&(t="Success!",a="User created successfully!"),openModal(t,a)}function openModal(e,t){let a=document.createElement("div");a.className="backdrop";let l=document.createElement("aside");l.className="modal",l.innerHTML=`
    <header>
      <h2>${e}</h2>
    </header>
    <section>
      <p>${t}</p>
    </section>
    <section class="modal__actions">
      <button>Okay</button>
    </section>
  `;let n=l.querySelector("button");a.addEventListener("click",closeModal),n.addEventListener("click",closeModal),document.body.append(a),document.body.append(l)}function closeModal(){let e=document.querySelector(".modal"),t=document.querySelector(".backdrop");e.remove(),t.remove()}emailInputElement.addEventListener("blur",validateInputHandler.bind(null,"email")),passwordInputElement.addEventListener("blur",validateInputHandler.bind(null,"password")),signupFormElement.addEventListener("submit",submitFormHandler);