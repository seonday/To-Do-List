const clock = document.querySelector('h2#clock');

function getClock(){
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

// 해당 시간을 1번만 보여줌
getClock()
// 1초마다 시간을 갱신(실질적으로 보여지는 함수)
setInterval(getClock, 1000);

//5.1
// setInterval(sayHello, 1000);
// sayHello() 라는 펑션을 1초마다 반복한다는 의미.
// 단 바로 실행되지 않고 1초 후 첫 시작이 되고 계속 1초마다 반복된다.

// setTimeout(sayHello, 1000);
// 1초 기다렸다가 한번만 실행.


//5.2
//padStart(maxlength, string) / padEnd()
//기존의 글자수보다 더 길게 늘이고자 하는 길이, 문자

						 



