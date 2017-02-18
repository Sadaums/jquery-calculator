$(document).ready(function() {



    var $screen = $('#screen');
    var displayText = $screen.text();
    var currentOperator = '';
    // var currentTotal = 0;
    var builderArray = [];


    $('.buttons').on('click', function() {
        var input = $(event.target).text()
        displayText += input
        $screen.text(displayText)
        if (input === 'C') {
            displayText = '';
            $screen.text('');
            // var currentTotal = 0;
            builderArray = [];
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
                    // push number into final arrray without opperator, and as NOT a string
                    editedArray.push(parseInt(builderArray[i], 10))
                } else {
                    editedArray.push(builderArray[i]);
                }
            }
            var total = 0
            for (var i = 0; i < editedArray.length; i++) {
              if
            }
            displayText = editedArray;
            $screen.text(editedArray);
            console.log(editedArray);
            builderArray = editedArray;
        }
        //   if (input === '-') {
        //     currentTotal -= displayText;
        //   }
        //   if (input === '+') {
        //     currentTotal += displayText;
        //   }
        //   if (input === 'x') {
        //     currentTotal *= displayText;
        //   }
        //   if (input === '÷') {
        //     currentTotal /= displayText;
        //   }
        // }
    })
})
