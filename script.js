const myFunction = () => {
    const passInput = document.querySelector("#passInput");
    if (passInput.type === "password") {
        passInput.type = "text";
        document.querySelector('#closeEye').classList.add("hideEye");
        document.querySelector('#openEye').classList.remove("hideEye");
        
    } else {
        passInput.type = "password";
        document.querySelector('#closeEye').classList.remove("hideEye");
        document.querySelector('#openEye').classList.add("hideEye");
    }
}

const eye = document.querySelector('.eyeContainer');
eye.addEventListener('click', myFunction);