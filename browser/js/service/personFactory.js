// TODO refactor personFactory to interact with rest of codebase instead of relying on a catchall peopleFactory
salesApp.factory('personFactory', function($http, regionFactory) { 
    var personObj = {};
    personObj.updateRegions = function(id, regions) {
        return $http.put('/api/people/' + id, regions)
            .then(function(res) {
                return res.data;
            })
            .catch(function(err) {
                return err;
            })
    };
    personObj.getPerson = function(id) {
        return $http.get('/api/people/' + id)
            .then(function(res) {
                return res.data;
            })
            .catch(function(err) {
                return err;
            });
    };
    
  
    return personObj;
})
