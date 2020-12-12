import React from 'react';
import '../assets/css/Todolist.css';
class Todolist extends React.Component {
    constructor() {
        super();
        this.state={
            userinput:'',
            taskList:[],
        }
    }
    addToList=()=>{
        let input =this.state.userinput;
        if(input.length<1){return;}
        //Handle empty strings

        let templist = this.state.taskList;

        this.state.userinput = '';
        this.setState({
            taskList: templist,
        })
    }

    removeTask=(key)=>{
        alert(key);
    }
    userInputCapture=(event)=>{
        this.setState({
            userinput:event.target.value
        })

    }
    render() {
        return (
            <div>
                <input value={this.state.username} type="text" onChange={this.userInputCapture}/><button onClick={this.addToList}>ADD</button>
                <p>{this.state.userinput}</p>
                <hr/>
                <ul>
                    {
                        this.state.taskList.map((value, key)=>{
                            return (
                                <li key={key}>{value} --- <button onClick={this.removeTask.bind(this, key)}>Delete</button></li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}export default Todolist
