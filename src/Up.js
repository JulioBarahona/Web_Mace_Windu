import React from "react"
import img from './Images/up.gif'
console.log("entre en el presonaje")
const styles = {
	width:'0.9%',
	height: '1.3%',
}

export default class Up extends React.Component{
	render(){
		return <img style = {styles} src = {img}/>
	}
}