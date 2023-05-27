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

        render( <AddCategory onNewCategory={ ()  => {} } />);
        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: {value:'saitama'} });
        fireEvent.submit( form );

        expect( input.value ).toBe('');

    });
})