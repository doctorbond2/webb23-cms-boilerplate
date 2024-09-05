'use client';
import { StoryblokCMS } from '@/utils/cms';
import { storyblokInit, apiPlugin } from '@storyblok/react/rsc';
import Hero from '@/components/nestable/Hero';
import Page from '@/components/content-types/Page';
import Teaser from '@/components/nestable/Teaser';
import RichTextDefault from '@/components/nestable/RichText';
import Header from '@/components/nestable/Header';
import Article from '@/components/nestable/Article';
import ImageWithText from '@/components/nestable/ImageWithText';
import Grid from '@/components/nestable/Grid';
import SBImage from '@/components/nestable/SBImage';
import FullArticle from '@/components/nestable/FullArticle';
const components = {
  page: Page,
  teaser: Teaser,
  richtext: RichTextDefault,
  hero: Hero,
  header: Header,
  article: Article,
  grid: Grid,
  image_with_text: ImageWithText,
  sb_image: SBImage,
  full_article: FullArticle,
};

storyblokInit({
  accessToken: StoryblokCMS.TOKEN,
  use: [apiPlugin],
  components,
});

export default function StoryblokProvider({ children }) {
  return children;
}
