async function getCourses () {
    let settings = {
        url: "http://localhost:8080/courses",
        method: "get"
    }

    await $.ajax(settings);
}

function drawCourses () {
    let courses = getCourses();

    for (let item of array) {

    }
}

drawCourses();