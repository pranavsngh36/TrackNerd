import { useState } from "react";
import Login from "./login";
import "./styles.css";
import VehicleList from "./vehicleList";

export default function App() {
  const [userDetail, setUserDetail] = useState(null);

  const getUserDetail = (details) => {
    setUserDetail(details);
  };

  return (
    <div>
      {userDetail ? (
        <VehicleList userDetail={userDetail} />
      ) : (
        <Login getUserDetail={getUserDetail} />
      )}
    </div>
  );
}
