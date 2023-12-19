    import { createContext, useState } from "react";

    const JobContext = createContext();

    const Provider = ({children})=>{
        const [isLogin,setIsLogin] = useState();
        const value = 
        {
            isLogin,
            setIsLogin
        };
        return <JobContext.Provider value={value}>{children}</JobContext.Provider>
    }
    export {Provider};
    export default JobContext;