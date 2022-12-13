import React, { Component } from "react";
import { useTranslation, Trans } from "react-i18next";
import { Link, animateScroll as scroll } from "react-scroll";



///TODO: define variables

class Navbar extends React.Component {
    constructor() {
        super();

    }
    
    render() {
        <nav className={"App-header"}>
            <h2 id={'App-header-logo'} className={'logo'}>Magdalena Laskowska</h2>
            <ul className={'menu'}>
                <li id={'menu-home active'}>
                    <Link
                        className={'scroll'}
                        activeClass='active'
                        to='scroll-home'
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70}
                    >
                        <Trans i18nKey={'menu.home'}>
                            Strona g³ówna
                        </Trans>
                    </Link>
                </li>
                <li id={'menu-desc'}>
                    <Link
                        className={'scroll'}
                        activeClass='active'
                        to='scroll-desc'
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70}
                    >
                        <Trans i18nKey={'menu.desc'}>
                            Maza¿ tajski
                        </Trans>
                    </Link>
                </li>
                <li id={'menu-price'}>
                    <Link
                        className={'scroll'}
                        activeClass='active'
                        to='scroll-price'
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70}
                    >
                        <Trans i18nKey={'menu.price'}>
                            Cennik
                        </Trans>
                    </Link>
                </li>
                <li id={'menu-about'}>
                    <Link
                        className={'scroll'}
                        activeClass='active'
                        to='scroll-about'
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70}
                    >
                        <Trans i18nKey={'menu.about'}>
                            O mnie
                        </Trans>
                    </Link>
                </li>
                <li id={'menu-contact'}>
                    <Link
                        className={'scroll'}
                        activeClass='active'
                        to='scroll-contact'
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-70}
                    >
                        <Trans i18nKey={'menu.contact'}>
                            Kontakt
                        </Trans>
                    </Link>
                </li>
            </ul>
            <div className={'languages'}>
                {Object.keys(lngs).map((lng) => (
                    <a key={lng} className={props.i18n.resolvedLanguage === lng ? 'switch-lang active' : 'switch-lang'} type={'submit'} onClick={() => i18n.changeLanguage(lng)}>
                        {lngs[lng].nativeName}
                    </a>
                ))
                }
            </div>

        </nav>
    }
}
export default Navbar;
