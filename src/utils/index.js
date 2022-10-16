import moment from "moment";

const parseGenesisDate = (dateStr) => {
  const dateMoment = moment(dateStr, "YYYY-MM-DD");
  return dateMoment.format("Do MMMM YYYY");
};

export { parseGenesisDate };
