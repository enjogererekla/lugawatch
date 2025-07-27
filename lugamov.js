console.log("Welcome to Luga Watch");
let eyes = true;
function __markPost() {
    if(!eyes){
        return
    }
    if (typeof str === 'undefined') {
      console.error("Video URL not found.");
      return;
    }
  
    const runkDiv = document.getElementById("runk");
    if (!runkDiv) return;
  
    runkDiv.innerHTML = `
      <p style="font-family: Poppins; font-size: medium; text-align: center;">
        <b style="font-family: Poppins;">MOVIE</b>
      </p>
      <div style="background-color: grey; height: 264px; margin: 5px auto; max-width: 100%; text-align: center; width: 540px;">
        <video class="video-js vjs-theme-fantasy" controls
            data-setup='{"playbackRates": [0.25, 0.5, 1, 1.5, 2]}' height="264"
            id="my-video" poster="MY_VIDEO_POSTER.jpg" preload="none" style="max-width: 100%;" width="540">
          <source src="${str}" type="video/mp4" />
          <p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a
            <a href="https://videojs.com/html5-video-support/" target="_blank">modern browser</a>.
          </p>
        </video>
      </div>
  
      <div style="margin: 0px auto; text-align: center; width: 60%;">
        <a download href="${str}" onclick="linkClicked?.(event)"
          onmouseout="this.style.backgroundColor='#333'"
          onmouseover="this.style.backgroundColor='#555'"
          style="align-items: center; background-color: #333333; border-radius: 5px; color: white; display: inline-flex; font-size: 16px; justify-content: center; padding: 15px 20px; text-decoration: none; transition: background-color 0.3s ease 0s; width: 80%;">
          <span style="font-family: Poppins; margin-right: 10px;">⬇️</span>
          <span style="font-family: Poppins;"> DOWNLOAD </span>
        </a>
      </div>
    `;
  }
  
