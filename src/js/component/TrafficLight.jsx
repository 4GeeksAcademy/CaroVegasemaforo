import React from "react";
import { useState } from 'react';

//create your first component
const TrafficLight = () => {
    let[backgroundB1, setBackgroundB1]=useState('red');
    let[backgroundB2, setBackgroundB2]=useState('yellow');
    let[backgroundB3, setBackgroundB3]=useState('green');

    function clickButton1(){
        if(backgroundB1==='red')
        {setBackgroundB1("red glowRed");
        setBackgroundB3("green");
        setBackgroundB2("yellow");
    }else{
        setBackgroundB1("red");
        }
    }

    function clickButton2(){
        if(backgroundB2==='yellow'){
            setBackgroundB2("yellow glowYellow");
            setBackgroundB3("green");
            setBackgroundB1("red");
        }
        else{
            setBackgroundB2("yellow");
        }
    }

    function clickButton3(){
        if(backgroundB3==='green'){
            setBackgroundB3("green glowGreen");
            setBackgroundB2("yellow");
            setBackgroundB1("red");
        }
        else{
            setBackgroundB3("green");
        }
    }

	return (
        <div className="flex-column d-flex align-items-center">
            <div className="box bg-dark"></div>
		    <div className="content bg-dark mx-2 mb-2 p-2">
			    <div className={backgroundB1} onClick={clickButton1} ></div>
                <div className={backgroundB2} onClick={clickButton2} ></div>
                <div className={backgroundB3} onClick={clickButton3}></div>
		    </div>
        </div>
	);
};

export default TrafficLight;