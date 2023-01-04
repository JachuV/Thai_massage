import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import MenuButton from './MenuButton';

export const Sidebar = (props) => {
    return (
        <Menu>
            <MenuButton
                id={ 'menu-home' }
                i18nKey={ 'menu.home' }
                name={ 'Front' }
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
                to={ 'scroll-indications' }
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
        </Menu>
    );
};
export default Sidebar;