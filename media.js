class Media {
  constructor(file, status, truth, choice, x, y, w, h) {
    this.file = file;
    this.status = status;
    this.truth = truth;
    this.choice = choice;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  get infos() {
    return new Array([file, statuses, x, y, w, h]);
  }

  updateStatus(status) {
    this.status = status;
  }

  updateChoice(choice) {
    this.choice = choice;
  }

  updateX(newX) {
    this.x = newX;
  }

  updateY(newY) {
    this.y = newY;
  }

  updateW(newW) {
    this.w = newW;
  }

  updateH(newH) {
    this.h = newH;
  }

  showMedia() {
    imageParams(this.file, this.x, this.y, this.w, this.h);
    imgsOpct([this.file], "1");
  }
}

class BoardWithMedias {
  constructor(mediasList) {
    this.mediasList = mediasList;
  }

  get infos() {
    return this.mediasList;
  }

  showAll() {
    for (let i = 0; i < this.mediasList.length; ++i) {
      this.mediasList[i].showMedia();
    }
  }
}