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
    { id:1, color:colors.red3, title: 'Sports', icon: { type:'MaterialIcons', name:'sports-basketball', }},
    { id:2, color:colors.orange, title: 'Music', icon: { type:'Ionicons', name:'ios-musical-notes', }},
    { id:3, color:colors.green2, title: 'Food', icon: { type:'Ionicons', name:'color-palette-outline', }},
    { id:4, color:colors.cyan, title: 'Arts', icon: { type:'Ionicons', name:'fast-food-outline', }},
]

export const eventsList = [
    {id:1, EventImage: images.event1, image: images.event, title:'Jo Malone London’s Mother’s Day Presents', description:"Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase. Read More...",
        date:{day: 14, month: 'June', year:'2021', week: 'Tue', startTime:'5:30 PM', endTime: '9:30 PM'},
        location:{ address: '36 Guild Street London, UK', name:'Gala Convention Center'},
        organizer:{image: images.Organizer, name: 'Ashfak Sayem'}
    },
    {id:2, EventImage: images.event2, image: images.event, title:'A Virtual Evening of Smooth Jazz', description:"Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase. Read More...",
        date:{day: 1, month: 'May', year:'2021', week: 'Sat', endTime: '4:00 PM', startTime:'2:00 PM'},
        location:{ address: 'Lot 13 • Oakland, CA', name:'Gala Convention Center'},
        organizer:{image: images.Organizer, name: 'Ashfak Sayem'}
    },
    {id:3, EventImage: images.event3, image: images.event, title:"Women's Leadership Conference 2021", description:"Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase. Read More...",
        date:{day: 24, month: 'Apr', year:'2021', week: 'Sat', endTime: "2:30 PM", startTime:'1:30 PM'},
        location:{ address: '53 Bush St • San Francisco, CA', name:'Gala Convention Center'},
        organizer:{image: images.Organizer, name: 'Ashfak Sayem'}
    },
    {id:4, EventImage: images.event4, image: images.event, title:'International Kids Safe Parents Night Out', description:"Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase. Read More...",
        date:{day: 23, month: 'Apr', year:'2021', week: 'Fir', endTime: '9:00 PM', startTime:'6:00 PM'},
        location:{ address: 'Lot 13 • Oakland, CA', name:'Gala Convention Center'},
        organizer:{image: images.Organizer, name: 'Ashfak Sayem'}
    },
    {id:5, EventImage: images.event5, image: images.event, title:'Collectivity Plays the Music of Jimi ', description:"Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase. Read More...",
        date:{day: 21, month: 'Jun', year:'2021', week: 'Mon', endTime: '12:00 PM', startTime:'10:00'},
        location:{ address: 'Longboard Margarita Bar', name:'Gala Convention Center'},
        organizer:{image: images.Organizer, name: 'Ashfak Sayem'}
    },
    {id:6, EventImage: images.event6, image: images.event, title:'International Gala Music Festival', description:"Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase. Read More...",
        date:{day: 25, month: 'Apr', year:'2021', week: 'Tuesday', endTime: '12:20 PM', startTime:'10:15'},
        location:{ address: '36 Guild Street London, UK', name:'Gala Convention Center'},
        organizer:{image: images.Organizer, name: 'Ashfak Sayem'}
    },
    {id:7, EventImage: images.event7, image: images.event, title:'International Music Festival', description:"Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase. Read More...",
        date:{day: 30, month: 'May', year:'2021', week: 'Tuesday', endTime: '9:30 PM', startTime:'5:30'},
        location:{ address: '36 Guild Street London, UK', name:'Gala Convention Center'},
        organizer:{image: images.Organizer, name: 'Ashfak Sayem'}
    },
    {id:8, EventImage: images.event8, image: images.event, title:'Music Leadership Conference 2021', description:"Enjoy your favorite dishe and a lovely your friends and family and have a great time. Food from local food trucks will be available for purchase. Read More...",
        date:{day: 20, month: 'june', year:'2021', week: 'Tuesday', endTime: '9:30 PM', startTime:'5:30'},
        location:{ address: '36 Guild Street London, UK', name:'Gala Convention Center'},
        organizer:{image: images.Organizer, name: 'Ashfak Sayem'}
    },
]

export const mapStylesDark = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#212121"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9e9e9e"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#bdbdbd"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#181818"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#1b1b1b"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#2c2c2c"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8a8a8a"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#373737"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#3c3c3c"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#4e4e4e"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#616161"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#757575"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#000000"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#3d3d3d"
        }
      ]
    }
  ];

export const mapStylesNight = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#263c3f"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#6b9a76"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#38414e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#212a37"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9ca5b3"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#1f2835"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#f3d19c"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#2f3948"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#515c6d"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    }
  ]

export const mapStylesRetro = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#ebe3cd"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#523735"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#f5f1e6"
        }
      ]
    },
    {
      "featureType": "administrative",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#c9b2a6"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#dcd2be"
        }
      ]
    },
    {
      "featureType": "administrative.land_parcel",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#ae9e90"
        }
      ]
    },
    {
      "featureType": "landscape.natural",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#93817c"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#a5b076"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#447530"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f5f1e6"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#fdfcf8"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#f8c967"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#e9bc62"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#e98d58"
        }
      ]
    },
    {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#db8555"
        }
      ]
    },
    {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#806b63"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#8f7d77"
        }
      ]
    },
    {
      "featureType": "transit.line",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#ebe3cd"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#dfd2ae"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry.fill",
      "stylers": [
        {
          "color": "#b9d3c2"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#92998d"
        }
      ]
    }
  ];

export type PredictionType = {
  description: string
  place_id: string
  reference: string
  matched_substrings: any[]
  tructured_formatting: Object
  terms: Object[]
  types: string[]
}

export const url = {
  GOOGLE_PACES_API_BASE_URL:'https://maps.googleapis.com/maps/api/place',
  GOOGLE_API_KEY:'sfgsdvfswdrv'
}