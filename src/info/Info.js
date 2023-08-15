import self from "../_assents/img/self.png"
import mock1 from "../_assents/img/mock1.png"
import mock2 from "../_assents/img/mock2.png"
import mock_ifce from "../_assents/img/mock_ifce.png"
import mock_banana_login from "../_assents/img/mock_banana_login.png"
import mock_bananaCloud_pages from "../_assents/img/mock_bananaCloud_pages.png"
import cv from '../_assents/folders/CVItallo.pdf'
import { Link } from "@mui/material";


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
    firstName: "Ítallo",
    lastName: "Sávio",
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
            text: <a href={cv} download="Curriculo Itallo Vasconcelos">Download currículo</a>
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
        exposedTo: ['Clean Archteture', 'DevOPs', 'Design Partner',],
        softSkills: ['Comunicative', 'DevOPs', 'Design Partner',]
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
            description: 'This is a Secret Word game project, I construct this using just React and Modular CSS.',
            techs: ['React', 'Typescript', 'CSS', 'Bootstrap'],
            image: mock_ifce
        },
        {
            title: "BananaCloud - Login Access",
            live: "https://secret-word-game-itallo.netlify.app/",
            source: "https://github.com/ItalloVasconcelos/Projeto-01-Secret-Word",
            description: 'This is a Secret Word game project, I construct this using just React and Modular CSS.',
            techs: ['React', 'Typescript', 'CSS', 'Bootstrap'],
            image: mock_banana_login
        },


        {
            title: "BananaCloud - Pages",
            live: "https://secret-word-game-itallo.netlify.app/",
            source: "https://github.com/ItalloVasconcelos/Projeto-01-Secret-Word",
            description: 'This is a Secret Word game project, I construct this using just React and Modular CSS.',
            techs: ['React', 'Typescript', 'CSS', 'Bootstrap'],
            image: mock_bananaCloud_pages
        },
        {
            title: "Kosen Energy - Pages",
            live: "https://secret-word-game-itallo.netlify.app/",
            source: "https://github.com/ItalloVasconcelos/Projeto-01-Secret-Word",
            description: 'This is a Secret Word game project, I construct this using just React and Modular CSS.',
            techs: ['React', 'Typescript', 'CSS', 'Bootstrap'],
            image: mock2
        },
        {
            title: "To Do List",
            live: "https://todo-itallovasc.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://github.com/ItalloVasconcelos/To_do_React_TS", // this should be a link to the **repository** of the project, where the code is hosted.
            description: 'This is a To Do project, I using Typescrip and CSS to construct the to do page.',
            techs: ['React', 'Typescript', 'CSS', 'Bootstrap'],
            image: mock1
        },
        {
            title: "Secret Word Game",
            live: "https://secret-word-game-itallo.netlify.app/",
            source: "https://github.com/ItalloVasconcelos/Projeto-01-Secret-Word",
            description: 'This is a Secret Word game project, I construct this using just React and Modular CSS.',
            techs: ['React', 'Typescript', 'CSS', 'Bootstrap'],
            image: mock2
        },

    ]
}