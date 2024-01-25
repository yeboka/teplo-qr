import React from 'react';
import {useParams} from 'react-router-dom';
import boxes from '../../boxes.json'

function Box() {

    const params = useParams();

    const box = boxes.filter((box) => (box.name === params.name))[0];

    return (
        <div className="flex flex-col items-center m-3 bg-[#EAE7DC] border border-[#E98074] rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                 src="/docs/images/blog/image-4.jpg" alt="" />
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#E85A4F]">
                    {box.name}
                </h5>
                <p className="mb-3 font-normal text-gray-700">
                    {box.description}
                </p>
                <form className="space-y-6" action="#">
                    <h5 className="text-xl font-medium text-[#E85A4F]">Сообщите нам если бокс заполнен!</h5>
                    <div>
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#E85A4F] ">
                            Введите номер или почту
                        </label>
                        <input type="email" name="email" id="email"
                               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                               placeholder="name@company.com" required/>
                    </div>
                    <button type="submit"
                            className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Сообщить о заполненности
                    </button>
                </form>
            </div>
        </div>
);
}

export default Box;