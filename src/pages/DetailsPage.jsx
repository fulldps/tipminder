import { useParams } from "react-router-dom";
import Details from "../components/Details/Details";

export default function DetailsPage() {
  const { id } = useParams();
  return (
    <>
      <Details />
      <p>{id}</p>
    </>
  );
}
