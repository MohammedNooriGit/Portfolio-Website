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
    liveDemo: "https://mohammed-secrets.onrender.com",
    GitHub: "https://github.com/MohammedNooriGit/secrets-complete",
  },
  {
    id: "2",
    title: "To Do List",
    content:
      "A to do list where you can add and remove items. You can also create your own custom list by adding /listNameHere.",
    image: todolist,
    liveDemo: "https://mohammed-todolist.onrender.com",
    GitHub: "https://github.com/MohammedNooriGit/todolist-complete",
  },
  {
    id: "3",
    title: "Blog Site",
    content:
      "A blog website where you can post your blogs. To make a new post type /compose at the end of the URL.",
    image: blog,
    liveDemo: "https://mohammed-blog.onrender.com",
    GitHub: "https://github.com/MohammedNooriGit/blog-complete",
  },
  {
    id: "4",
    title: "Newsletter Signup",
    content: "Allows you to subscribe to my newsletter.",
    image: newsletter,
    liveDemo: "https://mohammed-newsletter.onrender.com",
    GitHub: "https://github.com/MohammedNooriGit/newsletter-signup-complete",
  },
];

export default cardData;
