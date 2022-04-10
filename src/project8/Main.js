import React, { useState } from 'react';
import './App.css'
import Arr from './data';

const Main=()=>{
    const [input,setInput]=useState(0);
    const [data,setData]=useState([]);

    const submitHandler=(e)=>{
        e.preventDefault();

        var value=parseInt(input);

        if(value < 1){
            value=1;
        }

        if(value>11){
            value=11;
        }

        setData(Arr.slice(0,value));

    }

    return(
        <>
            <article>
                <h1>Lorem Ipsum Provider</h1>

                <form onSubmit={submitHandler}>
                    <label htmlFor="num">Paragraphs : </label>
                    <input type="number" name="num" id="num" value={input} onChange={(e)=>setInput(e.target.value)} />
                    <button> genarator </button>
                </form>
            </article>
            <div className="total">
            {data.map((ele,index)=>{
                return(
                    <div key={index} className="card">
                        <div className="card-body">
                            <p className="text">{ele}</p>
                        </div>
                    </div>
                )
            })}
            </div>
        </>
    )
}

export default Main;