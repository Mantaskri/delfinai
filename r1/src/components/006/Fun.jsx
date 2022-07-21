import { useState } from "react";

function Fun({spalva, setCount}) {

    const [bg, setBg] = useState('green');
    //const [count, setCount] =useState(0);

    const changeB = () => {
      //  setBg('blue');
        setBg(b => b === 'green' ? 'blue' : 'green');
        console.log(bg);
    }

    const addOne = () => {
        setCount(c => c + 1);
    }

    return (
        <>
    <h2 style={{
        color: spalva,
        backgroundColor: bg,
        borderRadius: 50,
        
    }}>FUN </h2>
    <button onClick={changeB}>Do Blue</button>
    <button onClick={addOne}>+ 1</button>
    </>
    );
}
export default Fun;