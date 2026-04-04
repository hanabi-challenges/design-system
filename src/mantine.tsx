import {
  Combobox as MantineCombobox,
  useCombobox as useMantineCombobox,
  ActionIcon as MantineActionIcon,
  Skeleton as MantineSkeleton,
  Alert as MantineAlert,
  Anchor as MantineAnchor,
  Badge as MantineBadge,
  Blockquote as MantineBlockquote,
  Box as MantineBox,
  Breadcrumbs as MantineBreadcrumbs,
  Button as MantineButton,
  Card as MantineCard,
  Checkbox as MantineCheckbox,
  Code as MantineCode,
  createTheme,
  Divider as MantineDivider,
  Drawer as MantineDrawer,
  Grid as MantineGrid,
  Group as MantineGroup,
  Image as MantineImage,
  Indicator as MantineIndicator,
  List as MantineList,
  Loader as MantineLoader,
  MantineProvider as MantineProviderCore,
  Menu as MantineMenu,
  Modal as MantineModal,
  NumberInput as MantineNumberInput,
  Paper as MantinePaper,
  PasswordInput as MantinePasswordInput,
  Popover as MantinePopover,
  Radio as MantineRadio,
  ScrollArea as MantineScrollArea,
  SegmentedControl as MantineSegmentedControl,
  Select as MantineSelect,
  SimpleGrid as MantineSimpleGrid,
  Stack as MantineStack,
  Stepper as MantineStepper,
  Switch as MantineSwitch,
  Table as MantineTable,
  Text as MantineText,
  TextInput as MantineTextInput,
  Textarea as MantineTextarea,
  Title as MantineTitle,
  Tooltip as MantineTooltip,
  UnstyledButton as MantineUnstyledButton,
  type ActionIconProps,
  type AlertProps,
  type AnchorProps,
  type BadgeProps,
  type BlockquoteProps,
  type BoxProps,
  type BreadcrumbsProps,
  type ButtonProps,
  type CardProps,
  type CheckboxProps,
  type CodeProps,
  type CSSVariablesResolver,
  type DividerProps,
  type DrawerProps,
  type GridProps,
  type GroupProps,
  type ImageProps,
  type IndicatorProps,
  type ListProps,
  type LoaderProps,
  type MantineProviderProps,
  type MenuProps,
  type ModalProps,
  type NumberInputProps,
  type PaperProps,
  type PasswordInputProps,
  type PopoverProps,
  type RadioProps,
  type SegmentedControlProps,
  type SelectProps,
  type SimpleGridProps,
  type StackProps,
  type StepperProps,
  type SwitchProps,
  type TableProps,
  type TextInputProps,
  type TextProps,
  type TextareaProps,
  type TitleProps,
  type TooltipProps,
  type UnstyledButtonProps,
} from "@mantine/core";
import type { ReactElement, ReactNode } from "react";
import { Link as RouterLink } from "react-router-dom";

// Align Mantine's primary color with the design system's blue palette so
// variant="light" / variant="subtle" buttons use the correct accent color.
const theme = createTheme({
  primaryColor: "blue",
  primaryShade: 6,
  colors: {
    blue: [
      "#eff6ff", // 0 — blue-50
      "#dbeafe", // 1 — blue-100 / accent-weak
      "#bfdbfe", // 2 — blue-200
      "#93c5fd", // 3 — blue-300
      "#60a5fa", // 4 — blue-400
      "#3b82f6", // 5 — blue-500
      "#2563eb", // 6 — blue-600 / --color-accent  ← primary
      "#1d4ed8", // 7 — blue-700 / --color-accent-strong
      "#1e40af", // 8 — blue-800
      "#1e3a8a", // 9 — blue-900
    ],
  },
});

// Emit all design-system CSS variables through Mantine's cssVariablesResolver so
// tokens.css is no longer needed as a static file. All 195 variable names are
// preserved exactly so existing component CSS continues to work unchanged.
const cssVariablesResolver: CSSVariablesResolver = () => ({
  variables: {
    // border
    "--ds-border-width-none": "0",
    "--ds-border-width-hairline": "1px",
    "--ds-border-width-thick": "2px",
    "--ds-border-style-solid": "solid",
    "--ds-border-style-dashed": "dashed",
    // breakpoints
    "--ds-breakpoints-xs": "480px",
    "--ds-breakpoints-sm": "640px",
    "--ds-breakpoints-md": "768px",
    "--ds-breakpoints-lg": "1024px",
    "--ds-breakpoints-xl": "1280px",
    // color theme raw values (both light and dark are theme-independent constants)
    "--ds-color-theme-light-surface": "#fdfaf4",
    "--ds-color-theme-light-surfaceMuted": "#f5efdc",
    "--ds-color-theme-light-text": "#0f0e1a",
    "--ds-color-theme-light-textMuted": "#4a4768",
    "--ds-color-theme-light-border": "rgba(74, 71, 104, 0.14)",
    "--ds-color-theme-light-accentBlue-weak": "#dbeafe",
    "--ds-color-theme-light-accentBlue-mid": "#2563eb",
    "--ds-color-theme-light-accentBlue-strong": "#1d4ed8",
    "--ds-color-theme-light-accentGreen-weak": "#d1fae5",
    "--ds-color-theme-light-accentGreen-mid": "#059669",
    "--ds-color-theme-light-accentGreen-strong": "#065f46",
    "--ds-color-theme-light-accentMagenta-weak": "#fce8f0",
    "--ds-color-theme-light-accentMagenta-mid": "#d0145a",
    "--ds-color-theme-light-accentMagenta-strong": "#8c0c3c",
    "--ds-color-theme-dark-surface": "#1a1828",
    "--ds-color-theme-dark-surfaceMuted": "#2a2840",
    "--ds-color-theme-dark-text": "#fdfaf4",
    "--ds-color-theme-dark-textMuted": "#c8c0a8",
    "--ds-color-theme-dark-border": "rgba(253, 250, 244, 0.1)",
    "--ds-color-theme-dark-accentBlue-weak": "rgba(37, 99, 235, 0.2)",
    "--ds-color-theme-dark-accentBlue-mid": "#60a5fa",
    "--ds-color-theme-dark-accentBlue-strong": "#93c5fd",
    "--ds-color-theme-dark-accentGreen-weak": "rgba(0, 200, 150, 0.18)",
    "--ds-color-theme-dark-accentGreen-mid": "#00c896",
    "--ds-color-theme-dark-accentGreen-strong": "#34d399",
    "--ds-color-theme-dark-accentMagenta-weak": "rgba(232, 24, 92, 0.18)",
    "--ds-color-theme-dark-accentMagenta-mid": "#e8185c",
    "--ds-color-theme-dark-accentMagenta-strong": "#f9a8d4",
    // color categorical (both light and dark variants as separate names)
    "--ds-color-categorical-cat1-light": "#2563eb",
    "--ds-color-categorical-cat1-dark": "#60a5fa",
    "--ds-color-categorical-cat2-light": "#059669",
    "--ds-color-categorical-cat2-dark": "#00c896",
    "--ds-color-categorical-cat3-light": "#d0145a",
    "--ds-color-categorical-cat3-dark": "#e8185c",
    "--ds-color-categorical-cat4-light": "#1d4ed8",
    "--ds-color-categorical-cat4-dark": "#93c5fd",
    "--ds-color-categorical-cat5-light": "#065f46",
    "--ds-color-categorical-cat5-dark": "#34d399",
    "--ds-color-categorical-cat6-light": "#8c0c3c",
    "--ds-color-categorical-cat6-dark": "#f9a8d4",
    "--ds-color-categorical-cat7-light": "#d97706",
    "--ds-color-categorical-cat7-dark": "#fbbf24",
    "--ds-color-categorical-cat8-light": "#b91c1c",
    "--ds-color-categorical-cat8-dark": "#ef4444",
    "--ds-color-categorical-cat9-light": "#4a4768",
    "--ds-color-categorical-cat9-dark": "#c8c0a8",
    "--ds-color-categorical-cat10-light": "#06b6d4",
    "--ds-color-categorical-cat10-dark": "#a5f3fc",
    "--ds-color-categorical-cat11-light": "#7c3aed",
    "--ds-color-categorical-cat11-dark": "#c4b5fd",
    "--ds-color-categorical-cat12-light": "#0284c7",
    "--ds-color-categorical-cat12-dark": "#bae6fd",
    // color scale
    "--ds-color-scale-charcoal-1": "#8480a0",
    "--ds-color-scale-charcoal-2": "#4a4768",
    "--ds-color-scale-charcoal-3": "#2a2840",
    "--ds-color-scale-charcoal-4": "#1a1828",
    "--ds-color-scale-charcoal-5": "#0f0e1a",
    "--ds-color-scale-ivory-1": "#fdfaf4",
    "--ds-color-scale-ivory-2": "#f5efdc",
    "--ds-color-scale-ivory-3": "#c8c0a8",
    "--ds-color-scale-ivory-4": "#a09880",
    "--ds-color-scale-ivory-5": "#786850",
    "--ds-color-scale-blue-1": "#dbeafe",
    "--ds-color-scale-blue-2": "#2563eb",
    "--ds-color-scale-blue-3": "#1d4ed8",
    "--ds-color-scale-blue-4": "#60a5fa",
    "--ds-color-scale-blue-5": "#93c5fd",
    "--ds-color-scale-green-1": "#d1fae5",
    "--ds-color-scale-green-2": "#059669",
    "--ds-color-scale-green-3": "#065f46",
    "--ds-color-scale-green-4": "#00c896",
    "--ds-color-scale-green-5": "#34d399",
    "--ds-color-scale-magenta-1": "#fce8f0",
    "--ds-color-scale-magenta-2": "#d0145a",
    "--ds-color-scale-magenta-3": "#8c0c3c",
    "--ds-color-scale-magenta-4": "#e8185c",
    "--ds-color-scale-magenta-5": "#f9a8d4",
    "--ds-color-scale-amber-1": "#fef3c7",
    "--ds-color-scale-amber-2": "#d97706",
    "--ds-color-scale-amber-3": "#92400e",
    "--ds-color-scale-amber-4": "#fbbf24",
    "--ds-color-scale-amber-5": "#fde68a",
    "--ds-color-scale-red-1": "#fef2f2",
    "--ds-color-scale-red-2": "#b91c1c",
    "--ds-color-scale-red-3": "#7f1d1d",
    "--ds-color-scale-red-4": "#ef4444",
    "--ds-color-scale-red-5": "#fecdd3",
    // color semantic kpi
    "--ds-color-semantic-kpiText-positive-onLightSurface": "#059669",
    "--ds-color-semantic-kpiText-positive-onDarkSurface": "#00c896",
    "--ds-color-semantic-kpiText-neutral-onLightSurface": "#d97706",
    "--ds-color-semantic-kpiText-neutral-onDarkSurface": "#fbbf24",
    "--ds-color-semantic-kpiText-negative-onLightSurface": "#b91c1c",
    "--ds-color-semantic-kpiText-negative-onDarkSurface": "#ef4444",
    // color semantic alert (light/dark variants as separate constant names)
    "--ds-color-semantic-alert-success-light-bg": "#d1fae5",
    "--ds-color-semantic-alert-success-light-text": "#065f46",
    "--ds-color-semantic-alert-success-dark-bg": "rgba(0, 200, 150, 0.18)",
    "--ds-color-semantic-alert-success-dark-text": "#34d399",
    "--ds-color-semantic-alert-info-light-bg": "#dbeafe",
    "--ds-color-semantic-alert-info-light-text": "#1d4ed8",
    "--ds-color-semantic-alert-info-dark-bg": "rgba(37, 99, 235, 0.2)",
    "--ds-color-semantic-alert-info-dark-text": "#93c5fd",
    "--ds-color-semantic-alert-warning-light-bg": "#fef3c7",
    "--ds-color-semantic-alert-warning-light-text": "#92400e",
    "--ds-color-semantic-alert-warning-dark-bg": "rgba(251, 191, 36, 0.18)",
    "--ds-color-semantic-alert-warning-dark-text": "#fde68a",
    "--ds-color-semantic-alert-error-light-bg": "#fef2f2",
    "--ds-color-semantic-alert-error-light-text": "#7f1d1d",
    "--ds-color-semantic-alert-error-dark-bg": "rgba(239, 68, 68, 0.18)",
    "--ds-color-semantic-alert-error-dark-text": "#fecdd3",
    // icon
    "--ds-icon-size-xs": "12px",
    "--ds-icon-size-sm": "16px",
    "--ds-icon-size-md": "20px",
    "--ds-icon-size-lg": "24px",
    "--ds-icon-size-xl": "32px",
    "--ds-icon-strokeWidth-default": "1.5",
    "--ds-icon-strokeWidth-strong": "2",
    // layout
    "--ds-layout-maxWidth-panel": "720px",
    "--ds-layout-maxWidth-narrow": "640px",
    "--ds-layout-maxWidth-page": "1100px",
    "--ds-layout-pagePadding": "16px",
    "--ds-layout-sectionPaddingY": "16px",
    "--ds-layout-sectionPaddingX": "0",
    "--ds-layout-gap-rowDefault": "12px",
    "--ds-layout-gap-stackDefault": "12px",
    "--ds-layout-gap-stackTitle": "20px",
    "--ds-layout-gap-stackSecondary": "16px",
    "--ds-layout-gap-stackTertiary": "12px",
    // motion
    "--ds-motion-duration-instant": "50ms",
    "--ds-motion-duration-fast": "120ms",
    "--ds-motion-duration-normal": "180ms",
    "--ds-motion-duration-slow": "250ms",
    "--ds-motion-duration-slower": "320ms",
    "--ds-motion-easing-standard": "cubic-bezier(0.2, 0, 0, 1)",
    "--ds-motion-easing-emphasized": "cubic-bezier(0.2, 0, 0, 1.2)",
    "--ds-motion-easing-decelerate": "cubic-bezier(0, 0, 0, 1)",
    "--ds-motion-easing-accelerate": "cubic-bezier(0.4, 0, 1, 1)",
    // opacity
    "--ds-opacity-disabled": "0.4",
    "--ds-opacity-muted": "0.7",
    "--ds-opacity-overlayLight": "0.1",
    "--ds-opacity-overlayMedium": "0.3",
    "--ds-opacity-overlayStrong": "0.6",
    // radius
    "--ds-radius-sm": "8px",
    "--ds-radius-md": "12px",
    "--ds-radius-pill": "999px",
    // shadow
    "--ds-shadow-light": "0 2px 10px rgba(0, 0, 0, 0.08)",
    "--ds-shadow-hover": "0 6px 18px rgba(0, 0, 0, 0.1)",
    "--ds-shadow-modal": "0 10px 30px rgba(0, 0, 0, 0.15)",
    // size control
    "--ds-size-control-sm-height": "28px",
    "--ds-size-control-sm-paddingX": "8px",
    "--ds-size-control-sm-footprint": "28px",
    "--ds-size-control-md-height": "32px",
    "--ds-size-control-md-paddingX": "12px",
    "--ds-size-control-md-footprint": "32px",
    "--ds-size-control-lg-height": "40px",
    "--ds-size-control-lg-paddingX": "16px",
    "--ds-size-control-lg-footprint": "40px",
    // size pill
    "--ds-size-pill-sm-height": "20px",
    "--ds-size-pill-sm-paddingX": "8px",
    "--ds-size-pill-md-height": "24px",
    "--ds-size-pill-md-paddingX": "10px",
    "--ds-size-pill-lg-height": "28px",
    "--ds-size-pill-lg-paddingX": "12px",
    // size table row
    "--ds-size-tableRow-dense": "28px",
    "--ds-size-tableRow-regular": "32px",
    "--ds-size-tableRow-relaxed": "40px",
    // space
    "--ds-space-xxs": "4px",
    "--ds-space-xs": "8px",
    "--ds-space-sm": "12px",
    "--ds-space-md": "16px",
    "--ds-space-lg": "20px",
    "--ds-space-xl": "24px",
    // textScale
    "--ds-textScale-1-fontSize": "8px",
    "--ds-textScale-1-lineHeight": "1.2",
    "--ds-textScale-2-fontSize": "10px",
    "--ds-textScale-2-lineHeight": "1.2",
    "--ds-textScale-3-fontSize": "12px",
    "--ds-textScale-3-lineHeight": "1.2",
    "--ds-textScale-4-fontSize": "14px",
    "--ds-textScale-4-lineHeight": "1.4",
    "--ds-textScale-5-fontSize": "16px",
    "--ds-textScale-5-lineHeight": "1.4",
    "--ds-textScale-6-fontSize": "18px",
    "--ds-textScale-6-lineHeight": "1.4",
    "--ds-textScale-7-fontSize": "20px",
    "--ds-textScale-7-lineHeight": "1.4",
    "--ds-textScale-8-fontSize": "24px",
    "--ds-textScale-8-lineHeight": "1.2",
    "--ds-textScale-9-fontSize": "28px",
    "--ds-textScale-9-lineHeight": "1.2",
    "--ds-textScale-10-fontSize": "34px",
    "--ds-textScale-10-lineHeight": "1.2",
    "--ds-textScale-11-fontSize": "40px",
    "--ds-textScale-11-lineHeight": "1.2",
    // typography
    "--ds-typography-fontFamily-display": '"Pacifico", cursive',
    "--ds-typography-fontFamily-heading": '"Pacifico", cursive',
    "--ds-typography-fontFamily-body": '"Inter", sans-serif',
    "--ds-typography-fontFamily-prose": '"Lora", serif',
    "--ds-typography-fontFamily-mono": '"Roboto Mono", monospace',
    "--ds-typography-fontFamily-meta": '"Inter", sans-serif',
    "--ds-typography-fontWeight-display": "400",
    "--ds-typography-fontWeight-heading": "400",
    "--ds-typography-fontWeight-body": "400",
    "--ds-typography-fontWeight-prose": "400",
    "--ds-typography-fontWeight-mono": "400",
    "--ds-typography-fontWeight-meta": "400",
    "--ds-typography-lineHeight-tight": "1.2",
    "--ds-typography-lineHeight-normal": "1.4",
    "--ds-typography-lineHeight-relaxed": "1.6",
    "--ds-typography-letterSpacing-normal": "0",
    // zIndex
    "--ds-zIndex-base": "0",
    "--ds-zIndex-dropdown": "1000",
    "--ds-zIndex-sticky": "1100",
    "--ds-zIndex-overlay": "1200",
    "--ds-zIndex-modal": "1300",
    "--ds-zIndex-toast": "1400",
    "--ds-zIndex-tooltip": "1500",
  },
  // Light-mode aliases: point the semantic tokens at the light theme values.
  light: {
    "--ds-color-surface": "var(--ds-color-theme-light-surface)",
    "--ds-color-surface-muted": "var(--ds-color-theme-light-surfaceMuted)",
    "--ds-color-text": "var(--ds-color-theme-light-text)",
    "--ds-color-text-muted": "var(--ds-color-theme-light-textMuted)",
    "--ds-color-border": "var(--ds-color-theme-light-border)",
    // Blue accent
    "--ds-color-accent-blue-weak":
      "var(--ds-color-theme-light-accentBlue-weak)",
    "--ds-color-accent-blue-mid": "var(--ds-color-theme-light-accentBlue-mid)",
    "--ds-color-accent-blue-strong":
      "var(--ds-color-theme-light-accentBlue-strong)",
    // Green accent
    "--ds-color-accent-green-weak":
      "var(--ds-color-theme-light-accentGreen-weak)",
    "--ds-color-accent-green-mid":
      "var(--ds-color-theme-light-accentGreen-mid)",
    "--ds-color-accent-green-strong":
      "var(--ds-color-theme-light-accentGreen-strong)",
    // Magenta accent
    "--ds-color-accent-magenta-weak":
      "var(--ds-color-theme-light-accentMagenta-weak)",
    "--ds-color-accent-magenta-mid":
      "var(--ds-color-theme-light-accentMagenta-mid)",
    "--ds-color-accent-magenta-strong":
      "var(--ds-color-theme-light-accentMagenta-strong)",
    // Generic accent aliases → blue (interactive default)
    "--ds-color-accent-weak": "var(--ds-color-theme-light-accentBlue-weak)",
    "--ds-color-accent-mid": "var(--ds-color-theme-light-accentBlue-mid)",
    "--ds-color-accent-strong": "var(--ds-color-theme-light-accentBlue-strong)",
    // alert tone aliases (theme-aware)
    "--ds-color-alert-info-bg": "var(--ds-color-semantic-alert-info-light-bg)",
    "--ds-color-alert-info-text":
      "var(--ds-color-semantic-alert-info-light-text)",
    "--ds-color-alert-success-bg":
      "var(--ds-color-semantic-alert-success-light-bg)",
    "--ds-color-alert-success-text":
      "var(--ds-color-semantic-alert-success-light-text)",
    "--ds-color-alert-warning-bg":
      "var(--ds-color-semantic-alert-warning-light-bg)",
    "--ds-color-alert-warning-text":
      "var(--ds-color-semantic-alert-warning-light-text)",
    "--ds-color-alert-error-bg":
      "var(--ds-color-semantic-alert-error-light-bg)",
    "--ds-color-alert-error-text":
      "var(--ds-color-semantic-alert-error-light-text)",
    // badge / input-error tone aliases (reuse alert palette)
    "--ds-color-tone-neutral-bg": "var(--ds-color-theme-light-surfaceMuted)",
    "--ds-color-tone-neutral-text": "var(--ds-color-theme-light-textMuted)",
    "--ds-color-tone-info-bg": "var(--ds-color-semantic-alert-info-light-bg)",
    "--ds-color-tone-info-text":
      "var(--ds-color-semantic-alert-info-light-text)",
    "--ds-color-tone-success-bg":
      "var(--ds-color-semantic-alert-success-light-bg)",
    "--ds-color-tone-success-text":
      "var(--ds-color-semantic-alert-success-light-text)",
    "--ds-color-tone-warning-bg":
      "var(--ds-color-semantic-alert-warning-light-bg)",
    "--ds-color-tone-warning-text":
      "var(--ds-color-semantic-alert-warning-light-text)",
    "--ds-color-tone-danger-bg":
      "var(--ds-color-semantic-alert-error-light-bg)",
    "--ds-color-tone-danger-text":
      "var(--ds-color-semantic-alert-error-light-text)",
    "--ds-color-error-text": "var(--ds-color-semantic-alert-error-light-text)",
  },
  // Dark-mode aliases: point the semantic tokens at the dark theme values.
  dark: {
    "--ds-color-surface": "var(--ds-color-theme-dark-surface)",
    "--ds-color-surface-muted": "var(--ds-color-theme-dark-surfaceMuted)",
    "--ds-color-text": "var(--ds-color-theme-dark-text)",
    "--ds-color-text-muted": "var(--ds-color-theme-dark-textMuted)",
    "--ds-color-border": "var(--ds-color-theme-dark-border)",
    // Blue accent
    "--ds-color-accent-blue-weak": "var(--ds-color-theme-dark-accentBlue-weak)",
    "--ds-color-accent-blue-mid": "var(--ds-color-theme-dark-accentBlue-mid)",
    "--ds-color-accent-blue-strong":
      "var(--ds-color-theme-dark-accentBlue-strong)",
    // Green accent
    "--ds-color-accent-green-weak":
      "var(--ds-color-theme-dark-accentGreen-weak)",
    "--ds-color-accent-green-mid": "var(--ds-color-theme-dark-accentGreen-mid)",
    "--ds-color-accent-green-strong":
      "var(--ds-color-theme-dark-accentGreen-strong)",
    // Magenta accent
    "--ds-color-accent-magenta-weak":
      "var(--ds-color-theme-dark-accentMagenta-weak)",
    "--ds-color-accent-magenta-mid":
      "var(--ds-color-theme-dark-accentMagenta-mid)",
    "--ds-color-accent-magenta-strong":
      "var(--ds-color-theme-dark-accentMagenta-strong)",
    // Generic accent aliases → blue (interactive default)
    "--ds-color-accent-weak": "var(--ds-color-theme-dark-accentBlue-weak)",
    "--ds-color-accent-mid": "var(--ds-color-theme-dark-accentBlue-mid)",
    "--ds-color-accent-strong": "var(--ds-color-theme-dark-accentBlue-strong)",
    // alert tone aliases (theme-aware)
    "--ds-color-alert-info-bg": "var(--ds-color-semantic-alert-info-dark-bg)",
    "--ds-color-alert-info-text":
      "var(--ds-color-semantic-alert-info-dark-text)",
    "--ds-color-alert-success-bg":
      "var(--ds-color-semantic-alert-success-dark-bg)",
    "--ds-color-alert-success-text":
      "var(--ds-color-semantic-alert-success-dark-text)",
    "--ds-color-alert-warning-bg":
      "var(--ds-color-semantic-alert-warning-dark-bg)",
    "--ds-color-alert-warning-text":
      "var(--ds-color-semantic-alert-warning-dark-text)",
    "--ds-color-alert-error-bg": "var(--ds-color-semantic-alert-error-dark-bg)",
    "--ds-color-alert-error-text":
      "var(--ds-color-semantic-alert-error-dark-text)",
    // badge / input-error tone aliases (reuse alert palette)
    "--ds-color-tone-neutral-bg": "var(--ds-color-theme-dark-surfaceMuted)",
    "--ds-color-tone-neutral-text": "var(--ds-color-theme-dark-textMuted)",
    "--ds-color-tone-info-bg": "var(--ds-color-semantic-alert-info-dark-bg)",
    "--ds-color-tone-info-text":
      "var(--ds-color-semantic-alert-info-dark-text)",
    "--ds-color-tone-success-bg":
      "var(--ds-color-semantic-alert-success-dark-bg)",
    "--ds-color-tone-success-text":
      "var(--ds-color-semantic-alert-success-dark-text)",
    "--ds-color-tone-warning-bg":
      "var(--ds-color-semantic-alert-warning-dark-bg)",
    "--ds-color-tone-warning-text":
      "var(--ds-color-semantic-alert-warning-dark-text)",
    "--ds-color-tone-danger-bg": "var(--ds-color-semantic-alert-error-dark-bg)",
    "--ds-color-tone-danger-text":
      "var(--ds-color-semantic-alert-error-dark-text)",
    "--ds-color-error-text": "var(--ds-color-semantic-alert-error-dark-text)",
  },
});

// Centralized Mantine wrappers with stable defaults so pages/features only invoke primitives.
export function MantineProvider(props: MantineProviderProps): ReactElement {
  return (
    <MantineProviderCore
      theme={theme}
      cssVariablesResolver={cssVariablesResolver}
      {...props}
    />
  );
}

export function Card(props: CardProps): ReactElement {
  const { style, ...rest } = props;
  return (
    <MantineCard
      radius="md"
      withBorder
      style={{
        background: "var(--ds-color-surface)",
        borderColor: "var(--ds-color-border)",
        ...(style ?? {}),
      }}
      {...rest}
    />
  );
}

export function Button(
  props: ButtonProps & Record<string, unknown>,
): ReactElement {
  return <MantineButton radius="md" {...(props as ButtonProps)} />;
}

export function Alert(
  props: AlertProps & Record<string, unknown>,
): ReactElement {
  return <MantineAlert radius="md" {...(props as AlertProps)} />;
}

export function Stack(
  props: StackProps & Record<string, unknown>,
): ReactElement {
  return <MantineStack gap="sm" {...(props as StackProps)} />;
}

export function Group(props: GroupProps): ReactElement {
  return <MantineGroup gap="sm" {...props} />;
}

export function Text(props: TextProps & Record<string, unknown>): ReactElement {
  return <MantineText {...(props as TextProps)} />;
}

export function Title(
  props: TitleProps & Record<string, unknown>,
): ReactElement {
  return <MantineTitle {...(props as TitleProps)} />;
}

export function Modal(props: ModalProps): ReactElement {
  return <MantineModal radius="md" centered {...props} />;
}

export function Checkbox(props: CheckboxProps): ReactElement {
  return <MantineCheckbox {...props} />;
}

export function Select(props: SelectProps): ReactElement {
  return <MantineSelect searchable {...props} />;
}

export function NumberInput(props: NumberInputProps): ReactElement {
  return <MantineNumberInput {...props} />;
}

export function PasswordInput(props: PasswordInputProps): ReactElement {
  return <MantinePasswordInput {...props} />;
}

export function TextInput(
  props: TextInputProps & Record<string, unknown>,
): ReactElement {
  return <MantineTextInput {...(props as TextInputProps)} />;
}

export function Textarea(props: TextareaProps): ReactElement {
  return <MantineTextarea autosize minRows={3} {...props} />;
}

// BoxProps doesn't expose the polymorphic `component` prop at the TypeScript
// interface level in Mantine v8. Allow it via intersection so callers can pass
// component="div", component="span", etc.
export function Box(props: BoxProps & Record<string, unknown>): ReactElement {
  return <MantineBox {...(props as BoxProps)} />;
}

export function Tooltip(props: TooltipProps): ReactElement {
  return <MantineTooltip withArrow {...props} />;
}

export function ActionIcon(
  props: ActionIconProps & Record<string, unknown>,
): ReactElement {
  return <MantineActionIcon radius="md" {...(props as ActionIconProps)} />;
}

export function Badge(
  props: BadgeProps & Record<string, unknown>,
): ReactElement {
  return <MantineBadge radius="sm" {...(props as BadgeProps)} />;
}

export function Switch(props: SwitchProps): ReactElement {
  return <MantineSwitch {...props} />;
}

export function SegmentedControl(props: SegmentedControlProps): ReactElement {
  return <MantineSegmentedControl {...props} />;
}

export const ScrollArea = MantineScrollArea;

export function Indicator(props: IndicatorProps): ReactElement {
  return <MantineIndicator {...props} />;
}

export function UnstyledButton(
  props: UnstyledButtonProps & Record<string, unknown>,
): ReactElement {
  return <MantineUnstyledButton {...(props as UnstyledButtonProps)} />;
}

export function Loader(props: LoaderProps): ReactElement {
  return <MantineLoader {...props} />;
}

export function Divider(props: DividerProps): ReactElement {
  return <MantineDivider {...props} />;
}

export function Anchor(
  props: AnchorProps & Record<string, unknown>,
): ReactElement {
  return (
    <MantineAnchor underline="hover" fw={500} {...(props as AnchorProps)} />
  );
}

type LinkProps = Omit<AnchorProps, "href" | "component" | "children"> & {
  to: string;
  children?: ReactNode;
};

export function Link({ to, ...props }: LinkProps): ReactElement {
  return (
    <MantineAnchor
      component={RouterLink}
      to={to}
      underline="hover"
      fw={500}
      {...(props as AnchorProps)}
    />
  );
}

export function Blockquote(props: BlockquoteProps): ReactElement {
  return <MantineBlockquote {...props} />;
}

export function Code(props: CodeProps): ReactElement {
  return <MantineCode {...props} />;
}

export function Image(
  props: ImageProps & Record<string, unknown>,
): ReactElement {
  return <MantineImage {...(props as ImageProps)} />;
}

// PaperProps doesn't include polymorphic props (component, anchor attrs, etc.)
// at the TypeScript interface level in Mantine v8. Allow them via intersection.
export function Paper(
  props: PaperProps & Record<string, unknown>,
): ReactElement {
  return <MantinePaper radius="md" withBorder {...(props as PaperProps)} />;
}

export function SimpleGrid(props: SimpleGridProps): ReactElement {
  return <MantineSimpleGrid {...props} />;
}

export function Drawer(props: DrawerProps): ReactElement {
  return <MantineDrawer radius="md" {...props} />;
}

export function Breadcrumbs(props: BreadcrumbsProps): ReactElement {
  return <MantineBreadcrumbs {...props} />;
}

// Preserve compound APIs (e.g., Menu.Target, Grid.Col, Table.Tbody, List.Item, Radio.Group, Popover.Target).
export const Combobox = MantineCombobox;
export const useCombobox = useMantineCombobox;
export const Menu = MantineMenu;
export const Grid = MantineGrid;
export const Table = MantineTable;
export const List = MantineList;
export const Radio = MantineRadio;
export const Stepper = MantineStepper;
export const Popover = MantinePopover;
export const Skeleton = MantineSkeleton;

export type {
  MenuProps,
  GridProps,
  TableProps,
  ListProps,
  RadioProps,
  StepperProps,
  DrawerProps,
  BreadcrumbsProps,
  PopoverProps,
  LinkProps,
};
