import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    // detect user language
    // learn more: https://github.com/i18next/i18next-browser-languageDetector
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    // for all options read: https://www.i18next.com/overview/configuration-options
    .init({
        debug: true,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false, // not needed for react as it escapes by default
        },
        resources: {
            pl: {
                translation: {
                    menu:{
                        home: 'Strona główna',
                        desc: 'Masaż tajski',
                        price: 'Cennik',
                        about: 'O mnie',
                        contact: 'Kontakt',
                    },
                    content: {
                        home: {
                            p1: 'Czujesz się spięty? Potrzebujesz relaksu i rozluźnienia? Świetnie trafiłeś! Masaż tajski u mnie pozwoli ci się rozluźnić Zamów już dzisiaj sesję relaksacyjnego masażu! Skontaktuj się ze mną, to umówimy się na wizytę w twoim domu- dojadę do ciebie!'
                        },
                        desc:{
                            p1: 'Masaż tajski to egzotyczny masaż rozluźniający twoje ciało. Dzięki tradycyjnym technikom twoje ciało doświadczy rozluźnienia i uelastyczni się. \nPoczujesz się głęboko zrelaksowana. Zadzwoń, a przekonasz się, co to znaczy prawdziwy relaks!'
                        },
                        price:{
                            p1: 'Dzięki posiadanemu doświadczeniu i sprzętowi, możesz cieszyć się masażem we własnym domu! \nJuż za 100 euro możesz doświadczyć tej wspaniałej starożytnej sztuki. Przed masażem weź relaksującą, gorącą kąpiel i posłuchaj ulubionej odprężającej muzyki. Skontaktuj się już teraz i umów na wizytę.'
                        },
                        about:{
                            p1: 'W moich rękach możesz czuć się bezpiecznie. Jestem energiczną, młodą osobą. Masażem interesuję się od najmłodszych lat. Zaczynałam praktykować na starszych braciach i przyjaciołach. Dzięki kursowi masażu tajskiego mogę pomóc i Tobie!'
                        },
                        contact:{
                            p1: 'Telefon:',
                            p2: 'E-mail:',
                            p3: 'Adres:'
                        },
                    }
                }
            },
            en: {
                translation: {
                    menu:{
                        home: 'Home',
                        desc: 'Thai massage',
                        price: 'Price',
                        about: 'About me',
                        contact: 'Contact me',
                    },
                    content: {
                        home: {
                            p1: 'Are you feeling tense? Do you need to relax and unwind? You\'ve come to a great place! Thai massage with me will let you relax Order a relaxing massage session today! Contact me, then we will arrange an appointment at your home - I will come to you!'
                        },
                        desc:{
                            p1: 'Thai massage is an exotic massage that relaxes your body. Through traditional techniques, your body will experience relaxation and become more flexible. \n' +
                                'You will feel deeply relaxed. Give us a call and you will see what true relaxation means!'
                        },
                        price:{
                            p1: 'With mine experience and equipment, you can enjoy a massage in your own home! \n' +
                                'For as little as 100 euros you can experience this wonderful ancient art. Before the massage, take a relaxing hot bath and listen to your favorite relaxing music. Get in touch now and make an appointment.'
                        },
                        about:{
                            p1: 'In my hands you can feel safe. I am an energetic, young person. I have been interested in massage since I was very young. I started practicing on my older brothers and friends. With the Thai massage course, I can help you too!'
                        },
                        contact:{
                            p1: 'Phone:',
                            p2: 'E-mail:',
                            p3: 'Adress:',
                        },
                    }
                }
            },
            nl: {
                translation: {
                    menu:{
                        home: 'Homepage',
                        desc: 'Thaise massage',
                        price: 'Prijslijst',
                        about: 'Over mij',
                        contact: 'Neem contact op met',
                    },
                    content: {
                        home: {
                            p1: 'Voel je je gespannen? Behoefte om te ontspannen en te ontstressen? Dan ben je aan het juiste adres!\n' +
                                'Een Thaise massage met mij zal u laten ontspannen Bestel vandaag nog een ontspannende\n' +
                                'massagesessie! Neem contact met me op en we maken een afspraak bij u thuis - ik kom naar u toe!'
                        },
                        desc:{
                            p1: 'Thaise massage is een exotische massage die uw lichaam ontspant. Door middel van traditionele\n' +
                                'technieken zal uw lichaam ontspanning ervaren en flexibeler worden\n' +
                                'Je zult je diep ontspannen voelen. Geef ons een seintje en u zult ontdekken wat echte ontspanning\n' +
                                'betekent!'
                        },
                        price:{
                            p1: 'Met onze ervaring en apparatuur, kunt u genieten van een massage in uw eigen huis!\n' +
                                'Voor slechts €100 kunt u deze prachtige oude kunst ervaren. Neem voor uw massage een\n' +
                                'ontspannend warm bad en luister naar uw favoriete ontspannende muziek. Neem nu contact op en\n' +
                                'maak een afspraak.'
                        },
                        about:{
                            p1: 'In mijn handen kun je je veilig voelen. Ik ben een energiek, jong persoon. Ik ben al geïnteresseerd in\n' +
                                'massage sinds ik heel jong was. Ik begon te oefenen op mijn oudere broers en vrienden. Dankzij de\n' +
                                'Thaise massage cursus, kan ik u ook helpen!'
                        },
                        contact:{
                            p1: 'Telefoon:',
                            p2: 'E-mail:',
                            p3: 'Adres:',
                        },
                    }
                }
            },
        }
    });

export default i18n;