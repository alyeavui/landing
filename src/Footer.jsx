import React from "react";
import footer from './assets/footer.png';
import contacts from './assets/contacts.png';

function Footer() {
    const textContainerStyle = {
        backgroundImage: `url(${footer})`,
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
        <div className="h-[500px]">
            <div className="text-inter text-2xl" style={textContainerStyle}>
                <div className="relative w-[70%] h-[80%]">
                    <h1 className="font-bold mb-8">Яндекс Образование</h1>
                    <div className="grid grid-cols-3 text-xl w-[55%]">
                        <ul className="leading-loose">
                            <li>Яндекс Учебник</li>
                            <li>Яндекс Лицей</li>
                            <li>Яндекс Практикум</li>
                            <li>Школа анализа данных</li>
                            <li>Программы в университетах</li>
                            <li>Хендбуки</li>
                        </ul>
                        <ul className="leading-loose">
                            <li>Школьникам</li>
                            <li>Студентам</li>
                            <li>Партнёрам</li>
                            <li>Журнал</li>
                            <li>База знаний</li>
                            <li>События</li>
                        </ul>
                        <ul className="leading-loose">
                            <li>О нас</li>
                            <li>Обратная связь</li>
                            <li>Сайт образовательной организации</li>
                            <li>Сведения об образовательной организации</li>
                        </ul>
                    </div>

                    {/* Wrap the content in flex-row container */}
                    <div className="flex flex-row absolute bottom-0 right-0 items-center">
                        <h1 className="text-xs w-[55%] mr-64">Образовательные услуги оказываются АНО ДПО «Образовательные технологии Яндекса» на основании Лицензии № Л035-01298-77/00185314 от 24 марта 2015 года. © 2024 ООО «Яндекс», АНО ДПО «Образовательные технологии Яндекса».</h1>
                        <img 
                            src={contacts} 
                            alt="contacts" 
                            className="object-cover sm:w-[360px] sm:h-[346px] md:w-[750px] md:h-[380px] lg:w-[525px] lg:h-[570px] xl:w-[630px] xl:h-[700px] 2xl:w-[860px] 2xl:h-[860px] 3xl:h-[40px] 3xl:w-[120px] rounded-3xl" 
                            style={{ objectFit: 'cover' }} 
                        />
                        <div className="ml-8 bg-black text-white text-xs flex justify-center items-center w-[200px] h-[40px]">Подписаться на рассылку</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
