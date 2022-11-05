import { createContext, useState, useEffect } from "react";
import HomePageApi from "../../data/heroData";

export const HomeContext = createContext("");

export default function HomeProvider({children}){

    const [homeData, setHomeData] = useState(HomePageApi);
    // useEffect(()=>setHomeData(HomePageApi),[]);

    return(
        <HomeContext.Provider value={{homeData}}>
        {children}
        </HomeContext.Provider>
    )
}