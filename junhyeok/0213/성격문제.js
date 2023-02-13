
const compareArrays = (a, b) => {
    return a.toString() == b.toString();
  };

function solution(A, B) {
    let answer = 0;


        for( let i = 1; i < A.length ; i++){
        if( compareArrays(A,B) == 1){
            answer = 0; break;
        }
      A.unshift(A[(A.length)-1]);
      A.pop();
        if( compareArrays(A,B) == 1 ){
            answer = i; break;
        }
        else if( i == A.length - 1){ 
            answer = -1; break;
        }
    };
    return answer;
}

let k1 = solution(["h","e","l","l","o"], ["o","h","e","l","l"]);
let k2 = solution(["a","p","p","l","e"], ["e","l","p","p","a"]);
let k3 = solution(["a","t","a","t"], ["t","a","t","a"]);
let k4 = solution(["a","b","c"], ["a","b","c"])

console.log(k1);
console.log(k2);
console.log(k3);
console.log(k4);
