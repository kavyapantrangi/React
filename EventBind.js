const { Component } = require("react");

class Event extends Component
{
    constructor(props)
    {
        super(props)
        this.state={
            message:'Hello'
        }
    }
    clickHandler()
    {
        this.setState(
            {
                message:'Goodbye'
            }
        )
        console.log(this);
        
    }
    render()
    {
        return(
            <div>
                <div>
                    {this.state.message}
                </div>
                <button onClick={this.clickHandler.bind(this)}>Cliick</button>
            </div>
        )
    }
}
export default Event;
