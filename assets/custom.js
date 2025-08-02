const toggleAccordion = (item) => {
    const accordion = document.querySelectorAll(".accordion-item");
    accordion.forEach((el) => {
        if (el !== item) {
            el.classList.remove("active");
        }
    });
    item.classList.toggle("active");
}