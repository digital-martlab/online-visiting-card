import { Navigate, Route, Routes } from "react-router-dom";
import Bcl from "./users/bcl";
import Digitalcorridors from "./users/digitalcorridors";
import DigitalMartlab from "./users/digitalmartlab";

export default function App() {
  return (
    <Routes>
      <Route path="/bcl" element={<Bcl />} />
      <Route path="/digitalmartlab" element={<DigitalMartlab />} />
      <Route path="/" element={<Digitalcorridors />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
