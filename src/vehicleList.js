import { useEffect, useState } from "react";
import { getDatabase, ref, child, get } from "firebase/database";
import ExampleModal from "./ExampleModal";
import app from "./firebase";

export default function VehicleList({ userDetail }) {
  const { token } = userDetail;
  const [vehicles, setVehicles] = useState(null);
  const [lat, setLat] = useState(null);
  const [long, setLong] = useState(null);

  useEffect(() => {
    getVehicleList();
  }, []);

  const getLocation = (id, reg) => {
    const dbRef = ref(getDatabase());

    get(child(dbRef, `${id}-${reg}/location`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(snapshot.val());
          const { latitude, longitude } = snapshot.val();
          setLong(longitude);
          setLat(latitude);
        } else {
          alert("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const getVehicleList = () => {
    fetch(" https://staging-api.tracknerd.io/v1/vehicle-groups/vehicles", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => response.json())
      .then(({ data }) => {
        setVehicles([...data]);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <h3 className="my-3 mx-3">Owners</h3>
      <ul className="list-group">
        {vehicles
          ? vehicles.map(({ id, name = "", vehicles = [] }) => {
              return (
                <li
                  className="mx-2 list-group-item d-flex justify-content-between align-items-center"
                  key={id}
                  onClick={() => {
                    getLocation(
                      vehicles[0]?.id,
                      vehicles[0]?.registrationNumber
                    );
                  }}
                >
                  {name}
                  <ExampleModal vehicles={vehicles} lat={lat} long={long} />
                </li>
              );
            })
          : null}
      </ul>
    </div>
  );
}
