import React from "react";
import MenuButton from "./MenuButton";

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            /*lngs: {
                pl: { nativeName: 'Pl' },
                en: { nativeName: 'En' },
                nl: { nativeName: 'Nl' },
            },*/
            /*i18n: this.props.i18n,*/
            hamburgerIsOpen: this.props.hamburgerIsOpen,
        };

    }

    render() {

        return (
            < nav className=
                { this.state.hamburgerIsOpen
                    ? "App-header active"
                    : "App-header unactive"
                } >
                { console.log('App-header isactive: ', this.state.hamburgerIsOpen) }

                <ul className={ 'menu' }>
                    <li><h2 id={ 'App-header-logo' } className={ 'logo' }>Thaikowska</h2></li>
                    <MenuButton
                        id={ 'menu-home' }
                        i18nKey={ 'menu.home' }
                        name={'Front' }
                        to={ 'scroll-home' }
                    />
                    <MenuButton
                        id={ 'menu-benefits' }
                        i18nKey={ 'menu.benefits' }
                        name={ 'Zyski' }
                        to={ 'scroll-benefits' }
                    />
                    <MenuButton
                        id={ 'menu-indications' }
                        i18nKey={ 'menu.indications' }
                        name={ 'Wskazania' }
                        to={'scroll-indications' }
                    />
                    <MenuButton
                        id={ 'menu-contraindications' }
                        i18nKey={ 'menu.contraindications' }
                        name={ 'Przeciwwskazania' }
                        to={ 'scroll-contraindications' }
                    />                
                    <MenuButton
                        id={ 'menu-preparations' }
                        i18nKey={ 'menu.preparations' }
                        name={ 'Przygotowanie' }
                        to={ 'scroll-preparations' }
                    />
                    <MenuButton
                        id={ 'menu-contact' }
                        i18nKey={ 'menu.contact' }
                        name={ 'Kontakt' }
                        to={ 'scroll-contact' }
                    />
                </ul>
            </nav >
        )
    }
}
export default Navbar;
