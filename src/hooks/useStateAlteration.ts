import { useState } from 'react';

// @ts-ignore
export const useStateAlteration = (start) => {
    const [state, setState] = useState(start);

    // @ts-ignore
    const increment = () => setState((p) => p + 1);
    // @ts-ignore
    const decrement = () => setState((p) => p - 1);

    return [state, setState, increment, decrement];
};
