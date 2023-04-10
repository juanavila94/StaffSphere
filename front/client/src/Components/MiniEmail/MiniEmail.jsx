import { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { cleanArrayEmails } from "../../state/redux/actions/actions";
import { BsFillCheckCircleFill } from "react-icons/bs";

const MiniEmail = () => {
  const dispatch = useDispatch();

  const [to, setTo] = useState("");
  const [subject, setSubject] = useState("");
  const [text, setText] = useState("");

  const [error, setError] = useState({});
  const [sent, setSent] = useState(false);

  const validateEmail = (email) => {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  };

  const validateForm = () => {
    const errors = {};

    if (!validateEmail(to)) {
      errors.to = "Invalid e-mail address";
    }

    if (subject.trim() === "") {
      errors.subject = "Subject is required";
    }

    if (text.trim() === "") {
      errors.text = "Message is required";
    }

    setError(errors);

    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        //SWITCH FOR LOCAL OR DEPLOYMENT
        await axios.post("http://localhost:3001/notifications", {
          // await axios.post("/notifications", {
          to,
          subject,
          text,
        });

        setSent(true);
        setTimeout(function() {
          setSent(false);
        }, 2000);
        setError({});
        setTo("");
        setSubject("");
        setText("");
      } catch (error) {
        setError("The email could not be sent");
      }
    }
  };

  useEffect(() => {
    return () => {
      dispatch(cleanArrayEmails());
    };
  }, []);

  return (
    <div className=" border bg-white rounded-md w-full h-auto p-5 shadow-2xl flex flex-col">
      <h2 className="mb-5 font-medium">Send E-mail</h2>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col items-end justify-center gap-2 w-full h-auto"
      >
        <div className=" relative border-b   p-3  break-all flex flex-col gap-2 w-full">
          <input
            placeholder="Insert e-mail"
            type="text"
            value={to}
            onChange={(e) => setTo(e.target.value)}
            className="bg-transparent outline-none"
          />
        </div>
        <div className=" relative border-b   p-3  break-all flex flex-col gap-2 w-full">
          <input
            placeholder="Insert subject"
            type="text"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="bg-transparent outline-none"
          />
        </div>
        <div className=" relative border-b   p-3  break-all flex flex-col gap-2 w-full">
          <textarea
            placeholder="Insert message"
            value={text}
            onChange={(e) => setText(e.target.value)}
            cols="5"
            rows="2"
            className="bg-transparent resize-none outline-none"
          />
        </div>
        <div className="flex flex-row items-start justify-start gap-6">
          {sent && (
            <p className="flex items-center justify-center font-semibold text-1xl text-green-700 pt-4">
              <BsFillCheckCircleFill />
            </p>
          )}
          <button
            type="submit"
            className=" text-sky-400 border border-sky-400 rounded overflow-hidden px-8 py-2 active:translate-y-1 active:shadow-2xl shadow-sky-200 hover:bg-sky-300 hover:text-white text-xs mt-2"
          >
            SEND
          </button>
        </div>
      </form>
    </div>
  );
};

export default MiniEmail;
