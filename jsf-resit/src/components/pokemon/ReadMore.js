import { useState } from "react";

export const ReadMore = ({ children }) => {
  const details = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <div className="details__read-more">
      {isReadMore ? details.slice(0, 0) : details}
      <span onClick={toggleReadMore} className="details__button">
        {isReadMore ? "See stats" : "Show less"}
      </span>
    </div>
  );
};
