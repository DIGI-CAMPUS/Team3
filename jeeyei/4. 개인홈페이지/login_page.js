const id = document.getElementById("id");
// getElementById 대신 querySelector 사용 가능
const password = document.getElementById("password");
const login = document.getElementById("login");
const saveChecked = document.getElementById("saveCh")
let errorStack = 0;


login.addEventListener("click", () => {
  if (id.value == "testid") {
    if (password.value == "1234") {
      alert("로그인 되었습니다.");
      window.location.href = "http://www.naver.com/"; // 새로운 페이지 주소 넣기
    } else {
      alert("비밀번호가 틀렸습니다. 다시 한 번 확인해주세요.");
      // 로그인에 실패했을 때 '아이디 저장' 체크 여부를 확인 후 True면 비밀번호만 초기화
      if (saveChecked.checked === true){
        password.value=''
      } else{
        //false면 아이디 비밀번호 모두 초기화
        password.value = '';
        id.value = '';
        errorStack++;
      }}

  } else {
    alert("존재하지 않는 계정입니다. ID를 확인하여 주세요.");
  }

  if (errorStack >= 5) {
    alert("비밀번호를 5회 이상 틀리셨습니다.");
  }
});



id.addEventListener("keyup", validate);
password.addEventListener("keyup", validate);

function validate() {

  if(!(id.value && password.value)){
    login.style.cssText = "background-color: rgb(202, 220, 199)";
  } else {
    login.style.cssText = "cursor: pointer";
    login.style.cssText = "background-color: rgb(96, 149, 87)";
  }
}









