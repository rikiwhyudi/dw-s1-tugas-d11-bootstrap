const dataBlog = [];

function addBlog(event) {
  event.preventDefault();

  let title = document.getElementById("input-title").value;
  let content = document.getElementById("input-content").value;
  let startProject = document.getElementById("input-start").value;
  let endProject = document.getElementById("input-end").value;
  let image = document.getElementById("input-image");

  let difference =
    new Date(startProject).getTime() - new Date(endProject).getTime();
  let differenceDays = Math.abs(difference / (1000 * 3600 * 24));

  //   membuat url gambar untuk di tampilkan
  image = URL.createObjectURL(image.files[0]);

  const blog = {
    title,
    content,
    image,
    postAt: new Date(),
    differenceDays,
    author: "Riki Wahyudi",
  };

  dataBlog.push(blog);
  renderBlog();
}

function renderBlog() {
  document.getElementById("contents").innerHTML = "";

  // for (let i = 0; i < dataBlog.length; i++) {
  for (const i in dataBlog) {
    document.getElementById("contents").innerHTML += `

    <div class="blog-list-item">
            <div class="blog-image">
              <img src="${dataBlog[i].image}" />
            </div>
            <div class="blog-info">
              <h4>
                <a href="blog-detail.html" target="_blank">${
                  dataBlog[i].title
                }</a>
              </h4>
              <div class="detail-blog-duration">
                <p>Duration: ${dataBlog[i].differenceDays} Days</p>
              </div>
              <div class="blog-content">
                <p>
                ${dataBlog[i].content}
                </p>
              </div>
              <div class="download-apps">
                <a href="#">
                  <i class="fa-brands fa-google-play fa-md"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-android fa-md"></i>
                </a>
                <a href="#">
                  <i class="fa-brands fa-java fa-md"></i>
                </a>
              </div>
            </div>
            <div>
              <p style="font-size: 10px">${getDistanceTime(
                dataBlog[i].postAt
              )}</p>
              <p style="font-size: 12px">
              ${getFullTime(dataBlog[i].postAt)} ~ ${dataBlog[i].author}
              </p>
            </div>
            <div class="btn-group">
              <button class="btn-edit">edit</button>
              <button class="btn-delete">delete</button>
            </div>
          </div>
    `;
  }
}

function getFullTime(time) {
  const monthName = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  let date = time.getDate();
  // console.log(date);

  let monthIndex = time.getMonth();
  // console.log(monthIndex);

  let year = time.getFullYear();
  // console.log(year);

  let hours = time.getHours();
  let minutes = time.getMinutes();

  if (hours <= 9) {
    hours = "0" + hours;
  } else if (minutes <= 9) {
    minutes = "0" + minutes;
  }
  return `${date} ${monthName[monthIndex]} ${year} ${hours}:${minutes} WIB`;
}

function getDistanceTime(time) {
  let timeNow = new Date();
  let timePost = time;

  let distance = timeNow - timePost;
  // console.log(distance);

  let milisecond = 1000; // 1milisecond = 1detik
  let secondInHour = 3600; // 1 jam 3600 detik
  let hoursInDay = 24; // 1hari = 24 jam

  let distanceDay = Math.floor(
    distance / (milisecond * secondInHour * hoursInDay)
  );
  let distanceHours = Math.floor(distance / (milisecond * 60 * 60));
  let distanceMinutes = Math.floor(distance / (milisecond * 60));
  let distanceSecond = Math.floor(distance / milisecond);

  if (distanceDay > 0) {
    return `${distanceDay} day ago`;
  } else if (distanceHours > 0) {
    return `${distanceHours} haour(s) ago`;
  } else if (distanceMinutes > 0) {
    return `${distanceMinutes} minute(s) ago`;
  } else {
    return `${distanceSecond} second(s) ago`;
  }
}

setInterval(function () {
  renderBlog();
}, 5000);
