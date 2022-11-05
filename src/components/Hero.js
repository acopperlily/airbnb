import mosaic from '../images/photo-grid.png';

const Hero = () => {
  return (
    <section className="hero">
      <div className='mosaic'><img src={mosaic} alt="" /></div>
      <div className='info'>
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts — all without leaving home.
        </p>
      </div>
    </section>
  );
}

export default Hero;