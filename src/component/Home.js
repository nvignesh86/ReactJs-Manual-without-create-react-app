import {useState} from "react";

const Home = () => {
    const [value, setValue] = useState(0);
    const click = ()=>{
        setValue(value+1);
    }
    return (
        <div>
            <h1>Hello World</h1>
            <h2>Value is: {value}</h2>
            <button onClick={click} >Click</button>
        </div>
    );
};
export default Home; 