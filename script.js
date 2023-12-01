//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function(){
	const searchCom = document.getElementById('searchCom');
	const searchIn = document.getElementById('searchIn');
	const searchBtn = document.getElementById('searchBtn');

	function Search(){
		searchCom.classList.add('active');
		searchIn.focus();
	}

	searchBtn.addEventListener('click', Search);
});