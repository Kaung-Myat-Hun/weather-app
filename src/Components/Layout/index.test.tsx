import { render , screen } from '@testing-library/react'
import { test } from 'vitest'
import { fireEvent , waitFor } from '@testing-library/react'
import { LocationContext } from '../../App'
import { Layout } from '..'
import { getApiCall, getWeatherForecast } from '../../utils/service'
import { vi, it , describe , expect, beforeEach } from 'vitest'

test("layout", () => {
    render(<Layout />)
    expect(screen.getByText("C°")).toBeInTheDocument();
})

vi.mock('../../utils/service', () => ({
    getApiCall : vi.fn(),
    getWeatherForecast : vi.fn(),
    debounceFunc:  vi.fn((fn) => fn),
}))

const mockedGetApiCall = getApiCall as jest.Mock;
const mockedGetWeatherForecast = getWeatherForecast as jest.Mock;

describe("Layout service", () => {
    const mockLocation = "mandalay";
    beforeEach(() =>{
        vi.clearAllMocks();
    })
    it("Context Provider", () => {
        mockedGetApiCall.mockResolvedValueOnce({
            data: { current: { condition: { icon: "example-icon" } } },
          });
          mockedGetWeatherForecast.mockResolvedValueOnce({
            data: { forecast: "example-forecast" },
          });
        render(
            <LocationContext.Provider value={mockLocation}>
                <Layout />
            </LocationContext.Provider>
        )
        expect(screen.getByText(/1 Week Forecasting/i)).toBeInTheDocument();
    })
    it("Fetches weather api" ,async () =>{
        mockedGetApiCall.mockResolvedValueOnce({
            data: { current: { condition: { icon: "example-icon" } } },
          });
          mockedGetWeatherForecast.mockResolvedValueOnce({
            data: { forecast: "example-forecast" },
          });

        render(
            <LocationContext.Provider value={mockLocation}>
                    <Layout />
            </LocationContext.Provider>
        )

        await waitFor(() => {
            expect(mockedGetApiCall).toHaveBeenCalledWith(mockLocation)
            expect(mockedGetWeatherForecast).toHaveBeenCalledWith(mockLocation)
        })
    })

    it("dobounc function", async () =>{
        const mockFirstData = {
            data : { current : {condition : {icon: "icon"}}}
        }
        const mockSecondData = { data: { forecast: "data" } };
        mockedGetApiCall.mockResolvedValueOnce(mockFirstData);
        mockedGetWeatherForecast.mockResolvedValueOnce(mockSecondData);
        render(
            <LocationContext.Provider value={mockLocation}>
                <Layout />
            </LocationContext.Provider>
        )
        const input = screen.getByRole('textbox')
        fireEvent.change(input, {target : {value : "mexico"}})
        await waitFor( () =>{
            expect(getApiCall).toHaveBeenCalledWith("mexico")
            expect(getWeatherForecast).toHaveBeenCalledWith("mexico")
        })
    })
    
    it("reset to initial API called when input value is clear" , async() => {
        const mockInitialData = {
            data : { current : {condition : {icon: "icon"}}}
        }
        const mockSecondData = { data: { forecast: "data" } };
        mockedGetApiCall.mockResolvedValueOnce(mockInitialData);
        mockedGetWeatherForecast.mockResolvedValueOnce(mockSecondData);

        render(
            <LocationContext.Provider value={mockLocation}>
                <Layout />
            </LocationContext.Provider>
        )

        const input = screen.getByRole('textbox')
        fireEvent.change(input, { target: { value: "" } })
        await waitFor(() => {
            expect(getApiCall).toHaveBeenCalledWith(mockLocation)
        })
    })
})