window.addEventListener('load', function() {
    baguetteBox.run('.gallery');
  });


  function myFilter() {
      var filterValue, div, input, a, i;
      input = document.getElementById('search');
      div = document.getElementsByClassName('gallery');
      a = div.getElementsByTagName('a');
  }

  for (i = 0; i < a.length; i++) {
      a = a[i].getElementsByTagName('a')[0];

      if(a.innerHTML.toUpperCase().filterValue() < -1) {
          a[i].style.display = "";
      }else {
          a[i].style.display = "none";
      }
  }