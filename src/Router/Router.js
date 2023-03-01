import React from "react";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import ComplexCounter from "../Components/ComplexCounter";
import Counter from "../Components/Counter";
import CounterGlobal from "../Components/CounterGlobal";
import CounterThree from "../Components/CounterThree";
import DataFetch from "../Components/DataFetch";
import DataFetch2 from "../Components/DataFetch2";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Counter></Counter>
          <ComplexCounter></ComplexCounter>
        </>
      ),
    },
    {
      path: "/home",
      element: (
        <>
          <Counter></Counter>
          <ComplexCounter></ComplexCounter>
        </>
      ),
    },
    {
      path: "/advanced",
      element: (
        <>
          <CounterThree></CounterThree>
        </>
      ),
    },
    {
      path: "/global",
      element: (
        <>
          <CounterGlobal></CounterGlobal>
        </>
      ),
    },
    {
      path: "/datafetch",
      element: (
        <>
          <DataFetch></DataFetch>
          <DataFetch2></DataFetch2>
        </>
      ),
    },
    {
      path: "*",
      element: (
        <>
          <h1>404: Not Found</h1>
          <Link to="/">Return Home</Link>
        </>
      ),
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};

export default Router;
