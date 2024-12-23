import { useForm } from "react-hook-form";

const ContactForm = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data); // Log form data to the console
    reset(); // Reset the form after submission
  };

  return (
    <div
      className="bg-black text-white p-8 w-full lg:w-1/2"
      style={{
        boxShadow: "0 0 10px cyan",
        clipPath: "polygon(0 0, 95% 0, 100% 50%, 95% 100%, 0 100%)",
      }}
    >
      <h2 className="text-4xl font-bold text-cyan-400 mb-6">GET IN TOUCH</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex space-x-4">
          <input
            {...register("firstName")}
            type="text"
            placeholder="First Name"
            className="w-1/2 p-2 bg-transparent border-b-2 outline-none focus:border-cyan-400"
          />
          <input
            {...register("lastName")}
            type="text"
            placeholder="Last Name"
            className="w-1/2 p-2 bg-transparent border-b-2 outline-none focus:border-cyan-400"
          />
        </div>
        <div className="flex space-x-4">
          <input
            {...register("email")}
            type="email"
            placeholder="Email Address"
            className="w-1/2 p-2 bg-transparent border-b-2 outline-none focus:border-cyan-400"
          />
          <input
            {...register("phone")}
            type="text"
            placeholder="Phone Number"
            className="w-1/2 p-2 bg-transparent border-b-2 outline-none focus:border-cyan-400"
          />
        </div>
        <textarea
          {...register("message")}
          placeholder="Enter your message"
          rows="4"
          className="w-full p-2 bg-transparent border-2 outline-none focus:border-cyan-400"
        ></textarea>
        <button
          type="submit"
          className="w-full border-2 py-2 hover:bg-cyan-400 hover:text-black transition"
        >
          SEND MESSAGE
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

  