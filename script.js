let heartCount = parseInt(document.getElementById('heart-count').innerText);
const coinCount  = parseInt(document.getElementById('coin-count').innerText);
const copyCount  = parseInt(document.getElementById('copy-count').innerText);

// heart increase

const heartUp = document.getElementsByClassName("heart");

for (let btn of heartUp) {
    btn.addEventListener("click", function () {
        heartCount++;
        document.getElementById("heart-count").innerText = heartCount;
    });
}