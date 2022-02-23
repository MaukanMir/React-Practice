
import React, {Component} from "react";
import CardList from "./CardList";


class App extends Component{
    constructor(){
        super();
        this.state ={
            monsters:[],
            searchField: "",
            title: ""
        };
        
    }

    componentDidMount(){
        fetch("https://jsonplaceholder.typicode.com/users").then(response => response.json()).then(users => this.setState({monsters: users}))
    }

    render(){
        const {monsters,searchField} = this.state;
        const filteredMonsters = monsters.filter(monster=> monster.name.toLowerCase().includes(searchField.toLowerCase()))
        return (
            <div>

            <input type="search" placeholder="Search monsters..." onChange ={(e) => this.setState({searchField: e.target.value, title: e.target.value})}  />
            <h1>{this.state.title}</h1>
                <CardList monsters = {filteredMonsters} />
            </div>
        )
    }
}

export default App;