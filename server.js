var path = require('path'), fs=require('fs');

fs.readFile('./PROJECTS/ART/Heroes/20181218_BestSellers/index.html', 'utf8', function read(err, data) {
    if (err) {
        throw err;
    }
    content = data;

    // Invoke the next step here however you like
    //console.log(content);   // Put all of the code here (not the best solution)
    //processFile();          // Or put the next step in a function and invoke it
});

// Folder
const projectFolder = './PROJECTS/ART/Heroes/';
const projects = [];

fs.readdir(projectFolder, (err, files) => {
  files.forEach(file => {
    console.log(fs.statSync(projectFolder + file).isDirectory());
    // Making sure 
    if (fs.statSync(projectFolder + file).isDirectory()) {
      projects.push(projectFolder + file + '/index.html');
    }
  });

  processFile();
})

function processFile() {
    console.log(projects);
    var header = '<head><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>';

    var content = "<body>";

    projects.forEach(function(path) {
      content += '<iframe src="' + path +'" width="100%" height="667px"></iframe>';
    });

    content += "</body>";

    var fileName = 'index.html';
    var stream = fs.createWriteStream(fileName);
    stream.once('open', function(fd) {
    var html = header + content;

    stream.end(html);
});
}
