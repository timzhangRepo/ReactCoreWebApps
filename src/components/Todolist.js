import React from 'react';
import '../assets/css/Todolist.css';

//Import self defined moudle.
import mystroage from '../model/storage'

class Todolist extends React.Component {
    constructor() {
        super();
        this.state = {
            userinput: '',
            myList: []
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
            mystroage.set('todolist',templist);
        }
    }

    removeTask = (key) => {
        let tempList = this.state.myList;
        tempList.splice(key, 1);
        this.setState({
            myList: tempList
        })
        mystroage.set('todolist',tempList);
    }
    userInputCapture = (event) => {
        this.setState({
            userinput: event.target.value
        })

    }

    checkToggle = (key) =>{
        let templist = this.state.myList;
        templist[key].checked =! templist[key].checked;
        this.setState({
            myList:templist,
        });
        mystroage.set('todolist',templist);
    }


    //trigger when page load
    //React LifeCycle
    componentDidMount(){
        //get local stroage
        var list = mystroage.get('todolist');
        if(list){
            this.setState({
                myList: list,
            })
        }
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
                                        <input type={"checkbox"} checked={value.checked} onChange={this.checkToggle.bind(this,key)}/>
                                        {value.title}
                                        <button onClick={this.removeTask.bind(this, key)}>Delete</button>
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
                                        <input type={"checkbox"} checked={value.checked} onChange={this.checkToggle.bind(this,key)}/>
                                        {value.title}
                                        <button onClick={this.checkToggle.bind(this, key)}>Delete</button>
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
