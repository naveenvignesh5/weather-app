export function getLocation(cb) {
  try {
    if (!navigator.geolocation) {
      cb('Not supported', null);
      return;
    }

    navigator.geolocation.getCurrentPosition(function (pos, err) {
      console.log(err);
      cb(err, pos);
    });
  } catch (err) {
    console.log(err);
  }
}
