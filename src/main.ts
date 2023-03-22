import EsriMap from "@arcgis/core/Map";
import MapView from "@arcgis/core/views/MapView";
import Search from "@arcgis/core/widgets/Search";
import LocatorSearchSource from "@arcgis/core/widgets/Search/LocatorSearchSource";
import waExtent from "./WAExtent";

import "./index.css";

const map = new EsriMap({
  basemap: "topo-vector",
});

const view = new MapView({
  container: "viewDiv",
  map,
  extent: waExtent,
});

const search = new Search({
  view,
  // This search is configured to only search within the extent of WA.
  // To get the default behavior, change "includeDefaultSources" to
  // true and remove the "sources" property.
  includeDefaultSources: false,
  sources: [
    new LocatorSearchSource({
      url: "http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer",
      filter: {
        geometry: waExtent,
      },
      countryCode: "US",
    }),
  ],
});

view.ui.add(search, "top-right");
