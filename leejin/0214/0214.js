// // const person = {}; //객체리터럴방식 .함수지정하고 값을 비워놨다
// // console.log(person); //{}
// // person.name = "kb";
// // console.log(person); //{name:"kb"}SSS

// // const person = {};
// // person.name = {
// // 	firstName: "KB",
// // 	lastname: "kbb",
// // };
// // person.like = ["apple", "kbbb"];
// // console.log(person);

// // const person = {
// // 	name: "kb",
// // };
// // delete person.name; //또는 delete person ["name"]
// // console.log(person);

// // let num = 10;
// // let copyNum = num;
// // console.log(num);
// // console.log(copyNum);

// const num = "10";
// const copyNum = num;
// num = 20;
// console.log(num);
// console.log(copyNum);

// const person = {
// 	name: "kb",
// };
// person.name = "kbb";
// console.log(person.name);

// const person = {
// 	name: "kb",
// };
// const copyPerson = person; //변수 person에 할당된 객체를 변수 copyperson에 복사
// person.name = "kbb"; //변수 person에 할당된 객체의 값을 변경
// console.log(copyPerson.name);

const kbstudent = {
	name: "kim",
	age: 20,
};
kbstudent.gendr = "female";
delete kbstudent.age;
console.log(kbstudent);
