import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from 'leaflet';

const Map = () => {
    // Coordenadas de los tres negocios
    const locations = [
        {
            position: [-25.60584003541512, -54.550513428835785],
            iconUrl: "/lrvl.png",
            title: "La Resera Virgin Lodge",
            description: "¡Ubicado en el corazón de la selva Misionera!",
            link: "https://maps.app.goo.gl/LzaKfZZkbm9v7Jup8"
        },
        {
            position: [-27.37049118624897, -55.896419128835795],
            iconUrl: "/igQueen.png",
            title: "Hotel Zarek",
            description: "¡Situado en el corazón de Posadas, Misiones!",
            link: "https://maps.app.goo.gl/d89H1wBzaEXNyy9E6"
        },
        // {
        //     position: [-50.33567214667755, -72.26871291655024],
        //     iconUrl: "/calafatelogo.png",
        //     title: "Posada Los Alamos",
        //     description: "¡En el centro de El Calafate, cerca del lago Argentino!",
        //     link: "https://maps.app.goo.gl/BsratKMguSywRxLM8"
        // }
    ];

    return (
        <MapContainer
            center={locations[1].position} // Centrado en la primera ubicación
            zoom={6} // Zoom inicial más amplio para mostrar todas las ubicaciones
            // style={{ height: "28rem", width: "95%", margin: "4rem auto" }}
            scrollWheelZoom={false}
            dragging={true}
        >
            {/* Capa de mapa base */}
            <TileLayer
                url="https://wms.ign.gob.ar/geoserver/gwc/service/tms/1.0.0/capabaseargenmap@EPSG%3A3857@png/{z}/{x}/{-y}.png"
            />

            {/* Iterar sobre las ubicaciones para crear los marcadores */}
            {locations.map((location, index) => {
                const customIcon = L.icon({
                    iconUrl: location.iconUrl,
                    iconSize: [72, 62],
                    iconAnchor: [25, 50]
                });

                return (
                    <Marker
                        key={index}
                        position={location.position}
                        icon={customIcon}
                        eventHandlers={{
                            click: () => {
                                window.open(location.link, "_blank");
                            }
                        }}
                    >
                        <Popup>{location.description}</Popup>
                    </Marker>
                );
            })}
        </MapContainer>
    );
};

export default Map;
