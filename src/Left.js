import React from "react"
import img from './Images/left.gif'
const styles = {
	width:'2%',
	height: '2%',
}

export default class Left extends React.Component{
	render(){
		return <img style = {styles} src = {img}/>
	}
}