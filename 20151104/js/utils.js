var utils = {
    /*
     * listToArray:Converts an array of classes into an array, compatible with all browsers.
     * @parameter
     *   likeAry:[object]We need to convert an array of classes.
     * @return
     *   [array]Arrays we convert to complete
     * by Team in 2015/11/04
     */
    listToArray: function (likeAry) {
        var ary = [];
        try {
            ary = Array.prototype.slice.call(likeAry, 0);
        } catch (e) {
            for (var i = 0; i < likeAry.length; i++) {
                ary[ary.length] = likeAry[i];
            }
        }
        return ary;
    },
    //把一个字符串转换为JSON格式的对象
    toJSON: function (str) {
        try {
            return JSON.parse(str);
        } catch (e) {
            return eval("(" + str + ")");
        }
    }
};