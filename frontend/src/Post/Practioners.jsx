import React, { useEffect, useState } from "react";
import axios from "axios";
import { URL } from "../url";
import { BsFiletypePdf } from "react-icons/bs";
import { Link } from "react-router-dom";

const Practioners = () => {
  const [file, setFile] = useState(null);
  const [files, setFiles] = useState([]);
  const [filteredFiles, setFilteredFiles] = useState([]); // Filtered files based on category
  const [category, setCategory] = useState("All"); // Selected category

  const fetchFiles = async () => {
    try {
      const res = await axios.get(`${URL}/api/files`);
      setFiles(res.data);
      setFilteredFiles(res.data); // Initially show all files
    } catch (err) {
      console.error("Error fetching files:", err);
    }
  };

  useEffect(() => {
    fetchFiles();
  }, []);

  // Filter files when category changes
  useEffect(() => {
    if (category === "All") {
      setFilteredFiles(files);
    } else {
      setFilteredFiles(
        files.filter((file) => file.metadata?.category === category)
      );
    }
  }, [category, files]);

  const handleOpenPDF = (filename) => {
    window.open(`${URL}/api/files/${filename}`, "_blank");
  };

  const handleDownload = async (filename) => {
    try {
      const res = await axios.get(`${URL}/api/files/${filename}`, {
        responseType: "blob",
      });

      const url = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", filename);
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (err) {
      console.error("Error downloading file:", err);
    }
  };

  const handleDelete = async (fileId) => {
    try {
      await axios.delete(`${URL}/api/files/${fileId}`);
      alert("File deleted successfully");
      fetchFiles(); // Refresh the file list after deletion
    } catch (err) {
      console.error("Error deleting file:", err);
      alert("Error deleting file");
    }
  };

  return (
    <>
      <div className="flex lg:justify-center justify-between lg:px-0 px-4 items-center p-2 text-[#284525] lg:gap-20 gap-4 list-none border-[1px] border-t-gray-200 border-b-gray-200 overflow-scroll shadow-md">
        <Link to="/">
          <li className="hover:text-green lg:tracking-widest lg:uppercase">
            Home
          </li>
        </Link>
        <a href="#post">
          <li className="hover:text-green lg:tracking-widest lg:uppercase">
            Post
          </li>
        </a>
        <a>
          {" "}
          <li className="hover:text-green lg:tracking-widest lg:uppercase">
            Plant Information
          </li>
        </a>
        <Link to="/practitioner">
          <li className="hover:text-green lg:tracking-widest lg:uppercase">
            Practioner's
          </li>
        </Link>
        <a href="#service">
          <li className="hover:text-green lg:tracking-widest lg:uppercase">
            Service
          </li>
        </a>
      </div>
      <div className="flex my-4 items-center justify-center flex-col w-full flex-wrap">
        <h1 className="text-2xl font-semibold my-2">Files</h1>
        <hr className="my-4 border-2" />

        {/* Category Buttons */}
        <div className="flex  mb-6">
          {["All", "1st Year", "2nd Year", "3rd Year", "4th Year"].map(
            (cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-1 border-[1px] border-gray-100 ${
                  category === cat
                    ? "bg-green-500 text-white transition-all"
                    : "bg-gray-200 text-gray-700"
                }`}
              >
                {cat}
              </button>
            )
          )}
        </div>

        {/* Files */}
        {filteredFiles.length > 0 ? (
          <div className="flex justify-center items-center m-auto gap-2 flex-wrap">
            {filteredFiles.map((file) => (
              <div
                key={file._id}
                className="flex flex-col items-center justify-between p-4 bg-gray-100 rounded-lg shadow-md"
              >
                <div className="flex flex-col items-center space-x-3">
                  <span className="text-8xl p-4">
                    <BsFiletypePdf />
                  </span>
                  <span className="font-semibold text-[11px]">
                    {file.filename.substring(0, 20)}..
                  </span>
                </div>
                <div className="flex space-x-2 my-2 text-sm">
                  <button
                    onClick={() => handleOpenPDF(file.filename)}
                    className="bg-green-500 text-white px-4 py-1 "
                  >
                    Open
                  </button>
                  <button
                    onClick={() => handleDownload(file.filename)}
                    className=" border-[1px] border-green-500  px-4 py-1 "
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
    </>
  );
};

export default Practioners;
