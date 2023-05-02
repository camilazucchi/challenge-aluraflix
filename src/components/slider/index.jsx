import { Component } from "react";
import Slider from "react-slick";

export default class SliderVideos extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };

        return (
            <div>
                <h2>Title here</h2>
                <Slider {...settings}>
                    <div>
                        <h3>Vídeo 1</h3>
                    </div>
                    <div>
                        <h3>Vídeo 2</h3>
                    </div>
                    <div>
                        <h3>Vídeo 3</h3>
                    </div>
                    <div>
                        <h3>Vídeo 4</h3>
                    </div>
                    <div>
                        <h3>Vídeo 5</h3>
                    </div>
                    <div>
                        <h3>Vídeo 6</h3>
                    </div>
                </Slider>
            </div>
        )
    }
}