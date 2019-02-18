import React from 'react';
import Page from "./Page";
import Title from "./Title";
import Entry from "./Entry";

export default class Education extends React.Component {
    render() {
        return (
            <Page>
                <Title style={{marginBottom: 60}} label={"Hacks"}/>

                <Entry date={<>15<sup>th</sup> - 17<sup>th</sup> February 2019</>}
                       title={<>Finalist & “Best Deep Learning Hack” at Treehacks</>}
                       location={"Stanford, CA, USA"}/>

                <Entry date={<>1<sup>st</sup> December 2018</>}
                       title={<>1<sup>st</sup> at MLH Local Hack Day</>}
                       location={"San Francisco, CA, USA"}/>

                <Entry date={<>17<sup>th</sup> November 2018</>}
                       title={<>2<sup>nd</sup> place in “Game Development” at SacHacks</>}
                       location={"Sacramento, CA, USA"}/>

                <Entry date={<>2<sup>nd</sup> December 2017</>}
                       title={"“Best Project Idea” at MLH - Local Hack Day 2017"}
                       location={"University of Kent, United Kingdom"}/>

                <Entry date={<>26<sup>th</sup> - 27<sup>th</sup> October 2017</>}
                       title={"Cisco University Challenge 2017"}
                       location={"Cisco Systems, Bedfont Lakes, United Kingdom"}/>

                <Entry date={<>18<sup>th</sup> May 2016</>}
                       title={"“Award of scientific innovation” at National Olympiad finals of Engineering Sciences 2016"}
                       location={"Schneider Electric, Rueil-Malmaison, France"}/>

                <Entry date={<>13<sup>th</sup> April 2016</>}
                       title={<>2<sup>nd</sup> at Academic Olympiad finals of Engineering Sciences of Paris 2016</>}
                       location={"EIVP, Paris, France"}/>

                <Entry date={<>14<sup>th</sup> March 2016</>}
                       title={<>33<sup>rd</sup> out of 1200 at Meilleur Dev de France 2016 - General</>}
                       location={"Paris, France"}/>

                <Entry date={<>14<sup>th</sup> March 2016</>}
                       title={<>4<sup>th</sup> at Meilleur Dev de France 2016 - PHP</>}
                       location={"Paris, France"}/>

                <Entry date={<>7<sup>th</sup> May 2015</>}
                       title={<>5<sup>th</sup> out of 400 at Open du Web #5</>}
                       location={"Paris, France"}/>

                <Entry date={<>6<sup>th</sup> May 2015</>}
                       title={<>3<sup>rd</sup> at Academic Olympiad finals of Engineering Sciences of Paris 2015</>}
                       location={"GRDF, Paris, France"}/>

                <Entry date={<>12<sup>th</sup> March 2015</>}
                       title={<>66<sup>th</sup> at Meilleur Dev de France 2015 - PHP</>}
                       location={"42 School, Paris, France"}/>

                <Entry date={<>15<sup>th</sup> May 2014</>}
                       title={<>270<sup>th</sup> out of 1000 at Meilleur Dev de France 2014 - General</>}
                       location={"42 School, Paris, France"}/>

                <Entry date={<>28<sup>th</sup> November 2013</>}
                       title={<>5<sup>th</sup> out of 200 at Open du Web #4</>}
                       location={"Paris, France"}/>

            </Page>
        )
    }
}
