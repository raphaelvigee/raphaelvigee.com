import React from 'react';
import Page from "./Page";
import Title from "./Title";
import Entry from "./Entry";

export default class Education extends React.Component {
    render() {
        return (
            <Page>
                <Title style={{marginBottom: 60}} label={"Education"}/>

                <Entry date={"17th November 2018"}
                       title={"2nd place in “Game Development” at SacHacks"}
                       location={"SacHacks, Sacrament, USA"}/>

                <Entry date={"September 2016 - June 2020"}
                       title={"BSc Computer Science (Artificial Intelligence) with a Year in Industry"}
                       location={"University of Kent, United Kingdom"}/>

                <Entry date={"2nd December 2017"}
                       title={"“Best Project Idea” at MLH - Local Hack Day 2017"}
                       location={"University of Kent, United Kingdom"}/>

                <Entry date={"26th - 27th October 2017"}
                       title={"Cisco University Challenge 2017"}
                       location={"Cisco Systems, Bedfont Lakes, United Kingdom"}/>

                <Entry date={"June 2016"}
                       title={"French Baccalaureate with honors"}
                       details={"Engineering Sciences"}
                       location={"Lycée Janson de Sailly, Paris, France"}/>

                <Entry date={"19th May 2016"}
                       title={"IELTS - English Proficiency Exam | 7.5 Overall"}
                       details={"Listening : 8.0 | Reading : 7.0 | Writing : 6.0 | Speaking : 8.0"}/>

                <Entry date={"18th May 2016"}
                       title={"“Award of scientific innovation” at National Olympiad finals of Engineering Sciences 2016"}
                       location={"Schneider Electric, Rueil-Malmaison, France"}/>

                <Entry date={"13th April 2016"}
                       title={"2nd at Academic Olympiad finals of Engineering Sciences of Paris 2016"}
                       location={"EIVP, Paris, France"}/>

                <Entry date={"14th March 2016"}
                       title={"33rd out of 1200 at Meilleur Dev de France 2016 - General"}
                       location={"Paris, France"}/>

                <Entry date={"14th March 2016"}
                       title={"4th at Meilleur Dev de France 2016 - PHP"}
                       location={"Paris, France"}/>

                <Entry date={"7th May 2015"}
                       title={"5th out of 400 at Open du Web #5"}
                       location={"Paris, France"}/>

                <Entry date={"6th May 2015"}
                       title={"3rd at Academic Olympiad finals of Engineering Sciences of Paris 2015"}
                       location={"GRDF, Paris, France"}/>

                <Entry date={"12th March 2015"}
                       title={"66th at Meilleur Dev de France 2015 - PHP"}
                       location={"42 School, Paris, France"}/>

                <Entry date={"15th May 2014"}
                       title={"270th out of 1000 at Meilleur Dev de France 2014 - General"}
                       location={"42 School, Paris, France"}/>

                <Entry date={"28th November 2013"}
                       title={"5th out of 200 at Open du Web #4"}
                       location={"Paris, France"}/>

                <Entry date={"June 2009"}
                       title={"School Certificate with honors"}
                       location={"Lycée Janson de Sailly, Paris, France"}/>

            </Page>
        )
    }
}
