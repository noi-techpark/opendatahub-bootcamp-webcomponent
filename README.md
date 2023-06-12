<!--
SPDX-FileCopyrightText: NOI Techpark <digital@noi.bz.it>

SPDX-License-Identifier: CC0-1.0
-->

## Web Component

![REUSE Compliance Check](https://github.com/noi-techpark/opendatahub-bootcamp-webcomponent/actions/workflows/reuse.yml/badge.svg)

For the second challenge, the team will be responsible for developing a web component that will
be added to the website (developed by the first challenge team) and shows the nearest parking
stations based on the selected POI GPS information. The web component should display a list of
parking stations with their respective distances from the selected POI. As a bonus, the team can
add functionality to display the nearest e-charging stations and predict parking station
availability in x hours. The web component could also include a link to a route plan system.

https://developer.mozilla.org/en-US/docs/Web/API/Web_Components


## Dev Stack

Windows 10 Pro

Visual Studio Code 1.78.2

Node.js 134.17.6

## Dev Editor Used

Visual Code


## Open Data Hub Call

No authentication used. Public API:

https://mobility.api.opendatahub.com/v2/tree,node/ParkingStation/*/latest?where=sactive.eq.true&select=scoordinate,scode,smetadata,sdatatypes

for parameters help:

https://swagger.opendatahub.com/?url=https://mobility.api.opendatahub.com/v2/apispec#/Mobility%20V2/get_v2__representation_


https://swagger.opendatahub.com/?url=https://mobility.api.opendatahub.com/v2/apispec#/Mobility%20V2/get_v2__representation___stationTypes___dataTypes__latest



## Web Component Parameters

The component need only need geo pos lon, lat

https://webcomponents.opendatahub.testingmachine.eu/webcomponent/Bootcamp-hello-world?from=%2F%3Ftags%3Dany%26term%3Dbootcam


## Released as git hub action

On git push it will release on  
 
 https://webcomponents.opendatahub.testingmachine.eu/
 
 
## License
 
 AGPL, see [LICENSE.md](LICENSE.md)
 
 Checked on demand with 
 
 https://api.reuse.software/projects

## REUSE

This project is [REUSE](https://reuse.software) compliant, more information about the usage of REUSE in NOI Techpark repositories can be found [here](https://github.com/noi-techpark/odh-docs/wiki/Guidelines-for-developers-and-licenses#guidelines-for-contributors-and-new-developers).

Since the CI for this project checks for REUSE compliance you might find it useful to use a pre-commit hook checking for REUSE compliance locally. The [pre-commit-config](.pre-commit-config.yaml) file in the repository root is already configured to check for REUSE compliance with help of the [pre-commit](https://pre-commit.com) tool.

Install the tool by running:
```bash
pip install pre-commit
```
Then install the pre-commit hook via the config file by running:
```bash
pre-commit install
```
