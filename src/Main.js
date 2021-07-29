import React,{Component} from 'react';
class Main extends Component {
    constructor(){
        super()
        this.state={
            info:[]
        }
    }
    componentDidMount(){
        fetch("https://api.quotable.io/random")
        .then(response => response.json())
        .then(data => {
            console.log(data);
            this.setState({
                info: data
            })
        })
    }
    

    render() {
        return (
            <div>
                <h1 className = "quotes">{this.state.info.tags}</h1>
                <h2 className = "mystyle">{this.state.info.author}</h2> 
                <h3 className = "styles">{this.state.info.content}</h3>
            </div>
        )
    }




}
export default Main;