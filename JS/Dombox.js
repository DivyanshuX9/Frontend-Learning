let elements = document.getElementsByClassName("box"); // Directly access all child elements of the body

Array.from(elements).forEach((e) => {
    let randomValue1 = Math.floor(Math.random() * 255);
    let randomValue2 = Math.floor(Math.random() * 255);
    let randomValue3 = Math.floor(Math.random() * 255);

    e.style.backgroundColor = `rgb(${randomValue1}, ${randomValue2}, ${randomValue3})`;
});
