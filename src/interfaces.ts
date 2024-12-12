import { CSSProperties, ReactNode } from 'react';
import { 
    TextVariant, 
    SpacingToken, 
    ColorScheme, 
    ColorWeight,
    Direction,
    BorderStyle,
    Shadow,
    Radius,
    Responsive
} from './types';

export interface FlexProps {
    direction?: Direction;
    justifyContent?: CSSProperties['justifyContent'];
    alignItems?: CSSProperties['alignItems'];
    wrap?: boolean;
    flex?: number | string;
    tabletDirection?: Direction;
    mobileDirection?: Direction;
}

export interface SpacingProps {
    padding?: SpacingToken;
    paddingLeft?: SpacingToken;
    paddingRight?: SpacingToken;
    paddingTop?: SpacingToken;
    paddingBottom?: SpacingToken;
    paddingX?: SpacingToken;
    paddingY?: SpacingToken;
    margin?: SpacingToken;
    marginLeft?: SpacingToken;
    marginRight?: SpacingToken;
    marginTop?: SpacingToken;
    marginBottom?: SpacingToken;
    marginX?: SpacingToken;
    marginY?: SpacingToken;
    gap?: SpacingToken;
}

export interface SizeProps {
    width?: number | SpacingToken;
    height?: number | SpacingToken;
    maxWidth?: number | SpacingToken;
    minWidth?: number | SpacingToken;
    maxHeight?: number | SpacingToken;
    minHeight?: number | SpacingToken;
    fillWidth?: boolean;
    fillHeight?: boolean;
}

export interface StyleProps {
    background?: `${ColorScheme}-${ColorWeight}` | 'surface' | 'page' | 'transparent';
    solid?: `${ColorScheme}-${ColorWeight}`;
    alpha?: `${ColorScheme}-${ColorWeight}`;
    border?: `${ColorScheme}-${ColorWeight}`;
    borderStyle?: BorderStyle;
    radius?: Radius;
    shadow?: Shadow;
    position?: CSSProperties['position'];
    overflowX?: CSSProperties['overflowX'];
    overflowY?: CSSProperties['overflowY'];
    zIndex?: number;
}

export interface CommonProps {
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
}

export interface DisplayProps {
    textVariant?: TextVariant;
    textSize?: string;
    textWeight?: string;
    onBackground?: `${ColorScheme}-${ColorWeight}`;
    onSolid?: `${ColorScheme}-${ColorWeight}`;
    align?: CSSProperties['textAlign'];
}

export interface ConditionalProps {
    hide?: Responsive;
    show?: Responsive;
} 