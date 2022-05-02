import React from 'react';
import { mount, shallow } from 'enzyme';
import HomeScreen from '../../../Components/09-useContext/HomeScreen';
import UserContext from '../../../Components/09-useContext/UserContext';

describe('Pruebas en <HomeScreen />', () => {

    const user = {
        name: 'Guillermo',
        email: 'willy_trooper@gmail.com'

    }

    const wrapper = mount( 
    <UserContext.Provider value={{
        user,
    }}>
        <HomeScreen />
    </UserContext.Provider>
    )

    test('Debe de mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
});

