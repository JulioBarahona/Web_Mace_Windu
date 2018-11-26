import React from "react"
import img from './Images/wall2.png'

const styles = {
	width: '2%',
	height: '2%'

}

export default class Plus extends React.Component{
	render(){
		return <img style = {styles} src = {img}/>
	}

}
