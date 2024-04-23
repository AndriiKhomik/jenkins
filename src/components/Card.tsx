import { FC, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

import { useActions } from "../hooks/actions";
import { useAppSelector } from "../hooks/redux";
import { IUser } from "../types";

interface CardProps {
  user: IUser;
}

const Card: FC<CardProps> = ({ user }) => {
  const { addToFavorite, removeFromFavorites } = useActions();
  const { favorites } = useAppSelector((state) => state.github);
  const [isFavorite, setIsFavorite] = useState(favorites.includes(user));

  const addFavorite = (e: React.MouseEvent<SVGAElement>) => {
    e.preventDefault();

    addToFavorite(user);
    setIsFavorite(true);
  };

  const removeFavorite = (e: React.MouseEvent<SVGAElement>) => {
    e.preventDefault();

    removeFromFavorites(user);
    setIsFavorite(false);
  };

  return (
    <div className="relative flex flex-col w-full border rounded-lg p-2 shadow-sm bg-gray-50">
      <h5 className="font-bold text-lg mb-3">{user.login}</h5>
      <div className="absolute top-3 right-3 cursor-pointer">
        {isFavorite ? (
          <AiFillHeart size={24} onClick={removeFavorite} />
        ) : (
          <AiOutlineHeart size={24} onClick={addFavorite} />
        )}
      </div>
      <img
        className="object-cover rounded-full mb-3"
        src={user.avatar_url}
        alt="avatar"
      />
      <a
        href={user.html_url}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center py-2 border rounded-md"
      >
        Visit page
      </a>
    </div>
  );
};

export default Card;
