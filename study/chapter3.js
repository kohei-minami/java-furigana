let fund = 50000;
while(fund >= 0) {
    console.log(fund);
    fund = fund - 5080;
}


for(let cnt = 0; cnt < 10; cnt++) {
    console.log('hello');
}

for(let cnt = 0; cnt < 10; cnt++) {
    console.log(cnt + '回目のhello!!');
}

for(let cnt = 10; cnt > 0; cnt--) {
    console.log(cnt + '回目のhello!!');
}

for(let cnt1 = 1; cnt1 < 10; cnt1++) {
    for(let cnt2 = 1; cnt2 < 10; cnt2++) {
        console.log(cnt1 + 'x' + cnt2 + '=' + cnt1 * cnt2);
    }
}

let wdays = ['月', '火', '水', '木', '金'];
console.log(wdays[1]);

let wdays = ['月', '火', '水', '木', '金'];
for(let day of wdays) {
    console.log(day + '曜日');
}

let wdays = ['月', '火', '水', '木', '金'];
for (let cnt = 0; cnt < wdays.length; cnt++) {
    console.log(wdays[cnt] + '曜日');
}

let team = ['A', 'B', 'C', 'D', 'E'];
for(let t1 of team) {
    for(let t2 of team) {
        if(t1 !== t2) {
            console.log(t1 + ' vs '+ t2);
        }
    }
}

let team = ['A', 'B', 'C', 'D', 'E'];
let opps = ['A', 'B', 'C', 'D', 'E'];
for(let t1 of team) {
    opps.shift();
    for(let t2 of opps) {
        console.log(t1 + ' vs ' +t2);
    }
}

let dir = ['東', '西', '南', '北'];
for (let d of dir) {
    console.log(d);
}

let wdays = ['月', '火', '水', '木', '金'];
for (let cnt =  wdays.length -1 ; cnt >= 0; cnt--) {
    console.log(wdays[cnt] + '曜日');
}