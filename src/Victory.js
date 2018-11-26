import React from "react"
import img from './Images/victory.png'

const styles = {
	width: '2%',
	height: '2%'

}

export default class Victory extends React.Component{
	render(){
		return <img style = {styles} src = {img}/>
	}

}