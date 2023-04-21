import { TbStar, TbStarFilled, TbStarHalfFilled } from "react-icons/tb";

const Stars = ({ points, max = 5 }: { points: number; max?: number }) => {
  const FilledStar = <TbStarFilled />;
  const EmptyStar = <TbStar />;

  const stars = [];
  for (let i = 0; i < max; i++) {
    if (i < points) {
      stars.push(FilledStar);
    } else {
      stars.push(EmptyStar);
    }
  }

  return <div className="stars">{stars}</div>;
};

export default Stars;
