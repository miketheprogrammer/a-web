import { observable, computed } from "mobx"
import * as mobx from "mobx"
// import efficientImpactful from "./images/efficient-and-impactful-m-commerce.png";
// import responsiveWeb from "../images/responsive-web-design-for-youth.png";
// import reImagining from "../images/re-imagining-small-business-sales.png";
// import fromInstagram from "../images/from-instagram-to-ios.png";
// import landingPageFor from "../images/landing-page-for-first-impressions.png";
// import serviceDesign from "../images/service-design-for-social-justice.png";
export default class ApplicationStore {
  // Text
	@observable underConstruction = 'amandaroaf.me will be launched in a few days.';

	@observable description = 'Hey, I’m Amanda!<br/><br/>I am a user experience designer living in Richmond, VA. I work in web, mobile and service design. My career path has taken me from working as a nonprofit leader to applying my skills to the world of technology. I believe that good experiences come from commitment to empathy, data and design.';

	@observable projects = [
    {
      card_sub_title: "Efficient and Impactful M-Commerce",
      card_image: "/efficient-and-impactful-m-commerce.png",
      sort_order: "10",
    },
    {
      card_sub_title: "Respnsive Web Design for Youth",
      card_image: "/responsive-web-design-for-youth.png",
      sort_order: "20",
    },
    {
      card_sub_title: "Re-Imagining Small Business Sales",
      card_image: "/re-imagining-small-business-sales.png",
      sort_order: "30",
    },
    {
      card_sub_title: "From Instagram to iOS",
      card_image: "/from-instagram-to-ios.png",
      sort_order: "40",
    },
    {
      card_sub_title: "Landing Page for First Impressions",
      card_image: "/landing-page-for-first-impressions.png",
      sort_order: "50",
    },
    {
      card_sub_title: "Service Design for Social Justice",
      card_image: "/service-design-for-social-justice.png",
      sort_order: "60",
    },
    
  ];

  @observable skills = [
    {
      skill_title: "Design",
      skill_text: `
      Brainstorming, Sketching, Personas,
      Storyboards, Wireframes, Mockups, 
      Graphic Design, Prototyping, 
      Adobe CC, Sketch, InVision
      `,
      sort_order: "10",
    },
    {
      skill_title: "Research",
      skill_text: `
      User Interviews, Usability Testing, 
      Data Analysis, Quantitative and 
      Qualitative Research, Focus Groups, 
      Lookback, Silverback
      `,
      sort_order: "20",
    },
    {
      skill_title: "Collaboration",
      skill_text: `
      Process Mapping, Project Management, Technical Assistance, Strategic Planning, Staff Training, Trello, Jira, Zeplin
      `,
      sort_order: "30",
    },
  ];

  @observable experiences = [
    {
      experience_title: "Capital One",
      experience_text: "UX Designer ( Contractor ), October 2018 - Present",
      sort_order: "10",
    },
    {
      experience_title: "Freelance Designer",
      experience_text: "December 2016 - Present",
      sort_order: "20",
    },
    {
      experience_title: "Luckstone",
      experience_text: "UX Designer ( Contractor ), February 2018 - October 2018",
      sort_order: "30",
    },
    {
      experience_title: "Think of Us",
      experience_text: "Design Fellow, July 2017 - February 2018",
      sort_order: "40",
    },
    {
      experience_title: "Center for Court Innovation",
      experience_text: "Clinical Director, January 2014 - March 2017",
      sort_order: "",
    },
  ];

  @observable resume = {
    pdf_link: "/resume.pdf",
    html_link: "",
    doc_link: "",
  };

  @observable contact = {
    email: "roafam1@gmail.com"
  }

	@observable activeProject = {};

  constructor() {
      mobx.autorun(() => console.log(this.report));
  }

	@computed get report() {
		return this.underConstruction;
	}

	setState(key, value) {
    if (this[key] === undefined) {
      throw new Error(`This state variable does not exist: ${key}`)
    }
    this[key] = value;
  }
}
