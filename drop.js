const image_input = document.querySelector("#image-input");
image_input.addEventListener("change", function() {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    const uploaded_image = reader.result;
    document.querySelector("#display-image").style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});
// the image thing


document.getElementById('btnGo').addEventListener('click', (ev) => {
  const output = document.getElementById('result');

  if (!'EyeDropper' in window) {
    output.textContent = 'Sorry. No support for the Eyedropper API';
    return;
  }

  const dropper = new EyeDropper();
  const abortController = new AbortController();
//cancel the eyedropper

  dropper
    .open({ signal: abortController.signal })
    .then((result) => {
      console.log(result.sRGBHex);
      output.textContent = result.sRGBHex;
      output.style.borderLeftColor = result.sRGBHex;
    })
    .catch((err) => {
      output.textContent = err;
      output.style.borderLeftColor = `transparent`;
    });
});