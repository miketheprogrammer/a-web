import { observable, computed } from "mobx"
import * as mobx from "mobx"
export default class ApplicationStore {
	@observable underConstruction = 'amandaroaf.me will be launched in a few days.';

  @observable description = 'Hey, I’m Amanda!<br/><br/>I am a user experience designer living in Richmond, VA. I work in web, mobile and service design. My career path has taken me from working as a nonprofit leader to applying my skills to the world of technology. I believe that good experiences come from commitment to empathy, data and design.';
  
  @observable projects_html = {
    'efficient-and-impactful-m-commerce': {
      card_sub_title: "Efficient and Impactful M-Commerce",
      wysiwyg: `
      <p class="ar-paragraph">
      I was the sole UX Designer for an exciting mobile 
      commerce project with Luckstone. I worked with 
      a team of developers and project managers to create 
      a seamless, intuitive mobile experience that will 
      serve as an additional entry point for customers 
      to buy internal and external products. The existing 
      sales strategy relied heavily upon customers calling 
      or using a small web portal to place orders. The 
      company decided to move to a mobile platform to give 
      customers more freedom and control to evaluate and 
      purchase products. 
      </p>
      <div class="ar-image">
        <img class="ar-image ar-img-sm" src="https://amandaroaf.files.wordpress.com/2018/04/screen-shot-2018-04-26-at-1-19-05-pm.png"></img>
      </div>
      <p class="ar-paragraph">
      My role on this project was to collaborate with our talented team members to produce UI and functionality that work for our users.  To do that I engaged in lots of user research and testing. I used the data I collect to influence prioritizing of new features and refining of existing features.
      </p>
      <div class="ar-image">
        <img class="ar-image ar-img-lg" src="https://amandaroaf.files.wordpress.com/2018/04/screen-shot-2018-07-11-at-3-22-08-pm.png"></img>
      </div>
      <p class="ar-paragraph">
      My design process involved stakeholder meetings, user research, design studio facilitation,  wireframing, crafting high fidelity mockups, and producing clickable prototypes. In addition, I did a significant amount of testing with the app to ensure new and existing features are functioning as planned.
      </p>
      <div class="ar-image">
        <img class="ar-image ar-img-sm" src="https://amandaroaf.files.wordpress.com/2018/04/screen-shot-2018-04-26-at-1-18-53-pm-e1524763298943.png"></img>
      </div>
      <p class="ar-paragraph">
      I also provided all of the visual design for the app’s new and updated features. I converted my research findings into wireframes which are shared with the team for feedback then move on to mockups that utilize our established style guidelines. I went back through the testing and feedback cycle with the mockups and then fine tune them to ensure they are fully pixel-perfect and ready to go.
      </p>
      <div class="ar-image">
        <img class="ar-image ar-img-lg" src="https://amandaroaf.files.wordpress.com/2018/04/screen-shot-2018-07-11-at-3-31-22-pm.png"></img>
      </div>
      <p class="ar-paragraph">
      I had the chance to reinvigorate the app’s tone of voice. To do this I engaged in competitor analysis, research of best practices, and an in depth persona activity for the app. This process generated a customer journey map unique to how the app could respond at each phase as well as a visual persona reflecting the app’s new personality. At every step I shared information back with my team and involved them in the planning and creation of a new tone of voice for the app.
      </p>
      <div class="ar-image">
        <img class="ar-image ar-img-md" src="https://amandaroaf.files.wordpress.com/2017/09/screen-shot-2018-08-01-at-10-43-53-am.png"></img>
      </div>
      <p class="ar-paragraph">
      I also supported another team at the company with a related app made for delivery drivers. Due to changes in the business they needed to take an existing iPad app and convert it to a mobile app that could be used more readily by drivers in the field on a vast array of devices. Considering the context that these users operated in I know that the font had to be large and the language simple so that they could quickly scan orders and addresses on their route. I also knew from speaking to the QA team that these drivers often hit the wrong buttons trying to navigate around the app so larger clickable areas would be important on a smaller screen. Lastly I reorganized the general menu structure so drivers could quickly discover the most pressing items like current assignments and messages. I promoted some of this content to become a menu item so that users no longer had several steps to take to retrieve it. I smoothed out the overall UI to be more in line with company styleguides and made sure all pieces were achievable in the developer’s Xamarin framework.
      </p>
      <div class="ar-image">
        <img class="ar-image ar-img-lg" src="https://amandaroaf.files.wordpress.com/2018/04/screen-shot-2018-08-02-at-10-27-00-am.png"></img>
      </div>
      `,
    }
  }

	@observable projects = [
    {
      slug: "efficient-and-impactful-m-commerce",
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
    email: "roafam1@gmail.com",
    linkedIn: "https://www.linkedin.com/in/amandaroaf",
    twitter: "https://www.twitter.com/amandaroaf",
    instagram: "https://www.instagram.com/amandaroaf",
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
