import React, { useState } from "react";
import { Card, CardBody, CardHeader } from "reactstrap";
import "../App.css";
import styled from "styled-components";
import {ImCross} from "react-icons/im"
const Lists = (props) => {

  const [input,setInput]= useState("");
  const [quantity,setQuantity] = useState();
  const [items,setItems] = useState([]);
  
  const addToItems =(e)=>{
    const id = items.length+1;
    if(quantity>= 1 && input!==""){
      setItems((prev) => [
      ...prev,
      {
        id: id,
        task: input,
        quantity: quantity,
        complete: false,
      }
    ]);
    
    setInput("");
    setQuantity(1);
    }else{
      if(quantity<= 0){
      alert("Quantity value should be minimum 1");
      setQuantity(1);
      }
      else{
        alert(" Please name the item ");
      }
    }
   
  };

  const clearItems = () =>{
    setItems([]);
    setQuantity(1);
  }

  const deleteId = (id) =>{
      const newitems = items.filter((item)=>{
        return item.id !==id;
      });
      setItems([...newitems]);
  }

  const updateQuantityId = (id,quantity) =>{
    // console.log(id)
    // console.log(quantity)
    // const update = items.map((item) =>{
    //   if(item.id === id){
    //     setItems({...items,quantity:quantity})
    //   }
    // })
  }
  return (
    <Wrapper>
    <div>
      <h2 className="App-header">Edit List</h2>
      <div className="d-flex justify-content-center">
        <Card className="w-50">
          <CardHeader>
          </CardHeader>
          <CardBody>
            <div>
              <div className="parent-heading">
                <div className="child-heading">
                    <h6>Item Name*</h6>
                    <input type='text'  value={input} placeholder="Enter the item" onChange={(e)=>{setInput(e.target.value)}}></input>
                 </div>
                 <div className="child-heading">
                      <h6>Quantity*</h6>
                      <input type="number" value={quantity} placeholder="quantity" onChange={(e)=>{setQuantity(e.target.value)}}></input>
                      <button className="btn" type="submit" onClick={addToItems}>Add</button>

                 </div>
              </div>
             
              <div>
              <p>To get started add 1 or more Items</p>
              </div>
              <div>
                <h5>Inventory List</h5>
              <div >
                
               {items.map((item) => {
                return (
                  <div className="items-list">
                  
                      <h5 className="items-list-child">{item.task}</h5>
                      <h5 className="items-list-child">Quantity: {item.quantity}
                      <input className="inventory-quantity" min="1" step="1" type="number" value={quantity} placeholder="quantity" 
                      onClick={()=> updateQuantityId(item.id,item.quantity)}>
                      </input>
                      </h5>
                      <p className="items-list-child del-btn" onClick={()=> deleteId(item.id)}><ImCross/></p>
                
                   </div>
                
                
              );
            })}
              </div>
              </div>
             <button className="btn" onClick={()=>clearItems()}>Clear All</button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
    </Wrapper>
  );
};

export { Lists };

const Wrapper = styled.div`
.parent-heading {
  display: flex;
}
.child-heading {
  flex:1;
}
.items-list {
  text-align: center;
   display: flex;
}
.items-list-child{
 flex:1;
  margin : 10px;
}
.del-btn {
  color:  #d73838;
  background-color: #f2f2f2;
}
.del-btn :hover{
  color: #850000;
}

.btn{
 background-color: #0078C8;
 color:white;
}
.btn :hover{
 background-color: #000;
}
.inventory-quantity{
  width: 23px;
}
input{
 background-color: #f2f2f2;
}
h5 {
 background-color: #f2f2f2;
}
`