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