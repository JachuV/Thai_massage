import React from "react";
import Navbar from "./Navbar/Navbar.js"
import Hamburger from "hamburger-react";


class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            hamburgerIsOpen: this.props.updateHamburger,
        }
    }
    
    render() {
        return(
            <div className={ 'App' }>

                <Hamburger onToggle={ toggled => {
                    if (toggled) {
                        // open a menu
                        this.setState({ hamburgerIsOpen: true });                     
                    } else {
                        // close a menu
                        this.setState({ hamburgerIsOpen: false });                        
                    }
                } } />

                <Navbar hamburgerIsOpen={ this.state.hamburgerIsOpen } />
                
                <section className={ 'home' } id={ 'scroll-home' }>
                    <div className={ 'main-title-wrapper' }>
                        <h1 className={ 'main-title' }>
                                Thaikowska
                        </h1>
                        <h2>Masaż tajski</h2>
                    </div>
                    <div className={ 'container' }>
                        <p>
                            <span className={ 'first-letter' } >W</span> dzisiejszych czasach ludzkość żyje w szybkim tempie, pełnym stresu i napięcia.
                            Masaże stają się coraz bardziej popularne jako sposób na łagodzenie przewlekłego
                            bólu i stresu. Formą bodywork zyskującą coraz większą popularność na całym świecie
                            jest masaż tajski. Ludzie często sięgają po ten masaż w celach terapeutycznych,
                            profilaktycznie, a także w celu odprężenia i odstresowania po ciężkim dniu. Techniki
                            masażu stosowane w masażu tajskim wynikają z tradycyjnych wierzeń, ajurwedy,
                            medycyny chińskiej i jogi. Masaż tajski w Tajlandii nazywany jest nuad boran lub
                            też nuad phaen boran co w dosłownym tłumaczeniu oznacza tradycyjną tajską metodę
                            leczenia dłońmi. Ogromną zaletą jest holistyczne podejście do ciała człowieka,
                            terapeuta rozmasowuje napięcia na liniach energetycznych, stosując techniki
                            rozciągania, głębokiej kompresji mięśni, mobilizacji stawów, akupresury,
                            refleksologii, jogi, oraz zawiera elementy medytacji, co powoduje pełną relaksację
                            ciała i umysłu, lekkość jak i wpływa pozytywnie na emocje i nastrój. W rezultacie
                            z masażem tajskim wiąże się wiele korzyści zdrowotnych.
                        </p>
                        <div className={ 'image-in-text' }></div>
                        <p>
                            W tradycyjnym masażu tajskim masażysta wykonuje liczne ruchy ugniatające na ciele
                            masowanego w celu rozluźnienia tkanki, przygotowując ciało do głębszych warstw masażu.
                            Masażysta będzie również wywierał powolny, zdecydowany i głęboki nacisk na określone punkty
                            na ciele za pomocą dłoni i/lub łokcia aby manipulować tkankami miękkimi i tkanką
                            łączną w celu osiągnięcia efektów terapeutycznych.
                        </p>
                        <p>
                            Techniki masażu stosowane w masażu tajskim są podobne do technik stosowanych w
                            innych formach fizjoterapii manualnej. Główną formą ruchów masażysty jest rozciąganie
                            i mobilizacja mięśni, wywieranie nacisku na określone punkty na ciele, aby uwolnić
                            nagromadzone napięcia i blokady, które przeważnie są przyczyną złego samopoczucia i
                            różnego rodzaju dolegliwości bólowych.
                        </p>
                        <p>
                            Jak widać z powyższego zarysu, masaż tajski ma wiele zalet. Klienci zgłaszają, że jest w
                            stanie złagodzić bóle, jednocześnie zwiększając elastyczność i krążenie po zaledwie jednej
                            sesji masażu. Dzięki temu terapia Masażem Tajskim jest idealną formą leczenia szerokiej
                            gamy dolegliwości fizycznych.
                        </p>
                        <p>
                            W dzisiejszym pędzącym świecie, w którym ludzie mają napięte harmonogramy, osiągnięcia i
                            stres związany z pracą, miło jest od czasu do czasu zrobić sobie przerwę i spędzić trochę
                            czasu z najbliższymi lub delektować się pysznym posiłkiem w restauracji lub kawiarni.
                            Jednak kiedy jesteś zbyt zajęty lub zmęczony, trudno jest się zrelaksować i odprężyć.
                            Dobry masaż może pomóc ci odstresować się, rozluźnić spięte mięśnie i dać ci tak bardzo
                            potrzebne uwolnienie, którego pragnie Twoje ciało i umysł. Masaż może być jednocześnie
                            terapeutyczny i błogi!
                        </p>
                    </div>
                </section>

                <section className={ 'benefits' } id={ 'scroll-benefits' }>
                    <div className={ "container" }>
                        <h2>
                            JAKIE SĄ KORZYŚCI Z MASAŻU TAJSKIEGO?
                        </h2>
                        <ul>
                            <li>
                                wzmacniają pracę układów: mięśniowo-stawowego, krwionośnego, limfatycznego, hormonalnego oraz trawiennego
                            </li>
                            <li>
                                głęboki relaks i odprężenie
                            </li>
                            <li>
                                uwolnienie od napięć i stresów
                            </li>
                            <li>
                                uczucie przypływu energii
                            </li>
                            <li>
                                dobre samopoczucie
                            </li>
                            <li>
                                lepsze natlenienie i nawodnienie organizmu
                            </li>
                            <li>
                                poprawa kondycji fizycznej, gibkosci i elastyczności
                            </li>
                            <li>
                                uwolnienie mięśni od kwasu mlekowego, zalegającego po większym wysiłku fizycznym
                            </li>
                            <li>
                                stymulacja organów wewnętrznych
                            </li>
                            <li>
                                poprawa percepcji czuciowej i stanu nerwów czuciowych
                            </li>
                            <li>
                                pomoc w różnych kłopotach zdrowotnych między innymi: bólach kości, ścięgien, mięśni, lumbago, kręgosłupa i stawów
                            </li>
                            <li>
                                pomaga przy problemach nerwicowych, bezsenności, niepokojach
                            </li>
                            <li>
                                wzmacnia organizm
                            </li>
                            <li>
                                wzmacnia energię witalną
                            </li>
                            <li>
                                przywraca równowagę i spokój
                            </li>
                        </ul>
                    </div>
                </section>

                <section className={ 'indications' } id={ 'scroll-indications' }>
                    <div className={ "container" }>
                        <h2>
                                DLA KOGO JEST WSKAZANY MASAŻ TAJSKI?
                        </h2>
                        <ul className={ 'indications-list' }>
                            <li>polecany jest osobom będącym w długotrwałym stresie</li>
                            <li>chronicznie zmęczonym, narzekającym na brak energii</li>
                            <li>pracującym długie godziny w niekorzystnych dla ciała pozycjach np. siedząc, stojąc lub schylając się</li>
                            <li>osoby skarżące się na bóle głowy i migreny, problemy ze snem, będące następstwem napięć w mięśniach karku, pleców, ramion</li>
                            <li>osoby z obniżoną odpornością</li>
                            <li>napięcia mięśniowe pomiędzy treningami sportowców</li>
                        </ul>
                    </div>
                </section>

                <section className={ 'contraindications' } id={ 'scroll-contraindications' }>
                    <div className={ "container" }>
                        <h2>
                            JAKIE SĄ PRZECIWWSKAZANIA?
                        </h2>
                        <ul>
                            <li>
                                osoby borykające się z krwotokami lub ryzykiem ich wystąpienia
                            </li>
                            <li>
                                nowotwory
                            </li>
                            <li>
                                ostre stany zapalne
                            </li>
                            <li>
                                RZS (reumatoidalne zapalenie stawów)
                            </li>
                            <li>
                                ZZSK(zesztywniające zapalenia stawów kręgosłupa)
                            </li>
                            <li>
                                choroby zakaźne
                            </li>
                            <li>
                                złamania
                            </li>
                            <li>
                                skręcenia
                            </li>
                            <li>
                                zwichnięcia stawów
                            </li>
                            <li>
                                zaawansowana osteoporoza
                            </li>
                            <li>
                                świeże rany
                            </li>
                            <li>
                                zapalenia żył
                            </li>
                            <li>
                                zakrzepica
                            </li>
                            <li>
                                choroby skóry (np. grzybica, łuszczyca) oraz wszelkie ropne zmiany
                            </li>
                        </ul>
                    </div>
                </section>

                <section className={ 'preparations' } id={ 'scroll-preparations' }>
                    <div className={ 'container' }>
                        <h2>
                            JAK PRZYGOTOWAĆ SIĘ DO MASAŻU?
                        </h2>
                        <ul>
                            <li>
                                ostatni posiłek zjedz najpóźniej godzinę przed masażem (spożywaj lekkie potrawy, świeże owoce)
                            </li>
                            <li>
                                pij więcej wody czy ciepłej herbaty, unikaj nadmiaru kawy
                            </li>
                            <li>
                                w dniu masażu nie pij alkoholu
                            </li>
                            <li>
                                przygotuj lekki, luźny i wygodny strój (najlepiej długie luźne spodnie lub legginsy i luźny T-shirt)
                            </li>
                            <li>
                                weź relaksującą kąpiel 
                            </li>
                        </ul>
                    </div>
                </section>

                <section className={ 'contact' } id={ 'scroll-contact' }>
                    <div className={ "container" }>
                        <h2>
                                KONTAKT
                        </h2>
                        <div className={ 'contact-data' }>
                            <div className={ 'contact-data-container' }>
                                <p>
                                        Telefon: 00423156533
                                </p>
                            </div>
                            <div className={ 'contact-data-container' }>
                                <p>
                                        E-mail: mail@mail.com
                                </p>
                            </div>
                            <div className={ 'contact-data-container' }>
                                <p>
                                        Adres:
                                </p>
                                <p>Błotna street nr zachlapany</p>
                                <p>0123 City Town</p>
                            </div>
                        </div>
                    </div>
                </section>

                <footer>Copyright: Maksymilian Laskowski &copy; 2022</footer>
            </div>
        )
    }
}
export default App;
