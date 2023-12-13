import { v4 } from "uuid";

export const education = {
  fields: {
    Title: "Acronym",
    School: "Some School",
    Location: "Manhattan, NY",
    Start: "1994",
    End: "2004",
    Degree: "Bachelor of Comedy",
    GPA: "3.14",
  },
  needsDescription: false,
  key: "",
};
export const experience = {
  fields: {
    Title: "SWE",
    Company: "BlockBuster",
    Position: "CEO",
    Start: "1977",
    End: "Present",
    Location: "Hawaii",
    Description: "I do stuff;; Also, I do other stuff",
  },
  needsDescription: true,
  key: "",
};

export const reddeadeasteregg = {
  about: {
    title: "About You",
    fields: {
      Name: "Tacitus Kilgore",
      Location: "Wild West",
      Email: "morgan@strawberry.post",
      Phone: "123-4567",
      Website: "https://tahiti.com",
      LinkedIn: "not needed",
    },
    needsDescription: false,
    key: v4(),
  },
  education: {
    fields: {
      Title: "Dutch's Plan",
      School: "Van der Linde University",
      Location: "Blackwater, West Elizabeth",
      Start: "1877",
      End: "1887",
      Degree: "Bachelor of outlaws",
      GPA: "3.14",
    },
    key: v4(),
  },
  experience1: {
    fields: {
      Title: "Sheriff's Deputy",
      Company: "Rhoades Sheriff Station",
      Position: "Deputy",
      Start: "1899",
      End: "1899",
      Location: "Scarlett Meadows, Lemoyne",
      Description:
        "Served as the finest Sheriff's Deputy in Rhoades, where the biggest crime was usually someone stealing a pie from Ma Higgins' windowsill. Managed to keep the peace despite occasional chaos caused by overzealous chickens. ;;Mastered the art of wrangling unruly tumbleweeds and engaged in epic showdowns with the notorious 'Dreadful Duo'—a pair of mischievous raccoons causing mayhem in the town. ;;Survived countless debates with the local barber on whether mustaches bring true authority to law enforcement. Spoiler alert: they do. ;;Honored with the prestigious 'Chicken Wrangler of the Month' award for exceptional service in maintaining order in the poultry underworld. Even managed to outwit a gang of cunning ducks in a daring riverbank standoff.;;Ensured that Lemoyne's criminal underworld was no match for my quick draw, sharp wit, and unbeatable charm.",
    },
    key: v4(),
  },
  experience2: {
    fields: {
      Title: "Bounty Hunter",
      Company: "Various Agencies",
      Position: "Bounty Hunter",
      Start: "1887",
      End: "1899",
      Location: "Wild West",
      Description:
        "Embarked on a storied career as a Bounty Hunter under the employ of various agencies in the Wild West. Became a feared and respected figure, tracking down notorious outlaws with an unwavering determination.;;Faced challenges ranging from the cunning Del Lobo gang to the ruthless Skinner Brothers. Developed a reputation for bringing in bounties alive, showcasing a rare blend of sharpshooting prowess and negotiation skills.;;Mastered the art of tracking through diverse terrains, from the swamps of Lemoyne to the snowy peaks of the Grizzlies. Survived close encounters with legendary beasts, rival bounty hunters, and the constant threat of the law.;;Forged lasting bonds with fellow hunters like Sadie Adler and Charles Smith, creating a formidable team that struck fear into the hearts of criminals. The tale of Arthur Morgan's bounty hunting exploits became legendary in the annals of the Wild West.",
    },
    key: v4(),
  },
};
