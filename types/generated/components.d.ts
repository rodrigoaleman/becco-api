import type { Schema, Attribute } from '@strapi/strapi';

export interface HomeServices extends Schema.Component {
  collectionName: 'components_home_services';
  info: {
    displayName: 'services';
    icon: 'chartBubble';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.String;
    icon: Attribute.String;
  };
}

export interface TypeDetail extends Schema.Component {
  collectionName: 'components_type_details';
  info: {
    displayName: 'Detail';
    icon: 'information';
  };
  attributes: {
    info: Attribute.String;
  };
}

export interface TypePropertyType extends Schema.Component {
  collectionName: 'components_type_property_types';
  info: {
    displayName: 'Property_Type';
    icon: 'shoppingCart';
  };
  attributes: {
    Price: Attribute.Decimal;
    type: Attribute.Enumeration<['For Sale', 'For Rent']>;
  };
}

export interface TypeRestriction extends Schema.Component {
  collectionName: 'components_type_restrictions';
  info: {
    displayName: 'Restriction';
    icon: 'thumbDown';
  };
  attributes: {
    restriction: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'home.services': HomeServices;
      'type.detail': TypeDetail;
      'type.property-type': TypePropertyType;
      'type.restriction': TypeRestriction;
    }
  }
}
