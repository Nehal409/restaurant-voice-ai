const ReservationForm = () => {
  return (
    <div id="contact" className="py-16 text-center">
      <div className="container mx-auto px-4 sm:px-8 xl:px-4">
        <div className="card mx-auto max-w-3xl p-8 bg-blue-50 border border-gray-200 shadow-md rounded-lg">
          <div className="card-body">
            <h5 className="text-2xl font-bold mb-4 text-center">
              Book Your Reservation
            </h5>
            <p className="mb-8 text-center">
              Please fill out the form below to book a reservation through
              Ehsaan Voice AI. Our AI voice agent will contact you shortly to
              confirm the details.
            </p>
            <form id="contactForm">
              <div className="mb-6">
                <label
                  htmlFor="phone"
                  className="block text-gray-700 text-left mb-2"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  id="phone"
                  placeholder="Enter your phone number"
                  required
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-left mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                  id="email"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500"
                >
                  Book Reservation
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationForm;
