function logOut () {
    localStorage.removeItem("user");
    location.href = "login.html";
}

let user = JSON.parse(localStorage.getItem("user"));
let subHeader = $("#sub-header");
if (user != {}) {
    if (user.roleId == 1) {
        location.href = "index.html";
    }

    else if (user.roleId == 2) {
        subHeader.append(`
            <a href="courses.html">Курсы</a>
            <a href="subs.html">Подписки</a>
            <p onclick="logOut()">Выйти</p>
        `);
    }
}

else {
    location.href = "login.html";
}

let subbedCourses = $("#subbed-courses-block");

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
        for (let i = 0; i < item.enrolledStudents.length; i++) {
            if (item.enrolledStudents[i].login == user.login) {
                subbedCourses.append(`
                    <div class="course" onclick="courseInfo('${item._id}')">${item.title}</div>
                `);
            }
        }
    }
}

drawCourses();