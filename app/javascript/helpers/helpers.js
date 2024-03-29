// app/javascript/helpers/helpers.js
export const isEmptyObject = (obj) => Object.keys(obj).length === 0;

export const validateEvent = (event) => {
  const errors = {};

  if (event.event_type === "") {
    errors.event_type = "イベントのタイプを入力してください";
  }

  if (event.event_date === "") {
    errors.event_date = "日付を入力してください";
  }

  if (event.title === "") {
    errors.title = "You must enter a title";
  }

  if (event.speaker === "") {
    errors.speaker = "You must enter at least one speaker";
  }

  if (event.host === "") {
    errors.host = "You must enter at least one host";
  }

  return errors;
};

export const formatDate = (d) => {
  const YYYY = d.getFullYear();
  const MM = `0${d.getMonth() + 1}`.slice(-2);
  const DD = `0${d.getDate()}`.slice(-2);

  return `${YYYY}-${MM}-${DD}`;
};
