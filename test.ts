atp3012.write("bo'kuwa maikurobittodesu.")
let buf;
basic.forever(function () {
    buf = atp3012.read();
    if(buf=="") basic.showIcon(IconNames.Heart);
    else basic.showString(buf);
    basic.pause(100)
})
