import NotFoundPage from "./NotFoundPage";
import * as ReactDom from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

describe('NotFoundPage component test', () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDom.render((
            <Router>
                <NotFoundPage/>
            </Router>
        ), container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('Renders correctly initial document', () => {
        const row = container.querySelector('.row');
        const homeButton = container.querySelector('.home-button');
        const notFoundTitle = container.querySelector('.not-found__title');
        expect(row).toBeInTheDocument;
        expect(homeButton).toBeInTheDocument;
        expect(notFoundTitle).toBeInTheDocument;
    }); 

});