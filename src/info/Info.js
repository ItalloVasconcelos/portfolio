import self from "../_assents/img/self.png"
import mock1 from "../_assents/img/mock1.png"
import mock2 from "../_assents/img/mock2.png"
import cv from '../_assents/folders/CVItallo.pdf'


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
    lastName: "Vasconcelos",
    initials: "IV", // the example uses first and last, but feel free to use three or more if you like.
    position: "Dev Front-End",
    selfPortrait: self, // don't change this unless you want to name your self-portrait in the "img" folder something else!
    gradient: `-webkit-linear-gradient(135deg, ${colors})`, // don't change this either
    baseColor: colors[0],
    miniBio: [ // these are just some "tidbits" about yourself. You can look at mine https://paytonjewell.github.io/#/ for an example if you'd like
        {
            emoji: '👨🏽‍💻',
            text: 'Codar 🤩'
        },
        {
            emoji: '🌎',
            text: 'Diretamente de Fortaleza-CE'
        },
        {
            emoji: "💼",
            text: "Desenvolvedor Front-End"
        },
        {
            emoji: "📧",
            text: "itallo.prog@gmail.com"
        },
        {
            emoji: "📄", 
            text: <a href={cv} download="Curriculo Itallo Vasconcelos">Download currículo</a>
        }
    ],
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
            link: "https://www.linkedin.com/in/itallo-vasconcelos-7441b4158/",
            icon: "fa fa-linkedin",
            label: 'linkedin'
        },
       
// Feel free to remove any of these that you don't have. I'll write an FAQ on how to add new ones later, let me know if you have a request for an icon!
// Just change the links so that they lead to your social profiles.

    ],
    bio: "Eu sou desenvolvedor front-end, com foco em desenvolvimento web, atualmente trabalho e estudo com React. Estou sempre em busca de novas ferramentas e projetos que complementem meu trabalho. Sou comunicativo, gosto de liderar projetos, trazendo assim, a responsabilidade para si, prefiro trabalhar com organização, sou analítico, sempre estou analisando e buscando novas soluções para meus projetos. ",
    skills:
        {
            proficientWith: ['javascript', 'react', 'git', 'github', 'bootstrap', 'html5', 'css3', 'typescript', 'API rest', 'clean code',],
            exposedTo: ['nodejs', 'figma', 'clean archteture']
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
            title: "Projeto To Do List",
            live: "https://todo-itallovasc.netlify.app/", //this should be a link to the live version of your project, think github pages, netlify, heroku, etc. Or your own domain, if you have it.
            source: "https://githttps://github.com/ItalloVasconcelos/To_do_React_TShub.com/paytonjewell", // this should be a link to the **repository** of the project, where the code is hosted.
            image: mock1
        },
        {
            title: "Projeto Secret Word",
            live: "https://secret-word-game-itallo.netlify.app/",
            source: "https://github.com/ItalloVasconcelos/Projeto-01-Secret-Word",
            image: mock2
        }
        
    ]
}