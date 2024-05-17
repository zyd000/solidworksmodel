
//返回选中的TD
function backSelHTM() {
    if (lastTD != null) return lastTD.innerHTML;
    return "";
}


//选中的规格行
var lastTD = null;


//封装一下。
function Init() {
    //这是自动生成的HTM中顶层的
    var divTop = document.getElementById("divAutoCreate");
    if (divTop != null) {

        //表格
        var tbArr = divTop.getElementsByTagName("table");
        for (var k = 0; k < tbArr.length; k++) {

            var tb = tbArr[k];
            tb.style.cursor = "pointer";
            tb.style.width = "98%";

            var trArr = tb.getElementsByTagName("tr");
            var TH = trArr[0];
            TH.style.fontWeight = "bold";
            TH.style.backgroundColor = "#DDFFFF";

            for (var i = 1; i < trArr.length; i++) {
                var tr = trArr[i];
                tr.onmouseover = function () { this.style.backgroundColor = "#DDDDDD"; };
                tr.onmouseout = function () { if (lastTD != this) this.style.backgroundColor = "#FFFFFF"; }
                tr.onclick = function () {
                    if (lastTD != null) lastTD.style.backgroundColor = "#FFFFFF";
                    lastTD = this;
                    this.style.backgroundColor = "#DDDDDD";
                }
            }
        }


        //aaa目录里面的图片列表
        var imgArr = divTop.getElementsByTagName("img");
        for (var i = 0; i < imgArr.length; i++) {
            var img = imgArr[i];
            img.style.border = "1px solid #DDDDDD";
            img.onmouseover = function () { this.style.border = "1px solid #FF3333"; }
            img.onmouseout = function () { this.style.border = "1px solid #DDDDDD"; }

            if (img.alt.length > 1) {
                img.style.width = "240px";
                img.style.height = "180px";
                
            }
            if (img.src.indexOf("logo") != -1) {
                img.style.width = "120px";
                img.style.height = "80px";
            }
        }

        //bbb,ccc目录里面的picture.jpg
        var img_Picture = document.getElementById("img_Picture");
        if (img_Picture != null) {
            if (img_Picture.width > 500) {
                img_Picture.width = 500;
            }
        }


        //如果整个body就两个子元素，一个divAutoCreate,一个JS
        if (document.body.childNodes.length <= 3) {
            var A_Arr = document.getElementsByTagName("a"); //链接
            if (A_Arr.length == 1 && tbArr.length == 0 && imgArr.length == 0 && img_Picture == null) {
                //if (confirm("就一项内容，要跳转了！")) A_Arr[0].click();
            }
        }

        //把Body加上样式
        document.body.style.fontFamily = "Arial", "Helvetica", "sans-serif";
        document.body.style.fontsize = "12px";
        document.body.style.lineHeight = "1.6";

    }



}


Init();

