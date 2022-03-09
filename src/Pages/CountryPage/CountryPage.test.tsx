import CountryPage from "./CountryPage";
import { BrowserRouter as Router } from "react-router-dom";
import * as ReactDom from 'react-dom';

describe('CountryPage component test', () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDom.render((
            <Router>
                <CountryPage />
            </Router>
        ), container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('Renders correctly initial document', () =>  {
        const homeButton = container.querySelector('.home-button');
        const country =  (() => (container.querySelector('.country')));
        const errorLoading = (() => (container.querySelector('.error-loading')));

        expect(country).toBeInTheDocument;
        expect(errorLoading).not.toBeInTheDocument;
        expect(homeButton).toBeInTheDocument;
       
    });

});