import { render , screen } from '@testing-library/react'
import { Card } from '..'

it("Should render card" , () => {
    render(<Card>hello</Card>)
    const card = screen.getByText("hello")
    expect(card).toBeInTheDocument();
})
