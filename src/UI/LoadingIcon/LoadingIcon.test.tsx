import LoadingIcon from "./LoadingIcon";
import * as ReactDom from 'react-dom';

describe('LoadingIcon component test', () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDom.render(<LoadingIcon/>, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('Renders correctly initial document', () => {
        const icon = container.querySelector('.lds-dual-ring');
        expect(icon).toBeInTheDocument;
        expect(icon).toBeEmptyDOMElement;
    });

});