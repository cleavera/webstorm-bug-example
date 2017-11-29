process.stdout.write("\033[s");
let x = 0;
setInterval(() => {
    process.stdout.write('\033[1K\033[uLine' + (++x));

    if (x >= 10) {
        process.exit(0);
    }
}, 500);