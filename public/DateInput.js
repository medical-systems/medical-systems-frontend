// public/dateInputScript.js
function disableFridays() {
    var input = document.getElementById('date');
    input.addEventListener('input', function () {
      var selectedDate = new Date(this.value);
      if (selectedDate.getDay() === 5) { // 5 represents Friday (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
        alert('Friday is a day off, Please choose another day');
        this.value = ''; // Clear the input value
      }
    });
  }
  
  export default disableFridays;