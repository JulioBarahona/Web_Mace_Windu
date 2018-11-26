import React from "react"
import img from './wall1.png'

const styles = {
	width: '2%',
	height: '2%'

}

export default class Minus extends React.Component{
	render(){
		return <img style = {styles} src = {img}/>
	}

}