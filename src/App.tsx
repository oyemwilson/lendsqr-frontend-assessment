import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Users from "./pages/Users/Users";
import UserDetails from "./pages/UserDetails/UserDetails";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<Login />} />
<Route
  path="/dashboard"
  element={
    <Layout>
      <Users />
    </Layout>
  }
/>
<Route
  path="/users/:id"
  element={
    <Layout>
      <UserDetails />
    </Layout>
  }
/>
{/* <Route
  path="/dashboard"
  element={
    <Layout>
      <Dashboard />
    </Layout>
  }
/> */}

    </Routes>
  );
}

export default App;
