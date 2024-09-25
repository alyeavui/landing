import React from "react";
import tick from "./assets/tick.png";

function Plan2() {
    return (
        <div className="bg-white">
            <div className="bg-purpleforbg w-[98%] mx-auto pb-24 rounded-xl flex flex-row gap-12 px-[60px] justify-center items-center text-inter">
                <div className="bg-white w-[30%] h-[810px] mt-12 pt-12 rounded-3xl relative">
                    <div className="ml-16 border-2 border-textBlue text-textBlue rounded-full w-[160px] h-[55px] text-center text-3xl font-medium flex items-center justify-center">
                        <h1>Базовый</h1>
                    </div>
                    <div>
                        <ul className="list-none ml-16 mt-16 text-2xl font-light text-textBlue w-[80%]">
                            <li className="flex items-center mb-4">
                                <img src={tick} alt="tick" className="mr-2" />
                                Подключение к MetaBI
                            </li>
                            <li className="flex items-center mb-4">
                                <img src={tick} alt="tick" className="mr-2" />
                                Сопровождение Финансового аналитика (консультации - 4 часа в месяц)
                            </li>
                            <li className="flex items-center mb-4">
                                <img src={tick} alt="tick" className="mr-2" />
                                Консультации по техническим вопросам
                            </li>
                        </ul>
                    </div>
                    <div className="ml-16 absolute inset-x-0 bottom-0 mb-20">
                        <div className="text-customBlue flex">
                            <h1 className="mr-2 text-5xl">49 000</h1>
                            <h1 className="text-3xl pt-3">тг/мес</h1>
                        </div>
                        <div>
                            <h1 className="mt-8 text-white bg-customBlue rounded-full w-[230px] h-[70px] text-center text-2xl font-medium flex items-center justify-center">Выбрать тариф</h1>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-[30%] h-[810px] mt-12 pt-12 rounded-3xl relative">
                    <h1 className="ml-10 border-2 border-customBlue text-customBlue rounded-full w-[270px] h-[55px] text-center text-3xl font-medium flex items-center justify-center">Сопровождение</h1>
                    <div>
                        <ul className="list-none ml-16 mt-16 text-2xl font-light text-textBlue w-[80%]">
                            <li className="flex items-center mb-4">
                                <img src={tick} alt="tick" className="mr-2" />
                                Подключение к MetaBI
                            </li>
                            <li className="flex items-center mb-4">
                                <img src={tick} alt="tick" className="mr-2" />
                                Сопровождение Финансового аналитика (консультации - 4 часа в месяц)
                            </li>
                            <li className="flex items-center mb-4">
                                <img src={tick} alt="tick" className="mr-2" />
                                Консультации по техническим вопросам
                            </li>
                        </ul>
                    </div>
                    <div className="ml-16 absolute inset-x-0 bottom-0 mb-20">
                        <div className="text-customBlue flex">
                            <h1 className="mr-2 text-5xl">49 000</h1>
                            <h1 className="text-3xl pt-3">тг/мес</h1>
                        </div>
                        <div>
                            <h1 className="mt-8 text-white bg-customBlue rounded-full w-[230px] h-[70px] text-center text-2xl font-medium flex items-center justify-center">Выбрать тариф</h1>
                        </div>
                    </div>
                </div>
                <div className="bg-white w-[30%] h-[810px] mt-12 pt-12 rounded-3xl relative">
                    <h1 className="ml-10 text-white bg-customBlue rounded-full w-[180px] h-[55px] text-center text-3xl font-medium flex items-center justify-center">Под ключ</h1>
                    <div>
                        <ul className="list-none ml-16 mt-16 text-2xl font-light text-textBlue w-[80%]">
                            <li className="flex items-center mb-4">
                                <img src={tick} alt="tick" className="mr-2" />
                                Подключение к MetaBI
                            </li>
                            <li className="flex items-center mb-4">
                                <img src={tick} alt="tick" className="mr-2" />
                                Сопровождение Финансового аналитика (консультации - 4 часа в месяц)
                            </li>
                            <li className="flex items-center mb-4">
                                <img src={tick} alt="tick" className="mr-2" />
                                Консультации по техническим вопросам
                            </li>
                        </ul>
                    </div>
                    <div className="ml-16 absolute inset-x-0 bottom-0 mb-20">
                        <div className="text-customBlue flex">
                            <h1 className="mr-2 text-5xl">49 000</h1>
                            <h1 className="text-3xl pt-3">тг/мес</h1>
                        </div>
                        <div>
                            <h1 className="mt-8 text-white bg-customBlue rounded-full w-[230px] h-[70px] text-center text-2xl font-medium flex items-center justify-center">Выбрать тариф</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Plan2;
