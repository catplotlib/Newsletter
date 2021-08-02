import React from "react";
import axios from "axios";
import { useState } from "react";
import Loader from "react-loader-spinner";
const Hero = () => {
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(mail);
    setLoading(true);
    axios
      .post("http://localhost:8000/wel/", { mail })
      .then((response) => {
        setLoading(false);
        console.log(response.status);
        setMessage("You are now subscribed!");
      })
      .catch((error) => {
        console.log(error.response);
        setMessage("Invalid entry");
      });

    setMail("");
  };

  return (
    <>
      <div className="min-h-screen py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">
                  Subscribe to my Mailing List
                </h1>
              </div>
              <div className="divide-y divide-gray-200">
                <form action="" method="POST" onSubmit={handleSubmit}>
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="email"
                        name="email"
                        type="email"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Email address"
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                      />
                      <label
                        htmlFor="email"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Email Address
                      </label>
                    </div>
                    <div className="flex flex-row justify-between">
                      <div className="relative">
                        <button className="bg-gray-500 text-white rounded-md px-2 py-1">
                          Submit
                        </button>
                      </div>
                      {loading ? (
                        <Loader
                          type="ThreeDots"
                          color="#6B7280"
                          height="100"
                          width="100"
                          timeout="2000"
                        />
                      ) : (
                        <h1>{message}</h1>
                      )}
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
