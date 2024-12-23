import ContactForm from "./components/ContactForm";
import ContactInfo from "./components/ContactInfo";

function App() {
  return (
    <div
      className="min-h-screen flex flex-col lg:flex-row justify-center items-center"
      style={{
        backgroundImage: "url('/src/assets/Contact-bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="flex flex-col lg:flex-row shadow-2xl w-11/12 lg:w-3/4">
        <ContactForm />
        <ContactInfo />
      </div>
    </div>
  );
}

export default App;

