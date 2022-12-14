import React from "react";
import { useTranslation, Trans } from "react-i18next";
import { Link, animateScroll as scroll } from "react-scroll";


class MenuButton extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
            i18nKey: this.props.i18nKey,
            name: this.props.name,
            to: this.props.to,
        };
	}
	render() {
        return (
            <li id={ this.state.id }>
                <Link
                    className={ 'scroll' }
                    activeClass='active'
                    to={ this.state.to }
                    spy={ true }
                    smooth={ true }
                    duration={ 500 }
                    offset={ -70 }
                >
                    <Trans i18nKey={ this.state.i18nKey }>
                        { this.state.name }
                    </Trans>
                </Link>
            </li>
			)
	}
}
export default MenuButton;
