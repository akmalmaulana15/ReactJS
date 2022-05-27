import React from "react";
import bg from '../component/comp.png';
import { right } from "@popperjs/core";

export default class Home extends React.Component{
    render(){
        return(
            <div className="bg-gray-100 bg">    
                <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
                    <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        <span className="block text-gray-400 text-base subpixel-antialiased tracking-wider font-medium">Best Store In The World</span>
                        <span className="block text-8xl">Computer Store</span>
                        <span className="block text-gray-400 text-base subpixel-antialiased tracking-wide font-medium">All brand new product, best quality <br/>the price so family friendly.</span>
                        <br/>
                        <hr className='border-t-4'/>
                    </h2>
                    <div className="flex flex-row-reverse ml-64">                  
                        <img src={bg} alt="comp" className="box-border w-full" style={{marginLeft : "-50px"}}/>
                    </div>
                </div>
            </div>
        )
    }
}