```js
let moji = prompt('入力せよ');
console.log(isNaN(moji));

let moji = prompt('入力せよ');
if(!isNaN(moji)){
    console.log(parseInt(moji)+80);
}

let moji = prompt('入力せよ');
if(!isNaN(moji)){
    console.log(parseInt(moji)+80);
}else{
    console.log('数字ではない')
}

console.log(4<5);
console.log(6<5);

let moji = prompt('年齢は？');
let age = parseInt(moji);
if(age<18){
    console.log('未成年');
}

let moji = prompt('年齢は？');
let age = parseInt(moji);
if(age<18){
    console.log('未成年')
} else if(age<65){
    console.log('成人')
} else{
    console.log('高齢者')
}

let moji = prompt('年齢は？');
if (!isNaN(moji)){
    let age = parseInt(moji);
    if(age<18){
        console.log('未成年')
    }
}

let moji = prompt('年齢は？');
let age = parseInt(moji);
if(age>=6 && age<=15){
    console.log('義務教育の対象')
}

let moji = prompt('年齢は？');
let age = parseInt(moji);
if(age <= 5 || age >= 65) {
    console.log('幼児と高齢者');
}

let moji = prompt('年齢は？');
if(!isNaN(moji)) {
    console.log('数値に変換可能');
}

let moji = prompt('年齢は？');
if(!isNaN(moji)) {
    let age = parseInt(moji);
    if(age < 18) {
        console.log('未成年');
        if(age >= 6 && age <= 15) {
            console.log('(義務教育)')
        }
    } else if (age < 65) {
        console.log('成人');
    } else {
        console.log('高齢者');
    }
}

let moji = prompt('年齢は？');
let age = parseInt(moji)
if (age < 6) {
    console.log('幼児')
}
```
