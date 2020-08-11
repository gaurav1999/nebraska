# Nebraska  <img align="right" width=384 src="frontend/src/img/nebraska-logo.svg">

Nebraska is an update manager for [Flatcar Container Linux](https://www.flatcar-linux.org/).

## Overview

Nebraska offers an easy way to monitor and manage the rollout of updates to applications that use
the [Omaha](https://code.google.com/p/omaha/) protocol, with special functionality for Flatcar Container Linux updates.

## Features

- Monitor and control application updates;
- Optimized for serving updates to Flatcar Container Linux;
- Automatically fetch new Flatcar Container Linux updates;
- Store and serve Flatcar Container Linux payloads (optional);
- Compatible with any applications that use the Omaha protocol;
- Define groups, channels, and packages;
- Control what updates are rolled out for which instance groups, as well as when and how they are updates;
- Pause/resume updates at any time;
- Statistics about the versions installed for instances, status history, and updates progress, etc.;
- Activity timeline to quickly see important events or errors;

## Screenshots

<table>
    <tr>
        <td width="33%"><img src="https://github.com/kinvolk/nebraska/raw/screenshots/screenshots/main.png"></td>
        <td width="33%"><img src="https://github.com/kinvolk/nebraska/raw/screenshots/screenshots/flatcar_app.png"></td>
    </tr>
    <tr>
        <td width="33%"><img src="https://github.com/kinvolk/nebraska/raw/screenshots/screenshots/group_details.png"></td>
        <td width="33%"><img src="https://github.com/kinvolk/nebraska/raw/screenshots/screenshots/instance_details.png"></td>
    </tr>
</table>

## Issues

Please report any issues in [here](https://github.com/kinvolk/nebraska/issues).


## Managing Updates

Read the docs on [how to manage updates].

## Contributing

If you want to start contributing to Nebraska, please check out the [contributing] documentation.

### User Access

For instructions on how to set up user access, please check the [authorization documentation](./docs/authorization.md).

## License

Nebraska is released under the terms of the [AGPL v3](https://www.gnu.org/licenses/agpl-3.0.en.html), and was forked from the [CoreRoller](https://github.com/coreroller/coreroller) project (licensed under [Apache 2.0](http://www.apache.org/licenses/LICENSE-2.0)).
