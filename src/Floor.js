import React from "react"
import img from './floor.png'

const styles = {
	width: '2%',
	height: '2%',
	display: "inline-block"
}

export default class Floor extends React.Component{
	render(){
		return <div style = {styles} />
	}

}
