import Seasons from "./components/Seasons.jsx";
const App = () => {
  
  const seinfeldSeasons = [
    {
      id: 1,
      title: "Seinfeld Season One",
      episodes: [
        {
          id: 1,
          title: "The Seinfeld Chronicles",
          views: 15300000,
        },
        {
          id: 2,
          title: "The Stake Out",
          views: 14200000,
        },
        {
          id: 3,
          title: "The Robbery",
          views: 13800000,
        },
        {
          id: 4,
          title: "Male Unbonding",
          views: 13100000,
        },
        {
          id: 5,
          title: "The Stock Tip",
          views: 14500000,
        },
      ],
    },
    {
      id: 2,
      title: "Seinfeld Season Two",
      episodes: [
        { id: 1, title: "The Ex-Girlfriend", views: 1820000 },
        { id: 2, title: "The Pony Remark", views: 1950000 },
        { id: 3, title: "The Jacket", views: 2100000 },
        { id: 4, title: "The Phone Message", views: 1870000 },
        { id: 5, title: "The Apartment", views: 2200000 },
        { id: 6, title: "The Statue", views: 1760000 },
        { id: 7, title: "The Revenge", views: 1980000 },
        { id: 8, title: "The Heart Attack", views: 1840000 },
        { id: 9, title: "The Deal", views: 2300000 },
        { id: 10, title: "The Baby Shower", views: 1790000 },
        { id: 11, title: "The Chinese Restaurant", views: 2500000 },
        { id: 12, title: "The Busboy", views: 1720000 },
      ],
    },
    {
      id: 3,
      title: "Seinfeld Season Three",
      episodes: [
        { id: 1, title: "The Note", views: 2050000 },
        { id: 2, title: "The Truth", views: 1890000 },
        { id: 3, title: "The Pen", views: 2150000 },
        { id: 4, title: "The Dog", views: 1780000 },
        { id: 5, title: "The Library", views: 2210000 },
        { id: 6, title: "The Parking Garage", views: 2400000 },
        { id: 7, title: "The Cafe", views: 1930000 },
        { id: 8, title: "The Tape", views: 2080000 },
        { id: 9, title: "The Nose Job", views: 1860000 },
        { id: 10, title: "The Stranded", views: 1750000 },
        { id: 11, title: "The Alternate Side", views: 2320000 },
        { id: 12, title: "The Red Dot", views: 2460000 },
        { id: 13, title: "The Subway", views: 2520000 },
        { id: 14, title: "The Pez Dispenser", views: 2380000 },
        { id: 15, title: "The Suicide", views: 1810000 },
        { id: 16, title: "The Fix-Up", views: 1940000 },
        { id: 17, title: "The Boyfriend (Part 1)", views: 2700000 },
        { id: 18, title: "The Boyfriend (Part 2)", views: 2750000 },
        { id: 19, title: "The Limo", views: 1990000 },
        { id: 20, title: "The Good Samaritan", views: 1830000 },
        { id: 21, title: "The Letter", views: 2010000 },
        { id: 22, title: "The Parking Space", views: 2230000 },
        { id: 23, title: "The Keys", views: 2600000 },
      ],
    },
  ];

  return (
    <>
      <Seasons seasons={seinfeldSeasons} />
    </>
  );
};

export default App;
