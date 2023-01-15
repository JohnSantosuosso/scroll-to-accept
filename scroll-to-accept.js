//We'll use the overflow element from the terms-and-conditions class
//to check for the scroll event

const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch'); //just a test to see when this class is visible on page
const button = document.querySelector('.accept'); //select button

//intersection observer
//used to test when something is on or off the page
//intersection observer will take a callback which will be fired every time it needs to check
//if something is on the page.  Return a payload
function obCallback(payload) {
  console.log(payload[0].intersectionRatio)//will return a percent of how much it's on page, the first item of our payload
  if(payload[0].intersectionRatio === 1) {
    button.disabled = false;
  }
  // console.log(payload[0].isIntersecting)
  //if we call payload[0].isIntersecting we'll see a boolean of true/false if payload is on page
  //we can also call payload[0].intersectionRatio to see if we're at bottom
}
//Sample watching event
// const ob = new IntersectionObserver(obCallback);
//won't do anything yet because IntersectionObserver is just a watcher
//it watches for elements and we've only passed it a function so far

// ob.observe(watch); //we pass it something to watch for -- in this case--the strong tag
//this will get logged everytime we see it on the page

//Code continued--
//We want it to tell us when it's 100 percent on page
const ob = new IntersectionObserver(obCallback, {
  root: terms, //what we're scrolling with, the root--terms
  threshold: 1, //
});

ob.observe(terms.lastElementChild); //we want to see when last paragraph is observed


terms.addEventListener('scroll', function(e) {
  //console.log(e.currentTarget.scrollHeight); //will tell us how high actually scrolling thing is
  //console.log(e.currentTarget.scrollTop);// will tell how far we've scrolled from top
  //Instead of using what we have above, we will use something called intersection observer



});
