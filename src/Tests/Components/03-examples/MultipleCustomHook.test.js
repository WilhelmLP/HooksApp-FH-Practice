import React from 'react';
import { shallow } from 'enzyme';

import MultipleCustomHooks from '../../../Components/03-examples/MultipleCustomHooks';
import useFetch from '../../../Hooks/useFetch';
import {useCounter} from '../../../Hooks/useCounter';

jest.mock('../../../Hooks/useFetch');
jest.mock('../../../Hooks/useCounter');

describe('Pruebas en el <MultipleCustomHooks', () =>{

    useCounter.mockReturnValue({
        counter: 10,
        increment: () => {}
    });

    test('Debe de mostrarse correctamente', () => {
        
        const wrapper = shallow( <MultipleCustomHooks/> );

        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null,
        })
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de mostrar la información', () => {

        useFetch.mockReturnValue({
            data: [{
                author: 'Guillermo Linares',
                quote: ' Hola Mundo desde Test con Enzyme en React ',
            }],
            loading: false,
            error: null
        });

        const wrapper = shallow( <MultipleCustomHooks/> );

        expect(wrapper.find('.alert').exist()).toBe(false);
        expect(wrapper.find('.mb-0').text().trim()).toBe('Hola Mundo');
        expect(wrapper.find('footer').text().trim()).toBe('Guillermo');
    });
})