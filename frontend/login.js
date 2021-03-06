let loginInput = $("#login");
let passwordInput = $("#password");
let loginBtn = $("#login_btn");

loginBtn.click(function () {
    let settings = {
        url: "http://localhost:8080/users/login",
        method: "post",
        data: {
            login: loginInput.val(),
            password: passwordInput.val()
        },
        success: (response) => {
            localStorage.setItem("user", JSON.stringify(response));
            location.href = "index.html";
        },
        error: () => {
            console.log("ERROR");
        }
    }

    $.ajax(settings);
});