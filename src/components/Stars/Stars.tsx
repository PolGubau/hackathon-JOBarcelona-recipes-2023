import { TbStarFilled, TbStar, TbStarHalfFilled } from "react-icons/tb";

/**
 * A React component that renders a star rating system based on a number of points given.
 * @param {Object} props - The component props.
 * @param {number} props.points - The number of points that will be used to calculate the star rating.
 * @param {number} [props.max=5] - The maximum number of stars that can be shown.
 * @return {JSX.Element} A React component representing the star rating system.
 */
const Stars = ({ points, max = 5 }: { points: number; max?: number }) => {
  // Create icons for the different types of stars
  const FilledStar = <TbStarFilled />;
  const EmptyStar = <TbStar />;
  const HalfStar = <TbStarHalfFilled />;

  // Create an array of stars based on the number of points and the maximum number of stars
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

  // Render the stars as a div element with a class of "stars"
  return <div className="stars">{stars}</div>;
};

export default Stars;
