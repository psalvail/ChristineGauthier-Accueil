import React from "react";
import styled from "styled-components";
import Carousel from "react-elastic-carousel";
import firstImg from "../Images/745_Gouin_E-45_100dpi_filtre.jpg";
import secondImg from "../Images/iStock-1185723502_100dpi_filtre.jpg";
import thirdImg from "../Images/etienne-delorieux-zaCC6y4hjCw-unsplash_100dpi_filtre.jpg";
import forthImg from "../Images/iStock-1156387942_100dpi_filtre.jpg";

const AccueilCarousel = () => {
  const breakPoints = [{width: 1200, itemsToShow: 1}];
  return (
    <Slider></Slider>
    // <Rotator breakPoints={breakPoints}>
    //   <PlacementImg>
    //     <Img src={firstImg} />
    //   </PlacementImg>
    //   <PlacementImg>
    //     <Img src={secondImg} />
    //   </PlacementImg>
    //   <PlacementImg>
    //     <Img src={thirdImg} />
    //   </PlacementImg>
    //   <PlacementImg>
    //     <Img src={forthImg} />
    //   </PlacementImg>
    // </Rotator>
  );
};
const Rotator = styled(Carousel)``;
const PlacementImg = styled.div`
  width: 100%;
`;
const Img = styled.img`
  width: 100%;
  height: 500px;
`;

export default AccueilCarousel;
