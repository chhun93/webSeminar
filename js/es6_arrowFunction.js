const thisTest1 = {
  name: "chhun",
  age: 29,
  info: function () {
    console.log(this);
    console.log(this.name, this.age);

    function innerInfo() {
      console.log(this);
      return this.name + ":" + this.age;
    }
    return innerInfo();
  },
};

const thisTest2 = {
  name: "chhun",
  age: 29,
  info: function () {
    console.log(this);
    console.log(this.name, this.age);
    var self = this;
    function innerInfo() {
      console.log(self);
      return self.name + ":" + self.age;
    }
    return innerInfo();
  },
};

const thisTest3 = {
  name: "chhun",
  age: 29,
  info: function () {
    console.log(this);
    console.log(this.name, this.age);

    innerInfo = () => {
      console.log(this);
      return this.name + ":" + this.age;
    };
    return innerInfo();
  },
};

const thisTest4 = {
  name: "chhun",
  age: 29,
  info: () => {
    console.log(this);
    console.log(this.name, this.age);

    innerInfo = () => {
      console.log(this);
      return this.name + ":" + this.age;
    };
    return innerInfo();
  },
};

const thisTest5 = {
  name: "chhun",
  age: 29,
  info: () => {
    console.log(this);
    console.log(this.name, this.age);

    function innerInfo() {
      console.log(this);
      return this.name + ":" + this.age;
    }
    return innerInfo();
  },
};

function arrowTest1(xx = "test") {
  console.log(xx);
}

const arrowTest2 = (xx2 = "test") => {
  console.log(xx2);
};

const arrowFunc = (parameter) => {
  console.log(parameter + parameter);
};

