
function route(process, pathname, response, postData) {
  if (typeof process[pathname] === 'function' ) {
    return process[pathname](response, postData);
  } else {
    console.log("no processor found for " + pathname);
    return "error"
  }
}

exports.route = route;
