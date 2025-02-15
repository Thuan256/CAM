const members = [
  "Huỳnh Minh Thuận",
  "Phí Đình Gia Hưng",
  "Nguyễn Thế Lộc",
  "Ngô Thu Giang",
  "Nguyễn Thị Hiền",
  "Phạm Thanh Hiền",
  "Bùi Ngân Thương",
  "Quàng Quốc Việt",
  "Cao Quang Sơn",
  "Đỗ Mạnh Hùng",
  "Nguyễn Tiến Hoạt",
  "Nguyễn Đăng Khoa",
];

const typed = new Typed("#typed", {
  strings: [
    "Xin chào ! ^1000 Chúng mình đến từ nhóm <span class='orange' onclick=\"showNameCard()\">Cam</span>",
  ],
  typeSpeed: 50,
  backSpeed: 50,
  backDelay: 1000,
  startDelay: 1000,
  showCursor: true,
  cursorChar: "_",
  loop: false,
  contentType: "html",
  onComplete: function () {
    document.getElementById("sidebar").style.left = "-15px";
    document.getElementById("sidebar-title-outline").style.opacity = "1";
    document.getElementById("welcome-text").style.marginLeft = "200px";

    setTimeout(() => {
      const ul = document.getElementById("member-list");

      members.forEach((member, i) => {
        const li = document.createElement("li");

        li.appendChild(document.createTextNode(member));

        li.style.opacity = "0";
        ul.appendChild(li);

        setTimeout(() => {
          li.style.opacity = "1";
        }, 200 * i);
      });
    }, 1000);
  },
});

function showNameCard() {
  document.querySelector(".profile-card").classList.toggle("active");
}
    