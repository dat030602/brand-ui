import React from 'react';

function Star({ children, amount = 0 }) {
  const renderStar = (amount) => {
    var arrayStar = [];
    for (let index = 0; index < 5; index++) {
      if (index < amount - 1)
        arrayStar.push(<svg className="star" data-src="../../../../assets/svg/star.svg" key={index}></svg>);
      else arrayStar.push(<svg className="no-star" data-src="../../../../assets/svg/star.svg" key={index}></svg>);
    }
    return arrayStar;
  };
  return renderStar(amount);
}
export default Star;
