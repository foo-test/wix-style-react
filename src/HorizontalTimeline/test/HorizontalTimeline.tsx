import * as React from 'react';
import HorizontalTimeline from '..';
import {horizontalTimelineTestkitFactory} from '../../../testkit';
import {horizontalTimelineTestkitFactory as horizontalTimelineEnzymeTestkitFactory} from '../../../testkit/enzyme';
import {horizontalTimelineTestkitFactory as horizontalTimelinePuppeteerTestkitFactory} from '../../../testkit/puppeteer';
import * as enzyme from 'enzyme';
import * as puppeteer from 'puppeteer';

function horizontalTimelineWithMandatoryProps() {
  return <HorizontalTimeline steps={[
    {
      label: 'Step 1',
      icon: <HorizontalTimeline.CompletedIcon />,
    },
    {
      label: 'Step 2',
      icon: <HorizontalTimeline.ActiveIcon />,
    },
    {
      label: 'Step 3',
    }
  ]}/>;
}

function horizontalTimelineWithAllProps() {
  return (
    <HorizontalTimeline
      dataHook="dataHook"
      className="className"
      steps={[
        {
          label: 'Step 1',
          icon: <HorizontalTimeline.CompletedIcon />,
        },
        {
          label: 'Step 2',
          icon: <HorizontalTimeline.ActiveIcon />,
        },
        {
          label: 'Step 3',
        }
      ]}/>
  );
}

async function testkits() {
  const testkit = horizontalTimelineTestkitFactory({
    dataHook: 'hook',
    wrapper: document.createElement('div'),
  });

  const enzymeTestkit = horizontalTimelineEnzymeTestkitFactory({
    dataHook: 'hook',
    wrapper: enzyme.mount(<div />),
  });

  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  const puppeteerTestkit = await horizontalTimelinePuppeteerTestkitFactory({
    dataHook: 'hook',
    page,
  });
}