import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";

const Report = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <div className=" mt-[-800px]">
      <div
        {...getRootProps()}
        className="sm:ml-[250px] sm:pt-[130px] ml-[200px] pt-[150px]"
      >
        <input {...getInputProps()} />
        {isDragActive ? (
          <div className=" h-[50px] w-[300px] bg-[#7b8cea] rounded-lg text-center shadow-card">
            <p className=" font-semibold">Drop it here!</p>
          </div>
        ) : (
          <div className=" h-[50px] w-[300px] bg-[#7b8cea] rounded-lg text-center shadow-2xl">
            <p className=" font-semibold">
              Drag your reports here oor Click here
            </p>
          </div>
        )}
      </div>

      <div className=" bg-slate-200 shadow-2xl rounded-2xl h-max w-[1100px] sm:ml-[280px] mt-[60px] grid grid-cols-3">
        <div class="container mx-4 my-4">
          <div class="w-64 border">
            <img
              src="https://via.placeholder.com/150"
              class="w-full"
              alt="..."
            />
            <div class="p-4">
              <h5 class="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
                Test Name
              </h5>
              <p>
                Test Details or Overview recived from the backend
              </p>
              <a
                href="#"
                class="bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
        <div class="container mx-4 my-4">
          <div class="w-64 border">
            <img
              src="https://via.placeholder.com/150"
              class="w-full"
              alt="..."
            />
            <div class="p-4">
              <h5 class="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
                Test Name
              </h5>
              <p>
                Test Details or Overview recived from the backend
              </p>
              <a
                href="#"
                class="bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
        <div class="container mx-4 my-4">
          <div class="w-64 border">
            <img
              src="https://via.placeholder.com/150"
              class="w-full"
              alt="..."
            />
            <div class="p-4">
              <h5 class="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
                Test Name
              </h5>
              <p>
                Test Details or Overview recived from the backend
              </p>
              <a
                href="#"
                class="bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
        


        <div class="container mx-4 my-4">
          <div class="w-64 border">
            <img
              src="https://via.placeholder.com/150"
              class="w-full"
              alt="..."
            />
            <div class="p-4">
              <h5 class="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
                Test Name
              </h5>
              <p>
                Test Details or Overview recived from the backend
              </p>
              <a
                href="#"
                class="bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
        <div class="container mx-4 my-4">
          <div class="w-64 border">
            <img
              src="https://via.placeholder.com/150"
              class="w-full"
              alt="..."
            />
            <div class="p-4">
              <h5 class="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
                Test Name
              </h5>
              <p>
                Test Details or Overview recived from the backend
              </p>
              <a
                href="#"
                class="bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
        <div class="container mx-4 my-4">
          <div class="w-64 border">
            <img
              src="https://via.placeholder.com/150"
              class="w-full"
              alt="..."
            />
            <div class="p-4">
              <h5 class="text-sm text-gray-500 font-bold tracking-widest mb-2 uppercase">
                Test Name
              </h5>
              <p>
                Test Details or Overview recived from the backend
              </p>
              <a
                href="#"
                class="bg-green-500 hover:bg-green-400 text-white px-4 py-2 inline-block mt-4 rounded"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Report;
