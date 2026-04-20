import { render, screen, fireEvent } from '@testing-library/react'
import Contact from '../components/Contact'

// ── Teste de integração: verifica comportamento do formulário ──
describe('Contact Form', () => {
  test('exibe o formulário inicialmente', () => {
    render(<Contact />)
    expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument()
  })

  test('exibe mensagem de sucesso ao enviar o formulário', () => {
    render(<Contact />)

    fireEvent.change(screen.getByPlaceholderText('Your Name'),    { target: { value: 'Gabriel' } })
    fireEvent.change(screen.getByPlaceholderText('Your Email'),   { target: { value: 'gabriel@email.com' } })
    fireEvent.change(screen.getByPlaceholderText('Your Message'), { target: { value: 'Olá!' } })

    fireEvent.click(screen.getByText('Send Message'))

    expect(screen.getByText(/Message sent/i)).toBeInTheDocument()
  })

  test('não exibe mensagem de sucesso antes de enviar', () => {
    render(<Contact />)
    expect(screen.queryByText(/Message sent/i)).not.toBeInTheDocument()
  })
})
