let str = '{({(])})}';

function kuohao(str) {
    let map = new Map(
        [
            [')', '('],
            ['}', '{'],
            [']', '[']
        ]
    );

    let stack = [];
    for (let item of str) {
        if (map.has(item)) {
            if (stack[stack.length - 1] === map.get(item)) {
                stack.pop();
            } else {
                return false;
            }
        } else {
            stack.push(item);
        }

    }
    return stack.length ? false : true;

}

console.log(kuohao(str));
