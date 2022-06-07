import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import Home from './Home'
import axios from 'axios'

jest.mock('axios')

const payment_methods = [
    {
        "id": 1,
        "forma_pagamento": "Crédito",
        "created_at": null,
        "updated_at": null,
        "deleted_at": null
    },
    {
        "id": 2,
        "forma_pagamento": "Débito",
        "created_at": null,
        "updated_at": null,
        "deleted_at": null
    },
    {
        "id": 3,
        "forma_pagamento": "Dinheiro",
        "created_at": null,
        "updated_at": null,
        "deleted_at": null
    },
    {
        "id": 4,
        "forma_pagamento": "Pix",
        "created_at": null,
        "updated_at": null,
        "deleted_at": null
    }
]

describe('Home component', () => {
    test('render', async () => {
        
        render(<Home />)

    })
    
    test('welcome', async () => {
        
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
        
    test('payment methods list', async () => {
        
        axios.get.mockResolvedValue({data: payment_methods})
        
        render(<Home />)

        const payment_list = await waitFor(() => {
            return screen.queryByTestId('payment')
        }) 

        expect(payment_list).toHaveLength(4)

    })
})