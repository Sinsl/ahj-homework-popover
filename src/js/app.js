import './popover/css/popover.css';
import createElement from './popover/funcCreateEl';
import Popover from './popover/Popover';

createElement();

const arrPopoverEl = [];
document.querySelectorAll('[data-toggle="popover"]').forEach((elem) => {
  // eslint-disable-next-line no-new
  arrPopoverEl.push(new Popover(elem));
});

arrPopoverEl[1].setOptions({ trigger: 'focus' });
arrPopoverEl[2].setOptions({ trigger: 'hover' });
arrPopoverEl[3].setOptions({ placement: 'top' });
arrPopoverEl[4].setOptions({ placement: 'right' });
arrPopoverEl[5].setOptions({ placement: 'bottom' });
arrPopoverEl[6].setOptions({ placement: 'left' });
arrPopoverEl[8].setOptions({ placement: 'bottom' });
arrPopoverEl[9].setOptions({ title: 'fontawesome' });
arrPopoverEl[10].setOptions({ title: 'SVG', placement: 'bottom' });
