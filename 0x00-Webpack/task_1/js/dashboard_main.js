import $ from "jquery";
import _ from "lodash";

$(document).ready(function () {
    const body = $("body");
    body.append("<p>ALX Dashboard</p>");
    body.append("<p>Dashboard data for students</p>");
    body.append("<button>Click to get started</button>");
    body.append("<p id='count'></p>");
    body.append("<p>Copyright - ALX</p>");

    let count = 0;

    function updateCounter() {
        count += 1;
        $('#count').text(`${count} clicks on the button`);
    }

    // Bind the debounced function to the button click
    $('button').on('click', _.debounce(updateCounter, 300));
});

