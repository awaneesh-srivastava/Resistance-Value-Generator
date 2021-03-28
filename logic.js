var arr = [
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "skyblue",
    "violet",
    "gray",
    "white",
    "gold",
    "silver",
    "none"
]
var multiplyer = [
    1,
    10,
    100,
    1000,
    10000,
    100000,
    1000000,
    10000000,
    100000000,
    1000000000,
    1/10,
    1/100
]
var temp_coff = [
    "± 20%",
    "± 1%",
    "± 2%",
    "± 3%",
    "-0, +100%",
    "± 0.5%",
    "± 0.25%",
    "± 0.10%",
    "± 0.05%",
    "± 10%",
    "± 5%",
    "± 10%",
]
window.onload = function(){
    Swal.fire({
        icon: "success",
        title: 'Welcome to Resistance code generator code.',
        html:"Touch on the strips to change the value",
        customClass:'swet'
    });
    var al = [0 , 0 , 0 , 0]
    var ind;
    $(".strp").click(function(){
        $("#cover").css("display","block");
        $("#clors").css("display","block");
        ind = $(this).index();
    });
    $(".a").on("click", function(){ 
        $("#cover").css("display","none");
        $("#clors").css("display","none");
        al[ind] = $(this).index();
        $(".strp:nth-child(1)").css("background-color",arr[al[0]]);
        $(".strp:nth-child(2)").css("background-color",arr[al[1]]);
        $(".strp:nth-child(3)").css("background-color",arr[al[2]]);
        $(".strp:nth-child(4)").css("background-color",arr[al[3]]);
        $("#val").html("&nbsp;"+parseInt(al[0]+""+al[1])*multiplyer[al[2]]+" O");
        $("#tol").html("&nbsp;"+temp_coff[al[3]]);
    });
    //console.log(3*0.1)
}