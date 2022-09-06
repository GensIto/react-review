import { Route, Routes } from "react-router-dom";
import Home from "../page/home";
import ReactQuery from "../page/react-query";
import Page404 from "../page/404";

export default function Router() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/react-query' element={<ReactQuery />} />
        <Route path='*' element={<Page404 />} />
      </Routes>
    </>
  );
}

// もしサブドメでデプロイしたかったらpath='/'にドメイン名にする
// ~~~.com/dist/ のdist追加し -> path='/dist'
