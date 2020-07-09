import * as React from 'react';

export type HorizontalTimelineItemType = 'active' | 'inactive';

interface HorizontalTimelineItem {
  type?: HorizontalTimelineItemType;
  label: string;
  icon?: React.ReactNode;
  width?: React.CSSProperties['width'];
}

export interface HorizontalTimelineProps {
  dataHook?: string;
  className?: string;
  items: HorizontalTimelineItem[];
}

export default class HorizontalTimeline extends React.PureComponent<
  HorizontalTimelineProps
> {
  static DefaultIcon: React.FC;
  static ActiveIcon: React.FC;
  static DestructiveIcon: React.FC;
  static CompleteIcon: React.FC;
}
