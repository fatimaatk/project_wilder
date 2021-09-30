document.getElementById("sendButton").addEventListener("click", function() {
    const nom = document.getElementById("name");
    const message = document.getElementById("message");
    const email = document.getElementById("email");
    if (email.value === "") {
      alert("Merci de renseigner une adresse e-mail.");
      console.log("Invalid email");
      return 0
    }
    if (message.value === "") {
      alert("Merci de nous écrire votre message dans la zone prévue pour.");
    }
    else {
    alert(`Merci ${nom.value} pour votre message`);
    }
  });