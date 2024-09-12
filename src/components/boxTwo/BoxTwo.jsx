import shirt from "../../assets/shirt.gif";

import "./BoxTwo.css";

const boxTwo = () => {
  return (
    <div className="boxtwo">
      <div className="left">
        <p className="paragraph">For print on demand sellers</p>
        <h1 className="heading">
          Accelerate business growth with innovative design tools and apps
        </h1>
        <h4>
          See how our cutting-edge solutions can help you reach new customers
          and maximize your profits.
        </h4>
        <button className="btn">Get Started</button>
      </div>
      <div className="right">
        <div>
          <img src={shirt} alt="" />
        </div>
      </div>
    </div>
  );
};

export default boxTwo;
