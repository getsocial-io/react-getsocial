# react-getsocial

NPM package to include GetSocial on your React website

## Setup

```bash
npm i react-getsocial --save
```

## How to

```javascript
import { getsocial } from 'react-getsocial';

getsocial.include(site_id);
```

Where the `site_id` argument is your [GetSocial website identifier](https://getsocial.io/redirect/options/api-keys), an alphanumeric string with 6 or 8 characters.
