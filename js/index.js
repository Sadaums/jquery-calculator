$(document).ready(function() {



    var $screen = $('#screen');
    var displayText = $screen.text();
    var currentOperator = '';
    var builderArray = [0];


    $('.buttons').on('click', function() {
        var input = $(event.target).text()
        displayText += input
        $screen.text(displayText)
        if (input === 'C') {
            displayText = '';
            $screen.text('');
            builderArray = [0];
            console.log(builderArray);
            return builderArray;
        }

        if (input === '-' || input === '÷' || input === 'x' || input === '+') {
            builderArray.push(displayText);
            builderArray.push(input);
            displayText = '';
            $screen.text('');
            console.log(builderArray);
            return builderArray;
        }
        if (input === '=') {
            builderArray.push(displayText);
            var editedArray = [];
            for (var i = 0; i < builderArray.length; i++) {
                if (builderArray[i].length > 1) {
                    editedArray.push(parseInt(builderArray[i], 10))
                    i++;
                }
                if (builderArray[0] === builderArray[1]) {
                    editedArray.push(builderArray[0]);
                    i++;
                } else {
                    editedArray.push(builderArray[i]);
                }
            }
            console.log(editedArray);
            var total = 0;
            for (var i = 0; i < editedArray.length; i++) {
                if (typeof editedArray[i] === 'number' && typeof editedArray[i + 1] === 'number') {
                    total = editedArray[i + 1];
                    i++;
                    i++;
                }
                if (editedArray[i] === '-' && editedArray[i + 1] === '-') {
                    total -= editedArray[i + 2];
                    i++;
                    i++;
                    i++;
                }
                if (typeof editedArray[i] === 'number') {
                    total += editedArray[i];
                } else if (editedArray[i] === '-') {
                    total -= editedArray[i + 1];
                    i++;
                } else if (editedArray[i] === '+') {
                    total += editedArray[i + 1];
                    i++;
                } else if (editedArray[i] === 'x') {
                    total *= editedArray[i + 1];
                    i++;
                } else if (editedArray[i] === '÷') {
                    total /= editedArray[i + 1];
                    i++;
                } else {
                    i++;
                }
            }
            if (isNaN(total)) {
                total = "ERROR!"
            }
            displayText = total;
            $screen.text(total);
            console.log(total);
            builderArray = [total];
        }
    })
})
