import {useState} from "react";

const x = () => {

const [a,seta]=useState([]);
const [b,setb] = useState([]);

function ac(e) {
    seta(e.target.value)
}
    function ab(e) {
        setb(e.target.value)
    }


  return(<>
      <div className="controls">
          <input className="First" type="text" data-testid="word-input" onChange={(e)=>ac(e)} value={this.state.input}/>
          <input className="Second" type="text" data-testid="word-input" onChange={this.handleChange} value={this.state.input}/>
      </div>
      <div className="text-field" data-testid="text-field">

      </div></>)
}
export default x;