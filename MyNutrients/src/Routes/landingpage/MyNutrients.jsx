import React from 'react';
import mid from '../../assets/mid.png';
import bottomRight from '../../assets/bottomRight.jpg';
import '../../index.css'

const MyNutrients = () => {
    return (
<div className="relative h-screen w-full bg-customGreen">
            <div className="flex items-center justify-center relative h-[80%] w-full">
                <div className="h-full w-full bg-transparent">
                    <h1
                        className='absolute left-[100px] bottom-[250px] text-[3rem] text-headingGreen text-shadow-custom pb-10'
                    >Eat Healthy Live <br /> Healthy Today</h1>
                    <p
                        className='absolute left-[95px] bottom-[170px] text-[2rem] w-2/4 text-[#254336] text-shadow-custom-additional'
                    >"Eat the rainbow: the more colorful your plate, the more nutrients you'll consume."</p>
                    <button className='absolute left-[100px] bottom-[100px] text-base cursor-pointer bg-opacity-75 bg-[#0AE674] rounded-lg px-5 py-3 font-semibold text-black border-none'>Get started</button>
                </div>
                <div className="h-full w-1/2 overflow-hidden">
                    <img src={mid} alt="Healthy food" className='mt-[70px] h-[80%] w-[70%] bg-gradient-to-r rounded-2xl' />
                </div>
            </div>
            <div className="flex items-center p-5 h-[100vh] w-full bg-white">
                <div className="flex flex-[1] justify-center items-center">
                    <img src={bottomRight} alt="Healthy lifestyle" className='h-[80%] w-[70%] mix-blend-multiply bg-gradient-to-r rounded-3xl shadow' />
                </div>
                <div className="flex-[1] p-2">
                    <h1 className='text-[36px] m-0 mb-5 text-[#254336]'>About MyNutrients</h1>
                    <h2 className='text-lg font-medium'>"Eat clean, stay lean."</h2>
                    <ul className="list-none p-0 flex flex-col flex-wrap my-5 mx-10">
                        <li className='flex-1 flex-grow-1 flex-shrink-1 w-45 md:w-auto my-5 md:my-0 text-base md:text-lg text-[#254336]'><span
                            className='font-bold mr-10 text-[#55A575]'
                        >&#8226;</span> <b>Children Nutrition</b></li>
                        <li className='flex-1 flex-grow-1 flex-shrink-1 w-45 md:w-auto my-5 md:my-0 text-base md:text-lg text-[#254336]'><span className='font-bold mr-10 text-[#55A575]'>&#8226;</span> <b>Balance Body & Mind</b></li>
                        <li className='flex-1 flex-grow-1 flex-shrink-1 w-45 md:w-auto my-5 md:my-0 text-base md:text-lg text-[#254336]'><span className='font-bold mr-10 text-[#55A575]'>&#8226;</span> <b>Lifestyle In Pregnancy</b></li>
                        <li className='flex-1 flex-grow-1 flex-shrink-1 w-45 md:w-auto my-5 md:my-0 text-base md:text-lg text-[#254336]'><span className='font-bold mr-10 text-[#55A575]'>&#8226;</span> <b>Workout Routines</b></li>
                        <li className='flex-1 flex-grow-1 flex-shrink-1 w-45 md:w-auto my-5 md:my-0 text-base md:text-lg text-[#254336]'><span className='font-bold mr-10 text-[#55A575]'>&#8226;</span> <b>Diet Health Service</b></li>
                        <li className='flex-1 flex-grow-1 flex-shrink-1 w-45 md:w-auto my-5 md:my-0 text-base md:text-lg text-[#254336]'><span className='font-bold mr-10 text-[#55A575]'>&#8226;</span> <b>Poor Eating Habits</b></li>
                        <li className='flex-1 flex-grow-1 flex-shrink-1 w-45 md:w-auto my-5 md:my-0 text-base md:text-lg text-[#254336]'><span className='font-bold mr-10 text-[#55A575]'>&#8226;</span> <b>Protein Advice</b></li>
                        <li className='flex-1 flex-grow-1 flex-shrink-1 w-45 md:w-auto my-5 md:my-0 text-base md:text-lg text-[#254336]'><span className='font-bold mr-10 text-[#55A575]'>&#8226;</span> <b>Digestive Problems</b></li>
                    </ul>
                </div>
            </div>
            <header className="bg-customGreen text-[#254336] pt-8 pb-4">
                <div className="container mx-auto text-center">
                    <h1 className="text-3xl font-bold">Find a Nutrition Expert</h1>
                    <p className="mt-4">
                        Looking for credible nutrition information and recommendations? The MyNutrients network of credentialed food and nutrition practitioners are ready to help!
                    </p>
                </div>
            </header>
            <footer className="bg-customGreen py-1 pb-10">

                <div className="container mx-auto text-center mt-8">
                    <ul className="flex justify-center space-x-4">
                        <li><a href="#" className="text-blue-600">Accessibility Statement</a></li>
                        <li><a href="#" className="text-blue-600">Contact Us</a></li>
                        <li><a href="#" className="text-blue-600">Editorial Policy</a></li>
                        <li><a href="#" className="text-blue-600">Privacy Policy</a></li>
                        <li><a href="#" className="text-blue-600">Social Media Policy</a></li>
                        <li><a href="#" className="text-blue-600">Work at the Academy</a></li>
                    </ul>
                    <p className="mt-4">2024 © MyNutrients. All Rights Reserved.</p>
                    <div className="flex justify-center space-x-4 mt-4">
                        <a href="#" className="text-blue-600">Facebook</a>
                        <a href="#" className="text-blue-600">LinkedIn</a>
                        <a href="#" className="text-blue-600">Pinterest</a>
                        <a href="#" className="text-blue-600">Twitter</a>
                        <a href="#" className="text-blue-600">YouTube</a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default MyNutrients;
