/**
 * Cloudinary-hosted testimonial videos.
 *
 * Centralised here (rather than inline in a component) since these are used in
 * more than one place. Import with:
 *   import { studentVideos, videoPoster } from "@/lib/videos";
 */
export const studentVideos = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dzep1mgx8/video/upload/v1783602685/VID_20260501_234046_666_bsl_t7a1cs.mp4",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dzep1mgx8/video/upload/v1783602680/VID_20260501_233214_487_bsl_pe2stk.mp4",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dzep1mgx8/video/upload/v1783602651/VID_20260501_233602_498_bsl_hapcd1.mp4",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dzep1mgx8/video/upload/v1783602622/VID_20260401_031324_079_bsl_rhpvfu.mp4",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dzep1mgx8/video/upload/v1783602632/VID_20260501_232704_794_bsl_wyelk7.mp4",
  },
];

/**
 * Derive a poster (thumbnail) image URL from a Cloudinary video URL by grabbing
 * its first frame (`so_0`) as a JPG. Used as the <video poster> so the box
 * shows a preview instantly without downloading any of the video itself.
 */
export const videoPoster = (url) =>
  url.replace("/upload/", "/upload/so_0/").replace(/\.mp4$/, ".jpg");
