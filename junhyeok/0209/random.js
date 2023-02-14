let card, answer, i;
card = Math.floor(Math.random()*100);

/* alert("2 더하기 2는 " + 2 + 2); */
alert("숫자는 결정되었습니다!");
alert('0~99 사이의 숫자입니다. 맞춰보세요');

    for(i=1; ;i++){
    answer = prompt("당신이 생각하는 숫자는?")
        if( answer < card) {
            alert("좀 더 높은 수입니다!");
        }
        else if( answer > card) {
            alert("좀 더 낮은 수입니다.");
        }
        else{
            alert("정답입니다."); break;
        }
    }
document.write("시도횟수"+i+"번만에 성공하셨습니다. 축하합니다.")


//난수를 세번 맞추는 게임==================================

/* 
let n;//난수
let a;//입력한 수
let count = 0;//반복횟수
let correct = 0;//정답횟수
let high = 99//최고 숫자
let low = 1//최저 숫자 */

/* n = Math.floor(Math.random() * 100)
alert("숫자가 결정되었습니다.");

while(1){
  alert("힌트 : 정답은 " + low + "와 " + high + "사이의 수입니다")
  a = prompt("숫자를 입력해주세요")
  count ++;
  if(n > a){
  alert("더 큰 수 입니다");
  alert("시도횟수" + count + "번");
  if(low < a){
  low = a;
  }
} else if(n < a){
  alert("더 작은 수 입니다");
  alert("시도횟수" + count + "번");
  if(high > a){
    high = a;
  }
} else {alert("정답입니다 짝짝짝");
  alert("시도횟수" + count + "번에 맞추셨습니다");
  document.write("시도횟수"+ count + "번에 맞추셨습니다\n<br>")
    correct ++;
    n = Math.floor(Math.random() * 100);
    count = 0;
    low = 1;
    high = 99;
    if(correct === 3){
      break;
    }
  }
} */