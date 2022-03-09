import CountryLink from "./CountryLink";
import { BrowserRouter as Router } from "react-router-dom";
import * as ReactDom from 'react-dom';

describe('CountryLink component test', () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDom.render((
            <Router>
                <CountryLink name={'Poland'} code='PL'/>
            </Router>
        ), container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('Renders correctly initial document', () => {
        const countryLink = container.querySelector('.country-link');
        const countryLinkItems = container.querySelectorAll('p');
        expect(countryLink).toHaveAttribute;
        expect(countryLinkItems).toHaveLength(2);
    });

});