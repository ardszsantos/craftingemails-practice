import React from "react";

import helloImage from '../assets/images/helloImage.svg'


const FirstPage = () => {
    return (  
        <div className="flex flex-col text-center items-center justify-center">
            <img alt="hello image" src={helloImage}/>
            <h1 className="mt-[17.5px] font-bold text-custom-dark text-[50px]">
                Ship email templates wth your <br/> digital products quickly and easily.
            </h1>
            <p className="text-[24px] text-light-dark mt-[32px] font-light">
                Get ready-made HTML templates for a small price. <br/>
                or order a bespoke email templates.
            </p>
            <a href="craftingemails.com" className="text-blue-600 underline mt-[32px]">craftingemails.com</a>
        </div>
    );
}
 
export default FirstPage;