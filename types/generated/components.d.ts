import type { Schema, Attribute } from '@strapi/strapi';

export interface SeoMetaData extends Schema.Component {
  collectionName: 'components_seo_meta_data';
  info: {
    displayName: 'Meta Data';
  };
  attributes: {
    MetaTitle: Attribute.String;
    MetaDescription: Attribute.Text;
    MetaImage: Attribute.Media<'images'>;
  };
}

export interface ElementsPricingCard extends Schema.Component {
  collectionName: 'components_elements_pricing_cards';
  info: {
    displayName: 'Pricing card';
  };
  attributes: {
    planType: Attribute.String;
    planPrice: Attribute.String;
    isFeatured: Attribute.Boolean & Attribute.DefaultTo<false>;
    services: Attribute.Relation<
      'elements.pricing-card',
      'oneToMany',
      'api::service.service'
    >;
    Link: Attribute.Component<'elements.button-link'>;
  };
}

export interface ElementsInput extends Schema.Component {
  collectionName: 'components_elements_inputs';
  info: {
    displayName: 'Input';
  };
  attributes: {
    placeholder: Attribute.String;
    label: Attribute.String;
    inputType: Attribute.String;
  };
}

export interface ElementsForm extends Schema.Component {
  collectionName: 'components_elements_forms';
  info: {
    displayName: 'Form';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    input: Attribute.Component<'elements.input', true>;
    button: Attribute.Component<'elements.button-link'>;
  };
}

export interface ElementsCard extends Schema.Component {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'card';
  };
  attributes: {
    image: Attribute.Media<'images'>;
    Heading: Attribute.String;
    description: Attribute.Text;
  };
}

export interface ElementsButtonLink extends Schema.Component {
  collectionName: 'components_elements_button_links';
  info: {
    displayName: 'Button Link';
    description: '';
  };
  attributes: {
    Title: Attribute.String;
    link: Attribute.String;
    isExternal: Attribute.Boolean & Attribute.DefaultTo<false>;
    type: Attribute.Enumeration<['PRIMARY', 'SECONDARY']>;
  };
}

export interface BlocksRow extends Schema.Component {
  collectionName: 'components_blocks_rows';
  info: {
    displayName: 'Row';
  };
  attributes: {
    card: Attribute.Component<'elements.card', true>;
  };
}

export interface BlocksPricing extends Schema.Component {
  collectionName: 'components_blocks_pricings';
  info: {
    displayName: 'Pricing';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.String;
    plan: Attribute.Component<'elements.pricing-card', true>;
  };
}

export interface BlocksHero extends Schema.Component {
  collectionName: 'components_blocks_hero_s';
  info: {
    displayName: 'Hero ';
    description: '';
  };
  attributes: {
    heading: Attribute.String;
    text: Attribute.Text;
    Link: Attribute.Component<'elements.button-link'>;
    image: Attribute.Media<'images'>;
  };
}

export interface BlocksCta extends Schema.Component {
  collectionName: 'components_blocks_ctas';
  info: {
    displayName: 'Cta';
  };
  attributes: {
    heading: Attribute.String;
    description: Attribute.Text;
    form: Attribute.Component<'elements.form'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'seo.meta-data': SeoMetaData;
      'elements.pricing-card': ElementsPricingCard;
      'elements.input': ElementsInput;
      'elements.form': ElementsForm;
      'elements.card': ElementsCard;
      'elements.button-link': ElementsButtonLink;
      'blocks.row': BlocksRow;
      'blocks.pricing': BlocksPricing;
      'blocks.hero': BlocksHero;
      'blocks.cta': BlocksCta;
    }
  }
}
