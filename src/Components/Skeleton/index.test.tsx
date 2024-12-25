import { render , screen } from '@testing-library/react'
import { Skeleton } from '..'
import { test } from 'vitest'

test("Should Render", () => {
    render(<Skeleton data-testid='skeleton'  />)
    expect(screen.getByTestId('skeleton')).toBeInTheDocument();
})