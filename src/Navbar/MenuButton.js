import React from "react";
import { Link } from "react-scroll";


class MenuButton extends React.Component {
	constructor(props) {
        super(props);
        this.state = {
            id: this.props.id,
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
                        { this.state.name }
                </Link>
            </li>
			)
	}
}
export default MenuButton;
