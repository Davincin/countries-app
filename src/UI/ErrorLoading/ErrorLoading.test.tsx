import ErrorLoading from "./ErrorLoading";
import * as ReactDom from 'react-dom';

describe('ErrorLoading component test', () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDom.render(<ErrorLoading/>, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('Renders correctly initial document', () => {
        const errorLoading = container.querySelector('.error-loading');
        const errorLoadingTitle = container.querySelector('.error-loading__title');
        expect(errorLoading).toBeInTheDocument;
        expect(errorLoadingTitle).toHaveTextContent;
    }); 

});