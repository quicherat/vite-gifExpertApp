import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import useFetchGifs from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Pruebas sobre GifGrid', () => {
  
    const category = 'One Punch';

    test('Debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });
      
        render( <GifGrid category={ category }/>);
        expect( screen.getByText( 'Cargando...'));
        expect(screen.getByText( category ));
        // screen.debug();
    })

    test('debe mostrar items cuando se cargan las imágenes useFetchGifs', () => {
      
        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: 'DEF',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            }
        ]


        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });
      
        render( <GifGrid category={ category }/>);
        expect(screen.getAllByRole('img').length).toBe(2);
    })
    
    
})
