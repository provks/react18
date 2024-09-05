const rootDiv = document.getElementById("root");

const heading = document.createElement("h1");
heading.textContent = "Hello React";
heading.className = "heading";

const paragraph = document.createElement("p");
paragraph.textContent = "Welcome to your first React session!";
paragraph.className = "text";

const learnMoreBtn = document.createElement("button");
learnMoreBtn.textContent = "Learn more...";
learnMoreBtn.className = "btn";

rootDiv.append(heading);
rootDiv.append(paragraph);
rootDiv.append(learnMoreBtn);