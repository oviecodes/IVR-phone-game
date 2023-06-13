const Response = require("../model/response.model");
// const Adventure = require("../model/adventure.model");
// const survey_questions = require("../survey_questions");
const adventures = require("../adventures");

class VoiceService {
  static async interview(twiml, input, phone) {
    function say(text) {
      twiml.say({ voice: "alice" }, text);
    }

    console.log(input, phone);

    // const adventures = await Adventure.find({});

    await Response.advanceAdventure(
      {
        input,
        phone,
        adventures,
      },
      function (err, adventure, arc) {
        if (err) {
          say("Sorry an error occurred, please try again later");
          return;
        }

        //feature - select adventure
        if (!adventure) {
          say(
            "Please enter an input from 1-9, to get started with an adventure"
          );

          twiml.gather({
            timeout: 10,
            numDigits: 1,
          });

          return;
        }

        if (arc && adventure[arc].options.length === 0) {
          say("This is the end of your adventure");
          return;
        }

        //if there isn't an arc then it's the first story therefore ask the introductory story question

        const [title, story, options] =
          arc == null
            ? [
                adventure["intro"].title,
                adventure["intro"].story,
                adventure["intro"].options,
              ]
            : [
                adventure[arc].title,
                adventure[arc].story,
                adventure[arc].options,
              ];

        if (arc == null) {
          say(`Your selected adventure is ${adventure.adventure}`);
          say(
            "Press 1 for the first option, Press 2 for the second and so on..."
          );
        }

        say(`${title} - ${story}`);

        //read out the options
        options.map(async (option, i) => {
          say(`option ${i + 1}, ${option.text}`);
        });

        twiml.gather({
          timeout: 10,
          numDigits: 1,
        });

        return;
      }
    );
    return;
  }

  static respond(twiml, res) {
    res.type("text/xml");
    res.send(twiml.toString());
  }

  //   static async migrateAdventures() {
  //     console.log("migrating adventures");
  //     // return Adventure.insertMany({ adventure: adventures });
  //     return Adventure.create({ adventure: adventures[0] });
  //   }
}

module.exports = VoiceService;
