window.onload = () => {
  const illustrations = document.getElementsByClassName("copy-illustration");

  let current = 0;
  setInterval(() => {
    current = current + 1 === illustrations.length ? 0 : current + 1;
    for (var index = 0; index < illustrations.length; index++) {
      if (index === current) {
        illustrations.item(index).setAttribute("style", "opacity: 0");
      } else {
        illustrations.item(index).setAttribute("style", "opacity: 1");
      }
    }
  }, 3000);
};
