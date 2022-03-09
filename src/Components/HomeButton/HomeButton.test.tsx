import HomeButton from "./HomeButton";
import { BrowserRouter as Router } from "react-router-dom";
import * as ReactDom from 'react-dom';

describe('HomeButton component test', () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDom.render((
            <Router>
                <HomeButton />
            </Router>
        ), container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('Renders correctly initial document', () => {
        const homeButton = container.querySelector('.home-button');
        expect(homeButton).toHaveAttribute;
        expect(homeButton).toHaveTextContent;
       
    });

});