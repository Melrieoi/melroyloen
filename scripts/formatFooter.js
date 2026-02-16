let footer = document.getElementsByTagName("footer");

let naam = document.createElement("p");
let contactMail = document.createElement("p");
let contactPhone = document.createElement("p");

naam.setAttribute("id", "footerPname");
contactMail.setAttribute("id", "footerPcontact");
contactPhone.setAttribute("id", "footerPcontact");

naam.innerHTML = `Melroy Loen`;

footer.appendChild(naam, contactMail, contactPhone);