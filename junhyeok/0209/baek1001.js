let x, a, b, sum, sumb, newt, tenb, i, k;

x = prompt("Number!!!")

for (i = 1, k = x;   ;i++){   /* 초기값을 2개 지정할 수 있음  i는 카운팅 숫자 k는 계속 바뀌는 숫자*/ 
    a = parseInt(k / 10);     /* k값의 10의 자리 숫자 - 10으로 나눈 몫 문제에선 : 2 */
    b = parseInt(k % 10);     /* k값의 1의 잘 숫자 - 10으로 나눈 나머지 문제에선 : 6 */
    sum = a + b;              /*  이 둘을 합친 sum : 문제에선 :8 */
    tenb = 10 * b;          /* 6을 60으로 만들기 위한 변수 */
    sumb = parseInt(sum % 10);     /*  sum의 1의 자리 숫자를 구하기 위함. 문제에선 4 */
    newt = tenb + sumb;     /* 새로운 숫자를 만들기 위한 변수 문제에선 12 */
    k = newt;           /* for문에서 반복이 되도록 만들기 위해 매개변수 새로 지정 */
    if( x == newt) break;      /* 기존에 설정한 변수와 일치할 때 반복 멈춤 */
}
console.log(i);     /* i값(카운팅넘버)를 출력함. */