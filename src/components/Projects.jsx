import React from "react";
import Card from "./Card";
import { SippingCoffee } from "./Blob";

export default function Projects() {
  return (
    <div className="relative min-h-[900px] w-full bg-second dark:bg-dsecond pb-20">
      <SippingCoffee />
      <div className="container mx-auto relative px-4">
        <h1 className="text-center sm:text-left font-Poppins py-16 text-5xl uppercase font-bold relative text-swhite">
          Projects
        </h1>
      </div>
      <div className="lg:container mx-auto relative px-4 min-h-full">
        <div className="columns-lg text-center">
          <div className="text-swhite font-Poppins overflow-auto text-left pb-20">
            <p className="text-[1rem] sm:w-2/3 sm:text-xl font-Montserrat">
              These are some of the projects that I have worked on. I have used
              MongoDB as NoSQL database to keep track of user information In the
              Secrets project as well as using Google OAuth to make sure that no
              one can post on the site without first verifying if they're
              registered. The To Do List was a project that utilized
              Node.js/Express to deal with functions on the server side. The
              Blog website utilized Express routing to deal with new blog data.
              And at last, the Newsletter Signup website utilized Mailchimp API
              to handle new email registrations and allowed me send newsletters
              to my subscribers.
            </p>
          </div>
          <Card />
        </div>
      </div>
    </div>
  );
}
