export function getLocation(cb) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (pos, err) {
      cb(err, pos);
    });
  } else {
    cb('Not supported', null);
  }
}
