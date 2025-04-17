# bmath.js
bmath (Better math) is module, that providing alternative calculations. Perfectly used for accurate calculations.
## Simple demo
```javascript
// 5 * 5
var five = bmath.toBint(5); // convert decimal to factor using bmath.toBint
console.log(bmath.toDec(bmath.multiply(five, five))); // Console log decimal version of multiplications using bmath.multiply of 5 and 5
```
### Calculator
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>HTML5 Calculator</title>
    <script src="bmath.js"></script>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }
        input, select {
            margin: 5px;
            padding: 10px;
            width: 200px;
        }
        button {
            padding: 10px 15px;
        }
        #result {
            margin-top: 20px;
            font-weight: bold;
        }
    </style>
</head>
<body>

<h1>Calculator</h1>
<div>
    <input type="text" id="num1" placeholder="Enter first number" />
    <input type="text" id="num2" placeholder="Enter second number" />
    <select id="operation">
        <option value="plus">+</option>
        <option value="minus">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
    </select>
    <button onclick="calculate()">Calculate</button>
</div>

<div id="result"></div>

<script>
    function calculate() {
        const num1 = parseFloat(document.getElementById('num1').value);
        const num2 = parseFloat(document.getElementById('num2').value);
        const operation = document.getElementById('operation').value;

        const drob1 = bmath.toBint(num1);
        const drob2 = bmath.toBint(num2);
        let result;

        switch (operation) {
            case 'plus':
                result = bmath.plus(drob1, drob2);
                break;
            case 'minus':
                result = bmath.minus(drob1, drob2);
                break;
            case 'multiply':
                result = bmath.multiply(drob1, drob2);
                break;
            case 'divide':
                result = bmath.divide(drob1, drob2);
                break;
            default:
                result = [0, 0, 1]; // Default to zero if no operation is selected
        }

        const decimalResult = bmath.toDec(result);
        document.getElementById('result').innerText = `Result: ${decimalResult}`;
    }
</script>

</body>
</html>
```
