/* const person = {};   // 객체 리터럴 방식(함수를 지정해주고 값을 지정함), 이 경우는 값을 지정한 것은 아님
console.log(person); // { }
person.name = "kb";
console.log(person); // { name : "kb"} */

/* const person = {};
person.name = {
  firstName: "kb",
  lastName: "kbb"
};
person.likes = ["apple", "kbbb"];
console.log(person); */

const person = {
  name: "kb",
};
delete person.name; // 또는 delete person["name"]
console.log(person); // 출력
