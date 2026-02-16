let navContainer = document.getElementById("nav");

let ul = document.createElement("ul");
ul.setAttribute("id", "navigation");
ul.innerHTML = `
<li><a href="./index.html">Home</a></li>
<li><a href="#">Opleidingen</a>
    <ul>
        <li><a href="./hbo.html">HBO</a></li>
        <li><a href="./mbo.html">MBO</a></li>
        <li><a href="./vmbo.html">VMBO</a></li>
    </ul>
</li>
`;

navContainer.append(ul);