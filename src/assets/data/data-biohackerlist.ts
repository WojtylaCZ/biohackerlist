import { BiohackCategories } from "../../app/category";

export const data: Array<BiohackCategories> = [
  {
    name: "Hacks",
    hacks: [
      {
        id: 2,
        canonical_name: "Sleeping in darkness",
        slug: "sleep-in-dark",
        locales: {
          cs: {
            name_locale: "Spaní ve tmě",
            annotation_locale:
              "Melatonin neboli spánkový hormon má v našem těle na starosti usínání, střídání spánkových cyklů a probouzení. Nejvíce tohoto hormonu se uvolňuje při absolutní tmě. Působení světla naopak jeho hladinu snižuje.",
            actionInShort: "V ložnici si před spaním udělejte úplnou tmu.",
            complexity: "easy",
            resources: [
              {
                type: "article",
                title: "Spaní ve tmě",
                link: "https://www.cibdol.cz/blog/1193-spani-ve-tme",
              },
            ],
          },
          en: {
            name_locale: "Sleeping in darkness",
            annotation_locale:
              "Light is one of the most important external factors affecting sleep. While most people intuitively know that it’s easier to sleep when it’s dark, the link between light and sleep goes much deeper. Light plays a central role in regulating circadian rhythm, the body’s internal clock that signals when to be alert and when to rest. Light also affects the production of melatonin, an essential sleep-promoting hormone.",
            actionInShort: "Make your bedroom completely dark when going to sleep.",
            complexity: "easy",
            resources: [
              {
                type: "article",
                title: "Light and Sleep",
                link: "https://www.sleepfoundation.org/bedroom-environment/light-and-sleep",
              },
              {
                type: "article",
                title: "Sleep Science: Can Sleeping in a Dark Room Help You Live Longer?",
                link: "https://healthnews.com/longevity/biohacking/sleep-science-can-sleeping-in-a-dark-room-help-you-live-longer/",
              },
            ],
          },
        },
      },
      {
        id: 5,
        canonical_name: "Blocking blue light",
        slug: "blocking-blue-light",
        locales: {
          cs: {
            name_locale: "Blokace modrého světla",
            annotation_locale:
              "Vystavení modrému světlu ve večerních hodinách potlačuje v mozku produkci melatoninu.",
            actionInShort:
              "Minimalizuj expozici modrému světlu večer (telefon, obrazovka, zářivky).",
            complexity: "medium",
            resources: [
              {
                type: "article",
                title: "Chcete zlepšit spánek a zdraví? Začněte před spaním blokovat modré světlo!",
                link: "https://www.brainmarket.cz/nase-novinky/proc-nosit-bryle-blokujici-modre-svetlo/",
              },
              {
                type: "article",
                title: "Co když nám nesprávné zacházení se světlem ovlivňuje spánek?",
                link: "https://codeoflife.cz/telo/spanek/co-kdyz-nam-nespravne-zachazeni-se-svetlem-ovlivnuje-spanek/",
              },
            ],
          },
          en: {
            name_locale: "Blocking blue light",
            annotation_locale:
              "We get most of our exposure to blue light from the sun. Blue light stimulates parts of the brain that make us feel alert. Studies suggest that blue light in the evening disrupts your brain’s natural sleep-wake cycles, which are crucial for optimal health",
            actionInShort:
              "Minimise exposure to blue light in the evening (phones, screens, white ceiling light).",
            complexity: "medium",
            resources: [
              {
                type: "article",
                title: "Blue light",
                link: "https://www.sleepfoundation.org/bedroom-environment/blue-light",
              },
              {
                type: "article",
                title: "Blue Light and Sleep: What's the Connection?",
                link: "https://www.healthline.com/nutrition/block-blue-light-to-sleep-better",
              },
            ],
          },
        },
      },
      {
        id: 5,
        canonical_name: "Interminent fasting",
        slug: "interminent-fasting",
        locales: {
          cs: {
            name_locale: "Přerušovaný půst",
            annotation_locale:
              "Přerušovaný půst je označení pro stravovací vzorec, kdy se střídají fáze půstu a fáze jídla. Nepopisuje konkrétní složení jídelníčku ale dobu, kdy jídlo zařadit. V době půstu nekonzumujete žádné jídlo. Dodržujete jen pitný režim.",
            actionInShort:
              "Nastav si pravidelný rozvrh přes den nebo přes týden, kdy jíš a kdy vůbec nejíš.",
            complexity: "challenging",
            resources: [
              {
                type: "article",
                title: "Přerušovaný půst pro zdraví i hubnutí",
                link: "https://www.brainmarket.cz/nase-novinky/prerusovany-pust-pro-zdravi-hubnuti/",
              },
              {
                type: "article",
                title: 'Přerušovaný půst: Výhody i stinné stránky "zázračné" metody',
                link: "https://aktin.cz/prerusovane-hladoveni-zazracna-metoda-nebo-jen-nafouknuta-bublina",
              },
              {
                type: "book",
                title: "Cirkadianni kod",
                link: "https://www.databazeknih.cz/knihy/cirkadianni-kod-457576",
              },
            ],
          },
          en: {
            name_locale: "Interminent fasting",
            annotation_locale:
              "Intermittent fasting means that you don't eat for a period of time each day or week.",
            actionInShort: "Set timetable during the day or week when you eat and when you don't",
            complexity: "challenging",
            resources: [
              {
                type: "article",
                title: "Harvard - Intermittent Fasting",
                link: "https://www.health.harvard.edu/blog/intermittent-fasting-surprising-update-2018062914156",
              },
              {
                type: "article",
                title: "What is intermittent fasting? Does it have health benefits?",
                link: "https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/expert-answers/intermittent-fasting/faq-20441303",
              },
              {
                type: "article",
                title: "Wikipedia - Intermittent Fasting",
                link: "https://en.wikipedia.org/wiki/Intermittent_fasting",
              },
            ],
          },
        },
      },

      {
        id: 1,
        canonical_name: "Ciarcadial rythm",
        slug: "ciarcadial-rythm",
        locales: {
          cs: {
            name_locale: "Sladěný cirkadiální rytmus",
            annotation_locale:
              "Od pradávna jsme se budili se světlem a usínali s tmou. V dnešním moderním světě s osvětlením, mobily, budíky žijeme často jiným rytmem než jsou naše vnitřní hodiny.",
            actionInShort:
              "Zjistěte si jaký je váš přirozený rytmus těla, kdy chodit spát a vstávat.",
            complexity: "easy",
            resources: [
              {
                type: "book",
                title: "Cirkadianni kod",
                link: "https://www.databazeknih.cz/knihy/cirkadianni-kod-457576",
              },
              {
                type: "article",
                title: "Cirkadiánní rytmus",
                link: "https://cs.wikipedia.org/wiki/Cirkadi%C3%A1nn%C3%AD_rytmus",
              },
            ],
          },
          en: {
            name_locale: "Life aligned with circadian rythm",
            annotation_locale:
              "A circadian rhythm or circadian cycle, is a natural oscillation that repeats roughly every 24 hours. Circadian rhythms are regulated by a circadian clock whose primary function is to rhythmically co-ordinate biological processes so they occur at the correct time to maximise the fitness of an individual.",
            actionInShort: "",
            complexity: "easy",
            resources: [
              {
                type: "book",
                title: "The Circadian Code",
                link: "https://www.goodreads.com/book/show/37534452-the-circadian-code",
              },
              {
                type: "article",
                title: "Circadian rhythm",
                link: "https://en.wikipedia.org/wiki/Circadian_rhythm",
              },
              {
                type: "article",
                title: "Circadian Rhythm",
                link: "https://www.sleepfoundation.org/circadian-rhythm",
              },
            ],
          },
        },
      },

      // Nize lorem ipsum

      {
        id: 3,
        canonical_name: "Cold showers",
        slug: "cold-showers",
        locales: {
          cs: {
            name_locale: "Studená sprcha po ránu",
            annotation_locale:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            actionInShort: "",
            complexity: "easy",
            resources: [
              {
                type: "podcast",
                title: "Petr Ludwig - Libor Mattus",
                link: "https://www.petrludwig.cz/deeptalks/https/wwwyoutubecom/watchvjuqukupbye4",
              },
            ],
          },
          en: {
            name_locale: "Cold shower in the morning",
            annotation_locale:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            actionInShort: "",
            complexity: "easy",
            resources: [
              {
                type: "article",
                title: "WimHof cold shower",
                link: "https://www.wimhofmethod.com/benefits-of-cold-showers",
              },
            ],
          },
        },
      },
      {
        id: 4,
        canonical_name: "Breathwork",
        slug: "breathwork",
        locales: {
          cs: {
            name_locale: "Dýchací cvičení",
            annotation_locale:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            actionInShort: "",
            complexity: "easy",
            resources: [
              {
                type: "article",
                title: "Dechová cvičení",
                link: "https://aktin.cz/dechova-cviceni-jak-lepe-ovladat-sve-emoce-i-telo-a-ulevit-si-tak-od-stresu",
              },
            ],
          },
          en: {
            name_locale: "Aligned with circadian rythm",
            annotation_locale:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            actionInShort: "",
            complexity: "easy",
            resources: [
              {
                type: "article",
                title: "SOMA breath",
                link: "https://www.somabreath.com/scientific-explanation-of-soma-breath/",
              },
            ],
          },
        },
      },

      {
        id: 5,
        canonical_name: "Nasal breathing",
        slug: "nasal-breathing",
        locales: {
          cs: {
            name_locale: "Dýchaní nosem",
            annotation_locale:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            actionInShort: "",
            complexity: "easy",
            resources: [
              {
                type: "article",
                title: "Dychani nosem",
                link: "https://www.kb5.cz/2017/05/kb5vyzva-12-kroku-ke-zdravi-sile-kondici-nos/",
              },
              {
                type: "article",
                title: "Predychavani",
                link: "https://codeoflife.cz/biohacking/predychani/",
              },
            ],
          },
        },
      },

      {
        id: 2,
        canonical_name: "Suggest a new hack",
        slug: "new-hack",
        locales: {
          cs: {
            name_locale: "navrhni novy biohack!",
            annotation_locale: "Kratky popis",
            actionInShort: "",
            complexity: "easy",
            resources: [
              {
                type: "book",
                title: "Kniha?",
                link: "",
              },
            ],
          },
          en: {
            name_locale: "suggest a new hack here",
            annotation_locale:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
            actionInShort: "",
            complexity: "easy",
            resources: [
              {
                type: "book",
                title: "An article?",
                link: "",
              },
            ],
          },
        },
      },
    ],
  },
];
