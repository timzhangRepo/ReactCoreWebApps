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
        templist.push(input);
        this.setState({
            taskList: templist,
        })
    }

    removeTask=(key)=>{
        let tempList = this.state.taskList;
        tempList.splice(key, 1);
        this.setState({
            taskList: tempList
        })

    }
    userInputCapture=(event)=>{
        this.setState({
            userinput:event.target.value
        })

    }
    render() {
        return (
            <div>
                <h3>My To-Do List</h3>
                <input value={this.state.username} type="text" onChange={this.userInputCapture}/><button onClick={this.addToList}>ADD</button>
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
