import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../redux/action'
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io"

const Counter = () => {

    const count = useSelector(state => state.count)
    const dispatch = useDispatch()

    return (
        <div className='counter'>
            <button onClick={() => dispatch(increment(1))}><IoIosArrowUp /></button>
            <span>{count}</span>
            <button onClick={() => dispatch(decrement(1))}><IoIosArrowDown /></button>
        </div>
    )
}

export default Counter