import axios from 'axios'
import { useEffect, useState } from 'react'

const API_URL = 'https://api.openweathermap.org/data/2.5/forecast?';
const ICON_URL = 'https://openweathermap.org/img/wn/';
const API_KEY = '7155b286c5b782098d4ba3e176f563ad';

export default function Weather({lat, lng}) {
    const  [date2, setDate2] = useState(0)
    const  [date3, setDate3] = useState(0)
    const  [date4, setDate4] = useState(0)
    const  [date5, setDate5] = useState(0)
    const  [temp, setTemp] = useState(0)
    const  [temp2, setTemp2] = useState(0)
    const  [temp3, setTemp3] = useState(0)
    const  [temp4, setTemp4] = useState(0)
    const  [temp5, setTemp5] = useState(0)
    const  [speed, setSpeed] = useState(0)
    const  [direction, setDirection] = useState(0)
    const  [desc, setDesc] = useState('')

    const  [icon1, setIcon1] = useState('')
    const  [icon2, setIcon2] = useState('')

    useEffect(() => {
        const address = `${API_URL}lat=${lat}&lon=${lng}&units=metric&appid=${API_KEY}`
        // console.log(address)

        axios.get(address)
            .then((response) => {
                console.log(response.data)
                
                setIcon1(ICON_URL + response.data.list[8].weather[0].icon + '@2x.png')
                
                setDate2(response.data.list[8].dt_txt)
                setDate3(response.data.list[16].dt_txt)
                setDate5(response.data.list[32].dt_txt)
                setDate4(response.data.list[24].dt_txt)

                setTemp(response.data.list[0].main.temp)
                setTemp2(response.data.list[8].main.temp)
                setTemp3(response.data.list[16].main.temp)
                setTemp4(response.data.list[24].main.temp)
                setTemp5(response.data.list[32].main.temp)

                // setSpeed(response.data.wind.speed)
                // setDirection(response.data.wind.deg)
                // setDesc(response.data.weather[0].description)
                // console.log(ICON_URL + response.data.weather[0].icon + '@2x.png')
            }).catch(error => {
                alert(error)
            })
    }, [])

    return (
        <>
            <div class="card" style={{width: "20%;"}}>
            <img src={icon1} class="card-img-top" alt="..." />
                <div class="card-body">
                    This is some text within a card body.
                </div>
            </div>



            <div id='first col'>
                <h3>Current</h3>
                <p>{temp} C&#176;</p>
                <p>{speed} m/s {direction} degrees</p>
                <p>{desc}</p>
                <img src={icon2} alt="" />
            </div>
            {/* <div id='second col'>
                <h3>{date2}</h3>
                <p>{temp2} C&#176;</p>
                <p>{speed} m/s {direction} degrees</p>
                <p>{desc}</p>
                <img src={icon} alt="" />
            </div> */}
            {/* <div id='third col'>
                <h3>{date3}</h3>
                <p>{temp3} C&#176;</p>
                <p>{speed} m/s {direction} degrees</p>
                <p>{desc}</p>
                <img src={icon} alt="" />
            </div>
            <div id='fourth col'>
                <h3>{date4}</h3>
                <p>{temp4} C&#176;</p>
                <p>{speed} m/s {direction} degrees</p>
                <p>{desc}</p>
                <img src={icon} alt="" />
            </div>
            <div id='fifth col'>
                <h3>{date5}</h3>
                <p>{temp5} C&#176;</p>
                <p>{speed} m/s {direction} degrees</p>
                <p>{desc}</p>
                <img src={icon} alt="" />
            </div> */}
        </>
    )

}