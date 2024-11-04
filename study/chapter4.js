let createMail = () => {
    console.log('PT企画の斉藤です。')
    console.log('請求書を送ります。')
};
createMail();

let createMail = (recv) => {
    console.log(recv + '様');
    console.log('PT企画の斉藤です。');
    console.log('請求書を送ります。');
};
createMail('山本');
createMail(`吉田`);

let createMail = (recv, bill) => {
    let msg = `${recv}様
PT企画の斉藤です。
今月の請求額は${bill}円です。`;
    console.log(msg);
};
createMail('山本', 40000);

let addCharge = (bill) => {
    return bill * 1.07;
};
console.log(addCharge(40000));

let data = {name:'山本', bill:40000, crg:true};
console.log(data[`name`]);
console.log(data['bill']);

let data = [
{name:'山本', bill:40000, crg:true},
{name:'吉田', bill:25000, crg:false}
];
console.log(data[1]['name']);
console.log(data[1]['bill']);

//メールを作る関数
let createMail = (recv, bill) => {
    let msg = `${recv}様
PT企画の斉藤です。
今月の請求額は${bill}円です。`
    console.log(msg)
};
//手数料を追加する関数
let addCharge = (bill) => {
    return bill *1.07;
};
//送付先データ
let data = [
{name:`山本`, bill:40000, crg:true},
{name:`吉田`, bill:25000, crg:false}
];
//メール作成実行
for(let rec of data) {
    let bill = rec[`bill`];
    if(rec[`crg`]) {
        bill = addCharge(bill);
    }
    createMail(rec[`name`], bill);
}

let createMail = (recv) => {
    console.log(recv + '様');
    console.log(`はじめまして`);
};
createMail('山本');

let addCharge = (bill) => {
    if (bill < 0) {
        return 0;
    }
    return bill * 1.07;
};
console.log(addCharge(-1000));
