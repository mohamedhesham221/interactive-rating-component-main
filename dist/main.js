let sbmt = document.querySelector("#submit"),
    slctd = document.querySelector("#selected__rate"),
    rates = document.querySelectorAll(".btngrp button"),
    bfSubmit = document.querySelector(".before__sbmt"),
    afSubmit = document.querySelector(".after__sbmt");


(function() {
    for (let i = 0; i < rates.length; i++) {
        const rate = rates[i];
        rate.onclick = () => {
            slctd.innerHTML = rate.getAttribute("data-value");
            for (let i = 0; i < rates.length; i++) {
                const rate = rates[i];
                rate.classList.remove("slctd__rate");
            }
            rate.classList.add("slctd__rate");
        }
    }
}());

sbmt.onclick = function () {
    bfSubmit.classList.add("bfSubmit");
    afSubmit.classList.add("afSubmit");
}

