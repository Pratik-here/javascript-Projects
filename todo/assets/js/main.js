//alert('Connected');
$('ul').on('click', 'li', function(){
	$(this).toggleClass('strikethrough');	
});


$('ul').on('click', 'span',function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
})

$('input[type="text"]').on('keypress', function(event){
	if(event.which === 13){
		let todoText = $(this).val();
		$(this).val('');
		$('ul').append('<li><span><i class="fas fa-trash"></i></span> '+ todoText + '</li>');
	}
});

/* toggle the form*/

$('.fa-plus').on('click',function(){
	$('input[type="text"]').fadeToggle();
})