/* 문제 설명
문자열 "hello"에서 각 문자를 오른쪽으로 한 칸씩 밀고 마지막 문자는 맨 앞으로 이동시키면 "ohell"이 됩니다.
 이것을 문자열을 민다고 정의한다면 문자열 A와 B가 매개변수로 주어질 때, 
A를 밀어서 B가 될 수 있다면 밀어야 하는 최소 횟수를 return하고 밀어서 B가 될 수 없으면 -1을 return 하도록 solution 함수를 완성해보세요. */

/* function solution(A, B) {
    var answer = 0;
    arrayA = Array.from(A);
    arrayB = Array.from(B)



    return answer;
} */

let C = "hello";
let arrayC = Array.from(C);
console.log(arrayC);
let lengthC = arrayC.length;
console.log(lengthC);
let indexingNum = lengthC - 1;
let addWord = arrayC[indexingNum];
let arrayC2 = arrayC.unshift(addWord);
console.log(arrayC2);
//arrayC[0]
