import { createContext, useState } from "react";

const itemContext = createContext(0);

function CustomItemContext(props) {
    console.log('CustomItemContext props', props);
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);

    return (
        <itemContext.Provider value={{ total, item, setTotal, setItem }}>
            {props.children}
        </itemContext.Provider>
    )
}

export { itemContext };
export default CustomItemContext;