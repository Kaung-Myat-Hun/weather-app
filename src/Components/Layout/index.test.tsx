import { render , screen } from '@testing-library/react'
import { Layout } from '..'
import { test } from 'vitest'

test("layout", () => {
    render(<Layout />)
    expect(screen.getByText("C°")).toBeInTheDocument();
})