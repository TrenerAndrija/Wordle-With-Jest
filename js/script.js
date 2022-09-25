/* create a table with 6 rows and 5 columns */
var table = document.createElement('table');
table.setAttribute('border','1');
for (var i = 0; i < 6; i++) {
  var row = document.createElement('tr');
  for (var j = 0; j < 5; j++) {
    var cell = document.createElement('td');
    cell.innerHTML = '<b>' + (i * 5 + j) + '</b>';
    row.appendChild(cell);
  }
  table.appendChild(row);
}
document.body.appendChild(table);

/* Cells are grey, squared of 80px 80px */
var cells = table.getElementsByTagName('td');
for (var i = 0; i < cells.length; i++) {
  cells[i].style.backgroundColor = '#ccc';
  cells[i].style.width = '80px';
  cells[i].style.height = '80px';
}

/* cells are half size */
for (var i = 0; i < cells.length; i++) {
  cells[i].style.width = '40px';
  cells[i].style.height = '40px';
}

/* there are no borders */
table.style.border = 'none';

/* Cells have no border */
for (var i = 0; i < cells.length; i++) {
  cells[i].style.border = 'none';
}

/* Text is centered */
for (var i = 0; i < cells.length; i++) {
  cells[i].style.textAlign = 'center';
}

/* text is white */
for (var i = 0; i < cells.length; i++) {
  cells[i].style.color = 'white';
}

/* text is font Helvetica and bold */
for (var i = 0; i < cells.length; i++) {
  cells[i].style.fontFamily = 'Helvetica';
  cells[i].style.fontWeight = 'bold';
}

/* cells have no padding */
for (var i = 0; i < cells.length; i++) {
  cells[i].style.padding = '0px';
}

/* cells are empty */
for (var i = 0; i < cells.length; i++) {
  cells[i].innerHTML = '';
}

/* add an input text field under the table */
var input = document.createElement('input');
input.setAttribute('type','text');
input.setAttribute('placeholder','Write Something');
document.body.appendChild(input);

/* add margin reduce text field width to 100px */
input.style.margin = '10px';
input.style.width = '100px';

/*add a button by the field with the 'tick' character. The Button must have un id named 'validate' */
var button = document.createElement('button');
button.innerHTML = '&#10003;';
button.id = 'validate';
document.body.appendChild(button);

/* add another button with id 'remove' and the 'x' character as label */
var button = document.createElement('button');
button.innerHTML = '&#10007;';
button.id = 'remove';
document.body.appendChild(button);

/* center box text */
input.style.textAlign = 'center';

/* we cannot write more than 5 characters in the input field */
input.setAttribute('maxlength','5');

/* create variable named 'rowIndex' starting at 0 */
var rowIndex = 0;

/* when entering text in the box, convert it to uppercase */
input.addEventListener('keyup', function(event) { 
  event.target.value = event.target.value.toUpperCase();
});

/* after writing on the text field,
the value from every character will be writen
on each cell of the selected row */
input.addEventListener('keyup', function(event) {
  var text = event.target.value;
  var cells = document.querySelectorAll('td');
  for (var i = 0; i < cells.length; i++) {
    if (i >= rowIndex * 5 && i < (rowIndex + 1) * 5) {
      cells[i].innerHTML = text.charAt(i - rowIndex * 5);
    }
  }
});

/* store in a variable the secret word 'PAPER' */
var secretWord = 'PAPER';

/* When clicking validate button, 
we need to check if the characters of the chosen row
are included in the secret word. 
If they are, the cell should be marked as yellow (#edc953) */
document.getElementById('validate').addEventListener('click', function(event) { 
  var cells = document.querySelectorAll('td');
  for (var i = 0; i < cells.length; i++) {
    if (i >= rowIndex * 5 && i < (rowIndex + 1) * 5) {
      if (secretWord.indexOf(cells[i].innerHTML) >= 0) {
        cells[i].style.backgroundColor = '#edc953';
      }
    }
  }
});

// if character is in right position, cell should be in green (#aedb95)
document.getElementById('validate').addEventListener('click', function(event) {
  for (var i = 0; i < cells.length; i++) {
    if (i >= rowIndex * 5 && i < (rowIndex + 1) * 5) {
      if (secretWord.charAt(i - rowIndex * 5) === cells[i].innerHTML) {
        cells[i].style.backgroundColor = '#aedb95';
      }
    }
  }
});

/* when clicking validate button, rowIndex variable increases */
document.getElementById('validate').addEventListener('click', function(event) {
  rowIndex++;
});

// when pushing remove button, every letter is erased, rowIndex goes to 0 and all cells turn gray 
document.getElementById('remove').addEventListener('click', function(event) {
  var cells = document.querySelectorAll('td');
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerHTML = '';
    cells[i].style.backgroundColor = '#ccc';
  }
  rowIndex = 0;
});

var words = ['TOOLS', 'SUPER', 'FAKER', 'CATCH', 'CRIED'];

/* when pressing remove, chose randomly the secret word from the words collection */ 
document.getElementById('remove').addEventListener('click', function(event) {
  var randomIndex = Math.floor(Math.random() * words.length);
  secretWord = words[randomIndex];
});
