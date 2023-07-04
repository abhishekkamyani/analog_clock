setInterval(() => {
    const date = new Date();
    const htime = date.getHours();
    const mtime = date.getMinutes();
    const stime = date.getSeconds();
    const mstime = date.getMilliseconds();

    const hrotation = 30 * htime + mtime / 2;
    const mrotation = 6 * mtime;
    const srotation = 6 * stime + 3*mstime / 500;

    hour.style.transform = `rotate(${hrotation}deg)`;
    min.style.transform = `rotate(${mrotation}deg)`;
    sec.style.transform = `rotate(${srotation}deg)`;
}, 1);