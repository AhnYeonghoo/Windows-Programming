// typeof: 데이터 타입을 확인
// 값을 타입 문자열로 반환
let variable;
console.log(typeof variable);

variable = '';
console.log(typeof variable);

variable = 123;
console.log(typeof variable);

// 자바스크립트는 동적 언어이다!

variable = {};
console.log(typeof variable);

variable = function () {};
console.log(typeof variable);

variable = Symbol();
console.log(typeof variable);
