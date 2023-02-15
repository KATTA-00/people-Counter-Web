// document.getElementById('count-el').textContent = 5;

let count = 0;
let countEl = document.getElementById('count-el');
let conlusion = document.getElementById('conslu');

conlusion.textContent = "Previous entries: "

function increment() {

    console.log(count);
    count++;
    countEl.textContent = count;

}

function save() {
    conlusion.textContent += count + ' - ';
    countEl.textContent = 0;
    count = 0;
}
