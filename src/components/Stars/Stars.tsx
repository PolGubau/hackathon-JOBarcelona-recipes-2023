import { TbStar, TbStarFilled, TbStarHalfFilled } from "react-icons/tb";

const Stars = ({ points, max = 5 }: { points: number; max?: number }) => {
  const FilledStar = <TbStarFilled />;
  const EmptyStar = <TbStar />;
  const HalfStar = <TbStarHalfFilled />;

  const stars = [];
  for (let i = 0; i < max; i++) {
    if (i < points - 1) {
      stars.push(FilledStar);
    } else if (i < points && points % 1 !== 0) {
      stars.push(HalfStar);
    } else {
      stars.push(EmptyStar);
    }
  }

  return <div className="stars">{stars}</div>;
};

export default Stars;
