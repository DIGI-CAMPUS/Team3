
/* 1.반복문일 때 break를 사용한 멈춤. 이 경우, for 중간값을 안 넣어줘도 된다. */

/* let i;
let sum = 0;

for(i =1; ; i++){
    sum += i;
    if (i>=10) break;
}

document.write(`1부터 ${i}까지 더하면` + sum) */


let k;
let m;

for(k = 1; ;k++){
    document.write("<a>" + k +"단" +"<br>"+"<br>") 
    for(m = 1; ;m++){
        document.write(k + "x" + m + "=" +  k*m + "<br>");
        if (m >= 9) break;
        }
    if (k >= 9) break;
    document.write("</a>") 
}