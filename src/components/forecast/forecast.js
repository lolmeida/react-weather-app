import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from 'react-accessible-accordion';

import './forecast.css'

const WEEK_DAYS = ['Mondat', 'Tuesday', 'Wdenesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayInAWeek))


    return (
        <>
            <label className='forecast-title'>Daily</label>
            <Accordion allowZeroExpanded>
                {data.list.splice(0, 7).map((item, idx) => (
                    <AccordionItem key={idx}>
                        <AccordionItemHeading>
                            <AccordionItemButton>
                                <div className='forecast-daily-item'>
                                    <img alt='weather' className='forecast-icon' src={`icons/${item.weather[0].icon}.png`} />
                                    <label className='forecast-day'> {forecastDays[idx]} </label>
                                    <label className='forecast-description'> {item.weather[0].description} </label>
                                    <label className='forecast-mni-max'> {Math.round(item.main.temp_min)} ºC / {Math.round(item.main.temp_max)} ºC</label>
                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel>
                            <div className='forecast-daily-datail-grid'>
                                <div className='forecast-daily-datail-grid-item'>
                                    <label > Pressure </label>
                                    <label > {item.main.pressure} hPa</label>
                                </div>
                                <div className='forecast-daily-datail-grid-item'>
                                    <label > Humidity </label>
                                    <label > {item.main.humidity} %</label>
                                </div>
                                <div className='forecast-daily-datail-grid-item'>
                                    <label > Clouds </label>
                                    <label > {item.clouds.all} % </label>
                                </div>
                                <div className='forecast-daily-datail-grid-item'>
                                    <label > Wind speed </label>
                                    <label > {item.wind.speed} m/s </label>
                                </div>
                                <div className='forecast-daily-datail-grid-item'>
                                    <label > See level </label>
                                    <label > {item.main.sea_level} meters </label>
                                </div>
                                <div className='forecast-daily-datail-grid-item'>
                                    <label > Feels like </label>
                                    <label > {Math.round(item.main.feels_like)} ºC </label>
                                </div>

                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>

        </>
    )

}

export default Forecast;

