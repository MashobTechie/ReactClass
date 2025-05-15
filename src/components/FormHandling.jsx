import React, { useState } from 'react';

const FormHandling = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');

    const handleSubmit = (e) => {
        e.preventDefault();

        const blog = { title, body, author }

        console.log(blog);


    }

    return (
        <div className="max-w-md m-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Add BLOG</h2>

            <form className="space-y-4">
                <div className="space-y-2">
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">Blog Title:</label>
                    <input
                        type="text"
                        id="title"
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </div>

                <div className="space-y-2">
                    <label htmlFor="body" className="block text-sm font-medium text-gray-700">Blog Body:</label>
                    <textarea
                        name="body"
                        id="body"
                        required
                        rows="5"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

                        value={body}
                        onChange={(e) => {
                            setBody(e.target.value)
                        }}
                    ></textarea>
                </div>

                <div className="space-y-2">
                    <label htmlFor="author" className="block text-sm font-medium text-gray-700">Blog Author:</label>
                    <select
                        name="author"
                        id="author"
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"

                        value={author}
                        onChange={
                            (e) => {
                                setAuthor(e.target.value)
                            }
                        }
                    >
                        <option value="Mario">Mario</option>
                        <option value="Billy">Billy</option>
                    </select>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"

                    onClick={handleSubmit}
                >
                    Submit
                </button>
            </form>
        </div>
    )
}

export default FormHandling;