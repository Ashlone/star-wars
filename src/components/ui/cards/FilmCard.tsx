import { Wrapper } from "./FilmCard.styles";
import { Link } from "react-router-dom";

//Interface Here
interface CardProps {
  name: string;
  release_date: string;
  id: number;
}

const FilmCard = ({ name, release_date, id }: CardProps) => {
  return (
    <Wrapper>
      <Link style={{ textDecoration: "none", color: "white" }} to={`/${id}`}>
        <h2>{name}</h2>
        <span>{release_date}</span>
      </Link>
    </Wrapper>
  );
};

export default FilmCard;
