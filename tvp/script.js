/* definiowanie poszczególnych kropek składających się na zegar */
const
    godziny = document.getElementById('godziny'),
    minuty = document.getElementById('minuty'),
    sekundy = document.getElementById('sekundy'),
    logo = document.getElementById('logo')

pokazLogo = () => {
    document.addEventListener('keydown', function(zdarzenie) {
        if (zdarzenie.key === "l") {
            if (logo.classList.contains("on")) {
		    logo.classList.remove("on");
		    logo.classList.add("off");
            }
                else {
			logo.classList.add("on");
			logo.classList.remove("off");
                }
        }
    });
}

obroc = (element, kat) => {
    element.style.transform = 'rotate(' + kat + 'deg)';
}
rysujAnalog = () => {
    var czas = new Date();
    m = czas.getMinutes();
    h = czas.getHours();
    s = czas.getSeconds();
    obroc(godziny, 30 * (h % 12) + m / 2 + s / 120);
    obroc(minuty, 6 * m + s / 10);
    obroc(sekundy, 6 *s);
}

zegar = () => {
    rysujAnalog();
    pokazLogo();
}

setInterval(zegar, 1000);
zegar();