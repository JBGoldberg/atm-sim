let map2json = function ($map) {
  var json = {};

  $map.forEach((value, key) => {
    json[key] = value;
  })

  return json
}

module.exports = {
  map2json
}