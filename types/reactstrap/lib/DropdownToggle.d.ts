import * as React from 'react';
import { CSSModule } from '../index';

export interface DropdownToggleProps extends React.HTMLAttributes<HTMLElement> {
  caret?: boolean;
  className?: string;
  cssModule?: CSSModule;
  disabled?: boolean;
  onClick?: React.MouseEventHandler<any>;
  outline?: boolean;
  'data-toggle'?: string;
  'aria-haspopup'?: boolean;
  split?: boolean;
  tag?: React.ReactType;
  nav?: boolean;
  color?: string;
  size?: string;
}

declare class DropdownToggle extends React.Component<DropdownToggleProps> {}
export default DropdownToggle;
