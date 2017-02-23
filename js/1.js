$(function(){
    //查询
	$('.col').on('click','.sel',function(){
		var img=$(this).parent().clone();
		console.log(img.attr("id"));
		var id=img.attr("id");
		img.attr("id","0"+id);
		img[0].style.width="100%";
		$(img).find('.sel').addClass('hide');
		$('.modal-dialog').append($(img));
		$('.modal').removeClass('hide').addClass('show');
		$('.modal-dialog').removeClass('hide').addClass('show');
	});
	$('.modal').on('click','.close',function(){
		$('.modal-dialog').html("");
		$('.modal').removeClass('show').addClass('hide');
		$('.modal-dialog').removeClass('show').addClass('hide');
	});
	//删除
	$('.col').on('click','.del',function(){
		var col=$(this).parent();
		$(col).remove();
	});
	$('.modal-dialog').on('click','.del',function(){
		var col=$(this).parent();
		console.log(col.attr("id"));
		var id=col.attr("id");
		id=id.substring(1);
		$('.col[id='+id+']').remove();
		$(col).remove();
		$('.modal').removeClass('show').addClass('hide');
		
	});
	//修改
	$('.col').on('click','.modify',function(){
		console.log("修改一下");
		window.location.href="modify.html";
	});
});