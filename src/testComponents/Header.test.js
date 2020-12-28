import Header from '../components/Header';
import {setUp, getByClass} from './Setup';

//import {reander, screen, fireEvent} from '@testing-library/react';



describe('Header component', () => {
    let component;
    beforeEach(() => {
    component = setUp({}, Header);
    });
    
    it('should render header', () => {
        expect(getByClass(component, '.header').length).toBe(1);
    });

    it('should render logo', () => {
        expect(getByClass(component, '.logo-img').length).toBe(1);
    }); 
});
