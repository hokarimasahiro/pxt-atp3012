/**
 * makecode ATP3012 AquesTalk pico Package.
 */

/**
 * ATP3012 block
 */
//% weight=10 color=#800000 icon="\u1f508" block="atp3012"
namespace atp3012 {
    let I2C_ADDR = 0x2e
    /**
     * write Data
     * @param d data to atp3012, eg: "bo'kuwa maikurobittodesu."
     */
    //% blockId="wrietData" block="write atp3012 to %dat"
    //% weight=70 blockGap=8
    export function write(d: string): void {
        let buf = pins.createBuffer(d.length);
        for (let i = 0; i < d.length; i++) {
            buf[i] = d.charCodeAt(i)
        }
        pins.i2cWriteBuffer(I2C_ADDR, buf)
    }
}
