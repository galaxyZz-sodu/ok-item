class Dep {
    depArr = new Array();

    addArr(sub) {
        this.depArr.push(sub);
    }
};

function haha() {
    const dep = new Dep();

    const xixi = 123;
    console.log(this);
    // dep.addArr(this);

    // console.log(dep.depArr[0].xixi);

}

const obj23 = {
    pp: 43
}

haha.call(obj23)