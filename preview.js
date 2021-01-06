function previewImage(f){

	var file = f.files;

	// 확장자 체크
	if(!/\.(jpg|jpeg|png)$/i.test(file[0].name)){
		alert('jpg, png 파일만 선택해 주세요.\n\n현재 파일 : ' + file[0].name);

		// 선택한 파일 초기화
		f.outerHTML = f.outerHTML;

		document.getElementById('preview').innerHTML = '';

	}
	else {

		// FileReader 객체 사용
		var reader = new FileReader();

		// 파일 읽기가 완료되었을때 실행
		reader.onload = function(rst){
			document.getElementById('preview').innerHTML = '<img src="' + rst.target.result + '" >';
		}

		// 파일을 읽는다
		reader.readAsDataURL(file[0]);

	}
}