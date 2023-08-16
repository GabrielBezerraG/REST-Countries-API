import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import DetailsPage from "./pages/DetailsPage";
import DefaultPage from './pages/DefaultPage';

export default function Router() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path="/" element={<DefaultPage />} >
               <Route index element={<Home />} />
               <Route path="details/:id" element={<DetailsPage />} />
            </Route>
         </Routes>
      </BrowserRouter>
   )
}