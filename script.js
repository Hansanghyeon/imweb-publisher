class Modal {
  constructor(target) {
    this.show = false;
    this.target = document.querySelector(target);
    this.targetDataset = this.target.dataset;
    this.bg = this.bg();
    this.bg.addEventListener("click", this.close.bind(this));
  }

  bg() {
    var bg = document.createElement("div");
    bg.setAttribute("class", "bgMask");
    return bg;
  }

  open() {
    this.show = true;
    var $body = document.body;
    $body.appendChild(this.bg);
    $body.classList.add("body-scroll-lock");
    if (!this.targetDataset.show) {
      this.target.setAttribute("data-show", "true");
    }
    if (this.targetDataset.show === "false") {
      this.target.setAttribute("data-show", "true");
    }
  }

  close() {
    this.show = false;
    this.bg.remove();
    var $body = document.body;
    $body.classList.remove("body-scroll-lock");
    if (this.targetDataset.show) {
      this.target.setAttribute("data-show", "false");
    }
  }

  toggle() {
    if (this.show) {
      this.close();
    } else {
      this.open();
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  (function () {
    var menuBtn = document.querySelector("#menuCoverBtn");
    if (menuBtn) {
      menuBtn.addEventListener("click", function () {
        var modal = new Modal("#headerCover");
        modal.toggle();
      });
    }
  })();
});
