import React, {Component, useState} from 'react';
import Header from './Header';
import './AddSubscriber.css';
import { Link, useHistory } from 'react-router-dom';
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator';



export default function AddSubscriber({addSubscriberHandler}) {

    const [addSubscriberForm, setAddSubscriberForm] = useState({
        id: 0,
        name: '',
        phone: ''

     });

     const history= useHistory();
 
     const inputChangedHandler =(e)=> {
        const state= addSubscriberForm;
        state[e.target.name]=e.target.value;
        setAddSubscriberForm({...addSubscriberForm,...state});
 }

 const onFormSubmitted =(e)=> {
     e.preventDefault();
     addSubscriberHandler(addSubscriberForm);
     setAddSubscriberForm({id:0,name: '',phone: '' });
     history.push("/");
 }


      const {name,phone}=addSubscriberForm;

    return (
        <div>
        <Header Heading = "Add Subscriber"/>
        <div className="componet-body-container">
        <Link to="/">
            <button className="custom-btn">Back</button>
            </Link>
         <ValidatorForm className='subscriber-form' onSubmit={onFormSubmitted}>
          
               <TextValidator
               id= "name" type='text'  label="Name: "
               name="name" onChange={inputChangedHandler}   
               value={name}
               validators={['required']}
               errorMessages={['Name is required']}
               ></TextValidator>
           <br/><br/> 

            <TextValidator
               id='phone' type='text' label='Phone:'
               name="phone" onChange={inputChangedHandler}
               value={phone}
               validators={["required"]}
               errorMessages={'Phone number is required'}
            ></TextValidator>
        <br/><br/>

           <div className='subscriber-info-container'>
            <span className='subscriber-to-add-heading'>Subscriber to be added: </span><br/>
            <span className='subscriber-info'>Name: {name}</span><br/>
            <span className='subscriber-info'>Phone: {phone}</span><br/>
            </div>
             <button type='submit' className='custom-btn add-btn'>Add</button>      
         </ValidatorForm>
         </div>   
        </div>
    )
}


// class AddSubscriber extends Component {

//     constructor(){
//         super();
//      this.state = {
//         id: 0,
//         name: '',
//         phone: ''

//      }
//     }

//     inputChangedHandler= (e)=> {
//            const state= this.state;
//            state[e.target.name]=e.target.value;
//            this.setState(state);
//            console.log(this.state);
//     }

//     onFormSubmitted =(e)=> {
//         e.preventDefault();
//         this.props.addSubscriberHandler(this.state);
//         this.setState({id:0,name: '',phone: '' });
//         this.props.history.push("/");
//     }

//     render(){
//         const {name, phone} = this.state;
//         return (
//             <div>
//             <Header Heading = "Add Subscriber"/>
//             <div className="componet-body-container">
//             <Link to="/">
//                 <button className="custom-btn">Back</button>
//                 </Link>
//              <form className='subscriber-form' onSubmit={this.onFormSubmitted.bind(this)}>
//                 <label htmlFor='name' className='label-control'>Name: </label><br/>
//                <input id= "name" type='text' className='input-control' name="name" onChange={this.inputChangedHandler}/><br/><br/> 
//                <label htmlFor='phone' className='label-control'>Phone: </label><br/>
//                <input id='phone' type='text' className='input-control' name="phone" onChange={this.inputChangedHandler}/><br/><br/>
//                <div className='subscriber-info-container'>
//                 <span className='subscriber-to-add-heading'>Subscriber to be added: </span><br/>
//                 <span className='subscriber-info'>Name: {name}</span><br/>
//                 <span className='subscriber-info'>Phone: {phone}</span><br/>
//                 </div>
//                  <button type='submit' className='custom-btn add-btn'>Add</button>      
//              </form>
//              </div>   
//             </div>
//         )
//     }
// }

// export default AddSubscriber;