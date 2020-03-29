class Rectangle {
  setWidth(width) {
    this.width = width;
  }
  setHeight(height) {
    this.height = height;
  }
}
class Square extends Rectangle {
  setWidth(width) {
    this.width = width;
  }
  setHeight(height) {
    this.height = height;
  }
}

rec = new Square();
rec.setWidth(10);
rec.setHeight(5);
