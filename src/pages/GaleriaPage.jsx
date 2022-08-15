import { IonContent, IonPage, IonSlide, IonSlides } from "@ionic/react";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import { useRef, useState } from "react";
import "../assets/css/Galeria.css";

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
                    <img alt="img" className={`${blur !== 0 && "blur"} img-galeria`} src="https://images.pexels.com/photos/240526/pexels-photo-240526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                  </div>
                </IonSlide>
                <IonSlide>
                  <div className="card-img">
                    <img alt="img" className={`${blur !== 1 && "blur"} img-galeria`} src="https://images.pexels.com/photos/1938032/pexels-photo-1938032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                  </div>
                </IonSlide>
                <IonSlide>
                  <div className="card-img">
                    <img alt="img" className={`${blur !== 2 && "blur"} img-galeria`} src="https://images.pexels.com/photos/1078981/pexels-photo-1078981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
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
