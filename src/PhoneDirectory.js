import React, {Component} from "react";
import AddSubscriber from "./AddSubscriber";
import ShowSubscribers from "./ShowSubscribers";

import { BrowserRouter, Routes,Route} from "react-router-dom";

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

    deleteSubscriberHandler = (subscriberId) =>{
        let subscribersList = this.state.subscribersList;
        let subscriberIndex = 0;
        subscribersList.forEach(function (subscriber, index){
            if(subscriber.id == subscriberId){
                subscriberIndex =index;
            }
        }, this);
        let newSubscribers = subscribersList;
        newSubscribers.splice(subscriberIndex, 1);
        this.setState({subscribers: newSubscribers});
    }

    addSubscriberHandler =(newSubscriber) => {
        let subscriberList = this.state.subscribersList;
        if(subscriberList.length >0){
            newSubscriber.id =subscriberList[subscriberList.length-1].id +1;
        }  else {
            newSubscriber.id=1;
        }
        subscriberList.push(newSubscriber);
        this.setState({subscriberList: subscriberList})

    }

    render(){
        return(
            <BrowserRouter>
            <Routes>
              
              <Route exact path="/" render={(props) => <ShowSubscribers {...props} subscribersList={this.state.subscribersList} deleteSubscriberHandler={this.deleteSubscriberHandler} />}/>
              <Route  exact path="/add" render={({history}, props)=> <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler}/>}/> 
              
            </Routes>
          </BrowserRouter>
            
     );
    }
}

export default PhoneDirectory;