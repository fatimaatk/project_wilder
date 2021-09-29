document.getElementById("sendButton").addEventListener("click", function() {
    const nom = document.getElementById("name");
    const message = document.getElementById("message");
    console.log("yes");
    if (message.value === "Message" || message.value === "") {
      alert("Merci de nous écrire votre message dans la zone prévue pour.");
    }
    else {
    alert(`Merci ${nom.value} pour votre message`);
    }
  });