import { Component } from 'react';

export default class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: false
        };
    }

    toggle = () => {
        const { dropdown } = this.state;
        this.setState({ dropdown: !dropdown });
    };

    render() {
        const { children } = this.props;
        const { dropdown } = this.state;

        return children({
            dropdown,
            toggle: this.toggle
        });
    }
}
