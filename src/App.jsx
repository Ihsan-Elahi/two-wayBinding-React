
import React, { useState } from "react";

const App = () => {
  const [title, settitle] = useState("");
  const [text, settext] = useState("");
  const [task, settask] = useState([]);

  function submitForm(e) {
    e.preventDefault();

    const copyTask = [...task];

    copyTask.push({ title, text });

    settask(copyTask);

    settitle("");
    settext("");
  }

  const deleteNode = (idx) => {
    const copytask = [...task];

    copytask.splice(idx, 1);

    settask(copytask);
  };

  return (
    <div className="min-h-screen lg:flex bg-gray-100 p-4 sm:p-6 lg:p-8 gap-6">
      
      <form
        onSubmit={submitForm}
        className="flex flex-col w-full lg:w-1/2 items-center p-5 sm:p-6 bg-white rounded-2xl shadow-md gap-5"
      >
        <p className="text-2xl font-bold">Add Note</p>

        <input
          type="text"
          placeholder="Enter Your Name"
          className="px-5 py-3 w-full font-medium border rounded-lg outline-none focus:ring-2 focus:ring-black"
          value={title}
          onChange={(e) => {
            settitle(e.target.value);
          }}
        />

        <textarea
          placeholder="Write Details"
          className="px-5 py-3 w-full min-h-32 font-medium border rounded-lg outline-none resize-none focus:ring-2 focus:ring-black"
          value={text}
          onChange={(e) => {
            settext(e.target.value);
          }}
        ></textarea>

        <button
          type="submit"
          className="bg-black text-white w-full font-bold rounded-xl py-3 px-5 active:bg-gray-700 hover:bg-gray-800 transition"
        >
          Submit
        </button>
      </form>

      <div className="w-full lg:w-1/2 p-5 sm:p-6 bg-white rounded-2xl shadow-md">
        
        <h1 className="font-bold text-2xl mb-5">
          Your Notes
        </h1>

        <div className="flex flex-wrap gap-5">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="relative w-full sm:w-48 h-60 font-bold text-black rounded-xl bg-cover bg-center pt-10 pb-4 px-4 text-center shadow-md"
                style={{
                  backgroundImage:
                    "url('https://img.magnific.com/free-psd/paper-cut-design-element_23-2151964044.jpg?semt=ais_hybrid&w=740&q=80')",
                }}
              >
                <h3 className="text-xl mt-3 font-bold leading-tight break-words">
                  {elem.title}
                </h3>

                <p className="leading-tight mt-3 break-words">
                  {elem.text}
                </p>

                <button
                  type="button"
                  className="absolute bottom-4 left-4 right-4 px-4 py-2.5 rounded-xl bg-red-700 text-white hover:bg-red-800 transition"
                  onClick={() => {
                    deleteNode(idx);
                  }}
                >
                  Delete
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default App;
