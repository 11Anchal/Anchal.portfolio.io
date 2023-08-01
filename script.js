document.getElementById('downloadCV').addEventListener('click', function() {
    // Replace 'path/to/your/cv.pdf' with the actual path to your CV file
    const downloadLink = '"C:\Users\anchal shakya\Downloads\DA_Anchal.pdf"';

    // Create a temporary anchor element to initiate the download
    const link = document.createElement('a');
    link.href = downloadLink;
    link.download = 'DA_Anchal.pdf'; // Change the filename if needed
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});