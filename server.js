var path = require('path'),
  fs = require('fs');

// Input Folder
const projectFolder = './PROJECTS/ART/Heroes/';
const projects = [];

fs.readdir(projectFolder, (err, files) => {
  files.forEach(file => {
    console.log(fs.statSync(projectFolder + file).isDirectory());
    // Making sure its a directory
    if (fs.statSync(projectFolder + file).isDirectory()) {
      projects.push(projectFolder + file + '/index.html');
    }
  });

  processFile();
})

function processFile() {
  console.log(projects);
  var header = '<head> \
      <meta name="viewport" content="width=device-width, initial-scale=1.0"> \
      <link rel="stylesheet" href="./styles.css"> \
      </head>';

  var content = "<body>";

  // Ordering with most current on top
  var sortedProjects = projects.reverse();
  sortedProjects.forEach(function (path) {

    // Formatting the Date/Title displayed
    var fragLength = path.split("/");
    var frag = fragLength[fragLength.length - 2].split("_");
    console.log(frag);
    var title = '';

    // Separates the title by the underscores
    for (var i = 1; i < frag.length; i++) {
      title += frag[i] + ' ';
    }

    var formattedDate = frag[0].substring(4, 6) + '/' + frag[0].substring(6, 8) + '/' + frag[0].substring(0, 4);

    // Writing each individual Hero Unit
    content += '<div class="hero-unit"> \
        <h1>' + formattedDate + ' ' + title + '</h1> \
        <iframe src="../' + path + '" width="100%" height="667px"></iframe> \
        </div>';
  });

  content += "</body>";

  var fileName = 'index.html';
  var stream = fs.createWriteStream('./GALLERIES/' + fileName);
  stream.once('open', function (fd) {
    var html = header + content;

    stream.end(html);
  });
}