# Slider

Storybook live version: [https://react-slider-diogo.netlify.app/](https://react-slider-diogo.netlify.app/)

## How to install
This lib has been published as `react-slider-diogo`.

To install it run `npm install react-slider-diogo`.

## How to use it
After installing the package you can use it like

```
import React from 'react';

import Slider from 'react-slider-diogo';

function App() {
  return (
    <div>
      <Slider>
        <img key="Example 1" src="https://picsum.photos/seed/pic/1700/200" alt="Example 1" />
        <img key="Example 2" src="https://picsum.photos/seed/sum/1700/300" alt="Example 2" />
        <div key="Example 3">Example 3</div>
        <img key="Example 4" src="https://picsum.photos/seed/picsum/1700/500" alt="Example 5" />
      </Slider>
    </div>
  );
}

export default App;
```

## How to run the project

### build
`npm run build` - This command will run the build and copy the lib to the `dist` folder

### storybook
This project has been documented using storybook.

There are two options for running the storybook:

- `npm run storybook` - This will run the storybook and expose it at `localhost:6006`

- `npm run publish-storybook` - This will compile the storybook and copy the files to the folder `storybook-static`