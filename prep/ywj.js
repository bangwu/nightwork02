$(document).ready(function(){
  dataToView(disks);
});

function dataToView(disks){
  $("#contains").empty();
  var diskDivs=_.map(disks,function(disk){
    return diskDiv(disk);
  })
  _.each(diskDivs,function(div){
    $("#contains").append(div);
  })
}


function diskDiv(disk){
  return $("<div>")
  .attr("class","disk1")
  .append(diskTitle(disk.name))
  .append(diskImg(disk.img))
  .append(diskDesc(disk.desc));
}
function diskTitle(name){
  return $("<h3>").html(name);
}
function diskImg(img){
  return $("<img>").attr("src",img);
}
function diskDesc(desc){
  return $("<p>").html(desc);
}

function add(){
  var newProduct={
    name:$("#productName").val(),
    img:$("#productImg").val(),
    desc:$("#productDesc").val()};
    disks.push(newProduct);
    dataToView(disks);
}

function search(){
  var keyWord=$("#productSelect").val();
  var searchResult=_.filter(disks,function(disk){
    return disk.name.indexOf(keyWord)!=-1;
  });
  dataToView(searchResult);
  console.log(searchResult[0]);
}