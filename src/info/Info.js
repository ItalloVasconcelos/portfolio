import self from "../_assents/img/self.png"
import mock1 from "../_assents/img/mock1.png"
import mock2 from "../_assents/img/mock2.png"
import mock_ifce from "../_assents/img/mock_ifce.png"
import mock_banana_login from "../_assents/img/mock_banana_login.png"
import mock_bananaCloud_pages from "../_assents/img/mock_bananaCloud_pages.png"
import kosen_page from "../_assents/img/kosen_page.png"
import cv from '../_assents/folders/Resume.pdf'



/* Hi there! Thanks for checking out my portfolio template. Be sure to read the comments to get a better understanding of
how to make this template work best for you! */

export let colors = ["rgb(5, 136, 250)", "rgb(161, 15, 245)"];
/*
I highly recommend using a gradient generator like https://gradientgenerator.paytonpierce.dev/ to generate a pair of colors that you like.
These colors will be used to style your name on the homepage, the background of your picture, and some other accents throughout
the site.
 */


/*
So let's get started! Some of the info below is pretty self-explanatory, like 'firstName' and 'bio'. I'll try to explain anything
that might not be obvious right off the bat :) I recommend looking at the template example live using "npm start" to get an idea
of what each of the values mean.
 */

export const info = {
    firstName: "Itallo",
    lastName: "Savio",
    initials: "IS", // the example uses first and last, but feel free to use three or more if you like.
    position: "Front-end Developer",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '👨🏽‍💻',
            text: 'Codes'
        },
        {
            emoji: '🌎',
            text: 'From Brazil to World'
        },
        {
            emoji: "💼",
            text: "Front-end developer"
        },
        {
            emoji: "📧",
            text: `My email: itallo.prog@gmail.com`
        },
        {
            emoji: "📄",
            text: <a href={cv} download="Curriculo Itallo Vasconcelos">Download my Resume!</a>
        }
    ],
    title: [
        {
            emoji: '🗣️',
            title: "About"
        },
        {
            emoji: '👨‍💻',
            title: "Portfolio"
        }
    ]
    ,
    socials: [
        {
            link: "https://www.instagram.com/itallo211/",
            icon: 'fa fa-instagram',
            label: 'instagram'
        },
        {
            link: "https://github.com/ItalloVasconcelos",
            icon: "fa fa-github",
            label: 'github'
        },
        {
            link: "https://www.linkedin.com/in/itallo-vasconcelos-7441b4158/?locale=en_US",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },

        // Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
        // Just change the links so that they lead to your social profiles.

    ],
    bio: "I am an experienced software developer specializing in React framework. With a keen eye for detail, I excel in doing documentations, technology evaluation, and code reviews. My approach prioritizes quality, delivering top-tier web systems that adhere to best practices for optimal performance and responsiveness. I champion agile development, ensuring efficiency within teams. My goal is to elevate technical excellence, contributing to high-quality web systems that drive business growth. With a focus on innovation and results, I am well-equipped to tackle challenges and play a pivotal role in achieving company objectives.",
    skills:
    {
        proficientWith: ['React', 'Jest', 'Typescript', 'Cypress', 'Javascript', 'HTML5', 'CSS3', 'SASS', 'Storybook', 'Scrum', 'Git', 'Github', 'Bootstrap', 'RestAPI', 'Clean Code', 'NodeJS', 'MongoDB', 'UI/UX', 'Figma', 'Styled-Components'],
        exposedTo: ['Clean Archteture', 'DevOPs', 'Design Partner', 'Software Archteture'],
        softSkills: ['Effective Communication', 'Insightful working with cross-industry teams', 'Empathetic Leadership', 'Analytical Thinking', 'Effective Problem Solving',]
    }
    ,
    hobbies: [
        {
            label: 'Leitura',
            emoji: '📖'
        },
        {
            label: 'Jogar!',
            emoji: '🎮'
        },
        {
            label: 'Bons Filmes',
            emoji: '🎥'
        },
        {
            label: 'Cozinhar',
            emoji: '🌶'
        }
        // Same as above, change the emojis to match / relate to your hobbies or interests.
        // You can also remove the emojis if you'd like, I just think they look cute :P
    ],
    portfolio: [ // This is where your portfolio projects will be detailed
        {
            title: "IFCE - Intranet ",
            live: "https://www.intranet.maracanau.ifce.edu.br/login",
            source: "https://www.intranet.maracanau.ifce.edu.br/login",
            description: "I collaborated with the NDS team to build the login pages and dashboard for the Intranet of the Federal Institute of Ceará, Maracanaú campus. The client had a pressing requirement: to create a comprehensive system where students could access all information and address their issues in one single location. With this client need in mind, we worked tirelessly to design and implement these interfaces. The opportunity to meet this specific demand was exceptionally rewarding. By joining forces, we successfully crafted an efficient solution that not only met the client's expectations but also streamlined the student experience, consolidating information and enabling prompt resolution of challenges.It was a fulfilling journey, showcasing our ability to translate client needs into tangible and successful solutions.",
            techs: ['React, ', 'Typescript, ', 'Styled-Components, ', 'Bootstrap, ', 'Axios API, ', 'Insomnia, ', 'Figma, ', 'Swagger, ', 'Git, ', 'Gitlab, ', 'SCRUM.'],
            image: mock_ifce
        },
        {
            title: "BananaCloud - Login Access",
            live: "",
            source: "https://github.com/ItalloVasconcelos/",
            description: "This project was part of the team I'm currently on.The project is a cloud service provider.In this context, the client presented a clear need: the development of a simplified login interface using Keycloak.This effort was aimed at increasing the efficiency of login requests, account creation, and other related features.By meeting this specific requirement, we embarked on a collaborative journey to provide a seamless solution.Through the integration of Keycloak, we leveraged its features to create an intuitive and efficient login system.This not only met customer expectations, but it also addressed its broader goal of streamlining account management and login processes.",
            techs: ['Javascript, ', 'HTML, ', 'SCSS, ', 'Keycloak.'],
            image: mock_banana_login
        },


        //Fazer uma página, nessa página tem todas as telas que eu fiz, tanto no figma quanto em dev, e ai o usuário clica e abre um modal para mostrar o que tem.
        {
            title: "BananaCloud - Pages",
            live: "",
            source: "",
            description: 'This project follows the same steps as the BananaCloud login project, but extends to encompass the creation of additional screens. I assumed responsibility for crafting several screens, including the profile and shopping checkout screens. The creation of these screens posed a degree of complexity, necessitating adjustments and enhancements to align with market standards. The client expressed high satisfaction with these screens. Currently, I am engaged in another project within the same company, continuing to contribute and collaborate',
            techs: ['React, ', 'Typescript, ', 'SCSS, ', 'BEM and CSS modules, ', 'RestAPI, ', 'Bitbucket, ', 'Jira, ', 'SCRUM, ', 'Keycloak, ', 'Podman, ', 'Figma, '],
            image: mock_bananaCloud_pages
        },
        {
            title: "Kosen Energy - Pages",
            live: "",
            source: "",
            description: 'Within the same company, I was invited to join the development team of another system called Kosen-Energy. This system features a comprehensive dashboard that encompasses a variety of dynamic charts, tables and comments. Users can customize their experience by selecting specific graphics from different sources,as well as preferred sector divisions. The project has gone and continues to go through several improvements over the weeks.The team is gathering efforts to launch the MVP by October 2023, requiring greater dedication and commitment.Effective use of SCRUM ensures that we keep our focus on deadlines, requiring robust organization, collaboration, and commitment to setting timelines.',
            techs: ['React, ', 'Typescript, ', 'SCSS, ', 'BEM and CSS modules, ', 'RestAPI, ', 'Bitbucket, ', 'Jira, ', 'SCRUM, ', 'Figma, ', 'UI/UX designs.',],
            image: kosen_page
        },
        {
            title: "To Do List",
            live: "https://todo-itallovasc.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/ItalloVasconcelos/To_do_React_TS", // this should be a link to the **repository** of the project, where the code is hosted.
            description: "This project marked one of my early forays into React, undertaken during a React course. It involves building a simple yet impactful to-do list application. Users can easily switch between task states by choosing between 'em progress', done, ' or 'to do'. Designed to be responsive,The app scales seamlessly across tablets, mobile devices and desktops, ensuring a consistent user experience across all platforms.",
            techs: ['React, ', 'Typescript, ', 'CSS, ', 'Bootstrap.'],
            image: mock1
        },
        {
            title: "Secret Word Game",
            live: "https://secret-word-game-itallo.netlify.app/",
            source: "https://github.com/ItalloVasconcelos/Projeto-01-Secret-Word",
            description: "This is my first standalone React app, a project that took a while to complete as I dug deeper into various React functions. It materialized as a play on words similar to the style of 'Who Wants to Be a Millionaire'. The game involves choosing a letter to fill in the blanks,offering three tries during the point count. While it's a straightforward app, it deftly dives deep into React's key hooks, showing off its prowess even in a seemingly simple project.This project served as a valuable exploration of React's features.",
            techs: ['React, ', 'CSS.',],
            image: mock2
        },

    ]
}