import React from "react";
import MenuButton from "./MenuButton";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            lngs: {
                pl: { nativeName: 'Pl' },
                en: { nativeName: 'En' },
                nl: { nativeName: 'Nl' },
            },
            i18n: this.props.i18n,
        };

    }
    render() {
        return (
            < nav className = { "App-header" } >
                <h2 id={ 'App-header-logo' } className={ 'logo' }>Magdalena Laskowska</h2>
                <ul className={ 'menu' }>
                    <MenuButton
                        id={ 'menu-home' }
                        i18nKey={ 'menu.home' }
                        name={'Strona g³ówna' }
                        to={ 'scroll-home' }
                    />
                    <MenuButton
                        id={ 'menu-desc' }
                        i18nKey={ 'menu.desc' }
                        name={ 'Masa¿ tajski' }
                        to={'scroll-desc' }
                    />
                    <MenuButton
                        id={ 'menu-price' }
                        i18nKey={ 'menu.price' }
                        name={ 'Cennik' }
                        to={ 'scroll-price' }
                    />
                    <MenuButton
                        id={ 'menu-about' }
                        i18nKey={ 'menu.about' }
                        name={ 'O mnie' }
                        to={ 'scroll-about' }
                    />
                    <MenuButton
                        id={ 'menu-contact' }
                        i18nKey={ 'menu.contact' }
                        name={ 'Kontakt' }
                        to={ 'scroll-contact' }
                    />
                </ul>
                <div className={ 'languages' }>
                    { Object.keys(this.state.lngs).map((lng) => (
                        <a
                            key={ lng }
                            type={ 'submit' }
                            href={ this.state.lngs[lng].nativeName }
                            className={ this.state.i18n.resolvedLanguage === lng ? 'switch-lang active' : 'switch-lang' }
                            onClick={ () => this.state.i18n.changeLanguage(lng) }
                        >
                            { this.state.lngs[lng].nativeName }
                        </a>
                    ))}
                </div>
            </nav >
        )
    }
}
export default Navbar;
