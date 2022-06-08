let coursesBlock = $("#courses_block");
let courses;

function getCourses () {
    let settings = {
        url: "http://localhost:8080/courses",
        method: "get",
        success: (response) => {
            console.log(response);
            courses = response;
        },
        error: () => {
            console.log("ERROR");
        }
    }

    $.ajax(settings);
}

function drawCourses () {
    for (let item of courses) {
        coursesBlock.append(`
            <div class="course" onclick="courseInfo(${item._id})">${item.title}</div>
        `);
    }
}

function courseInfo (courseId) {
    for (let item of courses) {
        if (item._id == courseId) {
            localStorage.setItem("course", JSON.stringify(item));
            location.href = "courseinfo.html";
        }
    }
}

getCourses();
drawCourses();