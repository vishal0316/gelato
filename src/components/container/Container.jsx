import "./container.css";
import secondcontainer from "../../assets/secondcontainer.png";

const Container = () => {
  return (
    <div className="box">
      <div className="heading">
        <h1>Why choose Gelato</h1>
      </div>

      <div className="containerr">
        {/* Left Side - Image */}
        <div className="image-section">
          <img src={secondcontainer} alt="Placeholder" />
        </div>

        {/* Right Side - Text with Arrow Icons */}
        <div className="text-section">
          <div>
            <h2>▻ World's largest print-on-demand network</h2>
            <p>
              140+ print partners in 32 countries. Gelato is a truly global
              service.
            </p>
          </div>
          <div>
            <h2>▻ Sell globally, produce locally</h2>
            <p>
              Your products are produced close to your customers, wherever they
              are.
            </p>
          </div>
          <div>
            <h2>▻ 100% free editing tools</h2>
            <p>Create your custom products using our suite of free tools.</p>
          </div>
          <div>
            <h2>▻ 60+logistics partners</h2>
            <p>
              Our global network of logistics partners ensures your products are
              delivered fast.
            </p>
          </div>
          <div>
            <h2>▻ High-quality products</h2>
            <p>
              We partner with the world's leading brands to ensure the best
              quality products.
            </p>
          </div>
          <div>
            <h2>▻ Endless creativity with Shutterstock Images</h2>
            <p>
              Access millions of images and graphics to create unique products
              you can sell in your store.
            </p>
          </div>
          <div>
            <h2>▻ 1-click integration to the leading ecommerce platforms</h2>
            <p>
              Connect your store to Gelato using our integrations with Shopify,
              Etsy and more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
