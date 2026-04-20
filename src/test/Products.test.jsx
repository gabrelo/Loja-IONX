import { render, screen } from '@testing-library/react'
import Products from '../components/Products'

// ── Teste de regressão: garante que os produtos não somem após mudanças ──
describe('Products — Regressão', () => {
  test('exibe exatamente 6 produtos', () => {
    render(<Products />)
    const btns = screen.getAllByText('Add to Cart')
    expect(btns).toHaveLength(6)
  })

  test('exibe o produto Shadow Hoodie', () => {
    render(<Products />)
    expect(screen.getByText('Shadow Hoodie')).toBeInTheDocument()
  })

  test('exibe o produto Recon Jacket', () => {
    render(<Products />)
    expect(screen.getByText('Recon Jacket')).toBeInTheDocument()
  })

  test('exibe preços em dólar', () => {
    render(<Products />)
    expect(screen.getByText('$189')).toBeInTheDocument()
    expect(screen.getByText('$349')).toBeInTheDocument()
  })

  // Teste de regressão clássico: se alguém remover o badge "New", esse teste vai pegar
  test('exibe badge New em pelo menos um produto', () => {
    render(<Products />)
    const badges = screen.getAllByText('New')
    expect(badges.length).toBeGreaterThan(0)
  })
})
