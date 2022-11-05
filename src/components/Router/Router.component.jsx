import { Route, Routes } from "react-router-dom";
import { Home } from "./pages-route";
import HomeProvider from "../context/HomeProvider.component";

export default function Router() {
  return (
    <Routes>
      <HomeProvider>
      <Route path="/" element={<Home/>} />
      </HomeProvider>
      <Route path="*" element={<PageError />} />
    </Routes>
  );
}