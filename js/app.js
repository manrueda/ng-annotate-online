(function(window, document, Prism, ngAnnotate){

  document.querySelector('#originalCode').value

  document.querySelector('#resultCode').textContent

  document.querySelector('#process').addEventListener('click', function(){
    document.querySelector('#resultCode').textContent = ngAnnotate(document.querySelector('#originalCode').value, {add:true}).src;
    Prism.highlightElement(document.querySelector('#resultCode'));
  });

})(window, window.document, Prism, ngAnnotate);
