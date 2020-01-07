import { Component } from 'react';

export default class Toggle extends Component {
    constructor(props) {
        super(props);
        this.state = {
            edit: false
        };
    }

    toggle = () => {
        const { edit } = this.state;
        this.setState({ edit: !edit });
    };

    render() {
        const { children } = this.props;
        const { edit } = this.state;

        return children({
            edit,
            toggle: this.toggle
        });
    }
}
