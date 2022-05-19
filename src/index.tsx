import React from 'react';
import './index.css';
import {state} from "./Redux/State";
import {renderTree} from "./Render";


renderTree(state);