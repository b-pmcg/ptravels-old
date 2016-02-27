function loadShowInfoPopup(date) {
  $.ajax({
    dataType: "json",
    url: 'https://api.phish.net/api.js?api=2.0&format=json&callback=?',
    data: {
      apikey: '714E5526D579DF266C5D',
      method: 'pnet.shows.setlists.get',
      showdate: new Date(date).toISOString().split('T')[0]
    },
    success: function(data) {
      var showData = data[0];
      if (!showData) {
        alert('no show found!');
      } else {
        var setListContent =
          "<div>" + showData.venue + "</div>" +
          "<div>" + showData.showdate + "</div>" +
          "<div><a href=" + "\"http://www.phishtracks.com/shows/" + showData.showdate + "\"target=\"_blank\"></div>" +
          "<div>Click here to listen to this show</a>" +
          "<div>" + showData.setlistdata + "</div>" +
          "<div>" + showData.setlistnotes + "</div></br>" +
          "<div>" + "Setlists Data &copy <a href=\"http://phish.net/\"target=\"_blank\">The Mockingbird Foundation</a>";

        $("#show-info-popup .content").html(setListContent);
        $("#show-info-popup").show();
      }
    },
    error: function(jqxhr, textStatus, error) {
      alert('There was an error!')
    }
  });
};

function googleGetLatLong(locList) {
  $.ajax({
    dataType: "json",
    url: 'https://maps.googleapis.com/maps/api/geocode/json?',
    data: {
      apikey: 'AIzaSyDMgPjBslgKeL2jO0jxIiaVOKgRCM_TFNk',
      address: locList
    },
    success: function(response) {
      var markers = [];
      //note LNG and LAT are accurately long and lat
      for (i = 0; i < response.results.length; i++) {
        markers[i] = response.results[i].geometry.location.lat + ',' + response.results[i].geometry.location.lng + ',' + response.results[i].formatted_address; //access lat and long from here
        var markersArray = markers[i].split(',');

        //sends markers array to addMarkers function
        addMarkers(markersArray);
      }
    },
    error: function(jqxhr, textStatus, error) {
      alert('error!')
    }
  });
};

function getAllUserShows(username) {
  $.ajax({
    dataType: "json",
    url: 'https://api.phish.net/api.js?api=2.0&format=json&callback=?',
    data: {
      apikey: '714E5526D579DF266C5D',
      method: 'pnet.user.myshows.get',
      username: username
    },
    success: function(response) {
      var i = 1;

      function buildGoogleQuery() {
        setTimeout(function() {
          locList = response[i].venuename + '+' + response[i].city + '+' + response[i].state;
          //sends data to googleGetLatLong function at 250ms interval (api restriction)
          googleGetLatLong(locList);
          i++;
          if (i < response.length) {
            buildGoogleQuery();
          }
        }, 250)
      }
      buildGoogleQuery();
    },
    error: function(jqxhr, textStatus, error) {
      alert('error!')
    },

  });
};
