/* function consoleSuccess(month, name) {
    console.log(month, name);  
    return console.log(month+1, name);
    }

    let result = consoleSuccess("3", "김개발"); // 함수를 호출한 결과를 result에 담아서
    console.log("consoleSuccess 호출 값은" + result); // 어떤 값이 리턴 되는지 직접 확인해보세요 */



function consoleTest(A, B) {
    console.log(A,B);
    /* return undefined */  /*  아무것도 정해져있지 않은 함수는 이 줄이 숨겨져있다. */
}  /* 함수를 정의해주는 곳이므로 로그에는 아무 것도 남지 않는다. */

    let C = consoleTest(1, 2);
    console.log("가" + C);
   
    /* 16줄에서 1 과 2가 함수에 들어가서 그대로 실행하여 로그값으로 남고. */
   /*  다시 함수와 무관하게 console.log를 실행을 하면 C값을 불러오는데, 실제로 함수에서 return된 값은 없기 때문에
    함수에서 실행된 log값은 return과 무관하다고 이해해야한다. 다시 말해, console은 개발자를 위한 메모창일 뿐
    실제 변수에 들어가야하는 실제 데이터값은 아니기 때문이다. 저 함수에는 실질적으로 return 값이 없다. 
    
    다시 기억해보자. 변수에는 로그값(메모장)이 아니라 실제 데이터가 들어가야한다.*/

    function consoleTest1(A, B) {
        console.log(A,B);
        return A + B;
    }  
        let C1 = consoleTest1(1, 2);
        console.log("가" + C1);