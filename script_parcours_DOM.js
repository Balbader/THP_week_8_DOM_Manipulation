// Total number of Paragraph
const totalNumberOfParagraph = document.getElementsByTagName("p").length;
console.log(totalNumberOfParagraph); // Output: 20

// console.log the content of element with ID 'coucou'
const coucouContent = document.getElementById("coucou").innerHTML;
console.log(coucouContent);

// URL of 3rd element:
const thirdElemUrl = document.querySelectorAll("a")[2].getAttribute("href");
console.log(thirdElemUrl);

// Total number of element with class name: compte-moi
const compteMoi = document.getElementsByClassName("compte-moi").length;
console.log(compteMoi);

// Total number of <li> elementswith class name: compte-moi
const liCompteMoi = document.querySelectorAll("li.compte-moi").length;
console.log(liCompteMoi);