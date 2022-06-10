import React from 'react';
import {storeType} from "./Redux/store";



const StoreContext = React.createContext({}as storeType);

type ProviderType ={
    store:storeType
    children:React.ReactNode
}
export const Provider=(p:ProviderType)=>{
    return(
        <StoreContext.Provider value={p.store}>
            {p.children}
        </StoreContext.Provider>
        )
}
export default StoreContext;

