import NotFound from "./NotFound";
import * as ReactDom from 'react-dom';

describe('NotFound component test', () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDom.render(<NotFound/>, container);
    })

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    })

    it('Renders correctly initial document', () => {
        const notFoundTitle = container.querySelector('.not-found__title');
        expect(notFoundTitle).toBeInTheDocument;
        expect(notFoundTitle).toHaveTextContent;
    }) 

})