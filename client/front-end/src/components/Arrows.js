import React from "react";
import styled from "styled-components";

function Arrows(props) {
  return (
    <div className="arrows">
      <span className="prev" onClick={props.prevSlide}>
        &#10094;
      </span>
      <span className="next" onClick={props.nextSlide}>
        &#10095;
      </span>
    </div>
  );
}

const Arrow = styled.div``;

const Prev = styled.span``;
const Next = styled.span``;

export default Arrows;
