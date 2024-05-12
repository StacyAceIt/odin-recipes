document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (!file) {
        return;
    }

    const reader = new FileReader();
    reader.onload = function(e) {
        const text = e.target.result;
        displayFormattedText(text);
    };
    reader.readAsText(file);
});

function displayFormattedText(text) {
    const lines = text.split('\n');
    const formattedText = lines.map(line => {
        if (line.trim().length === 0) return ''; // Skip empty lines
        if (line.startsWith('# ')) return `<h1>${line.substring(2)}</h1>`;
        if (line.startsWith('## ')) return `<h2>${line.substring(3)}</h2>`;
        // Add more rules as needed
        return `<p>${line}</p>`; // Default to paragraph
    }).join('');

    document.getElementById('content').innerHTML = formattedText;
}
