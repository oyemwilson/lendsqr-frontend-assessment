import { getUser } from "../../utils/storage";
import { Navigate } from "react-router-dom";

const UserDetails = () => {
  const user = getUser();

  if (!user) return <Navigate to="/users" />;

  return (
    <div>
      <h1>{user.fullName}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Status: {user.status}</p>
      <p>Organization: {user.org}</p>
    </div>
  );
};

export default UserDetails;
