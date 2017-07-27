import React, { Component } from 'react'
import axios from 'axios'
import './App.css'
import DisplayItems from './components/DisplayItems'
import AddItemForm from './components/AddItem'

class App extends Component {
	constructor() {
		super()
		this.state = {
			lostItems: [{ name: 'socks', found: false, _id: 12321312 }]
		}
	}

	componentDidMount() {
		console.log('componentDidMount yo!')
		axios.get('/api/lostitem').then(response => {
			// console.log(response.data)
			this.setState({
				lostItems: response.data
			})
		})
	}

	render() {
		return (
			<div className="App">
				<h1>This is the APP component</h1>
				{/* <p>
					My lost items: {JSON.stringify(this.state.lostItems)}
				</p> */}
				<DisplayItems lostItems={this.state.lostItems} />
				<AddItemForm />
			</div>
		)
	}
}

export default App
