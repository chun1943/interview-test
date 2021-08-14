/**
 * implementation for debounce
 */
var timer = null;

function delayThing() {
  console.log("trigger callback after delay");
}
function debounce(delayThing, delayTime) {
  console.log("debounce");
  clearTimeout(timer);
  timer = setTimeout(() => {
    delayThing();
  }, delayTime);
}

/**
 * test for debounce
 */
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function testDebounce() {
  // call debounce first time
  debounce(delayThing, 3000);
  await sleep(1000);

  // call debounce second time after 1000ms
  debounce(delayThing, 3000);
}

testDebounce();
