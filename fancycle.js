$(document).ready(function(){

  $('#justin').click(function(){
    var song    = $('#baby'),
        counter = song.find('#view-counter').text();

    hideClass(song);
    addCounter(song);
    colorize(song);
    increaseText(song);
    decreaseText(song);

    function colorize(song) {
      (song).find('#colorize').click(function(){
        song.toggleClass('color');
      });
    };

    function increaseText(song) {
      (song).find('#increase-text-size').click(function(){
        song.toggleClass('bigText');
      });
    };

    function decreaseText(song) {
      (song).find('#decrease-text-size').click(function(){
        song.toggleClass('smallText');
      });
    };

    function hideClass(song) {
      song.toggleClass('hidden');
    };

    function addCounter(song) {
      if (song.attr('class') === 'song') {
        counter ++;
        song.find('#view-counter').text(counter);
      };
    };

    $('#come-and-get-it').addClass('hidden');
    $('#wrecking-ball').addClass('hidden');
  });

  $('#selena').click(function(){
    var song    = $('#come-and-get-it'),
        counter = song.find('#view-counter').text();

    hideClass(song);
    addCounter(song);
    colorize(song);

    function colorize(song) {
      song.find('#colorize').click(function(){
        song.toggleClass('colorR');
      });
    };

    function hideClass(song) {
      song.toggleClass('hidden');
    };

    function addCounter(song) {
      if (song.attr('class') === 'song') {
        counter ++;
        song.find('#view-counter').text(counter);
      };
    };

    $('#baby').addClass('hidden');
    $('#wrecking-ball').addClass('hidden');
  });

  $('#miley').click(function(){
    var song    = $('#wrecking-ball'),
        counter = song.find('#view-counter').text();

    hideClass(song);
    addCounter(song);
    colorize(song);

    function colorize(song) {
      song.find('#colorize').click(function(){
        song.toggleClass('colorY');
      });
    };

    function hideClass(song) {
      song.toggleClass('hidden');
    };

    function addCounter(song) {
      if (song.attr('class') === 'song') {
        counter ++;
        song.find('#view-counter').text(counter);
      };
    };

    $('#baby').addClass('hidden');
    $('#come-and-get-it').addClass('hidden');
  });

});
