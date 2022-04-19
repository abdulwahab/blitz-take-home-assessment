// https://goober.js.org/
import { createGlobalStyles } from "goober/global";

export const HD = `@media screen and (min-width: 1800px)`;
export const desktop = `@media screen and (max-width: 1339px)`;
export const tabletLarge = `@media screen and (max-width: 1066px)`;
export const tablet = `@media screen and (max-width: 1023px)`;
export const tabletMedium = `@media screen and (max-width: 920px)`;
export const tabletSmall = `@media screen and (max-width: 820px)`;
export const mobile = `@media screen and (max-width: 767px)`;
export const mobileSmall = `@media screen and (max-width: 374px)`;

export const styles = /* css */ `
:root {
  /* Sizing/Spacing */
  --unit: 0.25;

  --sp-0: 0px;
  --sp-px: 1px;
  --sp-0_5: calc(var(--unit) * 0.5rem);
  --sp-1: calc(var(--unit) * 1rem);
  --sp-1_5: calc(var(--unit) * 1.5rem);
  --sp-2: calc(var(--unit) * 2rem);
  --sp-2_5: calc(var(--unit) * 2.5rem);
  --sp-3: calc(var(--unit) * 3rem);
  --sp-3_5: calc(var(--unit) * 3.5rem);
  --sp-4: calc(var(--unit) * 4rem);
  --sp-4_5: calc(var(--unit) * 4.5rem);
  --sp-5: calc(var(--unit) * 5rem);
  --sp-5_5: calc(var(--unit) * 5.5rem);
  --sp-6: calc(var(--unit) * 6rem);
  --sp-6_5: calc(var(--unit) * 6.5rem);
  --sp-7: calc(var(--unit) * 7rem);
  --sp-7_5: calc(var(--unit) * 7.5rem);
  --sp-8: calc(var(--unit) * 8rem);
  --sp-8_5: calc(var(--unit) * 8.5rem);
  --sp-9: calc(var(--unit) * 9rem);
  --sp-9_5: calc(var(--unit) * 9.5rem);
  --sp-10: calc(var(--unit) * 10rem);
  --sp-10_5: calc(var(--unit) * 10.5rem);
  --sp-11: calc(var(--unit) * 11rem);
  --sp-11_5: calc(var(--unit) * 11.5rem);
  --sp-12: calc(var(--unit) * 12rem);
  --sp-12_5: calc(var(--unit) * 12.5rem);
  --sp-13: calc(var(--unit) * 13rem);
  --sp-13_5: calc(var(--unit) * 13.5rem);
  --sp-14: calc(var(--unit) * 14rem);
  --sp-15: calc(var(--unit) * 15rem);
  --sp-16: calc(var(--unit) * 16rem);
  --sp-17: calc(var(--unit) * 17rem);
  --sp-17_5: calc(var(--unit) * 17.5rem);
  --sp-18: calc(var(--unit) * 18rem);
  --sp-19: calc(var(--unit) * 19rem);
  --sp-20: calc(var(--unit) * 20rem);
  --sp-21: calc(var(--unit) * 21rem);
  --sp-22: calc(var(--unit) * 22rem);
  --sp-23: calc(var(--unit) * 23rem);
  --sp-24: calc(var(--unit) * 24rem);
  --sp-25: calc(var(--unit) * 25rem);
  --sp-26: calc(var(--unit) * 26rem);
  --sp-27: calc(var(--unit) * 27rem);
  --sp-28: calc(var(--unit) * 28rem);
  --sp-29: calc(var(--unit) * 29rem);
  --sp-30: calc(var(--unit) * 30rem);
  --sp-31: calc(var(--unit) * 31rem);
  --sp-32: calc(var(--unit) * 32rem);
  --sp-33: calc(var(--unit) * 33rem);

  --btn-height: var(--sp-9);

  /* App size stuff */
  --sp-container: 62.5rem;
  --sp-right-rail-ads: 300px;
  --sp-container-gap: 1rem;
  --sp-container-wrapper: calc(var(--sp-container) + var(--sp-container-gap) + var(--sp-right-rail-ads));

  /* Border radii */
  --br: 5px;
  --br-xl: 12px;
  --br-lg: 8px;
  --br-sm: 3px;

  /* Colors */
  --hue: 222deg;

  /* Base HSL values */
  --shade0-hsl: var(--hue) 14% 90%;
  --shade1-hsl: var(--hue) 5% 62%;
  --shade2-hsl: var(--hue) 5% 52%;
  --shade3-hsl: var(--hue) 6% 30%;
  --shade4-hsl: var(--hue) 7% 30%;
  --shade5-hsl: var(--hue) 9% 23%;
  --shade6-hsl: var(--hue) 10% 17%;
  --shade7-hsl: var(--hue) 14% 11%;
  --shade8-hsl: var(--hue) 19% 9%;
  --shade9-hsl: var(--hue) 20% 7%;
  --shade10-hsl: var(--hue) 33% 4%;

  --primary-hsl: 352deg 71% 54%;
  --primary: hsla(var(--primary-hsl) / 1);

  --white: hsl(0deg 0% 100%);
  --red-hsl: 360deg 100% 67%;
  --red: hsla(var(--red-hsl) / 1);
  --green-hsl: 145deg 74% 47%;
  --green: hsla(var(--green-hsl) / 1);
  --blue-hsl: 205deg 100% 64%;
  --blue: hsla(var(--blue-hsl) / 1);
  --turq-hsl: 178deg 69% 52%;
  --turq: hsla(var(--turq-hsl) / 1);
  --yellow-hsl: 38deg 80% 68%;
  --yellow: hsla(var(--yellow-hsl) / 1);
  --nav-bar-hsl: var(--hue) 23% 6%;

  --perf-pos3: hsl(178deg 69% 52%);
  --perf-pos2: hsl(180deg 53% 66%);
  --perf-pos1: hsl(182deg 42% 73%);
  --perf-neutral: hsl(190deg 23% 80%);
  --perf-neg1: hsl(353deg 30% 76%);
  --perf-neg2: hsl(358deg 59% 67%);
  --perf-neg3: hsl(360deg 74% 60%);

  --tier1-hsl: 0deg 100% 67%;
  --tier1: hsla(var(--tier1-hsl) / 1);
  --tier2-hsl: 32deg 100% 55%;
  --tier2: hsla(var(--tier2-hsl) / 1);
  --tier3-hsl: 188deg 45% 51%;
  --tier3: hsla(var(--tier3-hsl) / 1);
  --tier4-hsl: 207deg 53% 42%;
  --tier4: hsla(var(--tier4-hsl) / 1);
  --tier5-hsl: 211deg 39% 33%;
  --tier5: hsla(var(--tier5-hsl) / 1);

  --pro-solid-hsl: 38deg 72% 68%;
  --ap-hsl: 235deg 88% 73%;
  --ap: hsla(var(--ap-hsl) / 1);

  --ad-hsl: 360deg 100% 67%;
  --ad: hsla(var(--ad-hsl) / 1);
  --true: #E4ECEE;

  --pro-solid: hsla(38deg 48% 55% / 1);
  --pro-gradient: linear-gradient(45deg, hsla(37deg 42% 40% / 1) 0%, hsla(39deg 63% 62% / 1) 100%);
  --cta-gradient: linear-gradient(315deg, #ce0f50 25%, #fe112d 75%);

  /* basic transition curve */
  --bezier: cubic-bezier(0.5, 0, 0, 0.75);
  --transition: 0.2s var(--bezier);
  --transition-long: 0.4s var(--bezier);

  --toolbar-width: calc(var(--sp-11) * 3);
  --scrollbar-width: var(--sp-3);
  --scrollbar-width-sm: var(--sp-2_5);
}

::-webkit-scrollbar {
  width: var(--scrollbar-width);
}
::-webkit-scrollbar-thumb {
  background-color: var(--shade6);
}
* { margin: 0; padding: 0; border: none; box-sizing: border-box; }

body {
  /* Primary */
  --primary-15: hsla(var(--primary-hsl) / 0.15);
  --primary-25: hsla(var(--primary-hsl) / 0.25);

  /* Shade 0 */
  --shade0: hsla(var(--shade0-hsl) / 1);
  --shade0-15: hsla(var(--shade0-hsl) / 0.15);
  --shade0-25: hsla(var(--shade0-hsl) / 0.25);
  --shade0-50: hsla(var(--shade0-hsl) / 0.5);
  --shade0-75: hsla(var(--shade0-hsl) / 0.75);

  /* Shade 1 */
  --shade1: hsla(var(--shade1-hsl) / 1);
  --shade1-15: hsla(var(--shade1-hsl) / 0.15);
  --shade1-25: hsla(var(--shade1-hsl) / 0.25);
  --shade1-50: hsla(var(--shade1-hsl) / 0.5);
  --shade1-75: hsla(var(--shade1-hsl) / 0.75);

  /* Shade 2 */
  --shade2: hsla(var(--shade2-hsl) / 1);
  --shade2-15: hsla(var(--shade2-hsl) / 0.15);
  --shade2-25: hsla(var(--shade2-hsl) / 0.25);
  --shade2-50: hsla(var(--shade2-hsl) / 0.5);
  --shade2-75: hsla(var(--shade2-hsl) / 0.75);

  /* Shade 3 */
  --shade3: hsla(var(--shade3-hsl) / 1);
  --shade3-15: hsla(var(--shade3-hsl) / 0.15);
  --shade3-25: hsla(var(--shade3-hsl) / 0.25);
  --shade3-50: hsla(var(--shade3-hsl) / 0.5);
  --shade3-75: hsla(var(--shade3-hsl) / 0.75);

  /* Shade 4 */
  --shade4: hsla(var(--shade4-hsl) / 1);
  --shade4-15: hsla(var(--shade4-hsl) / 0.15);
  --shade4-25: hsla(var(--shade4-hsl) / 0.25);
  --shade4-50: hsla(var(--shade4-hsl) / 0.5);
  --shade4-75: hsla(var(--shade4-hsl) / 0.75);

  /* Shade 5 */
  --shade5: hsla(var(--shade5-hsl) / 1);
  --shade5-15: hsla(var(--shade5-hsl) / 0.15);
  --shade5-25: hsla(var(--shade5-hsl) / 0.25);
  --shade5-50: hsla(var(--shade5-hsl) / 0.5);
  --shade5-75: hsla(var(--shade5-hsl) / 0.75);

  /* Shade 6 */
  --shade6: hsla(var(--shade6-hsl) / 1);
  --shade6-15: hsla(var(--shade6-hsl) / 0.15);
  --shade6-25: hsla(var(--shade6-hsl) / 0.25);
  --shade6-50: hsla(var(--shade6-hsl) / 0.5);
  --shade6-75: hsla(var(--shade6-hsl) / 0.75);

  /* Shade 7 */
  --shade7: hsla(var(--shade7-hsl) / 1);
  --shade7-15: hsla(var(--shade7-hsl) / 0.15);
  --shade7-25: hsla(var(--shade7-hsl) / 0.25);
  --shade7-50: hsla(var(--shade7-hsl) / 0.5);
  --shade7-75: hsla(var(--shade7-hsl) / 0.75);

  /* Shade 8 */
  --shade8: hsla(var(--shade8-hsl) / 1);
  --shade8-15: hsla(var(--shade8-hsl) / 0.15);
  --shade8-25: hsla(var(--shade8-hsl) / 0.25);
  --shade8-50: hsla(var(--shade8-hsl) / 0.5);
  --shade8-75: hsla(var(--shade8-hsl) / 0.75);

  /* Shade 9 */
  --shade9: hsla(var(--shade9-hsl) / 1);
  --shade9-15: hsla(var(--shade9-hsl) / 0.15);
  --shade9-25: hsla(var(--shade9-hsl) / 0.25);
  --shade9-50: hsla(var(--shade9-hsl) / 0.5);
  --shade9-75: hsla(var(--shade9-hsl) / 0.75);

  /* Shade 10 */
  --shade10: hsla(var(--shade10-hsl) / 1);
  --shade10-15: hsla(var(--shade10-hsl) / 0.15);
  --shade10-25: hsla(var(--shade10-hsl) / 0.25);
  --shade10-50: hsla(var(--shade10-hsl) / 0.5);
  --shade10-75: hsla(var(--shade10-hsl) / 0.75);

  --highlight: inset 0 1px var(--shade3-15);
  --btn-txt-shadow: 0 2px var(--shade9-25);

  --nav-bar: hsla(var(--nav-bar-hsl));
}

/* THEME VARIATIONS */
.theme-dark {
  --hue: 222deg;

  --shade0-hsl: var(--hue) 14% 90%;
  --shade1-hsl: var(--hue) 5% 62%;
  --shade2-hsl: var(--hue) 5% 52%;
  --shade3-hsl: var(--hue) 6% 30%;
  --shade4-hsl: var(--hue) 7% 30%;
  --shade5-hsl: var(--hue) 9% 23%;
  --shade6-hsl: var(--hue) 10% 17%;
  --shade7-hsl: var(--hue) 14% 11%;
  --shade8-hsl: var(--hue) 19% 9%;
  --shade9-hsl: var(--hue) 20% 7%;
  --shade10-hsl: var(--hue) 33% 4%;
  --nav-bar-hsl: var(--hue) 20% 8%;
}

.theme-blue {
  --hue: 220deg;

  --shade0-hsl: var(--hue) 24% 92%;
  --shade1-hsl: var(--hue) 26% 70%;
  --shade2-hsl: var(--hue) 23% 62%;
  --shade3-hsl: var(--hue) 19% 56%;
  --shade4-hsl: var(--hue) 24% 46%;
  --shade5-hsl: var(--hue) 25% 27%;
  --shade6-hsl: var(--hue) 36% 23%;
  --shade7-hsl: var(--hue) 35% 17%;
  --shade8-hsl: var(--hue) 35% 15%;
  --shade9-hsl: var(--hue) 42% 12%;
  --shade10-hsl: var(--hue) 61% 7%;
  --nav-bar-hsl: var(--hue) 42% 11%;
}

html,
body,
button,
input,
textarea {
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  font-weight: 500;
  line-height: 1.5;
  color: var(--shade0);
}

button {
  color: inherit;
  border: none;
}

html {
  font-size: 16px;
}

h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
  padding: 0;
}

ol,
ul {
  list-style: none;
}

img {
  height: auto;
  user-select: none;
  user-drag: none;
}

svg {
  display: block;
  stroke-width: 0;
  stroke: none;
  fill: currentColor;
}
svg:not([width]) {
  width: 1em;
  height: auto;
}

::selection {
  /* WebKit/Blink Browsers */
  background: var(--primary);
  color: var(--white, white);
}

.type-h2 {
  font-weight: 700;
  font-size: var(--sp-12);
  line-height: var(--sp-16);
  letter-spacing: -0.009em;
}

.type-h3 {
  font-weight: 700;
  font-size: var(--sp-8);
  line-height: var(--sp-11);
  letter-spacing: -0.009em;
}
.type-h4 {
  font-weight: 700;
  font-size: var(--sp-7);
  line-height: var(--sp-10);
  letter-spacing: -0.009em;
}
.type-h5 {
  font-weight: 700;
  font-size: var(--sp-6);
  line-height: var(--sp-9);
  letter-spacing: -0.009em;
}
.type-h6 {
  font-weight: 700;
  font-size: var(--sp-4);
  line-height: var(--sp-7);
  letter-spacing: -0.009em;
}
.type-article-headline {
  font-weight: 600;
  font-size: var(--sp-4_5);
  line-height: var(--sp-7);
  letter-spacing: -0.009em;
}
.type-subtitle1 {
  font-weight: 700;
  font-size: var(--sp-4);
  line-height: var(--sp-7);
  letter-spacing: -0.009em;
}
.type-subtitle2 {
  font-weight: 700;
  font-size: var(--sp-3_5);
  line-height: var(--sp-6);
}
.type-body1,
.type-body1-form,
.type-body1-form--active {
  font-weight: 500;
  font-size: var(--sp-4);
  letter-spacing: -0.009em;
}
.type-body1 {
  line-height: var(--sp-7);
}
.type-body2,
.type-body2-form,
.type-body2-form--active {
  font-weight: 500;
  font-size: var(--sp-3_5);
  letter-spacing: -0.009em;
}
.type-body2 {
  line-height: var(--sp-6);
}
.type-body1-form,
.type-body1-form--active,
.type-body2-form,
.type-body2-form--active {
  line-height: var(--sp-4);
}
.type-body1-form--active,
.type-body2-form--active {
  font-weight: 700;
}

.type-caption,
.type-caption--semi,
.type-caption--bold {
  font-weight: 500;
  font-size: var(--sp-3);
  line-height: var(--sp-5);
  letter-spacing: -0.009em;
}
.type-caption--semi {
  font-weight: 600;
}
.type-caption--bold {
  font-weight: 700;
}
.type-overline {
  font-weight: 500;
  font-size: var(--sp-2_5);
  line-height: 1;
  letter-spacing: 1.5px;
  text-transform: uppercase;
}
.type-mini {
  font-weight: 700;
  font-size: 0.5625rem;
  line-height: 1rem;
  letter-spacing: -0.009em;
  text-transform: uppercase;
}
.type-form--button {
  font-weight: 600;
  font-size: var(--sp-3_5);
  line-height: var(--sp-5);
  letter-spacing: -0.009em;
}
.type-form--tab {
  font-weight: 600;
  font-size: var(--sp-3_5);
  line-height: var(--sp-4);
  letter-spacing: -0.009em;
}
.type-form--sortcut {
  font-weight: 600;
  font-size: calc(var(--sp-1) * 2.75);
  line-height: var(--sp-5);
  letter-spacing: -0.009em;
}
.type-button-text {
  font-weight: 600;
  font-size: var(--sp-3_5);
  line-height: var(--sp-3_5);
}

.card-container {
  background: var(--shade7);
  border-radius: var(--br);
}

/* Utility */
.flex {
  display: flex;
}
.flex.column {
  flex-direction: column;
}
.flex.inline {
  display: inline-flex;
}
.flex.align-center {
  align-items: center;
}
.flex.direction-column {
  flex-direction: column;
}
.flex.between,
.flex.justify-between {
  justify-content: space-between;
}
.flex.flex-end,
.flex.justify-end {
  justify-content: flex-end;
}
.flex.wrap {
  flex-wrap: wrap;
}
.flex.gap-sp-1 {
  gap: var(--sp-1);
}
.flex.gap-sp-2 {
  gap: var(--sp-2);
}
.flex.gap-sp-3 {
  gap: var(--sp-3);
}
.flex.gap-sp-4 {
  gap: var(--sp-4);
}
.flex.gap-sp-5 {
  gap: var(--sp-5);
}
.flex.gap-sp-6 {
  gap: var(--sp-6);
}

html,
body {
  margin: 0;
  padding: 0;
  width: 100%;
}
body {
  color: var(--shade0);
  background: var(--shade9);
}
body {
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  cursor: default;
}
a {
  color: inherit;
  text-decoration: none;
}
textarea::-webkit-input-placeholder,
input::-webkit-input-placeholder {
  color: var(--shade3);
}
.disable-animations *,
.disable-animations *::before,
.disable-animations *::after {
  transition: none !important;
  animation: none !important;
}
[data-tooltip] * {
  pointer-events: none;
}
@keyframes invalid-link {
  from { color: var(--primary); }
  to { color: var(--blue); }
}
`;

export default createGlobalStyles`${styles}`;
