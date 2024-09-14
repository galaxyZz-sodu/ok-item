class sigle {

    haha = 3;

    xixi = 4;

    constructor() {
        if (!sigle.instance) {
            sigle.instance = this;
        }
        return sigle.instance;
    }

    createInstance() {
        const object = {
            name: 'example'
        }
        return object
    }

    getInstance() {
        // console.log(sigle.instance, 'de');
        if (!sigle.instance) {
            sigle.instance = this.createInstance();
          }
          console.log(sigle.instance);
          return sigle.instance;
    }
}

const in1 = new sigle();
const in2 = new sigle();

in2.haha = 999
console.log(in1 === in2, in1);
