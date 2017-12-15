window.onload=function () {
	var comment=document.getElementsByClassName('comment-popo')[0];
	var commentText=document.getElementsByClassName('comment-text')[0];
	commentText.onclick=function () {
		comment.style.display="block";
	}
	var iconCuo=document.getElementsByClassName("iconfont icon-cuo")[0];
	iconCuo.onclick=function () {
		comment.style.display="none";
	}

	var setArea=document.getElementsByClassName("set-area")[0];
	var setIcon=document.getElementsByClassName("set-icon")[0];
	setIcon.onclick=function () {
		setArea.style.display="block";
	}
	setArea.onclick=function () {
		this.style.display="none";
	}
}