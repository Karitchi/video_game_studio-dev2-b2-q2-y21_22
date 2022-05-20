import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";

import TextBox from '../components/TextBox';

let container = null;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
    container = null;
});

it("renders with an array", () => {
    act(() => {
        render(<TextBox textBoxContent={title}/>, container);
    })
    expect(container.textContent).toBe('Title');
})

const title = [
    {name: 'title', content: 'Title'}
];