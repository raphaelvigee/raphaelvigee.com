import React from 'react';
import Page from "./Page";
import Title from "./Title";
import Entry from "./Entry";
import SubTitle from "./SubTitle";
import ProjectEntry from "./ProjectEntry";

const TAG_PHP = {name: "PHP"};
const TAG_SYMFONY3 = {name: "Symfony 3"};
const TAG_REACT = {name: "React"};
const TAG_NODE = {name: "NodeJs"};
const TAG_C = {name: "C"};
const TAG_CPP = {name: "C++"};
const TAG_JAVA = {name: "Java"};

export default class Experiences extends React.Component {
    render() {
        return (
            <Page>
                <Title style={{marginBottom: 60}} label={"Experiences"}/>

                <SubTitle label={"Jobs"}/>

                <Entry date={"August 2018 - July 2019"}
                       title={"Software Engineer Intern"}
                       details={"DevOps / ReactJs / NodeJs / Python / Go"}
                       location={"Cisco, San Jose, USA"}/>

                <Entry date={"June - July 2017"}
                       title={"Full Stack Web Developer"}
                       details={"Symfony 3 / ReactJs"}
                       location={"Windoo, Paris, France"}/>

                <Entry date={"November 2016 - March 2018"}
                       title={"Full Stack Web Developer & Mobile App Developer"}
                       details={"Symfony 3 / ReactJs / React Native"}
                       location={"Captain Fight, Bordeaux, France (Remote)"}/>

                <Entry date={"July 2016"}
                       title={"Full Stack Web Developer & Mobile App Developer"}
                       details={"Symfony 2 / React Native"}
                       location={"Windoo, Paris, France"}/>

                <Entry date={"July - August 2015"}
                       title={"Full Stack Web Developer"}
                       location={"Concepting, Paris, France"}/>

                <Entry date={"May 2014"}
                       title={"Full Stack Web Developer"}
                       location={"Les Argonautes, Paris, France"}/>

                <SubTitle style={{marginTop: 60}} label={"Projects"}/>

                <ProjectEntry title={"Musish"}
                              link={'https://github.com/Musish/Musish'}
                              description={"An Apple Music Web Client | #1 GH Trending in JS | #2 GH Trending Global | ★1400+"}
                              tags={[TAG_REACT, TAG_NODE]}/>

                <ProjectEntry title={"Risotto"}
                              link={'https://github.com/raphaelvigee/risotto'}
                              description={"A high lavel VM stack-based language, from scratch. Supports Objects & Generics"}
                              tags={[TAG_C, TAG_CPP]}/>

                <ProjectEntry title={"StrollPlanner"}
                              link={'https://pari-roller.stroll.pl'}
                              description={"Stroll planning tool with live tracking"}
                              tags={[TAG_PHP, TAG_SYMFONY3, TAG_REACT]}/>

                <ProjectEntry title={"SplashDash"}
                              link={'https://github.com/raphaelvigee/SplashDash'}
                              description={"A beautiful \"New Tab\" for Chrome"}
                              tags={[TAG_REACT]}/>

                <ProjectEntry title={"Java Expression Language"}
                              link={'https://github.com/raphaelvigee/JavaExpressionlanguage'}
                              description={"A simple one-liner language for Java"}
                              tags={[TAG_JAVA]}/>
            </Page>
        )
    }
}
