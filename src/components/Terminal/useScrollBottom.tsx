import { useContext } from 'react';
import * as React from 'react';

export const Context = React.createContext<() => void>(() => undefined);

export default function useScrollBottom() {
    return useContext(Context);
}
