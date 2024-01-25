import MainContainer from "../components/MainContainer.jsx";
import boxes from "../../boxes.json";
import Card from "../components/Card.jsx";
import React from "react";

console.log(boxes);
const Layout = () => {
    return (
        <div className="">
            <div className={"w-full h-full flex text-[#E85A4F] text-3xl font-bold justify-center my-8"}>
                Наши боксы
            </div>
            <div className={"flex flex-wrap justify-center px-4"}>
                {boxes.map((box) =>
                    (<Card box={box} key={box.id}/>))}
            </div>
        </div>
    );
}
    ;

    export default Layout;