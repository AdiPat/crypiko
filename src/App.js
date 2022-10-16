import "./App.css";
import { ProSidebarProvider } from "react-pro-sidebar";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { CoinsPage, HomePage, SearchPage } from "./pages";

function App() {
  return (
    <ProSidebarProvider>
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/search" exact element={<SearchPage />} />
          <Route path="/coins" exact element={<CoinsPage />} />
        </Routes>
      </Router>
    </ProSidebarProvider>
  );
}

export default App;
