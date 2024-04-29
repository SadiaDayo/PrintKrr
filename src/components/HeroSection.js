import profile from "../assets/images/profile.jpeg";

export const HeroSection = () => {
  return (
    <>
      <div className="container hero-section">
        <div className="row">
          <div className="col col-sm-12 col-md-6 col-lg-6">
            <h1 className="title-section">Hi, Sadia Here</h1>
            <h3 className="sub-heading">Software Engineer</h3>
          </div>
          <div className="col col-sm-12 col-md-6 col-lg-6">
            <img src={profile} alt="Profile" />
          </div>
        </div>
      </div>
    </>
  );
};
