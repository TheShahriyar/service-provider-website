import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import NotFound from "./components/NotFount/NotFount";
import Checkout from "./pages/Checkout";
import RequireAuth from "./components/RequireAuth/RequireAuth";
import ResetPassword from "./components/ResetPassword/ResetPassword";
import OrderConfirm from "./components/OrderConfirm/OrderConfirm";
import Blog from "./pages/Blog";
import ServiceDetails from "./components/Services/ServiceDetails";
import AddService from "./pages/AddService";
import Services from "./pages/Services";

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
        <Route
          path="/about"
          element={
            <RequireAuth>
              <About />
            </RequireAuth>
          }
        ></Route>
        <Route path="/blog" element={<Blog />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/services" element={<Services />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/registration" element={<Registration />}></Route>
        <Route path="/reset-password" element={<ResetPassword />}></Route>
        <Route path="/service/:serviceID" element={<ServiceDetails />}></Route>
        <Route
          path="/addservice"
          element={
            <RequireAuth>
              <AddService />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/checkout/:serviceID"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/order-confirm"
          element={
            <RequireAuth>
              <OrderConfirm />
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
