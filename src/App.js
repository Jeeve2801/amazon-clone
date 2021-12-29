import React, { useEffect } from "react";
import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Payment from "./Payment";
import Orders from "./Orders";

const promise = loadStripe(
  "pk_test_51KBc6ISBgtls5DFAbxSVU5kCUKqCMG3MRhdz2Cni3bGSlZ4OAb0YocA5LJUKtBiSpbN5f8kaBc2hD4doUhO0XCJA00YG4ROF47"
);

const App = () => {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        // the user just logged in / the use was logged in
        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/checkout" element={<Checkout />} />

      <Route
        path="/payment"
        element={
          <Elements stripe={promise}>
            <Payment />
          </Elements>
        }
      ></Route>
      <Route path="/orders" element={<Orders />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
