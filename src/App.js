import "./App.css";
import { ProSidebarProvider } from "react-pro-sidebar";
import { HomePage } from "./pages";

function App() {
  return (
    <ProSidebarProvider>
      <div className="App">
        <HomePage />
      </div>
    </ProSidebarProvider>
  );
}

export default App;
