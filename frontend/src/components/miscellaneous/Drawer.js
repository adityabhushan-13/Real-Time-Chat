import React from "react";
import "./drawer.css";

const Drawer = ({ isOpen, onClose, searchLoader }) => {
  if (!isOpen) {
    return null;
  }
  return (
    <div
      className="fixed left-0 top-0 h-full bg-green-400 text-white w-96 p-4 "
      style={{ borderRadius: 10 }}
    >
      <div>
        <button onClick={onClose}>
          <i class="fa-solid fa-caret-left"></i>
        </button>
      </div>
      <h5 className="text-2xl font-bold mb-4">
        Search for friends, family contacts...
      </h5>
      <div>
        <div class="md:flex md:items-center mb-6">
          <div class="md:w-2/3">
            <input
              class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
              id="inline-full-name"
              type="text"
              value="Enter Search"
              onChange={(e) => searchLoader}
            />
          </div>
          <div className="px-2">
            <button
              class="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
            >
              Go
            </button>
          </div>
        </div>
        <div>
          <div class="animate-pulse">
            <div class="h-12 bg-gray-300 rounded-xl mb-4"></div>
            <div class="h-12 bg-gray-300 rounded-xl mb-4"></div>
            <div class="h-12 bg-gray-300 rounded-xl mb-4"></div>
            <div class="h-12 bg-gray-300 rounded-xl mb-4"></div>
            <div class="h-12 bg-gray-300 rounded-xl mb-4"></div>
            <div class="h-12 bg-gray-300 rounded-xl mb-4"></div>
            <div class="h-12 bg-gray-300 rounded-xl mb-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Drawer;