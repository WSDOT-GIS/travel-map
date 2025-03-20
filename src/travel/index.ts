const agolItemIds = [
	["Cameras", "6692b4f163bd4ec99b5a897b2d207aa6"],
	["Road Alert - Points", "82723db6325e46e0bc9e5a794a914aec"],
	["Mountain Pass Reports", "11d3f0874d504423adc889fe1448471c"],
	["Truck Restrictions - Line", "48b9c841e29f445293ac497bbd132a98"],
	["Weather Stations", "0da55e5e736d4da88b1a411bdf96b766"],
	["Road Alerts - Line", "82497d96d45e4acbb2e64bf925711189"],
	["Border Crossing Wait Times", "0c8628eabe2f468dbf71ba678e17f0dc"],
	["Road Closures", "c354e33eef064c2c93fd10cc170889f4"],
	["Truck Restrictions - Point", "eed07145b2dc4a938194902ae88c418f"],
] as const;

/**
 * Creates and returns an array of layers to be added to the map. This function
 * imports necessary modules from the ArcGIS CDN, defines an interface for layer
 * properties, and includes helper functions to generate unique layer IDs and
 * create individual layers from portal items. It organizes certain layers into
 * group layers based on predefined categories, such as "Alerts" and "Truck
 * Restrictions". The resulting layers include both grouped and standalone
 * layers, with visibility and popup options configured.
 *
 * @returns A promise that resolves to an array of
 * layers, including both group layers and individual feature layers.
 */
export async function createLayers() {
	// Import modules from the ArcGIS CDN.
	const [FeatureLayer, GroupLayer] = await window.$arcgis.import<
		[typeof __esri.FeatureLayer, typeof __esri.GroupLayer]
	>([
		"@arcgis/core/layers/FeatureLayer.js",
		"@arcgis/core/layers/GroupLayer.js",
	]);
	interface CreateLayerProperties
		extends Pick<Required<__esri.FeatureLayerProperties>, "title"> {
		portalItemId: __esri.PortalItem["id"];
	}

	/**
	 * Replaces all spaces in the given string with underscores.
	 * @param name - The name to convert.
	 * @returns The converted string.
	 */
	const convertNameToId = (name: CreateLayerProperties["title"]) =>
		name?.replaceAll(/\s+/g, "_");

	/**
	 * Creates a layer from a portal item.
	 * @param {Object} props
	 * @param {string} props.name - The name of the layer.
	 * @param {string} props.portalItemId - The ID of the portal item to use.
	 * @returns {__esri.FeatureLayer}
	 */
	function createLayer({
		title,
		portalItemId,
	}: CreateLayerProperties): __esri.FeatureLayer {
		const layer = new FeatureLayer({
			title,
			portalItem: {
				id: portalItemId,
			},
			visible: true,
			id: convertNameToId(title),
			popupEnabled: true,
		});

		return layer;
	}

	/**
	 * Array of layer names that should be grouped into the alerts layer.
	 */
	const roadAlertGroupNames = ["Road Alert - Points", "Road Alerts - Line"];
	/**
	 * Array of layer names that should be grouped into the truck restrictions layer.
	 */
	const truckRestrictionGroupNames = [
		"Truck Restrictions - Point",
		"Truck Restrictions - Line",
	];
	const defaultVisibleLayers = [...roadAlertGroupNames, "Road Closures"];

	/**
	 * Creates an array of layers from the given array of portal item IDs and
	 * names, filtering out any layers that do not match the given include
	 * or exclude criteria.
	 *
	 * If `includes` is provided, only layer names that are part of the
	 * `includes` array will be included in the resulting layers array.
	 *
	 * If `excludes` is provided, any layer names that are part of the
	 * `excludes` array will be excluded from the resulting layers array.
	 *
	 * @param itemIds An array of tuples consisting of layer name and portal item ID.
	 * @param includes An array of layer names to include in the resulting layers array.
	 * @param excludes An array of layer names to exclude from the resulting layers array.
	 * @returns An array of layers created from the given array of portal item IDs and names.
	 */
	const createMultipleLayers = (
		itemIds: typeof agolItemIds,
		includes?: string[],
		excludes?: string[],
	) =>
		itemIds
			.filter(
				([name]) =>
					includes?.includes(name) || (excludes && !excludes.includes(name)),
			)
			.map(([title, portalItemId]) => createLayer({ title, portalItemId }));

	/**
	 * Common options for all of the group layers we will be creating.
	 */
	const groupLayerCommonOptions: __esri.GroupLayerProperties = {
		listMode: "hide-children",
	};

	/*
	Alerts and Trucks each have both a point and line layer.
	We will create a group layer to group these point and line layers
	in the LayerList.
	*/

	const alertGroupLayer = new GroupLayer({
		...groupLayerCommonOptions,
		title: "Alerts",
		layers: createMultipleLayers(agolItemIds, roadAlertGroupNames),
	});

	const truckRestrictionGroupLayer = new GroupLayer({
		...groupLayerCommonOptions,
		title: "Truck Restrictions",
		layers: createMultipleLayers(agolItemIds, truckRestrictionGroupNames),
	});

	const layers = [
		alertGroupLayer,
		truckRestrictionGroupLayer,
		// Create an array of layers, excluding the ones that have already
		// been added to group layers.
		...createMultipleLayers(agolItemIds, undefined, [
			...truckRestrictionGroupNames,
			...roadAlertGroupNames,
		]),
	];

	return layers;
}
