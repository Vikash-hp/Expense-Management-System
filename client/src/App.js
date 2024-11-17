import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Registerr from "./pages/Registerr";
import Loginn from "./pages/Loginn";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <protectedRoutes>
              <HomePage />
            </protectedRoutes>  
          }
        />
        <Route path="/register" element={<Registerr />} />
        <Route path="/login" element={<Loginn />} />
      </Routes>
    </>
  );
}
  
// protecting the Routes
export function protectedRoutes(props) {
  if (localStorage.getItem("user")) {
    return props.children;
  } else {
    return <Navigate to="/login" />;
  }
}

export default App;
