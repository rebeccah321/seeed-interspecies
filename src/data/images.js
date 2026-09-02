// ============================================================
// Static image registry — astro:assets imports for cases + hero.
// Components resolve images by project id; optimized URLs for
// runtime-injected UI (map / spec drawer) are produced with
// getImage in the component frontmatter.
// ============================================================

import tnc from '../assets/case-tnc.png';
import bhutan from '../assets/case-bhutan.png';
import mothboxPanama from '../assets/case-mothbox-panama.png';
import mothboxPeru from '../assets/case-mothbox-peru.png';
import mothboxYellowstone from '../assets/case-mothbox-yellowstone.png';
import olfactory from '../assets/case-olfactory.png';
import collarid from '../assets/case-collarid.png';
import lifescience from '../assets/case-lifescience.png';
import hero from '../assets/honeyguide-hero.png';

export const HERO_IMAGE = hero;

export const CASE_IMAGES = {
  tnc,
  bhutan,
  'mothbox-panama': mothboxPanama,
  'mothbox-peru': mothboxPeru,
  'mothbox-yellowstone': mothboxYellowstone,
  olfactory,
  collarid,
  lifescience,
};
