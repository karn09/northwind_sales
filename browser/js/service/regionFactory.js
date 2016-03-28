salesApp.factory('regionFactory', function($q) {
  var regionObj = {};
  // TODO grab available regions from server
  // HACK: regions are currently hardcoded
  var _regions = ['North', 'East', 'South', 'West'];

  regionObj.getRegions = function() {
    // http://www.codelord.net/2015/09/24/$q-dot-defer-youre-doing-it-wrong/
    return $q.when(_regions);
  };

  // FIXME do not use this, will not validate on server
  regionObj.makeRegion = function(name) {
    // TODO: on make region, update serverside validation
    _regions.push(name);
  };
  return regionObj;
});
