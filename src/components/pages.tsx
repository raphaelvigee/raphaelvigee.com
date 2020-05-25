import Contact from './Contact';
import Education from './Education';
import Experiences from './Experiences';
import Hacks from './Hacks';
import Resume from './Resume';

const Pages = [
    {
        name: 'Education',
        path: 'education',
        component: Education,
    },
    {
        name: 'Hacks',
        path: 'hacks',
        component: Hacks,
    },
    {
        name: 'Experiences',
        path: 'experiences',
        component: Experiences,
    },
    {
        name: 'Resume',
        path: 'resume',
        component: Resume,
    },
    {
        name: 'Contact',
        path: 'contact',
        component: Contact,
    },
];

export default Pages;
