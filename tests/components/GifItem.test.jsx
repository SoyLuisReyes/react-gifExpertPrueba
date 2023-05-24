import { render, screen  } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem";

describe('Pruebas en GifItem.jsx', () => { 
    test('debe hacer match en el snapshot', () => { 
       
        const title = 'Darth Vader';
        const url = 'https://starwars.com/milenare.gif'

       const { container } =  render( <GifItem title={ title } url={url}/> );
       expect(container).toMatchSnapshot();
    })

    test('debe mostrar la imagen con el url y el alt indicado', () => { 
        const title = 'Darth Vader';
        const url = 'https://starwars.com/milenare.gif'
        render( <GifItem title={title} url={url}/> );
        // screen.debug();
        const {src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( alt );

    })
})