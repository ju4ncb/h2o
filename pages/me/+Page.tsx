import NavBar from "../../components/NavBar";
import { useData } from "../../renderer/useData";
import type { Data } from "./+data";
import { Heart } from "lucide-react";

export { Page };

function Page() {
  const { user } = useData<Data>();
  return (
    <>
      <NavBar user={user} />
      <div className="app">
        <h5 style={{ margin: 0 }}>
          Página para modificar tu cuenta, está en desarrollo
        </h5>
        <h5 style={{ margin: 0 }}>Nombres:</h5>
        <p style={{ margin: 0 }}>{`${user.nm1} ${user.nm2}`}</p>
        <h5 style={{ margin: 0 }}>Apellidos:</h5>
        <p>{`${user.ap1} ${user.ap2}`}</p>
        <a href="/">
          <h5>Volver</h5>
        </a>
        {user.username === "yeii" && (
          <>
            <h2 style={{ color: "red" }}>Te quiero muchooooo</h2>
            <Heart color="red" fontSize={100} />
          </>
        )}
      </div>
    </>
  );
}
