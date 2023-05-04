import * as React from "react";
import Box from "@mui/material/Box";
import TimerBomb from "./TimerBomb";

/* 게임 컴포넌트를 받는 상위 페이지 */

export default function GameComp(props) {
  const { children } = props;

  // 게임 컴포넌트의 개별 배경이 있는 경우
  const hasBg = Boolean(children.props.bg)

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",

        flexWrap: "wrap",
        border: "none", // 테두리 없애기
        borderRadius: 10,
        boxShadow: "0px 0px 3px 2px rgba(0,0,0,0.2)", // 그림자 추가하기
<<<<<<< HEAD
        backgroundColor: "rgba(0, 0, 0, 0.7)" , // 배경색 투명하게 만들기
        // padding: 5,
        maxWidth: "60%", // 최대 너비 값 설정
        width: "100%",
        height: "70vh",
=======
        backgroundColor: "rgba(0, 0, 0, 0.7)", // 배경색 투명하게 만들기
        padding: 3,
        maxWidth: "70%", // 최대 너비 값 설정
        width: "100%",
        height: "72vh",
>>>>>>> dac50cf39630d1ff2dcf69bbde9c74beaa781604
        overflow: "hidden",

        // 게임 컴포넌트의 개별 배경이 있는 경우(ex_모니터)
        backgroundImage: hasBg ? `url(${children.props.bg})` : undefined,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      {/* 타이머 시간을 초로 집어넣으면 됩니다. */}
      <TimerBomb timeLimit={10} />
        {children}
    </Box>
  );
}
