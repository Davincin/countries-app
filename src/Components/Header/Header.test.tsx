import Header from "./Header";
import * as ReactDom from 'react-dom';

describe('Header component test', () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDom.render(<Header/>, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('Renders correctly initial document', () => {
        const header = container.querySelector('.header');
        const heroShadow = container.querySelector('.hero-shadow');
        const headerTitle = container.querySelector('.header__title');
        expect(header).toHaveValue;
        expect(heroShadow).toBeEmptyDOMElement;
        expect(headerTitle).toHaveTextContent;
        
    }); 

});