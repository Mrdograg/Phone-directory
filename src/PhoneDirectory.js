import React, {Component} from "react";
import AddSubscriber from "./AddSubscriber";
import ShowSubscribers from "./ShowSubscribers";

class PhoneDirectory extends Component{

    constructor(){
        super();
        this.state= {
            subscribersList: [{
                id:1,
                name: 'Amit',
                phone: '1111111'
            },
            {
                id:2,
                name: 'Sumit',
                phone: '22222222'
            }]
        }
    }

    addSubscriberHandler =(newSubscriber) => {
        let subscriberList = this.state.subscribersList;
        if(subscriberList.length >0){
            newSubscriber.id =subscriberList[subscriberList.length-1].id +1;
        }  else {
            newSubscriber.id=1;
        }
        subscriberList.push(newSubscriber);
        this.setState({subscriberList: subscriberList});

    }

    render(){
        return(
            //<AddSubscriber addSubscriberHandler= {this.addSubscriberHandler}/>
            <ShowSubscribers subscribersList= {this.state.subscribersList}/>
            
     )
    }
}

export default PhoneDirectory;