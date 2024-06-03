document.addEventListener("DOMContentLoaded", function() {
    const searchForm = document.getElementById("searchForm");
    const searchInput = document.getElementById("searchInput");
    const items = document.querySelectorAll('.card'); 

    searchForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const searchTerm = searchInput.value.toLowerCase();
        
        items.forEach(item => {
            const title = item.querySelector('.card-title').textContent.toLowerCase();
            if (title.includes(searchTerm)) {
                item.style.display = "block";
            } else {
                item.style.display = "none";
            }
        });
    });
});

/*inhabilitado de momento*/
