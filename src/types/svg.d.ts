declare module '*.svg' {
    import * as React from 'react';

    const content: React.ComponentType<React.HTMLAttributes<SVGSVGElement> & React.SVGAttributes<SVGSVGElement>>;
    export default content;
}
