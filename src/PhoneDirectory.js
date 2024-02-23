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
              
              <Route exact path="/" render={(props) => <ShowSubscribers {...props} subscribersList={this.state.subscribersList}/>}/>
              <Route  exact path="/add" render={({history}, props)=> <AddSubscriber history={history} {...props} addSubscriberHandler={this.addSubscriberHandler}/>}/> 
              
            </Routes>
          </BrowserRouter>
            
     );
    }
}

export default PhoneDirectory;