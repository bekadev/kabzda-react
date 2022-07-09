import React, {useEffect, useState} from 'react';

export const Localstorage = () => {
    const [value, setValue] = useState<number>(0)

    useEffect(() => {
        let valueAsString =  localStorage.getItem('counterValue')
        if (valueAsString) {
            let newValue =  JSON.parse(valueAsString)
            setValue(newValue)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('counterValue', JSON.stringify(value))
    }, [value])

    const onClickHandler = () => {
        setValue(value + 1)
    }

    const clearLocalstorageHandler = () => {
        localStorage.clear()
        setValue(0)
    }
    const removeItemLocalstorageHandler = () => {
        localStorage.removeItem('counterValue + 1')
    }
    return (
        <div>
            <h3>{value}</h3>
            <button onClick={onClickHandler}>inc</button>
            {/*<button onClick={setToLocalstorageHandler}>setToLocalstorage</button>*/}
            {/*<button onClick={getToLocalstorageHandler}>getToLocalstorage</button>*/}
            {/*<button onClick={clearLocalstorageHandler}>clearLocalstorage</button>*/}
            {/*<button onClick={removeItemLocalstorageHandler}>removeItemLocalstorage</button>*/}
        </div>
    );
};