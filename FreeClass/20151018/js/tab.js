var oTab = document.getElementById("tab");
var oLis = oTab.getElementsByTagName("li");
var oDivs = oTab.getElementsByTagName("div");

function tabChange(n) {
    for (var i = 0; i < oLis.length; i++) {
        oLis[i].className = null;
        oDivs[i].className = null;
    }
    oLis[n].className = "select";
    oDivs[n].className = "select";
}

//oLis[0].onmouseover = function () {
//    tabChange(0);
//};
//oLis[1].onmouseover = function () {
//    tabChange(1);
//};
//oLis[2].onmouseover = function () {
//    tabChange(2);
//};

//前端面试必问的问题:
// 这样循环绑定事件，可以实现我们的需求吗?为什么没有?你有几种办法解决?
//for (var i = 0; i < oLis.length; i++) {
//    oLis[i].onmouseover = function () {
//        tabChange(i);
//    }
//}

//探讨为啥不行?
//i=0;i<3;i++
//i=0第一次循环
//oLis[0].onmouseover=function(){tabChange(i);} 此时我们是把函数的定义部分赋值给我们的onmouseover事件，定义的时候存储的都是"字符串"，所以我们看到的i只是字符i

//i=1第二次循环
//oLis[1].onmouseover=function(){tabChange(i);}

//i=2第三次循环
//oLis[2].onmouseover=function(){tabChange(i);}

//i=3 循环结束

//我们开始手动的滑过第二个li，触发第二个li的onmouseover事件，然后开始执行我们的function(){tabChange(i);}
//形成一个新的环境，让字符串变为有意义的代码 tabChange(i); 此时的i就是变量，但是此时的i已经为3了，所以不能实现选项卡

//如何的解决?
//1、自定义属性
//我们通过JS获取的每一个li都是对象数据类型的数据，而对象数据类型都是由属性名个属性值组成的-->我们利用这个原理，给每一个li增加一个我们自己定义的属性zhuFeng,属性值存储的就是我们每一个li的索引
//当我们后期用的时候，直接的到自定义属性zhuFeng上获取即可
for (var i = 0; i < oLis.length; i++) {
    oLis[i].zhuFeng = i;
    oLis[i].onmouseover = function () {
        //需要传递索引，但是还不能用i
        //tabChange(i);//我们这里使用i不是我们想要的索引

        //this-->当前鼠标滑过的那个li
        tabChange(this.zhuFeng);
    }
}


//for (var i = 0; i < oLis.length; i++) {
//    oLis[i].onmouseover = function (i) {
//        return function () {
//            tabChange(i);
//        }
//    }(i);
//}

//for (var i = 0; i < oLis.length; i++) {
//    ~function (i) {
//        oLis[i].onmouseover = function () {
//            tabChange(i);
//        }
//    }(i);
//}




























