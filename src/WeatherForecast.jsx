import './WeatherForecast.css'
import WeatherIcon from './WeatherIcon.jsx'

const WheaterForecast = ({day, img, imgAlt, conditions, time}) => {
    return (
        <div className="weather">
            <h2>{day}</h2>
            <WeatherIcon 
                // key={index}?
                img={img}
                imgAlt={imgAlt}

            />
            <p><span>Conditions: </span> {conditions}</p>
            <p><span>Time: </span> {time}</p>
        </div>    
    )
}

export default WheaterForecast