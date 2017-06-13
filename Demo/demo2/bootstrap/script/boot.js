$(document).ready(function() {
    $(".form-group>input").blur(function() {
        var impVal = $(this).val();
        if (impVal == "" || impVal == null) {
            $(this).addClass("ass");
        } else {
            $(this).removeClass("ass");
        }

    });

    var token = "";
    getToken();

    function getToken() {
        $.ajax({
            type: "get",
            url: "../php/token.php",
            datatype: 'json',
            success: function(data) {
                token = data;
            }
        })
    }

    //删除新闻的功能
    var deleteID = null;
    $("#res").on('click', '.btn-danger', function(e) {
        $('#myModal').modal({
            show: true,
            backdrop: 'static'
        });
        deleteID = $(this).parent().prevAll().eq(5).html();
    });
    $("#myModal #resl").click(function() {
        if (deleteID) {
            $.ajax({
                url: '../php/dele.php',
                type: 'post',
                data: {
                    token: token,
                    newsid: Number(deleteID)
                },
                success: function(data) {
                    refresNews();
                    $('#myModal').modal('hide');
                }
            });
        }
    });
    $("#sub").click(function() {
        if ($("#newtitle").val() == "" || $("#newimg").val() == "" || $("#newsrc").val() == "" || $("#newdata").val() == "") {
            return false;
        } else {
            var jsonnews = {
                newstitle: filterXSS($("#newtitle").val()),
                newsimg: filterXSS($("#newimg").val()),
                newssrc: filterXSS($("#newsrc").val()),
                newsdate: filterXSS($("#newdate").val()),
                newscla: filterXSS($("#newscla").val()),
                token: token

            };
            console.log(jsonnews);
            $.ajax({
                url: '../index.php',
                type: 'post',
                data: jsonnews,
                datatype: 'json',
                success: function(data) {
                    console.log(data);
                }
            });

            refresNews();
        }

    })

    //修改新闻的功能
    var updeleteID = null;
    $("#res").on('click', '.btn-primary', function(e) {
        $('#upModal').modal({
            show: true,
            backdrop: 'static'
        });
        updeleteID = $(this).parent().prevAll().eq(5).html();

        if (updeleteID) {
            $.ajax({
                type: 'post',
                url: '../php/upde.php',
                datatype: 'json',
                data: {
                    newsid: Number(updeleteID),
                    token: token
                },
                success: function(data) {
                    console.log(data);
                    $('#unewtitle').val(data[0].newstitle);
                    $('#unewsrc').val(data[0].newssrc);
                    $("#unewscla").val(data[0].newscla);
                    $('#unewimg').val(data[0].newsimg);
                    var utem = data[0].newsdate;
                    $("#unewdate").val(utem);
                }
            });
        }


    });
    $("#upModal #uresl").click(function() {
        if (updeleteID) {
            var jonnews = {
                newstitle: filterXSS($("#unewtitle").val()),
                newsimg: filterXSS($("#unewimg").val()),
                newssrc: filterXSS($("#unewsrc").val()),
                newsdate: filterXSS($("#unewdate").val()),
                newscla: filterXSS($("#unewscla").val()),
                newsid: Number(updeleteID)
            };
            $.ajax({
                url: '../php/up.php',
                type: 'post',
                data: jonnews,
                success: function(data) {

                    refresNews();
                    $('#upModal').modal('hide');
                }
            });
        }
    });

})
