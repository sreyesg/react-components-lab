const WeatherIcon = ({img,imgAlt}) => {
    // console.log('from child', img)
    console.log('from child', imgAlt)
    return (
        <img src={img} alt={imgAlt}/>
    )
}


export default WeatherIcon