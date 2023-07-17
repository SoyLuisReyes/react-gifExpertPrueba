import { render,screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en GifGrid', () => { 
    
    const category = 'Star Wars';

    test('debe mostrar loading', () => { 

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })
   
        render(<GifGrid category={category} />);
        // screen.debug();
        expect( screen.getByText('Cargando...'));
        expect( screen.getByText(category));
    })

    test('debe mostrar items cuando se cargan las imagenes useFetchGifs', () => { 

        const gifs = [
            {
                id: 'ABC',
                title: 'Vader',
                url: 'https://localhost/vade.jpg    '
            },
            {
                id: 'ABC',
                title: 'Leai',
                url: 'https://localhost/leia.jpg    '
            }
        ]

        
        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        })
   
        render(<GifGrid category={category} />);
        expect( screen.getAllByRole('img').length).toBe(2);
        
    })
})