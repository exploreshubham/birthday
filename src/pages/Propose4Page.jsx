import React from "react";
import "./CardPage.css";

const RotatingCards = () => {
  const colors = [
    '142, 249, 252',
    '142, 252, 204',
    '142, 252, 157',
    '215, 252, 142',
    '252, 252, 142',
    '252, 208, 142',
    '252, 142, 142',
    '252, 142, 239',
    '204, 142, 252',
    '142, 202, 252',
  ];

  return (
    <div className="dic">
      <div className="wrapper">
        <div
          className="inner"
          style={{
            '--quantity': 10,
          }}
        >
          {[...Array(10).keys()].map((index) => (
            <div
              key={index}
              className="card"
              style={{
                '--index': index,
                '--color-card': colors[index],
                background: `radial-gradient(circle, rgba(${colors[index]}, 0.2) 0%, rgba(${colors[index]}, 0.6) 80%, rgba(${colors[index]}, 0.9) 100%)`,
                transform: `rotateY(calc((360deg / 10) * ${index})) translateZ(calc((100px + 150px) + 0px))`,
              }}
            >
              <div className="img">
                <img
                  src={`/assets/${index + 1}.jpg`}  // Replace with the actual image source
                  alt={`Card ${index + 1}`}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RotatingCards;
