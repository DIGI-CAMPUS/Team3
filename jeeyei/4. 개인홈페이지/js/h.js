
const tableRows = document.querySelectorAll('.table tbody tr');
const rowsPerPage = 5;
let currentPage = 1;
function showRows() {
	for (let i = 0; i < tableRows.length; i++) {
		if (i < (currentPage - 1) * rowsPerPage || i >= currentPage * rowsPerPage) {
			tableRows[i].style.display = 'none';
		} else {
			tableRows[i].style.display = '';
		}
	}
	document.getElementById('currentPage').innerHTML = currentPage;
}
showRows();
document.getElementById('prevPage').addEventListener('click', function() {
	if (currentPage > 1) {
		currentPage--;
		showRows();
	}
});
document.getElementById('nextPage').addEventListener('click', function() {
	if (currentPage < Math.ceil(tableRows.length / rowsPerPage)) {
		currentPage++;
		showRows();
	}
});