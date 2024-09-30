import heroLogo from "../assets/images/chef-cartoon-png-clipart-removebg-preview.png";

const Header = () => {
  return (
    <header
      id="header"
      className="header py-28 text-center md:pt-36 lg:text-left xl:pt-44 xl:pb-32"
    >
      <div className="container px-4 sm:px-8 lg:grid lg:grid-cols-2 lg:gap-x-8">
        <div className="mb-16 lg:mt-32 xl:mt-40 xl:mr-12">
          <h1 className="h1-large mb-5">Ehsaan Restaurant</h1>
          <p className="p-large mb-8">
            Welcome to Ehsaan restaurant. Reserve your table effortlessly. We
            are here to help you find the perfect dining time.
          </p>
          <a className="btn-solid-lg" href="#contact">
            Book Your Reservation
          </a>
        </div>
        <div className="xl:text-right">
          <img className="inline" src={heroLogo} alt="alternative" />
        </div>
      </div>
    </header>
  );
};

export default Header;
