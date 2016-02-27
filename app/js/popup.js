function eachLayer(layer) {
	var feature = layer.toGeoJSON();
	var popupContent = "This is a popup for you."
		// feature.properties.name + ",</br>" +
		// feature.properties.city + ", " +
		// feature.properties.state + ", " +
		// feature.properties.country + "</br>" +
		// "Setlists: " +
		// '<div><a href=\"#\" onclick=\"loadShowInfoPopup(\'' + feature.properties.p1 + '\'); return false;\">' + feature.properties.p1 + '</a></div>' +
		// '<div><a href=\"#\" onclick=\"loadShowInfoPopup(\'' + feature.properties.p2 + '\'); return false;\">' + feature.properties.p2 + '</a></div>' +
		// '<div><a href=\"#\" onclick=\"loadShowInfoPopup(\'' + feature.properties.p3 + '\'); return false;\">' + feature.properties.p3 + '</a></div>' +
		// '<div><a href=\"#\" onclick=\"loadShowInfoPopup(\'' + feature.properties.p4 + '\'); return false;\">' + feature.properties.p4 + '</a></div>' +
		// '<div><a href=\"#\" onclick=\"loadShowInfoPopup(\'' + feature.properties.p5 + '\'); return false;\">' + feature.properties.p5 + '</a></div>' +
		// '<div><a href=\"#\" onclick=\"loadShowInfoPopup(\'' + feature.properties.p6 + '\'); return false;\">' + feature.properties.p6 + '</a></div>' +
		// '<div><a href=\"#\" onclick=\"loadShowInfoPopup(\'' + feature.properties.p7 + '\'); return false;\">' + feature.properties.p7 + '</a></div>' +
		// '<div><a href=\"#\" onclick=\"loadShowInfoPopup(\'' + feature.properties.p8 + '\'); return false;\">' + feature.properties.p8 + '</a></div>' +
		// '<div><a href=\"#\" onclick=\"loadShowInfoPopup(\'' + feature.properties.p9 + '\'); return false;\">' + feature.properties.p9 + '</a></div>' +
		// '<div><a href=\"#\" onclick=\"loadShowInfoPopup(\'' + feature.properties.p10 + '\'); return false;\">' + feature.properties.p10 + '</a></div>' +
		// '<div><a href=\"#\" onclick=\"loadShowInfoPopup(\'' + feature.properties.p11 + '\'); return false;\">' + feature.properties.p11 + '</a></div>' +
		// '<div><a href=\"#\" onclick=\"loadShowInfoPopup(\'' + feature.properties.p12 + '\'); return false;\">' + feature.properties.p12 + '</a></div>' +
		// '<div><a href=\"#\" onclick=\"loadShowInfoPopup(\'' + feature.properties.p12 + '\'); return false;\">' + feature.properties.p13 + '</a></div>' +
		// '<div><a href=\"#\" onclick=\"loadShowInfoPopup(\'' + feature.properties.p12 + '\'); return false;\">' + feature.properties.p14 + '</a></div>' +
		// '<div><a href=\"#\" onclick=\"loadShowInfoPopup(\'' + feature.properties.p12 + '\'); return false;\">' + feature.properties.p15 + '</a></div>' +
		// '<div><a href=\"#\" onclick=\"loadShowInfoPopup(\'' + feature.properties.p12 + '\'); return false;\">' + feature.properties.p16 + '</a></div>' +
		// '<div><a href=\"#\" onclick=\"loadShowInfoPopup(\'' + feature.properties.p12 + '\'); return false;\">' + feature.properties.p17 + '</a></div>' +
		// '<div><a href=\"#\" onclick=\"loadShowInfoPopup(\'' + feature.properties.p12 + '\'); return false;\">' + feature.properties.p18 + '</a></div>' +
		// '<div><a href=\"#\" onclick=\"loadShowInfoPopup(\'' + feature.properties.p12 + '\'); return false;\">' + feature.properties.p19 + '</a></div>' +
		// '<div><a href=\"#\" onclick=\"loadShowInfoPopup(\'' + feature.properties.p12 + '\'); return false;\">' + feature.properties.p20 + '</a></div>' +
		// '<div><a href=\"#\" onclick=\"loadShowInfoPopup(\'' + feature.properties.p12 + '\'); return false;\">' + feature.properties.p21 + '</a></div>' +
		// '<div><a href=\"#\" onclick=\"loadShowInfoPopup(\'' + feature.properties.p12 + '\'); return false;\">' + feature.properties.p22 + '</a></div>' +
		// '<div><a href=\"#\" onclick=\"loadShowInfoPopup(\'' + feature.properties.p12 + '\'); return false;\">' + feature.properties.p23 + '</a></div>' +
		// '<div><a href=\"#\" onclick=\"loadShowInfoPopup(\'' + feature.properties.p12 + '\'); return false;\">' + feature.properties.p24 + '</a></div>' +
		// '<div><a href=\"#\" onclick=\"loadShowInfoPopup(\'' + feature.properties.p12 + '\'); return false;\">' + feature.properties.p25 + '</a></div>' +
		// '<div><a href=\"#\" onclick=\"loadShowInfoPopup(\'' + feature.properties.p12 + '\'); return false;\">' + feature.properties.p26 + '</a></div>' +
		// '<div><a href=\"#\" onclick=\"loadShowInfoPopup(\'' + feature.properties.p12 + '\'); return false;\">' + feature.properties.p27 + '</a></div>' +
		// '<div><a href=\"#\" onclick=\"loadShowInfoPopup(\'' + feature.properties.p12 + '\'); return false;\">' + feature.properties.p28 + '</a></div>' +
		// '<div><a href=\"#\" onclick=\"loadShowInfoPopup(\'' + feature.properties.p12 + '\'); return false;\">' + feature.properties.p29 + '</a></div>';

	if (feature.properties && feature.properties.popupContent) {
		popupContent += feature.properties.popupContent;
	}

	layer.bindPopup(popupContent);
}
