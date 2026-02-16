let footer = document.getElementById("footer");

let naam = document.createElement("p");
let contactMail = document.createElement("p");
let contactPhone = document.createElement("p");

naam.setAttribute("id", "footerPcontact");
contactMail.setAttribute("id", "footerPcontact");
contactPhone.setAttribute("id", "footerPcontact");

naam.innerHTML = `<p>Naam: Melroy Loen</p>`;
contactMail.innerHTML = `<p>E-Mail: melroy.tygo.loen@gmail.com</p>`;
contactPhone.innerHTML = `<p>Telefoonnummer: 0642849604</p>`;

footer.append(naam, contactMail, contactPhone);