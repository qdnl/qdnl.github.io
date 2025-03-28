/* definiowanie poszczególnych kropek składających się na zegar */
const
    kropka = [
        document.getElementById('kropka0'),
        document.getElementById('kropka1'),
        document.getElementById('kropka2'),
        document.getElementById('kropka3'),
        document.getElementById('kropka4'),
        document.getElementById('kropka5'),
        document.getElementById('kropka6'),
        document.getElementById('kropka7'),
        document.getElementById('kropka8'),
        document.getElementById('kropka9'),
        document.getElementById('kropka10'),
        document.getElementById('kropka11'),
        document.getElementById('kropka12'),
        document.getElementById('kropka13'),
        document.getElementById('kropka14'),
        document.getElementById('kropka15'),
        document.getElementById('kropka16'),
        document.getElementById('kropka17'),
        document.getElementById('kropka18'),
        document.getElementById('kropka19'),
        document.getElementById('kropka20'),
        document.getElementById('kropka21'),
        document.getElementById('kropka22'),
        document.getElementById('kropka23'),
        document.getElementById('kropka24'),
        document.getElementById('kropka25'),
        document.getElementById('kropka26'),
        document.getElementById('kropka27'),
        document.getElementById('kropka28'),
        document.getElementById('kropka29'),
        document.getElementById('kropka30'),
        document.getElementById('kropka31'),
        document.getElementById('kropka32'),
        document.getElementById('kropka33'),
        document.getElementById('kropka34'),
        document.getElementById('kropka35'),
        document.getElementById('kropka36'),
        document.getElementById('kropka37'),
        document.getElementById('kropka38'),
        document.getElementById('kropka39'),
        document.getElementById('kropka40'),
        document.getElementById('kropka41'),
        document.getElementById('kropka42'),
        document.getElementById('kropka43'),
        document.getElementById('kropka44'),
        document.getElementById('kropka45'),
        document.getElementById('kropka46'),
        document.getElementById('kropka47'),
        document.getElementById('kropka48'),
        document.getElementById('kropka49'),
        document.getElementById('kropka50'),
        document.getElementById('kropka51'),
        document.getElementById('kropka52'),
        document.getElementById('kropka53'),
        document.getElementById('kropka54'),
        document.getElementById('kropka55'),
        document.getElementById('kropka56'),
        document.getElementById('kropka57'),
        document.getElementById('kropka58'),
        document.getElementById('kropka59')
    ],
    cyfra = [
        [
            [
                document.getElementById('cyfra1w0k0'),
                document.getElementById('cyfra1w0k1'),
                document.getElementById('cyfra1w0k2'),
                document.getElementById('cyfra1w0k3'),
                document.getElementById('cyfra1w0k4')
            ],
            [
                document.getElementById('cyfra1w1k0'),
                document.getElementById('cyfra1w1k1'),
                document.getElementById('cyfra1w1k2'),
                document.getElementById('cyfra1w1k3'),
                document.getElementById('cyfra1w1k4')
            ],
            [
                document.getElementById('cyfra1w2k0'),
                document.getElementById('cyfra1w2k1'),
                document.getElementById('cyfra1w2k2'),
                document.getElementById('cyfra1w2k3'),
                document.getElementById('cyfra1w2k4')
            ],
            [
                document.getElementById('cyfra1w3k0'),
                document.getElementById('cyfra1w3k1'),
                document.getElementById('cyfra1w3k2'),
                document.getElementById('cyfra1w3k3'),
                document.getElementById('cyfra1w3k4')
            ],
            [
                document.getElementById('cyfra1w4k0'),
                document.getElementById('cyfra1w4k1'),
                document.getElementById('cyfra1w4k2'),
                document.getElementById('cyfra1w4k3'),
                document.getElementById('cyfra1w4k4')
            ],
            [
                document.getElementById('cyfra1w5k0'),
                document.getElementById('cyfra1w5k1'),
                document.getElementById('cyfra1w5k2'),
                document.getElementById('cyfra1w5k3'),
                document.getElementById('cyfra1w5k4')
            ],
            [
                document.getElementById('cyfra1w6k0'),
                document.getElementById('cyfra1w6k1'),
                document.getElementById('cyfra1w6k2'),
                document.getElementById('cyfra1w6k3'),
                document.getElementById('cyfra1w6k4')
            ]
        ],
        [
            [
                document.getElementById('cyfra2w0k0'),
                document.getElementById('cyfra2w0k1'),
                document.getElementById('cyfra2w0k2'),
                document.getElementById('cyfra2w0k3'),
                document.getElementById('cyfra2w0k4')
            ],
            [
                document.getElementById('cyfra2w1k0'),
                document.getElementById('cyfra2w1k1'),
                document.getElementById('cyfra2w1k2'),
                document.getElementById('cyfra2w1k3'),
                document.getElementById('cyfra2w1k4')
            ],
            [
                document.getElementById('cyfra2w2k0'),
                document.getElementById('cyfra2w2k1'),
                document.getElementById('cyfra2w2k2'),
                document.getElementById('cyfra2w2k3'),
                document.getElementById('cyfra2w2k4')
            ],
            [
                document.getElementById('cyfra2w3k0'),
                document.getElementById('cyfra2w3k1'),
                document.getElementById('cyfra2w3k2'),
                document.getElementById('cyfra2w3k3'),
                document.getElementById('cyfra2w3k4')
            ],
            [
                document.getElementById('cyfra2w4k0'),
                document.getElementById('cyfra2w4k1'),
                document.getElementById('cyfra2w4k2'),
                document.getElementById('cyfra2w4k3'),
                document.getElementById('cyfra2w4k4')
            ],
            [
                document.getElementById('cyfra2w5k0'),
                document.getElementById('cyfra2w5k1'),
                document.getElementById('cyfra2w5k2'),
                document.getElementById('cyfra2w5k3'),
                document.getElementById('cyfra2w5k4')
            ],
            [
                document.getElementById('cyfra2w6k0'),
                document.getElementById('cyfra2w6k1'),
                document.getElementById('cyfra2w6k2'),
                document.getElementById('cyfra2w6k3'),
                document.getElementById('cyfra2w6k4')
            ]
        ],
        [
            [
                document.getElementById('cyfra3w0k0'),
                document.getElementById('cyfra3w0k1'),
                document.getElementById('cyfra3w0k2'),
                document.getElementById('cyfra3w0k3'),
                document.getElementById('cyfra3w0k4')
            ],
            [
                document.getElementById('cyfra3w1k0'),
                document.getElementById('cyfra3w1k1'),
                document.getElementById('cyfra3w1k2'),
                document.getElementById('cyfra3w1k3'),
                document.getElementById('cyfra3w1k4')
            ],
            [
                document.getElementById('cyfra3w2k0'),
                document.getElementById('cyfra3w2k1'),
                document.getElementById('cyfra3w2k2'),
                document.getElementById('cyfra3w2k3'),
                document.getElementById('cyfra3w2k4')
            ],
            [
                document.getElementById('cyfra3w3k0'),
                document.getElementById('cyfra3w3k1'),
                document.getElementById('cyfra3w3k2'),
                document.getElementById('cyfra3w3k3'),
                document.getElementById('cyfra3w3k4')
            ],
            [
                document.getElementById('cyfra3w4k0'),
                document.getElementById('cyfra3w4k1'),
                document.getElementById('cyfra3w4k2'),
                document.getElementById('cyfra3w4k3'),
                document.getElementById('cyfra3w4k4')
            ],
            [
                document.getElementById('cyfra3w5k0'),
                document.getElementById('cyfra3w5k1'),
                document.getElementById('cyfra3w5k2'),
                document.getElementById('cyfra3w5k3'),
                document.getElementById('cyfra3w5k4')
            ],
            [
                document.getElementById('cyfra3w6k0'),
                document.getElementById('cyfra3w6k1'),
                document.getElementById('cyfra3w6k2'),
                document.getElementById('cyfra3w6k3'),
                document.getElementById('cyfra3w6k4')
            ]

        ],
        [
            [
                document.getElementById('cyfra4w0k0'),
                document.getElementById('cyfra4w0k1'),
                document.getElementById('cyfra4w0k2'),
                document.getElementById('cyfra4w0k3'),
                document.getElementById('cyfra4w0k4')
            ],
            [
                document.getElementById('cyfra4w1k0'),
                document.getElementById('cyfra4w1k1'),
                document.getElementById('cyfra4w1k2'),
                document.getElementById('cyfra4w1k3'),
                document.getElementById('cyfra4w1k4')
            ],
            [
                document.getElementById('cyfra4w2k0'),
                document.getElementById('cyfra4w2k1'),
                document.getElementById('cyfra4w2k2'),
                document.getElementById('cyfra4w2k3'),
                document.getElementById('cyfra4w2k4')
            ],
            [
                document.getElementById('cyfra4w3k0'),
                document.getElementById('cyfra4w3k1'),
                document.getElementById('cyfra4w3k2'),
                document.getElementById('cyfra4w3k3'),
                document.getElementById('cyfra4w3k4')
            ],
            [
                document.getElementById('cyfra4w4k0'),
                document.getElementById('cyfra4w4k1'),
                document.getElementById('cyfra4w4k2'),
                document.getElementById('cyfra4w4k3'),
                document.getElementById('cyfra4w4k4')
            ],
            [
                document.getElementById('cyfra4w5k0'),
                document.getElementById('cyfra4w5k1'),
                document.getElementById('cyfra4w5k2'),
                document.getElementById('cyfra4w5k3'),
                document.getElementById('cyfra4w5k4')
            ],
            [
                document.getElementById('cyfra4w6k0'),
                document.getElementById('cyfra4w6k1'),
                document.getElementById('cyfra4w6k2'),
                document.getElementById('cyfra4w6k3'),
                document.getElementById('cyfra4w6k4')
            ]
        ]
    ];
/*włączanie i wyłączanie dowolnej kropki */
wlacz = (element) => {
    element.classList.add("on");
    element.classList.remove("off");
}
wylacz = (element) => {
    element.classList.add("off");
    element.classList.remove("on");
}

/*włączanie i wyłączanie kropki wchodzącej w skład zegara cyfrowego */
wlaczC = (n, x, y) => {
    wlacz(cyfra[n][x][y]);
}

wylaczC = (n, x, y) => {
    wylacz(cyfra[n][x][y]);
}
/*wyłączanie wszystkich kropek */
wylaczWszystko = () => {
    for (i = 0; i < 4; i++) {
        for (j = 0; j < 7; j++) {
            for (k = 0; k < 5; k++) {
                wylaczC(i, j, k);
            }
        }
    }
    for (i = 1; i < 60; i++)
        wylacz(kropka[i])
}

/*rysowanie zegara cyfrowego */
rysujCzas = () => {
    var czas = new Date(),
        godziny = czas.getHours(),
        minuty = czas.getMinutes();

    rysujCyfre(0, (parseInt(godziny / 10, 10)) % 10);
    rysujCyfre(1, godziny % 10);
    rysujCyfre(2, (parseInt(minuty / 10, 10)) % 10);
    rysujCyfre(3, minuty % 10);
}

/*rysowanie cyfry w zegarze cyfrowym, n - numer cyfry na wyświetlaczu, x - wartość cyfry,
 np. (0,3) wyświetli na pierwszym miejscu cyfrę 3*/
rysujCyfre = (n, x) => {
    /*wzory poszczególnych cyfr */
    rysuj0 = () => {
        wlaczC(n, 0, 1); wlaczC(n, 0, 2); wlaczC(n, 0, 3);
        wlaczC(n, 1, 0); wlaczC(n, 1, 4);
        wlaczC(n, 2, 0); wlaczC(n, 2, 4);
        wlaczC(n, 3, 0); wlaczC(n, 3, 4);
        wlaczC(n, 4, 0); wlaczC(n, 4, 4);
        wlaczC(n, 5, 0); wlaczC(n, 5, 4);
        wlaczC(n, 6, 1); wlaczC(n, 6, 2); wlaczC(n, 6, 3);
    }
    rysuj1 = () => {
        wlaczC(n, 0, 2);
        wlaczC(n, 1, 1); wlaczC(n, 1, 2);
        wlaczC(n, 2, 2);
        wlaczC(n, 3, 2);
        wlaczC(n, 4, 2);
        wlaczC(n, 5, 2);
        wlaczC(n, 6, 1); wlaczC(n, 6, 2); wlaczC(n, 6, 3);
    }
    rysuj2 = () => {
        wlaczC(n, 0, 1); wlaczC(n, 0, 2); wlaczC(n, 0, 3);
        wlaczC(n, 1, 0); wlaczC(n, 1, 4);
        wlaczC(n, 2, 4); wlaczC(n, 3, 1); wlaczC(n, 3, 2); wlaczC(n, 3, 3);
        wlaczC(n, 4, 0);
        wlaczC(n, 5, 0);
        wlaczC(n, 6, 0); wlaczC(n, 6, 1); wlaczC(n, 6, 2); wlaczC(n, 6, 3); wlaczC(n, 6, 4);
    }
    rysuj3 = () => {
        wlaczC(n, 0, 1); wlaczC(n, 0, 2); wlaczC(n, 0, 3);
        wlaczC(n, 1, 0); wlaczC(n, 1, 4);
        wlaczC(n, 2, 4);
        wlaczC(n, 3, 2); wlaczC(n, 3, 3);
        wlaczC(n, 4, 4);
        wlaczC(n, 5, 0); wlaczC(n, 5, 4);
        wlaczC(n, 6, 1); wlaczC(n, 6, 2); wlaczC(n, 6, 3);
    }
    rysuj4 = () => {
        wlaczC(n, 0, 3);
        wlaczC(n, 1, 2); wlaczC(n, 1, 3);
        wlaczC(n, 2, 1); wlaczC(n, 2, 3);
        wlaczC(n, 3, 0); wlaczC(n, 3, 3);
        wlaczC(n, 4, 0); wlaczC(n, 4, 1); wlaczC(n, 4, 2); wlaczC(n, 4, 3); wlaczC(n, 4, 4); wlaczC(n, 5, 3);
        wlaczC(n, 6, 3);
    }
    rysuj5 = () => {
        wlaczC(n, 0, 0); wlaczC(n, 0, 1); wlaczC(n, 0, 2); wlaczC(n, 0, 3);
        wlaczC(n, 0, 4); wlaczC(n, 1, 0);
        wlaczC(n, 2, 0);
        wlaczC(n, 3, 0); wlaczC(n, 3, 1); wlaczC(n, 3, 2); wlaczC(n, 3, 3);
        wlaczC(n, 4, 4);
        wlaczC(n, 5, 0); wlaczC(n, 5, 4);
        wlaczC(n, 6, 1); wlaczC(n, 6, 2); wlaczC(n, 6, 3);
    }
    rysuj6 = () => {
        wlaczC(n, 0, 1); wlaczC(n, 0, 2); wlaczC(n, 0, 3);
        wlaczC(n, 1, 0);
        wlaczC(n, 2, 0);
        wlaczC(n, 3, 0); wlaczC(n, 3, 1); wlaczC(n, 3, 2); wlaczC(n, 3, 3);
        wlaczC(n, 4, 0); wlaczC(n, 4, 4);
        wlaczC(n, 5, 0); wlaczC(n, 5, 4);
        wlaczC(n, 6, 1); wlaczC(n, 6, 2); wlaczC(n, 6, 3);
    }
    rysuj7 = () => {
        wlaczC(n, 0, 0); wlaczC(n, 0, 1); wlaczC(n, 0, 2); wlaczC(n, 0, 3); wlaczC(n, 0, 4);
        wlaczC(n, 1, 4);
        wlaczC(n, 2, 3);
        wlaczC(n, 3, 2);
        wlaczC(n, 4, 1);
        wlaczC(n, 5, 1);
        wlaczC(n, 6, 1);
    }
    rysuj8 = () => {
        wlaczC(n, 0, 1); wlaczC(n, 0, 2); wlaczC(n, 0, 3);
        wlaczC(n, 1, 0); wlaczC(n, 1, 4);
        wlaczC(n, 2, 0); wlaczC(n, 2, 4);
        wlaczC(n, 3, 1); wlaczC(n, 3, 2); wlaczC(n, 3, 3);
        wlaczC(n, 4, 0); wlaczC(n, 4, 4);
        wlaczC(n, 5, 0); wlaczC(n, 5, 4);
        wlaczC(n, 6, 1); wlaczC(n, 6, 2); wlaczC(n, 6, 3);
    }
    rysuj9 = () => {
        wlaczC(n, 0, 1); wlaczC(n, 0, 2); wlaczC(n, 0, 3);
        wlaczC(n, 1, 0); wlaczC(n, 1, 4);
        wlaczC(n, 2, 0); wlaczC(n, 2, 4);
        wlaczC(n, 3, 1); wlaczC(n, 3, 2); wlaczC(n, 3, 3);
        wlaczC(n, 3, 4); wlaczC(n, 4, 4);
        wlaczC(n, 5, 4);
        wlaczC(n, 6, 1); wlaczC(n, 6, 2); wlaczC(n, 6, 3);
    }
    /*funkcja wywołująca rysowanie cyfry */
    rysujC = (x) => {
        switch (x) {
            case 0: {
                rysuj0();
                break;
            }
            case 1: {
                rysuj1();
                break;
            }
            case 2: {
                rysuj2();
                break;
            }
            case 3: {
                rysuj3();
                break;
            }
            case 4: {
                rysuj4();
                break;
            }
            case 5: {
                rysuj5();
                break;
            }
            case 6: {
                rysuj6();
                break;
            }
            case 7: {
                rysuj7();
                break;
            }
            case 8: {
                rysuj8();
                break;
            }
            case 9: {
                rysuj9();
                break;
            }
        }
    }
    rysujC(x);
}
/*funkcja wysująca wskaźnik sekund wokół zegara */
rysujSekundy = () => {
    wylaczWszystko();
    var czas = new Date(),
    sekundy = czas.getSeconds();
    for (i = 0; i <= sekundy; i++) {
        wlacz(kropka[i]);
    }
}

zegar = () => {
    rysujSekundy();
    rysujCzas();
}

setInterval(zegar, 1000);
zegar();