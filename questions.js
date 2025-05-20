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
        {
            question: "Quale importante evento storico accadde nel 1789?",
            options: ["Rivoluzione Americana", "Rivoluzione Francese", "Scoperta dell'America", "Caduta dell'Impero Romano"],
            answer: 1
        },
        {
            question: "Chi fu l'ultimo zar di Russia?",
            options: ["Pietro il Grande", "Alessandro II", "Nicola II", "Caterina la Grande"],
            answer: 2
        },
        {
            question: "Quale imperatore romano costruì il Colosseo?",
            options: ["Augusto", "Nerone", "Vespasiano", "Costantino"],
            answer: 2
        },
        {
            question: "Quale famosa battaglia segnò la fine di Napoleone nel 1815?",
            options: ["Waterloo", "Austerlitz", "Trafalgar", "Borodino"],
            answer: 0
        },
        {
            question: "Quale civiltà antica costruì le piramidi di Giza?",
            options: ["Greci", "Romani", "Egizi", "Maya"],
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
    ], [
        //domande di scienza2
        {
            question: "Quale pianeta è noto come il 'Pianeta Rosso'?",
            options: ["Venere", "Marte", "Giove", "Saturno"],
            answer: 1
        },
        {
            question: "Quale di queste NON è una forza fondamentale della natura?",
            options: ["Gravità", "Elettromagnetismo", "Elasticità", "Interazione nucleare forte"],
            answer: 2
        },
        {
            question: "In quale parte della cellula si trova il DNA?",
            options: ["Ribosoma", "Mitocondrio", "Nucleo", "Membrana cellulare"],
            answer: 2
        },
        {
            question: "Quale gas, principale componente dell'atmosfera, contribuisce di più al colore blu del cielo?",
            options: ["Ossigeno", "Azoto", "Anidride carbonica", "Argon"],
            answer: 1
        },
        {
            question: "Quale scienziato ha scoperto la penicillina?",
            options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Robert Koch"],
            answer: 1
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
        //domande di Geografia2
        {
            question: "Quale di questi mari è completamente circondato da terre?",
            options: ["Mara Mediterraneo", "Mar Rosso", "Mar Caspio", "Mar Nero"],
            answer: 2
        },
        {
            question: "Quale di questi paesi non fa parte dell'UE?",
            options: ["Norvegia", "Francia", "Italia", "Germania"],
            answer: 0
        },
        {
            question: "Qual è la capitale dell'Australia?",
            options: ["Sydney", "Melbourne", "Canberra", "Perth"],
            answer: 2
        },
        {
            question: "Quale di questi vulcani si trova in Europa?",
            options: ["Kilimangiaro", "Etna", "Fuji", "Krakatoa"],
            answer: 1
        },
        {
            question: "Quale di queste città è più a nord?",
            options: ["Roma", "Madrid", "Parigi", "Berlino"],
            answer: 3
        }
    ], [
        //domande di cinema1
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
        //domande di cinema2
        {
            question: "Quale film ha vinto l'Oscar come miglior film nel 2023?",
            options: ["Everything Everywhere All at Once", "The Fabelmans", "Tar", "Elvis"],
            answer: 0
        },
        {
            question: "Quale di questi registi ha vinto il maggior numero di Oscar alla regia?",
            options: ["Quentin Tarantino", "Christopher Nolan", "Clint Eastwood", "John Ford"],
            answer: 3
        },
        {
            question: "Quale attore ha interpretato Jack in 'Titanic'?",
            options: ["Brad Pitt", "Johnny Depp", "Leonardo DiCaprio", "Matt Damon"],
            answer: 2
        },
        {
            question: "Quale di queste serie TV ha vinto il maggior numero di Emmy Awards?",
            options: ["Breaking Bad", "Game of Thrones", "The Crown", "Saturday Night Live"],
            answer: 1
        },
        {
            question: "Quale di questi film è un capolavoro di Hayao Miyazaki?",
            options: ["Akira", "Il castello errante di Howl", "Ghost in the Shell", "Perfect Blue"],
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
        //domande di sport2
        {
            question: "Quale nazione ha vinto più Mondiali di calcio?",
            options: ["Italia", "Germania", "Brasile", "Argentina"],
            answer: 2
        },
        {
            question: "In quale sport è famoso Michael Jordan?",
            options: ["Football Americano", "Baseball", "Basket", "Tennis"],
            answer: 2
        },
        {
            question: "Quale atleta detiene il record del mondo nei 100 metri piani?",
            options: ["Usain Bolt", "Carl Lewis", "Asafa Powell", "Justin Gatlin"],
            answer: 0
        },
        {
            question: "Quanti anelli ci sono nel simbolo olimpico?",
            options: ["4", "5", "6", "7"],
            answer: 1
        },
        {
            question: "In quale anno si sono svolte le Olimpiadi a Roma?",
            options: ["1956", "1960", "1964", "1968"],
            answer: 1
        }

    ], [
        //domande di Musica1
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
    ], [
        //domande di Musica2
        {
            question: "Quale artista ha venduto il maggior numero di dischi nella storia?",
            options: ["Elvis Presley", "The Beatles", "Michael Jackson", "Madonna"],
            answer: 1
        },
        {
            question: "In quale anno è uscito 'Thriller' di Michael Jackson?",
            options: ["1982", "1984", "1979", "1987"],
            answer: 0
        },
        {
            question: "Quale di queste canzoni è dei Rolling Stones?",
            options: ["Hey Jude", "Satisfaction", "Stairway to Heaven", "Bohemian Rhapsody"],
            answer: 1
        },
        {
            question: "Chi ha scritto la canzone 'Imagine'?",
            options: ["Paul McCartney", "John Lennon", "Bob Dylan", "David Bowie"],
            answer: 1
        },
        {
            question: "Quale band è associata all'album 'The Wall'?",
            options: ["Led Zeppelin", "Pink Floyd", "The Who", "Queen"],
            answer: 1
        }
    ]
];