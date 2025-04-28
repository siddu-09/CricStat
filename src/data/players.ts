import { Player } from '../types';

export const players: Player[] = [
  {
  id: "35320",
  name: "Sachin Tendulkar",
  country: "India",
  role: "Batter",
  battingStyle: "Right-handed",
  bowlingStyle: "Right-arm offbreak / legbreak",
  image: "https://cdn.britannica.com/11/271611-050-6CAD4D54/Indian-Cricketer-Sachin-Tendulkar-Raises-Bat-On-Scoring-Century-During-Group-B-ICC-World-Cup-Cricket-Match-Between-India-And-South-Africa-Nagpur-March-12-2011.jpg",
  dateOfBirth: "April 24, 1973",
  age: 51,
  matches: {
    test: 200,
    odi: 463,
    t20i: 1
  },
  batting: {
    test: {
      matches: 200,
      innings: 329,
      runs: 15921,
      highestScore: "248*",
      average: 53.78,
      strikeRate: 54.1,
      hundreds: 51,
      fifties: 68,
      fours: 2058,
      sixes: 69
    },
    odi: {
      matches: 463,
      innings: 452,
      runs: 18426,
      highestScore: "200*",
      average: 44.83,
      strikeRate: 86.23,
      hundreds: 49,
      fifties: 96,
      fours: 2016,
      sixes: 195
    },
    t20i: {
      matches: 1,
      innings: 1,
      runs: 10,
      highestScore: "10",
      average: 10.0,
      strikeRate: 83.3,
      hundreds: 0,
      fifties: 0,
      fours: 2,
      sixes: 0
    }
  },
  bowling: {
    test: {
      matches: 200,
      innings: 145,
      wickets: 46,
      bestFigures: "3/10",
      average: 54.17,
      economy: 3.52,
      strikeRate: 92.3,
      fiveWickets: 0
    },
    odi: {
      matches: 463,
      innings: 270,
      wickets: 154,
      bestFigures: "5/32",
      average: 44.48,
      economy: 5.1,
      strikeRate: 52.2,
      fiveWickets: 2
    },
    t20i: {
      matches: 1,
      innings: 0,
      wickets: 0,
      bestFigures: "N/A",
      average: 0,
      economy: 0,
      strikeRate: 0,
      fiveWickets: 0
    }
  }
},

  {
  "id": "1126181",
  "name": "Ruturaj Gaikwad",
  "country": "India",
  "role": "Batter",
  "battingStyle": "Right-handed",
  "bowlingStyle": "Right-arm off break",
  "image": "https://pbs.twimg.com/media/GACprcoWQAA2tYF.jpg:large",
  "dateOfBirth": "January 01, 1997",
  "age": 28,
  "matches": {
    "test": 0,
    "odi": 6,
    "t20i": 19
  },
  "batting": {
    "test": {
      "matches": 0,
      "innings": 0,
      "runs": 0,
      "highestScore": "00",
      "average": 0,
      "strikeRate": 0,
      "hundreds": 0,
      "fifties": 0,
      "fours": 0,
      "sixes": 0
    },
    "odi": {
      "matches": 6,
      "innings": 6,
      "runs": 115,
      "highestScore": "71",
      "average": 19.2,
      "strikeRate": 73.2,
      "hundreds": 0,
      "fifties": 1,
      "fours": 16,
      "sixes": 0
    },
    "t20i": {
      "matches": 19,
      "innings": 20,
      "runs": 633,
      "highestScore": "123",
      "average": 39.6,
      "strikeRate": 143.5,
      "hundreds": 1,
      "fifties": 4,
      "fours": 65,
      "sixes": 24
    }
  },
  "bowling": {
    "test": {
      "matches": 0,
      "innings": 0,
      "wickets": 0,
      "bestFigures": "N/A",
      "average": 0,
      "economy": 0,
      "strikeRate": 0,
      "fiveWickets": 0
    },
    "odi": {
      "matches": 6,
      "innings": 2,
      "wickets": 2,
      "bestFigures": "1/32",
      "average": 26.5,
      "economy": 5.5,
      "strikeRate": 28.5,
      "fiveWickets": 0
    },
    "t20i": {
      "matches": 19,
      "innings": 6,
      "wickets": 6,
      "bestFigures": "2/18",
      "average": 30.5,
      "economy": 7.0,
      "strikeRate": 22.5,
      "fiveWickets": 0
    }
  }
},

  {
    id: "253802",
    name: "Virat Kohli",
    country: "India",
    role: "Batter",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm medium",
    image: "data:image/jpeg;base64,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",
    dateOfBirth: "November 5, 1988",
    age: 36,
    matches: {
      test: 113,
      odi: 292,
      t20i: 115
    },
    batting: {
      test: {
        matches: 113,
        innings: 191,
        runs: 8848,
        highestScore: "254*",
        average: 49.15,
        strikeRate: 55.7,
        hundreds: 29,
        fifties: 29,
        fours: 966,
        sixes: 24
      },
      odi: {
        matches: 292,
        innings: 280,
        runs: 13848,
        highestScore: "183",
        average: 58.7,
        strikeRate: 93.6,
        hundreds: 50,
        fifties: 72,
        fours: 1277,
        sixes: 156
      },
      t20i: {
        matches: 115,
        innings: 107,
        runs: 4008,
        highestScore: "122*",
        average: 52.7,
        strikeRate: 137.8,
        hundreds: 1,
        fifties: 37,
        fours: 356,
        sixes: 118
      }
    },
    bowling: {
      test: {
        matches: 113,
        innings: 10,
        wickets: 0,
        bestFigures: "0/0",
        average: 0,
        economy: 4.8,
        strikeRate: 0,
        fiveWickets: 0
      },
      odi: {
        matches: 292,
        innings: 50,
        wickets: 4,
        bestFigures: "1/15",
        average: 166.2,
        economy: 6.2,
        strikeRate: 161.5,
        fiveWickets: 0
      },
      t20i: {
        matches: 115,
        innings: 10,
        wickets: 0,
        bestFigures: "0/0",
        average: 0,
        economy: 8.2,
        strikeRate: 0,
        fiveWickets: 0
      }
    }
  },
  {
  "id": "34102",
  "name": "Rohit Sharma",
  "country": "India",
  "role": "Batter",
  "battingStyle": "Right-handed",
  "bowlingStyle": "Right-arm off break",
  "image": "https://i1.wp.com/akm-img-a-in.tosshub.com/indiatoday/images/media_bank/202308/rohit-sharma-071855-1x1.jpg?strip=all",
  "dateOfBirth": "April 30, 1987",
  "age": 37,
  "matches": {
    "test": 59,
    "odi": 262,
    "t20i": 151
  },
  "batting": {
    "test": {
      "matches": 59,
      "innings": 102,
      "runs": 4137,
      "highestScore": "212",
      "average": 45.55,
      "strikeRate": 55.46,
      "hundreds": 12,
      "fifties": 16,
      "fours": 450,
      "sixes": 74
    },
    "odi": {
      "matches": 262,
      "innings": 256,
      "runs": 10709,
      "highestScore": "264",
      "average": 49.12,
      "strikeRate": 91.57,
      "hundreds": 31,
      "fifties": 55,
      "fours": 993,
      "sixes": 289
    },
    "t20i": {
      "matches": 151,
      "innings": 143,
      "runs": 3974,
      "highestScore": "118",
      "average": 31.79,
      "strikeRate": 139.24,
      "hundreds": 5,
      "fifties": 29,
      "fours": 359,
      "sixes": 182
    }
  },
  "bowling": {
    "test": {
      "matches": 59,
      "innings": 16,
      "wickets": 2,
      "bestFigures": "1/26",
      "average": 112.5,
      "economy": 3.2,
      "strikeRate": 210.0,
      "fiveWickets": 0
    },
    "odi": {
      "matches": 262,
      "innings": 35,
      "wickets": 8,
      "bestFigures": "2/27",
      "average": 64.5,
      "economy": 5.1,
      "strikeRate": 76.2,
      "fiveWickets": 0
    },
    "t20i": {
      "matches": 151,
      "innings": 4,
      "wickets": 1,
      "bestFigures": "1/22",
      "average": 41.0,
      "economy": 8.2,
      "strikeRate": 30.0,
      "fiveWickets": 0
    }
  }
  },
  {
  "id": "722303",
  "name": "KL Rahul",
  "country": "India",
  "role": "Wicketkeeper Batter",
  "battingStyle": "Right-handed",
  "bowlingStyle": "Right-arm medium",
  "image": "https://www.thehawk.in/_next/image?url=https%3A%2F%2Fd2py10ayqu2jji.cloudfront.net%2F68dbf52c-64b7-4898-8a0e-2a25a5e1f141%2Fkl-rahul-1d6d7080-cc4f-4f8f-bc02-2b1a815f7d85.jpg&w=3840&q=75",
  "dateOfBirth": "April 18, 1992",
  "age": 33,
  "matches": {
    "test": 50,
    "odi": 78,
    "t20i": 72
  },
  "batting": {
    "test": {
      "matches": 50,
      "innings": 86,
      "runs": 2980,
      "highestScore": "199",
      "average": 34.2,
      "strikeRate": 53.4,
      "hundreds": 7,
      "fifties": 13,
      "fours": 360,
      "sixes": 14
    },
    "odi": {
      "matches": 78,
      "innings": 75,
      "runs": 3275,
      "highestScore": "112",
      "average": 47.08,
      "strikeRate": 87.5,
      "hundreds": 7,
      "fifties": 21,
      "fours": 250,
      "sixes": 52
    },
    "t20i": {
      "matches": 72,
      "innings": 68,
      "runs": 2265,
      "highestScore": "110*",
      "average": 37.75,
      "strikeRate": 139.13,
      "hundreds": 2,
      "fifties": 22,
      "fours": 191,
      "sixes": 99
    }
  },
  "bowling": {
    "test": {
      "matches": 50,
      "innings": 0,
      "wickets": 0,
      "bestFigures": "N/A",
      "average": 0,
      "economy": 0,
      "strikeRate": 0,
      "fiveWickets": 0
    },
    "odi": {
      "matches": 78,
      "innings": 0,
      "wickets": 0,
      "bestFigures": "N/A",
      "average": 0,
      "economy": 0,
      "strikeRate": 0,
      "fiveWickets": 0
    },
    "t20i": {
      "matches": 72,
      "innings": 0,
      "wickets": 0,
      "bestFigures": "N/A",
      "average": 0,
      "economy": 0,
      "strikeRate": 0,
      "fiveWickets": 0
    }
  }
  },
  {
  id: "33335",
  name: "Suresh Raina",
  country: "India",
  role: "Batter",
  battingStyle: "Left-handed",
  bowlingStyle: "Right-arm offbreak",
  image: "https://www.zapcricket.com/cdn/shop/articles/WhatsApp_Image_2023-10-05_at_23.59.34.webp?v=1696533755",
  dateOfBirth: "November 27, 1986",
  age: 38,
  matches: {
    test: 18,
    odi: 226,
    t20i: 78
  },
  batting: {
    test: {
      matches: 18,
      innings: 31,
      runs: 768,
      highestScore: "120",
      average: 26.48,
      strikeRate: 53.14,
      hundreds: 1,
      fifties: 7,
      fours: 90,
      sixes: 5
    },
    odi: {
      matches: 226,
      innings: 194,
      runs: 5615,
      highestScore: "116*",
      average: 35.31,
      strikeRate: 93.5,
      hundreds: 5,
      fifties: 36,
      fours: 476,
      sixes: 120
    },
    t20i: {
      matches: 78,
      innings: 66,
      runs: 1605,
      highestScore: "101",
      average: 29.18,
      strikeRate: 134.87,
      hundreds: 1,
      fifties: 5,
      fours: 145,
      sixes: 55
    }
  },
  bowling: {
    test: {
      matches: 18,
      innings: 22,
      wickets: 13,
      bestFigures: "2/1",
      average: 47.3,
      economy: 3.38,
      strikeRate: 83.8,
      fiveWickets: 0
    },
    odi: {
      matches: 226,
      innings: 101,
      wickets: 36,
      bestFigures: "3/34",
      average: 50.8,
      economy: 5.1,
      strikeRate: 59.6,
      fiveWickets: 0
    },
    t20i: {
      matches: 78,
      innings: 23,
      wickets: 13,
      bestFigures: "2/6",
      average: 26.0,
      economy: 7.47,
      strikeRate: 20.8,
      fiveWickets: 0
    }
  }
},

{
  "id": "625371",
  "name": "Hardik Pandya",
  "country": "India",
  "role": "All-rounder",
  "battingStyle": "Right-handed",
  "bowlingStyle": "Right-arm fast-medium",
  "image": "https://d16f573ilcot6q.cloudfront.net/wp-content/uploads/2024/07/hardik-1-1.jpg",
  "dateOfBirth": "October 11, 1993",
  "age": 31,
  "matches": {
    "test": 11,
    "odi": 86,
    "t20i": 92
  },
  "batting": {
    "test": {
      "matches": 11,
      "innings": 18,
      "runs": 532,
      "highestScore": "108",
      "average": 31.29,
      "strikeRate": 73.88,
      "hundreds": 1,
      "fifties": 4,
      "fours": 68,
      "sixes": 12
    },
    "odi": {
      "matches": 86,
      "innings": 71,
      "runs": 1796,
      "highestScore": "92*",
      "average": 34.53,
      "strikeRate": 112.21,
      "hundreds": 0,
      "fifties": 11,
      "fours": 121,
      "sixes": 65
    },
    "t20i": {
      "matches": 92,
      "innings": 73,
      "runs": 1271,
      "highestScore": "71*",
      "average": 25.42,
      "strikeRate": 139.83,
      "hundreds": 0,
      "fifties": 3,
      "fours": 86,
      "sixes": 67
    }
  },
  "bowling": {
    "test": {
      "matches": 11,
      "innings": 19,
      "wickets": 17,
      "bestFigures": "5/28",
      "average": 31.1,
      "economy": 3.4,
      "strikeRate": 54.6,
      "fiveWickets": 1
    },
    "odi": {
      "matches": 86,
      "innings": 66,
      "wickets": 84,
      "bestFigures": "4/24",
      "average": 37.4,
      "economy": 5.5,
      "strikeRate": 40.8,
      "fiveWickets": 0
    },
    "t20i": {
      "matches": 92,
      "innings": 74,
      "wickets": 73,
      "bestFigures": "4/16",
      "average": 27.6,
      "economy": 8.1,
      "strikeRate": 20.3,
      "fiveWickets": 0
    }
  }
},




  {
  "id": "1070173",
  "name": "Shubman Gill",
  "country": "India",
  "role": "Batter",
  "battingStyle": "Right-handed",
  "bowlingStyle": "Right-arm off break",
  "image": "https://img1.hscicdn.com/image/upload/f_auto,t_ds_w_960,q_50/lsci/db/PICTURES/CMS/352800/352812.3.jpg",
  "dateOfBirth": "September 8, 1999",
  "age": 25,
  "matches": {
    "test": 27,
    "odi": 44,
    "t20i": 14
  },
  "batting": {
    "test": {
      "matches": 27,
      "innings": 50,
      "runs": 1623,
      "highestScore": "128",
      "average": 34.5,
      "strikeRate": 57.4,
      "hundreds": 4,
      "fifties": 6,
      "fours": 197,
      "sixes": 18
    },
    "odi": {
      "matches": 44,
      "innings": 44,
      "runs": 2271,
      "highestScore": "208",
      "average": 61.38,
      "strikeRate": 102.87,
      "hundreds": 7,
      "fifties": 10,
      "fours": 232,
      "sixes": 36
    },
    "t20i": {
      "matches": 14,
      "innings": 14,
      "runs": 335,
      "highestScore": "126*",
      "average": 25.76,
      "strikeRate": 147.58,
      "hundreds": 1,
      "fifties": 0,
      "fours": 32,
      "sixes": 14
    }
  },
  "bowling": {
    "test": {
      "matches": 27,
      "innings": 0,
      "wickets": 0,
      "bestFigures": "N/A",
      "average": 0,
      "economy": 0,
      "strikeRate": 0,
      "fiveWickets": 0
    },
    "odi": {
      "matches": 44,
      "innings": 0,
      "wickets": 0,
      "bestFigures": "N/A",
      "average": 0,
      "economy": 0,
      "strikeRate": 0,
      "fiveWickets": 0
    },
    "t20i": {
      "matches": 14,
      "innings": 0,
      "wickets": 0,
      "bestFigures": "N/A",
      "average": 0,
      "economy": 0,
      "strikeRate": 0,
      "fiveWickets": 0
    }
  }
  },
  {
  "id": "234124",
  "name": "Rahul Dravid",
  "country": "India",
  "role": "Batsman",
  "battingStyle": "Right-handed",
  "bowlingStyle": "Right-arm off break",
  "image": "https://media.licdn.com/dms/image/v2/C5612AQFk22N1Vs0bFw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520043878162?e=2147483647&v=beta&t=xxZRxNGy5wp82lY7obJ56AztMKjYuumvfKs0v1JxIJU",
  "dateOfBirth": "January 11, 1973",
  "age": 52,
  "matches": {
    "test": 164,
    "odi": 344,
    "t20i": 1
  },
  "batting": {
    "test": {
      "matches": 164,
      "innings": 286,
      "runs": 13288,
      "highestScore": "270",
      "average": 52.31,
      "strikeRate": 42.2,
      "hundreds": 36,
      "fifties": 63,
      "fours": 1820,
      "sixes": 22
    },
    "odi": {
      "matches": 344,
      "innings": 318,
      "runs": 10889,
      "highestScore": "153",
      "average": 39.16,
      "strikeRate": 71.2,
      "hundreds": 12,
      "fifties": 83,
      "fours": 1181,
      "sixes": 25
    },
    "t20i": {
      "matches": 1,
      "innings": 1,
      "runs": 31,
      "highestScore": "31",
      "average": 31.00,
      "strikeRate": 119.2,
      "hundreds": 0,
      "fifties": 0,
      "fours": 5,
      "sixes": 0
    }
  },
  "bowling": {
    "test": {
      "matches": 164,
      "innings": 168,
      "wickets": 11,
      "bestFigures": "2/10",
      "average": 45.9,
      "economy": 2.79,
      "strikeRate": 81.5,
      "fiveWickets": 0
    },
    "odi": {
      "matches": 344,
      "innings": 314,
      "wickets": 46,
      "bestFigures": "5/27",
      "average": 43.65,
      "economy": 4.44,
      "strikeRate": 55.4,
      "fiveWickets": 1
    },
    "t20i": {
      "matches": 1,
      "innings": 1,
      "wickets": 0,
      "bestFigures": "0/25",
      "average": 25.0,
      "economy": 6.25,
      "strikeRate": 24.0,
      "fiveWickets": 0
    }
  }
},

  {
  "id": "234123",
  "name": "Virender Sehwag",
  "country": "India",
  "role": "Batsman",
  "battingStyle": "Right-handed",
  "bowlingStyle": "Right-arm off break",
  "image": "https://i.guim.co.uk/img/static/sys-images/Sport/Pix/pictures/2013/1/8/1357669833972/Virender-Sehwag--008.jpg?width=465&dpr=1&s=none&crop=none",
  "dateOfBirth": "October 20, 1978",
  "age": 46,
  "matches": {
    "test": 104,
    "odi": 251,
    "t20i": 19
  },
  "batting": {
    "test": {
      "matches": 104,
      "innings": 180,
      "runs": 8586,
      "highestScore": "319",
      "average": 52.69,
      "strikeRate": 82.23,
      "hundreds": 23,
      "fifties": 32,
      "fours": 1364,
      "sixes": 91
    },
    "odi": {
      "matches": 251,
      "innings": 245,
      "runs": 8273,
      "highestScore": "219",
      "average": 39.55,
      "strikeRate": 104.33,
      "hundreds": 15,
      "fifties": 38,
      "fours": 946,
      "sixes": 228
    },
    "t20i": {
      "matches": 19,
      "innings": 18,
      "runs": 394,
      "highestScore": "68",
      "average": 22.94,
      "strikeRate": 143.14,
      "hundreds": 0,
      "fifties": 2,
      "fours": 40,
      "sixes": 15
    }
  },
  "bowling": {
    "test": {
      "matches": 104,
      "innings": 183,
      "wickets": 40,
      "bestFigures": "5/104",
      "average": 53.6,
      "economy": 3.04,
      "strikeRate": 84.2,
      "fiveWickets": 0
    },
    "odi": {
      "matches": 251,
      "innings": 239,
      "wickets": 96,
      "bestFigures": "5/15",
      "average": 36.92,
      "economy": 4.72,
      "strikeRate": 46.2,
      "fiveWickets": 1
    },
    "t20i": {
      "matches": 19,
      "innings": 18,
      "wickets": 10,
      "bestFigures": "2/14",
      "average": 29.80,
      "economy": 7.75,
      "strikeRate": 21.4,
      "fiveWickets": 0
    }
  }
},

  {
    id: "219889",
    name: "Jasprit Bumrah",
    country: "India",
    role: "Bowler",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm fast",
    image: "https://www.sportsindiashow.com/wp-content/uploads/2024/06/Jasprit-Bumrah_TDG.jpg",
    dateOfBirth: "December 6, 1993",
    age: 31,
    matches: {
      test: 38,
      odi: 84,
      t20i: 62
    },
    batting: {
      test: {
        matches: 38,
        innings: 45,
        runs: 239,
        highestScore: "31*",
        average: 6.8,
        strikeRate: 29.8,
        hundreds: 0,
        fifties: 0,
        fours: 30,
        sixes: 6
      },
      odi: {
        matches: 84,
        innings: 27,
        runs: 19,
        highestScore: "10*",
        average: 4.8,
        strikeRate: 39.6,
        hundreds: 0,
        fifties: 0,
        fours: 1,
        sixes: 0
      },
      t20i: {
        matches: 62,
        innings: 9,
        runs: 6,
        highestScore: "3",
        average: 2.0,
        strikeRate: 42.9,
        hundreds: 0,
        fifties: 0,
        fours: 0,
        sixes: 0
      }
    },
    bowling: {
      test: {
        matches: 38,
        innings: 69,
        wickets: 159,
        bestFigures: "6/27",
        average: 20.3,
        economy: 2.7,
        strikeRate: 45.2,
        fiveWickets: 8
      },
      odi: {
        matches: 84,
        innings: 83,
        wickets: 149,
        bestFigures: "6/19",
        average: 23.3,
        economy: 4.5,
        strikeRate: 30.8,
        fiveWickets: 3
      },
      t20i: {
        matches: 62,
        innings: 62,
        wickets: 77,
        bestFigures: "3/11",
        average: 20.9,
        economy: 6.5,
        strikeRate: 19.2,
        fiveWickets: 0
      }
    }
  },
  {
  "id": "446507",
  "name": "Suryakumar Yadav",
  "country": "India",
  "role": "Batter",
  "battingStyle": "Right-handed",
  "bowlingStyle": "Right-arm medium",
  "image": "https://p.imgci.com/db/PICTURES/CMS/343500/343568.jpg",
  "dateOfBirth": "September 14, 1990",
  "age": 34,
  "matches": {
    "test": 1,
    "odi": 37,
    "t20i": 60
  },
  "batting": {
    "test": {
      "matches": 1,
      "innings": 1,
      "runs": 8,
      "highestScore": "8",
      "average": 8.0,
      "strikeRate": 47.05,
      "hundreds": 0,
      "fifties": 0,
      "fours": 1,
      "sixes": 0
    },
    "odi": {
      "matches": 37,
      "innings": 34,
      "runs": 773,
      "highestScore": "72*",
      "average": 27.6,
      "strikeRate": 101.8,
      "hundreds": 0,
      "fifties": 4,
      "fours": 76,
      "sixes": 18
    },
    "t20i": {
      "matches": 60,
      "innings": 58,
      "runs": 2141,
      "highestScore": "117",
      "average": 45.55,
      "strikeRate": 171.55,
      "hundreds": 4,
      "fifties": 17,
      "fours": 191,
      "sixes": 107
    }
  },
  "bowling": {
    "test": {
      "matches": 1,
      "innings": 0,
      "wickets": 0,
      "bestFigures": "N/A",
      "average": 0,
      "economy": 0,
      "strikeRate": 0,
      "fiveWickets": 0
    },
    "odi": {
      "matches": 37,
      "innings": 3,
      "wickets": 0,
      "bestFigures": "0/7",
      "average": 0,
      "economy": 3.5,
      "strikeRate": 0,
      "fiveWickets": 0
    },
    "t20i": {
      "matches": 60,
      "innings": 3,
      "wickets": 0,
      "bestFigures": "0/9",
      "average": 0,
      "economy": 9.0,
      "strikeRate": 0,
      "fiveWickets": 0
    }
  }
},

  {
  "id": "931581",
  "name": "Rishabh Pant",
  "country": "India",
  "role": "Wicketkeeper Batter",
  "battingStyle": "Left-handed",
  "bowlingStyle": "Right-arm medium",
  "image": "https://cf-img-a-in.tosshub.com/sites/visualstory/stories/2022_12/story_16566/assets/2.png?time=1672384565",
  "dateOfBirth": "October 4, 1997",
  "age": 27,
  "matches": {
    "test": 33,
    "odi": 30,
    "t20i": 66
  },
  "batting": {
    "test": {
      "matches": 33,
      "innings": 56,
      "runs": 2271,
      "highestScore": "159*",
      "average": 43.67,
      "strikeRate": 73.6,
      "hundreds": 5,
      "fifties": 11,
      "fours": 233,
      "sixes": 55
    },
    "odi": {
      "matches": 30,
      "innings": 26,
      "runs": 865,
      "highestScore": "125*",
      "average": 34.6,
      "strikeRate": 106.65,
      "hundreds": 1,
      "fifties": 5,
      "fours": 80,
      "sixes": 18
    },
    "t20i": {
      "matches": 66,
      "innings": 56,
      "runs": 987,
      "highestScore": "65*",
      "average": 22.43,
      "strikeRate": 126.37,
      "hundreds": 0,
      "fifties": 3,
      "fours": 80,
      "sixes": 30
    }
  },
  "bowling": {
    "test": {
      "matches": 33,
      "innings": 0,
      "wickets": 0,
      "bestFigures": "N/A",
      "average": 0,
      "economy": 0,
      "strikeRate": 0,
      "fiveWickets": 0
    },
    "odi": {
      "matches": 30,
      "innings": 0,
      "wickets": 0,
      "bestFigures": "N/A",
      "average": 0,
      "economy": 0,
      "strikeRate": 0,
      "fiveWickets": 0
    },
    "t20i": {
      "matches": 66,
      "innings": 0,
      "wickets": 0,
      "bestFigures": "N/A",
      "average": 0,
      "economy": 0,
      "strikeRate": 0,
      "fiveWickets": 0
    }
  }
},

{
  "id": "234675",
  "name": "Ravindra Jadeja",
  "country": "India",
  "role": "All-rounder",
  "battingStyle": "Left-handed",
  "bowlingStyle": "Left-arm orthodox spin",
  "image": "https://c.ndtvimg.com/2025-03/7ep9fsuo_ravindra-jadeja_625x300_03_March_25.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=738",
  "dateOfBirth": "December 6, 1988",
  "age": 36,
  "matches": {
    "test": 72,
    "odi": 197,
    "t20i": 64
  },
  "batting": {
    "test": {
      "matches": 72,
      "innings": 113,
      "runs": 2936,
      "highestScore": "175*",
      "average": 36.34,
      "strikeRate": 60.92,
      "hundreds": 4,
      "fifties": 19,
      "fours": 327,
      "sixes": 60
    },
    "odi": {
      "matches": 197,
      "innings": 129,
      "runs": 2756,
      "highestScore": "87",
      "average": 32.12,
      "strikeRate": 87.1,
      "hundreds": 0,
      "fifties": 13,
      "fours": 195,
      "sixes": 58
    },
    "t20i": {
      "matches": 64,
      "innings": 35,
      "runs": 457,
      "highestScore": "46*",
      "average": 24.05,
      "strikeRate": 124.52,
      "hundreds": 0,
      "fifties": 0,
      "fours": 34,
      "sixes": 13
    }
  },
  "bowling": {
    "test": {
      "matches": 72,
      "innings": 130,
      "wickets": 293,
      "bestFigures": "7/42",
      "average": 24.3,
      "economy": 2.45,
      "strikeRate": 59.4,
      "fiveWickets": 13
    },
    "odi": {
      "matches": 197,
      "innings": 174,
      "wickets": 220,
      "bestFigures": "5/36",
      "average": 35.0,
      "economy": 4.9,
      "strikeRate": 42.8,
      "fiveWickets": 1
    },
    "t20i": {
      "matches": 64,
      "innings": 58,
      "wickets": 51,
      "bestFigures": "3/15",
      "average": 28.4,
      "economy": 7.1,
      "strikeRate": 23.9,
      "fiveWickets": 0
    }
  }
  },
{
  id: "1070179",
  name: "Yashasvi Jaiswal",
  country: "India",
  role: "Batter",
  battingStyle: "Left-handed",
  bowlingStyle: "Right-arm leg break",
  image: "https://onecricketnews.akamaized.net/parth-editor/oc-dashboard/news-images-prod/1706941378617_YashasviJaiswal.jpeg?type=tq",
  dateOfBirth: "December 28, 2001",
  age: 23,
  matches: {
    test: 9,
    odi: 2,
    t20i: 17
  },
  batting: {
    test: {
      matches: 9,
      innings: 16,
      runs: 1028,
      highestScore: "214",
      average: 68.53,
      strikeRate: 64.3,
      hundreds: 3,
      fifties: 3,
      fours: 120,
      sixes: 18
    },
    odi: {
      matches: 2,
      innings: 2,
      runs: 60,
      highestScore: "39",
      average: 30.0,
      strikeRate: 96.7,
      hundreds: 0,
      fifties: 0,
      fours: 8,
      sixes: 1
    },
    t20i: {
      matches: 17,
      innings: 16,
      runs: 502,
      highestScore: "100",
      average: 33.46,
      strikeRate: 161.93,
      hundreds: 1,
      fifties: 4,
      fours: 54,
      sixes: 23
    }
  },
  bowling: {
    test: {
      matches: 9,
      innings: 1,
      wickets: 1,
      bestFigures: "1/15",
      average: 15.0,
      economy: 3.75,
      strikeRate: 24.0,
      fiveWickets: 0
    },
    odi: {
      matches: 2,
      innings: 0,
      wickets: 0,
      bestFigures: "0/0",
      average: 0,
      economy: 0,
      strikeRate: 0,
      fiveWickets: 0
    },
    t20i: {
      matches: 17,
      innings: 0,
      wickets: 0,
      bestFigures: "0/0",
      average: 0,
      economy: 0,
      strikeRate: 0,
      fiveWickets: 0
    }
  }
},
{
  id: "1079383",
  name: "Rinku Singh",
  country: "India",
  role: "Batter",
  battingStyle: "Left-handed",
  bowlingStyle: "Right-arm off break",
  image: "https://c.ndtvimg.com/2023-11/5ibpa3g8_rinku-singh_625x300_23_November_23.jpg?im=FeatureCrop,algorithm=dnn,width=806,height=605",
  dateOfBirth: "October 12, 1997",
  age: 27,
  matches: {
    test: 0,
    odi: 0,
    t20i: 15
  },
  batting: {
    test: {
      matches: 0,
      innings: 0,
      runs: 0,
      highestScore: "0",
      average: 0,
      strikeRate: 0,
      hundreds: 0,
      fifties: 0,
      fours: 0,
      sixes: 0
    },
    odi: {
      matches: 0,
      innings: 0,
      runs: 0,
      highestScore: "0",
      average: 0,
      strikeRate: 0,
      hundreds: 0,
      fifties: 0,
      fours: 0,
      sixes: 0
    },
    t20i: {
      matches: 15,
      innings: 11,
      runs: 356,
      highestScore: "69*",
      average: 89.0,
      strikeRate: 176.24,
      hundreds: 0,
      fifties: 2,
      fours: 29,
      sixes: 18
    }
  },
  bowling: {
    test: {
      matches: 0,
      innings: 0,
      wickets: 0,
      bestFigures: "0/0",
      average: 0,
      economy: 0,
      strikeRate: 0,
      fiveWickets: 0
    },
    odi: {
      matches: 0,
      innings: 0,
      wickets: 0,
      bestFigures: "0/0",
      average: 0,
      economy: 0,
      strikeRate: 0,
      fiveWickets: 0
    },
    t20i: {
      matches: 15,
      innings: 0,
      wickets: 0,
      bestFigures: "0/0",
      average: 0,
      economy: 0,
      strikeRate: 0,
      fiveWickets: 0
    }
  }
},
{
  id: "1070198",
  name: "Abhishek Sharma",
  country: "India",
  role: "All-rounder",
  battingStyle: "Left-handed",
  bowlingStyle: "Slow left-arm orthodox",
  image: "https://www.livemint.com/lm-img/img/2025/02/02/600x338/Abhishek_Sharma_1738512160262_1738512160537.jpg",
  dateOfBirth: "September 4, 2000",
  age: 24,
  matches: {
    test: 0,
    odi: 0,
    t20i: 0
  },
  batting: {
    test: {
      matches: 0,
      innings: 0,
      runs: 0,
      highestScore: "0",
      average: 0,
      strikeRate: 0,
      hundreds: 0,
      fifties: 0,
      fours: 0,
      sixes: 0
    },
    odi: {
      matches: 0,
      innings: 0,
      runs: 0,
      highestScore: "0",
      average: 0,
      strikeRate: 0,
      hundreds: 0,
      fifties: 0,
      fours: 0,
      sixes: 0
    },
    t20i: {
      matches: 0,
      innings: 0,
      runs: 0,
      highestScore: "0",
      average: 0,
      strikeRate: 0,
      hundreds: 0,
      fifties: 0,
      fours: 0,
      sixes: 0
    }
  },
  bowling: {
    test: {
      matches: 0,
      innings: 0,
      wickets: 0,
      bestFigures: "0/0",
      average: 0,
      economy: 0,
      strikeRate: 0,
      fiveWickets: 0
    },
    odi: {
      matches: 0,
      innings: 0,
      wickets: 0,
      bestFigures: "0/0",
      average: 0,
      economy: 0,
      strikeRate: 0,
      fiveWickets: 0
    },
    t20i: {
      matches: 0,
      innings: 0,
      wickets: 0,
      bestFigures: "0/0",
      average: 0,
      economy: 0,
      strikeRate: 0,
      fiveWickets: 0
    }
  }
},
{
  id: "720471",
  name: "Ishan Kishan",
  country: "India",
  role: "Wicketkeeper Batter",
  battingStyle: "Left-handed",
  bowlingStyle: "Right-arm medium",
  image: "https://c.ndtvimg.com/2024-02/5tv6e5c8_ishan-kishan-bcci_625x300_18_February_24.jpg?im=FaceCrop,algorithm=dnn,width=806,height=605",
  dateOfBirth: "July 18, 1998",
  age: 26,
  matches: {
    test: 2,
    odi: 27,
    t20i: 32
  },
  batting: {
    test: {
      matches: 2,
      innings: 3,
      runs: 78,
      highestScore: "52*",
      average: 78.0,
      strikeRate: 86.6,
      hundreds: 0,
      fifties: 1,
      fours: 11,
      sixes: 2
    },
    odi: {
      matches: 27,
      innings: 24,
      runs: 933,
      highestScore: "210",
      average: 42.4,
      strikeRate: 101.6,
      hundreds: 1,
      fifties: 7,
      fours: 93,
      sixes: 36
    },
    t20i: {
      matches: 32,
      innings: 30,
      runs: 796,
      highestScore: "89",
      average: 29.48,
      strikeRate: 122.6,
      hundreds: 0,
      fifties: 6,
      fours: 85,
      sixes: 29
    }
  },
  bowling: {
    test: {
      matches: 2,
      innings: 0,
      wickets: 0,
      bestFigures: "0/0",
      average: 0,
      economy: 0,
      strikeRate: 0,
      fiveWickets: 0
    },
    odi: {
      matches: 27,
      innings: 0,
      wickets: 0,
      bestFigures: "0/0",
      average: 0,
      economy: 0,
      strikeRate: 0,
      fiveWickets: 0
    },
    t20i: {
      matches: 32,
      innings: 0,
      wickets: 0,
      bestFigures: "0/0",
      average: 0,
      economy: 0,
      strikeRate: 0,
      fiveWickets: 0
    }
  }
  },
  {
  id: "425943",
  name: "Sanju Samson",
  country: "India",
  role: "Wicketkeeper-Batter",
  battingStyle: "Right-handed",
  bowlingStyle: "Right-arm off break",
  image: "https://thefederal.com/h-upload/2024/10/13/482752-pti10122024000331b.webp",
  dateOfBirth: "November 11, 1994",
  age: 30,
  matches: {
    test: 0,
    odi: 16,
    t20i: 42,
    
  },
  batting: {
    test: {
      matches: 0,
      innings: 0,
      runs: 0,
      highestScore: "0",
      average: 0.0,
      strikeRate: 0.0,
      hundreds: 0,
      fifties: 0,
      fours: 0,
      sixes: 0
    },
    odi: {
      matches: 16,
      innings: 14,
      runs: 510,
      highestScore: "108",
      average: 56.66,
      strikeRate: 99.60,
      hundreds: 1,
      fifties: 3,
      fours: 34,
      sixes: 22
    },
    t20i: {
      matches: 42,
      innings: 38,
      runs: 861,
      highestScore: "111",
      average: 25.32,
      strikeRate: 152.38,
      hundreds: 3,
      fifties: 2,
      fours: 71,
      sixes: 49
    },
    
  },
  bowling: {
    test: {
      matches: 0,
      innings: 0,
      wickets: 0,
      bestFigures: "0/0",
      average: 0.0,
      economy: 0.0,
      strikeRate: 0.0,
      fiveWickets: 0
    },
    odi: {
      matches: 16,
      innings: 0,
      wickets: 0,
      bestFigures: "0/0",
      average: 0.0,
      economy: 0.0,
      strikeRate: 0.0,
      fiveWickets: 0
    },
    t20i: {
      matches: 42,
      innings: 0,
      wickets: 0,
      bestFigures: "0/0",
      average: 0.0,
      economy: 0.0,
      strikeRate: 0.0,
      fiveWickets: 0
    },
    
  }
},

{
  id: "642519",
  name: "Shreyas Iyer",
  country: "India",
  role: "Batter",
  battingStyle: "Right-handed",
  bowlingStyle: "Right-arm leg break",
  image: "https://preview.redd.it/what-do-you-think-about-the-future-of-shreyas-iyer-man-did-v0-8x7os4rxbxke1.jpeg?width=640&crop=smart&auto=webp&s=655f04682f9ae3f044a3b334b75f692edd149c8e",
  dateOfBirth: "December 6, 1994",
  age: 30,
  matches: {
    test: 14,
    odi: 70,
    t20i: 51
  },
  batting: {
    test: {
      matches: 14,
      innings: 24,
      runs: 811,
      highestScore: "105",
      average: 36.86,
      strikeRate: 63.01,
      hundreds: 1,
      fifties: 5,
      fours: 94,
      sixes: 16
    },
    odi: {
      matches: 70,
      innings: 66,
      runs: 2845,
      highestScore: "128*",
      average: 48.22,
      strikeRate: 100.5,
      hundreds: 5,
      fifties: 22,
      fours: 250,
      sixes: 50
    },
    t20i: {
      matches: 51,
      innings: 47,
      runs: 1104,
      highestScore: "74*",
      average: 30.66,
      strikeRate: 135.98,
      hundreds: 0,
      fifties: 8,
      fours: 100,
      sixes: 30
    }
  },
  bowling: {
    test: {
      matches: 14,
      innings: 1,
      wickets: 0,
      bestFigures: "0/0",
      average: 0,
      economy: 0,
      strikeRate: 0,
      fiveWickets: 0
    },
    odi: {
      matches: 70,
      innings: 3,
      wickets: 0,
      bestFigures: "0/0",
      average: 0,
      economy: 0,
      strikeRate: 0,
      fiveWickets: 0
    },
    t20i: {
      matches: 51,
      innings: 1,
      wickets: 0,
      bestFigures: "0/0",
      average: 0,
      economy: 0,
      strikeRate: 0,
      fiveWickets: 0
    }
  }
},

{
  id: "776533",
  name: "Shivam Dube",
  country: "India",
  role: "All-rounder",
  battingStyle: "Left-handed",
  bowlingStyle: "Right-arm medium",
  image: "https://upload.wikimedia.org/wikipedia/commons/6/63/Shivam_Dube_in_PMO_New_Delhi.jpg",
  dateOfBirth: "June 26, 1993",
  age: 31,
  matches: {
    test: 0,
    odi: 1,
    t20i: 21
  },
  batting: {
    test: {
      matches: 0,
      innings: 0,
      runs: 0,
      highestScore: "0",
      average: 0,
      strikeRate: 0,
      hundreds: 0,
      fifties: 0,
      fours: 0,
      sixes: 0
    },
    odi: {
      matches: 1,
      innings: 1,
      runs: 9,
      highestScore: "9",
      average: 9.0,
      strikeRate: 90.0,
      hundreds: 0,
      fifties: 0,
      fours: 1,
      sixes: 0
    },
    t20i: {
      matches: 21,
      innings: 19,
      runs: 276,
      highestScore: "63",
      average: 25.09,
      strikeRate: 142.9,
      hundreds: 0,
      fifties: 1,
      fours: 21,
      sixes: 14
    }
  },
  bowling: {
    test: {
      matches: 0,
      innings: 0,
      wickets: 0,
      bestFigures: "0/0",
      average: 0,
      economy: 0,
      strikeRate: 0,
      fiveWickets: 0
    },
    odi: {
      matches: 1,
      innings: 0,
      wickets: 0,
      bestFigures: "0/0",
      average: 0,
      economy: 0,
      strikeRate: 0,
      fiveWickets: 0
    },
    t20i: {
      matches: 21,
      innings: 10,
      wickets: 5,
      bestFigures: "3/30",
      average: 29.8,
      economy: 9.2,
      strikeRate: 19.4,
      fiveWickets: 0
    }
  }
},
{
  id: "1175485",
  name: "Tilak Varma",
  country: "India",
  role: "Batter",
  battingStyle: "Left-handed",
  bowlingStyle: "Right-arm off break",
  image: "https://onecricketnews.akamaized.net/parth-editor/oc-dashboard/news-images-prod/1706941378617_YashasviJaiswal.jpeg?type=tq",
  dateOfBirth: "November 8, 2002",
  age: 22,
  matches: {
    test: 0,
    odi: 0,
    t20i: 7
  },
  batting: {
    test: {
      matches: 0,
      innings: 0,
      runs: 0,
      highestScore: "0",
      average: 0,
      strikeRate: 0,
      hundreds: 0,
      fifties: 0,
      fours: 0,
      sixes: 0
    },
    odi: {
      matches: 0,
      innings: 0,
      runs: 0,
      highestScore: "0",
      average: 0,
      strikeRate: 0,
      hundreds: 0,
      fifties: 0,
      fours: 0,
      sixes: 0
    },
    t20i: {
      matches: 7,
      innings: 6,
      runs: 156,
      highestScore: "49",
      average: 26.0,
      strikeRate: 139.64,
      hundreds: 0,
      fifties: 0,
      fours: 11,
      sixes: 9
    }
  },
  bowling: {
    test: {
      matches: 0,
      innings: 0,
      wickets: 0,
      bestFigures: "0/0",
      average: 0,
      economy: 0,
      strikeRate: 0,
      fiveWickets: 0
    },
    odi: {
      matches: 0,
      innings: 0,
      wickets: 0,
      bestFigures: "0/0",
      average: 0,
      economy: 0,
      strikeRate: 0,
      fiveWickets: 0
    },
    t20i: {
      matches: 7,
      innings: 1,
      wickets: 1,
      bestFigures: "1/10",
      average: 10.0,
      economy: 10.0,
      strikeRate: 6.0,
      fiveWickets: 0
    }
  }
},



  {
    id: "422108",
    name: "Joe Root",
    country: "England",
    role: "Batter",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm off break",
    image: "https://www.googleapis.com/download/storage/v1/b/kaggle-user-content/o/inbox%2F14601120%2F206a95f024593a743f0eec32df98ad69%2Fwp4505049-joe-root-wallpapers.jpg?generation=1688198252891482&alt=media",
    dateOfBirth: "December 30, 1990",
    age: 34,
    matches: {
      test: 142,
      odi: 161,
      t20i: 32
    },
    batting: {
      test: {
        matches: 142,
        innings: 261,
        runs: 12537,
        highestScore: "254",
        average: 50.8,
        strikeRate: 56.9,
        hundreds: 31,
        fifties: 62,
        fours: 1356,
        sixes: 33
      },
      odi: {
        matches: 161,
        innings: 153,
        runs: 6311,
        highestScore: "133*",
        average: 48.9,
        strikeRate: 86.8,
        hundreds: 16,
        fifties: 39,
        fours: 548,
        sixes: 47
      },
      t20i: {
        matches: 32,
        innings: 30,
        runs: 893,
        highestScore: "90*",
        average: 35.7,
        strikeRate: 126.7,
        hundreds: 0,
        fifties: 5,
        fours: 75,
        sixes: 31
      }
    },
    bowling: {
      test: {
        matches: 142,
        innings: 89,
        wickets: 48,
        bestFigures: "5/8",
        average: 54.5,
        economy: 3.6,
        strikeRate: 89.9,
        fiveWickets: 1
      },
      odi: {
        matches: 161,
        innings: 35,
        wickets: 29,
        bestFigures: "3/52",
        average: 54.3,
        economy: 5.9,
        strikeRate: 54.6,
        fiveWickets: 0
      },
      t20i: {
        matches: 32,
        innings: 6,
        wickets: 6,
        bestFigures: "2/9",
        average: 35.5,
        economy: 8.1,
        strikeRate: 26.3,
        fiveWickets: 0
      }
    }
  },
  {
    id: "311158",
    name: "Kane Williamson",
    country: "New Zealand",
    role: "Batter",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm off break",
    image: "https://img.etimg.com/thumb/width-1600,height-900,imgsize-85668,resizemode-75,msid-118783238/news/sports/kane-williamson-vs-indian-spinners-watch-out-for-the-battle-within-battle-in-champions-trophy-final.jpg",
    dateOfBirth: "August 8, 1990",
    age: 34,
    matches: {
      test: 98,
      odi: 161,
      t20i: 87
    },
    batting: {
      test: {
        matches: 98,
        innings: 174,
        runs: 8942,
        highestScore: "251",
        average: 54.9,
        strikeRate: 51.4,
        hundreds: 29,
        fifties: 33,
        fours: 967,
        sixes: 22
      },
      odi: {
        matches: 161,
        innings: 155,
        runs: 6721,
        highestScore: "148",
        average: 48.4,
        strikeRate: 82.1,
        hundreds: 13,
        fifties: 45,
        fours: 556,
        sixes: 54
      },
      t20i: {
        matches: 87,
        innings: 83,
        runs: 2464,
        highestScore: "95",
        average: 33.7,
        strikeRate: 124.1,
        hundreds: 0,
        fifties: 17,
        fours: 223,
        sixes: 58
      }
    },
    bowling: {
      test: {
        matches: 98,
        innings: 30,
        wickets: 29,
        bestFigures: "4/44",
        average: 40.8,
        economy: 3.5,
        strikeRate: 70.2,
        fiveWickets: 0
      },
      odi: {
        matches: 161,
        innings: 25,
        wickets: 36,
        bestFigures: "4/22",
        average: 33.4,
        economy: 5.2,
        strikeRate: 38.1,
        fiveWickets: 0
      },
      t20i: {
        matches: 87,
        innings: 9,
        wickets: 6,
        bestFigures: "2/16",
        average: 30.2,
        economy: 7.1,
        strikeRate: 25.5,
        fiveWickets: 0
      }
    }
  },
  {
    id: "381471",
    name: "Babar Azam",
    country: "Pakistan",
    role: "Batter",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm off break",
    image: "data:image/jpeg;base64,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",
    dateOfBirth: "October 15, 1994",
    age: 30,
    matches: {
      test: 53,
      odi: 111,
      t20i: 113
    },
    batting: {
      test: {
        matches: 53,
        innings: 97,
        runs: 3898,
        highestScore: "196",
        average: 43.3,
        strikeRate: 54.3,
        hundreds: 9,
        fifties: 26,
        fours: 468,
        sixes: 14
      },
      odi: {
        matches: 111,
        innings: 109,
        runs: 5729,
        highestScore: "158",
        average: 56.7,
        strikeRate: 88.9,
        hundreds: 19,
        fifties: 31,
        fours: 532,
        sixes: 40
      },
      t20i: {
        matches: 113,
        innings: 110,
        runs: 3987,
        highestScore: "122",
        average: 41.1,
        strikeRate: 128.8,
        hundreds: 3,
        fifties: 33,
        fours: 432,
        sixes: 58
      }
    },
    bowling: {
      test: {
        matches: 53,
        innings: 0,
        wickets: 0,
        bestFigures: "0/0",
        average: 0,
        economy: 0,
        strikeRate: 0,
        fiveWickets: 0
      },
      odi: {
        matches: 111,
        innings: 0,
        wickets: 0,
        bestFigures: "0/0",
        average: 0,
        economy: 0,
        strikeRate: 0,
        fiveWickets: 0
      },
      t20i: {
        matches: 113,
        innings: 0,
        wickets: 0,
        bestFigures: "0/0",
        average: 0,
        economy: 0,
        strikeRate: 0,
        fiveWickets: 0
      }
    }
  },
  {
  "id": "559235",
  "name": "Kuldeep Yadav",
  "country": "India",
  "role": "Bowler",
  "battingStyle": "Left-handed",
  "bowlingStyle": "Left-arm wrist spin",
  "image": "data:image/jpeg;base64,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",
  "dateOfBirth": "December 14, 1994",
  "age": 30,
  "matches": {
    "test": 12,
    "odi": 95,
    "t20i": 35
  },
  "batting": {
    "test": {
      "matches": 12,
      "innings": 15,
      "runs": 159,
      "highestScore": "40*",
      "average": 15.9,
      "strikeRate": 50.7,
      "hundreds": 0,
      "fifties": 0,
      "fours": 18,
      "sixes": 2
    },
    "odi": {
      "matches": 95,
      "innings": 21,
      "runs": 148,
      "highestScore": "19*",
      "average": 9.2,
      "strikeRate": 65.2,
      "hundreds": 0,
      "fifties": 0,
      "fours": 13,
      "sixes": 3
    },
    "t20i": {
      "matches": 35,
      "innings": 5,
      "runs": 11,
      "highestScore": "8",
      "average": 11.0,
      "strikeRate": 73.3,
      "hundreds": 0,
      "fifties": 0,
      "fours": 0,
      "sixes": 0
    }
  },
  "bowling": {
    "test": {
      "matches": 12,
      "innings": 22,
      "wickets": 42,
      "bestFigures": "5/40",
      "average": 21.55,
      "economy": 3.3,
      "strikeRate": 39.1,
      "fiveWickets": 3
    },
    "odi": {
      "matches": 95,
      "innings": 93,
      "wickets": 171,
      "bestFigures": "6/25",
      "average": 26.5,
      "economy": 5.0,
      "strikeRate": 31.8,
      "fiveWickets": 2
    },
    "t20i": {
      "matches": 35,
      "innings": 34,
      "wickets": 59,
      "bestFigures": "5/24",
      "average": 13.2,
      "economy": 6.7,
      "strikeRate": 11.7,
      "fiveWickets": 1
    }
  }
},

  
];