require("dotenv").config();
const twilio = require("twilio");
const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

const client = twilio(accountSid, authToken);

module.exports = sendMessage = (msg) => {
  client.messages
    .create({
      body: `${msg}`,
      from: "+12513510296",
      to: "+358449323786",
    })
    .then((message) => console.log(message.sid))
    .catch((err) => console.log(err));
};
