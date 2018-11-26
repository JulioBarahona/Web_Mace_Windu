import React from "react"
import img from './victory.png'

const styles = {
	width: '2%',
	height: '2%'

}

export default class Goal extends React.Component{
	render(){
		return <img style = {styles} src = {img}/>
	}

}