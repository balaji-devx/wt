
      function autoCalculateSum() {
        const val1 = document.getElementById("num1").value;
        const val2 = document.getElementById("num2").value;

        if (val1 !== "" && val2 !== "") {
          const sum = parseFloat(val1) + parseFloat(val2);
          document.getElementById("result").value = sum;
        } else {
          document.getElementById("result").value = "";
        }
      }

      function calculate(operation) {
        const val1 = document.getElementById("num1").value;
        const val2 = document.getElementById("num2").value;

        if (val1 === "" || val2 === "") {
          alert("Please enter both numbers before calculating.");
          return;
        }

        const a = parseFloat(val1);
        const b = parseFloat(val2);
        let result;

        switch (operation) {
          case "add":
            result = a + b;
            break;
          case "subtract":
            result = a - b;
            break;
          case "multiply":
            result = a * b;
            break;
          case "divide":
            if (b === 0) {
              alert("Error: Cannot divide by zero.");
              return;
            }
            result = a / b;
            break;
        }
        document.getElementById("result").value = result;
      }

      function clearFields() {
        document.getElementById("num1").value = "";
        document.getElementById("num2").value = "";
        document.getElementById("result").value = "";
      }
