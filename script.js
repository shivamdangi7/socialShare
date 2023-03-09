function toggle() {
  const x = document.getElementById("buttons");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

//This doesn't seem to work with class Why??

/*
https://www.linkedin.com/shareArticle?url=[post-url]&title=[post-title]

https://twitter.com/share?url=[post-url]&text=[post-title]&via=[via]&hashtags=[hashtags]

https://api.whatsapp.com/send?text=[post-title] [post-url]

https://www.facebook.com/sharer.php?u=[post-url]
*/
let postUrl = encodeURI(document.location.href);
let postMsg = encodeURIComponent("Hi EveryOne, Please Check this Out");
let postTitle = encodeURIComponent(document.querySelector("title").textContent);

const linkedinBtn = document.querySelector(".linkedin");
const twitterBtn = document.querySelector(".twitter");
const whatsappBtn = document.querySelector(".whatsapp");
const facebookBtn = document.querySelector(".facebook");

linkedinBtn.setAttribute(
  "href",
  `https://www.linkedin.com/shareArticle?url=${postUrl}&title=${postTitle}`
);
twitterBtn.setAttribute(
  "href",
  `https://twitter.com/share?url=${postUrl}&text=${postTitle}`
);
whatsappBtn.setAttribute(
  "href",
  `https://api.whatsapp.com/send?text=${postTitle}%20${postUrl}`
);
facebookBtn.setAttribute(
  "href",
  `https://www.facebook.com/sharer.php?u=${postUrl}`
);

// These only works with anchor tags i don't know why??
