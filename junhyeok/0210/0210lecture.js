/* 2월 10일 노션에 있는 자바스크립트 공부
- 벨로그에 따로 정리했음.
- 노션에 있는 과제 전부 풀이함. 
- 또한, 모질라 재단에서 따로 공부함.

관련 : https://velog.io/@justdoitjun/series/%EB%85%B8%EB%93%9C-%EA%B3%BC%EC%A0%9C-%EB%AA%A8%EC%9D%8C
      https://velog.io/@justdoitjun/JavaScript-2-Basic-principle-with-data-types-and-data-structures
        */

let arr =[];

function getTax(price) {
    return price * 0.1;
  }
function calculateTotal(price) {
    return price + getTax(price);
  }

function getTotal(arr){
    let sum = calculateTotal(arr[0]) + calculateTotal(arr[1]);
    return sum;
};


arr = [100, 300];
let k =getTotal(arr);
console.log(k);
