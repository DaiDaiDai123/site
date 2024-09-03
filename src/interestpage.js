import league from "./Image/league.PNG";
import league2 from "./Image/league2.gif"
import cook from "./Image/cook.png"
import cook2 from "./Image/cook2.gif"
import smiling from "./Image/smiling.png"
import smiling2 from "./Image/smiling2.gif"
import coding from "./Image/coding.png"
import coding2 from "./Image/coding2.gif"
const InterestPage = () => {
    return (
        <body className="animated-background h-screen w-screen bg-gradient-to-r from-red-100 via-red-300 to-red-100">
        <h1 class="animate-text bg-gradient-to-r from-red-500 via-red-200 to-red-500 bg-clip-text text-transparent text-5xl font-black">
            My Top 4<br></br>
            Interests
        </h1>
            <div className="grid gap-9 grid-cols-2 grid-rows-2 p-40">
                <div className="col-start-1 row-start-1 relative">
                    <div className="image-container relative w-auto h-auto">
                        <img
                            className="static inset-0 object-cover transition-opacity duration-300 ease-in-out"
                            src={league}
                            alt="League of legends Icon"
                        />
                        <img
                            className="gif absolute inset-0 m-auto object-contain opacity-0 transition-opacity duration-300 ease-in-out"
                            src={league2}
                            alt="Sweaty speed runner"
                        />
                    </div>
                </div>
                <div className="row-start-1 col-start-2 relative">
                    <div className="image-container relative w-auto h-auto">
                        <img
                            className="static inset-0 object-cover transition-opacity duration-300 ease-in-out"
                            src={cook}
                            alt="Let's cook"
                        />
                        <img
                            className="gif absolute inset-0 m-auto object-contain opacity-0 transition-opacity duration-300 ease-in-out"
                            src={cook2}
                            alt="Mr.White cooking"
                        />
                    </div>
                </div>
                <div className="row-start-2 col-start-1 relative">
                    <div className="image-container relative w-auto h-auto">
                        <img
                            className="static inset-0 object-cover transition-opacity duration-300 ease-in-out"
                            src={smiling}
                            alt="Pim and Charlie"
                        />
                        <img
                            className="gif absolute inset-0 m-auto object-contain opacity-0 transition-opacity duration-300 ease-in-out"
                            src={smiling2}
                            alt="Smiling Friends Logo"
                        />
                    </div>
                </div>
                <div className="row-start-2 col-start-2 relative">
                    <div className="image-container relative w-auto h-auto">
                        <img
                            className="static inset-0 object-cover transition-opacity duration-300 ease-in-out"
                            src={coding}
                            alt="Coding"
                        />
                        <img
                            className="gif absolute inset-0 m-auto object-contain opacity-0 transition-opacity duration-300 ease-in-out"
                            src={coding2}
                            alt="Computer on fire"
                        />
                    </div>
                </div>
            </div>
        </body>
    );
}

export default InterestPage;
