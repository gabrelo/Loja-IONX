import { render, screen } from '@testing-library/react'
import Navbar from '../components/Navbar'

// ── Teste unitário: verifica se o componente renderiza corretamente ──
describe('Navbar', () => {
  test('exibe o logo IONX', () => {
    render(<Navbar />)
    expect(screen.getByText('IONX')).toBeInTheDocument()
  })

  test('exibe o botão Shop Now', () => {
    render(<Navbar />)
    expect(screen.getByText('Shop Now')).toBeInTheDocument()
  })

  test('exibe todos os links de navegação', () => {
    render(<Navbar />)
    expect(screen.getByText('Products')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })
})
