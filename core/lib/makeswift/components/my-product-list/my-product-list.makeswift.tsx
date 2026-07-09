import { runtime } from '~/lib/makeswift/runtime';

import { MSMyProductList }  from '~/components/my-product-list';

import { Style } from '@makeswift/runtime/controls';

runtime.registerComponent(MSMyProductList, {
  type: 'my-product-list',
  label: 'Custom / My Product List',
  props: {
    className: Style({ properties: Style.All }),
  },
});
