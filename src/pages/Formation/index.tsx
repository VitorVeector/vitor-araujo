import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Navigation, A11y, Controller, Autoplay, Pagination } from "swiper";
import "swiper/css/navigation";
import "swiper/css/effect-cards";
import "swiper/css";

import { FormationCard } from "../../components/FormationCard";
import "./style.scss";

export const Formation = () => {
    return (
        <div className="formation-component">
            <div className="formation-swiper">
                <Swiper
                    modules={[
                        EffectCards,
                        Navigation,
                        A11y,
                        Controller,
                        Autoplay,
                        Pagination
                    ]}
                    effect="cards"
                    autoplay={{ delay: 2500 }}
                    grabCursor
                    centeredSlides
                    navigation  >
                    <SwiperSlide>
                        <FormationCard
                            title="Rocketseat"
                            subtitle="React e React-Native"
                            content="React is a JavaScript library used to create reactive and scalable user interfaces, while React Native is an extension of the library that allows for creating native mobile applications for iOS and Android. Both technologies use components, conditional rendering, and state to build dynamic interfaces. Additionally, they also make use of external APIs, styling, and navigation, as well as Context and Hooks for state management, and AsyncStorage for storing data on the device."
                            imgLink="https://cdn-images-1.medium.com/max/1200/1*TkXVfLTwsHdwpUEjGzdi9w.jpeg"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FormationCard
                            title="Alura"
                            subtitle="Node.js"
                            content="Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server-side and build scalable, high-performance network applications. Node.js has an event-driven, non-blocking I/O model that makes it efficient and lightweight, and it comes with a rich set of built-in modules and libraries that enable developers to quickly build complex applications. Node.js is widely used for building web servers, APIs, real-time chat applications, and other types of server-side applications."
                            imgLink="https://www.alura.com.br/assets/img/alura-share.1687806446.png"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <FormationCard
                            title="Estácio"
                            subtitle="Analysis and Systems Development"
                            content="The Analysis and Systems Development course teaches how to design, document, specify, test, implement, and maintain computer systems and software. Brazil ranks 9th in the world for investment in information technology. Database administration and IT governance join software engineering-related service planning and implementation as disciplines studied for optimal professional performance."
                            imgLink="https://logodownload.org/wp-content/uploads/2014/12/estacio-logo-1.png"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};
