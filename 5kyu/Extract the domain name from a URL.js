/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"
*/

function domainName(url) {
  if (url.includes("//") && !url.includes("www")) {
    var a = url.split("//");
    var b = a[1].split(".");
    return b[0];
  } else if (url.includes("www")) {
    var c = url.split(".");
    return c[1];
  } else {
    var d = url.split(".");
    return d[0];
  }
  // Another Solution:
  //url = url.replace("https://", "");
  //url = url.replace("http://", "");
  //url = url.replace("www.", "");
  //return url.split(".")[0];
}
