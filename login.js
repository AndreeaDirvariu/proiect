var signUp = document.querySelector("#button-submit");
signUp.addEventListener("click", loghin);

function loghin(e) {
    e.preventDefault();

    var email = document.querySelector("#email").value;
    var password = document.querySelector("#password").value;

    var body = {
        email,
        password,
    };

    fetch("http://localhost:3000/api/auth/login", {
        method: "POST",
        body: JSON.stringify(body)
    })
        .then(resp => resp.json())
        .then(function tokenFuntions(response) {
            sessionStorage.setItem("token", response.token)
            window.location.assign("index.html")
        })
        .catch(error => console.log("my error", error))

};