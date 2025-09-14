/* definiowanie poszczególnych kropek składających się na zegar */
const
    godziny = document.getElementById('godziny'),
    minuty = document.getElementById('minuty'),
    sekundy = document.getElementById('sekundy'),
    logo = document.getElementById('logo'),
    /*włączanie i wyłączanie dowolnej kropki */
    wlacz = (element) => {
        element.classList.add("on");
        element.classList.remove("off");
    },
wylacz = (element) => {
    element.classList.add("off");
    element.classList.remove("on");
}


pokazLogo = () => {
    document.addEventListener('keydown', function(zdarzenie) {
        if (zdarzenie.key === "l") {
            if (logo.classList.contains("on"))
                    wylacz(logo);
                else wlacz(logo);
        }
    });
}

/*wyłączanie wszystkich kropek */
wylaczWszystko = () => {
    for (i = 0; i < 60; i++)
        wylacz(kropka[i])
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


/*funkcja wysująca wskaźnik sekund wokół zegara */
rysujSekundy = () => {
    wylaczWszystko();
    var czas = new Date(),
        s = czas.getSeconds();
    wlacz(kropka[s]);
}

zegar = () => {
    rysujAnalog();
    pokazLogo();
}

setInterval(zegar, 1000);
zegar();