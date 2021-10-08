/*const Verifier = require("email-verifier");
let verifier = new Verifier("at_pLkOvGuJ5VeJzAvIJnbgLHSkJFYfV");*/  


document.getElementById("sendButton").addEventListener("click", function() {
    // Initialising part
    const nom = document.getElementById("name");
    const message = document.getElementById("message");
    const email = document.getElementById("email");
    const plopFooter = document.getElementById("plopFooter");
    const plopBar = document.getElementById("plopBar");
    // Check name value isn't empty
    if (nom.value === "") {
        alert("Merci de renseigner votre Nom.");
        return 0;
    }
    // Check if plop
    if (nom.value === "plop" || nom.value === "Plop") {
        plopFooter.style.background = "pink";
        plopBar.style.background = "pink";
        document.getElementById("banniere-img").src = "images/image_banniere.jpeg";
        document.querySelector('a').classList.toggle('greyText');
        document.querySelector('h4').classList.toggle('greyText');

        alert("Les Ploppers et les Plopinettes vous remercient.")
        return 0;
    // Repair plop
    } else if (nom.value != "plop") {
        plopFooter.style.background = "#39424e";
        plopBar.style.background = "#39424e";
        document.getElementById("banniere-img").src = "images/image_banniere.png";
    }
    // Check if mail is empty
    if (email.value === "" && nom.value !== "plop" && nom.value !== "Plop") {
        alert("Merci de renseigner une adresse e-mail.");
        return 0
    }

    // Check if mail is "OK"

    const strMail = email.value.split("@");
    if (strMail.includes("gmail.com") || strMail.includes("icloud.com")) {
        console.log("Nice");
    }
    else {
        alert("Merci de renseigner une adresse email valide.");
        return 0;
    }
   /* verifier.verify(email.value, (err, data) => {
        if (err) console.log("Error");
        if (data.smtpCheck === "false") alert("Merci d'entrer une adresse email valide.")
    });*/
    // Check if message is empty
    if (message.value === "" && nom.value != "plop") {
        alert("Merci de nous écrire votre message dans la zone prévue pour.");
    }
    if (message.value !== "" && nom.value != "plop") {
        alert(`Merci ${nom.value} pour votre message`);
    }
});
