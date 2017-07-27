import React, { Component } from 'react'
import './App.css'

class App extends Component {
	constructor() {
		super()
		this.state = {
			lostItems: [{ name: 'socks', found: false }]
		}
	}
	render() {
		return (
			<div className="App">
				<h1>This is the APP component</h1>
				<p>
					My lost items: {JSON.stringify(this.state.lostItems)}
				</p>
			</div>
		)
	}
}

export default App
