import React from "react";
import styled from "styled-components";
import {SliderImages} from "./SliderImages";

function SliderContent(props) {
  return (
    <section>
      {SliderImages.map((slide, index) => (
        <div
          key={index}
          className={index === props.activeIndex ? "slides active" : "inactive"}
        >
          <img className="slide-image" src={slide.image} alt="" />

          <ButtonWrapper>
            <TextRow>
              <ImageText>{slide.subTitle}</ImageText>
            </TextRow>
            <ButtonRow>
              <PurchaseBtn>{slide.buttonTextAcheter}</PurchaseBtn>
              <SalesBtn>{slide.buttonTextAcheter}</SalesBtn>
              <EvaluationBtn>{slide.buttonTextEvaluation}</EvaluationBtn>
            </ButtonRow>
          </ButtonWrapper>
        </div>
      ))}
    </section>
  );
}
const TextRow = styled.div`
  display: flex;
  justify-content: center;
`;

const ImageText = styled.h1`
  z-index: 2;
  color: white;
`;
const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 70%;
  justify-content: flex-end;
`;
const ButtonRow = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
const PurchaseBtn = styled.button`
  z-index: 2;
  color: #712e7f;
  font-size: large;
  font-weight: bold;
  padding: 1%;
  border: none;
`;
const SalesBtn = styled.button`
  z-index: 2;
  color: #712e7f;
  font-size: large;
  font-weight: bold;
  padding: 1%;
  border: none;
`;
const EvaluationBtn = styled.button`
  z-index: 2;
  color: #712e7f;
  font-size: large;
  font-weight: bold;
  padding: 1%;
  border: none;
`;

export default SliderContent;
