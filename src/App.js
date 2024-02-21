import Header from "./Header";
import './App.css';


function App() {
  let subscribers  =[{
    id:1,
    name: "Amit",
    phone: "111111111111"},
    { id:2,
      name: "Sumit",
    phone: "22222222222"

    }]
  return (
    <div>
      <Header Heading="Phone Directory" />
        <div className="component-body-container">
          <button className="custom-btn add-btn">Add</button>

          <div className="grid-container heading-container">
            <span className="grid-item name-heading">Name</span>
            <span className="grid-item phone-heading">Phone</span>
          </div>
         
         {
          subscribers.map(sub=>{
            return <div key={sub.id} className="grid-container">
              <span className="grid-items">{sub.name}</span>
              <span className="grid-items">{sub.phone}</span>
              <span className="grid-item action-btn-container">
                  <button className="custom-btn delete-btn">Delete</button>
                </span>
              </div>

          })
         }
           
        </div>
      </div>
  );
}

export default App;
