import React, { useState } from 'react';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="flex items-center justify-center h-[600px] bg-gray-100">
            <div className="w-9/12 max-w-md px-4 py-8 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">Login</h2>
                <form className='mx-8' onSubmit={handleSubmit}>
                    <div className="mb-4  flex-col">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email Address</label>
                        <input type="email" id="email" name="email" value={email} onChange={handleEmailChange} className="w-full px-3 py-2 mt-2 text-sm border border-gray-600 rounded-md focus:outline-none focus:border-gray-300" required />
                    </div>
                    <div className="mb-6 flex-col">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
                        <input type="password" id="password" name="password" value={password} onChange={handlePasswordChange} className="w-full px-3 py-2 mt-2 text-sm border border-gray-600 rounded-md focus:outline-none focus:border-gray-300" required />
                    </div>
                    <div className="flex items-center justify-center w-full">
                        <button type="submit" className="w-52 px-4 py-2 text-sm font-medium text-white bg-sky-600 rounded-md hover:bg-indigo-500 focus:outline-none focus:bg-indigo-500 ">Login</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginForm;
