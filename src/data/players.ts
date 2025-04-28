import { Player } from '../types';

export const players: Player[] = [
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
    image: "https://images.pexels.com/photos/2570244/pexels-photo-2570244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    id: "219889",
    name: "Jasprit Bumrah",
    country: "India",
    role: "Bowler",
    battingStyle: "Right-handed",
    bowlingStyle: "Right-arm fast",
    image: "https://images.pexels.com/photos/4159042/pexels-photo-4159042.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
  }
];