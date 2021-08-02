import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const Subscribers = () => {
  const [mails, setMails] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8000/wel/")
      .then((response) => setMails(response.data));
  }, []);

  return (
    <div>
      <div className="m-3">
        <ul className="w-full rounded-lg mt-2 mb-3 text-blue-800">
          {mails.map((mail) => {
            return (
              <li className=" mb-1 w-fill flex p-3 pl-3 bg-gray-100 hover:bg-gray-200 rounded-lg">
                <span
                  className="ml-2 truncate"
                  title="Test with a very really long name (resize the browser to see it truncate)"
                >
                  {mail.mail}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Subscribers;
