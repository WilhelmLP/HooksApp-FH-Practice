import React from 'react';
import { shallow } from 'enzyme';
import TodoList from '../../../Components/08-useReducer/TodoList';
import { demoTodos } from '../../Fixtures/demoTodos';

describe('Prueba en <TodoList />', () => { 

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow( 
        <TodoList 
            todos={demoTodos}
            handleDelete={handleDelete}
            handleToggle={handleToggle}
        />);

    test('Debe de mostrarse correctamente', ()=>{
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de tener dos <TodoListItem />', () =>{
        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length);
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function));
    });
})