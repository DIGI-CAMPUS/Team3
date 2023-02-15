/* let num = 10;
let copyNum = num;
console.log(num); //10
console.log(copyNum); //10 */

/* 
let num = 10;
let copyNum = num;
num = 20; // 변수를 재할당(const 사용 시 오류)
console.log(num); //20
console.log(copyNum); //10 */

/* const num = 10;
const copyNum = num;
num = 20; // const 사용 시 오류(재할당 안됨)
console.log(num); 
console.log(copyNum); 
 */

/* const person = {
  name: "kb",          
};
person = {
  name: "kbb",        // 객체에 대해 수정하면 오류가 난다
}; */

/* const person = {
  name: "kb", // 객체에 대해 수정한 것이 아니라 속성에 대한 값을 변경한 것이기 때문에 오류가 나지 않음
};
person.name = "kbb";
console.log(person); */

/* const person = {
  name: "kb",
};
const copyPerson = person; // 변수 person에 할당된 객체를 변수 copyPerson에 복사
person.name = "kbb"; // 변수 person에 할당된 개체의 값을 변경
console.log(person.name);
console.log(copyPerson.name); // person의 속성을 변경시켜줬으니 copyPerson에도 변경됨 */

const kbstudent = {
  name: "kim",
  age: 20,
};
kbstudent.gender = "female";
delete kbstudent.age;
console.log(kbstudent);
