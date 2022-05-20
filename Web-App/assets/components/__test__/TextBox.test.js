import React from "react";
import ReactDOM from "react-dom";
import TextBox from "../TextBox";

it('renders without crashing', function () {
    const div = document.createElement("div");
    ReactDOM.render(<TextBox/>, div);
});

const arr = [
    {name: 'title', content: 'Title'}
]