import './current-weather.css';

const CurrentWeather = ({ data }) => {
    return (
        <div className='weather'>

            <div className='weather-top'>
                <div>
                    <p className='weather-city'>{data.city}</p>
                    <p className='weather-description'>{data.weather[0].description}</p>
                </div>
                <img alt='weather' className='weather-icon' src={`icons/${data.weather[0].icon}.png`} />
            </div>
            <div className='weather-botton'>
                <p className='weather-temperature'>{Math.round(data.main.temp)}ºC</p>
                <div className='weather-detail'>
                    <div className='weather-parameter-row'>
                        <span className='weather-parameter-label top'>Details</span>
                    </div>
                    <div className='weather-parameter-row'>
                        <span className='weather-parameter-label'>Feels like</span>
                        <span className='weather-parameter-value'>{Math.round(data.main.feels_like)} ºC</span>
                    </div>
                    <div className='weather-parameter-row'>
                        <span className='weather-parameter-label'>Wind</span>
                        <span className='weather-parameter-value'>{data.wind.speed} m/s</span>
                    </div>

                    <div className='weather-parameter-row'>
                        <span className='weather-parameter-label'>Humidity</span>
                        <span className='weather-parameter-value'>{data.main.humidity} %</span>
                    </div>
                    <div className='weather-parameter-row'>
                        <span className='weather-parameter-label'>Pressure</span>
                        <span className='weather-parameter-value'>{data.main.pressure} hPa</span>
                    </div>
                </div>


            </div>
        </div>
    );

}

export default CurrentWeather;