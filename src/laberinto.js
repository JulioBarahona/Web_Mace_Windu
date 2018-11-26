import React from "react"
import $ from "jquery"
import axios from 'axios'

import Personaje from './Luigi.js'
import Meta from './Victory.js'

import Espacio from './space.js'
import Mas from './plus.js'
import Menos from './minus.js'
import img from './Images/fill.png'
import Up from './Up.js'
import Down from './Down.js'
import Left from './Left.js'
import Right from './Right.js'
import Win from './Win.js'

const styles = {
	background: `url(${img})`,
	backgroundSize: 1080
}

export default class maze extends React.Component{
   //shape, maze and position
	constructor(){
		super()
		this.state = {
            sprite: Personaje,
            maze:[],
            x:1,
            y:1
		}
	}
 
    //Fetchs data from server
    componentDidMount() {
        var self = this;
        $.getJSON("http://34.210.35.174:3001/?type=json&w=8&h=8",function(data){
            self.setState({maze:data})
        })}

    //moves, changes and checks the condition of player
	handleKeyDown(e) {
		e.preventDefault()

        if (e.key === "ArrowLeft") {
            //changes sprite based on key
            var self = this;
            self.setState({sprite: Left})
            //gets the corrent position and starts to get x and y
            const mazePosition = this.state.maze

            //only if the coordinate to the desired place (left) is a space i will move
            if(mazePosition[this.state.y][this.state.x-1] == " "){
                mazePosition[this.state.y][this.state.x] = " "
                mazePosition[this.state.y][this.state.x-1] = "p"

                //moves the player and updates the maze
                this.setState({
                    x: this.state.x -1,
                    maze: mazePosition
                })
            }
            //checks if player go to the goal
            if(mazePosition[this.state.y][this.state.x-1] == "g"){
                mazePosition[this.state.y][this.state.x] = " "
                mazePosition[this.state.y][this.state.x-1] = "p"
                this.setState({
                    x: this.state.x +1,
                    maze: mazePosition,
    
                })
                var self = this;
                self.setState({sprite: Win})
                alert("Has Ganado!");
                
            } 
        }
        if (e.key === "ArrowRight") {
            var self = this;
            self.setState({sprite: Right})
        	const mazePosition = this.state.maze
        	if(mazePosition[this.state.y][this.state.x+1] == " "){
            	mazePosition[this.state.y][this.state.x] = " "
            	mazePosition[this.state.y][this.state.x+1] = "p"
            	this.setState({
                	x: this.state.x +1,
                	maze: mazePosition

            	})
        	} 
        	if(mazePosition[this.state.y][this.state.x+1] == "g"){
            	mazePosition[this.state.y][this.state.x] = " "
            	mazePosition[this.state.y][this.state.x+1] = "p"
            	this.setState({
                	x: this.state.x +1,
                	maze: mazePosition,
                	
            	})
                var self = this;
                self.setState({sprite: Win})
            	alert("Has Ganado!");
            	
        	} 
        }
        
        if (e.key === "ArrowUp") {
            var self = this;
            self.setState({sprite: Up})
            const mazePosition = this.state.maze
        	if(mazePosition[this.state.y-1][this.state.x] == " "){
            	mazePosition[this.state.y][this.state.x] = " "
            	mazePosition[this.state.y-1][this.state.x] = "p"
            	this.setState({
                	y: this.state.y -1,
                	maze: mazePosition
            	})
        	}
        	if(mazePosition[this.state.y][this.state.y+1] == "g"){
            	mazePosition[this.state.y][this.state.x] = " "
            	mazePosition[this.state.y][this.state.y+1] = "p"
            	this.setState({
                	x: this.state.x +1,
                	maze: mazePosition,
                	
            	})
                var self = this;
                self.setState({sprite: Win})
            	alert("Has Ganado");
            	
        	} 
        }
        if (e.key === "ArrowDown") {
            var self = this;
            self.setState({sprite: Down})
            const mazePosition = this.state.maze
        	if(mazePosition[this.state.y+1][this.state.x] == " "){
            	mazePosition[this.state.y][this.state.x] = " "
            	mazePosition[this.state.y+1][this.state.x] = "p"
            	this.setState({
                	y: this.state.y + 1,
                	maze: mazePosition
            	})
        	}
        	if(mazePosition[this.state.y+1][this.state.x] == "g"){
            	mazePosition[this.state.y][this.state.x] = " "
            	mazePosition[this.state.y+1][this.state.x] = "p"
            	this.setState({
                	x: this.state.x +1,
                	maze: mazePosition,
                	
            	})
                var self = this;
                self.setState({sprite: Win})
            	alert("Has Ganado!");
            	
        	} 
        }

    }

	render(){
		return <div id="maze" style = {styles} onKeyDown = {this.handleKeyDown.bind(this)} tabIndex = "0">
			{
				this.state.maze.map(row=>{
					let columns = row.map(column =>{
						if(column== "+")
						{
							return <Mas/>
						}
						if(column =="|")
                        {
                            return <Menos/>
                        }if(column == "-")
						{
							return <Menos/>
						}
						if(column == " "){
							return <Espacio/>
						}
						if(column == "p"){
							return <this.state.sprite />
						}
						if(column == "g"){
							return <Meta/>
						}
						return <span>{column}</span>
					})
					columns.push(<br />)
						return columns
				})
			}
		</div>
	}

}