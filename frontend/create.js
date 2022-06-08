function logOut () {
    localStorage.removeItem("user");
}

let user = JSON.parse(localStorage.getItem("user"));
let subHeader = $("#sub-header");
if (user != {}) {
    if (user.roleId == 1) {
        subHeader.append(`
            <a href="">Создать курс</a>
            <a href="courses.html">Курсы</a>
            <a onclick="logOut()">Выйти</a>
        `);
    }

    else if (user.roleId == 2) {
        subHeader.append(`
            <a href="courses.html">Курсы</a>
            <a onclick="logOut()">Выйти</a>
        `);
    }
}

else {
    location.href = "login.html";
}

let titleInput = $("#title");
let descriptionInput = $("#description");
let createBtn = $("#create_btn");

createBtn.click(function () {
    let settings = {
        url: "http://localhost:8080/courses",
        method: "post",
        data: {
            title: titleInput.val(),
            owner: JSON.parse(localStorage.getItem("user")),
            description: descriptionInput.val(),
            enrolledStudents: [],
            createdAt: `${getDate()}.${getMonth() + 1}.${getFullYear()}`
        },
        success: (response) => {
            console.log(response);
        },
        error: () => {
            console.log("error");
        }
    }
});