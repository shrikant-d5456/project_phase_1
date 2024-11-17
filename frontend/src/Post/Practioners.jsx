import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { URL } from '../url';
import { BsFiletypePdf } from 'react-icons/bs';

const Practioners = () => {
    const [file, setFile] = useState(null);
    const [files, setFiles] = useState([]);
    const [filteredFiles, setFilteredFiles] = useState([]); // Filtered files based on category
    const [category, setCategory] = useState('All'); // Selected category

    const fetchFiles = async () => {
        try {
            const res = await axios.get(`${URL}/api/files`);
            setFiles(res.data);
            setFilteredFiles(res.data); // Initially show all files
        } catch (err) {
            console.error('Error fetching files:', err);
        }
    };

    useEffect(() => {
        fetchFiles();
    }, []);

    // Filter files when category changes
    useEffect(() => {
        if (category === 'All') {
            setFilteredFiles(files);
        } else {
            setFilteredFiles(files.filter(file => file.metadata?.category === category));
        }
    }, [category, files]);

    const handleOpenPDF = (filename) => {
        window.open(`${URL}/api/files/${filename}`, '_blank');
    };

    const handleDownload = async (filename) => {
        try {
            const res = await axios.get(`${URL}/api/files/${filename}`, {
                responseType: 'blob',
            });

            const url = window.URL.createObjectURL(new Blob([res.data]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
            link.remove();
        } catch (err) {
            console.error('Error downloading file:', err);
        }
    };

    const handleDelete = async (fileId) => {
        try {
            await axios.delete(`${URL}/api/files/${fileId}`);
            alert('File deleted successfully');
            fetchFiles(); // Refresh the file list after deletion
        } catch (err) {
            console.error('Error deleting file:', err);
            alert('Error deleting file');
        }
    };

    return (
        <div className="flex my-4 items-center justify-center flex-col w-full flex-wrap">
            <h1 className="text-2xl font-semibold my-2">Files</h1>
            <hr className="my-4 border-2" />

            {/* Category Buttons */}
            <div className="flex space-x-4 mb-6">
                {['All', '1st Year', '2nd Year', '3rd Year', '4th Year'].map(cat => (
                    <button
                        key={cat}
                        onClick={() => setCategory(cat)}
                        className={`px-4 py-2 rounded-md ${
                            category === cat ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Files */}
            {filteredFiles.length > 0 ? (
                <div className="flex gap-2 flex-wrap">
                    {filteredFiles.map((file) => (
                        <div
                            key={file._id}
                            className="flex flex-col items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md"
                        >
                            <div className="flex flex-col items-center space-x-3">
                                <span className="text-8xl p-4">
                                    <BsFiletypePdf />
                                </span>
                                <span className="font-semibold text-[11px]">{(file.filename).substring(0, 20)}..</span>
                            </div>
                            <div className="flex space-x-2 my-2 text-sm">
                                <button
                                    onClick={() => handleOpenPDF(file.filename)}
                                    className="bg-blue-500 text-white px-4 py-1 rounded-md"
                                >
                                    Open
                                </button>
                                <button
                                    onClick={() => handleDownload(file.filename)}
                                    className="bg-green-500 text-white px-4 py-1 rounded-md"
                                >
                                    Download
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No files found for {category}.</p>
            )}
        </div>
    );
};

export default Practioners;
