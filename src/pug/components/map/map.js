import customization from "./customization.json";

export const map = () => {
  const mapObj = document.querySelector("#map");

  if (mapObj) {
    let center = mapObj.dataset.center.split(" ").map(Number);
    initMap();
    async function initMap() {
      await ymaps3.ready;
      const {
        YMap,
        YMapDefaultSchemeLayer,
        YMapFeature,
        YMapFeatureDataSource,
        YMapLayer,
        YMapControls,
        YMapMarker,
        YMapDefaultFeaturesLayer,
      } = ymaps3;
      const { YMapDefaultMarker } = await ymaps3.import(
        "@yandex/ymaps3-markers@0.0.1"
      );
      const map = new YMap(
        document.getElementById("map"),
        {
          location: {
            center: center,
            zoom: window.innerWidth > 768 ? 17 : 12,
          },
        },
        [new YMapDefaultFeaturesLayer({})]
      );
      const { YMapZoomControl } = await ymaps3.import(
        "@yandex/ymaps3-controls@0.0.1"
      );
      const controls = new YMapControls({
        position: "top left",
        orientation: "vertical",
      });
      map.addChild(
        // Here we place the control on the right
        new YMapControls({ position: "right" })
          // Add the first zoom control to the map
          .addChild(new YMapZoomControl({}))
      );
      map.addChild(
        new YMapDefaultSchemeLayer({ customization: customization })
      );
      const markerElement = document.createElement("div");
      const markerImg = document.createElement("img");
      markerElement.className = "marker";
      markerImg.className = "marker-img";
      markerImg.src = "../img/icons/map-pin.svg";
      markerElement.appendChild(markerImg);

      const marker = new YMapMarker(
        {
          coordinates: [37.56644049999993, 55.742037069001064],
          draggable: false,
          mapFollowsOnDrag: true,
        },
        markerElement
      );

      map.addChild(marker);
    }
  }
};
