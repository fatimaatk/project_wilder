document.getElementById("sendButton").addEventListener("click", function() {
    const nom = document.getElementById("name");
    const message = document.getElementById("message");
    const email = document.getElementById("email");
    const plopFooter = document.getElementById("plopFooter");
    const plopBar = document.getElementById("plopBar");
    if (nom.value === "plop" || nom.value === "Plop") {
      plopFooter.style.background = "pink";
      plopBar.style.background = "pink";
      document.getElementById("banniere-img").src="images/duck.jpg";
      document.querySelector('a').classList.toggle('greyText');
      document.querySelector('h4').classList.toggle('greyText');

      alert ("Les Ploppers et les Plopinettes vous salut")
    }
    else if (nom.value !== "plop" || nom.value !== "Plop") {
      plopFooter.style.background = "#39424e";
      plopBar.style.background = "#39424e";
      document.getElementById("banniere-img").src="images/image_banniere.png";
    }
    if (email.value === "" && nom.value !== "plop" && nom.value !== "Plop") {
      alert("Merci de renseigner une adresse e-mail.");
      console.log("Invalid email");
      return 0
    }
    if (message.value === "" && nom.value !== "plop" && nom.value !== "Plop") {
      alert("Merci de nous écrire votre message dans la zone prévue pour.");
    }
    if (message.value !== "" && nom.value !== "plop" && nom.value !== "Plop") {
    alert(`Merci ${nom.value} pour votre message`);
    }
  });