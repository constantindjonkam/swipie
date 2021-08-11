const fs = require('fs');

const fileData = fs.readFileSync(
  '/Users/constantin/Desktop/swipie/node_modules/react-native/react.gradle',
  {encoding: 'utf8'},
);
const fileDataArray = fileData.split('\n');

if (
  fileDataArray[148].includes('doLast') ||
  fileDataArray[149].includes('doLast') ||
  fileDataArray[150].includes('doLast')
)
  console.log('Already include doLast');
else {
  const newData = `
            doLast {
                def moveFunc = { resSuffix ->
                File originalDir = file("$buildDir/generated/res/react/release/${'${resSuffix}'}");
                if (originalDir.exists()) {
                File destDir = file("$buildDir/../src/main/res/${'${resSuffix}'}");
                ant.move(file: originalDir, tofile: destDir);
                }
                }
                moveFunc.curry("drawable-ldpi").call()
                moveFunc.curry("drawable-mdpi").call()
                moveFunc.curry("drawable-hdpi").call()
                moveFunc.curry("drawable-xhdpi").call()
                moveFunc.curry("drawable-xxhdpi").call()
                moveFunc.curry("drawable-xxxhdpi").call()
                moveFunc.curry("raw").call()
            }
`;
  const index = 148; // after each row to insert your data

  fileDataArray.splice(index, 0, newData); // insert data into the array

  const newFileData = fileDataArray.join('\n'); // create the new file

  fs.writeFileSync(
    '/Users/constantin/Desktop/swipie/node_modules/react-native/react.gradle',
    newFileData,
    {encoding: 'utf8'},
  ); // save it
}
