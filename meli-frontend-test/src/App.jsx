import { Routes, Route } from "react-router-dom"

import { MainLayout } from "./layouts";
import { HomePage, SearchPage } from "./pages"

function App() {

  return <>
   <MainLayout>

    <Routes>

      <Route path="/" element={ <HomePage /> }/>
      <Route path="/items/*" element={ <SearchPage /> }/>

    </Routes>
    
   </MainLayout>
  </>

}

export default App
