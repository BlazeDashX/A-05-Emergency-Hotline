let heartCount = parseInt(document.getElementById('heart-count').innerText);
let coinCount = parseInt(document.getElementById('coin-count').innerText);
let copyCount = parseInt(document.getElementById('copy-count').innerText);

// heart increase
const heartUp = document.getElementsByClassName("heart");

for (let btn of heartUp) {
    btn.addEventListener("click", function () {
        heartCount++;
        document.getElementById("heart-count").innerText = heartCount;
    });
}

// Copy increase & clipboard copy functionality 
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

// clear Call History
const clearBtn = document.getElementById("btn-clear-history");
const historyUl = document.getElementById("call-history-list");
const historyEmpty = document.getElementById("call-history-empty")
clearBtn.addEventListener("click", function () {
    historyUl.innerHTML = "";

    historyEmpty.classList.remove("hidden");
});

// Call-Button (coin deduct and add history )
const callBtn = document.getElementsByClassName("call");

for (let btn of callBtn) {
    btn.addEventListener("click", function () {
        const name = this.getAttribute("data-name");
        const number = this.getAttribute("data-number");
        
        if (coinCount < 20) {
            alert("Insufficient coins. Please recharge to make a call.");
            return;
        }

        alert(`Calling ${name} at ${number}...\n20 coins have been deducted.`);
        coinCount -= 20;
        document.getElementById("coin-count").innerText = coinCount;
        addToHistory(name, number);

    });
}

// history function

function addToHistory(name, number) {
    const historyUl = document.getElementById("call-history-list");
    const historyEmpty = document.getElementById("call-history-empty");

    historyEmpty.classList.add("hidden");
    const time = new Date().toLocaleTimeString();

    const li = document.createElement("li");
    li.className = "call-history-item flex justify-between items-start bg-gray-100 rounded-xl p-4";

    li.innerHTML = `
        <div>
            <p class="font-bold text-sm">${name}</p>
            <p class="text-gray-400 text-sm">${number}</p>
        </div>
        <span class="text-gray-400 text-xs ml-3">${time}</span>
    `;

    historyUl.prepend(li);
}
