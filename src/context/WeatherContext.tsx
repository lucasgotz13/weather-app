import { createContext, useState } from "react";

export const WeatherContext = createContext({});

export const WeatherProvider = ({ children }: any) => {
    const [weatherData, setWeatherData] = useState<any>({});

    const getDataFromCurrentLocation = (e: any, input: string) => {
        e.preventDefault();

        fetch(
            `http://api.weatherapi.com/v1/forecast.json?key=c6da61cae95f4d7895b34035230806&q=${input}&days=5&aqi=no&alerts=no`
        )
            .then((res) => res.json())
            .then((data) => {
                return setWeatherData(data);
            });
    };
    return (
        <WeatherContext.Provider
            value={{ weatherData, setWeatherData, getDataFromCurrentLocation }}
        >
            {children}
        </WeatherContext.Provider>
    );
};
