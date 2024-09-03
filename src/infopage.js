import LoadingText from "./titleText";
import pic from "./Image/pfp.PNG";
import React, { useState } from 'react';

const InfoPage = () => {
    const [times, setTimes] = useState(0);

    const handleOnClick = () => {
        setTimes(prevTimes => prevTimes + 1); // Increment the `times` state
        if (times === 9) {
            alert("Surprise(hope it's your birthday)");
            
        }
    };
    return (
        <body class="animated-background h-screen bg-gradient-to-r from-blue-100 via-blue-300 to-blue-100 w-screen">
            <div class="fixed top-0 mx-auto mb-10">
                <LoadingText />
            </div>
            <div class = "grid grid-cols-2 gap-4 ">
            <div>
            </div>
            {times >= 10 && <div class = "mr-60 inline-block row-span-2 col-start-2">
             <img src={pic} align = "right" alt="Description" className="w-1/2 rounded shadow-lg" />
             </div>}
            <div class="w-full font-mono row-start-2">
                <div class=" text-left p-2 m-2 h-58 w-auto shadow-md rounded-xl text-2xl">        
                <p class="font-bold text-xl">Name: Emrys Dai</p>
                <div class="text-left p-2">
                    <p>Degree: Bachelor of CS (Not the Coutner Strike one)</p>
                </div>
                <div class="text-left p-2">
                    <p>Age: Old enough to do anything</p>
                </div>
                <div class="text-left p-2">
                    <p>Difficulties: Asian</p>
                </div>
                <div class="text-left p-2">
                    <p>Personality: biased</p>
                </div>
                <div class="text-left p-2">
                    <p font-mono>That's all I have to say.
                        <br></br>
                        You may now click on the icons on the sidebar to see something else. 
                        <br></br>
                        Or you can click on the red button beneath
                        this textbox that does alsolutly nothing.
                        <br></br>
                        (Something may happen if you click it 10 times)
                    </p>
                </div>
                <div class = "fixed mt-10">
                    <button class="button" onClick={handleOnClick}>Click Me</button>
                    <div className="mt-4 p-4 rounded shadow-lg animated-background bg-gradient-to-r from-green-100 via-green-300 to-green-100">
                            <p className="text-lg font-bold">You have clicked the button <span className="text-red-950 font-bold">{times}</span> times.</p>
                    </div>
                </div>
            </div>
            </div>
            </div>
        </body>
    );
};

export default InfoPage