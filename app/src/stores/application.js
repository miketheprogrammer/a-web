import { observable, computed } from "mobx"
import * as mobx from "mobx"
export default class ApplicationStore {
	@observable underConstruction = 'amandaroaf.me will be launched in a few days.';

  @observable description = 'Hey, I’m Amanda!<br/><br/>I am a user experience designer living in Richmond, VA. I work in web, mobile and service design. My career path has taken me from working as a nonprofit leader to applying my skills to the world of technology. I believe that good experiences come from commitment to empathy, data and design.';
  
  @observable projects_html = {
    'efficient-and-impactful-m-commerce': {
      wysiwyg: `
      <h1 class="ar-section-header">Efficient and Impactful M-Commerce</h1>
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
    },
    'responsive-web-design-for-youth': {
      wysiwyg: `
      <h1 class="ar-section-header">RESPONSIVE WEB DESIGN IN A GOAL SETTING PLATFORM</h1>
      <div class="ar-image">
        <img class="ar-image ar-img-sm" src="https://amandaroaf.files.wordpress.com/2017/06/screen-shot-2017-11-13-at-6-04-54-pm.png"></img>
      </div>
      <p class="ar-paragraph">
      I recently worked with the talented team at Think of Us, a nonprofit tech company that seeks to build a platform that will support and empower young people as they transition out of the foster care system. I worked with a team of designers and share responsibilities including site mapping, brainstorming, wireframing, prototyping, and usability testing.  I also participated in several community events where I had the chance to work with young people and alumni of the foster care system to design a better way to set goals and seek supports with the platform.
      </p>
      <br/>
      <p class="ar-paragraph">
        <strong>
        My key responsibilities: User research and analysis, independent creation of landing page and loading graphics, creation of UI design for platform features with the deign team, and iterating on designs with the insight of the development team. 
        </strong>
      </p>
      <div class="ar-image">
        <img class="ar-image ar-img-sm" src="https://amandaroaf.files.wordpress.com/2017/07/designathon.jpg"></img>
      </div>
      <p class="ar-paragraph">
      <strong>Strategy & Goals:</strong> We began by establishing a firm expectation for our newly formed design team around the design process. I familiarized myself with the previous work on the platform and spent time learning about the goals of the company and its staff. I identified the non-negotiable business goals and began thinking through ways to hit these markers in the design.
      </p>
      <div class="ar-image">
        <img class="ar-image ar-img-sm" src="https://amandaroaf.files.wordpress.com/2017/07/brainstorming-e1507667698302.png"></img>
      </div>
      <p class="ar-paragraph">
      <strong>Research:</strong> I created discussion guides for our two primary target audiences and conducted interviews with several members of our customer base. I aggregated this data into a spreadsheet and began to organize content into themes and patterns for design and stakeholder needs. I brainstormed and sketched feature ideas with the design team until we had a focused set of ideas for lo-fi wireframes. I used Sketch and Invision to create wireframes for main user flows and tested these early designs on our users utilizing both in-depth testing techniques and brief tests. I organized this data and met with the team to discuss common issues and themes in feedback from users.
      </p>
      <br/>
      <br/>
      <p class="ar-paragraph">
      <strong>Prototyping & Design:</strong> Using the feedback from our customers, I worked with the design team to create mockups of the main platform screens in Sketch. We pulled in some features from the original version of the platform as well as a mockup from a design firm presented to us as a tentative style guide. We had daily team meetings and weekly meetings with executives to stay on track. During this process I created UI for landing and sign in pages, an array of navigation options, color schemes, and vector graphics.
      </p>
      <div class="ar-image">
        <img class="ar-image ar-img-sm" src="https://amandaroaf.files.wordpress.com/2017/07/20170807_123238.jpg"></img>
      </div>
      <p class="ar-paragraph">
      <strong>Usability Testing:</strong> I utilized Invision to test the high-fidelity prototypes with our primary user groups and brought this data back to the team to iterate on our first wave of designs. During this part of the process we received significant stakeholder feedback on their goals and needs from the platform which created several large iterations on the initial design. I helped the team plan community-based events that provided a forum for usability testing as well as general research.
      </p>
      <p class="ar-paragraph">
      <strong>Handoff and Iteration:</strong> I uploaded the Sketch designs into Zeplin and worked with the team to create a style guide for the developers. I began checking in with the development team to ensure that our high-level designs were achievable and worked on iterations for feature designs that were not realistic. I worked with the team to come up with a structured process for collaborating on design files and working simultaneously with the development team so that no changes were lost in the process.
      </p>
      <div class="ar-image">
        <img class="ar-image ar-img-lg" src="https://amandaroaf.files.wordpress.com/2017/06/screen-shot-2017-11-13-at-6-04-54-pm.png?"></img>
      </div>
      <div class="ar-image">
        <img class="ar-image ar-img-sm" src="https://amandaroaf.files.wordpress.com/2017/06/screen-shot-2017-11-13-at-6-02-59-pm.png"></img>
      </div>
      `
    },
    'from-instagram-to-ios': {
      wysiwyg: `
      <h1 class="ar-section-header">FROM INSTAGRAM POSTS TO IOS</h1>
      <br/>
      <br/>
      <p class="ar-paragraph">
      I love the challenge of taking data in its various forms and designing a mobile experience to complement or replace it. I recently got the chance to support another fitness business, Body by Maria, by creating a platform for the owner’s hard work to be showcased. I was asked to take information from my client’s social media accounts and create an easy-to-navigate iOS app for her clients to discover the exercise classes she offers.
      </p>
      <br/>
      <p class="ar-paragraph">
      My client’s main goals were to have a system for uploading her schedule at the beginning of each week and for that schedule to be easily accessed by her clients. I took instagram posts where my client placed a list of 20 classes being offered during the week and crafted an intuitive, navigable app for her schedule to exist.
      </p>
      <div class="ar-image">
        <img class="ar-image ar-img-md" src="https://amandaroaf.files.wordpress.com/2018/04/screen-shot-2018-04-16-at-7-15-03-pm.png"></img>
      </div>
      <p class="ar-paragraph">
      I first worked with my client to determine the pertinent content for each class including name, description, price, and date and time of class. I began working on options to illustrate that information. I worked through various client scenarios for needing to access the schedule to inform the architecture of the app. I established use cases for brand new clients learning about my client’s business from a friend as well as uses for veteran clients who knew the business well. I wanted to be sure that the app would be useful to the business’s spectrum of clients.
      </p>
      <br/>
      <p class="ar-paragraph">
      After doing quick usability tests on different schedule formats, I began working with the developer on the project to ensure that my designs were technically feasible. We worked together to refine the app and to create a seamless, intuitive product.
      </p>
      <div class="ar-image">
        <img class="ar-image ar-img-lg" src="https://amandaroaf.files.wordpress.com/2018/04/option-1.png"></img>
      </div>
      <p class="ar-paragraph">
      I rounded out the project by providing my client with several color options for the main app as well as an upgraded logo and splash screen to mesh with the overall feel of the UI.
      </p>
      <div class="ar-image">
        <img class="ar-image ar-img-xsm" src="https://amandaroaf.files.wordpress.com/2018/04/screen-shot-2018-04-16-at-7-35-36-pm.png"></img>
      </div>
      <div class="ar-image">
        <img class="ar-image ar-img-sm" src="https://amandaroaf.files.wordpress.com/2018/04/screen-shot-2018-04-16-at-7-33-53-pm-e1523921853476.png"></img>
      </div>
      `
    },
    'from-xinstagram-to-ios': {
      wysiwyg: `
      <h1 class="ar-section-header">FROM INSTAGRAM POSTS TO IOS</h1>
      <div class="ar-image">
        <img class="ar-image ar-img-sm" src="https://amandaroaf.files.wordpress.com/2017/06/screen-shot-2017-11-13-at-6-04-54-pm.png"></img>
      </div>
      <p class="ar-paragraph">
      I love the challenge of taking data in its various forms and designing a mobile experience to complement or replace it. I recently got the chance to support another fitness business, Body by Maria, by creating a platform for the owner’s hard work to be showcased. I was asked to take information from my client’s social media accounts and create an easy-to-navigate iOS app for her clients to discover the exercise classes she offers.
      </p>
      `
    },

  }

	@observable projects = [
    {
      slug: "efficient-and-impactful-m-commerce",
      card_sub_title: "Efficient and Impactful M-Commerce",
      card_image: "/efficient-and-impactful-m-commerce.png",
      sort_order: "10",
    },
    {
      slug: "responsive-web-design-for-youth",
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
      slug: "from-instagram-to-ios",
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
