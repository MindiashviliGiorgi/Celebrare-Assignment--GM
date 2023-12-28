// btns
const cancelBtn = document.getElementById('cancelBtn')
const saveBtn = document.getElementById('saveBtn')

// title text
let titleText = document.getElementById('mainText');

// selects & input
const fontChanger = document.getElementById('selectFont')
const sizeChanger = document.getElementById('fontSize')
const colorChanger = document.getElementById('fontColor')
const textChanger = document.getElementById('titleText')

// font familys array
const fontFamilyList = [
  "monospace",
  "serif",
  "cursive"
];
// colors array
const colorList = [
  'red',
  'black',
  'purple',
  'yellow',
  'green',
  'gray',
  'blue',
  'pink'
]

// Create fonts for font select
function createOptionsForFont() {
  for (let i = 0; i < fontFamilyList.length; i++) {
    let option = document.createElement('option');
    option.value = fontFamilyList[i];
    option.text = fontFamilyList[i];
    fontChanger.add(option)
  }
};

// create option elements for selectFont
function createOptionsForSize() {
  for (let i = 40; i <= 120; i++) {
    let option = document.createElement('option');
    option.value = i + 'px';
    option.text = i + 'px';
    sizeChanger.add(option)
  }
};

// create option elements for colors
function createOptionsForColor() {
  for (let i = 0; i < colorList.length; i++) {
    let option = document.createElement('option');
    option.value = colorList[i];
    option.text = colorList[i];
    colorChanger.add(option)
  }
}

// change title text with input value
function changeText() {
  titleText.textContent = textChanger.value;
  if (textChanger.value === '') {
    titleText.textContent = 'Title Text'
  }
}

// change text font family
function changeFontFamily() {
  titleText.style.fontFamily = fontChanger.value;
}

// change text font size
function changeFontSize() {
  titleText.style.fontSize = sizeChanger.value;
}

// change text color
function changeTextColor() {
  titleText.style.color = colorChanger.value;
}

// save changes in localStorage
function saveChanges() {
  localStorage.setItem('savedText', titleText.textContent || 'Title Text');
  localStorage.setItem('savedFontFamily', titleText.style.fontFamily);
  localStorage.setItem('savedFontSize', titleText.style.fontSize);
  localStorage.setItem('savedFontColor', titleText.style.color);
}

// load changes from localStorage
function loadChanges() {
  titleText.textContent = localStorage.getItem('savedText') || 'Title Text';
  titleText.style.fontFamily = localStorage.getItem('savedFontFamily') || '';
  titleText.style.fontSize = localStorage.getItem('savedFontSize') || '';
  titleText.style.color = localStorage.getItem('savedFontColor') || '';
}

// cancel Update / clearn localStorage
function cancelUpdates() {
  localStorage.clear()
  location.reload();
}

createOptionsForFont();
createOptionsForSize();
createOptionsForColor();

loadChanges();

