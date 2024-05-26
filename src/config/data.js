import html from '../assets/html.jpg'
import css from "../assets/css.jpg"
import author from "../assets/author.jpg"
import boot from "../assets/bootstrap.jpg"
import javascript from "../assets/javascript.jpg"
import jquery from "../assets/jquery.jpg"
import react from '../assets/react.jpg'

export const blogger = [
    {
        id : 1,
        title :"My HTML Jornuey",
        description : 'When \t\t\t\t\tI first decided to dive into the world of coding, I had no idea where to start. The vast sea of programming languages, tools, and frameworks seemed overwhelming. However, after a bit of research, I found that HTML (HyperText Markup Language) was a great starting point. Little did I know, this initial step would open up a whole new world for me. I started with a simple text editor, typing out the basic structure of an HTML document. The <html>, <head>, and <body> tags seemed like a foreign language at first. But with each line of code, I began to see how these elements came together to form the foundation of a webpage. \n<!DOCTYPE html>\n<html>\n<head>\n <title>My First HTML Page</title>\n</head><body><h1>Hello, World!</h1><p>This is my first attempt at writing HTML.</p></body></html> Seeing Hello, World! appear on my browser was a magical moment. It was my first tangible creation in the coding world, and it felt incredibly rewarding. Like any learning journey, I faced my fair share of challenges. One of the biggest hurdles was understanding how HTML interacts with other technologies like CSS (Cascading Style Sheets) and JavaScript. Initially, it was difficult to grasp how these different layers of web development worked together to create dynamic and visually appealing websites.Despite the challenges, the sense of accomplishment I felt after creating my first multi-page website was unparalleled. Each project I completed added to my understanding and appreciation of web development. The journey from a simple Hello, World! page to a fully-fledged website was marked by countless hours of practice, experimentation, and learning from mistakes.',
        authorName : "Emeka Bruno",
        authorAvatar : author,
        createdAt : "26/05/2024",
        cover : html
    },
    {
        id : 2,
        title :"My CSS Jornuey",
        description : "When I first started coding, HTML gave me the structure, but CSS brought my web pages to life. Initially, I experimented with inline styles, but soon transitioned to using external stylesheets, which made my code more organized and scalable. Understanding the basics of CSS, such as colors, fonts, and the box model, was thrilling. Learning about responsive design, media queries, Flexbox, and CSS Grid revolutionized my approach to layouts, making my websites adaptable to different screen sizes.Despite the challenges, the joy of creating beautiful, functional designs kept me motivated. Each project was a testament to my growing skills. For any beginners, my advice is to be patient and persistent. CSS can transform your web pages, making them visually appealing and user-friendly. Embrace the journey, experiment, and enjoy the process of styling the web.",
        authorName : "Emeka Bruno",
        authorAvatar : author,
        createdAt : "26/05/2024",
        cover : css
    },
    {
        id : 3,
        title :"My BootStrap Jornuey",
        description : "After mastering HTML, CSS, and JavaScript, I sought a way to create responsive, visually appealing websites more efficiently. This led me to Bootstrap (which was also used to make this website layout), a powerful front-end framework that simplified my web development process. My first experience with Bootstrap was exhilarating. I started by including Bootstrap's CSS and JS files in my project and experimenting with its pre-built components. Bootstrap's extensive library of components, like navbars, modals, and cards, made it easy to build professional-looking websites quickly. I could add complex UI elements with just a few lines of code. The responsive grid system was a game-changer. It allowed me to create flexible, mobile-first layouts effortlessly, adjusting the design based on screen size. Utility classes in Bootstrap made styling much faster. I could easily add margins, paddings, and other styles without writing custom CSS. Bootstrap has been an invaluable tool in my web development toolkit. It streamlined my workflow and helped me build responsive, attractive websites with ease. For beginners, Bootstrap is a fantastic resource to quickly elevate your web design skills.",
        authorName : "Emeka Bruno",
        authorAvatar : author,
        createdAt : "26/05/2024",
        cover : boot
    },
    {
        id : 4,
        title :"My JavaScript Jornuey",
        description : "After getting comfortable with HTML and CSS, I realized I needed to add interactivity to my web pages. This led me to JavaScript, a powerful scripting language that brings websites to life. My journey into JavaScript was a challenging but rewarding experience that significantly expanded my coding skills. I started with the basics, learning how to include JavaScript in my HTML files. Seeing a simple Hello, World! alert pop up in my browser was an exciting first step. <script> alert('Hello, World!'); </script>. Understanding JavaScript syntax and core concepts like variables, functions, and loops was essential. I practiced by creating simple scripts, such as a basic calculator and interactive buttons. function greet() {  alert('Hello, visitor!'); } document.getElementById('greetButton').onclick = greet;. One of the most fascinating aspects of JavaScript was learning to manipulate the Document Object Model (DOM). This allowed me to dynamically change HTML content and CSS styles based on user interactions. As I progressed, I encountered more complex concepts like asynchronous programming with callbacks, promises, and async/await. Understanding how to handle events and API calls was initially daunting but incredibly empowering. Creating interactive web applications brought a new level of satisfaction. I built simple games, form validators, and dynamic content loaders, each project adding to my understanding and skills. Though JavaScript was Hellish it was FUN!",
        authorName : "Emeka Bruno",
        authorAvatar : author,
        createdAt : "26/05/2024",
        cover : javascript
    },
    {
        id : 4,
        title :"My JQuery Jornuey",
        description : "There Won't be much to write on JQuery, since JQuery was one of the easiest JavaScript framework and programming language I came across while learning programming. JQuery just simplified the Hellish Javascript and made JavaScript easier to understand and use, though the first JQuery code I had to remember was not easy at all, it was still much more easier than Vanilla JavaScript",
        authorName : "Emeka Bruno",
        authorAvatar : author,
        createdAt : "26/05/2024",
        cover : jquery
    },
    {
        id : 5,
        title :"My React Jornuey",
        description : "While I am Still on React, I am confident enough to say \"I have Learnt React\". as you may know this Blog App was made using React. I made this Blogapp about myself to showcase Various Skills I have learnt so far in the past 2 Months of learning React. I have certainly other React website but this is by far the best one i have made. React is one of my favorite programming language because it is quiet easy to learn and has many functionalities.",
        authorName : "Emeka Bruno",
        authorAvatar : author,
        createdAt : "26/05/2024",
        cover : react
    }
]