import React from "react"
import img from './Images/luigi.png'
console.log("entre en el presonaje")
const styles = {
	width:'2%',
	height: '2%',
}

export default class Luigi extends React.Component{
	render(){
		return <img style = {styles} src = {img}/>
	}
}