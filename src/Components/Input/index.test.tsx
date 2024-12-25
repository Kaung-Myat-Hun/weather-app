import { fireEvent, render , screen } from '@testing-library/react'
import { Input } from '..'
import { test } from 'vitest'

test("Should render input" , () => {
    render(<Input type="text" placeholder="Enter City Name" onChange={() =>{}} value="" />)
    const input = screen.getByPlaceholderText('Enter City Name')
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('placeholder', 'Enter City Name')
})

test("Event handlers ", () =>{
    const changeHandler = vi.fn();
    render(<Input type="text" placeholder="Enter City Name" onChange={changeHandler} value="" />)
    const input = screen.getByPlaceholderText('Enter City Name')
    fireEvent.change(input, {target: {value: "Changed"}})
    expect(changeHandler).toBeCalledTimes(1);
})
