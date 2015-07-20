function ajaxReq() {
  'use strict';

  // ajaxReq(url, options);

  // ajaxReq(url, {
  //     method: “POST”,
  //     async: true   --> extra param
  //     data: {},
  //     context: this,
  //     failure: function() {},
  //     success: function() {},
  //     complete: function() {}
  // });

  var url = arguments[0];

  var options = arguments[1];

  var xhr = new XMLHttpRequest();

  xhr.onreadystatechange = function() {

    // completed
    if (xhr.readyState === 4) {

      // success
      if (xhr.status === 200) {
        options.success.call(options.context, JSON.parse(xhr.responseText), xhr.status,  xhr);
      }

      // failure
      else {
        // console.log(xhr);
        options.failure.call(options.context, xhr, xhr.status, xhr.responseText);
      }

      options.complete.call(options.context, xhr.status, xhr);
    }
  };

  xhr.open((options.method) ? options.method : 'GET', url, (options.async) ? options.async : true);
  xhr.send();
}
