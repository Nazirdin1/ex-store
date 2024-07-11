import React from 'react';
import SideImage from "../../assets/sign-up-fon.png"
import { Link } from 'react-router-dom';
const url = "https://api.escuelajs.co/api/v1/users/";

export default function FormExample({ setIsSuccess }) {

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        const form = evt.target;
        const data = {};
        const formData = new FormData(form);
        for (const [key, value] of formData) {
            data[key] = value;
        }
        const req = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });
        if (req.ok === true && req.status === 201) {
            setIsSuccess(true);
        }
        const response = await req.json();
        console.log(response);
    };

    return (
        <>

            <div className="container m-auto flex">
                <img src={SideImage} alt="" />
                <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
                    <h2 className=" sm:mx-auto sm:w-full sm:max-w-sm mt-10  text-2xl font-bold leading-9 tracking-tight text-gray-900">
                        Create an account
                    </h2>
                    <p className="sm:mx-auto sm:w-full sm:max-w-sm mt-10 text-start text-sm leading-9 tracking-tight t">Enter your details below</p>
                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                        <form className="space-y-6" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Username
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="name"
                                        name="name"
                                        type="text"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                                        Password
                                    </label>
                                   
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="avatar" className="block text-sm font-medium leading-6 text-gray-900">
                                    User avatar
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="avatar"
                                        name="avatar"
                                        type="url"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Register
                                </button>
                            </div>
                        </form>

                        <p className="mt-10 text-center text-sm text-gray-500">
                            Already have account?
                            <Link
                                to="/login"
                              
                                className="ml-3 font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                            >
                                Login
                            </Link>

                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}