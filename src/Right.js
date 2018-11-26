import React from "react"
import img from './Images/Right.gif'
console.log("entre en el presonaje")
const styles = {
	width:'2%',
	height: '2%',
}

export default class Right extends React.Component{
	render(){
		return <img style = {styles} src = {img}/>
	}
}