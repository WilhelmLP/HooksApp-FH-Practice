import React from 'react';
import { shallow } from 'enzyme';
import TodoAdd from '../../../Components/08-useReducer/TodoAdd';
import { demoTodos } from '../../Fixtures/demoTodos';

describe('Pruebas en <TodoAdd />', () => { 

    const handleAddTodo = jest.fn();


    const wrapper = shallow( 
        <TodoAdd
            handleAddTodo={handleAddTodo}
        />);

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('No debe de llamar handleAddTodo', () => {
        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});
        expect(handleAddTodo).toHaveBeenCalledTimes(0);
    });

    test('Debe de llamar la función handleAddTodo', () => {
        const value = 'Aprender React';
        wrapper.find('input').simulate('change', {
            target:{
                value,
                name: 'Description'
            }
        });

        const formSubmit = wrapper.find('form').prop('onSubmit');
        formSubmit({preventDefault(){}});

        expect(handleAddTodo).toHaveBeenCalledTimes(1);
        expect(handleAddTodo).toHaveBeenCalledWith(expect.any(Object));
        expect(handleAddTodo).toHaveBeenCalledWith({
            id: expect.any(Number),
            desc: value,
            done: false
        });

        expect(wrapper.find('input').prop('value')).toBe('');
    });

 })