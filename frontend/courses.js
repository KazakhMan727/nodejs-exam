function logOut () {
    localStorage.removeItem("user");
}

let user = JSON.parse(localStorage.getItem("user")) || {};
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
        subHeader.append(`
            <a href="courses.html">Курсы</a>
            <a href="subs.html">Подписки</a>
            <p onclick="logOut()">Выйти</p>
        `);
    }
}

else if (user == {}) {
    location.href = "login.html";
}

let coursesBlock = $("#courses_block");

async function getCourses () {
    let settings = {
        url: "http://localhost:8080/courses",
        method: "get"
    }

    return await $.ajax(settings);
}

async function drawCourses () {
    let courses = await getCourses();
    console.log(courses);
    for (let item of courses) {
        coursesBlock.append(`
            <div class="course" onclick="courseInfo('${item._id}')">${item.title}</div>
        `);
    }
}

async function courseInfo (courseId) {
    let courses = await getCourses();
    for (let item of courses) {
        if (item._id == courseId) {
            localStorage.setItem("course", JSON.stringify(item));
            location.href = "courseinfo.html";
        }
    }
}

drawCourses();