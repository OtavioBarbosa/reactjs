import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import Home from './Home'

describe('Home component', () => {
    test('render', async () => {
        
        render(<Home />)

        //Identificar texto
        // expect(screen.getByText('Bem vindo')).toBeInTheDocument()

        //Identificar ID
        // expect(screen.getByTextId('message')).toBeInTheDocument()
        
        //Aguardando carregar/encontrar elemento
        const message = await waitFor(() => {
            return screen.getByTestId('message')
        }) 
        expect(message).toBeInTheDocument()

    })
})