import React, { useEffect } from 'react'
import './countdown.css'

export default function Countdown() {

    const countdown = () => {
        const countDate = new Date('10/18/2021 00:00:00').getTime();
        const currentDate = new Date().getTime();

        const gap = countDate - currentDate;

        //Time
        const second = 1000;
        const minute = second * 60;
        const hour = minute * 60;
        const day = hour * 24;

        //calculate
        const textDay = Math.floor(gap / day);
        const textHour = Math.floor((gap % day) / hour);
        const textMinute = Math.floor((gap % hour) / minute);
        const textSecond = Math.floor((gap % minute) / second);

        const opt = {
            minimumIntegerDigits: 2,
            useGrouping: false
        }
        document.querySelector('.countdown .counter .day').innerText = textDay.toLocaleString('en-US', opt);
        document.querySelector('.countdown .counter .hour').innerText = textHour.toLocaleString('en-US', opt);
        document.querySelector('.countdown .counter .minute').innerText = textMinute.toLocaleString('en-US', opt);
        document.querySelector('.countdown .counter .second').innerText = textSecond.toLocaleString('en-US', opt);
    }


    useEffect(() => {
        countdown()
        const id = setInterval(countdown, 1000);
        return () => clearInterval(id);
    }, [])

    return (
        <div className="phase">
            <h2>Do this with Team work (show 40% completion in this period of time )</h2>
            <section className="countdown">
                <div className="counter">
                    <h2 className="day">0</h2>
                    <h4>Days</h4>
                </div>
                <div className="counter">
                    <h2 className="hour">0</h2>
                    <h4>hours</h4>
                </div>
                <div className="counter">
                    <h2 className="minute">0</h2>
                    <h4>minutes</h4>
                </div>
                <div className="counter">
                    <h2 className="second">0</h2>
                    <h4>seconds</h4>
                </div>
            </section>
        </div>
    )
}
