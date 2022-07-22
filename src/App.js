import "./styles.css";

export default function App() {
  function handler() {
    
    const name = document.getElementById("name").value;
    const size = document.getElementById("size").value;
    const pepperoni = document.getElementById("pepper").checked;
    const quantity = document.getElementById("quantity").value;
    const Gluten = document.getElementById("gluten").checked;
    
    const order = `Order for ${quantity} ${size} pizza(s) that are  Gluten-Free and  ${
      pepperoni ? "have pepproni" : "dont have peproni"
    } ${Gluten ? "have Gluten" : "dont have Gluten"} for ${name}`;
    document.getElementById("root").innerHTML = order;
  }
    
  return (
    <form>
      <div className="App">
        <h1>ORDER YOUR PIZZA</h1>
      </div>
      <img
        width="500px"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyvUlShtbPCOFF9qWxLnq6ea5SrIYDb2l_rg&usqp=CAU"
      />
      <div className="order">
        <div className="myname">
          <label>
            Enter your name : &nbsp;
            <input type="text" id="name" />
          </label>
        </div>{" "}
        <br></br>
        <div className="mysize">
          <label>
            size : &nbsp;
            <select id="size">
              <option>large</option>
              <option>small</option>
              <option>medium</option>
            </select>
          </label>
        </div>{" "}
        <br></br>
        <div>
          <div className="cardnotify">
            <input type="checkbox" id="pepper" /> &nbsp; Pepperoni
          </div>
          <div>
            <input type="checkbox" id="gluten" /> &nbsp; Gluten free
          </div>{" "}
          <br></br>
        </div>
        <div className="myquantity">
          <label>
            quantity : &nbsp;
            <input type="number" id="quantity" />
          </label>
        </div>{" "}
        <br></br>
        <div>
          <label>addtional instruction</label>
        </div>
        <textarea id="instruction"></textarea>
        <div>
          <input className="mysubmit" type="submit" onClick={handler} />
        </div>{" "}
        <br></br>
      </div>
    </form>
  );
}
