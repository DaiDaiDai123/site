import hello from "./Image/hello.gif"
const defaultPage = () => {
    return (
        <body class = "bg-orange-200 h-screen w-screen">
            <img class = "w-1/2 h-auto" src={hello} alt = "Hello"/>
        </body>
    );
}

export default defaultPage;