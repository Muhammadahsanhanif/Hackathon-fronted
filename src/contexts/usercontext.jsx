import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { appRoutes } from "../constant/constant";



export const Authcontext = createContext()


export default function Authprovider({ children }) {
    const [user, setUser] = useState(null)

    const getUser = () => {
axios.get(appRoutes.myinfo,{headers : {Authorization:`Bearer ${Cookies.get("token")}`}})
.then((res)=>{
    console.log("get user= > " , res  );
    setUser(res?.data?.data)
    
})
.catch((err)=>{console.log("ERROR => " , err.message);
})
    }






    useEffect(() => {
        if (!user) {
            const token = Cookies.get("token")

            if (token) {
                getUser()
            }
        }


    }, [user])








    return (
        <Authcontext.Provider value={{ user, setUser }}>
            {children}
        </Authcontext.Provider>
    )


}