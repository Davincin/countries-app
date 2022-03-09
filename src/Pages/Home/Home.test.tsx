import Home from "./Home";
import { BrowserRouter as Router } from "react-router-dom";
import * as ReactDom from 'react-dom';

describe('Home component test', () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDom.render((
            <Router>
                <Home />
            </Router>
        ), container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('Renders correctly initial document', () => {
        const homeRow = container.querySelector('.row');
        const searchbar = container.querySelector('.searchbar');
        const selectbar = container.querySelector('.selectbar');
        const countryLinks = container.querySelectorAll('.country-link')

        expect(homeRow).toBeInTheDocument;
        expect(searchbar).toBeInTheDocument;
        expect(selectbar).toBeInTheDocument;
        expect(countryLinks).toBeInTheDocument;
       
    });

});