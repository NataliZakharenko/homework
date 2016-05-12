var timer = document.querySelector('.timer');
var miliSec = document.querySelector('span');
var controlButton = document.querySelector('.start-pause');
var clearButton = document.querySelector('.clear');
var watch = new StopWatch(timer);

controlButton.addEventListener('click', startPause);
function startPause() {
  if (watch.isOn) {
    watch.pause();
    controlButton.innerHTML = 'Continue';
  } else {
    watch.start();
    controlButton.innerHTML = 'Pause';
  }
};

clearButton.addEventListener('click', clearTimer);
function clearTimer() {
  watch.clear();
  digits.innerHTML = '00:00:00';
  miliSec.innerHTML = '0';
  controlButton.innerHTML = 'Start';
}


function StopWatch(elem) {
  var time = 0;
  var interval;
  var startTime;
  var hour;
  var min;
  var sec;
  var msec;

  
  function update() {
    time += delta();
    timeFormat(time);
    var globTime = hour + ':' + min + ':' + sec;
    elem.querySelector('p').innerHTML = globTime;
    elem.querySelector('span').innerHTML = msec;
  };
  
  function delta() {
      var now = Date.now();
      var timePassed = now - startTime;
      startTime = now;
      return timePassed;
    };

 
  function timeFormat(timeInMSec) {
    var newTime = new Date(timeInMSec);
    msec = newTime.getMilliseconds().toString();
    sec = newTime.getSeconds().toString();
    min = newTime.getMinutes();
    hour = (Math.floor(min/60)).toString();
    min = min.toString();

    if (hour.length < 2) {
      hour = '0' + hour;
    }
    if (min.length < 2) {
      min = '0' + min;
    }
    if (sec.length < 2) {
      sec = '0' + sec;
    }
    while (msec.length < 3) {
      msec = '0' + msec;
    }
    return hour, min, sec, msec;
  };

  this.isOn = false; 
  this.start = function() {
    if (!this.isOn) {
      interval = setInterval(update, 10);
      startTime = Date.now();
      this.isOn = true;
    }
  };

  this.pause = function() {
    if (this.isOn) {
      clearInterval(interval);
      interval = 0;
      this.isOn = false;
    }
  };

  this.clear = function() {
    time = 0;
  };
}
