
// Toggle tick and grayed out/on each item.
$("ul").on("click", "li", function() {
   $(this).toggleClass("completed");

});

//Deleted each item by clicking X
$("ul").on("click", "span", 700,function(event){
  $(this).parent().fadeOut(function(){
    $(this).remove();
  });
    event.stopPropagation();

});

$("input[type='text']").keypress(function(event){
  if(event.which === 13){
    var todoItem = $(this).val();
    $(this).val("");

    $("ul").append("<li><span>X</span> "+ todoItem +"</li>")
  }
});
