class Shape {
  setWidth(width) {
    this.width = width;
  }
  setHeight(height) {
    this.height = height;
  }
}
class Rectangle extends Shape {
  setWidth(width) {
    this.width = width;
  }
  setHeight(height) {
    this.height = height;
  }
}
class Square extends Shape {
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
