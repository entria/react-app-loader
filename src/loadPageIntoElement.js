// @flow

const loadPageIntoElement = (elementId: string, appUrl: string) => {
  const element = document.getElementById(elementId);
  const emptyArray = [];
  let xmlHttp = new XMLHttpRequest();
  xmlHttp.onreadystatechange = () => {
    if (xmlHttp.readyState === 4 && xmlHttp.status === 200 && element != null && element.innerHTML != null) {
      element.innerHTML = xmlHttp.responseText;
      emptyArray.forEach.call(element.querySelectorAll('script'), nonExecutableScript => {
        let script = document.createElement('script');
        script.setAttribute('src', nonExecutableScript.src);
        script.setAttribute('type', 'text/javascript');
        element.appendChild(script);
        nonExecutableScript.parentNode.removeChild(nonExecutableScript);
      });
    }
  };
  xmlHttp.open('GET', appUrl, true);
  xmlHttp.send(null);
};

export default loadPageIntoElement;
