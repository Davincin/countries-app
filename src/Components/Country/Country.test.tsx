import Country from "./Country";
import * as ReactDom from 'react-dom';

describe('Country component test', () => {
    let container: HTMLDivElement

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        ReactDom.render(<Country name="Poland" code="PL" emoji="PL" languages={[]}/>, container);
    });

    afterEach(() => {
        document.body.removeChild(container);
        container.remove();
    });

    it('Renders correctly initial document', () => {
        const country = container.querySelector('.country');
        const countryItems = container.querySelectorAll('.country__item');
        expect(country).toBeInTheDocument;
        expect(countryItems).toHaveLength(4);

        for(let countryItem of Array(countryItems)) {
            expect(countryItem).toHaveValue;
        };
    });
});