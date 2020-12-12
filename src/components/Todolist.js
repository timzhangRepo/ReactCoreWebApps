import React from 'react';
import '../assets/css/Todolist.css';

class Todolist extends React.Component {
    constructor() {
        super();
        this.state = {
            userinput: '',
            myList: [
                {
                    title: 'Buy apple',
                    checked: true
                },
                {
                    title: 'Buy PS5',
                    checked: false
                },
                {
                    title: 'Get a hair cut on Sunday',
                    checked: true
                }
            ]
        }
    }

    addToList = (e) => {
        //When Hit Enter by user
        if(e.keyCode==13 || e.target.id=="submit") {
            let input = this.state.userinput;
            if (input.length < 1) {
                return;
            }
            //Handle empty strings
            let templist = this.state.myList;
            templist.push({
                title: input,
                checked: false
            });
            this.setState({
                taskList: templist,
            })
        }
    }

    removeTask = (key) => {
        let tempList = this.state.taskList;
        tempList.splice(key, 1);
        this.setState({
            taskList: tempList
        })

    }
    userInputCapture = (event) => {
        this.setState({
            userinput: event.target.value
        })

    }




    render() {
        return (
            <div>
                <h2>My To-Do List</h2>
                <input value={this.state.username} type="text" onChange={this.userInputCapture} onKeyUp={this.addToList}/>
                <button id="submit" onClick={this.addToList}>ADD</button>
                <hr/>
                <h4>To-Do Tasks</h4>
                <ul>
                    {
                        this.state.myList.map((value, key) => {
                            if(!value.checked){
                                return (
                                    <li key={key}>
                                        <input type={"checkbox"} checked={value.checked}/>
                                        {value.title}
                                        <button>Delete</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
                <hr/>
                <h4>Finished Tasks</h4>
                <ul>
                    {
                        this.state.myList.map((value, key) => {
                            if(value.checked){
                                return (
                                    <li key={key}>
                                        <input type={"checkbox"} checked={value.checked}/>
                                        {value.title}
                                        <button>Delete</button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Todolist
