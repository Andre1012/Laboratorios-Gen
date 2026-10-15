const linkInfoButton = document.getElementById("link-info");

linkInfoButton.addEventListener("click", () => {
  const links = document.querySelectorAll("a");
  const firstLink = links[0];
  const lastLink = links[links.length - 1];

  alert(
    `Number of links: ${links.length}\n` +
    `First link: ${firstLink.href}\n` +
    `Last link: ${lastLink.href}`,
  );
});