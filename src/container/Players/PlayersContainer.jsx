import React from "react";
import Players from "../../components/players/Players";

import { PlayersContext } from "../../store/Context/SunriseContext";

const PlayersContainer = () => {
  const playersList = [
    {
      id: 1,
      name: "김지강",
      img: "./img/Player/img_player1.png",

      age: 29,
      height: "186cm",
      position: "CB",
      stats: [
        {
          subject: "체력",
          A: 92,
          fullMark: 150,
        },
        {
          subject: "기본기",
          A: 63,
          fullMark: 150,
        },
        {
          subject: "판단력",
          A: 50,
          fullMark: 150,
        },
        {
          subject: "공간능력",
          A: 56,
          fullMark: 150,
        },
        {
          subject: "정확성",
          A: 87,
          fullMark: 150,
        },
        {
          subject: "침착성",
          A: 60,
          fullMark: 150,
        },
      ],
    },
    {
      id: 2,
      name: "나예석",
      img: "./img/Player/img_player2.png",
      age: 29,
      height: "180cm",
      position: "ST",
      stats: [
        {
          subject: "체력",
          A: 110,
          fullMark: 150,
        },
        {
          subject: "기본기",
          A: 88,
          fullMark: 150,
        },
        {
          subject: "판단력",
          A: 86,
          fullMark: 150,
        },
        {
          subject: "공간능력",
          A: 73,
          fullMark: 150,
        },
        {
          subject: "정확성",
          A: 69,
          fullMark: 150,
        },
        {
          subject: "침착성",
          A: 80,
          fullMark: 150,
        },
      ],
    },
    {
      id: 3,
      name: "박성우",
      img: "./img/Player/img_player3.png",
      age: 29,
      height: "182cm",
      position: "MID",
      stats: [
        {
          subject: "체력",
          A: 100,
          fullMark: 150,
        },
        {
          subject: "기본기",
          A: 104,
          fullMark: 150,
        },
        {
          subject: "판단력",
          A: 81,
          fullMark: 150,
        },
        {
          subject: "공간능력",
          A: 103,
          fullMark: 150,
        },
        {
          subject: "정확성",
          A: 85,
          fullMark: 150,
        },
        {
          subject: "침착성",
          A: 89,
          fullMark: 150,
        },
      ],
    },
    {
      id: 4,
      name: "박오수",
      img: "./img/Player/img_player4.png",
      age: 29,
      height: "171cm",
      position: "RB",
      stats: [
        {
          subject: "체력",
          A: 119,
          fullMark: 150,
        },
        {
          subject: "기본기",
          A: 102,
          fullMark: 150,
        },
        {
          subject: "판단력",
          A: 108,
          fullMark: 150,
        },
        {
          subject: "공간능력",
          A: 99,
          fullMark: 150,
        },
        {
          subject: "정확성",
          A: 95,
          fullMark: 150,
        },
        {
          subject: "침착성",
          A: 65,
          fullMark: 150,
        },
      ],
    },
    {
      id: 5,
      name: "배태림",
      img: "./img/Player/img_player5.png",
      age: 29,
      height: "182cm",
      position: "RW",
      stats: [
        {
          subject: "체력",
          A: 110,
          fullMark: 150,
        },
        {
          subject: "기본기",
          A: 102,
          fullMark: 150,
        },
        {
          subject: "판단력",
          A: 98,
          fullMark: 150,
        },
        {
          subject: "공간능력",
          A: 109,
          fullMark: 150,
        },
        {
          subject: "정확성",
          A: 79,
          fullMark: 150,
        },
        {
          subject: "침착성",
          A: 95,
          fullMark: 150,
        },
      ],
    },
    {
      id: 6,
      name: "백재우",
      img: "./img/Player/img_player6.png",
      age: 29,
      height: "173cm",
      position: "MID",
      stats: [
        {
          subject: "체력",
          A: 72,
          fullMark: 150,
        },
        {
          subject: "기본기",
          A: 105,
          fullMark: 150,
        },
        {
          subject: "판단력",
          A: 112,
          fullMark: 150,
        },
        {
          subject: "공간능력",
          A: 109,
          fullMark: 150,
        },
        {
          subject: "정확성",
          A: 92,
          ullMark: 150,
        },
        {
          subject: "침착성",
          A: 107,
          ullMark: 150,
        },
      ],
    },
    {
      id: 7,
      name: "서정훈",
      img: "./img/Player/img_player7.png",
      age: 29,
      height: "173cm",
      position: "LB",
      stats: [
        {
          subject: "체력",
          A: 118,
          fullMark: 150,
        },
        {
          subject: "기본기",
          A: 111,
          fullMark: 150,
        },
        {
          subject: "판단력",
          A: 105,
          fullMark: 150,
        },
        {
          subject: "공간능력",
          A: 109,
          fullMark: 150,
        },
        {
          subject: "정확성",
          A: 92,
          fullMark: 150,
        },
        {
          subject: "침착성",
          A: 101,
          fullMark: 150,
        },
      ],
    },
    {
      id: 8,
      name: "송석주",
      img: "./img/Player/img_player8.png",
      age: 29,
      height: "175cm",
      position: "MID",
      stats: [
        {
          subject: "체력",
          A: 116,
          fullMark: 150,
        },
        {
          subject: "기본기",
          A: 116,
          fullMark: 150,
        },
        {
          subject: "판단력",
          A: 115,
          fullMark: 150,
        },
        {
          subject: "공간능력",
          A: 113,
          fullMark: 150,
        },
        {
          subject: "정확성",
          A: 113,
          fullMark: 150,
        },
        {
          subject: "침착성",
          A: 119,
          fullMark: 150,
        },
      ],
    },
    {
      id: 9,
      name: "이경부",
      img: "./img/Player/img_player9.png",
      age: 29,
      height: "167cm",
      position: "MID",
      stats: [
        {
          subject: "체력",
          A: 110,
          fullMark: 150,
        },
        {
          subject: "기본기",
          A: 113,
          fullMark: 150,
        },
        {
          subject: "판단력",
          A: 110,
          fullMark: 150,
        },
        {
          subject: "공간능력",
          A: 117,
          fullMark: 150,
        },
        {
          subject: "정확성",
          A: 102,
          fullMark: 150,
        },
        {
          subject: "침착성",
          A: 118,
          fullMark: 150,
        },
      ],
    },
    {
      id: 10,
      name: "이대현",
      img: "./img/Player/img_player1.png",
      age: 29,
      height: "182cm",
      position: "GK",
      stats: [
        {
          subject: "체력",
          A: 82,
          fullMark: 150,
        },
        {
          subject: "기본기",
          A: 71,
          fullMark: 150,
        },
        {
          subject: "판단력",
          A: 66,
          fullMark: 150,
        },
        {
          subject: "공간능력",
          A: 59,
          fullMark: 150,
        },
        {
          subject: "정확성",
          A: 75,
          fullMark: 150,
        },
        {
          subject: "침착성",
          A: 65,
          fullMark: 150,
        },
      ],
    },
    {
      id: 11,
      name: "이종명",
      img: "./img/Player/img_player2.png",
      age: 29,
      height: "169cm",
      position: "ST",
      stats: [
        {
          subject: "체력",
          A: 113,
          fullMark: 150,
        },
        {
          subject: "기본기",
          A: 118,
          fullMark: 150,
        },
        {
          subject: "판단력",
          A: 106,
          fullMark: 150,
        },
        {
          subject: "공간능력",
          A: 106,
          fullMark: 150,
        },
        {
          subject: "정확성",
          A: 101,
          fullMark: 150,
        },
        {
          subject: "침착성",
          A: 102,
          fullMark: 150,
        },
      ],
    },
    {
      id: 12,
      name: "이혁",
      img: "./img/Player/img_player3.png",
      age: 29,
      height: "176cm",
      position: "MID",
      stats: [
        {
          subject: "체력",
          A: 101,
          fullMark: 150,
        },
        {
          subject: "기본기",
          A: 104,
          fullMark: 150,
        },
        {
          subject: "판단력",
          A: 94,
          fullMark: 150,
        },
        {
          subject: "공간능력",
          A: 96,
          fullMark: 150,
        },
        {
          subject: "정확성",
          A: 93,
          fullMark: 150,
        },
        {
          subject: "침착성",
          A: 105,
          fullMark: 150,
        },
      ],
    },
    {
      id: 13,
      name: "정태균",
      img: "./img/Player/img_player4.png",
      age: 29,
      height: "183cm",
      position: "MID",
      stats: [
        {
          subject: "체력",
          A: 120,
          fullMark: 150,
        },
        {
          subject: "기본기",
          A: 120,
          fullMark: 150,
        },
        {
          subject: "판단력",
          A: 120,
          fullMark: 150,
        },
        {
          subject: "공간능력",
          A: 120,
          fullMark: 150,
        },
        {
          subject: "정확성",
          A: 120,
          fullMark: 150,
        },
        {
          subject: "침착성",
          A: 120,
          fullMark: 150,
        },
      ],
    },
    {
      id: 14,
      name: "최경민",
      img: "./img/Player/img_player5.png",
      age: 29,
      height: "165cm",
      position: "LWB",
      stats: [
        {
          subject: "체력",
          A: 82,
          fullMark: 150,
        },
        {
          subject: "기본기",
          A: 75,
          fullMark: 150,
        },
        {
          subject: "판단력",
          A: 53,
          fullMark: 150,
        },
        {
          subject: "공간능력",
          A: 61,
          fullMark: 150,
        },
        {
          subject: "정확성",
          A: 70,
          fullMark: 150,
        },
        {
          subject: "침착성",
          A: 41,
          fullMark: 150,
        },
      ],
    },
    {
      id: 15,
      name: "한성수",
      img: "./img/Player/img_player6.png",
      age: 29,
      height: "168cm",
      position: "RW",
      stats: [
        {
          subject: "체력",
          A: 100,
          fullMark: 150,
        },
        {
          subject: "기본기",
          A: 103,
          fullMark: 150,
        },
        {
          subject: "판단력",
          A: 111,
          fullMark: 150,
        },
        {
          subject: "공간능력",
          A: 114,
          fullMark: 150,
        },
        {
          subject: "정확성",
          A: 118,
          fullMark: 150,
        },
        {
          subject: "침착성",
          A: 97,
          fullMark: 150,
        },
      ],
    },
  ];

  return (
    <PlayersContext.Provider value={{ playersList }}>
      <Players />
    </PlayersContext.Provider>
  );
};

export default PlayersContainer;
