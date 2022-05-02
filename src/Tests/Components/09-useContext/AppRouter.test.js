import React, { useContext } from 'react';
import {mount} from 'ensyme';
import AppRouter from '../../../Components/09-useContext/AppRouter';
import userContext from '../../../Components/09-useContext/UserContext';


describe('Pruebas en <AppRouter />', () => { 

    const user = {
        id: 1,
        name: 'Guillermo'
    }

    const wrapper = mount( 
    <userContext.Provider value={{
        user
    }}>
        <AppRouter />
    </userContext.Provider>
    );

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    })
 })