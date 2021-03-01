import movie1 from "../Assets/Movie 1.jpg";
import movie2 from "../Assets/Movie 2.jpg";
import movie3 from "../Assets/Movie 3.jpg";
import movie4 from "../Assets/Movie 4.jpg";
import movie5 from "../Assets/Movie 5.jpg";
import movie6 from "../Assets/Movie 6.jpg";
import movie7 from "../Assets/Movie 7.jpg";

const moviesData = [
  {
    id: Math.floor(Math.random() * 1000) + 1,
    title: "Breaking Bad",
    img: movie1,
    rating: 5,
    description:
      "A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
    trailer: "https://www.youtube.com/watch?v=HhesaQXLuRY",
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    title: "Sons of Anarchy",
    img: movie2,
    rating: 4,
    description:
      "A biker struggles to balance being a father and being involved in an outlaw motorcycle club.",
    trailer: "https://www.youtube.com/watch?v=ia4cggzpqYQ",
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    title: "The Killing",
    img: movie3,
    rating: 3,
    description:
      "A police investigation, the saga of a grieving family, and a Seattle mayoral campaign all interlock after the body of 17-year-old Rosie Larsen is found in the trunk of a submerged car.",
    trailer: "https://www.youtube.com/watch?v=OkbfvPeH3G0",
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    title: "True Detective",
    img: movie4,
    rating: 2,
    description:
      "Seasonal anthology series in which police investigations unearth the personal and professional secrets of those involved, both within and outside the law.",
    trailer: "https://www.youtube.com/watch?v=fVQUcaO4AvE",
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    title: "Shingeki no kyojin",
    img: movie5,
    rating: 5,
    description:
      "After his hometown is destroyed and his mother is killed, young Eren Jaeger vows to cleanse the earth of the giant humanoid Titans that have brought humanity to the brink of extinction.",
    trailer: "https://www.youtube.com/watch?v=M_OauHnAFc8",
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    title: "Narcos",
    img: movie6,
    rating: 4,
    description:
      "A chronicled look at the criminal exploits of Colombian drug lord Pablo Escobar, as well as the many other drug kingpins who plagued the country through the years.",
    trailer: "https://www.youtube.com/watch?v=xl8zdCY-abw",
  },
  {
    id: Math.floor(Math.random() * 1000) + 1,
    title: "Dark",
    img: movie7,
    rating: 3,
    description:
      "A family saga with a supernatural twist, set in a German town, where the disappearance of two young children exposes the relationships among four families.",
    trailer: "https://www.youtube.com/watch?v=rrwycJ08PSA",
  },
];
export default moviesData;
