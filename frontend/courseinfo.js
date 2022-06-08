let courseInfo = JSON.parse(localStorage.getItem("course"));
let user = JSON.parse(localStorage.getItem("user"));
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
            fullName: user.fullName,
            login: user.login,
            roleId: user.roleId
        },
        success: (response) => {
            console.log(response);
            let sub
        },
        error: () => {
            console.log("ERROR");
        }
    }

    $.ajax(settings);
});