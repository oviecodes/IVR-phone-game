// Hard coded survey questions
module.exports = [
  {
    adventure: "First Adventure",
    intro: {
      title: "The great adventure",
      story: [
        "Once upon a time, long long ago, there was a little blue bird. Our little blue friend wanted to go on an adventure, but he wasn't sure where to go. Will you go on an adventure with him?",
      ],
      options: [
        {
          text: "Let's head to New York.",
          arc: "new-york",
        },
        {
          text: "try our luck in Denver.",
          arc: "denver",
        },
      ],
    },
    "new-york": {
      title: "Visiting New York",
      story: [
        'Upon arriving in New York you and your furry travel buddy first attempt to hail a cab. Unfortunately nobody wants to give a ride to someone with a "pet". They kept saying something about shedding, as if gophers shed.',
      ],
      options: [
        {
          text: "Let's bail and head back home.",
          arc: "home",
        },
        {
          text: "Grab a a seat and see what happens.",
          arc: "debate",
        },
      ],
    },
    debate: {
      title: "The Great Debate",
      story: [
        "After a bit everyone settles down the two people on stage begin having a debate. You don't recall too many specifics, but for some reason you have a feeling you are supposed to pick sides.",
      ],
      options: [
        {
          text: "Clearly that man in the fox outfit was the winner.",
          arc: "sean-kelly",
        },
        {
          text: "I don't think those fake abs would help much in a feat of strength, but our caped friend clearly won this bout. Let's go congratulate him.",
          arc: "mark-bates",
        },
        {
          text: "Slip out the back before anyone asks us to pick a side.",
          arc: "home",
        },
      ],
    },
    "sean-kelly": {
      title: "Exit Stage Left",
      story: [
        "As you begin walking up to the fox-man you hear him introduce himself as Sean Kelly. While waiting in line you decide to do a little research to see what types of work Sean is into.",
      ],
      options: [
        {
          text: "You change your flight to leave early and head to the airport in the morning.",
          arc: "home",
        },
      ],
    },
    "mark-bates": {
      title: "Costume Time",
      story: [
        "After talking with the wannabe superhero for a while you come to learn that his name is Mark Bates, and aside from his costume obsession he seems like a nice enough guy.",
      ],
      options: [
        {
          text: "Pack your bags and head to bed. We have a long flight in the morning.",
          arc: "home",
        },
      ],
    },
    denver: {
      title: "Hockey and Ski Slopes",
      story: [
        'You arrive in Denver and start your trip by attending a hockey game. The Avalanche had a rough season last year, but your gopher buddy is hopeful that they will do better this year. He also explains that he is tired of hearing about "Two time Stanley Cup champion Phil Kessel." You suspect that he is still a little salty about the Penguins beating the San Jose Sharks in the Stanley Cup, but you decide to give him a break.',
      ],
      options: [
        {
          text: "Pack your bags and head to bed. We have a long flight in the morning.",
          arc: "home",
        },
      ],
    },
    home: {
      title: "Home Sweet Home",
      story: [
        "Your little gopher buddy thanks you for taking him on an adventure. Perhaps next year you can look into travelling abroad - you have both heard that gophers are all the rage in China.",
      ],
      options: [],
    },
  },
];
