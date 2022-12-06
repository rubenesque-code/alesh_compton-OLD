// description can either be a string (text surrounded by "") or an array (surrounded by []) if you want to break the paragraph.

type LocalImage = {
  type: "image";
  url: string;
};
type YoutubeVideo = {
  type: "youtube-image";
  youtubeId: string;
};

export type Page = {
  title: string;
  description?: string | string[];
  media: (LocalImage | YoutubeVideo)[];
};

export const homePage: Page = {
  title: "Butterfly",
  description:
    "Butterfly was a multi format project that took the form of a hardback book, film and touring exhibition, all of which were released in 2019. The project is a portrait of night life in Havana and the various characters that exist when darkness falls, centered around identical twins Shayra & Isabella, who transitioned from male to female together in the Cuban countryside, and now do sex work in the streets of Havana. The book was launched alongside solo shows in London, Milan (Spazzio Maiocchi) & Tokyo (komiyama books), where there was also a screening of a 22 minute film. The exhibition featured several large scale, mixed media collages and large format screenprints on unprimed linen. The book was available through IDEA books.",
  media: [],
};

export const nonHomePages: Page[] = [
  {
    title: "Transformation",
    description:
      "Transformation is a year long self portrait project predominantly shot in Mexico and combining digital techniques like facial modification apps, artificial intelligence, digital image recolouring & photoshop with analogue techniques like screenprint, airbrushing, rephotography, scanning & painting.  The project culminated in an exhibition of the paintings in London, a weeklong public screening of the film in Tokyo and a hardback book, which is available for purchase here – https://www.transformation-zine.com/",
    media: [{ type: "image", url: "images/butterfly/1" }],
  },
  {
    title: "Diary Part 1",
    description: [
      "Edition of 300",
      "Self Published",
      "First editon, signed & numbered",
    ],
    media: [],
  },
];
