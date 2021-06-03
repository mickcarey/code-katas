const solution = list => {
    let output = '';
    let spanCount = 0;

    for (let i = 0; i < list.length; i++) {
        if (i === 0) {
            output += list[i];
            continue;
        }

        let currVal = list[i];
        let prevVal = list[i-1];

        if (prevVal + 1 === currVal) {
            spanCount++;

            if (i === list.length - 1) {
                if (spanCount > 1) {
                    output += `-${currVal}`;
                } else {
                    output += `,${currVal}`;
                }
            }
        } else {
            if (spanCount > 1) {
                output += `-${prevVal},${currVal}`;
            } else if (spanCount === 1) {
                output += `,${prevVal},${currVal}`;
            } else {
                output += `,${currVal}`;
            }

            spanCount = 0;
        }
    }

    return output;
}