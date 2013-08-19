## sleepyti.me
> an entirely client-side web app bedtime calculator that helps you decide when to go to sleep.

[sleepyti.me](http://sleepyti.me) works by counting backwards in 90-minute sleep cycles so
that you wake up refreshed and alert (instead of tired and groggy). It is built with a bunch of great tools, including
angular, grunt, yeoman, karma, sass, and bower.

### Development

This project requires node.js. I developed it with v0.10.13; other stable versions may work as well.

Clone the project from github, then run `npm install` to install the dev dependencies, which include a local static
assets server. Next, run `bower install` to pull down frontend dependencies. At this point, you're ready to begin
developing. The following commands are available to you:

`grunt server`: Fire up a server so you can develop locally. It's equipped with live-reload, so when you make changes
to files the page will refresh automatically.

`grunt test`: Run the tests.

`grunt dist`: Minify everything and bundle it up to be ready for deployment.

For more information, see Gruntfile.js.
