const questions = [
    [
        //domande generali
        {
            question: "Qual è la capitale dell'Italia?",
            options: ["Roma", "Milano", "Napoli", "Firenze"],
            answer: 0
        },
        {
            question: "Quanti pianeti ci sono nel sistema solare?",
            options: ["7", "8", "9", "10"],
            answer: 1
        },
        {
            question: "Chi ha scritto la Divina Commedia?",
            options: ["Petrarca", "Boccaccio", "Dante Alighieri", "Manzoni"],
            answer: 2
        },
        {
            question: "Qual è il simbolo chimico dell'oro?",
            options: ["Ag", "Au", "Fe", "Cu"],
            answer: 1
        },
        {
            question: "In quale anno è caduto il muro di Berlino?",
            options: ["1985", "1989", "1991", "1975"],
            answer: 1
        }
    ], [
        //domande di storia 1
        {
            question: "In quale anno è iniziata la Prima Guerra Mondiale?",
            options: ["1912", "1914", "1916", "1918"],
            answer: 1
        },
        {
            question: "Chi fu il primo presidente degli Stati Uniti?",
            options: ["Thomas Jefferson", "George Washington", "Abraham Lincoln", "John Adams"],
            answer: 1
        },
        {
            question: "Quale civiltà costruì i Machu Picchu?",
            options: ["Aztechi", "Maya", "Inca", "Olmecchi"],
            answer: 2
        },
        {
            question: "Chi scoprì l'America nel 1492?",
            options: ["Vasco de Gama", "Ferdinando Magellano", "Cristoforo Colombo", "Amerigo Vespucci"],
            answer: 2
        },
        {
            question: "Quale imperatore romano fu assassinato nel 44 a.C.?",
            options: ["Augusto", "Nerone", "Giulio Cesare", "Caligola"],
            answer: 2
        }
    ], [
        //domande di scienza 1
        {
            question: "Qual è l'elemento chimico con simbolo 'O'?",
            options: ["Oro", "Osmio", "Ossigeno", "Olio"],
            answer: 2
        },
        {
            question: "Quanti cromosomi ha un essere umano?",
            options: ["23", "46", "32", "64"],
            answer: 1
        },
        {
            question: "Quale pianeta è noto come il 'Gigante Gassoso'?",
            options: ["Marte", "Saturno", "Venere", "Mercurio"],
            answer: 1
        },
        {
            question: "Chi formulò la teoria della relatività?",
            options: ["Isaac Newton", "Marie Curie", "Albert Einstein", "Galileo Galilei"],
            answer: 2
        },
        {
            question: "Qual è l'unità di misura della corrente elettrica?",
            options: ["Watt", "Volt", "Ampere", "Ohm"],
            answer: 2
        }
    ],
    [
        //domande di Geografia1
        {
            question: "Qual è il fiume più lungo del mondo?",
            options: ["Nilo", "Rio delle Amazzoni", "Mississippi", "Gange"],
            answer: 1
        },
        {
            question: "In quale continente si trova il deserto del Sahara?",
            options: ["Asia", "Africa", "Sud America", "Australia"],
            answer: 1
        },
        {
            question: "Qual è la capitale del Giappone?",
            options: ["Pechino", "Seul", "Tokyo", "Bangkok"],
            answer: 2
        },
        {
            question: "Quale Paese ha la forma di uno stivale?",
            options: ["Grecia", "Spagna", "Italia", "Francia"],
            answer: 2
        },
        {
            question: "Dove si trova la Grande Barriera Corallina?",
            options: ["Mar Rosso", "Oceano Pacifico", "Oceano Indiano", "Australia"],
            answer: 3
        }
    ], [
        //domande di musica1
        {
            question: "Chi ha diretto 'Il Padrino'?",
            options: ["Martin Scorsese", "Steven Spielberg", "Francis Ford Coppola", "Quentin Tarantino"],
            answer: 2
        },
        {
            question: "Quale film ha vinto l'Oscar come miglior film nel 2020?",
            options: ["Parasite", "Joker", "1917", "The Shape of Water"],
            answer: 0
        },
        {
            question: "Chi interpreta Iron Man nel Marvel Cinematic Universe?",
            options: ["Chris Evans", "Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
            answer: 1
        },
        {
            question: "Qual è il primo film della saga di 'Star Wars' uscito nel 1977?",
            options: ["L'Impero colpisce ancora", "Il ritorno dello Jedi", "Una nuova speranza", "La minaccia fantasma"],
            answer: 2
        },
        {
            question: "In quale film compare la frase 'May the Force be with you'?",
            options: ["Star Trek", "Star Wars", "Matrix", "Alien"],
            answer: 1
        }
    ], [
        //domande di sport1
        {
            question: "Quale Paese ha vinto i Mondiali di calcio nel 2018?",
            options: ["Francia", "Croazia", "Brasile", "Germania"],
            answer: 0
        },
        {
            question: "Chi detiene il record di titoli del Grande Slam nel tennis maschile?",
            options: ["Roger Federer", "Rafael Nadal", "Novak Djokovic", "Pete Sampras"],
            answer: 2
        },
        {
            question: "In quale sport si usa la mazza da baseball?",
            options: ["Cricket", "Hockey su ghiaccio", "Baseball", "Pallavolo"],
            answer: 2
        },
        {
            question: "Quale atleta è soprannominato 'Usain Bolt'?",
            options: ["Un nuotatore", "Un velocista", "Un maratoneta", "Un ciclista"],
            answer: 1
        },
        {
            question: "Quanti giocatori ci sono in una squadra di basket?",
            options: ["5", "6", "7", "8"],
            answer: 0
        }
    ], [
        //domande di Musica
        {
            question: "Chi ha cantato 'Bohemian Rhapsody'?",
            options: ["The Beatles", "Queen", "Led Zeppelin", "Pink Floyd"],
            answer: 1
        },
        {
            question: "Quale strumento suonava Mozart?",
            options: ["Violino", "Pianoforte", "Flauto", "Chitarra"],
            answer: 1
        },
        {
            question: "Quale gruppo ha pubblicato l'album 'The Dark Side of the Moon'?",
            options: ["The Rolling Stones", "Pink Floyd", "AC/DC", "Metallica"],
            answer: 1
        },
        {
            question: "Chi è conosciuto come il 'Re del Pop'?",
            options: ["Elvis Presley", "Michael Jackson", "Prince", "Madonna"],
            answer: 1
        },
        {
            question: "Quale cantante italiana ha vinto il Festival di Sanremo 2022?",
            options: ["Emma Marrone", "Elodie", "Mahmood", "Blanco"],
            answer: 3
        }
    ]
];