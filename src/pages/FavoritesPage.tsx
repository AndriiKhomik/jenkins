import Card from "../components/Card";
import Container from "../components/Container";
import { useAppSelector } from "../hooks/redux";

const FavoritesPage = () => {
  const { favorites } = useAppSelector((state) => state.github);

  if (favorites.length === 0) {
    return <div className="flex justify-center mt-4 text-lg">No items</div>;
  }

  return (
    <Container>
      {favorites.map((favorite) => (
        <Card key={favorite.id} user={favorite} />
      ))}
    </Container>
  );
};

export default FavoritesPage;
