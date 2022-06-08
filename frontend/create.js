function logOut () {
    localStorage.removeItem("user");
}

let user = JSON.parse(localStorage.getItem("user"));
let subHeader = $("#sub-header");
if (user != {}) {
    if (user.roleId == 1) {
        subHeader.append(`
            <a href="create.html">Создать курс</a>
            <a href="courses.html">Курсы</a>
            <p onclick="logOut()">Выйти</p>
        `);
    }

    else if (user.roleId == 2) {
        location.href = "index.html"
    }
}

else {
    location.href = "login.html";
}

let titleInput = $("#title");
let descriptionInput = $("#description");
let createBtn = $("#create_btn");
let date = new Date();

createBtn.click(function () {
    let settings = {
        url: "http://localhost:8080/courses",
        method: "post",
        data: {
            title: titleInput.val(),
            owner: localStorage.getItem("user"),
            description: descriptionInput.val(),
            enrolledStudents: [],
            createdAt: `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`
        },
        success: (response) => {
            console.log(response);
        },
        error: () => {
            console.log("error");
        }
    }

    $.ajax(settings);
});