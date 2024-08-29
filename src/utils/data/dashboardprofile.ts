import graytwitter from "public/images/gray_twitter.svg";
import grayinsta from "public/images/gray_insta.svg";
import grayweb from "public/images/gray_website.svg";

import email from "public/images/email_Icon.svg";
import phone from "public/images/phone_Icon.svg";
import language from "public/images/language_Icon.svg";

export const sideprofiledata = [
  {
    id: "1",
    title: "Additional Details",
    imgMail: email,
    labelFirst: "Email",
    firstText: "tosineme3@gmail.com",
    imgPhone: phone,
    secondText: "+234 9032884485",
    labelSecond: "Phone",
    imgLang: language,
    labelThird: "Languages",
    thirdText: "English, French, Yoruba",
  },

  {
    id: "2",
    title: "Social Links",
    imgFirst: graytwitter,
    labelFirst: "Instagram",
    instaText: "instagram.com/tosineme",
    imgSecond: grayinsta,
    twitterText: "twitter.com/tosineme",
    labelSecond: "Twitter",
    imgThird: grayweb,
    labelThird: "Website",
    webText: "www.tosineme.coma",
  },
];

import bigtwitter from "public/images/big_twitter.svg";
import godaddy from "public/images/godaddy-logo-0 1.svg";
export const experiences = [
  {
    id: "1",
    img: bigtwitter,
    title: "Product Designer",
    subtitle: "Twitter",
    date: "Full-Time . Jun 2019 - Present (1y 1m)",
    condition: "Remotely",
    description:
      "Created and executed social media plan for 10 brands utilizing multiple features and content types to increase brand outreach, engagement, and leads.",
  },

  {
    id: "2",
    img: godaddy,
    title: "Growth Marketing Designer",
    subtitle: "GoDaddy",
    date: "Full-Time . May 2019(8y)",
    condition: "Manchester, UK",
    description:
      "Developed digital marketing strategies, activation plans, proposals, contests and promotions for client initiatives",
  },
];

import toronto from "public/images/toronto.svg";
import havard from "public/images/havard.svg";

export const educations = [
  {
    id: "1",
    img: havard,
    title: "Harvard University",
    subtitle: "Postgraduate degree, Applied Psychology",
    date: "2010 - 2012",
    description:
      "As an Applied Psychologist in the field of Consumer and Society, I am specialized in creating business opportunities by observing, analysing, researching and changing behaviour.",
  },

  {
    id: "2",
    img: toronto,
    title: "University of Toronto",
    subtitle: "Bachelor of Arts, Visual Communication",
    date: "2005 - 2009",
  },
];
