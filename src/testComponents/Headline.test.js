import Headline from '../components/HeadLine';
import {setUp, getByClass} from './Setup';



describe('Headline component', () => {
    
    describe('have props', () => {
        let component;
        beforeEach(() => {
            const props = {
                header: 'test header',
                desc: 'test desc'
            }
        component = setUp(props, Headline)
        })

        it('should render without errors', () => {
            expect(getByClass(component, '.headline-header').length).toBe(1)
;        })
    });
    
    describe('have no props', () => {
        let component;
        beforeEach(() => {  
        component = setUp({}, Headline)
        })

        it('should render with errors', () => {
            expect(getByClass(component, '.headline-header').length).toBe(0)
;        })
    });
});
