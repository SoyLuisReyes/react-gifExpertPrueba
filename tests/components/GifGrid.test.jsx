import { render,screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";

describe('Pruebas en GifGrid', () => { 
    
    const category = 'Star Wars';

    test('debe mostrar loading', () => { 
   
        render(<GifGrid category={category} />);
        // screen.debug();
        expect( screen.getByText('Cargando...'));
        expect( screen.getByText(category));
    })
})