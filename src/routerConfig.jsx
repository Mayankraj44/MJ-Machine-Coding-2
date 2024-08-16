import { createBrowserRouter } from "react-router-dom";
import RandomUser from "./components/random-user/RandomUser";
import RandomJokes from "./components/random-jokes/RandomJokes";
import CatListing from "./components/cat-listing/CatListing";


export const routerConfig = createBrowserRouter([

    {
        path: "/",
        element: <RandomUser />,
    },
    {
        path: "/random-user",
        element: <RandomUser />,
    },
    {
        path: "/random-jokes",
        element: <RandomJokes />,
    },
    {
        path: "/cats-listing",
        element: <CatListing />,
    },

]);
