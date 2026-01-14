import { PiArrowDown, PiCaretDown, PiCaretUp } from "react-icons/pi";
import "../../assets/styles/hero.css";

export const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__canvas">
                <div className="hero__image-container">
                    <img
                        className="hero__image"
                        src="../../public/img/hero_image.jpg"
                        alt="Modern interior living room"
                        width="5120"
                        height="4096"
                        loading="eager"
                        fetchpriority="high"
                    />
                    <span className="hero__outline" aria-hidden="true" />
                </div>

                <div className="hero__text-card">
                    <h1 className="hero__title">Elevate your interior</h1>
                    <p className="hero__description">
                    Modern, elegant spaces designed by professionals.
                    </p>
                </div>
            </div>
        </section>
    );
};
