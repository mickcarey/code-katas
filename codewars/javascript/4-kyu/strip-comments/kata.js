const stripComments = (input, markers) => {
    return input.split('\n').map(line => {
        for (let marker of markers) {
            if (line.indexOf(marker) >= 0) {
                line = line.slice(0, line.indexOf(marker));
            }
        }

        return line.trim();
    }).join('\n');
};