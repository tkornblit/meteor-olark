# Olark: Live Chat

This is the Meteor package for Olark, software that lifts customer support and sales.

## Installation

```
meteor add tkornblit:olark
```

## Settings

If you don't have a `settings.json` file, you need to [add one](http://docs.meteor.com/#meteor_settings). Then, adjust your `public` section this way:

```json
{
  "public" : {
    "olark": {
      "identity": "XXXX-XXX-XX-XXXX"
    }
  }
}
```

The `identity` is your Site-ID provided by Olark. You can see it in [Installation](https://www.olark.com/settings/code) section of your Olark dashboard.

**DISCLAIMER:** This README.md was quickly created by the help of https://github.com/datariot/meteor-ganalytics.
