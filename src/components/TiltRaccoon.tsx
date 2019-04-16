import {createRef, useEffect} from 'react';
import * as React from 'react';
// @ts-ignore
import VanillaTilt from 'vanilla-tilt';
// @ts-ignore
import raccoon from '../assets/images/raccoon.svg';

interface IVanillaTilt extends HTMLImageElement {
    vanillaTilt: any;
}

const TiltRaccoon: React.FC = () => {
    const img = createRef<IVanillaTilt>();

    useEffect(() => {
        VanillaTilt.init(img.current, {
            perspective: 1000,
            reverse: true,
            scale: 1.1,
        });

        return () => {
            if (img.current) {
                img.current.vanillaTilt.destroy();
            }
        };
    }, []);

    return <img src={raccoon} alt='Raccoon' ref={img}/>;
};

export default TiltRaccoon;
