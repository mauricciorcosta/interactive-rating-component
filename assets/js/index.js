const submit = document.querySelector(".btn-link");
var rating = document.querySelectorAll(".rating-input");

submit.addEventListener("click", () => {
    for (let i = 0; i < rating.length; i++) {
        if (rating[i].checked) {
            document.body.innerHTML = 
            `
            <div class="container">
                <div class="card">
                    <figure class="img-wrapper">
                        <img src="./assets/img/illustration-thank-you.svg" alt="Image of a smartphone as a register machine.">
                    </figure>
                    <p class="selected-text">You selected ${rating[i].value} out of 5</p>
                    <p class="thank">Thank you!</p>
                    <p class="thank-text">We appreciate you taking the time to give a rating. If you ever need more support, 
                    don’t hesitate to get in touch!
                    </p>
                </div>
            </div>
            <script src="./assets/js/index.js"></script>
            `
            break;
        }
    }
});


