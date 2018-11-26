import React from "react"
import img from './Images/fill.png'

const styles = {
	width: '100%',
	height: '100%'
}

export default class Background extends React.Component{
	render(){
		return <img style = {styles} src = {img}/>
	}

}