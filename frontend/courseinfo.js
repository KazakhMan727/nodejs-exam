let userA = JSON.parse(localStorage.getItem("user"));

if (userA.roleId == 1) {
    location.href = "index.html";
}

let courseInfo = JSON.parse(localStorage.getItem("course"));
let title = $("#title");
let owner = $("#owner");
let desc = $("#desc");
let createDate =  $("#create_date");
let subBtn = $("#sub_btn");

title.append(`${courseInfo.title}`);
owner.append(`${courseInfo.owner}`);
desc.append(`${courseInfo.description}`);
createDate.append(`${courseInfo.createdAt}`);

subBtn.click(function () {
    let settings = {
        url: "http://localhost:8080/courses/enroll",
        method: "post",
        data: {
            _id: courseInfo._id,
            user: localStorage.getItem("user")
        },
        success: (response) => {
            console.log(response);
        },
        error: () => {
            console.log("ERROR");
        }
    }

    $.ajax(settings);
});