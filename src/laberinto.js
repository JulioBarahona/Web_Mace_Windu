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

export default class Laberinto extends React.Component{
   //shape, maze and position
	constructor(){
		super()
		this.state = {
            sprite: Personaje,
            laberinto:[],
            x:1,
            y:1
		}

	}
 
    //Fetchs data from server
    componentDidMount() {
        var self = this;
        $.getJSON("http://34.210.35.174:3001/?type=json&w=8&h=8",function(data){
            self.setState({laberinto:data})
        })
    
		}

    //moves, changes and checks the condition of player
	handleKeyDown(e) {

		e.preventDefault()

        if (e.key === "ArrowLeft") {
            var self = this;
            self.setState({sprite: Left})
            const movimientosLab = this.state.laberinto
            if(movimientosLab[this.state.y][this.state.x-1] == " "){
                
                movimientosLab[this.state.y][this.state.x] = " "
                movimientosLab[this.state.y][this.state.x-1] = "p"
                this.setState({
                    x: this.state.x -1,
                    laberinto: movimientosLab
                })
            }
            if(movimientosLab[this.state.y][this.state.x+1] == "g"){
                
                movimientosLab[this.state.y][this.state.x] = " "
                movimientosLab[this.state.y][this.state.x+1] = "p"
                this.setState({
                    x: this.state.x +1,
                    laberinto: movimientosLab,
    
                })
                var self = this;
                self.setState({sprite: Win})
                alert("Has Ganado!");
                
            } 
        }
        if (e.key === "ArrowRight") {
            var self = this;
            self.setState({sprite: Right})
        	const movimientosLab = this.state.laberinto
        	if(movimientosLab[this.state.y][this.state.x+1] == " "){
        		
            	movimientosLab[this.state.y][this.state.x] = " "
            	movimientosLab[this.state.y][this.state.x+1] = "p"
            	this.setState({
                	x: this.state.x +1,
                	laberinto: movimientosLab

            	})
        	} 
        	if(movimientosLab[this.state.y][this.state.x+1] == "g"){
        		
            	movimientosLab[this.state.y][this.state.x] = " "
            	movimientosLab[this.state.y][this.state.x+1] = "p"
            	this.setState({
                	x: this.state.x +1,
                	laberinto: movimientosLab,
                	
            	})
                var self = this;
                self.setState({sprite: Win})
            	alert("Has Ganado!");
            	
        	} 
        }
        
        if (e.key === "ArrowUp") {
            var self = this;
            self.setState({sprite: Up})
            const movimientosLab = this.state.laberinto
        	if(movimientosLab[this.state.y-1][this.state.x] == " "){
            	movimientosLab[this.state.y][this.state.x] = " "
            	movimientosLab[this.state.y-1][this.state.x] = "p"
            	this.setState({
                	y: this.state.y -1,
                	laberinto: movimientosLab
            	})
        	}
        	if(movimientosLab[this.state.y][this.state.x+1] == "g"){
        		
            	movimientosLab[this.state.y][this.state.x] = " "
            	movimientosLab[this.state.y][this.state.x+1] = "p"
            	this.setState({
                	x: this.state.x +1,
                	laberinto: movimientosLab,
                	
            	})
                var self = this;
                self.setState({sprite: Win})
            	alert("Has Ganado");
            	
        	} 
        }
        if (e.key === "ArrowDown") {
            var self = this;
            self.setState({sprite: Down})
            const movimientosLab = this.state.laberinto
        	if(movimientosLab[this.state.y+1][this.state.x] == " "){
        		
            	movimientosLab[this.state.y][this.state.x] = " "
            	movimientosLab[this.state.y+1][this.state.x] = "p"
            	this.setState({
                	y: this.state.y + 1,
                	laberinto: movimientosLab
            	})
        	}
        	if(movimientosLab[this.state.y][this.state.x+1] == "g"){
        		
            	movimientosLab[this.state.y][this.state.x] = " "
            	movimientosLab[this.state.y][this.state.x+1] = "p"
            	this.setState({
                	x: this.state.x +1,
                	laberinto: movimientosLab,
                	
            	})
                var self = this;
                self.setState({sprite: Win})
            	alert("Has Ganado!");
            	
        	} 
        }

    }

	render(){
		return <div id="Laberinto" style = {styles} onKeyDown = {this.handleKeyDown.bind(this)} tabIndex = "0">
			{
				this.state.laberinto.map(row=>{
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