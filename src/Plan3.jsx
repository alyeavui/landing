import React from "react";
import plans from "./assets/plans.png";
import tick from "./assets/tick.png";

function Plan3() {
    return (
        <div className="bg-white">
            <div className="bg-purpleforbg w-[98%] mx-auto pb-24 rounded-xl flex px-[60px] relative text-inter">
                <div className="ml-32">
                    <h1 className="text-7xl text-planColor leading-snug w-[63%] mb-16">Дополнительная услуга к тарифам 1 и 2</h1>
                    <img 
                        src={plans} 
                        alt="plans" 
                        className="object-cover sm:w-[360px] sm:h-[346px] md:w-[750px] md:h-[380px] lg:w-[525px] lg:h-[570px] xl:w-[630px] xl:h-[700px] 2xl:w-[860px] 2xl:h-[860px] 3xl:h-[100px] 3xl:w-[385px] rounded-3xl" 
                        style={{ objectFit: 'cover' }} 
                    />
                    <div className="ml-16 absolute inset-y-0 right-0">
                        <ul className="list-none mt-16 text-2xl font-light text-textBlue w-[80%]">
                            <li className="flex items-center mb-4">
                                <img src={tick} alt="tick" className="mr-2" />
                                Подключение к MetaBI
                            </li>
                            <li className="flex items-center mb-4">
                                <img src={tick} alt="tick" className="mr-2" />
                                Сопровождение Финансового аналитика (консультации - 4 часа в месяц)
                            </li>
                        </ul>
                        <div className="text-textBlue flex absolute bottom-0 pb-24">
                            <h1 className="mr-2 text-4xl">299 000</h1>
                            <h1 className="text-xl pt-3">тенге</h1>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    );
}

export default Plan3;
