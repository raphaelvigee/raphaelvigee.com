import * as React from 'react';
import CVShort from './assets/cv/CV_Raphael_Vigee.short.pdf';
import ContactComponent from './components/Muggles/Contact';
import EducationComponent from './components/Muggles/Education';
import ExperiencesComponent from './components/Muggles/Experiences';
import HacksComponent from './components/Muggles/Hacks';
import ResumeComponent from './components/Muggles/Resume';
import { catOpen } from './components/Terminal/fs';
import { RunProps } from './components/Terminal/utils';

function printNl(write) {
    write(` `);
}

function printTitle(title: string, write) {
    write(title);
    write('='.repeat(title.length));
}

function printEntry<O>(keys: { [s in keyof O]?: string }, o: O, write) {
    const m = Math.max(...Object.values<string | undefined>(keys).map((k) => (k ? k.length : 0)));

    for (const [k, name] of Object.entries(keys) as Array<[keyof O, string]>) {
        if (k in o) {
            write(
                <>
                    {`${name}${' '.repeat(m - name.length)}: `}
                    {o[k]}
                </>,
            );
        }
    }

    printNl(write);
}

export const Pages = [
    {
        name: 'Experiences',
        path: 'experiences',
        component: ExperiencesComponent,
        cat: (_, { write }: RunProps) => {
            printTitle('Jobs', write);
            JobExperiences.forEach((e) => {
                printEntry(
                    {
                        date: 'Date',
                        title: 'Title',
                        details: 'Details',
                        location: 'Location',
                        extras: 'More info',
                    },
                    e,
                    write,
                );
            });

            printNl(write);

            printTitle('Projects', write);
            ProjectExperiences.forEach((e) => {
                printEntry(
                    {
                        title: 'Title',
                        description: 'Description',
                        link: 'Link',
                    },
                    e,
                    write,
                );
            });
        },
    },
    {
        name: 'Hacks',
        path: 'hacks',
        component: HacksComponent,
        cat: (_, { write }: RunProps) => {
            Hacks.forEach((e) => {
                printEntry(
                    {
                        date: 'Date',
                        title: 'Title',
                        location: 'Location',
                    },
                    e,
                    write,
                );
            });
        },
    },
    {
        name: 'Education',
        path: 'education',
        component: EducationComponent,
        cat: (_, { write }: RunProps) => {
            Education.forEach((e) => {
                printEntry(
                    {
                        date: 'Date',
                        title: 'Title',
                        details: 'Details',
                        location: 'Location',
                    },
                    e,
                    write,
                );
            });
        },
    },
    {
        name: 'Résumé',
        path: 'resume',
        component: ResumeComponent,
        cat: catOpen(CVShort),
    },
    {
        name: 'Contact',
        path: 'contact',
        component: ContactComponent,
        cat: (_, { write }: RunProps) => {
            write(<ContactComponent />);
        },
    },
];

export const Education = [
    {
        date: 'September 2016 - June 2020',
        title: 'BSc Computer Science (Artificial Intelligence) with a Year in Industry',
        details: 'First Class Honours',
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
        date: (
            <>
                15<sup>th</sup> - 17<sup>th</sup> February 2019
            </>
        ),
        title: <>Finalist & “Best Deep Learning Hack” at Treehacks</>,
        location: 'Stanford University, CA, USA',
    },
    {
        date: (
            <>
                1<sup>st</sup> December 2018
            </>
        ),
        title: (
            <>
                1<sup>st</sup> at MLH Local Hack Day
            </>
        ),
        location: 'San Francisco, CA, USA',
    },
    {
        date: (
            <>
                17<sup>th</sup> November 2018
            </>
        ),
        title: (
            <>
                2<sup>nd</sup> place in “Game Development” at SacHacks
            </>
        ),
        location: 'Sacramento, CA, USA',
    },
    {
        date: (
            <>
                2<sup>nd</sup> December 2017
            </>
        ),
        title: '“Best Project Idea” at MLH - Local Hack Day 2017',
        location: 'University of Kent, United Kingdom',
    },
    {
        date: (
            <>
                26<sup>th</sup> - 27<sup>th</sup> October 2017
            </>
        ),
        title: 'Cisco University Challenge 2017',
        location: 'Cisco Systems, Bedfont Lakes, United Kingdom',
    },
    {
        date: (
            <>
                18<sup>th</sup> May 2016
            </>
        ),
        title: '“Award of scientific innovation” at National Olympiad finals of Engineering Sciences 2016',
        location: 'Schneider Electric, Rueil-Malmaison, France',
    },
    {
        date: (
            <>
                13<sup>th</sup> April 2016
            </>
        ),
        title: (
            <>
                2<sup>nd</sup> at Academic Olympiad finals of Engineering Sciences of Paris 2016
            </>
        ),
        location: 'EIVP, Paris, France',
    },
    {
        date: (
            <>
                14<sup>th</sup> March 2016
            </>
        ),
        title: (
            <>
                33<sup>rd</sup> out of 1200 at Meilleur Dev de France 2016 - General
            </>
        ),
        location: 'Paris, France',
    },
    {
        date: (
            <>
                14<sup>th</sup> March 2016
            </>
        ),
        title: (
            <>
                4<sup>th</sup> at Meilleur Dev de France 2016 - PHP
            </>
        ),
        location: 'Paris, France',
    },
    {
        date: (
            <>
                7<sup>th</sup> May 2015
            </>
        ),
        title: (
            <>
                5<sup>th</sup> out of 400 at Open du Web #5
            </>
        ),
        location: 'Paris, France',
    },
    {
        date: (
            <>
                6<sup>th</sup> May 2015
            </>
        ),
        title: (
            <>
                3<sup>rd</sup> at Academic Olympiad finals of Engineering Sciences of Paris 2015
            </>
        ),
        location: 'GRDF, Paris, France',
    },
    {
        date: (
            <>
                12<sup>th</sup> March 2015
            </>
        ),
        title: (
            <>
                66<sup>th</sup> at Meilleur Dev de France 2015 - PHP
            </>
        ),
        location: '42 School, Paris, France',
    },
    {
        date: (
            <>
                15<sup>th</sup> May 2014
            </>
        ),
        title: (
            <>
                270<sup>th</sup> out of 1000 at Meilleur Dev de France 2014 - General
            </>
        ),
        location: '42 School, Paris, France',
    },
    {
        date: (
            <>
                28<sup>th</sup> November 2013
            </>
        ),
        title: (
            <>
                5<sup>th</sup> out of 200 at Open du Web #4
            </>
        ),
        location: 'Paris, France',
    },
];

export const JobExperiences = [
    {
        date: 'January 2021 - Present',
        title: 'Software Engineer',
        details: 'Golang / Kubernetes / NodeJs',
        location: 'Infiot, Remote',
    },
    {
        date: 'July 2019 - January 2021',
        title: 'Software Engineer',
        details: 'Golang / Kubernetes / ReactJs / NodeJs / Python',
        location: 'Cisco, Remote',
        extras: (
            <ul>
                <li>
                    Further work on the productivity tool (see below), improving it taking into account user feedback
                    and new features requests
                </li>
                <li>
                    Developed a cloud wrapper for a non-cloud system, making it easy to manage as a cloud service and
                    adding features such as access control, HA and built-in technical support
                </li>
            </ul>
        ),
    },
    {
        date: 'August 2018 - July 2019',
        title: 'Software Engineer Intern',
        details: 'Golang / Kubernetes / ReactJs / NodeJs / Python',
        location: 'Cisco, San Jose, USA',
        extras: (
            <ul>
                <li>
                    Developed a internal tool to boost developer productivity by gathering data from across services and
                    displaying them in a single place in an intuitive manner
                </li>
                <li>Introduced Kubernetes to the team and made a POC production-ready HA cluster</li>
                <li>Optimized the build pipelines making it 10% faster and more reliable</li>
                <li>Worked on various internal dashboarding and reports tools</li>
            </ul>
        ),
    },
    {
        date: 'June - July 2017',
        title: 'Full Stack Web Developer',
        details: 'Symfony 3 / ReactJs',
        location: 'Windoo, Paris, France',
        extras: <span>Began the transition the B2C product into a B2B platform</span>,
    },
    {
        date: 'November 2016 - March 2018',
        title: 'Full Stack Web Developer & Mobile App Developer',
        details: 'Symfony 3 / ReactJs / React Native',
        location: 'Captain Fight, Bordeaux, France (Remote)',
        extras: (
            <span>
                Developed the platform and the mobile applications with a very quick feedback loop to accommodate users
                needs
            </span>
        ),
    },
    {
        date: 'July 2016',
        title: 'Full Stack Web Developer & Mobile App Developer',
        details: 'Symfony 2 / React Native',
        location: 'Windoo, Paris, France',
        extras: <span>Laid down the platform foundations with the CTO</span>,
    },
    {
        date: 'July - August 2015',
        title: 'Full Stack Web Developer',
        location: 'Concepting, Paris, France',
        extras: <span>Participated in numerous projects in Joomla, Wordpress and Symfony</span>,
    },
    {
        date: 'May 2014',
        title: 'Full Stack Web Developer',
        location: 'Les Argonautes, Paris, France',
        extras: <span>Participated in numerous projects in Wordpress</span>,
    },
];

const TAG_PHP = { name: 'PHP' };
const TAG_SYMFONY3 = { name: 'Symfony 3' };
const TAG_REACT = { name: 'React' };
const TAG_NODE = { name: 'NodeJs' };
const TAG_C = { name: 'C' };
const TAG_CPP = { name: 'C++' };
const TAG_JAVA = { name: 'Java' };

export const ProjectExperiences = [
    {
        title: 'Musish',
        link: 'https://github.com/Musish/Musish',
        description: 'An Apple Music Web Client | ★2.5k+',
        tags: [TAG_REACT, TAG_NODE],
        extras: (
            <ul>
                <li>#1 GH Trending in JS</li>
                <li>#2 GH Trending Global</li>
            </ul>
        ),
    },
    {
        title: 'Risotto',
        link: 'https://github.com/risotto/risotto',
        description: 'A high level VM stack-based language, from scratch.',
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
