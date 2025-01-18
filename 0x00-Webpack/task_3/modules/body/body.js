import $ from 'jquery';
import _ from 'lodash';
import './body.css';

function updateCounter() {
  let count = 0;
  return () => {
    count += 1;
    $('#count').text(`${count} clicks on the button`);
  };
}

$('body').append(`
  <button>Click here to get started</button>
  <p id="count"></p>
`);

const countUpdate = _.debounce(updateCounter(), 500);
$('button').on('click', countUpdate);

