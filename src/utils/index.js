import moment from "moment";

const parseGenesisDate = (dateStr) => {
  const dateMoment = moment(dateStr, "YYYY-MM-DD");

  if (dateMoment.isValid()) {
    return dateMoment.format("Do MMMM YYYY");
  }

  return "NA";
};

export { parseGenesisDate };
