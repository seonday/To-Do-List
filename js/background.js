const images = ['1.jpg','2.jpg','3.jpg'];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); 

bgImage.src = `images/${chosenImage}`;

document.body.appendChild(bgImage);

// 1. Math 객체 기능
// Math.random() 0부터 1사이 무작위의 값을 반환해줌
// Math.floor() 내림
// Math.ceil() 올림
// Math.round() 반올림

// 2. JS에서 html 요소를 생성
// createElement(" ")
// 예를 들어,
// document.createElement("img")일 경우 html 내에 img 태그를 생성

// appendChild()
//  함수 안의 경로에 정의한 값을 가장 뒤에서 기입함
// append()
//  append()가 추가할 수 있는 종류가 더 많아요.
//  append()로는 문자열도 추가가 가능한데, appendChild()로는 객체만 추가할 수 있어요. :)
//  li.append("추가해주세요") → (가능)
//  li.appendChild("추가해주세요") → (불가능 - typeError)
//  그리고 console.log로 두 개를 찍어보면 append()하고 appendChild()가 다르게 나와요!

// prepend()
// // 반대로 앞에서 기입