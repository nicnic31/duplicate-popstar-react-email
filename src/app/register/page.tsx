"use client";
import { useState } from "react";

export default function Register() {
  const [details, setDetails] = useState({
    name: "",
    email: "",
  });

  const handleSubmit = (e: any) => {
    console.log("details", details);
    e.preventDefault();
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-center">
        <h6 className="font-bold text-3xl my-2">Registration</h6>
        <p className="text-sm ">Enter your name and email</p>
        <form className="my-5" onSubmit={handleSubmit}>
          <div className="flex flex-col justify-space-between">
            <input
              className="text-sm w-[500px] rounded py-2 px-4 outline outline-gray-300 my-2"
              placeholder="Enter your name"
              value={details.name}
              onChange={(e) =>
                setDetails((prev) => ({ ...prev, name: e.target.value }))
              }
            />
            <input
              className="text-sm w-[500px] rounded py-2 px-4 outline outline-gray-300 my-2"
              placeholder="example@email.com"
              onChange={(e) =>
                setDetails((prev) => ({ ...prev, email: e.target.value }))
              }
            />
            <button
              type="submit"
              className="w-full text-sm bg-slate-300 my-4 rounded p-3 text-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-slate-500 duration-300"
              value={details.email}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
