import { JSDOM } from "jsdom";

type Rating = {
  rating: number;
  highestRating: number;
  colorCode: string;
  highestColorCode: string;
};

const getColorCode = (rating: string) => {
  const ratingNum = Number(rating);
  if (ratingNum < 400) {
    return "#808080";
  } else if (ratingNum < 800) {
    return "#804000";
  } else if (ratingNum < 1200) {
    return "#008000";
  } else if (ratingNum < 1600) {
    return "#00C0C0";
  } else if (ratingNum < 2000) {
    return "#0000FF";
  } else if (ratingNum < 2400) {
    return "#C0C000";
  } else if (ratingNum < 2800) {
    return "#FF8000";
  } else {
    return "#FF0000";
  }
};

export const getRating = async (): Promise<Rating> => {
  const res = await fetch("https://atcoder.jp/users/hamao?contestType=algo");
  const text = await res.text();
  const dom = new JSDOM(text);
  const document = dom.window.document;
  const table =
    document.querySelectorAll("#user-nav-tabs")[1].nextElementSibling;
  const trs = table.querySelectorAll("tr");
  const rating = trs[1].querySelector("td").querySelector("span").textContent;
  const highestRating = trs[2]
    .querySelector("td")
    .querySelector("span").textContent;
  return {
    rating: Number(rating),
    highestRating: Number(highestRating),
    colorCode: getColorCode(rating),
    highestColorCode: getColorCode(highestRating),
  };
};
