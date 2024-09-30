import Copyright from "./components/Copyright";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Introduction from "./components/Introduction";
import Navbar from "./components/Navbar";
import ReservationForm from "./components/ReservationForm";
import "./css/fontawesome-all.css";
import "./css/magnific-popup.css";
import "./css/styles.css";

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <Introduction />
      <ReservationForm />
      <Footer />
      <Copyright />
    </div>
  );
}

export default App;
