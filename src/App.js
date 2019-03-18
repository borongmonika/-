


class App extends Component {
    render() {
        const boss = 'fg';
        return (<div>
            <h2>{boss}:rua!</h2>
            <Go name = 'jojo'/>
            <List name = 'Dio'/>
        </div>)
    }
}
function List (props){
    return <h2>{props.name}:rua!</h2>
}
class Go extends Component {
    constructor(props){
        super(props)
        this.state = {
            solders:['1','2','3']
        }
    }
    render() {
        // const boss = 'hx';
        return (
            <div>
                <h2>{this.props.name}:rua!</h2>
                <Button></Button>
                <ul>
                    {this.state.solders.map((num,index)=>{
                        return <li key={index}>{num}</li>
                    })}
                </ul>
            </div>
        )
    }
}
export default App;