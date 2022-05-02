import { mount } from 'enzyme';
import React from 'react';
import LoginScreen from '../../../Components/09-useContext/LoginScreen';
import userContext from '../../../Components/09-useContext/UserContext';

describe('Pruebas en <LoginScreen />', () => {

    const setUser = jest.fn();
    const wrapper = mount( 
    <userContext.Provider value={{
        setUser,
    }}>
        <LoginScreen />
    </userContext.Provider>);

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de ejecutarse el setUser con el argumento esperado', () => {
        wrapper.find('button').prop('onClick')();
        expect(setUser).toHaveBeenCalledWith({
            id: 1234556,
            name: 'Guillermo Linares Pereda',
            email: 'willytrooperdream@hotmail.com'
        })
    });
})