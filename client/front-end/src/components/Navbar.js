import React from "react";
import styled from "styled-components";
import BannerImg from "../Images/companybanner.png";
import {FaChevronDown} from "react-icons/fa";
import {IconContext} from "react-icons";
import {GrSearch} from "react-icons/gr";

const Navbar = () => {
  return (
    <Nav>
      <Brand>
        <BannerIcon src={BannerImg} />
        <BrandNumber>(514) 570-4444</BrandNumber>
      </Brand>
      <ToggleButton>
        <HamburgerBar />
        <HamburgerBar />
        <HamburgerBar />
      </ToggleButton>
      <Ul>
        <Ullinks>
          <AnchorTag href="#">Accueil</AnchorTag>
        </Ullinks>
        <Ullinks>
          <AnchorTag href="#">Propriétés</AnchorTag>
        </Ullinks>
        <Ullinks>
          <AnchorTag href="#">Vendre</AnchorTag>
        </Ullinks>
        <Ullinks>
          <AnchorTag href="#">
            Équipe
            <IconImg>
              <FaChevronDown />
            </IconImg>
          </AnchorTag>
          <ULEquipe>
            <UlEquipelinks>
              <EquipeAnchorTag href="#">Decouvrir</EquipeAnchorTag>
            </UlEquipelinks>
            <UlEquipelinks>
              <EquipeAnchorTag href="#">Courtier</EquipeAnchorTag>
            </UlEquipelinks>
            <UlEquipelinks>
              <EquipeAnchorTag href="#">Blog</EquipeAnchorTag>
            </UlEquipelinks>
          </ULEquipe>
        </Ullinks>
        <Ullinks>
          <AnchorTag href="#">Blogue</AnchorTag>
        </Ullinks>
        <Ullinks>
          <AnchorTag href="#">Contract</AnchorTag>
        </Ullinks>
        <SearchGlass>
          <GrSearch color="white" size="25px" />
        </SearchGlass>
      </Ul>
    </Nav>
  );
};
const IconImg = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  margin-left: 5%;
`;
const ULEquipe = styled.ul`
  position: absolute;
  top: 50px;
  text-align: center;
  padding: 0;
  float: none;
  display: none;
`;
const SearchGlass = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50px;
  @media (max-width: 900px) {
    display: none;
  }
`;

const Brand = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  padding: 0 1%;
  @media (max-width: 900px) {
    padding: 1.5% 0 0 1.5%;
    width: 80%;
  }
`;
const BannerIcon = styled.img`
  height: 25px;
`;
const BrandNumber = styled.span`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: right;
`;

const ToggleButton = styled.a`
  display: none;
  flex-direction: column;
  justify-content: space-between;
  wight: 30px;
  height: 21px;
  @media (max-width: 900px) {
    display: flex;
    position: absolute;
    padding: 1%;
    top: 1%;
    right: 1%;
  }
`;

const HamburgerBar = styled.span`
  height: 3px;
  width: 35px;
  background-color: black;
  border-radius: 10px;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  background-color: white;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const Ul = styled.ul`
    margin 0;
    padding: 0; 
    display: flex;
    flex: 1;
    background-color: #712e7f;
    justify-content: space-around;
    @media (max-width: 900px) {
      width: 100%;
      flex-direction: column;

    }
`;
const Ullinks = styled.li`
  list-style: none;
  &:hover > ul {
    display: inline-grid;
  }
  @media (max-width: 900px) {
    width: 100%;
    flex-direction: column;
    text-align: center;
    display: none;
  }
  &:active {
    display: flex;
  }
`;
const UlEquipelinks = styled.li`
  background-color: #712e7f;
  position: relative;
  list-style: none;
  display: inline-block;
`;
const EquipeAnchorTag = styled.a`
  display: block;
  padding: 0 15px;
  color: white;
  text-decoration: none;
  line-height: 60px;
  font-size: 20px;
  &:hover {
    color: black;
    transition-duration: 0.5s;
  }
`;
const AnchorTag = styled.a`
  text-decoration: none;
  color: white;
  padding: 1rem;
  display: flex;
  &:hover {
    color: black;
    transition-duration: 0.5s;
  }
  @media (max-width: 900px) {
    padding: 0.5rem 1rem;
  }
`;
export default Navbar;
