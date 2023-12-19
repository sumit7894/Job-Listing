    import { createContext, useState } from "react";

    const JobContext = createContext();

    const Provider = ({children})=>{
        const [isLoggedIn,setIsLoggedIn] = useState(true);
        const value = 
        {
            isLoggedIn,
            setIsLoggedIn
        };
        return <JobContext.Provider value={value}>{children}</JobContext.Provider>
    }
    export {Provider};
    export default JobContext;