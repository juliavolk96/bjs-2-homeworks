function parseCount(total) {
  
  if (isNaN(Number.parseFloat(total))) {
    throw new Error("Невалидное значение");
  } else {
    return Number.parseFloat(total);
  }
}

function validateCount(total) {
  try {
    return parseCount(total);
  } catch (Error) {
    return Error;
  }
}

class MyError extends Error {
  constructor(message) {
    super(message)
    this._area = 'Ошибка! Треугольник не существует';
    this._perimeter = 'Ошибка! Треугольник не существует';
  }

  get area(){
    return this._area;
  }

  get perimeter() {
    return this._perimeter;
  }
}

class Triangle {
  constructor(a, b, c) {
    if ((a + b) < c || (a + c) < b || (b + c) < a) {
      throw new MyError("Треугольник с такими сторонами не существует");
    }
    this.a = a;
    this.b = b;
    this.c = c;
  }
  get perimeter() {
    return this.a + this.b + this.c;
  }
  get area() {
    let p = this.perimeter / 2;
    return +Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3);
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch (error) {
    return error
  }
}