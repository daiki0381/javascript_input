const a = {
    prop: 0
}

let { prop } = a;

prop = 1;

console.log(a, prop);

function fn({ prop }) {
    prop = 1;
    console.log(a, prop);
}

fn(a);

const c = {
    prop1: {
        prop2: 0
    }
}

let { prop1 } = c;

prop1.prop2 = 1;

console.log(c, prop1);