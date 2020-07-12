import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import Bounce from '../Bounce';
import { bouncePrivateDriverFactory } from './Bounce.private.uni.driver';

describe(Bounce.displayName, () => {
  const render = createRendererWithUniDriver(bouncePrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<Bounce />);

    expect(await driver.exists()).toBe(true);
    expect(await driver.getButtonText()).toEqual('Click me!');
  });

  it('should increment', async () => {
    const { driver } = render(<Bounce />);

    await driver.clickButton();
    await driver.clickButton();

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<Bounce buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
