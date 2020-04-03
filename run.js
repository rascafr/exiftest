const exiftool = require('node-exiftool');
const ep = new exiftool.ExiftoolProcess();

const IMG_PATH = './inputImg.jpg';

ep
  .open()
  // display pid
  .then((pid) => console.log('Started exiftool process %s', pid))
  .then(() => ep.writeMetadata(IMG_PATH, {
   //all: '', // remove existing tags
    //comment: 'Exiftool example',
    Make: 'Kikiki',
    Model: 'Tabouret',
    GPSLatitude: `46 deg 11' 14.7" N`,
    GPSLongitude: `6 deg 45' 53.1" E`,
    GPSPosition: `46 deg 11' 14.7" N, 6 deg 45' 53.1" E`
  }))
  .then(() => ep.readMetadata(IMG_PATH, ['-File:all']))
  .then(console.log, console.error)
  /*.then(() => ep.readMetadata('photo2.jpg', ['-File:all']))
  .then(console.log, console.error)*/
  .then(() => ep.close())
  .then(() => console.log('Closed exiftool'))
  .catch(console.error)