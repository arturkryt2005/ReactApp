import React from "react";

//вот это вроде норм сейчас данные обновляются

export const Counter = () => {
    const [count, setCount] = React.useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}> +1 </button>
            <button onClick={decrement}> -1 </button>
        </div>
    )
}

export default Counter