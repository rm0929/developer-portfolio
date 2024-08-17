import {
    resume,
    rohan,
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    java,
    tailwind,
    nodejs,
    mongodb,
    git,
    express,
    docker,
    meta,
    indianoil,
    gdsc,
    codingclub,
    guiproj,
    jobit,
    glaucomaproj,
    threejs,
    autocads,
    sarsproj,
    deliveryproj,
    iplproj,
} from "../assets";

export const navLinks = [{
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Work",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [{
        title: "Frontend Developer",
        icon: web,
    },
    {
        title: "React Native Developer",
        icon: mobile,
    },
    {
        title: "Backend Developer",
        icon: backend,
    },
    {
        title: "Machine Learning",
        icon: creator,
    },
];

const rm = {
    icon: rohan,
    cv: resume,
}

const technologies = [{
        name: "Java",
        icon: java,
    },
    {
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "Three JS",
        icon: threejs,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "express",
        icon: express,
    },
    {
        name: "Autocad",
        icon: autocads,
    },
    {
        name: "docker",
        icon: docker,
    },
];

const experiences = [{
        title: "Software Engineer and ML Intern",
        company_name: "Indian Oil",
        icon: indianoil,
        iconBg: "#383E56",
        date: "May 2022 - Aug 2022",
        points: [
            "Developed a frontend GUI that tells us whether an indistrial machine would fail under the gien parameters or not.",
            "Collaborated with cross-functional teams including developers, mechanical and chemical engineers, data analysts and the IT team to deliver the project in three months.",
            "Implemented \"Machine Learning\" models to train data make predictions.",
            "Achieved the model accuracy about 95%.",
        ],
    },
    {
        title: "Google Cloud Facilitator",
        company_name: "Google Developer Student Clubs",
        icon: gdsc,
        iconBg: "#E6DEDD",
        date: "Aug 2021 - Feb 2022",
        points: [
            "Organized the Google Cloud \"30 Days of Code\" challenge for university students",
            "Conducted technical workshops on Google Cloud, Kubernetes, and other cloud related concepts",
            "Implemented a full stack website for our university's Google cloud college community.",
            "Participated in code reviews and providing constructive feedback to other student developers.",
        ],
    },
    {
        title: "Founder & Technical Head",
        company_name: "Coding Club NMIMS",
        icon: codingclub,
        iconBg: "#383E56",
        date: "Oct 2021 - May 2023",
        points: [
            "Founded Coding Club along with three other students. I was the head of the technical department",
            "Organised hackathons, and coding workshops for students.",
            "Took online coding sessions on Java programming, web development and shared tips and tricks with students.",
            "Managed the technical team that worked under me. Organising committee reported to me directly regarding event planning, etc.",
        ],
    },
];

const testimonials = [{
        testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [{
        name: "GUI Testing Ecommerce Website",
        description: "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
        tags: [{
                name: "react",
                color: "blue-text-gradient",
            },
            {
                name: "mysql",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: guiproj,
        source_code_link: "https://github.com/rm0929/React-GUI-Testing",
    },
    {
        name: "Scrum Simulator",
        description: "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
        tags: [{
                name: "javaFx",
                color: "blue-text-gradient",
            },
            {
                name: "restapi",
                color: "green-text-gradient",
            },
            {
                name: "springboot",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/ssrin172/Group_Srinivasan",
    },
    {
        name: "Glaucoma Detection Using Deep Learning",
        description: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [{
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "deep learning",
                color: "green-text-gradient",
            },
            {
                name: "hybrid models",
                color: "pink-text-gradient",
            },
        ],
        image: glaucomaproj,
        source_code_link: "https://github.com/rm0929/Glaucoma-Detection-Using-Deep-Learning",
    },
    {
        name: "Language and Compiler Design",
        description: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [{
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "prolog",
                color: "green-text-gradient",
            },
            {
                name: "lexical analyzer",
                color: "pink-text-gradient",
            },
        ],
        image: sarsproj,
        source_code_link: "https://github.com/ssuryaw5/SER502-SARS-Team1",
    },
    {
        name: "Delivery Management System",
        description: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [{
                name: "python",
                color: "blue-text-gradient",
            },
            {
                name: "mysql",
                color: "green-text-gradient",
            },
            {
                name: "gui",
                color: "pink-text-gradient",
            },
        ],
        image: deliveryproj,
        source_code_link: "https://github.com/rm0929/Delivery-Management-System",
    },
    {
        name: "IPL Cricket Match Prediction using R ",
        description: "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
        tags: [{
                name: "R",
                color: "blue-text-gradient",
            },
            {
                name: "data mining",
                color: "green-text-gradient",
            },
            {
                name: "decision tree",
                color: "pink-text-gradient",
            },
        ],
        image: iplproj,
        source_code_link: "https://github.com/rm0929/IPLMatchPrediction-DataMining",
    },
];

export { services, technologies, experiences, testimonials, projects, rm };