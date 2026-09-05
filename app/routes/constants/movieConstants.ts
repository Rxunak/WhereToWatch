export const movieDetails = {
  title: "Arrival",
  type: "Film",
  year: 2016,
  runtime: "1h 56m",
  rating: 7.9,
  synopsis:
    "A linguist is recruited to communicate with extraterrestrial visitors before global tensions boil over.",
  region: "United States",
  updatedLabel: "updated 2 hours ago",
} as const;

export interface StreamingOffer {
  service: string;
  borderClass: string;
  dotClass: string;
  note: string;
  cta: string;
}

export interface AvailabilityGroup {
  key: string;
  title: string;
  caption: string;
  offers: StreamingOffer[];
}

export const availabilityGroups: AvailabilityGroup[] = [
  {
    key: "subscription",
    title: "Subscription",
    caption: "Included with your plan",
    offers: [
      {
        service: "Paramount+",
        borderClass: "border-paramount-plus",
        dotClass: "bg-paramount-plus",
        note: "Streaming",
        cta: "Watch",
      },
    ],
  },
  {
    key: "free",
    title: "Free",
    caption: "No subscription needed",
    offers: [
      {
        service: "Tubi",
        borderClass: "border-tubi",
        dotClass: "bg-tubi",
        note: "With ads",
        cta: "Watch",
      },
      {
        service: "Pluto TV",
        borderClass: "border-pluto-tv",
        dotClass: "bg-pluto-tv",
        note: "With ads",
        cta: "Watch",
      },
    ],
  },
  {
    key: "rent",
    title: "Rent or buy",
    caption: "One-off payment",
    offers: [
      {
        service: "YouTube",
        borderClass: "border-youtube",
        dotClass: "bg-youtube",
        note: "$3.99 · HD",
        cta: "$3.99",
      },
      {
        service: "Apple TV",
        borderClass: "border-apple-tv",
        dotClass: "bg-apple-tv",
        note: "$3.99 · 4K",
        cta: "$3.99",
      },
    ],
  },
];

export const time_convert = (num:any) => {
   // Calculate the number of hours by dividing num by 60 and rounding down
  var hours = Math.floor(num / 60);  

  // Calculate the remaining minutes by taking the remainder when dividing num by 60
  var minutes = num % 60;

  // Return the result as a string in the format "hours:minutes"
  if(hours === 0){
    return minutes + "m";   
  }else{
    return hours + "h " + minutes + "m";   

  }
  
}

