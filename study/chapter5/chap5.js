//5-3
const elem = document.querySelector(`p`);
elem.innerText = `JavaScriptで書く`;

//5-4
const ipt = document.querySelector(`input`);
const btn = document.querySelector(`button`);
const elem = document.querySelector(`p`);
btn.addEventListener(`click`,() => {
    elem.innerText = ipt.value;
} );

//5-5
