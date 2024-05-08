const util = require("util");

const games = [
  {
    $: {
      type: "boardgame",
      id: "230802",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "Azul",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2017",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgame",
      id: "271512",
    },
    name: [
      {
        $: {
          type: "alternate",
          value: "5211: Azul",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2019",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgame",
      id: "29793",
    },
    name: [
      {
        $: {
          type: "primary",
          value:
            "ATS: Axis Legion – Spanish Division Azul on the Eastern Front",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2007",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgame",
      id: "19254",
    },
    name: [
      {
        $: {
          type: "alternate",
          value: "Azul y Gris",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "1903",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgame",
      id: "41572",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "Azul y Rojo",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2009",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgame",
      id: "294345",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "Azul: Crystal Mosaic",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2020",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgame",
      id: "235739",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "Azul: Joker Tiles",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2017",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgame",
      id: "363247",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "Azul: Master Chocolatier",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2022",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgame",
      id: "346965",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "Azul: Queen's Garden",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2021",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgame",
      id: "349221",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "Azul: Queen's Garden – Bonus Cards",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2021",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgame",
      id: "264017",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "Azul: Special Factories Promo",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2018",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgame",
      id: "256226",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "Azul: Stained Glass of Sintra",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2018",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgame",
      id: "287954",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "Azul: Summer Pavilion",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2019",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgame",
      id: "332613",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "Azul: Summer Pavilion – Glazed Pavilion",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2021",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgame",
      id: "292743",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "Azul: Summer Pavilion – Objective Tiles Mini Expansion",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2019",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgame",
      id: "111636",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "Azuleo",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2005",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgame",
      id: "38547",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "Azules y grises",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "1985",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgame",
      id: "243614",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "Blobbiemundo: Mazo Azul",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgame",
      id: "4561",
    },
    name: [
      {
        $: {
          type: "alternate",
          value: "Carrera de Mente: Azul",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "1985",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgame",
      id: "108877",
    },
    name: [
      {
        $: {
          type: "alternate",
          value: "Detetive Jr: Detetives Do Prédio Azul",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2008",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgame",
      id: "42323",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "Le Franc-Tireur #10: Division Azul",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2009",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgame",
      id: "364867",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "Haphazard: Azulea Awakens",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2023",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgame",
      id: "333151",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "High Noon: Montaña Azul's Los Hermanos",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2021",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgame",
      id: "171010",
    },
    name: [
      {
        $: {
          type: "alternate",
          value: "Juego de Tronos: El Juego de Cartas – El Azul Llama",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2015",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgame",
      id: "357173",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "Mystery Party in the Box: Bajo la Luna Azul",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2021",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgame",
      id: "50445",
    },
    name: [
      {
        $: {
          type: "alternate",
          value: "Perro rojo, perro azul",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgame",
      id: "245654",
    },
    name: [
      {
        $: {
          type: "alternate",
          value: "Railroad Ink: Edición azul profundo",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2018",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgame",
      id: "57660",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "Time's Up! Edición Azul",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2006",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgameexpansion",
      id: "29793",
    },
    name: [
      {
        $: {
          type: "primary",
          value:
            "ATS: Axis Legion – Spanish Division Azul on the Eastern Front",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2007",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgameexpansion",
      id: "294345",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "Azul: Crystal Mosaic",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2020",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgameexpansion",
      id: "235739",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "Azul: Joker Tiles",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2017",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgameexpansion",
      id: "349221",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "Azul: Queen's Garden – Bonus Cards",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2021",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgameexpansion",
      id: "264017",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "Azul: Special Factories Promo",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2018",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgameexpansion",
      id: "332613",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "Azul: Summer Pavilion – Glazed Pavilion",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2021",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgameexpansion",
      id: "292743",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "Azul: Summer Pavilion – Objective Tiles Mini Expansion",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2019",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgameexpansion",
      id: "243614",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "Blobbiemundo: Mazo Azul",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgameexpansion",
      id: "42323",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "Le Franc-Tireur #10: Division Azul",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2009",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgameexpansion",
      id: "333151",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "High Noon: Montaña Azul's Los Hermanos",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2021",
        },
      },
    ],
  },
  {
    $: {
      type: "boardgameexpansion",
      id: "171010",
    },
    name: [
      {
        $: {
          type: "alternate",
          value: "Juego de Tronos: El Juego de Cartas – El Azul Llama",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2015",
        },
      },
    ],
  },
  {
    $: {
      type: "rpgitem",
      id: "365239",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "Algo acecha en las Montañas Azules",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2020",
        },
      },
    ],
  },
  {
    $: {
      type: "rpgitem",
      id: "365270",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "El azote azul de la Mina Mûr",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2021",
        },
      },
    ],
  },
  {
    $: {
      type: "rpgitem",
      id: "412274",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "Azulia City Supplement",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2024",
        },
      },
    ],
  },
  {
    $: {
      type: "rpgitem",
      id: "284620",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "By Beard and Ear! & Azulgunds Bane",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2015",
        },
      },
    ],
  },
  {
    $: {
      type: "rpgitem",
      id: "60493",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "The Caravan City of Azul",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2001",
        },
      },
    ],
  },
  {
    $: {
      type: "rpgitem",
      id: "373741",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "Los Chicos de Azul",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2021",
        },
      },
    ],
  },
  {
    $: {
      type: "rpgitem",
      id: "276911",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "Incursión a la Tierra del Dios Azul",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2017",
        },
      },
    ],
  },
  {
    $: {
      type: "rpgitem",
      id: "44051",
    },
    name: [
      {
        $: {
          type: "alternate",
          value:
            "Lacuna, Episodio I. La Creación del Misterio y la Chica de Ciudad Azul",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "2006",
        },
      },
    ],
  },
  {
    $: {
      type: "rpgitem",
      id: "155112",
    },
    name: [
      {
        $: {
          type: "primary",
          value: "El Libro Azul",
        },
      },
    ],
    yearpublished: [
      {
        $: {
          value: "1996",
        },
      },
    ],
  },
];

const normalizedGames = [
  {
    type: ["boardgame"],
    id: ["230802"],
    name: [
      {
        type: ["primary"],
        value: ["Azul"],
      },
    ],
    yearpublished: [
      {
        value: ["2017"],
      },
    ],
  },
  {
    type: ["boardgame"],
    id: ["271512"],
    name: [
      {
        type: ["alternate"],
        value: ["5211: Azul"],
      },
    ],
    yearpublished: [
      {
        value: ["2019"],
      },
    ],
  },
  {
    type: ["boardgame"],
    id: ["29793"],
    name: [
      {
        type: ["primary"],
        value: [
          "ATS: Axis Legion – Spanish Division Azul on the Eastern Front",
        ],
      },
    ],
    yearpublished: [
      {
        value: ["2007"],
      },
    ],
  },
  {
    type: ["boardgame"],
    id: ["19254"],
    name: [
      {
        type: ["alternate"],
        value: ["Azul y Gris"],
      },
    ],
    yearpublished: [
      {
        value: ["1903"],
      },
    ],
  },
  {
    type: ["boardgame"],
    id: ["41572"],
    name: [
      {
        type: ["primary"],
        value: ["Azul y Rojo"],
      },
    ],
    yearpublished: [
      {
        value: ["2009"],
      },
    ],
  },
  {
    type: ["boardgame"],
    id: ["294345"],
    name: [
      {
        type: ["primary"],
        value: ["Azul: Crystal Mosaic"],
      },
    ],
    yearpublished: [
      {
        value: ["2020"],
      },
    ],
  },
  {
    type: ["boardgame"],
    id: ["235739"],
    name: [
      {
        type: ["primary"],
        value: ["Azul: Joker Tiles"],
      },
    ],
    yearpublished: [
      {
        value: ["2017"],
      },
    ],
  },
  {
    type: ["boardgame"],
    id: ["363247"],
    name: [
      {
        type: ["primary"],
        value: ["Azul: Master Chocolatier"],
      },
    ],
    yearpublished: [
      {
        value: ["2022"],
      },
    ],
  },
  {
    type: ["boardgame"],
    id: ["346965"],
    name: [
      {
        type: ["primary"],
        value: ["Azul: Queen's Garden"],
      },
    ],
    yearpublished: [
      {
        value: ["2021"],
      },
    ],
  },
  {
    type: ["boardgame"],
    id: ["349221"],
    name: [
      {
        type: ["primary"],
        value: ["Azul: Queen's Garden – Bonus Cards"],
      },
    ],
    yearpublished: [
      {
        value: ["2021"],
      },
    ],
  },
  {
    type: ["boardgame"],
    id: ["264017"],
    name: [
      {
        type: ["primary"],
        value: ["Azul: Special Factories Promo"],
      },
    ],
    yearpublished: [
      {
        value: ["2018"],
      },
    ],
  },
  {
    type: ["boardgame"],
    id: ["256226"],
    name: [
      {
        type: ["primary"],
        value: ["Azul: Stained Glass of Sintra"],
      },
    ],
    yearpublished: [
      {
        value: ["2018"],
      },
    ],
  },
  {
    type: ["boardgame"],
    id: ["287954"],
    name: [
      {
        type: ["primary"],
        value: ["Azul: Summer Pavilion"],
      },
    ],
    yearpublished: [
      {
        value: ["2019"],
      },
    ],
  },
  {
    type: ["boardgame"],
    id: ["332613"],
    name: [
      {
        type: ["primary"],
        value: ["Azul: Summer Pavilion – Glazed Pavilion"],
      },
    ],
    yearpublished: [
      {
        value: ["2021"],
      },
    ],
  },
  {
    type: ["boardgame"],
    id: ["292743"],
    name: [
      {
        type: ["primary"],
        value: ["Azul: Summer Pavilion – Objective Tiles Mini Expansion"],
      },
    ],
    yearpublished: [
      {
        value: ["2019"],
      },
    ],
  },
  {
    type: ["boardgame"],
    id: ["111636"],
    name: [
      {
        type: ["primary"],
        value: ["Azuleo"],
      },
    ],
    yearpublished: [
      {
        value: ["2005"],
      },
    ],
  },
  {
    type: ["boardgame"],
    id: ["38547"],
    name: [
      {
        type: ["primary"],
        value: ["Azules y grises"],
      },
    ],
    yearpublished: [
      {
        value: ["1985"],
      },
    ],
  },
  {
    type: ["boardgame"],
    id: ["243614"],
    name: [
      {
        type: ["primary"],
        value: ["Blobbiemundo: Mazo Azul"],
      },
    ],
  },
  {
    type: ["boardgame"],
    id: ["4561"],
    name: [
      {
        type: ["alternate"],
        value: ["Carrera de Mente: Azul"],
      },
    ],
    yearpublished: [
      {
        value: ["1985"],
      },
    ],
  },
  {
    type: ["boardgame"],
    id: ["108877"],
    name: [
      {
        type: ["alternate"],
        value: ["Detetive Jr: Detetives Do Prédio Azul"],
      },
    ],
    yearpublished: [
      {
        value: ["2008"],
      },
    ],
  },
  {
    type: ["boardgame"],
    id: ["42323"],
    name: [
      {
        type: ["primary"],
        value: ["Le Franc-Tireur #10: Division Azul"],
      },
    ],
    yearpublished: [
      {
        value: ["2009"],
      },
    ],
  },
  {
    type: ["boardgame"],
    id: ["364867"],
    name: [
      {
        type: ["primary"],
        value: ["Haphazard: Azulea Awakens"],
      },
    ],
    yearpublished: [
      {
        value: ["2023"],
      },
    ],
  },
  {
    type: ["boardgame"],
    id: ["333151"],
    name: [
      {
        type: ["primary"],
        value: ["High Noon: Montaña Azul's Los Hermanos"],
      },
    ],
    yearpublished: [
      {
        value: ["2021"],
      },
    ],
  },
  {
    type: ["boardgame"],
    id: ["171010"],
    name: [
      {
        type: ["alternate"],
        value: ["Juego de Tronos: El Juego de Cartas – El Azul Llama"],
      },
    ],
    yearpublished: [
      {
        value: ["2015"],
      },
    ],
  },
  {
    type: ["boardgame"],
    id: ["357173"],
    name: [
      {
        type: ["primary"],
        value: ["Mystery Party in the Box: Bajo la Luna Azul"],
      },
    ],
    yearpublished: [
      {
        value: ["2021"],
      },
    ],
  },
  {
    type: ["boardgame"],
    id: ["50445"],
    name: [
      {
        type: ["alternate"],
        value: ["Perro rojo, perro azul"],
      },
    ],
  },
  {
    type: ["boardgame"],
    id: ["245654"],
    name: [
      {
        type: ["alternate"],
        value: ["Railroad Ink: Edición azul profundo"],
      },
    ],
    yearpublished: [
      {
        value: ["2018"],
      },
    ],
  },
  {
    type: ["boardgame"],
    id: ["57660"],
    name: [
      {
        type: ["primary"],
        value: ["Time's Up! Edición Azul"],
      },
    ],
    yearpublished: [
      {
        value: ["2006"],
      },
    ],
  },
  {
    type: ["boardgameexpansion"],
    id: ["29793"],
    name: [
      {
        type: ["primary"],
        value: [
          "ATS: Axis Legion – Spanish Division Azul on the Eastern Front",
        ],
      },
    ],
    yearpublished: [
      {
        value: ["2007"],
      },
    ],
  },
  {
    type: ["boardgameexpansion"],
    id: ["294345"],
    name: [
      {
        type: ["primary"],
        value: ["Azul: Crystal Mosaic"],
      },
    ],
    yearpublished: [
      {
        value: ["2020"],
      },
    ],
  },
  {
    type: ["boardgameexpansion"],
    id: ["235739"],
    name: [
      {
        type: ["primary"],
        value: ["Azul: Joker Tiles"],
      },
    ],
    yearpublished: [
      {
        value: ["2017"],
      },
    ],
  },
  {
    type: ["boardgameexpansion"],
    id: ["349221"],
    name: [
      {
        type: ["primary"],
        value: ["Azul: Queen's Garden – Bonus Cards"],
      },
    ],
    yearpublished: [
      {
        value: ["2021"],
      },
    ],
  },
  {
    type: ["boardgameexpansion"],
    id: ["264017"],
    name: [
      {
        type: ["primary"],
        value: ["Azul: Special Factories Promo"],
      },
    ],
    yearpublished: [
      {
        value: ["2018"],
      },
    ],
  },
  {
    type: ["boardgameexpansion"],
    id: ["332613"],
    name: [
      {
        type: ["primary"],
        value: ["Azul: Summer Pavilion – Glazed Pavilion"],
      },
    ],
    yearpublished: [
      {
        value: ["2021"],
      },
    ],
  },
  {
    type: ["boardgameexpansion"],
    id: ["292743"],
    name: [
      {
        type: ["primary"],
        value: ["Azul: Summer Pavilion – Objective Tiles Mini Expansion"],
      },
    ],
    yearpublished: [
      {
        value: ["2019"],
      },
    ],
  },
  {
    type: ["boardgameexpansion"],
    id: ["243614"],
    name: [
      {
        type: ["primary"],
        value: ["Blobbiemundo: Mazo Azul"],
      },
    ],
  },
  {
    type: ["boardgameexpansion"],
    id: ["42323"],
    name: [
      {
        type: ["primary"],
        value: ["Le Franc-Tireur #10: Division Azul"],
      },
    ],
    yearpublished: [
      {
        value: ["2009"],
      },
    ],
  },
  {
    type: ["boardgameexpansion"],
    id: ["333151"],
    name: [
      {
        type: ["primary"],
        value: ["High Noon: Montaña Azul's Los Hermanos"],
      },
    ],
    yearpublished: [
      {
        value: ["2021"],
      },
    ],
  },
  {
    type: ["boardgameexpansion"],
    id: ["171010"],
    name: [
      {
        type: ["alternate"],
        value: ["Juego de Tronos: El Juego de Cartas – El Azul Llama"],
      },
    ],
    yearpublished: [
      {
        value: ["2015"],
      },
    ],
  },
  {
    type: ["rpgitem"],
    id: ["365239"],
    name: [
      {
        type: ["primary"],
        value: ["Algo acecha en las Montañas Azules"],
      },
    ],
    yearpublished: [
      {
        value: ["2020"],
      },
    ],
  },
  {
    type: ["rpgitem"],
    id: ["365270"],
    name: [
      {
        type: ["primary"],
        value: ["El azote azul de la Mina Mûr"],
      },
    ],
    yearpublished: [
      {
        value: ["2021"],
      },
    ],
  },
  {
    type: ["rpgitem"],
    id: ["412274"],
    name: [
      {
        type: ["primary"],
        value: ["Azulia City Supplement"],
      },
    ],
    yearpublished: [
      {
        value: ["2024"],
      },
    ],
  },
  {
    type: ["rpgitem"],
    id: ["284620"],
    name: [
      {
        type: ["primary"],
        value: ["By Beard and Ear! & Azulgunds Bane"],
      },
    ],
    yearpublished: [
      {
        value: ["2015"],
      },
    ],
  },
  {
    type: ["rpgitem"],
    id: ["60493"],
    name: [
      {
        type: ["primary"],
        value: ["The Caravan City of Azul"],
      },
    ],
    yearpublished: [
      {
        value: ["2001"],
      },
    ],
  },
  {
    type: ["rpgitem"],
    id: ["373741"],
    name: [
      {
        type: ["primary"],
        value: ["Los Chicos de Azul"],
      },
    ],
    yearpublished: [
      {
        value: ["2021"],
      },
    ],
  },
  {
    type: ["rpgitem"],
    id: ["276911"],
    name: [
      {
        type: ["primary"],
        value: ["Incursión a la Tierra del Dios Azul"],
      },
    ],
    yearpublished: [
      {
        value: ["2017"],
      },
    ],
  },
  {
    type: ["rpgitem"],
    id: ["44051"],
    name: [
      {
        type: ["alternate"],
        value: [
          "Lacuna, Episodio I. La Creación del Misterio y la Chica de Ciudad Azul",
        ],
      },
    ],
    yearpublished: [
      {
        value: ["2006"],
      },
    ],
  },
  {
    type: ["rpgitem"],
    id: ["155112"],
    name: [
      {
        type: ["primary"],
        value: ["El Libro Azul"],
      },
    ],
    yearpublished: [
      {
        value: ["1996"],
      },
    ],
  },
];

const parsedGames = [];

// for (const game of games) {
//   console.log(game);
// }

// for (let i = 0; i < games.length; i++) {
//   const game = {};
//   // console.log("current game: ", games[i]);

//   game.id = games[i].$.id;
//   game.name = games[i].name[0].$.value;
//   if (!games[i].yearpublished) {
//     game.yearpublished = null;
//   } else {
//     game.yearpublished = games[i].yearpublished[0].$.value || null;
//   }
//   game.type = games[i].$.type;

//   console.log("game info: ", game);
//   if (game.yearpublished === "Year not available")
//     console.error("No year for game");
//   parsedGames.push(game);
// }

// for (let i = 0; i < normalizedGames.length; i++) {
//   const output = {
//     type: "",
//     id: "",
//     name: "",
//     yearpublished: "",
//   };

//   output.type = normalizedGames[i].type[0];
//   output.id = normalizedGames[i].id[0];
//   output.name = normalizedGames[i].name[0].value;
//   output.yearpublished = normalizedGames[i].yearpublished[0].value[0];

//   parsedGames.push(output);
// }

const flattenBoardgames = (data) => {
  return data.map((item) => {
    const type = item.$?.type;
    const id = item.$?.id;
    const name = item.name?.[0]?.$?.value;
    const yearPublished = item.yearpublished?.[0]?.$?.value || null;
    return { type, id, name, yearPublished };
  });
};

const flattendData = flattenBoardgames(games);
console.log(flattendData);

// console.log(parseGames);

const returnInfo = {
  items: {
    termsofuse: "https://boardgamegeek.com/xmlapi/termsofuse",
    item: {
      type: "boardgame",
      id: "230802",
      thumbnail:
        "https://cf.geekdo-images.com/aPSHJO0d0XOpQR5X-wJonw__thumb/img/ccsXKrdGJw-YSClWwzVUwk5Nh9Y=/fit-in/200x150/filters:strip_icc()/pic6973671.png",
      image:
        "https://cf.geekdo-images.com/aPSHJO0d0XOpQR5X-wJonw__original/img/AkbtYVc6xXJF3c9EUrakklcclKw=/0x0/filters:format(png)/pic6973671.png",
      name: [
        { type: "primary", sortindex: "1", value: "Azul" },
        { type: "alternate", sortindex: "1", value: "Azul Mini" },
        { type: "alternate", sortindex: "1", value: "Azul Міні" },
        { type: "alternate", sortindex: "1", value: "アズール" },
        { type: "alternate", sortindex: "1", value: "アズール ミニ" },
        { type: "alternate", sortindex: "1", value: "花磚物語" },
        { type: "alternate", sortindex: "1", value: "아줄" },
        { type: "alternate", sortindex: "1", value: "아줄 미니" },
      ],
      description:
        "Introduced by the Moors, azulejos (originally white and blue ceramic tiles) were fully embraced by the Portuguese when their king Manuel I, on a visit to the Alhambra palace in Southern Spain, was mesmerized by the stunning beauty of the Moorish decorative tiles. The king, awestruck by the interior beauty of the Alhambra, immediately ordered that his own palace in Portugal be decorated with similar wall tiles. As a tile-laying artist, you have been challenged to embellish the walls of the Royal Palace of Evora.&#10;&#10;In the game Azul, players take turns drafting colored tiles from suppliers to their player board. Later in the round, players score points based on how they've placed their tiles to decorate the palace. Extra points are scored for specific patterns and completing sets; wasted supplies harm the player's score. The player with the most points at the end of the game wins.&#10;&#10;",
      yearpublished: { value: "2017" },
      minplayers: { value: "2" },
      maxplayers: { value: "4" },
      poll: [
        {
          name: "suggested_numplayers",
          title: "User Suggested Number of Players",
          totalvotes: "1543",
          results: [
            {
              numplayers: "1",
              result: [
                { value: "Best", numvotes: "9" },
                { value: "Recommended", numvotes: "29" },
                { value: "Not Recommended", numvotes: "991" },
              ],
            },
            {
              numplayers: "2",
              result: [
                { value: "Best", numvotes: "881" },
                { value: "Recommended", numvotes: "527" },
                { value: "Not Recommended", numvotes: "46" },
              ],
            },
            {
              numplayers: "3",
              result: [
                { value: "Best", numvotes: "584" },
                { value: "Recommended", numvotes: "740" },
                { value: "Not Recommended", numvotes: "34" },
              ],
            },
            {
              numplayers: "4",
              result: [
                { value: "Best", numvotes: "360" },
                { value: "Recommended", numvotes: "842" },
                { value: "Not Recommended", numvotes: "132" },
              ],
            },
            {
              numplayers: "4+",
              result: [
                { value: "Best", numvotes: "3" },
                { value: "Recommended", numvotes: "15" },
                { value: "Not Recommended", numvotes: "841" },
              ],
            },
          ],
        },
        {
          name: "suggested_playerage",
          title: "User Suggested Player Age",
          totalvotes: "373",
          results: {
            result: [
              { value: "2", numvotes: "0" },
              { value: "3", numvotes: "1" },
              { value: "4", numvotes: "4" },
              { value: "5", numvotes: "15" },
              { value: "6", numvotes: "92" },
              { value: "8", numvotes: "191" },
              { value: "10", numvotes: "60" },
              { value: "12", numvotes: "9" },
              { value: "14", numvotes: "1" },
              { value: "16", numvotes: "0" },
              { value: "18", numvotes: "0" },
              { value: "21 and up", numvotes: "0" },
            ],
          },
        },
        {
          name: "language_dependence",
          title: "Language Dependence",
          totalvotes: "90",
          results: {
            result: [
              {
                level: "1",
                value: "No necessary in-game text",
                numvotes: "90",
              },
              {
                level: "2",
                value:
                  "Some necessary text - easily memorized or small crib sheet",
                numvotes: "0",
              },
              {
                level: "3",
                value: "Moderate in-game text - needs crib sheet or paste ups",
                numvotes: "0",
              },
              {
                level: "4",
                value:
                  "Extensive use of text - massive conversion needed to be playable",
                numvotes: "0",
              },
              {
                level: "5",
                value: "Unplayable in another language",
                numvotes: "0",
              },
            ],
          },
        },
      ],
      playingtime: { value: "45" },
      minplaytime: { value: "30" },
      maxplaytime: { value: "45" },
      minage: { value: "8" },
      link: [
        {
          type: "boardgamecategory",
          id: "1009",
          value: "Abstract Strategy",
        },
        { type: "boardgamecategory", id: "1028", value: "Puzzle" },
        { type: "boardgamecategory", id: "1070", value: "Renaissance" },
        {
          type: "boardgamemechanic",
          id: "2875",
          value: "End Game Bonuses",
        },
        {
          type: "boardgamemechanic",
          id: "2041",
          value: "Open Drafting",
        },
        {
          type: "boardgamemechanic",
          id: "2048",
          value: "Pattern Building",
        },
        {
          type: "boardgamemechanic",
          id: "2004",
          value: "Set Collection",
        },
        {
          type: "boardgamemechanic",
          id: "2002",
          value: "Tile Placement",
        },
        {
          type: "boardgamemechanic",
          id: "2829",
          value: "Turn Order: Claim Action",
        },
        {
          type: "boardgamefamily",
          id: "39749",
          value: "Components: 5 x 5 Grids",
        },
        {
          type: "boardgamefamily",
          id: "5614",
          value: "Country: Portugal",
        },
        {
          type: "boardgamefamily",
          id: "70360",
          value: "Digital Implementations: Board Game Arena",
        },
        { type: "boardgamefamily", id: "57039", value: "Game: Azul" },
        {
          type: "boardgamefamily",
          id: "6485",
          value: "Misc: Mensa Select",
        },
        { type: "boardgamefamily", id: "56419", value: "Theme: Art" },
        {
          type: "boardgameexpansion",
          id: "294345",
          value: "Azul: Crystal Mosaic",
        },
        {
          type: "boardgameexpansion",
          id: "235739",
          value: "Azul: Joker Tiles",
        },
        {
          type: "boardgameexpansion",
          id: "264017",
          value: "Azul: Special Factories Promo",
        },
        {
          type: "boardgameexpansion",
          id: "257590",
          value: "Deutscher Spielepreis 2018 Goodie Box",
        },
        {
          type: "boardgameexpansion",
          id: "293240",
          value: "Super Power",
        },
        {
          type: "boardgameaccessory",
          id: "294888",
          value: "Azul: 2 Player Gaming Mat",
        },
        {
          type: "boardgameaccessory",
          id: "248957",
          value: "Azul: Collector's Tile Set 1",
        },
        {
          type: "boardgameaccessory",
          id: "248958",
          value: "Azul: Collector's Tile Set 2",
        },
        {
          type: "boardgameaccessory",
          id: "330388",
          value: "Azul: Collector's Tile Set 3",
        },
        {
          type: "boardgameaccessory",
          id: "347428",
          value: "Azul: Collector's Tile Set 4",
        },
        {
          type: "boardgameaccessory",
          id: "347429",
          value: "Azul: Collector's Tile Set 5",
        },
        {
          type: "boardgameaccessory",
          id: "330387",
          value: "Azul: Collector's Tile Set 6",
        },
        {
          type: "boardgameaccessory",
          id: "256366",
          value: "Azul: Factory Layout Organizer",
        },
        {
          type: "boardgameaccessory",
          id: "248959",
          value: "Azul: First Player Tile",
        },
        {
          type: "boardgameaccessory",
          id: "366334",
          value: "Azul: Momo Monster Playmat",
        },
        {
          type: "boardgameaccessory",
          id: "250753",
          value: "Azul: Overlays",
        },
        {
          type: "boardgameimplementation",
          id: "363247",
          value: "Azul: Master Chocolatier",
        },
        {
          type: "boardgameimplementation",
          id: "346965",
          value: "Azul: Queen's Garden",
        },
        {
          type: "boardgameimplementation",
          id: "256226",
          value: "Azul: Stained Glass of Sintra",
        },
        {
          type: "boardgameimplementation",
          id: "287954",
          value: "Azul: Summer Pavilion",
        },
        {
          type: "boardgamedesigner",
          id: "42",
          value: "Michael Kiesling",
        },
        {
          type: "boardgameartist",
          id: "74074",
          value: "Philippe Guérin",
        },
        {
          type: "boardgameartist",
          id: "14057",
          value: "Chris Quilliams",
        },
        {
          type: "boardgamepublisher",
          id: "38363",
          value: "Next Move Games",
        },
        {
          type: "boardgamepublisher",
          id: "34188",
          value: "Plan B Games",
        },
        { type: "boardgamepublisher", id: "157", value: "Asmodee" },
        {
          type: "boardgamepublisher",
          id: "50230",
          value: "Belleville (Бельвіль)",
        },
        {
          type: "boardgamepublisher",
          id: "9068",
          value: "Broadway Toys LTD",
        },
        {
          type: "boardgamepublisher",
          id: "40415",
          value: "Divercentro",
        },
        {
          type: "boardgamepublisher",
          id: "15605",
          value: "Galápagos Jogos",
        },
        {
          type: "boardgamepublisher",
          id: "8820",
          value: "Gém Klub Kft.",
        },
        {
          type: "boardgamepublisher",
          id: "4785",
          value: "Ghenos Games",
        },
        {
          type: "boardgamepublisher",
          id: "46884",
          value: "Green Elephant Games",
        },
        {
          type: "boardgamepublisher",
          id: "1391",
          value: "Hobby Japan",
        },
        { type: "boardgamepublisher", id: "9634", value: "KADABRA" },
        {
          type: "boardgamepublisher",
          id: "6214",
          value: "Kaissa Chess & Games",
        },
        {
          type: "boardgamepublisher",
          id: "8291",
          value: "Korea Boardgames",
        },
        { type: "boardgamepublisher", id: "5812", value: "Lacerta" },
        { type: "boardgamepublisher", id: "7992", value: "MINDOK" },
        { type: "boardgamepublisher", id: "51614", value: "MIPL" },
        {
          type: "boardgamepublisher",
          id: "40462",
          value: "Orangutan Games",
        },
        {
          type: "boardgamepublisher",
          id: "39",
          value: "Pegasus Spiele",
        },
        {
          type: "boardgamepublisher",
          id: "7466",
          value: "Rebel Sp. z o.o.",
        },
        {
          type: "boardgamepublisher",
          id: "48279",
          value: "SuperHeated Neurons",
        },
        {
          type: "boardgamepublisher",
          id: "39774",
          value: "Tower Tactic Games",
        },
        {
          type: "boardgamepublisher",
          id: "9215",
          value: "TWOPLUS Games",
        },
        { type: "boardgamepublisher", id: "1466", value: "Zvezda" },
      ],
    },
  },
};
