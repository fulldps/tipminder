import { useParams } from "react-router-dom";
import Details from "../features/details/Details";
import { useGetUserQuery } from "../app/api";

export default function DetailsPage() {
  const { id } = useParams();
  const { data: user, isLoading, error } = useGetUserQuery(id);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong...</p>;

  return <Details user={user} />;
}
