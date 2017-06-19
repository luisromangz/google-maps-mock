module.exports = (function (window) {
	window.google = {
		maps: {
			event: {
				addDomListener: function (obj, event, cb) {
					return {
						Ob: obj,
						R: event,
						U: 1,
						id: 1,
						j: cb
					}
				}
			},
			LatLng: function (lat, lng) {
				return {
					latitude: parseFloat(lat),
					longitude: parseFloat(lng),

					lat: function () {
						return this.latitude;
					},
					lng: function () {
						return this.longitude;
					}
				};
			},
			LatLngBounds: function (ne, sw) {
				return {
					getSouthWest: function () {
						return sw;
					},
					getNorthEast: function () {
						return ne;
					},
					getCenter: function () {
						return {
							lat: function () {
								return (sw.lat() + ne.lat()) / 2;
							},
							lng: function () {
								return (sw.lng() + ne.lng()) / 2;
							}
						};
					}
				};
			},
			OverlayView: function () {
				return {};
			},
			InfoWindow: function () {
				return {};
			},
			Marker: function () {
				return {};
			},
			MarkerImage: function () {
				return {};
			},
			Map: function () {
				return {};
			},
			Point: function () {
				return {};
			},
			Size: function () {
				return {};
			}
		}
	};
});