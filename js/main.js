document.addEventListener("DOMContentLoaded", function () {

    console.log("ALEEV Loaded");

    const shopButton = document.querySelector(".shop-btn");

    if (shopButton) {
        shopButton.addEventListener("click", function (e) {
            e.preventDefault();
            alert("Store Coming Soon");
        });
    }

    const newsletter = document.querySelector(".newsletter form");

    if (newsletter) {
        newsletter.addEventListener("submit", function (e) {
            e.preventDefault();

            const email = this.querySelector("input").value.trim();

            if (email === "") {
                alert("Please enter your email.");
                return;
            }

            alert("Thank you for subscribing to ALEEV!");

            this.reset();
        });
    }

});
