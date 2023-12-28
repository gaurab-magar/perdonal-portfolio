document.getElementById("downloadButton").addEventListener("click", function () {
    var cvPath = 'bootsstrap\portfolio-website-starter\images\gaurabCv.pdf';
    // Create a link element
    var link = document.createElement('a');
    // Set the download attribute with the desired file name
    link.download = 'gaurabCv.pdf';
    // Set the href attribute to the path of your CV file
    link.href = cvPath;
    // Append the link to the document
    document.body.appendChild(link);
    // Trigger a click on the link to start the download
    link.click();
    document.body.removeChild(link);
});