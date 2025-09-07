console.log("Welcome to Luga Watch");
let eyes = true;

function __markPost() {
  if (!eyes) return;
  console.log("Lugawatch!");

  const runkDiv = document.getElementById("runk");
  if (!runkDiv) return;

  // If it's a series with episodes
if (typeof serie !== "undefined" && Array.isArray(typeof episodes !== "undefined" ? episodes : []) && episodes.length) {
  episodes.forEach(ep => createEpisodePlayer(ep.watch_from, ep.title, runkDiv));
} else {
  createEpisodePlayer(str, "MOVIE", runkDiv);
}

}

function createEpisodePlayer(src, title, container) {
  // Title
  const titleP = document.createElement("p");
  titleP.style.fontFamily = "Poppins";
  titleP.style.fontSize = "medium";
  titleP.style.textAlign = "center";

  const titleB = document.createElement("b");
  titleB.style.fontFamily = "Poppins";
  titleB.textContent = title;

  titleP.appendChild(titleB);
  container.appendChild(titleP);

  // Video Container
  const videoContainer = document.createElement("div");
  videoContainer.style.backgroundColor = "grey";
  videoContainer.style.height = "264px";
  videoContainer.style.margin = "5px auto";
  videoContainer.style.maxWidth = "100%";
  videoContainer.style.textAlign = "center";
  videoContainer.style.width = "540px";

  const video = document.createElement("video");
  video.className = "video-js vjs-theme-fantasy";
  video.controls = true;
  video.height = 264;
  video.width = 540;
  video.style.maxWidth = "100%";
  video.setAttribute("data-setup", '{"playbackRates":[0.25,0.5,1,1.5,2]}');
  video.setAttribute("poster", "MY_VIDEO_POSTER.jpg");
  video.setAttribute("preload", "none");

  const source = document.createElement("source");
  source.src = src;
  source.type = "video/mp4";

  video.appendChild(source);
  videoContainer.appendChild(video);
  container.appendChild(videoContainer);

  // Download Button
  const linkContainer = document.createElement("div");
  linkContainer.style.margin = "0px auto";
  linkContainer.style.textAlign = "center";
  linkContainer.style.width = "60%";

  const a = document.createElement("a");
  a.href = src;
  a.download = "";
  a.onclick = function (event) {
    if (typeof linkClicked === 'function') linkClicked(event);
  };
  a.onmouseover = function () {
    this.style.backgroundColor = "#555";
  };
  a.onmouseout = function () {
    this.style.backgroundColor = "#333";
  };

  Object.assign(a.style, {
    alignItems: "center",
    backgroundColor: "#333333",
    borderRadius: "5px",
    color: "white",
    display: "inline-flex",
    fontSize: "16px",
    justifyContent: "center",
    padding: "15px 20px",
    textDecoration: "none",
    transition: "background-color 0.3s ease 0s",
    width: "80%",
    fontFamily: "Poppins",
    marginBottom: "30px" // spacing between episodes
  });

  const spanIcon = document.createElement("span");
  spanIcon.textContent = "⬇️";
  spanIcon.style.marginRight = "10px";

  const spanText = document.createElement("span");
  spanText.textContent = "DOWNLOAD";

  a.appendChild(spanIcon);
  a.appendChild(spanText);
  linkContainer.appendChild(a);
  container.appendChild(linkContainer);
}

