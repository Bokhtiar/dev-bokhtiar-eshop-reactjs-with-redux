import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from "../src/Components/Admin/Layouts/Navbar"
import Sidebar from "../src/Components/Admin/Layouts/Sidebar"
import Home from "../src/Components/Admin/Home"



// admin dashboard css file links
import './assets/admin/assets/vendor/bootstrap/css/bootstrap.min.css'
import './assets/admin/assets/vendor/bootstrap-icons/bootstrap-icons.css'
import './assets/admin/assets/vendor/boxicons/css/boxicons.min.css'
import './assets/admin/assets/vendor/quill/quill.snow.css'
import './assets/admin/assets/vendor/quill/quill.bubble.css'
import './assets/admin/assets/vendor/remixicon/remixicon.css'
import './assets/admin/assets/vendor/simple-datatables/style.css'
import './assets/admin/assets/css/style.css'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar></Navbar>
        <Sidebar></Sidebar>

        <main id="main" class="main">
          <Routes>
            <Route path="/" element={<Home />}></Route>
          </Routes>
        </main>
        
      </BrowserRouter>
    </div>
  );
}

export default App;
