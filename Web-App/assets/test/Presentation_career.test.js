import React from "react";
import {render, unmountComponentAtNode} from "react-dom";

import Presentation_career from "../components/Presentation_career";
import Presentation_img from "../components/Presentation_img";

describe("Test de la page career", () => {
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

    it("test du composant Presentation_career", () => {
        ReactDOM.render(<Presentation_career/>, container);
        expect(document.querySelector("h1").textContent).toBe("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
        expect(document.querySelector("div").textContent).toBe("Donec vestibulum nunc eu enim dapibus, eu cursus magna molestie. Vivamus lorem libero, sagittis quis\n" +
            "                lorem id, tempor ornare eros. Nam sagittis, est mattis fringilla ornare, nibh urna faucibus neque,\n" +
            "                mollis porta leo nunc id sapien. Nam tempor nulla a magna luctus, ut placerat ipsum suscipit. Mauris\n" +
            "                lectus odio, blandit nec orci nec, gravida tristique nunc. Mauris egestas vel diam id ullamcorper.\n" +
            "                Curabitur pulvinar sagittis est sed egestas. Mauris at tempus urna. Curabitur quis arcu eu libero\n" +
            "                tristique maximus vitae vitae metus.");
    });
    it("test du composant Presentation_img", () => {
        ReactDOM.render(<Presentation_img/>, container);
        const logo = screen.getByRole('img');
        expect(logo).toHaveAttribute('src', '/logo.svg');
        expect(logo).toHaveAttribute('alt', 'Logo');
    });
});