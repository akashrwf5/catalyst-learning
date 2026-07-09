import { runtime } from '~/lib/makeswift/runtime';

import { Style, Select } from '@makeswift/runtime/controls';

import { MSMyProductCarousel } from '~/components/my-product-carousel';

runtime.registerComponent(MSMyProductCarousel, {
  type: 'my-product-carousel',
  label: 'Custom / My Product Carousel',
  props: {
    className: Style(),
    collection: Select({
        label: 'Product collection',
        options: [
          { value: 'none', label: 'None (static only)' },
          { value: 'best-selling', label: 'Best selling' },
          { value: 'newest', label: 'Newest' },
          { value: 'featured', label: 'Featured' },
        ],
        defaultValue: 'featured',
      }),
  }
});
