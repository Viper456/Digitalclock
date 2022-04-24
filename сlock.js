function updateClock() {
   var now = new Date();
   var dname = now.getDay(),
      mo = now.getMonth(),
      dnum = now.getDate(),
      yr = now.getFullYear(),
      h = now.getHours(),
      min = now.getMinutes(),
      sec = now.getSeconds(),
      pe = "AM";

   if (h == 0) {
      h = 12;
   }
   if (h > 12) {
      h -= 12;
      pe = "PM";
   }

   Number.prototype.pad = function (digits) {
      for (var n = this.toString(); n.length < digits; n = 0 + n) return n;
   };

   var month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
   ];
   var week = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
   ];
   var ids = [
      "dayname",
      "month",
      "daynum",
      "year",
      "hour",
      "minutes",
      "seconds",
      "period",
   ];
   var values = [
      week[dname],
      month[mo],
      dnum.pad(2),
      yr,
      h.pad(2),
      min.pad(2),
      sec.pad(2),
      pe,
   ];
   for (var i = 0; i < ids.length; i++) {
      document.getElementById(ids[i]).firstChild.nodeValue = values[i];
   }
}

function initClock() {
   updateClock();
   window.setInterval("updateClock()", 1);
}

initClock();
