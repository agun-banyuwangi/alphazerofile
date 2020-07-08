$(function () {
  $('#typed').typed({
    strings: [
      'Welcome to the home of surfing!',
      'Looking for a custom surfing course suited your level?',
      'You come  to the right place!',
      'Start from IDR 400K!',
    ],
    typeSpeed: 30,
    backDelay: 500,
    loop: false,
    contentType: 'html', // or text
    // defaults to false for infinite loop
    loopCount: false,
    callback: function () {
      foo()
    },
    resetCallback: function () {
      newTyped()
    },
  })

  $('.reset').click(function () {
    $('#typed').typed('reset')
  })
})

function newTyped() {
  /* A new typed object */
}

function foo() {
  console.log('Callback')
}
