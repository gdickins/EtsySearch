$(document).ready(function(){
  $('#searchBox').on('submit', function(evt) {
    evt.preventDefault();
    var input = $('#searchTerms').val();
    var urlSearch = "https://openapi.etsy.com/v2/listings/active.js?keywords="+
                input+"&includes=Images,Shop&api_key=as5hqgxpuf3j1647baqnbz0h";
    console.log(urlSearch);
    $.ajax({
      url: urlSearch,
      dataType: 'jsonp',
      success: function(data) {
        if (data.ok) {
              console.log(data.results[0]);
          } else {
              alert(data.error);
        }
      }
    });
  });
});
