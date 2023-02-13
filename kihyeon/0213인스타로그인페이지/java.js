//https://velog.io/@yujinaa/JavaScript%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-%EC%9D%B8%EC%8A%A4%ED%83%80%EA%B7%B8%EB%9E%A8-%ED%81%B4%EB%A1%A0%EC%BD%94%EB%94%A9

let button_control = document.querySelector("button")
console.log(button_control)

let id_control = document.querySelector(".idBar")
console.log(id_control);

let pw_control = document.querySelector(".pwBar")
console.log(pw_control);

function login(){
    let idBox = id_control.value;
    let pwBox = pw_control.value;
    console.log(idBox);
    console.log(pwBox);

    if (idBox === "digicam" && pwBox === "100400"){
        alert("로그인 성공");
        location.reload()
    }else {alert("로그인 실패")
location.reload()
}
}