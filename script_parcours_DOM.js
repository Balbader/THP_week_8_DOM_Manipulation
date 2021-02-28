// Total number of Paragraph
let totalNumberOfParagraph = document.getElementsByTagName("p").length;
console.log(totalNumberOfParagraph); // Output: 20

// console.log the content of element with ID 'coucou'
let coucouContent = document.getElementById("coucou").innerHTML;
console.log(coucouContent);

// URL of 3rd element:
const thirdElemUrl = document.querySelectorAll("a")[2].getAttribute("href");
console.log(thirdElemUrl);