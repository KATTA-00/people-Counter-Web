// document.getElementById('count-el').textContent = 5;

let count = 0;
let countEl = document.getElementById('count-el');

function increment() {

    console.log(count);
    count++;
    countEl.textContent = count;

}
