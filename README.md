Olark: Live Chat For Meteor
===================================


### Installing
```
meteor add etjana:olark
```

If you don't have a settings.json file, you need to add one and load it according to the [Meteor Settings documentation](http://docs.meteor.com/#meteor_settings).

In settings.json add
```json
{
  "public" : {
    "olark": {
      "identity":"XXXX-XXX-XX-XXXX"
    }
  }
}
```

**DISCLAIMER:**

This packages is a copy with minor changes of the [tkornblit/meteor-olark](https://github.com/tkornblit/meteor-olark) package, but making it compatible with Meteor => 0.9.2

There is also a [PR](https://github.com/tkornblit/meteor-olark/pull/1) pending on the tkornblit package, but with no reponse that why im creating this package.
