import images from './images';
import { COLORS, colors } from './them';

export const Onboardings = [
    {
        id: 1,
        title: "Explore Upcoming and Nearby Events",
        disscription: "In publishing and graphic design, Lorem is a placeholder text commonly",
        image: images.Group1
    },
    {
        id: 2,
        title: "Web Have Modern Events Calendar Feature",
        disscription: "In publishing and graphic design, Lorem is a placeholder text commonly",
        image: images.Group2
    },
    {
        id: 3,
        title: "To Look Up More Events or Activities Nearby By Map",
        disscription: "In publishing and graphic design, Lorem is a placeholder text commonly ",
        image: images.Group3
    },
];

export const InputType = {
    email : 'email',
    password : 'password',
    name : 'name'
}

export const filter = [
    { id:1, color:colors.red2, title: 'Sports', icon: { type:'MaterialIcons', name:'sports-basketball', }},
    { id:2, color:colors.yellow, title: 'Music', icon: { type:'Ionicons', name:'ios-musical-notes', }},
    { id:3, color:colors.darkgreen, title: 'Food', icon: { type:'Ionicons', name:'color-palette-outline', }},
    { id:4, color:colors.lightBlue, title: 'Arts', icon: { type:'Ionicons', name:'fast-food-outline', }},
]