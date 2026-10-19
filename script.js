// QUICK CUSTOMIZATION: change the links below to your real profiles/store.
const SETTINGS = {
  dayNumber: 1,
  tiktokUrl: "https://www.tiktok.com/@nerosurvives",
  youtubeUrl: "https://www.youtube.com/@NeroSurvives-yt",
  instagramUrl: "#",
  shopUrl: "#"
};
document.getElementById("day-number").textContent = `DAY ${SETTINGS.dayNumber}`;
document.getElementById("year").textContent = new Date().getFullYear();
const socialLinks = document.querySelectorAll(".socials a");
if (socialLinks[0]) socialLinks[0].href = SETTINGS.tiktokUrl;
if (socialLinks[1]) socialLinks[1].href = SETTINGS.youtubeUrl;
if (socialLinks[2]) socialLinks[2].href = SETTINGS.instagramUrl;
document.getElementById("youtube-link").href = SETTINGS.youtubeUrl;
document.getElementById("shop-link").href = SETTINGS.shopUrl;
