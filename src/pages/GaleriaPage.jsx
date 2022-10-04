import { IonContent, IonPage, IonSlide, IonSlides } from "@ionic/react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import { useRef, useState } from "react";
import "../assets/css/Galeria.css";

import iphone from '../assets/images/13pro.png';
import galaxy from '../assets/images/s22.png'
import flip from '../assets/images/flip.png'

export const GaleriaPage = () => {
  const [blur, setBlur] = useState(0);

  const slider = useRef();

  const handleOnChange = (e) => {
    setBlur(slider.current.swiper.activeIndex);
  };

  return (
    <>
      <IonPage>
        <Header title="Galeria" />

        <div className="galeria">
          <IonContent>
            <div className="cards-container">
              <IonSlides pager={true} onIonSlideDidChange={handleOnChange} ref={slider}>
                <IonSlide>
                  <div className="card-img">
                    <img alt="img" className={`${blur !== 0 && "blur"} img-galeria`} src={flip} />
                  </div>
                </IonSlide>
                <IonSlide>
                  <div className="card-img">
                    <img alt="img" className={`${blur !== 1 && "blur"} img-galeria`} src={iphone} />
                  </div>
                </IonSlide>
                <IonSlide>
                  <div className="card-img">
                    <img alt="img" className={`${blur !== 2 && "blur"} img-galeria`} src={galaxy} />
                  </div>
                </IonSlide>
              </IonSlides>
            </div>
          </IonContent>
        </div>

        <Footer />
      </IonPage>
    </>
  );
};
