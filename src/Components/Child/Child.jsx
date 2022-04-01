import React, { useContext } from 'react';
import { BasicAPI } from '../Grand/Grand';

const Child = () => {
    const [count, setCount, dynamicValue] = useContext(BasicAPI)
    return (
        <div className='div'>
            <h1>Child</h1>
            <h2>{count}</h2>
            <button onClick={() => setCount(count + 1)}>Add Value</button>
            <h4>{dynamicValue}</h4>
        </div>
    );
};

export default Child;