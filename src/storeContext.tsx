import React from 'react';
import {storeType} from "./Redux/store";



const StoreContext = React.createContext({}as storeType);

export default StoreContext;