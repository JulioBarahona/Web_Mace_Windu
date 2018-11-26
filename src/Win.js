import React from "react"
import img from './Images/win.gif'

const styles = {
	width: '2%',
	height: '2%'

}

export default class Win extends React.Component{
	render(){
		return <img style = {styles} src = {img}/>
	}

}