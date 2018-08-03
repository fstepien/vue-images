import qs from "qs";

const CLIENT_ID = "4a85481aa3b74a6";
const ROOT_URL = "https//api.imgur.com";

export default {
  login() {
    const queryString = {
      client_id: CLIENT_ID,
      response_type: "token"
    };
    window.location = `${ROOT_URL}/oauth2/athorize?${qs.stringify(
      queryString
    )}`;
  }
};