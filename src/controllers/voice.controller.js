const createError = require("http-errors");
const voice = require("../services/voice.service");
const VoiceResponse = require("twilio").twiml.VoiceResponse;

class VoiceController {
  static interview = async (req, res, next) => {
    const twiml = new VoiceResponse();
    const phone = req.body.From;
    const input = req.body.Digits;

    try {
      await voice.interview(twiml, input, phone);

      return voice.respond(twiml, res);
    } catch (e) {
      return next(createError(e.statusCode, e.message));
    }
  };

  static migrate = async (req, res, next) => {
    try {
      const data = await voice.migrateAdventures();

      return res.status(200).json({
        status: true,
        message: "migration successful",
        data,
      });
    } catch (e) {
      return next(createError(e.statusCode, e.message));
    }
  };
}

module.exports = VoiceController;
