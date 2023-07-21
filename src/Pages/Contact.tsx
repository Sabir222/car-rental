const Contact = () => {
  return (
    <div className="min-h-[100vh]  ">
      <div className="min-h-screen max-w-[1400px]  absolute md:static top-[150px] left-6  mx-auto flex items-center justify-center  p-6">
        <div className="p-2 bg-white shadow-xl md- rounded-xl md:p-8">
          <div className="flex flex-col items-center justify-center">
            <p className="text-4xl text-blue-700 ">Contact Us</p>
            <p className="text-gray-700 text-md text-center w-[70%] mb-5">
              Got a technical issue? Want to send feedback about a beta feature?
              Need details about our Business plan? Let us know.
            </p>
          </div>
          <form action="">
            <div className="flex flex-col px-4 mb-4">
              <p className="font-semibold">Your Email</p>
              <input
                type="email"
                placeholder="Email"
                className="rounded-lg bg-[#F6F7F9]"
              />
            </div>
            <div className="flex flex-col px-4 mb-4">
              <p className="font-semibold">Subject</p>
              <input
                type="text"
                className="rounded-lg bg-[#F6F7F9]"
                placeholder="How can we help you ?"
              />
            </div>
            <div className="flex flex-col px-4">
              <p className="font-semibold">Your message</p>
              <textarea
                placeholder="Write you message here..."
                cols={30}
                rows={8}
                className="rounded-lg bg-[#F6F7F9] mb-4"
              ></textarea>
            </div>
            <div className="px-6 mb-4">
              <button className="py-3 font-medium text-white bg-blue-600 rounded-lg px-11">
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
