import { createRef, useEffect } from 'react';
import * as React from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import VanillaTilt from 'vanilla-tilt';
import raccoon from '../../assets/images/raccoon.svg';

interface IVanillaTilt extends HTMLImageElement {
    vanillaTilt: VanillaTilt;
}

export default function TiltRaccoon() {
    const ref = createRef<IVanillaTilt>();

    useEffect(() => {
        const img = ref.current;
        if (img) {
            VanillaTilt.init(img, {
                perspective: 1000,
                reverse: true,
                scale: 1.1,
            });

            return () => {
                img.vanillaTilt.destroy();
            };
        }
    }, []);

    return <img style={{ width: '100%' }} src={raccoon} alt="Raccoon" ref={ref} />;
}
