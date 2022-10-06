import React, { useState } from "react";

export const Counte = () => {
    const [count, setCount] = useState(0);
    const handleInc = () => {
    count < 10 && setCount(count + 1);
    count === 10 && alert("This is Maximum Limit");
    };
    const handleDec = () => {
    count > 0 && setCount(count - 1);
    count === 0 && alert("This is Minimum Limit");
    };
    const handleRes = () => {
    setCount(0);
    };
    return (
    <div>
        <h1>Counter</h1>
        <h1>{count}</h1>
        <button onClick={handleInc}>Increment</button>
        <button onClick={handleDec}>Decrement</button>
        <button onClick={handleRes}>Reset</button>
    </div>
    );
};
