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
  .attr("id",disk.name)
  .append(diskTitle(disk.name))
  .append(diskImg(disk.img))
  .append(diskDesc(disk.desc))
  .append(diskDelete(disk.name))
  .append(diskEdit(disk.name));
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

function diskDelete(name){
  return $("<Button>").attr("onclick","fundelete('"+name+"')").html("Delete");
}

function diskEdit(name){
  return $("<Button>")
  .attr("id",name)
  .attr("onclick","funedit('"+name+"')")
  .html("Edit");
}


function add(){
  var newProduct={
    name:$("#productName").val(),
    img:$("#productImg").val(),
    desc:$("#productDesc").val()};
    disks.push(newProduct);
    dataToView(disks);
}

function fundelete(name){
  var searchResult=_.filter(disks,function(disk){
    return disk.name.indexOf(name)==-1;
  });
  disks=searchResult;
  dataToView(searchResult);
}

function funedit(name){
  var searchResult=_.filter(disks,function(disk){
    return disk.name.indexOf(name)!=-1;
  });
  $("#productName").val(searchResult[0].name);
  $("#productImg").val(searchResult[0].img);
  $("#productDesc").val(searchResult[0].desc);
  fundelete(name)
  dataToView(disks);
}

function search(){
  var keyWord=$("#productSelect").val();
  var searchResult=_.filter(disks,function(disk){
    return disk.name.indexOf(keyWord)!=-1;
  });
  dataToView(searchResult);
}
