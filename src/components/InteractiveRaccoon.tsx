import {createRef, useEffect} from 'react';
import * as React from 'react';
// @ts-ignore
import VanillaTilt from 'vanilla-tilt';
import RaccoonSVG from '../assets/images/raccoon.svg';

interface IVanillaTilt extends HTMLDivElement {
    vanillaTilt: any;
}

const InteractiveRaccoon: React.FC = () => {
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

    return (
        <div ref={img}>
            <RaccoonSVG preserveAspectRatio='xMidYMid meet' style={{width: '100%', height: '100%'}} />
        </div>
    );
};

export default InteractiveRaccoon;
