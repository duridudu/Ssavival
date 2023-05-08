import React from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import start from "../../assets/start.png";
import exit from "../../assets/exit.png";
import happy_pepe2 from "../../assets/happy_pepe2.png";

const Comp1 = styled.div`
  font-family: "neodgm";
`;

const Title = styled.div`
  padding-top: 70px;
  padding-bottom: 30px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  span {
    font-size: 20px;
  }
`;

const HoverBox = styled.div`
  font-family: "neodgm";
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: 50%;
`;
export default function MainComp1() {
  const gameMode = useSelector((state) => state.gameMode);
  const dispatch = useDispatch();

  const handleSinglePlayerClick = () => {
    dispatch({ type: "SET_GAME_MODE", payload: { mode: "single" } });
  };

  const handleMultiPlayerClick = () => {
    dispatch({ type: "SET_GAME_MODE", payload: { mode: "multi" } });
  };
  return (
    <Comp1>
      <Box
        sx={{
          width: "100%",
          height: "40vh",
          backgroundColor: "#FFE651",
          borderRadius: 12,
        }}
      >
        <Title>
          <img
            src={happy_pepe2}
            alt=""
            style={{ width: 30, height: 30, marginRight: 5 }}
          />
          <span>싸피를 즐기러 가보자!</span>
          <img
            src={happy_pepe2}
            alt=""
            style={{ width: 30, height: 30, marginLeft: 3 }}
          />
        </Title>
        <HoverBox>
          <Box
            sx={{
              bgcolor: "white",
              width: "35%",
              height: "70%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.2rem",
            }}
            onClick={handleSinglePlayerClick}
          >
            <div>싱글플레이</div>
            <Link to="/emoji">
              <img src={start} alt="" style={{ width: "90%", height: "90%" }} />
            </Link>
          </Box>
          <Box
            sx={{
              bgcolor: "white",
              width: "35%",
              height: "70%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "1.2rem",
            }}
            onClick={handleMultiPlayerClick}
          >
            <div>멀티플레이</div>
            <Link to="/emoji">
              <img
                src={exit}
                alt=""
                style={{ width: "100%", height: "100%" }}
              />
            </Link>
          </Box>
        </HoverBox>
      </Box>
    </Comp1>
  );
}
