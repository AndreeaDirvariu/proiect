var button_login = document.querySelector("#login-js").addEventListener("mouseover", function (e) {
    e.preventDefault();
    e.stopPropagation();
    var select_window_login = document.querySelector("#window_login");

    if (select_window_login.style.display === 'none') {
        select_window_login.style.display = 'block';
    } else {
        select_window_login.style.display = 'none';
    }
});

var document_button_login = document.querySelector("body").addEventListener("click", function (e) {
    var select_window_login = document.querySelector("#window_login");
    // if ([e.target.id == "window_login_email"]) {
    //     return;
    // }
    // if (e.target.id == "window_login_button") {
    //     return;
    // }
    // if (e.target.id == "window_login_password") {
    //     return;
    // }
    // if (e.target.id == "window_login") {
    //     return;
    // }
    // if (e.target.id == "login-password") {
    //     return;
    // }
    // if (e.target.id == "login-email") {
    //     return;
    // }
    if (select_window_login.style.display === "block") {
        select_window_login.style.display = "none";
    }
});



// var star = document.getElementsByClassName("star").addEventListener("mouseover", function(e){
//     alert("camp obligatoriu")
// })
