import emailjs from "@emailjs/browser";

const MailForm = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8fnq8w6",
        "template_7wzjscb",
        e.target,
        "_1zpiNRcVtxYqiVNC"
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  return (
    <div className="flex flex-col justify-center items-center w-full">
      <h2 className="text-3xl text-zinc-800">Send an E-mail</h2>
      <form onSubmit={sendEmail} className="flex flex-col w-full gap-4">
        <label className="text-xl">E-mail</label>
        <input
          type="text"
          name="email"
          className="rounded-md border-2 border-gray-800 blockpx-2 h-12 outline-none focus:border-blue-400`"
        />
        <label className="text-xl">Subject</label>
        <input
          type="text"
          name="subject"
          className="rounded-md border-2 border-gray-800 blockpx-2 h-12 outline-none focus:border-blue-400`"
        />
        <label className="text-xl">Message</label>
        <textarea
          name="message"
          id=""
          cols="10"
          className="rounded-md border-2 border-gray-800 blockpx-2 h-60 outline-none focus:border-blue-400`"
        />
        <button className="bg-sky-700 text-white rounded overflow-hidden px-16 py-3 active:translate-y-1 active:shadow-2xl shadow-sky-600 hover:bg-sky-600">
          Send
        </button>
      </form>
    </div>
  );
};

export default MailForm;
