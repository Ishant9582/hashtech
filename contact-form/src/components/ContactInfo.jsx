const ContactInfo = () => {
    return (
      <div
        className="bg-yellow-500 text-black p-8 w-full lg:w-1/2"
        style={{
          clipPath: "polygon(5% 0, 100% 0, 100% 100%, 5% 100%, 0 50%)",
        }}
      >
        <h2 className="text-4xl font-bold mb-6">CONTACT INFO</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold">📍 FIND US</h3>
            <p>Dean Office, USICT, GGSIPU Sector 16C, Dwarka, Delhi</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold">📞 CALL US</h3>
            <a
              href="tel:01125532553"
              className="text-blue-600 hover:text-blue-800"
            >
              011-2553-2553
            </a>
          </div>
          <div>
            <h3 className="text-xl font-semibold">✉️ MAIL US</h3>
            <a
              href="mailto:info@usict.acm.org"
              className="text-blue-600 hover:text-blue-800"
            >
              info@usict.acm.org
            </a>
          </div>
        </div>
      </div>
    );
  };
  
  export default ContactInfo;
  