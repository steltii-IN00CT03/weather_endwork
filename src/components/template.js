import React from 'react'

export default function Template() {
  return (
    <>
        <h3>Weather on your location</h3>
        <p>{temp} C&#176;</p>
        <p>{speed} m/s {direction} degrees</p>
        <p>{desc}</p>
        <img src={icon} alt="" />
    </>
  )
}
