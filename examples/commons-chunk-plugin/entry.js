import('./dynamic-a').then(dynamic => {
  dynamic('entry-a');
});

import('./dynamic-b').then(dynamic => {
  dynamic('entry-b');
});
