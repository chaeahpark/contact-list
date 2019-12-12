const filterInput = document.getElementById("filterInput");

filterInput.addEventListener('keyup', filterNames);

function filterNames() {
  let filterValue = document.getElementById("filterInput").value.toUpperCase();

  // get names ul
  const ul = document.getElementById('names');
  // get lis from ul
  const li = ul.querySelectorAll("li.collection-item");

  // loop through collection-item lis
  ul.forEach(check);

  const check = (li) => {
    const a = li[i].getElementsByTagName('a');
    if (a.innerHTML.toUpperCase().includes(filterValue) == true) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }

  /*
    for (let i = 0; i < li.length; i++) {
      const a = li[i].getElementsByTagName('a');

      if (a.innerHTML.toUpperCase().includes(filterValue) == true) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }
  */