import './Hero.scss';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__text-grid">
        <p className="hero__text hero__text--large-top">Spring,</p>
        <p className="hero__text hero__text--large-bottom">Summer</p>
        <p className="hero__text hero__text--small-top">Coll</p>
        <p className="hero__text hero__text--small-bottom">2023</p>
      </div>
      <div className="hero__image-grid">
        <figure>
          <img
            src="https://cdnb.artstation.com/p/assets/images/images/039/855/629/large/farzx-dihan-m1.jpg?1627140643"
            alt="Woman in saree"
            className="hero__image"
          />
          <figcaption>Women</figcaption>
        </figure>
        <figure>
          <img
            src="https://i.pinimg.com/originals/df/b2/fd/dfb2fd80132ac48d28805c0f69395cab.jpg"
            alt="Man in panjabi"
            className="hero__image"
          />
          <figcaption>Men</figcaption>
        </figure>
      </div>
      <AiOutlineArrowRight className="hero__arrow--right" />
    </div>
  );
};

export default Hero;
