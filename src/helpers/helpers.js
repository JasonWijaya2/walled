const formatNumber = (val, decimalPlace = 2) => {
  const numericValue = Number(val);
  if (isNaN(numericValue)) return val;

  const roundedVal = Number(numericValue.toFixed(decimalPlace));
  const formattedVal = roundedVal.toLocaleString(undefined, {
    minimumFractionDigits: decimalPlace,
    maximumFractionDigits: decimalPlace,
  });

  return formattedVal;
};

const formatDatetime = (dateTime, type = "datetime") => {
  const newDate = new Date(dateTime);
  const year = newDate.getFullYear();
  const month = newDate
    .toLocaleString("default", { month: "short" })
    .toUpperCase();
  const day = newDate.getDate().toString().padStart(2, "0");

  if (type === "date") return `${year}-${month}-${day}`;

  // const hours = newDate.getHours().toString().padStart(2, "0");
  // const minutes = newDate.getMinutes().toString().padStart(2, "0");
  // const seconds = newDate.getSeconds().toString().padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

const strDate2UtcDate = (datetime) => {
  const date = new Date(datetime);
  const tzOffset = date.getTimezoneOffset();
  const utcDate = new Date(date.getTime() + tzOffset * 60 * 1000);

  return utcDate;
};

const str2DatetimeInput = (datetime, type = "datetime") => {
  const date = new Date(datetime);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  let formattedDate = `${year}-${month}-${day}`;
  if (type === "datetime") formattedDate += `T${hours}:${minutes}`;
  return formattedDate;
};

const isCurrentVerifier = (VerifierList, user) => {
  const VerifierIndex = VerifierList.findIndex(
    (al) => al.username === user.username
  );

  if (VerifierIndex === -1) return false;
  else if (VerifierIndex === 0) {
    const apprData = VerifierList[VerifierIndex];
    if (apprData && apprData.status === "none") {
      return true;
    } else return false;
  } else if (VerifierIndex > 0) {
    const apprData = VerifierList[VerifierIndex];
    const prevApprData = VerifierList[VerifierIndex - 1];

    if (
      prevApprData &&
      apprData &&
      (prevApprData.status === "Verified" ||
        prevApprData.status === "verified") &&
      apprData.status === "none"
    ) {
      return true;
    } else return false;
  } else return false;
};

export default {
  formatNumber,
  formatDatetime,
  strDate2UtcDate,
  str2DatetimeInput,
  isCurrentVerifier,
};
