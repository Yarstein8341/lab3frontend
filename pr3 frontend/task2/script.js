document.addEventListener("DOMContentLoaded", function () {

    const tableDivs = document.querySelectorAll('.table');


    tableDivs.forEach(tableDiv => {

        const tds = tableDiv.querySelectorAll('td');


        tds.forEach((td, index) => {
            if (index % 2 !== 0) {
                td.classList.add('selected');
            }
        });
    });
});
