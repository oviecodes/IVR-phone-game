const mongoose = require("mongoose");

const responseSchema = new mongoose.Schema({
  adventure_id: Number,

  adventure: String,

  phone: String,

  completed: {
    type: Boolean,
    default: false,
  },

  gameOver: {
    type: Boolean,
    default: false,
  },

  arc: String,
});

responseSchema.statics.advanceAdventure = async function (args, cb) {
  const { input, phone, adventures } = args;

  //  make sure an input is present
  if (!input) {
    return cb.call(adventures, null, null, null);
  }

  let currentAdventure;

  currentAdventure = await this.findOne({
    phone,
    completed: false,
  });

  console.log(currentAdventure);
  //select an adventure that corresponds with input
  if (currentAdventure == null && input) {
    //insert selected adventure into db
    currentAdventure = new Response({
      phone,
      adventure: adventures[input - 1].adventure,
      adventure_id: input - 1,
    });

    currentAdventure.save();
    return cb.call(adventures[input - 1], null, adventures[input - 1], null);
  }

  await processInput();

  async function processInput() {
    let arc = currentAdventure.arc;

    let selectedAdventure = adventures[currentAdventure.adventure_id];

    function reask() {
      cb.call(selectedAdventure, null, selectedAdventure, arc);
    }

    if (!input) return reask();

    let currentArc;

    const num = Number(input);

    if (isNaN(num) || num > 2 || num == 0) {
      return reask();
    } else {
      //if arc is null then it's the first which is intro else it retains its value
      const temp = arc == null ? "intro" : arc;

      currentArc = selectedAdventure[temp].options[num - 1].arc;
      currentAdventure.arc = currentArc;
    }

    //check if it's the final arc
    if (selectedAdventure[currentArc].options.length === 0)
      currentAdventure.completed = true;

    console.log("finally", currentAdventure);

    //save response
    currentAdventure.save();

    cb.call(selectedAdventure, null, selectedAdventure, currentArc);
  }
};

delete mongoose.models.Response;
const Response = mongoose.model("response", responseSchema);
module.exports = Response;
