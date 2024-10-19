import './WeatherForecast.css'
const WheaterForecast = () => {
    return (
        <div className="weather">
            <h2>Day of The Week</h2>
            {/* <img src="" alt="" /> */}
            <p><span>Conditions: </span>current weather conditions</p>
            <p><span>Time: </span> time of the day</p>
        </div>    
    )
}

export default WheaterForecast