import React, { useState, useMemo } from 'react';

const ExampleComponent = ({ data }) => {
    const [input, setInput] = useState('');

    const memoizedResult = useMemo(() => {

        console.log('Executing expensive computation...');
        return data.filter(item => item.includes(input));
    }, [data, input]);

    return (
        <div>
            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Filter data"
            />
            <ul>
                {memoizedResult.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </div>
    );
};

export default ExampleComponent;
