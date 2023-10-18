const Hero = () => {
  return (
    <main className="hero">
      <div className="hero-content">
        <h1>YOUR WRIST DESERVE THE BEST</h1>
        <p>
          We, at Titan, firmly believe that the only way forward is to give back
          to the community that help us in the first place. With that same
          belief, we have carried out programmes for upliftment.
        </p>
        <div className="hero-btn">
            <button>Add Now</button>
            <button className="second-btn">Category</button>
        </div>
        <div className="shopping">
            <p>Available on</p>
            <div className="online">
                <img src="/public/image/amazon.jpg" alt="" />
                <img src="/public/image/flipkart.png" alt="" />
            </div>
        </div>
      </div>
        <div className="hero-image">
            <img src="/public/image/Hero-image.jpg.webp" alt="" />
        </div>
    </main>
  );
};
export default Hero;
