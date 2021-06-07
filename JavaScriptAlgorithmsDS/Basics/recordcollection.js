//Your function must always return the entire record collection object.
// If prop isn't tracks and value isn't an empty string, update or set that album's prop to value.
// If prop is tracks but the album doesn't have a tracks property, create an empty array and add value to it.
// If prop is tracks and value isn't an empty string, add value to the end of the album's existing tracks array.
// If value is an empty string, delete the given prop property from the album.

// Setup
var recordCollection = {
    2548: {
      albumTitle: 'Slippery When Wet',
      artist: 'Bon Jovi',
      tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
      albumTitle: '1999',
      artist: 'Prince',
      tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
      artist: 'Robert Palmer',
      tracks: []
    },
    5439: {
      albumTitle: 'ABBA Gold'
    }
  };
  
  
  // console.log(recordCollection[5439]["tracks"])
  // Only change code below this line
  function updateRecords(records, id, prop, value) {
    if(prop == "tracks" && recordCollection[id][prop] != undefined) {
      var trackArray = recordCollection[id][prop]
      records[id][prop] = trackArray;
      trackArray.push(value);
    }
    if(prop == "tracks" && recordCollection[id][prop] == undefined) {
      var trackArray = [];
      records[id][prop] = trackArray;
      trackArray.push(value);
    }
    if(records[id] != null && prop != "tracks") {
      records[id][prop] = value;
    }
    if(value == "") {
      delete records[id][prop];
    }
  
    // console.log(records)
    return records;
  }
  
  // updateRecords(recordCollection, 5439, 'artist', 'ABBA');
  // updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
  // updateRecords(recordCollection, 2548, "artist", "");
  // console.log(recordCollection[1245])
  updateRecords(recordCollection, 2548, "artist", "")
  updateRecords(recordCollection, 2548, "tracks", "")
  console.log(recordCollection[2548])