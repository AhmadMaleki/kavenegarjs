const axios = require("axios");

const init = ({ apikey }) => {
  const request = axios.create({
    baseURL: `https://api.kavenegar.com/v1/${apikey}`,
    method: "POST",
  });

  const api = {};

  api.Send = (params) => {
    return request({
      url: "/sms/send.json",
      params,
    });
  };

  api.SendArray = (params) => {
    return request({
      url: "/sms/sendarray.json",
      params,
    });
  };

  api.Status = (params) => {
    return request({
      url: "/sms/status.json",
      params,
    });
  };

  api.StatusLocalMessageid = (params) => {
    return request({
      url: "/sms/statuslocalmessageid.json",
      params,
    });
  };

  api.Select = (params) => {
    return request({
      url: "/sms/select.json",
      params,
    });
  };

  api.SelectOutbox = (params) => {
    return request({
      url: "/sms/selectoutbox.json",
      params,
    });
  };

  api.LatestOutbox = (params) => {
    return request({
      url: "/sms/latestoutbox.json",
      params,
    });
  };

  api.CountOutbox = (params) => {
    return request({
      url: "/sms/countoutbox.json",
      params,
    });
  };

  api.Cancel = (params) => {
    return request({
      url: "/sms/cancel.json",
      params,
    });
  };

  api.Receive = (params) => {
    return request({
      url: "/sms/receive.json",
      params,
    });
  };

  api.CountInbox = (params) => {
    return request({
      url: "/sms/countinbox.json",
      params,
    });
  };

  api.CountPostalCode = (params) => {
    return request({
      url: "/sms/countpostalcode.json",
      params,
    });
  };

  api.SendByPostalCode = (params) => {
    return request({
      url: "/sms/sendbypostalcode.json",
      params,
    });
  };

  api.VerifyLookup = (params) => {
    return request({
      url: "/verify/lookup.json",
      params,
    });
  };

  api.AccountInfo = (params) => {
    return request({
      url: "/account/info.json",
      params,
    });
  };

  api.AccountConfig = (params) => {
    return request({
      url: "/account/config.json",
      params,
    });
  };

  api.CallMakeTTS = (params) => {
    return request({
      url: "/call/maketts.json",
      params,
    });
  };

  return api;
};

module.exports = {
  init,
};
