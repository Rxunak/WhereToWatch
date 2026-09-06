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
}

export const availabilityGroups: AvailabilityGroup[] = [
  {
    key: "flatrate",
    title: "Subscription",
    caption: "Included with your plan",
  },
  {
    key: "free",
    title: "Free",
    caption: "No subscription needed",
  },
  {
    key: "rent",
    title: "Rent",
    caption: "One-off payment",
  },

  {
    key: "buy",
    title: "Buy",
    caption: "One-off payment",
  },

];

export const providerLinks: Record<string, string> = {
  Netflix: "https://www.netflix.com",
  "Amazon Prime Video": "https://www.primevideo.com",
  "Amazon Video": "https://www.amazon.co.uk/gp/video",
  "Disney Plus": "https://www.disneyplus.com",
  "Apple TV": "https://tv.apple.com",
  "Apple TV Plus": "https://tv.apple.com",
  "Google Play Movies": "https://play.google.com/store/movies",
  YouTube: "https://www.youtube.com/feed/storefront",
  "Sky Store": "https://www.skystore.com",
  "Sky Go": "https://www.sky.com/watch/sky-go",
  NOW: "https://www.nowtv.com",
  "BBC iPlayer": "https://www.bbc.co.uk/iplayer",
  ITVX: "https://www.itv.com",
  "Channel 4": "https://www.channel4.com",
  My5: "https://www.channel5.com/my5",
  "Rakuten TV": "https://www.rakuten.tv",
  Chili: "https://uk.chili.com",
  "Microsoft Store": "https://www.microsoft.com/en-gb/store/movies-and-tv",
  "Curzon Home Cinema": "https://www.curzonhomecinema.com",
  MUBI: "https://mubi.com",
  "BFI Player": "https://player.bfi.org.uk",
  "Paramount Plus": "https://www.paramountplus.com",
  Peacock: "https://www.peacocktv.com",
  "HBO Max": "https://www.max.com",
  Max: "https://www.max.com",
  Hulu: "https://www.hulu.com",
  Vudu: "https://www.vudu.com",
};

export const getProviderUrl = (providerName: string, fallbackUrl?: string) => {
  return providerLinks[providerName] ?? fallbackUrl ?? "#";
};

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

