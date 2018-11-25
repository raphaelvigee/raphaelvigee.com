import React from 'react';
import raccoon from "../assets/images/raccoon.svg";
import VanillaTilt from 'vanilla-tilt'

export default class TiltRaccoon extends React.Component {
    constructor(props) {
        super(props);

        this.img = React.createRef();
    }

    componentDidMount() {
        VanillaTilt.init(this.img.current, {
            perspective: 1000,
            reverse: true,
            scale: 1.1,
        });
    }

    componentWillUnmount() {
        this.img.current.vanillaTilt.destroy();
    }

    render() {
        return (
            <img src={raccoon} alt="Raccoon" ref={this.img}/>
        )
    }
}
