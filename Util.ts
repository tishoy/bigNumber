
module Util {

    export const TOTAL_STAGES = 30;
    export function factor(): number {
        return egret.MainContext.instance.stage.stageWidth / 640;
    }
    export function x_fix(): number {
        return (egret.MainContext.instance.stage.stageWidth - 640) / 2;
    }
    export function y_fix(): number {
        return (egret.MainContext.instance.stage.stageHeight - 1080) / 2;
    }

    export function gameStage(): egret.Stage {
        return egret.MainContext.instance.stage;
    }

    //当前游戏宽度
    export function curWidth(): number {
        return egret.MainContext.instance.stage.stageWidth;
    }

    //当前游戏宽度
    export function curHeight(): number {
        return egret.MainContext.instance.stage.stageHeight;
    }

    export function displayWidth(): number {
        return 640
    }

    export function displayHeight(): number {
        return 1080;
    }

    export function scaleMode(): string {
        return egret.MainContext.instance.stage.scaleMode;
    }

    export function loopPlay(mc, from = 1, to = 0) {
        if (to === 0) {
            to = mc.totalFrames;
        }
        if (mc.currentFrame < from || mc.currentFrame >= to) {
            mc.gotoAndStop(from);
        } else {
            mc.nextFrame();
        }
    }

    export function singletonPush(ary: Array<any>, data) {
        if (ary.indexOf(data) === -1) {
            ary.push(data);
        }
    }

    export function randomRange(a, b, isInteger = false) {
        if (isInteger) {
            return a + Math.floor(Math.random() * (b - a));
        }
        return a + (Math.random() * (b - a));
    }

    export function randomColor(colorA, colorB) {
        let spliceColor = (color) => {
            let result = { r: -1, g: -1, b: -1 };
            result.b = color % 256;
            result.g = Math.floor((color / 256)) % 256;
            result.r = Math.floor((color / 256) / 256);
            return result;
        }
        let resultA = spliceColor(colorA);
        let resultB = spliceColor(colorB);
        let colorMatrix = [
            1, 0, 0, 0, 0,
            0, 1, 0, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 1, 0
        ];
        colorMatrix[0] = Util.randomRange(resultA.r, resultB.r, true) / 255;
        colorMatrix[6] = Util.randomRange(resultA.g, resultB.g, true) / 255;
        colorMatrix[12] = Util.randomRange(resultA.b, resultB.b, true) / 255;
        let colorFilter = new egret.ColorMatrixFilter(colorMatrix);
        return colorFilter;
    }

    export function setImageColorByRGB(image: egret.Bitmap, color) {

        let colorMatrix = [
            1, 0, 0, 0, 0,
            0, 1, 0, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 1, 0
        ];
        colorMatrix[0] = color.r / 255;
        colorMatrix[6] = color.g / 255;
        colorMatrix[12] = color.b / 255;
        let colorFilter = new egret.ColorMatrixFilter(colorMatrix);

        image.filters = [colorFilter];
    }

    export function getColorFilter(color: number) {
        // 将16进制颜色分割成rgb值
        let spliceColor = (color) => {
            let result = { r: -1, g: -1, b: -1 };
            result.b = color % 256;
            result.g = Math.floor((color / 256)) % 256;
            result.r = Math.floor((color / 256) / 256);
            return result;
        }
        let result = spliceColor(color);
        let colorMatrix = [
            1, 0, 0, 0, 0,
            0, 1, 0, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 1, 0
        ];
        colorMatrix[0] = result.r / 255;
        colorMatrix[6] = result.g / 255;
        colorMatrix[12] = result.b / 255;
        let colorFilter = new egret.ColorMatrixFilter(colorMatrix);
        return colorFilter;
    }

    export function setImageColor(image: egret.Bitmap, color: number) {
        // 将16进制颜色分割成rgb值
        let spliceColor = (color) => {
            let result = { r: -1, g: -1, b: -1 };
            result.b = color % 256;
            result.g = Math.floor((color / 256)) % 256;
            result.r = Math.floor((color / 256) / 256);
            return result;
        }
        let result = spliceColor(color);
        let colorMatrix = [
            1, 0, 0, 0, 0,
            0, 1, 0, 0, 0,
            0, 0, 1, 0, 0,
            0, 0, 0, 1, 0
        ];
        colorMatrix[0] = result.r / 255;
        colorMatrix[6] = result.g / 255;
        colorMatrix[12] = result.b / 255;
        let colorFilter = new egret.ColorMatrixFilter(colorMatrix);

        image.filters = [colorFilter];
    }

    export function clamp(value: number, min: number, max: number): number {
        if (value < min) {
            return min;
        }
        if (value > max) {
            return max;
        }
        return value
    }

    export function arrayRemove(list: Array<any>, item: any) {
        list.splice(list.indexOf(item), 1);
    }

    export function randomPoint() {
        return new egret.Point(Math.random(), Math.random());
    }

    export function pointMult(p1, multiplier) {
        return new egret.Point(p1.x * multiplier, p1.y * multiplier)
    }

    export function twoDistance(a: any, b: any): number {
        var x: number = a.x - b.x;
        var y: number = a.y - b.y;
        return Math.sqrt(x * x + y * y);
    }

    /**两个可显示对象的区域碰撞*/
    export function hitTestRect(obj1: egret.DisplayObject, obj2: egret.DisplayObject): boolean {
        var rect1: egret.Rectangle = obj1.getBounds();//获取显示对象的测量边界
        var rect2: egret.Rectangle = obj2.getBounds();//获取显示对象的测量边界
        rect1.x = obj1.x; rect1.y = obj1.y;
        rect2.x = obj2.x; rect2.y = obj2.y;
        //此方法检查指定的 Rectangle 对象的 x、y、width 和 height 属性，以查看它是否与此 Rectangle 对象相交。
        return rect1.intersects(rect2);
    }

    export function blink(obj: egret.DisplayObject) {

    }
}
