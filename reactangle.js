$(function(){
  var $width=$('#width'),
      $height=$('#height'),
      
      $area=$('#area');
$btnCal.click(function(){
  var w=$width.val(),
      h=$height.val();
  var r=new Reactangle(w,h);
  $perimeter.val(r.perimeter());
  $area.val(r.area());
})
})
