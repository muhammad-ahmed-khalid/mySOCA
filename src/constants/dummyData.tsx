import Batting from "@Container/AppContainer/Performance/Batting";
import Bowling from "@Container/AppContainer/Performance/Bowling";
import Fielding from "@Container/AppContainer/Performance/Fielding";
import TotalGames from "@Container/AppContainer/Performance/TotalGames";

export const TransactionList = [
  {
    id: 0,
    label: '1:1 Sessions',
    date: 'Jun 4 2022',
    pts: '1400',
  },
  {
    id: 1,
    label: 'Batting Glove',
    date: 'Sep 4 2022',
    pts: '2800',
  },
  {
    id: 2,
    label: 'MLC hat',
    date: 'Feb 4 2022',
    pts: '300',
  },
  {
    id: 3,
    label: 'Monthly Session',
    date: 'Jun 10 2022',
    pts: '600',
  },
];

export const FaqsList = [
  {
    id: 0,
    label: 'Gold',
    desc: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor  consequat aute irure dolor',
  },
  {
    id: 1,
    label: 'Silver',
    desc: `· 1:1 Sessions \n· 1 Bat \n· Free Practice`,
  },
  {
    id: 2,
    label: 'Platinum',
    desc: 'Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor  consequat aute irure dolor',
  },
];

export const performanceTabs = [
  {
    name: 'Total Games',
    title: 'Total Games',
    component: TotalGames,
  },
  {
    name: 'Batting',
    title: 'Batting',
    component: Batting,
  },
  {
    name: 'Bowling',
    title: 'Bowling',
    component: Bowling,
  },
  {
    name: 'Fielding',
    title: 'Fielding',
    component: Fielding,
  },
];

export const CATEGORIES_MAIN = [
  {
    id: 1,
    score : "12",
    cate: "Catch Drops",
  },
  {
    id: 2,
    score : "12",
    cate: "Misfields",
  },
  {
    id: 3,
    score : "12",
    cate: "Missed R/O",
  },
  {
    id: 4,
    score : "12",
    cate: "Full Toss",
  },
  {
    id: 5,
    score : "12",
    cate: "Short Balls",
  },
  {
    id: 6,
    score : "12",
    cate: "Stumpings",
  },
];