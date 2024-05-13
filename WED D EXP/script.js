function generateResult() {
	const studentName = document.getElementById("studentName").value;
	const resultContainer = document.getElementById("resultContainer");
	
	// Create a sample result data (you can replace this with actual data from a database or API)
	const results = [
		{ subject: "Math", marks: 80 },
		{ subject: "Science", marks: 90 },
		{ subject: "English", marks: 85 }
	];
	
	// Clear the result container
	resultContainer.innerHTML = "";
	
	// Create a heading with the student's name
	const heading = document.createElement("h2");
	heading.textContent = `Result for ${studentName}`;
	resultContainer.appendChild(heading);
	
	// Create a list of results
	const resultList = document.createElement("ul");
	resultContainer.appendChild(resultList);
	
	results.forEach((result) => {
		const listItem = document.createElement("li");
		listItem.className = "result";
		listItem.textContent = `${result.subject}: ${result.marks}`;
		resultList.appendChild(listItem);
	});
}