import React from "react";
import ReactDOM from "react-dom";
import { unmountComponentAtNode } from "react-dom";

import ImageBlock from "../ImageBlock";
import {act} from "react-dom/test-utils";
import {create} from 'react-test-renderer';



let root;
act(()=>{
    root = create(<ImageBlock />)
})

