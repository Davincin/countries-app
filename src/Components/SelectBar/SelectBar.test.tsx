import SelectBar from "./SelectBar";
import * as ReactDom from 'react-dom';

describe('SelectBar component test', () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDom.render((<SelectBar onChange={() => {}}/>), container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('Renders correctly initial document', () => {
        const label = container.querySelector('label');
        const input = container.querySelector('input');

        expect(label).toHaveTextContent;
        expect(input).toBeInTheDocument;
    });

});