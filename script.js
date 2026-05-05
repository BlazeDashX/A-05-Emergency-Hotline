let heartCount = parseInt(document.getElementById('heart-count').innerText);
let coinCount  = parseInt(document.getElementById('coin-count').innerText);
let copyCount  = parseInt(document.getElementById('copy-count').innerText);

// heart increase
const heartUp = document.getElementsByClassName("heart");

for (let btn of heartUp) {
    btn.addEventListener("click", function () {
        heartCount++;
        document.getElementById("heart-count").innerText = heartCount;
    });
}

// Copy increase
const copyUp = document.getElementsByClassName("copy");

for (let btn of copyUp) {
    btn.addEventListener("click", function () {
        copyCount++;
        document.getElementById("copy-count").innerText = copyCount;
    });
}