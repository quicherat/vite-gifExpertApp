import { render, screen } from "@testing-library/react"
import { GifItem } from "../../src/components/GifItem"


describe('Pruebas para GifItem', () => {
  
    const title = 'titulo prueba';
    const url = 'https://giphy.com/saitama.jpg';

    test('Prueba del snapshot', () => {
        

        const { container } = render(<GifItem title={title} url={url} />);

        expect (container). toMatchSnapshot();
    })

    test('Debe mostrar la imagen con el url y el alt indicado ', () => {
      
        render(<GifItem title={title} url={url} />);
        // screen.debug();
        // expect( screen.getByRole('img').src).toBe(url);
        // expect( screen.getByRole('img').alt).toBe(title);

        const {src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );

    })

    test('Debe mostrar el título en el componente ', () => {
      
        render(<GifItem title={title} url={url} />);
        expect( screen.getByText( title )).toBeTruthy();
    })
    
    
    


})
