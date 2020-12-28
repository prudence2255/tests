import {shallow} from 'enzyme';


const setUp = (props={}, Component) => {
    return shallow(<Component {...props}  />);   
}

const getByClass = (component, testId) => {
    return component.find(testId);
}



export{ setUp, getByClass};