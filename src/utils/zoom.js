export const zoom = () => {
  const model = document.getElementById('model');

  // ----- ZOOM -----
  const zoomValue = document.getElementById('zoom-value');
  let view = null;

  let maxFieldOfView = model.getAttribute('max-field-of-view');
  // let minFieldOfView = model.getAttribute('min-field-of-view');

  maxFieldOfView = Number(maxFieldOfView.substr(0, 2));
  // minFieldOfView = Number(minFieldOfView.substr(0, 2));

  const eventFunc = () => {
    view = model.getFieldOfView();
    view = ((view - maxFieldOfView) * 100) / (maxFieldOfView - 45);

    if (Math.sign(view) === -1) view *= -1;

    zoomValue.innerHTML = `${view.toFixed(0)}%`;
  };

  const setEvent = () => {
    model.addEventListener('camera-change', eventFunc, false);
  };

  const removeEvent = () => {
    model.removeEventListener('camera-change', eventFunc);
  };

  return {
    setEvent,
    removeEvent,
  };
};
