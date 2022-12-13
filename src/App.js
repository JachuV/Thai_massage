import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import "./_app.scss";
import Navbar from "./Navbar.js"
import {useTranslation, Trans} from "react-i18next";

const lngs = {
    pl: { nativeName: 'Pl' },
    en: { nativeName: 'En' },
    nl: { nativeName: 'Nl' },
}

function App() {
    const { i18n } = useTranslation();
    return (
        <div className={'App'}>

            <Navbar i18n={i18n}/>


            <section className={'home'} id={'scroll-home'}>
                <div className={"container"}>
                    <h1>
                        <Trans i18nKey={'menu.home'}>
                            Strona główna
                        </Trans>
                    </h1>
                    <p>
                        <Trans i18nKey={'content.home.p1'}>
                            Czujesz się spięty? Potrzebujesz relaksu i rozluźnienia? Świetnie trafiłeś! Masaż tajski u mnie pozwoli ci się rozluźnić Zamów już dzisiaj sesję relaksacyjnego masażu! Skontaktuj się ze mną, to umówimy się na wizytę w twoim domu- dojadę do ciebie!
                        </Trans>
                    </p>
                </div>
            </section>


            <section className={'desc'} id={'scroll-desc'}>
                <div className={"container"}>
                    <h2>
                        <Trans i18nKey={'menu.desc'}>
                            Masaż tajski
                        </Trans>
                    </h2>
                    <p>
                        <Trans i18nKey={'content.desc.p1'}>
                            Masaż tajski to egzotyczny masaż rozluźniający twoje ciało. Dzięki tradycyjnym technikom twoje ciało doświadczy rozluźnienia i uelastyczni się. Poczujesz się głęboko zrelaksowana. Zadzwoń, a przekonasz się, co to znaczy prawdziwy relaks!
                        </Trans>
                    </p>
                </div>
            </section>


            <section className={'price'} id={'scroll-price'}>
                <div className={"container"}>
                    <h2>
                        <Trans i18nKey={'menu.price'}>
                            Cennik
                        </Trans>
                    </h2>
                    <p>
                        <Trans i18nKey={'content.price.p1'}>
                            Dzięki posiadanemu doświadczeniu i sprzętowi, możesz cieszyć się masażem we własnym domu! Już za 100 euro możesz doświadczyć tej wspaniałej starożytnej sztuki. Przed masażem weź relaksującą, gorącą kąpiel i posłuchaj ulubionej odprężającej muzyki. Skontaktuj się już teraz i umów na wizytę.
                        </Trans>
                    </p>
                </div>
            </section>


            <section className={'about'} id={'scroll-about'}>
                <div className={"container"}>
                    <h2>
                        <Trans i18nKey={'menu.about'}>
                               O mnie
                        </Trans>
                    </h2>
                    <p>
                        <Trans i18nKey={'content.about.p1'}>
                            W moich rękach możesz czuć się bezpiecznie. Jestem energiczną, młodą osobą. Masażem interesuję się od najmłodszych lat. Zaczynałam praktykować na starszych braciach i przyjaciołach. Dzięki kursowi masażu tajskiego mogę pomóc i Tobie!
                        </Trans>
                    </p>
                </div>
            </section>


            <section className={'contact'} id={'scroll-contact'}>
                <div className={"container"}>
                    <h2>
                        <Trans i18nKey={'menu.contact'}>
                            Kontakt
                        </Trans>
                    </h2>
                    <div className={'contact-data'}>
                        <div className={'contact-data-container'}>

                            <p>
                                <Trans i18nKey={'content.contact.p1'}>
                                    Telefon:
                                </Trans>
                            </p>
                        </div>
                        <div className={'contact-data-container'}>
                            <p>
                                <Trans i18nKey={'content.contact.p2'}>
                                    E-mail:
                                </Trans>
                            </p>
                        </div>
                        <div className={'contact-data-container'}>
                            <p>
                                <Trans i18nKey={'content.contact.p3'}>
                                    Adres:
                                </Trans>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <footer>Copyright: Maksymilian Laskowski &copy; 2022</footer>
        </div>
    );
}
export default App;
