import * as React from 'react';
import ContactComponent from './Contact';
import EducationComponent from './Education';
import ExperiencesComponent from './Experiences';
import HacksComponent from './Hacks';
import ResumeComponent from './Resume';

export const Pages = [
    {
        name: 'Education',
        path: 'education',
        component: EducationComponent,
    },
    {
        name: 'Hacks',
        path: 'hacks',
        component: HacksComponent,
    },
    {
        name: 'Experiences',
        path: 'experiences',
        component: ExperiencesComponent,
    },
    {
        name: 'Résumé',
        path: 'resume',
        component: ResumeComponent,
    },
    {
        name: 'Contact',
        path: 'contact',
        component: ContactComponent,
    },
];

export const Education = [
    {
        date: 'September 2016 - June 2020',
        title: 'BSc Computer Science (Artificial Intelligence) with a Year in Industry',
        location: 'University of Kent, United Kingdom',
    },
    {
        date: 'June 2016',
        title: 'French Baccalaureate with honors',
        details: 'Engineering Sciences',
        location: 'Lycée Janson de Sailly, Paris, France',
    },
    {
        date: '19th May 2016',
        title: 'IELTS - English Proficiency Exam | 7.5 Overall',
        details: 'Listening : 8.0 | Reading : 7.0 | Writing : 6.0 | Speaking : 8.0',
    },
    {
        date: 'June 2009',
        title: 'School Certificate with honors',
        location: 'Lycée Janson de Sailly, Paris, France',
    },
];

export const Hacks = [
    {
        date: <>15<sup>th</sup> - 17<sup>th</sup> February 2019</>,
        title: <>Finalist & “Best Deep Learning Hack” at Treehacks</>,
        location: 'Stanford University, CA, USA',
    },
    {
        date: <>1<sup>st</sup> December 2018</>,
        title: <>1<sup>st</sup> at MLH Local Hack Day</>,
        location: 'San Francisco, CA, USA',
    },
    {
        date: <>17<sup>th</sup> November 2018</>,
        title: <>2<sup>nd</sup> place in “Game Development” at SacHacks</>,
        location: 'Sacramento, CA, USA',
    },
    {
        date: <>2<sup>nd</sup> December 2017</>,
        title: '“Best Project Idea” at MLH - Local Hack Day 2017',
        location: 'University of Kent, United Kingdom',
    },
    {
        date: <>26<sup>th</sup> - 27<sup>th</sup> October 2017</>,
        title: 'Cisco University Challenge 2017',
        location: 'Cisco Systems, Bedfont Lakes, United Kingdom',
    },
    {
        date: <>18<sup>th</sup> May 2016</>,
        title: '“Award of scientific innovation” at National Olympiad finals of Engineering Sciences 2016',
        location: 'Schneider Electric, Rueil-Malmaison, France',
    },
    {
        date: <>13<sup>th</sup> April 2016</>,
        title: <>2<sup>nd</sup> at Academic Olympiad finals of Engineering Sciences of Paris 2016</>,
        location: 'EIVP, Paris, France',
    },
    {
        date: <>14<sup>th</sup> March 2016</>,
        title: <>33<sup>rd</sup> out of 1200 at Meilleur Dev de France 2016 - General</>,
        location: 'Paris, France',
    },
    {
        date: <>14<sup>th</sup> March 2016</>,
        title: <>4<sup>th</sup> at Meilleur Dev de France 2016 - PHP</>,
        location: 'Paris, France',
    },
    {
        date: <>7<sup>th</sup> May 2015</>,
        title: <>5<sup>th</sup> out of 400 at Open du Web #5</>,
        location: 'Paris, France',
    },
    {
        date: <>6<sup>th</sup> May 2015</>,
        title: <>3<sup>rd</sup> at Academic Olympiad finals of Engineering Sciences of Paris 2015</>,
        location: 'GRDF, Paris, France',
    },
    {
        date: <>12<sup>th</sup> March 2015</>,
        title: <>66<sup>th</sup> at Meilleur Dev de France 2015 - PHP</>,
        location: '42 School, Paris, France',
    },
    {
        date: <>15<sup>th</sup> May 2014</>,
        title: <>270<sup>th</sup> out of 1000 at Meilleur Dev de France 2014 - General</>,
        location: '42 School, Paris, France',
    },
    {
        date: <>28<sup>th</sup> November 2013</>,
        title: <>5<sup>th</sup> out of 200 at Open du Web #4</>,
        location: 'Paris, France',
    },
];

export const JobExperiences = [
    {
        date: 'July 2019 - Present',
        title: 'Software Engineer',
        details: 'Golang / Kubernetes / ReactJs / NodeJs / Python',
        location: 'Cisco, Remote',
    },
    {
        date: 'August 2018 - July 2019',
        title: 'Software Engineer Intern',
        details: 'Golang / Kubernetes / ReactJs / NodeJs / Python',
        location: 'Cisco, San Jose, USA',
    },
    {
        date: 'June - July 2017',
        title: 'Full Stack Web Developer',
        details: 'Symfony 3 / ReactJs',
        location: 'Windoo, Paris, France',
    },
    {
        date: 'November 2016 - March 2018',
        title: 'Full Stack Web Developer & Mobile App Developer',
        details: 'Symfony 3 / ReactJs / React Native',
        location: 'Captain Fight, Bordeaux, France (Remote)',
    },
    {
        date: 'July 2016',
        title: 'Full Stack Web Developer & Mobile App Developer',
        details: 'Symfony 2 / React Native',
        location: 'Windoo, Paris, France',
    },
    {
        date: 'July - August 2015',
        title: 'Full Stack Web Developer',
        location: 'Concepting, Paris, France',
    },
    {
        date: 'May 2014',
        title: 'Full Stack Web Developer',
        location: 'Les Argonautes, Paris, France',
    },
];

const TAG_PHP = {name: 'PHP'};
const TAG_SYMFONY3 = {name: 'Symfony 3'};
const TAG_REACT = {name: 'React'};
const TAG_NODE = {name: 'NodeJs'};
const TAG_C = {name: 'C'};
const TAG_CPP = {name: 'C++'};
const TAG_JAVA = {name: 'Java'};

export const ProjectExperiences = [
    {
        title: 'Musish',
        link: 'https://github.com/Musish/Musish',
        description: 'An Apple Music Web Client | #1 GH Trending in JS | #2 GH Trending Global | ★2.4k+',
        tags: [TAG_REACT, TAG_NODE],
    },
    {
        title: 'Risotto',
        link: 'https://github.com/raphaelvigee/risotto',
        description: 'A high level VM stack-based language, from scratch. Supports Objects & Generics',
        tags: [TAG_C, TAG_CPP],
    },
    {
        title: 'StrollPlanner',
        link: 'https://pari-roller.stroll.pl',
        description: 'Stroll planning tool with live tracking',
        tags: [TAG_PHP, TAG_SYMFONY3, TAG_REACT],
    },
    {
        title: 'SplashDash',
        link: 'https://github.com/raphaelvigee/SplashDash',
        description: 'A beautiful "New Tab" for Chrome',
        tags: [TAG_REACT],
    },
    {
        title: 'Java Expression Language',
        link: 'https://github.com/raphaelvigee/JavaExpressionlanguage',
        description: 'A simple one-liner language for Java',
        tags: [TAG_JAVA],
    },
];
