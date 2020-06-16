import path from 'path'

const weightVals = {
  "Light": 300,
  "Regular": 400,
  "Medium": 500,
  "SemiBold": 500,
  "Bold": 700
}

const getWeight = (name) => {
  let v = 400
  const pts = name.split("-")
  
  if (pts > 1) {
    Object.keys(weightVals).map(w => {
      if (pts[1].indexOf(w) > -1) { v = weightVals[w] }
    })
  } 
  return v
}

export const loadFont = (file, name) => {
  // const fp = path.parse(file)
  // const name = fp.name

  console.log('BASENAME', name)

  const iconFontStyles = `@font-face {
    src: url(${file});
    font-family: "${name}";
    font-weight: ${getWeight(name)};
    font-style: ${name.toLowerCase().indexOf('italic') > -1 ? "italic" : "normal"};
  }`;

  // Create stylesheet
  const style = document.createElement('style');
  style.type = 'text/css';
  if (style.styleSheet) {
      style.styleSheet.cssText = iconFontStyles;
  } else {
      style.appendChild(document.createTextNode(iconFontStyles));
  }

  // Inject stylesheet
  document.head.appendChild(style);
}


const fontTypes = ['.woff', '.woff2', '.ttf', '.eot', '.svg']
const browseFolder = (dir, done) => {
  let results = [];

  fs.readdir(dir, function(err, list) {
    if (err) return done(err);

    var pending = list.length;

    if (!pending) return done(null, results);

    list.forEach(function(file){
      file = path.resolve(dir, file);

      console.log('file', file)

      fs.stat(file, function(err, stat){
        // If directory, execute a recursive call
        if (stat && stat.isDirectory()) {
          // Add directory to array [comment if you need to remove the directories from the array]
          results.push(file);

          filewalker(file, function(err, res){
              results = results.concat(res);
              if (!--pending) done(null, results);
          });
        } else {
          if (fontTypes.indexOf(path.parse(file).ext > -1)) {
            loadFont(file)
            results.push(file);
          }

          if (!--pending) done(null, results);
        }
      });
    });
  });
};

export const loadFontsFromDirectories = (dirs) => {
  console.log("HELLOOOO!!!")
  return dirs.map(d => browseFolder(d))

  const style = document.write("<script>alert('boobs')</script>");

  // Inject stylesheet
  document.head.appendChild(style);
}