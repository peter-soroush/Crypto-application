const convertData = (data, type) => {
  const convertedData = data[type].map((item) => {
    const dateObj = new Date(item[0]);

    // Get weekday name (e.g., Mon, Tue, etc.)
    const weekday = dateObj.toLocaleString("en-US", { weekday: "short" });

    // Format hours and minutes with leading zeros
    const hours = String(dateObj.getHours()).padStart(2, "0");
    const minutes = String(dateObj.getMinutes()).padStart(2, "0");

    const formattedDate = `${weekday} : ${hours}:${minutes}`;

    // Format numeric value using toLocaleString

    return { date: formattedDate, [type]: item[1] };
  });

  return convertedData;
};

export { convertData };
