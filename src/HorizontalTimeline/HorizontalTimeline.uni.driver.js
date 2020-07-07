import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { dataHooks } from './constants';

export const horizontalTimelineDriverFactory = (base, body) => {
  return {
    ...baseUniDriverFactory(base, body),

    /** Get the current count */
    getCountText: async () =>
      base.$(`[data-hook="${dataHooks.horizontalTimelineCount}"]`).text(),

    /** Click the button */
    clickButton: async () =>
      base.$(`[data-hook="${dataHooks.horizontalTimelineButton}"]`).click(),

    /** Get the button's text */
    getButtonText: async () =>
      base.$(`[data-hook="${dataHooks.horizontalTimelineButton}"]`).text(),
  };
};
