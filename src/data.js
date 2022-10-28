import secrets from "./assets/secrets.png";
import todolist from "./assets/todolist.png";
import blog from "./assets/blog.png";
import newsletter from "./assets/newsletter.png";

const cardData = [
  {
    id: "1",
    title: "Secrets",
    content:
      "Share your secret anonymously, and see the secrets others have shared.",
    image: secrets,
    liveDemo: "https://mighty-fjord-24795.herokuapp.com",
    GitHub: "https://github.com/MohammedNooriGit/Secrets-Authentication",
  },
  {
    id: "2",
    title: "To Do List",
    content:
      "A to do list where you can add and remove items. You can also create your own custom list by adding /listNameHere.",
    image: todolist,
    liveDemo: "https://blooming-cove-53625.herokuapp.com",
    GitHub: "https://github.com/MohammedNooriGit/todolist-v1",
  },
  {
    id: "3",
    title: "Blog Site",
    content:
      "A blog website where you can post your blogs. To make a new post type /compose at the end of the URL.",
    image: blog,
    liveDemo: "https://young-scrubland-85137.herokuapp.com",
    GitHub: "https://github.com/MohammedNooriGit/Blog-with-Database",
  },
  {
    id: "4",
    title: "Newsletter Signup",
    content: "Allows you to subscribe to my newsletter.",
    image: newsletter,
    liveDemo: "https://enigmatic-shore-85799.herokuapp.com",
    GitHub: "https://github.com/MohammedNooriGit/News-Letter-Signup",
  },
];

export default cardData;
