import React, {useEffect} from "react";

export default function Letters() {
  useEffect(() => {
    $('ul li').each(function(i) {
        //console.log($(this)[0].style)
        $(this)[0].style.left = `${Math.floor(Math.random() * 111)-10}%`
        let wh = Math.floor(Math.random() * 131) + 60
        $(this)[0].style.width = `${wh}px`
        $(this)[0].style.height = `${wh}px`
        $(this)[0].style.animationDelay = `${Math.floor(Math.random() * 8)}s`
        $(this)[0].style.animationDuration = `${Math.floor(Math.random() * 51) + 10}s`
    });
 }, []);
 const letters = [..."QWERTYUIOPASDFGHJKLZXCVBNM"]
 const colors = ["#22c55e", "#eab308", "rgb(244 63 94)"]
return (
    <ul className="letters">
    <li style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{letters[Math.floor(Math.random() * letters.length)]}</li>
    <li style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{letters[Math.floor(Math.random() * letters.length)]}</li>
    <li style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{letters[Math.floor(Math.random() * letters.length)]}</li>
    <li style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{letters[Math.floor(Math.random() * letters.length)]}</li>
    <li style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{letters[Math.floor(Math.random() * letters.length)]}</li>
    <li style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{letters[Math.floor(Math.random() * letters.length)]}</li>
    <li style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{letters[Math.floor(Math.random() * letters.length)]}</li>
    <li style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{letters[Math.floor(Math.random() * letters.length)]}</li>
    <li style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{letters[Math.floor(Math.random() * letters.length)]}</li>
    <li style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{letters[Math.floor(Math.random() * letters.length)]}</li>
    <li style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{letters[Math.floor(Math.random() * letters.length)]}</li>
    <li style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{letters[Math.floor(Math.random() * letters.length)]}</li>
    <li style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{letters[Math.floor(Math.random() * letters.length)]}</li>
    <li style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{letters[Math.floor(Math.random() * letters.length)]}</li>
    <li style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{letters[Math.floor(Math.random() * letters.length)]}</li>
    <li style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{letters[Math.floor(Math.random() * letters.length)]}</li>
    <li style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{letters[Math.floor(Math.random() * letters.length)]}</li>
    <li style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{letters[Math.floor(Math.random() * letters.length)]}</li>
    <li style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{letters[Math.floor(Math.random() * letters.length)]}</li>
    <li style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{letters[Math.floor(Math.random() * letters.length)]}</li>
    <li style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{letters[Math.floor(Math.random() * letters.length)]}</li>
    <li style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{letters[Math.floor(Math.random() * letters.length)]}</li>
    <li style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{letters[Math.floor(Math.random() * letters.length)]}</li>
    <li style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{letters[Math.floor(Math.random() * letters.length)]}</li>
    <li style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{letters[Math.floor(Math.random() * letters.length)]}</li>
    <li style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{letters[Math.floor(Math.random() * letters.length)]}</li>
    <li style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{letters[Math.floor(Math.random() * letters.length)]}</li>
    <li style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{letters[Math.floor(Math.random() * letters.length)]}</li>
    <li style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{letters[Math.floor(Math.random() * letters.length)]}</li>
    <li style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{letters[Math.floor(Math.random() * letters.length)]}</li>
    <li style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{letters[Math.floor(Math.random() * letters.length)]}</li>
    <li style={{color: colors[Math.floor(Math.random() * colors.length)]}}>{letters[Math.floor(Math.random() * letters.length)]}</li>
  </ul>)
}