import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { decrementData, incrementData } from './CreateSlice';

function Counter() {

    let dispatch = useDispatch()
    let count = useSelector((c) => c.reducer1.count)

    function increment() {
        dispatch(incrementData(1))

    }
    function decrement() {
        dispatch(decrementData(1))
    }

    return (
        <div className=' text-center mt-10'>
            <h1 className='mt-20 mb-10  '> press here {count}</h1>
            <button className='m-2 p-2 border border-green-400 text-white bg-green-900 ' onClick={increment}> increment +1</button>
            <button className='m-2 p-2 border border-green-400 text-white bg-green-900 ' onClick={decrement}> increment -1</button>
        </div>
    )
}

export default Counter