import blueIcon from "../assets/pins/blue.svg";
import redIcon from "../assets/pins/red.svg";
import Leaflet from "leaflet";


export const getPin = (mvalue, currentLocation, parkinglat, parkinglong) => {
  let hasRealtimeData = false;
  var pin;
  // if (mvalue === undefined || mvalue < 0) {
  //   pin = blueIcon;
  // } else if (mvalue >= 1) {
  //   pin = blueIcon;
  //   hasRealtimeData = true;
  // } else {
  //   pin = redIcon;
  //   hasRealtimeData = true;
  // }

  function calculateDistance(lat1, lon1, lat2, lon2) {
    const earthRadius = 6371; // Radius of the Earth in kilometers
    const dLat = toRadians(lat2 - lat1);
    const dLon = toRadians(lon2 - lon1);

    const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) *
    Math.sin(dLon / 2) * Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    //console.log(c)

    const distance = earthRadius * c;

    return distance;
 }
 //currentLocation.lat
 console.log(currentLocation.lat, currentLocation.lng);

 console.info(calculateDistance(parkinglat, parkinglong, currentLocation.lat, currentLocation.lng));



 function toRadians(degrees) {
    return degrees * (Math.PI / 180);
 }


  pin = redIcon;



  let dotdiv = hasRealtimeData ? '<div class="custom-div-icon-dot"></div>' : ""

  return Leaflet.divIcon(
    {
      className: 'custom-div-icon',
      html: `<div><img src="${pin}" />${dotdiv}</div>`,
      iconSize: [36, 36]
    }
  )
};
