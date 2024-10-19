const WeatherData = ({conditions, time}) => {
    return (
        <>
            <p><span>Conditions: </span> {conditions}</p>
            <p><span>Time: </span> {time}</p>
        </>
    )
}
export default WeatherData