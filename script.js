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

// Copy increase & copy functionality 
const copyUp = document.getElementsByClassName("copy");

for (let btn of copyUp) {
    btn.addEventListener("click", function () {
        const number = this.getAttribute("data-number");

        navigator.clipboard.writeText(number)
            .then(() => {
                alert("Copied: " + number);
                
                copyCount++;
                document.getElementById("copy-count").innerText = copyCount;
            })
            .catch(err => {
                console.error("Copy failed", err);
            });
    });
}