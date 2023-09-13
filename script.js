const table = document.getElementById("sampleTable");

function insert_Row() {
    //Write your code here
	let count = 0;
	const row = document.createElement("tr");
	row.innerHTML = `<td>New Cell${++count}</td>
					<td>New Cell${++count}</td>`	
  table.prepend(row);
}
