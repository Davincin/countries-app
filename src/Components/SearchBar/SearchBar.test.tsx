import SearchBar from "./SearchBar";
import * as ReactDom from 'react-dom';

describe('SearchBar component test', () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDom.render((<SearchBar value="val" onSearch={() => {}}/>), container);
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
        expect(input?.getAttribute('type')).toBe('text');
        expect(input?.getAttribute('value')).toBe('val');
       
    });

});