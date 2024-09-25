import React from "react";
import optbg from './assets/optbg.png';

function Optimization() {
    const containerStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        textAlign: 'center',
    };

    const textContainerStyle = {
        backgroundImage: `url(${optbg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',  
        width: '100%',  
    };

    return (
        <div style={containerStyle}>
            <div className="text-blueText text-inter" style={textContainerStyle}>
                <h1 className="text-8xl w-[70%] md:w-[80%] sm:w-[90%] mb-20 xl:text-7xl lg:text-6xl md:text-6xl sm:text-4xl sm:mb-12">Оптимизируйте финансовые процессы c Nomalytica</h1>
                <p className="font-light text-3xl xl:text-2xl lg:text-xl md:text-xl sm:text-sm w-[50%] md:w-[60%] sm:w-[70%] mb-20 sm:mb-12">Оставьте заявку на бесплатную консультацию и узнайте, как MetaBI может улучшить ваше управление финансами</p>
                <div className="flex flex-row gap-8 text-2xl xl:text-xl lg:text-lg md:text-lg sm:text-sm sm:flex-col sm:gap-4">
                    <h1 className="bg-customBlue text-white px-4 py-4 rounded-full w-[250px] sm:w-[200px]">Оставить заявку</h1>
                    <h1 className="border-2 rounded-full border-blueText px-4 py-4 w-[305px] sm:w-[200px]">Написать в WhatsApp</h1>
                </div>
            </div>
        </div>
    );
}

export default Optimization;
