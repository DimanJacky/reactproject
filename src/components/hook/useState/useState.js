import React, {useState} from "react";

const computeInitialCounter = () => {
    console.log('Some calculations...');
    return Math.trunc(Math.random() * 20);
}

export const UseStateComponent = () => {
    // const [counter, setCounter] = useState(0);
    // const [counter, setCounter] = useState(computeInitialCounter());
    const [counter, setCounter] = useState(() => {
        return computeInitialCounter();
    });

    const [state, setState] = useState({
        title: 'Счетчик',
        date: Date.now()
    });

    const increment = () => {
        // setCounter(counter + 1);
        // setCounter(counter + 1);
        setCounter((prevCounter) => {
            return prevCounter + 1;
        });
        // setCounter(prev => prev + 1);
    }

    const decrement = () => {
        setCounter(counter - 1);
    }

    const updateTitle = () => {
        setState(prev => {
            return {
                ...prev,
                title: 'Новое название'
            }
        })
    }

    return (
        <div>
            <h1>Счетчик: {counter}</h1>
            <button onClick={increment} className="btn btn-success">Добавить</button>
            <button onClick={decrement} className="btn btn-danger">Убрать</button>
            <button onClick={updateTitle} className="btn btn-default">Изменить название</button>

            <pre>{JSON.stringify(state, null, 2)}</pre>
        </div>
    );
};
