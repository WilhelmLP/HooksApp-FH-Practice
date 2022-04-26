import { renderHook, act } from "@testing-library/react-hooks";
import useForm from "../../Hooks/useForm";

describe('Pruebas en el useForm', () =>{

    const initialForm = {
        name: 'Guillermo',
        emeal: 'willy_trooper@hotmail.com'
    };

    test('Debe de regresar un formulario por defecto', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [formValues, handleInputChange, reset] = result.current;

        expect(formValues).toEqual(initialForm);
        expect(typeof handleInputChange).toBe('function');
        expect(typeof reset).toBe('function');
    })

    test('Debe de cambiar el valor del formulario (cambiar name)', () => {
        const {result} = renderHook(() => useForm(initialForm));
        const [, handleInputChange, reset] = result.current;

        act(() => {
            handleInputChange({
                target:{
                    name: 'name',
                    value: 'Danae'
                }
            });
            
            reset();
        });

        const [formValues] = result.current;
        expect(formValues).toEqual(initialForm);
    })
});