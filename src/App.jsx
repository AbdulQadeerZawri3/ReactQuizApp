import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Trivia from "./components/trivia";
import "./index.css";
import Timer from "./components/Timer";

export default function App() {
  const [username, setUsername] = useState(null);
  const [questionNo, setQuestionNo] = useState(1);
  const [stop, setStop] = useState(false);
  const [earned, setEarned] = useState("$0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false
        },
        {
          text: "Watches",
          correct: true
        },
        {
          text: "Food",
          correct: false
        },
        {
          text: "Cosmetic",
          correct: false
        }
      ]
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true
        },
        {
          text: "2005",
          correct: false
        },
        {
          text: "2006",
          correct: false
        },
        {
          text: "2007",
          correct: false
        }
      ]
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false
        },
        {
          text: "Leonardo Di Caprio",
          correct: false
        },
        {
          text: "Denzel Washington",
          correct: false
        },
        {
          text: "Daniel Red Cliff",
          correct: true
        }
      ]
    },
    {
      id: 4,
      question: "The theme of the World Red Cross and Red Crescent Day was?",
      answers: [
        {
          text: "Dignity for all – focus on Children",
          correct: true
        },
        {
          text: "Nourishment for all-focus on children",
          correct: false
        },
        {
          text: "Focus on health for all",
          correct: false
        },
        {
          text: "Dignity for all – focus on women",
          correct: false
        }
      ]
    },

    {
      id: 5,
      question: "________ is celebrated on September 27 every year.",
      answers: [
        {
          text: "National Integration Day",
          correct: false
        },
        {
          text: "Teacher's Day",
          correct: false
        },
        {
          text: " International Literacy Day",
          correct: false
        },
        {
          text: "World Tourism Day",
          correct: true
        }
      ]
    },
    {
      id: 6,
      question: "________ day is observed as Sports Day every year.?",
      answers: [
        {
          text: " 29th August",
          correct: true
        },
        {
          text: "3rd Feb",
          correct: false
        },
        {
          text: "5th July",
          correct: false
        },
        {
          text: "17th Dec",
          correct: false
        }
      ]
    },
    {
      id: 7,
      question: "The abbreviation ‘fob’ stands for?",
      answers: [
        {
          text: "Fellow of Britain",
          correct: false
        },
        {
          text: "Free of Bargain",
          correct: false
        },
        {
          text: "Free on Board.",
          correct: true
        },
        {
          text: "None of these",
          correct: false
        }
      ]
    },
    {
      id: 8,
      question: "According to a proverb, _______ is the mother of invention.",
      answers: [
        {
          text: "Science",
          correct: false
        },
        {
          text: "Necessity",
          correct: true
        },
        {
          text: "Society",
          correct: false
        },
        {
          text: "Problems",
          correct: false
        }
      ]
    },
    {
      id: 9,
      question:
        "Vault, uneven bars, and floor exercise are events in which sport?",
      answers: [
        {
          text: "Cricket",
          correct: false
        },
        {
          text: "Gymnastics",
          correct: true
        },
        {
          text: "Hockey",
          correct: false
        },
        {
          text: "Football",
          correct: false
        }
      ]
    },
    {
      id: 10,
      question: "Which of the following is an Island country?",
      answers: [
        {
          text: "Maldives",
          correct: true
        },
        {
          text: "Yemen",
          correct: false
        },
        {
          text: "Pakistan",
          correct: false
        },
        {
          text: "China",
          correct: false
        }
      ]
    },
    {
      id: 11,
      question: "The Sun is approximately _____ miles away from the Earth?",
      answers: [
        {
          text: "110 million",
          correct: false
        },
        {
          text: "200,000 ",
          correct: false
        },
        {
          text: "1 Billion",
          correct: false
        },
        {
          text: "93 million",
          correct: true
        }
      ]
    },
    {
      id: 12,
      question: "Since 2002, what is the currency of Greece?",
      answers: [
        {
          text: "Dinaar",
          correct: false
        },
        {
          text: "Dollar",
          correct: false
        },
        {
          text: "Euro",
          correct: true
        },
        {
          text: "Ruppee",
          correct: false
        }
      ]
    },
    {
      id: 13,
      question:
        " ________ ship was not the part of Christopher Columbus’s first voyage in 1492??",
      answers: [
        {
          text: "La Gorda",
          correct: false
        },
        {
          text: " Pinta",
          correct: true
        },
        {
          text: "Nina",
          correct: false
        },
        {
          text: "Santa Maria",
          correct: false
        }
      ]
    },
    {
      id: 14,
      question: "The currency of ____ is Rial?",
      answers: [
        {
          text: "Libya",
          correct: false
        },
        {
          text: "Indonesia",
          correct: false
        },
        {
          text: "India",
          correct: false
        },
        {
          text: "Iran",
          correct: true
        }
      ]
    },
    {
      id: 15,
      question: "Pakistan’s Nuclear Plant is located in?",
      answers: [
        {
          text: "Rawalpindi",
          correct: false
        },
        {
          text: "Lahore",
          correct: false
        },
        {
          text: "Sargoda",
          correct: false
        },
        {
          text: "Kahuta",
          correct: true
        }
      ]
    }
  ];
  const moneyListArray = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" }
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNo > 1 &&
      setEarned(moneyListArray.find((m) => m.id === questionNo - 1).amount);
  }, [moneyListArray, questionNo]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {stop ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNo={questionNo} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    setStop={setStop}
                    questionNo={questionNo}
                    setQuestionNo={setQuestionNo}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyListArray.map((m) => (
                <li
                  className={
                    questionNo === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}
