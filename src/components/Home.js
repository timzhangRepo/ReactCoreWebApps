import React from 'react';
import '../assets/css/Home.css';
const axios = require('axios');

class Home extends React.Component {
    constructor() {
        super();
        this.state={
            list:[],
            domain:'http://a.itying.com/'
        }
    }
    //Mounting LifeCycle Method
    /**
     * componentDidMount() is invoked immediately after a component is mounted (inserted into the tree).
     * Initialization that requires DOM nodes should go here.
     * If you need to load data from a remote endpoint, this is a good place to instantiate the network request.
     * src: https://reactjs.org/docs/react-component.html#componentdidmount
     */
    componentDidMount() {
        this.requestData();
    }
    requestData=()=>{
        var api = this.state.domain+'api/productlist'
        axios.get(api)
            .then((response)=>{
                //成功 arrow function inherits this to whatever calls it
                this.setState({
                    list:response.data.result
                })
            }).catch(function(error){
                console.log("wrong stuff man"+error);
        }).then(function (){
        })
    }

    render() {
        return (
            <div>
                <div className='list'>
                    {
                        this.state.list.map((value,key)=>{
                            return (
                                <div className="item" key={key}>
                                    <h3 className="item_cate">{value.title}</h3>
                                    <ul className="item_list">
                                        {
                                            value.list.map((v, k)=>{
                                                return(
                                                        <li key={k} >
                                                            <div className="inner">
                                                                <img src={`${this.state.domain}${v.img_url}`} />
                                                                <p className="title">{v.title}</p>
                                                                <p className="price">${v.price}</p>
                                                            </div>
                                                        </li>
                                                )
                                            })
                                        }
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}export default Home;
