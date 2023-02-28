module.exports = {
    siteMetadata: {
    // Site URL for when it goes live
    siteUrl: `https://ryanhgonzalez.github.io`,
    // Your Name
    name: `Ryan Gonzalez`,
    // Main Site Title
    title: `Ryan Gonzalez | Full Stack Software Developer`,
    // Description that goes under your name in main bio
    description: `Full Stack Software Developer from Houston.`,
    // Optional: Twitter account handle
    author: ``,
    // Optional: Github account URL
    github: `https://github.com/ryanhgonzalez`,
    // Optional: LinkedIn account URL
    linkedin: `https://www.linkedin.com/in/ryanhgonzalez/`,
    // Optional: Email address
    email: `rhgonzalez2@uh.edu`,
    // Content of the About Me section
    about: `I am a passionate software developer who loves taking on new challenges. 
    During my free time, I work on projects that are personally meaningful to me and my friends, while also staying up-to-date with the latest programming languages and frameworks. 
    My current focus is on expanding my expertise beyond React and delving into full stack development by teaching myself new web development frameworks and AWS technologies.`,
    // Optional: List your projects, they must have `name` and `description`. `link` is optional.
    projects: [
      {
        name: 'MLB Statistics Telegram Bot',
        description: '',
        additionalDescription:
          'By utilizing the grammY.dev telegram bot framework and Cyclic.sh, I rapidly developed and deployed a bot that provides valuable baseball information to users through the MLB Stats API. The application is designed to be stateless, and employs express routes, making it effortless to switch between production and development environments.',
        link: 'https://github.com/ryanhgonzalez/telegram_mlb_statistics_bot',
      },
      {
        name: 'Catan Board Generator',
        description: '',
        additionalDescription:
          'Using Jared Kirschner`s Catan Board Generator as a foundation, I revamped the project to be mobile-friendly and added new features such as the ability to revisit previously generated Catan boards.',
        link: 'https://github.com/ryanhgonzalez/Catan_Map_Generator',
      },
      {
        name: 'Video Rental Database',
        description: '',
        additionalDescription:
          'I successfully planned, designed, and implemented a database system with a corresponding website login page. The goal of this project was to deepen my understanding of entity relationships and to explore how to grant specific read and write permissions to users based on their roles. I also used this opportunity to practice database normalization techniques, which resulted in a more organized and efficient data structure.',
        link: 'https://github.com/ryanhgonzalez/Database/tree/master/Video_Rental_Database',
      },
    ],
    // Optional: List your experience, they must have `name` and `description`. `link` is optional.
    experience: [
      {
        name: 'Slalom Build',
        description: 'Software Consultant, September 2021 - Present',
        additionalDescription: 'Working as a software consultant, I am regularly exposed to new technologies and must quickly adapt to them from project to project. While I have extensive experience writing code in Java and JavaScript, my time here has given me the opportunity to expand my skill set to include C# and TypeScript. Additionally, I have gained a deeper understanding of various frameworks, having worked with many including .NET, React, and Angular.',
        link: 'https://www.slalombuild.com/',
      },
      {
        name: 'J.P. Morgan Chase & Co.',
        description: 'Software Engineer, July 2018 - September 2021',
        additionalDescription: 'As a participant in the Software Engineering Program, I was brought on board to enhance and maintain an internal application used by investment bankers to manage the complete "deal life-cycle". Notable contributions to the project include a complete front-end overhaul, where I replaced the previous Vaadin-based interface with a modern, user-friendly React.js implementation.',
        link: 'https://www.jpmorganchase.com/',
      },
      {
        name: 'Heavy Construction Systems Specialists',
        description: 'Software Development Intern, May 2017 - August 2017',
        additionalDescription: 'During my tenure at HCSS, I gained exposure to a range of technologies used in quality assurance testing, website development, and automation. One of my major accomplishments was the design and implementation of an internal dashboard that aggregated company-wide statistics. Following the successful completion of that project, I was tasked with creating automated test scripts for their proprietary estimating and bidding software.',
        link: 'https://www.hcss.com/',
      },
    ],
    // Optional: List your skills, they must have `name` and `description`.
    skills: [
      {
        name: 'Languages',
        description: '',
        additionalDescription:
          'C#, Java, JavaScript, TypeScript, HTML, CSS, XML, Oracle SQL',
      },
      {
        name: 'Frameworks',
        description: '',
        additionalDescription:
          'Bootstrap, Vue.js, React.js, Angular.js, .NET, Spring, Mockito, Junit, Apache Ant, Maven, W3.CSS, Git',
      },
    ],
    // Optional: List your education, they must have `name` and `description`.
    education: [
      {
        name: 'University of Houston',
        description: 'B.S. in Computer Science, August 2014 - May 2018',
        additionalDescription:
          'As a student, I actively engaged in extracurricular activities to enhance my academic experience. I served as the Communications Director and Transportation Director at the CodeRED Hackathon event during my Junior and Senior years, respectively. As the Communications Director, my responsibilities included managing all communication channels, such as social media, and addressing student and company inquiries. In my final year, I held the position of Transportation Director and successfully managed logistics associated with transporting students from different university locations and ensuring adequate parking space for the event. Furthermore, I actively participated in CougarCS, a student organization that provides resources to CS students, including resume workshops, company-sponsored hiring events, and tutoring services.',
        link: 'https://www.uh.edu'
        },
    ],
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
              wrapperStyle: `margin: 0 0 30px;`,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `ADD YOUR TRACKING ID HERE`, // Optional Google Analytics
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `devfolio`,
        short_name: `devfolio`,
        start_url: `/`,
        background_color: `#3E6DBF`,
        theme_color: `#3E6DBF`, // This color appears on mobile
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
  ],
};
