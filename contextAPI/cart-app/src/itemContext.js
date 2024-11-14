import { createContext, useContext, useState } from "react";

const itemContext = createContext(0);

function useItemContext() {
    const value = useContext(itemContext);
    return value;
  }

function CustomItemContext({children}) {
    // console.log('CustomItemContext props', props);
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);

    return (
        <itemContext.Provider value={{ total, item, setTotal, setItem }}>
            {/* {props.children} */}
            {children}
        </itemContext.Provider>
    )
}

export { useItemContext };
export default CustomItemContext;