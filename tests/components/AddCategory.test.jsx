import { fireEvent, render,screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('pruebas addCategory', () => { 
    test('debe de cambiar el valor de la caja de texto', () => { 

        //sujeto de prueba 
        render( <AddCategory onNewCategory={ ()  => {} } />);
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target: {value:'saitama'} });

        expect( input.value).toBe('saitama');
    });

    test('Debe de llamar OnNewCategory si el input tiene un valor.', () => { 

        const inputValue = 'Vader'
        const onNewCategory = jest.fn();

        render( <AddCategory onNewCategory={ onNewCategory } />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: {value: inputValue} });
        fireEvent.submit( form );

        expect( input.value ).toBe('');

        expect( onNewCategory ).toHaveBeenCalled();
        expect( onNewCategory ).toHaveBeenCalledTimes(1);
        //Verificar que la funcion tiene el mismo valor el input de prueba
        expect( onNewCategory ).toHaveBeenCalledWith(inputValue);
    });

    // test('No debe llamar el onNewCategory si el input está vacio', () => { 

    //     const onNewCategory = jest.fn();
    //     render( <AddCategory onNewCategory={ onNewCategory } />);
    //     input.simulate("change", { target: { value } });

    //     const form = screen.getByRole('form');
        
    //     fireEvent.submit( form );

    //     expect(onNewCategory).toHaveBeenCalledTimes(0);
    //     expect(onNewCategory).not.toHaveBeenCalled();
    // });

    test("should change the input value", () => {
        const value = "Hola Mundo";
        const before = wrapper.find("input");
        before.simulate("change", { target: { value } });
        const after = wrapper.find("input");
        expect(after.prop("value")).toBe(value);
      });
})