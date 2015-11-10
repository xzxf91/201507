//分析选项卡实现的原理:
//1、手动默认让我们的第一个li个第一个div有选中的样式-->class='select'
//2、当我鼠标滑到某一个li上(onmouseover)，我们需要进行处理:
//1)让三个li个三个div的选中样式都清除 --> class='' / class=null
//2)让当前滑过的这个li和对应的div有选中的样式 -->class='select'


//1、想要操作哪些元素就先获取这些元素
var oTab = document.getElementById("tab");
var oLis = oTab.getElementsByTagName("li");
var oDivs = oTab.getElementsByTagName("div");

//2、制定一个功能实现我们的选项卡
function tabChange(nIndex) {
    //2-1、让所有的li和所有的div都清空选中的样式
    for (var i = 0; i < oLis.length; i++) {
        oLis[i].className = null;
        oDivs[i].className = null;
    }
    //2-2、让当前滑过的这个li和对应的div有选中的样式，但是遇到问题了，我们此时并不知道鼠标滑过的是哪一个，只有手动滑过的时候才知道，如何解决?
    //使用我们函数中形参的作用，我们定义一个形参变量nIndex，代表当前滑过的li的索引-->oLis[索引]
    oLis[nIndex].className = "select";
    oDivs[nIndex].className = "select";
}

//3、当鼠标滑过的时候，我们执行tabChange方法，并且把当前滑过的li的索引传递进去
oLis[0].onmouseover = function () {
    tabChange(0);
};
oLis[1].onmouseover = function () {
    tabChange(1);
};
oLis[2].onmouseover = function () {
    tabChange(2);
};














