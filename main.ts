/**
 * makecode ATP3012 AquesTalk pico Package.
 */

/**
 * ATP3012 block
 */
//% weight=10 color=#800000 icon="\u260e" block="atp3012"
namespace atp3012 {
    let I2C_ADDR = 0x2e
    /**
      * test atp3012
      */
    //% blockId=test_atp3012 block="test atp3012"
    export function isAvalable(): boolean {
        if (testi2c.testReadI2c(I2C_ADDR)==0){
            return true;
        } else {
            return false;
        }
    }
    /**
     * write Data
     * @param d data to atp3012, eg: "bo'kuwa maikurobittodesu."
     */
    //% blockId="wrietData" block="write data %dat to atp3012"
    //% weight=70 blockGap=8
    export function write(d: string): void {
        let buf = pins.createBuffer(d.length + 1);
        for (let i = 0; i < d.length; i++) {
            buf[i] = d.charCodeAt(i)
        }
        buf[d.length] = 0x0d
        pins.i2cWriteBuffer(I2C_ADDR, buf)
    }
    /**
     * read Data
     */
    //% blockId="readData" block="read atp3012"
    //% weight=68 blockGap=8
    export function read(): string {
        let buff
        let buf = pins.i2cReadBuffer(I2C_ADDR, 10);
        buff = ""
        for (let i = 0; i < buf.length; i++) {
            buff = buff + String.fromCharCode(buf[i])
        }
        return buff
    }
}
