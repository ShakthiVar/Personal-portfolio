import PizzaTime from "../assets/images/portfolio/PizzaTime.jpeg";
import TravelWithCatherine from "../assets/images/portfolio/TravelWithCatherine.png";
import GuessMyNumber from "../assets/images/portfolio/GuessMyNumber.jpeg";
import Forkify from "../assets/images/portfolio/Forkify.jpeg";
import Edgy from "../assets/images/portfolio/Edgy.jpeg";
import Bankist from "../assets/images/portfolio/Bankist.jpeg";
import FrontendMentorSolutions from "../assets/images/portfolio/FrontendMentorSolutions.jpeg";
import resume_project from "../assets/images/portfolio/resume_project.png";
import utubesearch from "../assets/images/portfolio/utubesearch.png";
import alumni from "../assets/images/portfolio/alumni.jpg"


const ProjectsPreviewData = [
  {
    id: "Social Alumni Application",
    name:"Social Alumni Application",
    img: alumni,
    stack: ["< Kotlin />", "< Android />,<Firebase />"],
    description:
      "Alumni and students can communicate with one another by posting on social media and following one another. They can also communicate with one another in chatrooms, making the entire network feel more connected. The main language for creating this application is Kotlin, while Firebase serves as a database for storing data in the tables"
  },
  {
    id: "Youtube Search",
    name: "Youtube Search",
    img: utubesearch,
    stack: ["< React.js />", "< Youtube API V3 Data />"],
    description:
      "Search engine and YouTube video player, made with React.js .",
  },
  {
    id: "Job Profile Recommender Systems",
    name: "Job Profile Recommender Systems",
    img: resume_project,
    stack: ["< HTML/>", "< CSS />", "< Javascript />","<Python/>","<Flask/>"],
    description:
      "AI algorithms are used by job recommendation systems to match job searchers  with positions that match their experience and credentials by analyzing applicant data, job descriptions, and candidate profiles.",
  },
];

const ProjectsData = [
  {
    id: "Social Alumni Application",
    name:"Social Alumni Application",
    img: alumni,
    stack: ["< Kotlin />", "< Android />,<Firebase />"],
    description:
      "Alumni and students can communicate with one another by posting on social media and following one another. They can also communicate with one another in chatrooms, making the entire network feel more connected. The main language for creating this application is Kotlin, while Firebase serves as a database for storing data in the tables"
  },
  {
    id: "Youtube Search",
    name: "Youtube Search",
    img: utubesearch,
    stack: ["< React.js />", "< Youtube API V3 Data />"],
    description:
      "Search engine and YouTube video player, made with React.js .",
  },
  {
    id: "Job Profile Recommender Systems",
    img: resume_project,
    name: "Job Profile Recommender Systems",
    stack: ["< HTML/>", "< CSS />", "< Javascript />","<Python/>","<Flask/>"],
    description:
      "AI algorithms are used by job recommendation systems to match job searchers  with positions that match their experience and credentials by analyzing applicant data, job descriptions, and candidate profiles.",
  },
];

export { ProjectsData, ProjectsPreviewData };
