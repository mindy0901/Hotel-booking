import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import { hotelColumns, roomColumns, userColumns } from "./datatablesource";

import NewHotel from "./pages/NewHotel";
import NewRoom from "./pages/NewRoom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import List from "./pages/List";
import { useSelector } from "react-redux";
import NewUser from "./pages/NewUser";


function App() {
      const { darkMode } = useSelector((state) => state.modeReducer);
      const { user } = useSelector((state) => state.authReducer);

      const ProtectedRoute = ({ children }) => {
            if (!user?.isAdmin) {
                  return <Navigate to="/login" />;
            }
            else {
                  return children;
            }
      };

      return (
            <div className={darkMode ? "app dark" : "app"}>
                  <HashRouter>
                        <Routes>

                              <Route path="/login" element={<Login />} />
                              <Route path="/" element={<ProtectedRoute> <Home /> </ProtectedRoute>} />

                              <Route path="/users" element={<ProtectedRoute> <List columns={userColumns} /> </ProtectedRoute>} />
                              <Route path="/users/new" element={<ProtectedRoute> <NewUser /></ProtectedRoute>} />

                              <Route path="/hotels" element={<ProtectedRoute> <List columns={hotelColumns} /> </ProtectedRoute>} />
                              <Route path="/hotels/new" element={<ProtectedRoute> <NewHotel /> </ProtectedRoute>} />

                              <Route path="/rooms" element={<ProtectedRoute> <List columns={roomColumns} /> </ProtectedRoute>} />
                              <Route path="/rooms/new" element={<ProtectedRoute> <NewRoom /> </ProtectedRoute>} />

                        </Routes>
                  </HashRouter>
            </div>
      );
}

export default App;
