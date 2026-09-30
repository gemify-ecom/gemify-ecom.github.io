/**
 * Class names for the Signal buttons and links, so every page uses the same
 * shapes. Pattern: one primary button per view, the second action is a text link.
 */

/** Primary button on white or mist. */
export const PRIMARY_BUTTON =
  'inline-flex items-center justify-center gap-2 px-5 py-3 bg-signal text-white font-semibold rounded-xl no-underline hover:bg-signal-deep transition-colors';

/** Primary button on ink: hover goes lighter, not darker. */
export const PRIMARY_BUTTON_ON_INK =
  'inline-flex items-center justify-center gap-2 px-5 py-3 bg-signal text-white font-semibold rounded-xl no-underline hover:bg-signal-bright transition-colors';

/** Secondary action on white or mist. */
export const TEXT_LINK = 'font-semibold text-signal-deep no-underline hover:underline';

/** Secondary action on ink: white with a thin underline. */
export const TEXT_LINK_ON_INK =
  'font-semibold text-white no-underline border-b border-white/35 pb-px hover:border-white transition-colors';
