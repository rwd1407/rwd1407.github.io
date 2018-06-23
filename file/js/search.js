function searchFunc(){
	var hp;
	var search = document.getElementById('searchText').value;
	hp = window.open('http://www.g9.co.kr/Display/Search?keyword=' + search, '_BLANK', 'width=1000, height=600');
	hp.moveTo();
}