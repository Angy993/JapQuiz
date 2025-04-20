const data = [
  {
    "romaji": "taberu",
    "italiano": "Mangiare",
    "inglese": "Eat",
    "frase": "Watashi wa sushi o taberu.",
    "traduzione": {
      "it": "Mangio sushi.",
      "en": "I eat sushi."
    }
  },
  {
    "romaji": "nomu",
    "italiano": "Bere",
    "inglese": "Drink",
    "frase": "Watashi wa mizu o nomu.",
    "traduzione": {
      "it": "Bevo acqua.",
      "en": "I drink water."
    }
  },
  {
    "romaji": "miru",
    "italiano": "Guardare",
    "inglese": "Watch",
    "frase": "Anime o miru.",
    "traduzione": {
      "it": "Guardo anime.",
      "en": "I watch anime."
    }
  },
  {
    "romaji": "anime",
    "italiano": "Anime",
    "inglese": "Anime",
    "frase": "Mainichi anime o miru.",
    "traduzione": {
      "it": "Guardo anime ogni giorno.",
      "en": "I watch anime every day."
    }
  },
  {
    "romaji": "mizu",
    "italiano": "Acqua",
    "inglese": "Water",
    "frase": "Mizu o nomu.",
    "traduzione": {
      "it": "Bevo acqua.",
      "en": "I drink water."
    }
  },
  {
    "romaji": "iku",
    "italiano": "Andare",
    "inglese": "Go",
    "frase": "Gakkou ni iku.",
    "traduzione": {
      "it": "Vado a scuola.",
      "en": "I go to school."
    }
  },
  {
    "romaji": "gakkou",
    "italiano": "Scuola",
    "inglese": "School",
    "frase": "Watashi wa gakkou ni iru.",
    "traduzione": {
      "it": "Sono a scuola.",
      "en": "I am at school."
    }
  },
  {
    "romaji": "tomodachi",
    "italiano": "Amico",
    "inglese": "Friend",
    "frase": "Tomodachi to asobu.",
    "traduzione": {
      "it": "Gioco con un amico.",
      "en": "I play with a friend."
    }
  },
  {
    "romaji": "asobu",
    "italiano": "Giocare",
    "inglese": "Play",
    "frase": "Kodomo-tachi wa asobu.",
    "traduzione": {
      "it": "I bambini giocano.",
      "en": "The children play."
    }
  },
  {
    "romaji": "tanoshii",
    "italiano": "Divertente",
    "inglese": "Fun",
    "frase": "Kono eiga wa tanoshii.",
    "traduzione": {
      "it": "Questo film è divertente.",
      "en": "This movie is fun."
    }
  },
  {
    "romaji": "hanasu",
    "italiano": "Parlare",
    "inglese": "Speak",
    "frase": "Sensei to hanasu.",
    "traduzione": {
      "it": "Parlo con l'insegnante.",
      "en": "I speak with the teacher."
    }
  },
  {
    "romaji": "kiku",
    "italiano": "Ascoltare",
    "inglese": "Listen",
    "frase": "Ongaku o kiku.",
    "traduzione": {
      "it": "Ascolto musica.",
      "en": "I listen to music."
    }
  },
  {
    "romaji": "sensei",
    "italiano": "Insegnante",
    "inglese": "Teacher",
    "frase": "Sensei wa shinsetsu desu.",
    "traduzione": {
      "it": "L'insegnante è gentile.",
      "en": "The teacher is kind."
    }
  },
  {
    "romaji": "kyou",
    "italiano": "Oggi",
    "inglese": "Today",
    "frase": "Kyou wa getsuyoubi desu.",
    "traduzione": {
      "it": "Oggi è lunedì.",
      "en": "Today is Monday."
    }
  },
  {
    "romaji": "ongaku",
    "italiano": "Musica",
    "inglese": "Music",
    "frase": "Watashi wa ongaku ga suki desu.",
    "traduzione": {
      "it": "Mi piace la musica.",
      "en": "I like music."
    }
  },
  {
    "romaji": "benkyou",
    "italiano": "Studiare",
    "inglese": "Study",
    "frase": "Watashi wa benkyou suru.",
    "traduzione": {
      "it": "Studio.",
      "en": "I study."
    }
  },
  {
    "romaji": "tokei",
    "italiano": "Orologio",
    "inglese": "Clock",
    "frase": "Tokei o miru.",
    "traduzione": {
      "it": "Guardo l’orologio.",
      "en": "I look at the clock."
    }
  },
  {
    "romaji": "ie",
    "italiano": "Casa",
    "inglese": "House",
    "frase": "Ie ni kaeru.",
    "traduzione": {
      "it": "Torno a casa.",
      "en": "I return home."
    }
  },
  {
    "romaji": "densha",
    "italiano": "Treno",
    "inglese": "Train",
    "frase": "Densha de iku.",
    "traduzione": {
      "it": "Vado in treno.",
      "en": "I go by train."
    }
  },
  {
    "romaji": "tomodachi to",
    "italiano": "Con un amico",
    "inglese": "With a friend",
    "frase": "Tomodachi to kaimono suru.",
    "traduzione": {
      "it": "Faccio shopping con un amico.",
      "en": "I shop with a friend."
    }
  },
  {
    "romaji": "ryouri",
    "italiano": "Cucinare",
    "inglese": "Cook",
    "frase": "Watashi wa ryouri suru.",
    "traduzione": {
      "it": "Cucino.",
      "en": "I cook."
    }
  },
  {
    "romaji": "kaimono",
    "italiano": "Shopping",
    "inglese": "Shopping",
    "frase": "Kaimono ni iku.",
    "traduzione": {
      "it": "Vado a fare shopping.",
      "en": "I go shopping."
    }
  },
  {
    "romaji": "neru",
    "italiano": "Dormire",
    "inglese": "Sleep",
    "frase": "Hachiji ni neru.",
    "traduzione": {
      "it": "Vado a dormire alle 8.",
      "en": "I sleep at 8."
    }
  },
  {
    "romaji": "okiru",
    "italiano": "Svegliarsi",
    "inglese": "Wake up",
    "frase": "Shichiji ni okiru.",
    "traduzione": {
      "it": "Mi sveglio alle 7.",
      "en": "I wake up at 7."
    }
  },
  {
    "romaji": "hirugohan",
    "italiano": "Pranzo",
    "inglese": "Lunch",
    "frase": "Hirugohan o taberu.",
    "traduzione": {
      "it": "Mangio il pranzo.",
      "en": "I eat lunch."
    }
  },
  {
    "romaji": "akeru",
    "italiano": "Aprire",
    "inglese": "Open",
    "frase": "Mado o akeru.",
    "traduzione": {
      "it": "Apro la finestra.",
      "en": "I open the window."
    }
  },
  {
    "romaji": "shimeru",
    "italiano": "Chiudere",
    "inglese": "Close",
    "frase": "Doa o shimeru.",
    "traduzione": {
      "it": "Chiudo la porta.",
      "en": "I close the door."
    }
  },
  {
    "romaji": "kasu",
    "italiano": "Prestare",
    "inglese": "Lend",
    "frase": "Hon o kasu.",
    "traduzione": {
      "it": "Presto un libro.",
      "en": "I lend a book."
    }
  },
  {
    "romaji": "kariru",
    "italiano": "Prendere in prestito",
    "inglese": "Borrow",
    "frase": "Hon o kariru.",
    "traduzione": {
      "it": "Prendo in prestito un libro.",
      "en": "I borrow a book."
    }
  }
];