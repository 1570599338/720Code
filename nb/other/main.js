(function() {
    var V = V || {
        Aa: {
            Jc: 0,
            Wk: []
        }
    },
    wc = {};
    V.CLASS_NAME = "AMap";
    V.a = V.BuryPoint = {
        sL: {},
        uB: {},
        options: {},
        LB: {},
        mG: {},
        nG: {},
        YG: {},
        ZG: {}
    };
    V.a.lg = V.BuryPoint.dic = {
        "AMap.event": {
            c: "ev",
            m: {
                addDomListener: "a",
                addListener: "b",
                addListenerOnce: "c",
                removeListener: "d",
                trigger: "e"
            }
        },
        AMap: {
            c: "aa",
            m: {
                convertFrom: "a"
            }
        },
        "AMap.Map": {
            c: "m",
            o: {
                view: "a",
                layers: "b",
                level: "c",
                center: "d",
                zooms: "e",
                lang: "f",
                cursor: "g",
                crs: "h",
                animateEnable: "i",
                isHotspot: "j",
                defaultLayer: "k",
                rotateEnable: "l",
                resizeEnable: "m",
                dragEnable: "n",
                zoomEnable: "o",
                doubleClickZoom: "p",
                keyboardEnable: "q",
                jogEnable: "r",
                scrollWheel: "s",
                touchZoom: "t",
                mapStyle: "u",
                "features ": "v",
                zoom: "w"
            },
            m: {
                setMapStyle: "a",
                getMapStyle: "b",
                getFeatures: "c",
                setFeatures: "d",
                setLang: "e",
                getLang: "f",
                setCity: "g",
                getCity: "h",
                getAdcode: "i",
                setLimitBounds: "j",
                clearLimitBounds: "k",
                getLimitBounds: "l",
                setZoom: "m",
                getZoom: "n",
                getCenter: "o",
                setCenter: "p",
                setRotation: "q",
                getBounds: "r",
                getStatus: "s",
                setStatus: "t",
                getResolution: "u",
                getScale: "v",
                getDefaultCursor: "w",
                setDefaultCursor: "x",
                zoomIn: "y",
                zoomOut: "z",
                setZoomAndCenter: "0",
                setBounds: "1",
                clearMap: "2",
                destroy: "3",
                addControl: "4",
                removeControl: "5",
                clearControl: "6",
                clearInfoWindow: "7",
                remove: "8",
                add: "9",
                getAllOverlays: "a1",
                getSize: "a2",
                getContainer: "a3",
                panTo: "a4",
                panBy: "a5",
                setFitView: "a6",
                setLayers: "a7",
                getLayers: "a8",
                getDefaultLayer: "a9",
                setDefaultLayer: "a0",
                pixelToLngLat: "b0",
                lnglatToPixel: "b1",
                drawPolyline: "b2",
                drawPolygon: "b3",
                drawCircle: "b4"
            }
        },
        "AMap.View2D": {
            c: "v",
            o: {
                center: "a",
                rotation: "b",
                zoom: "c",
                crs: "d"
            }
        },
        "AMap.Buildings": {
            p: "AMap.Layer",
            c: "b"
        },
        "AMap.CustomLayer": {
            p: "AMap.Layer",
            c: "c",
            o: {
                map: "a",
                zIndex: "b",
                opacity: "c",
                zooms: "d"
            },
            m: {
                setOpacity: "2a",
                getContainer: "2b",
                show: "2c",
                hide: "2d",
                setzIndex: "2e"
            }
        },
        "AMap.ImageLayer": {
            p: "AMap.Layer",
            c: "i",
            o: {
                bounds: "a",
                url: "b",
                map: "c",
                opacity: "d",
                visible: "e",
                zIndex: "f",
                zooms: "g"
            },
            m: {
                getMap: "4a",
                show: "4b",
                getOpacity: "4c",
                setOpacity: "4d",
                getBounds: "4e",
                setBounds: "4f",
                getImageUrl: "4g",
                setImageUrl: "4h",
                hide: "4i",
                setOptions: "4j",
                getOptions: "4k"
            }
        },
        "AMap.Layer": {
            c: "l",
            m: {
                getZooms: "a",
                setOpacity: "b",
                show: "c",
                hide: "d",
                setMap: "e",
                getMap: "f",
                setzIndex: "g"
            }
        },
        "AMap.MassMarks": {
            p: "AMap.Layer",
            c: "ma",
            o: {
                zIndex: "a",
                opacity: "b",
                zooms: "c",
                anchor: "d",
                url: "e",
                size: "f",
                cursor: "g",
                alwaysRender: "h"
            },
            m: {
                setData: "0a",
                getData: "0b",
                getStyle: "0c",
                setStyle: "0d",
                setMap: "0e"
            }
        },
        "AMap.TileLayer": {
            p: "AMap.Layer",
            c: "tl",
            o: {
                map: "a",
                tileSize: "b",
                tileUrl: "c",
                errorUrl: "d",
                getTileUrl: "e",
                zIndex: "f",
                opacity: "g",
                zooms: "h",
                detectRetina: "i"
            },
            m: {
                setTextIndex: "3a",
                getTiles: "3b",
                setTileUrl: "3d",
                getTileUrl: "3e",
                getZooms: "3f",
                stopRefresh: "3g",
                startRefresh: "3h",
                reload: "3i"
            }
        },
        "AMap.TileLayer.Satellite": {
            p: "AMap.TileLayer",
            c: "s",
            o: {
                map: "a",
                zIndex: "b",
                opacity: "c",
                zooms: "d",
                detectRetina: "e"
            }
        },
        "AMap.TileLayer.RoadNet": {
            p: "AMap.TileLayer",
            c: "r",
            o: {
                map: "a",
                zIndex: "b",
                opacity: "c",
                zooms: "d",
                detectRetina: "e"
            }
        },
        "AMap.TileLayer.Traffic": {
            p: "AMap.TileLayer",
            c: "t",
            o: {
                map: "a",
                zIndex: "b",
                opacity: "c",
                zooms: "d",
                detectRetina: "e",
                autoRefresh: "f",
                interval: "g"
            }
        },
        "AMap.Vector": {
            p: "AMap.Overlay",
            c: "v",
            m: {
                show: "4a",
                hide: "4b",
                getVisible: "4c",
                getOptions: "4d",
                setOptions: "4e",
                setDraggable: "4f"
            }
        },
        "AMap.VectorTile": {
            p: "AMap.Layer",
            c: "vt"
        },
        "AMap.Circle": {
            p: "AMap.Vector",
            c: "ci",
            o: {
                map: "a",
                zIndex: "b",
                center: "c",
                radius: "d",
                strokeColor: "e",
                strokeOpacity: "f",
                strokeWeight: "g",
                fillColor: "h",
                fillOpacity: "i",
                strokeStyle: "j",
                extData: "k",
                strokeDasharray: "l"
            },
            m: {
                setCenter: "8a",
                getCenter: "8b",
                setRadius: "8c",
                getRadius: "8d",
                contains: "8e"
            }
        },
        "AMap.ContextMenu": {
            p: "AMap.Overlay",
            c: "cm",
            o: {
                position: "a",
                content: "b",
                width: "c"
            },
            m: {
                addItem: "2a",
                removeItem: "2b",
                open: "2c",
                close: "2d"
            }
        },
        "AMap.GroundImage": {
            p: "AMap.ImageLayer",
            c: "g",
            o: {
                map: "a",
                clickable: "b",
                opacity: "c"
            },
            m: {
                setMap: "8a"
            }
        },
        "AMap.Icon": {
            c: "ic",
            o: {
                size: "a",
                imageOffset: "b",
                image: "c",
                imageSize: "c"
            },
            m: {
                setImageSize: "a",
                getImageSize: "b"
            }
        },
        "AMap.ImageMarker": {
            p: "AMap.Overlay",
            c: "im",
            m: {
                setPosition: "3a",
                getBounds: "3b",
                getPosition: "3c",
                hide: "3d",
                show: "3e",
                setCursor: "3f",
                setRotation: "3g",
                setzIndex: "3h"
            }
        },
        "AMap.InfoWindow": {
            p: "AMap.Overlay",
            c: "iw",
            o: {
                isCustom: "a",
                autoMove: "b",
                closeWhenClickMap: "c",
                content: "d",
                size: "e",
                offset: "f",
                position: "g",
                showShadow: "h"
            },
            m: {
                open: "1a",
                close: "1b",
                setContent: "1c",
                getContentU: "1d",
                getContent: "1e",
                setPosition: "1f",
                setOffset: "1g",
                getPosition: "1h",
                setSize: "1i",
                getSize: "1j",
                getIsOpen: "1k"
            }
        },
        "AMap.Marker": {
            p: "AMap.Overlay",
            c: "mk",
            o: {
                map: "a",
                position: "b",
                offset: "c",
                icon: "d",
                content: "e",
                topWhenClick: "f",
                topWhenMouseOver: "g",
                draggable: "h",
                raiseOnDrag: "j",
                cursor: "k",
                visible: "l",
                zIndex: "m",
                angle: "n",
                autoRotation: "o",
                animation: "p",
                shadow: "q",
                title: "r",
                clickable: "s",
                shape: "t",
                extData: "u"
            },
            m: {
                setRaiseOnDrag: "9a",
                setPosition: "9b",
                getPosition: "9c",
                setIcon: "9d",
                getIcon: "9e",
                setContent: "9f",
                getContent: "9g",
                hide: "9h",
                show: "9i",
                setCursor: "9j",
                setRotation: "9k",
                setAngle: "9l",
                getAngle: "9m",
                setOffset: "9n",
                getOffset: "9o",
                setzIndex: "9p",
                setOpacity: "9q",
                setDraggable: "9r",
                getDraggable: "9s",
                moveTo: "9t",
                moveAlong: "9u",
                stopMove: "9v",
                setShadow: "9w",
                getShadow: "9x",
                setClickable: "9y",
                getClickable: "9z",
                setTitle: "90",
                getTitle: "91",
                setLabel: "92",
                getLabel: "93",
                setTop: "94",
                getTop: "95",
                setShape: "96",
                getShape: "97",
                setAnimation: "98",
                getAnimation: "99",
                getMap: "9a1"
            }
        },
        "AMap.MarkerShape": {
            c: "ms",
            o: {
                coords: "a",
                type: "b"
            }
        },
        "AMap.Overlay": {
            c: "o",
            m: {
                show: "a",
                hide: "b",
                setMap: "c",
                getMap: "d",
                setExtData: "e",
                getExtData: "f"
            }
        },
        "AMap.Poly": {
            p: "AMap.Vector",
            c: "ly",
            m: {
                setPath: "5a",
                getPath: "5b"
            }
        },
        "AMap.Polygon": {
            p: "AMap.Poly",
            c: "gn",
            o: {
                map: "a",
                zIndex: "b",
                path: "c",
                strokeColor: "d",
                strokeOpacity: "e",
                strokeWeight: "f",
                fillColor: "g",
                fillOpacity: "h",
                extData: "i",
                strokeStyle: "j",
                strokeDasharray: "k"
            },
            m: {
                getArea: "6a",
                toString: "6b",
                contains: "6c"
            }
        },
        "AMap.Polyline": {
            p: "AMap.Poly",
            c: "le",
            o: {
                map: "a",
                zIndex: "b",
                geodesic: "c",
                isOutline: "d",
                outlineColor: "e",
                path: "f",
                strokeColor: "g",
                strokeOpacity: "h",
                strokeWeight: "i",
                strokeStyle: "j",
                strokeDasharray: "k",
                extData: "l"
            },
            m: {
                getLength: "7a"
            }
        },
        "AMap.Text": {
            p: "AMap.Overlay",
            c: "tt"
        },
        "AMap.Panorama": {
            c: "aa"
        },
        "AMap.PanoramaMarker": {
            c: "ar"
        },
        "AMap.PanoramaService": {
            c: "ae"
        },
        "AMap.AdvancedInfoWindow": {
            p: "AMap.InfoWindow",
            c: "pa",
            o: {
                autoMove: "a",
                closeWhenClickMap: "b",
                content: "c",
                offset: "d",
                position: "e",
                panel: "f",
                searchRadius: "g",
                placeSearch: "h",
                driving: "i",
                walking: "j",
                transit: "k",
                asOrigin: "l",
                asDestination: "m"
            },
            m: {
                clear: "aa",
                searchPoiByKeyWord: "ab"
            }
        },
        "AMap.AntiCrabFrame": {
            c: "pb",
            m: {
                setMapStyle: "a"
            }
        },
        "AMap.ArrivalRange": {
            c: "pc",
            m: {
                search: "a"
            }
        },
        "AMap.Autocomplete": {
            c: "pd",
            o: {
                type: "a",
                city: "b",
                input: "c"
            },
            m: {
                setType: "a",
                setCity: "b",
                search: "c"
            }
        },
        "AMap.AutoPanby": {
            c: "pe"
        },
        "AMap.CircleEditor": {
            c: "pf",
            m: {
                open: "a",
                close: "b"
            }
        },
        "AMap.CitySearch": {
            c: "pg",
            m: {
                getLocalCity: "a",
                getCityByIp: "b"
            }
        },
        "AMap.CloudDataLayer": {
            c: "ph",
            o: {
                map: "a",
                query: "b",
                clickable: "c"
            },
            m: {
                reload: "a",
                setMap: "b",
                getMap: "c",
                setOptions: "d",
                wrapUrl: "e"
            }
        },
        "AMap.CloudDataSearch": {
            c: "pi",
            o: {
                keywords: "a",
                filter: "b",
                orderBy: "c",
                pageSize: "d",
                pageIndex: "e"
            },
            m: {
                setOptions: "a",
                clear: "b",
                setPageIndex: "c",
                setPageSize: "d",
                searchNearBy: "e",
                searchById: "f",
                searchByDistrict: "g",
                searchInPolygon: "h"
            }
        },
        "AMap.CloudDataSearchRender": {
            c: "pj"
        },
        "AMap.DistrictSearch": {
            c: "pk",
            o: {
                level: "a",
                extensions: "b",
                subdistrict: "c"
            },
            m: {
                setLevel: "a",
                setExtensions: "b",
                setSubdistrict: "c",
                search: "d"
            }
        },
        "AMap.DragRoute": {
            c: "pl",
            o: {
                polyOptions: "a",
                startMarkerOptions: "b",
                midMarkerOptions: "c",
                endMarkerOptions: "d",
                showTraffic: "e"
            },
            m: {
                setAvoidPolygons: "a",
                clearAvoidPolygons: "b",
                getAvoidPolygons: "c",
                setAvoidRoad: "d",
                clearAvoidRoad: "e",
                getAvoidRoad: "f",
                search: "g",
                setPolicy: "h",
                showRoute: "i",
                close: "j",
                open: "k",
                getWays: "l",
                getRoute: "m",
                destroy: "n",
                getPolyline: "o",
                getStart: "p",
                getEnd: "q",
                getPoint: "r",
                getRoutes: "s"
            }
        },
        "AMap.Driving": {
            c: "pm",
            o: {
                policy: "a",
                extensions: "b",
                map: "c",
                panel: "d",
                hideMarkers: "e"
            },
            m: {
                clear: "a",
                search: "b",
                setAvoidPolygons: "c",
                clearAvoidPolygons: "d",
                getAvoidPolygons: "e",
                setAvoidRoad: "f",
                clearAvoidRoad: "g",
                getAvoidRoad: "h",
                setPolicy: "i",
                setLocation: "j",
                close: "k",
                open: "l"
            }
        },
        "AMap.DrivingRender": {
            c: "pp"
        },
        "AMap.Geocoder": {
            c: "pq",
            o: {
                city: "a",
                radius: "b",
                extensions: "c"
            },
            m: {
                getLocation: "a",
                setCity: "b",
                getAddress: "c"
            }
        },
        "AMap.Geolocation": {
            c: "pr",
            o: {
                enableHighAccuracy: "a",
                timeout: "b",
                maximumAge: "c",
                convert: "d",
                showButton: "e",
                buttonDom: "f",
                buttonPosition: "g",
                buttonOffset: "h",
                showMarker: "i",
                markerOptions: "j",
                showCircle: "k",
                circleOptions: "l",
                panToLocation: "m",
                zoomToAccuracy: "n",
                useNative: "o"
            },
            m: {
                isSupported: "a",
                getCurrentPosition: "b",
                watchPosition: "c",
                clearWatch: "d"
            }
        },
        "AMap.GetLL": {
            c: "ps"
        },
        "AMap.Heatmap": {
            c: "pt",
            o: {
                radius: "a",
                gradient: "b",
                opacity: "c",
                zooms: "d"
            },
            m: {
                setOptions: "a",
                getOptions: "b",
                setDataSet: "c",
                getDataSet: "d",
                addDataPoint: "e",
                setMap: "f",
                hide: "g",
                show: "h",
                getMap: "i",
                setzIndex: "j",
                getzIndex: "k"
            }
        },
        "AMap.HotSpot": {
            c: "pu",
            m: {
                setMap: "a"
            }
        },
        "AMap.LineSearch": {
            c: "pv",
            o: {
                pageIndex: "a",
                pageSize: "b",
                city: "c",
                extensions: "d"
            },
            m: {
                setPageIndex: "a",
                setPageSize: "b",
                setCity: "c",
                searchById: "d",
                search: "e"
            }
        },
        "AMap.MapType": {
            c: "pw",
            m: {
                hide: "a",
                show: "b"
            }
        },
        "AMap.Cluster": {
            c: "px"
        },
        "AMap.MarkerClusterer": {
            c: "py",
            o: {
                gridSize: "a",
                minClusterSize: "b",
                maxZoom: "c",
                averageCenter: "d",
                styles: "e",
                zoomOnClick: "f"
            },
            m: {
                disperse: "a",
                addMarker: "b",
                addMarkers: "c",
                removeMarker: "d",
                removeMarkers: "e",
                clearMarkers: "f",
                getClustersCount: "g",
                getMap: "h",
                setMap: "i",
                getMarkers: "j",
                setMarkers: "k",
                getGridSize: "l",
                setGridSize: "m",
                getMinClusterSize: "n",
                setMinClusterSize: "o",
                getMaxZoom: "p",
                setMaxZoom: "q",
                isAverageCenter: "r",
                setAverageCenter: "s",
                getStyles: "t",
                setStyles: "u"
            }
        },
        "AMap.MouseTool": {
            c: "pz",
            m: {
                marker: "a",
                polyline: "b",
                polygon: "c",
                rectangle: "d",
                circle: "e",
                rule: "f",
                measureArea: "g",
                rectZoomIn: "h",
                rectZoomOut: "i",
                close: "j"
            }
        },
        "AMap.OverView": {
            c: "p0",
            o: {
                tileLayer: "a",
                isOpen: "b",
                visible: "c"
            },
            m: {
                open: "a",
                close: "b",
                getTileLayer: "c",
                setTileLayer: "d",
                show: "e",
                hide: "f"
            }
        },
        "AMap.PlaceSearch": {
            c: "p1",
            o: {
                city: "a",
                type: "b",
                lang: "c",
                pageSize: "d",
                pageIndex: "e",
                extensions: "f",
                map: "g",
                panel: "h"
            },
            m: {
                clear: "a",
                setLang: "b",
                searchInBounds: "c",
                searchNearBy: "d",
                getDetails: "e",
                setType: "f",
                setPageIndex: "g",
                setPageSize: "h",
                setCity: "i",
                close: "j",
                open: "k"
            }
        },
        "AMap.PlaceSearchLayer": {
            c: "p2",
            o: {
                map: "a",
                keywords: "b"
            },
            m: {
                setMap: "a",
                setKeywords: "b"
            }
        },
        "AMap.PlaceSearchRender": {
            c: "p3"
        },
        "AMap.PolyEditor": {
            c: "p4",
            m: {
                open: "a",
                close: "b"
            }
        },
        "AMap.RangingTool": {
            c: "p5",
            o: {
                startMarkerOptions: "a",
                midMarkerOptions: "b",
                endMarkerOptions: "c",
                lineOptions: "d",
                tmpLineOptions: "e",
                startLabelText: "f",
                midLabelText: "g",
                endLabelText: "h",
                startLabelOffset: "i",
                midLabelOffset: "j",
                endLabelOffset: "k"
            },
            m: {
                turnOn: "a",
                turnOff: "b"
            }
        },
        "AMap.RoadInfoSearch": {
            c: "p6",
            o: {
                pageIndex: "a",
                pageSize: "b",
                city: "c"
            },
            m: {
                setPageIndex: "a",
                setPageSize: "b",
                setCity: "c",
                roadInfoSearchByRoadId: "d",
                roadInfoSearchByRoadName: "e",
                crossInfoSearchByCrossId: "f",
                crossInfoSearchByRoadName: "g"
            }
        },
        "AMap.Scale": {
            c: "p7",
            m: {
                show: "a",
                hide: "b"
            }
        },
        "AMap.StationSearch": {
            c: "p8",
            o: {
                pageIndex: "a",
                pageSize: "b",
                city: "c"
            },
            m: {
                setPageIndex: "a",
                setPageSize: "b",
                setCity: "c",
                searchById: "d",
                search: "e"
            }
        },
        "AMap.ToolBar": {
            c: "p9",
            o: {
                offset: "a",
                ruler: "b",
                direction: "c",
                autoPosition: "d",
                locationMarker: "e",
                useNative: "f"
            },
            m: {
                getOffset: "a",
                setOffset: "b",
                hideRuler: "c",
                showRuler: "d",
                hideDirection: "e",
                showDirection: "f",
                hideLocation: "g",
                showLocation: "h",
                hide: "i",
                show: "j",
                doLocation: "k",
                getLocation: "l"
            }
        },
        "AMap.Transfer": {
            c: "1",
            o: {
                city: "a",
                policy: "b",
                nightflag: "c",
                cityd: "d",
                extensions: "e",
                map: "f",
                panel: "g",
                hideMarkers: "h"
            },
            m: {
                clear: "a",
                search: "b",
                leaveAt: "c",
                setPolicy: "d",
                setCity: "e",
                setCityd: "f",
                close: "g",
                open: "h"
            }
        },
        "AMap.TransferRender": {
            c: "2"
        },
        "AMap.UTFGrid": {
            c: "3",
            m: {
                setMap: "a"
            }
        },
        "AMap.Walking": {
            c: "4",
            o: {
                map: "a",
                panel: "b",
                hideMarkers: "c"
            },
            m: {
                clear: "a",
                search: "b",
                close: "c",
                open: "d"
            }
        },
        "AMap.WalkingRender": {
            c: "5"
        },
        "AMap.Weather": {
            c: "6",
            m: {
                getLive: "a",
                getForecast: "b"
            }
        },
        "AMap.IndoorMap": {
            p: "AMap.CustomLayer",
            c: "7",
            o: {
                alwaysShow: "9a"
            },
            m: {
                showIndoorMap: "9a",
                showFloor: "9b",
                showFloorBar: "9c",
                hideFloorBar: "9d",
                hideLabels: "9e",
                showLabels: "9f",
                getSelectedBuildingId: "9g",
                getSelectedBuilding: "9h",
                setSelectedBuildingId: "9i",
                getVisibleBuildingIds: "9j"
            }
        },
        "AMap.Riding": {
            c: "prd",
            o: {
                map: "a",
                panel: "b",
                policy: "c"
            },
            m: {
                clear: "a",
                search: "b",
                close: "c",
                open: "d",
                setPolicy: "e"
            }
        },
        "AMap.RidingRender": {
            c: "prdr"
        }
    };
    V.a.kZ = V.BuryPoint.getMethodName = function(a, b) {
        var c;
        for (c = this.lg[a].m && this.lg[a].m[b]; ! c && this.lg[a].p;) {
            var d = this.lg[a].p;
            c = this.lg[d].m && this.lg[d].m[b];
            a = d
        }
        c || (c = b);
        return c
    };
    V.a.add = V.BuryPoint.add = function(a, b, c) {
        var d = this.lg[a].c;
        if (d) {
            if (b) {
                a = this.kZ(a, b);
                if (!a) return;
                d += "," + a
            }
            this.sL[d] = 1;
            c && (this.uB[d] = c)
        }
    };
    V.a.Za = V.BuryPoint.addOptions = function(a, b) {
        var c = this.lg[a].c,
        d,
        f;
        for (f in b) b.hasOwnProperty(f) && ((d = this.lg[a].o && this.lg[a].o[f]) || (d = f), d = c + "," + d, this.options[d] = 1);
        "AMap.Map" === a && this.iP(a, b, ["mapStyle", "lang", "renderer", "zoom"])
    };
    V.a.iP = V.BuryPoint._addOptionsValue = function(a, b, c) {
        for (var d = 0,
        f, g; d < c.length; d++) f = c[d],
        b && b[f] && (g = {},
        g[f] = b[f], this.fW(a, g))
    };
    V.a.fW = V.BuryPoint.addOptionsValue = function(a, b) {
        var c = this.lg[a].c,
        d,
        f;
        for (f in b) b.hasOwnProperty(f) && ((d = this.lg[a].o && this.lg[a].o[f]) || (d = f), d = c + "," + d, this.LB[d] = b[f])
    };
    V.a.send = V.BuryPoint.send = function() {
        var a = [],
        b = [],
        c = [],
        d = [],
        f = V.a,
        g;
        for (g in f.sL) 1 !== f.mG[g] && a.push(g);
        for (g in f.uB) 1 !== f.nG[g] && b.push(g + "=" + f.uB[g]);
        for (g in f.options) 1 !== f.YG[g] && c.push(g);
        for (g in f.LB) 1 !== f.ZG[g] && d.push(g + "=" + f.LB[g]);
        if (0 < a.length || 0 < b.length || 0 < c.length || 0 < d.length) new V.ra.Ca(V.q.dc + "://webapi.amap.com/count?" + ["type=f", "k=" + V.q.key, "u=" + V.q.Dl, "m=" + (V.j.U ? 1 : 0), "pf=" + V.j.lr, "methods=" + a.join("@"), "methodsParams=" + b.join("@"), "options=" + c.join("@"), "optionsValue=" + d.join("@")].join("&")),
        f.clear(a, b, c, d);
        window.setTimeout(f.send, 1E4)
    };
    V.a.clear = V.BuryPoint.clear = function(a, b, c, d) {
        for (var f = 0; f < a.length; f++) this.mG[a[f]] = 1;
        for (f = 0; f < b.length; f++) this.nG[b[f].split("=")[0]] = 1;
        for (f = 0; f < c.length; f++) this.YG[c[f]] = 1;
        for (f = 0; f < d.length; f++) this.ZG[d[f].split("=")[0]] = 1
    };
    window.setTimeout(V.a.send, 1E4);
    V.W = function() {};
    V.W.extend = V.W.extend = function(a) {
        function b() {}
        function c() {
            this.D && (this.D.apply(this, arguments), this.CLASS_NAME && V.a.add(this.CLASS_NAME))
        }
        b.prototype = this.prototype;
        var d = new b;
        d.constructor = c;
        c.prototype = d;
        for (var f in this) this.hasOwnProperty(f) && "prototype" !== f && (c[f] = this[f]);
        a.jN && (V.extend(c, a.jN), a.jN = null);
        a.ka && (V.extend.apply(null, [d].concat(a.ka)), a.ka = null);
        a.G && d.G && (a.G = V.extend({},
        d.G, a.G));
        V.extend(d, a);
        a.toString && (d.toString = a.toString);
        c.De = this.prototype;
        return c
    };
    V.W.Yb = V.W.include = function(a) {
        V.extend(this.prototype, a)
    };
    V.extend = function(a) {
        var b = Array.prototype.slice.call(arguments, 1),
        c,
        d,
        f,
        g;
        d = 0;
        for (f = b.length; d < f; d += 1) for (c in g = b[d] || {},
        g) Object.prototype.hasOwnProperty.call(g, c) && ("function" === typeof g[c] && "function" === typeof a[c] && (g[c].cb = a[c]), a[c] = g[c]);
        return a
    };
    V.W.Pn = function(a) {
        for (var b in a) if (a.hasOwnProperty(b)) {
            var c = a[b];
            this.prototype[b] && (this.prototype[c] = this.prototype[b])
        }
    };
    V.ea = {
        e: function(a, b, c, d, f) {
            if (this.rf(a, b, c || this)) return this;
            var g = this.Sh = this.Sh || {};
            g[a] = g[a] || [];
            f ? g[a].unshift({
                La: b,
                Me: c || this,
                Fk: d
            }) : g[a].push({
                La: b,
                Me: c || this,
                Fk: d
            });
            "complete" === a && this.Va && this.w(a);
            return this
        },
        rf: function(a, b, c) {
            var d = this.Sh;
            if (b && c) {
                if (d && a in d && d[a]) for (var f = 0; f < d[a].length; f += 1) if (d[a][f].La === b && d[a][f].Me === c) return ! 0;
                return ! 1
            }
            return d && a in d && d[a] && 0 < d[a].length
        },
        F: function(a, b, c) {
            if (!this.rf(a)) return this;
            var d = this.Sh;
            if (d && d[a]) for (var f = 0; f < d[a].length; f += 1) if (! (d[a][f].La !== b && "mv" !== b || c && d[a][f].Me !== c)) {
                d[a].splice(f, 1);
                d[a].length || (d[a] = null);
                break
            }
            return this
        },
        w: function(a, b) {
            if (!this.rf(a)) return this;
            var c = {
                type: a
            };
            b || "string" !== typeof b && "number" !== typeof b && "boolean" !== typeof b ? V.g.ZA(b) ? c.value = b: c = V.extend(c, b) : c.value = b;
            for (var d = [].concat(this.Sh[a]), f = 0; f < d.length; f += 1) d[f].La && (d[f].La.call(d[f].Me || this, c), d[f].Fk && this.Sh[a] && this.Sh[a].splice(f, 1));
            return this
        },
        gj: function(a) {
            a ? this.Sh && this.Sh[a] && (this.Sh[a] = null) : this.Sh = null;
            return this
        }
    };
    V.ea.on || (V.ea.on = V.ea.e);
    V.ea.off || (V.ea.off = V.ea.F);
    V.ea.emit || (V.ea.emit = V.ea.w);
    V.yd = {
        set: function(a, b, c) {
            var d = this.zg;
            if (d && d[a]) {
                var d = d[a],
                f = "set" + this.kK(a);
                d[f] ? (d[f](b, c), c || this.ev(a, b)) : d.set(a, b, c)
            } else(this.Qi = this.Qi || {})[a] = b,
            c || this.ev(a, b)
        },
        kK: function(a) {
            return a.charAt(0).toUpperCase() + a.substr(1)
        },
        get: function(a, b, c) {
            var d, f = this.zg;
            d = "get" + this.kK(a);
            if (f && f[a]) return c = f[a],
            c[d] ? c[d](b) : c.get(a, b);
            if (this[d] && !c) return this[d](b);
            if (this.Qi && this.Qi.hasOwnProperty(a)) return this.Qi[a]
        },
        Q: function(a, b, c) {
            this.zg || (this.zg = {});
            this.zg[a] !== b && (b.e(a,
            function(b) {
                this.ev(a, b)
            },
            this), this.zg[a] = b, c || this.ev(a))
        },
        Uc: function(a, b, c) {
            for (var d = 0; d < a.length; d += 1) this.Q(a[d], b, !c)
        },
        Ii: function(a) {
            this.zg && this.zg[a] && (this.zg[a].F(a, "mv", this), this.zg[a] = void 0)
        },
        Cm: function() {
            if (this.zg) for (var a in this.zg) this.zg.hasOwnProperty(a) && this.Ii(a)
        },
        ev: function(a, b) {
            if (this[a + "Changed"]) this[a + "Changed"](b);
            else this.OI && this.OI();
            this.w(a, b)
        },
        p6: function(a, b, c) {
            var d = new(V.W.extend({
                ka: [V.ea, V.yd]
            }));
            d.OI = function() {
                for (var b = !0,
                f = 0; f < a.length; f += 1) d.get(a[f]) || (b = !1);
                b && (d.Cm(), c())
            };
            for (var f = 0; f < a.length; f += 1) d.Q(a[f], b)
        },
        xe: function(a, b) {
            var c, d;
            for (c in a) a.hasOwnProperty(c) && (d = a[c], this.set(c, d, b))
        }
    };
    V.q = {
        localStorage: !0,
        Dt: 500,
        td: !0,
        ge: {
            dark: "#202020",
            blue_night: "#090d20",
            test: "#033447",
            mapv: "#000001",
            techblue: "#000b11",
            insight: "#19212a",
            "default": "#fcf9f2"
        },
        O6: "dark light blue darkblue fresh grey midblue".split(" "),
        key: "",
        dc: "http",
        Bd: [115.423412, 39.442759, 117.514625, 41.060816, 116.405285, 39.904989],
        ec: "http://restapi.amap.com",
        pb: "http://webapi.amap.com",
        Vu: "http://gaode.com",
        km: "http://m.amap.com",
        fr: "http://webrd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&scale=1&style=8&x=[x]&y=[y]&z=[z]",
        Iu: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x=[x]&y=[y]&z=[z]&scl=1&ltype=3",
        nC: "http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?style=6&x=[x]&y=[y]&z=[z]",
        ov: "http://webst0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scale=1&style=8",
        pv: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?x=[x]&y=[y]&z=[z]&lang=zh_cn&size=1&scl=1&style=8&ltype=11",
        Fr: "http://wprd0{1,2,3,4}.is.autonavi.com/appmaptile?lang=[lang]&size=1&style=7&x=[x]&y=[y]&z=[z]",
        Kr: "http://vector.amap.com",
        Jr: "vdata.amap.com",
        MN: "ws"
    };
    function xc(a) {
        V.W.Nn = a.Nn;
        V.j = a.j;
        V.Fd = a.Fd;
        a.j = null;
        V.q.pb = a[2].split(",")[0];
        V.q.wg = a.wg;
        var b = V.q.dc = V.q.pb.split(":")[0];
        "https" === b && (V.q.MN = "wss", V.q.ec = V.q.ec.replace("http", "https"), V.q.fr = V.q.fr.replace("http", "https"), V.q.Iu = V.q.Iu.replace("http", "https"), V.q.nC = V.q.nC.replace("http", "https"), V.q.ov = V.q.ov.replace("http", "https"), V.q.pv = V.q.pv.replace("http", "https"), V.q.Fr = V.q.Fr.replace("http", "https"), V.q.Kr = V.q.Kr.replace("http", "https"));
        var c = window.location.href;
        0 !== c.indexOf("http") && window.parent && window.parent !== window && (c = window.parent.location.href);
        V.q.HY = c;
        c = encodeURIComponent(c);
        V.q.Dl = c;
        V.q.Re = V.q.pb + "/theme/v1.3/markers/" + (V.j.Rc ? "b": "n");
        var d = document.createElement("style");
        d.type = "text/css";
        V.q.MX = "url(" + b + "://webapi.amap.com/theme/v1.3/openhand.cur),default";
        var f = ".amap-container{cursor:" + V.q.MX + ";}.amap-drag{cursor:url(" + b + "://webapi.amap.com/theme/v1.3/closedhand.cur),default;}";
        d.styleSheet ? (b = function() {
            try {
                d.styleSheet.cssText = f
            } catch(a) {}
        },
        d.styleSheet.disabled ? setTimeout(b, 10) : b()) : d.appendChild(document.createTextNode(f)); (document.head || document.getElementsByTagName("head")[0]).appendChild(d);
        V.q.mode = Number(a[3]);
        V.q.Bd = a[1];
        V.q.key = a[0];
        V.q.bz = a[4];
        V.q.sc = a[5];
        V.q.VV = a[6]
    }
    window.AMap && window.AMap.SC && window.AMap.SC.__load__ && window.AMap.SC.__load__(xc);
    V.gD = {
        TX: Math.PI / 180,
        J0: 180 / Math.PI
    }; (function() {
        function a(a) {
            return "undefined" === typeof a ? "": a
        }
        V.ze = {
            nZ: function(b) {
                b.name = a(b.name);
                var c = [b.y, b.x, b.name];
                if (V.j.U) {
                    var d = [V.q.km + "/callAPP?", "src=jsapi_q"];
                    d.push("&ios=" + encodeURIComponent("viewMap?sourceApplication=jsapi_q&dev=0&poiname=" + b.name + "&lat=" + b.y + "&lon=" + b.x));
                    d.push("&android=" + encodeURIComponent("androidamap?action=shorturl&q=" + c.join(",") + "&sourceApplication=jsapi_q"));
                    d.push("&wp=" + encodeURIComponent("viewMap?sourceApplication=jsapi_q&dev=0&poiname=" + b.name + "&lat=" + b.y + "&lon=" + b.x));
                    d.push("&mo=" + encodeURIComponent(V.q.km + "?q=" + c.join(",") + "&callapp=0&sourceApplication=jsapi_q"));
                    return d.join("")
                }
                return V.q.Vu + "?q=" + c.join(",") + "&src=jsapi_q"
            },
            cK: function(b) {
                b.name = a(b.name);
                b.address = a(b.address);
                b.x = a(b.x);
                b.y = a(b.y);
                var c = [b.id, b.y, b.x, b.name, b.address];
                if (V.j.U) {
                    var d = [V.q.km + "/callAPP?", "src=jsapi_p"];
                    d.push("&ios=" + encodeURIComponent("multiPointShow?sourceApplication=jsapi_p&dev=0&q=" + [b.y, b.x, b.name, b.address, b.id].join() + "&title=" + b.name));
                    d.push("&android=" + encodeURIComponent("androidamap?action=shorturl&p=" + c.join(",") + "&sourceApplication=jsapi_p"));
                    d.push("&wp=" + encodeURIComponent("multiPointShow?sourceApplication=jsapi_p&dev=0&q=" + [b.y, b.x, b.name, b.address, b.id].join() + "&title=" + b.name));
                    return d.join("")
                }
                return V.q.Vu + "?p=" + c.join(",") + "&src=jsapi_p"
            },
            aK: function(b) {
                if (V.j.U) {
                    var c = [V.q.km + "/callAPP?", "src=jsapi_detail"];
                    c.push("&ios=" + encodeURIComponent("viewPOIDetail?sourceApplication=jsapi_detail&poiid=" + b.id));
                    b.name = a(b.name);
                    b.x = a(b.x);
                    b.y = a(b.y);
                    c.push("&android=" + encodeURIComponent("androidamap?action=openFeature&featureName=PoiDetail&poiid=" + b.id + "&poiname=" + b.name + "&x=" + b.x + "&y=" + b.y + "&sourceApplication=jsapi_detail"));
                    c.push("&wp=" + encodeURIComponent("viewPOIDetail?sourceApplication=jsapi_detail&poiid=" + b.id));
                    c.push("&mo=" + encodeURIComponent(V.q.km + "/detail/index/poiid=" + b.id + "&sourceApplication=jsapi_detail"));
                    return c.join("")
                }
                return V.q.Vu + "/detail/" + b.id + "?src=jsapi_detail"
            },
            zA: function(b) {
                b.sname = a(b.sname);
                "" === b.sname && (b.sname = "\u8d77\u70b9");
                b.dname = a(b.dname);
                "" === b.dname && (b.dname = "\u7ec8\u70b9");
                b.mcount = a(b.mcount);
                b.my = a(b.my);
                b.mx = a(b.mx);
                b.mname = a(b.mname);
                var c = [b.sy, b.sx, b.sname, b.dy, b.dx, b.dname, b.m, b.t, b.mcount, b.my, b.mx, b.mname];
                if (V.j.U) {
                    var d = [V.q.km + "/callAPP?", "src=jsapi_r_" + b.t];
                    d.push("&ios=" + encodeURIComponent("path?sourceApplication=jsapi_r_" + b.t + "&dev=0&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&m=" + b.m + "&t=" + b.t + "&vian=0&vialons=&vialats=&vianames="));
                    var f = b.t;
                    0 === b.t ? f = 2 : 2 === b.t && (f = 4);
                    d.push("&android=" + encodeURIComponent("androidamap://route?sourceApplication=jsapi_r_" + b.t + "&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&dev=0&" + b.m + "&t=" + f));
                    d.push("&wp=" + encodeURIComponent("path?sourceApplication=jsapi_r_" + b.t + "&dev=0&slat=" + b.sy + "&slon=" + b.sx + "&sname=" + b.sname + "&dlat=" + b.dy + "&dlon=" + b.dx + "&dname=" + b.dname + "&m=" + b.m + "&t=" + b.t + "&vian=0&vialons=&vialats=&vianames="));
                    d.push("&mo=" + encodeURIComponent(V.q.km + "/?r=" + c.join(",") + "&callapp=0&sourceApplication=jsapi_r_" + b.t));
                    return d.join("")
                }
                return V.q.Vu + "?r=" + c.join(",") + "src=jsapi_r_" + b.t
            },
            Qk: function(a) {
                V.j.U ? window.location.href = a: window.open(a)
            }
        }
    })();
    "function" !== typeof Object.keys && (Object.keys = function(a) {
        var b = [],
        c;
        for (c in a) a.hasOwnProperty(c) && b.push(c);
        return b
    });
    V.g = {
        Dv: [],
        Wa: 268435456,
        VW: "ASDFGHJKLQWERTYUIO!sdfghjkl",
        Dq: {
            start: function(a) {
                function b() {
                    var d = (new Date).getTime();
                    a.xN.push(d - c);
                    c = d;
                    a.id = requestAnimationFrame(b)
                }
                a.startTime = new Date;
                a.xN = [];
                var c = (new Date).getTime();
                a.id = requestAnimationFrame(b)
            },
            cancel: function(a) {
                a.id && cancelAnimationFrame(a.id)
            },
            stop: function(a) {
                a.CX = new Date - a.startTime;
                this.cancel(a);
                a.Dq = Math.round(1E3 / (a.CX / (a.xN.length + 1)))
            }
        },
        Jb: function(a) {
            if ("object" === typeof a && null !== a) {
                if (a.qo || this.zu(a, "Float32Array") || this.zu(a, "Uint16Array")) return a;
                var b = this.isArray(a) ? [] : {},
                c;
                for (c in a) a.hasOwnProperty(c) && (b[c] = V.g.Jb(a[c]));
                return b
            }
            return a
        },
        ZA: function(a) {
            return "object" === typeof HTMLElement ? a instanceof HTMLElement: a && "object" === typeof a && 1 === a.nodeType && "string" === typeof a.nodeName
        },
        MC: function(a) {
            var b, c, d, f, g;
            c = [];
            d = NaN;
            f = 0;
            for (g = a.length; f < g; f += 1) b = a[f],
            b = this.VW.indexOf(b),
            isNaN(d) ? d = 27 * b: (c.push(d + b - 333), d = NaN);
            return c
        },
        G1: function(a, b) {
            for (var c = 1,
            c = 512 < b.length ? Math.round(Math.pow(b.length, 0.5)) : b.length, d = Math.ceil(b.length / c), f = 0; f < d; f += 1) {
                var g = c * f,
                h = g + c;
                h > b.length && (h = b.length);
                for (; g < h; g += 1) a(b[g])
            }
        },
        Wz: function(a, b, c) {
            var d, f;
            d = Math.floor(c / 2);
            f = c - d;
            d = (1 << d) - 1 << f;
            f = (1 << f) - 1;
            return [c, a & d | b & f, b & d | a & f]
        },
        fu: function(a) {
            return a ? encodeURIComponent(a) : ""
        },
        Ic: function(a, b, c, d) {
            c = a[b].i[c];
            if ("undefined" === typeof c) return null;
            a = a[b].s;
            if ("number" === typeof c) return a[c];
            for (;
            "undefined" === typeof c[d.toString()] && !(d -= 1, 3 > d););
            d = c[d.toString()];
            return "number" === typeof d ? a[d] : null
        },
        Gf: function(a) {
            for (var b = [], c = 0, d = a.length; c < d; c += 2) b.push(parseInt(a.substr(c, 2), 16));
            b.push((b.shift() / 255).toFixed(2));
            return "rgba(" + b.join(",") + ")"
        },
        ar: function(a) {
            for (var b in a) if (a.hasOwnProperty(b)) return ! 1;
            return ! 0
        },
        jj: function(a, b) {
            return 0 > b ? a: a.slice(0, b).concat(a.slice(b + 1, a.length))
        },
        VX: function(a, b) {
            var c = V.g.indexOf(a, b);
            return V.g.jj(a, c)
        },
        indexOf: function(a, b) {
            if (a && !a.length) return - 1;
            if (a.indexOf) return a.indexOf(b);
            for (var c = 0; c < a.length; c += 1) if (a[c] === b) return c;
            return - 1
        },
        bind: function(a, b) {
            var c = 2 < arguments.length ? Array.prototype.slice.call(arguments, 2) : null;
            return function() {
                return a.apply(b, c || arguments)
            }
        },
        fb: function(a, b) {
            b = b || {};
            a.G = V.extend({},
            a.G, b);
            return a.G
        },
        AJ: function() {
            return ! 1
        },
        RJ: function(a, b) {
            return (a || "") + Math.round(Math.random() * Math.pow(10, b || 6))
        },
        Bb: function() {
            var a = 0;
            return function(b) {
                b._amap_id || (a += 1, b._amap_id = a);
                return b._amap_id
            }
        } (),
        uY: "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",
        xh: Date.now ?
        function() {
            return Date.now()
        }: function() {
            return (new Date).getTime()
        },
        u6: function(a, b, c, d) {
            var f;
            if (d) {
                var g = 0,
                h, k = this.xh;
                f = function() {
                    h = k();
                    if (h - g < b) return ! 1;
                    g = h;
                    a.apply(c, arguments)
                }
            } else {
                var l, m, n;
                n = function() {
                    l = !1;
                    m && (f.apply(c, m), m = !1)
                };
                f = function() {
                    l ? m = arguments: (l = !0, a.apply(c, arguments), setTimeout(n, b))
                }
            }
            return f
        },
        qf: function(a, b) {
            return Number(Number(a).toFixed(b || 0))
        },
        isArray: function(a) {
            return Array.isArray ? Array.isArray(a) : "[object Array]" === Object.prototype.toString.call(a)
        },
        zu: function(a, b) {
            return Object.prototype.toString.call(a).split(" ")[1].slice(0, -1).toLowerCase() === b.toLowerCase()
        },
        ka: function(a, b) {
            return - 1 !== this.indexOf(a, b)
        },
        lN: function(a) {
            var b = 0;
            if (0 === a.length) return b;
            for (var c, d = 0,
            f = a.length; d < f; d += 1) c = a.charCodeAt(d),
            b = (b << 5) - b + c,
            b &= b;
            return b
        },
        o5: function(a, b) {
            b = b ? Math.ceil(parseInt(b.substr(6)) / 24) : 1;
            for (var c = "",
            d = 0,
            f = a.length; d < f; d++) c += String.fromCharCode((a.charCodeAt(d) - 256 - b + 65535) % 65535);
            return c
        },
        PX: function(a, b) {
            var c = (a + "").slice( - 2),
            d = (b + "").slice( - 2);
            a = a.slice(0, -2);
            b = b.slice(0, -2);
            var f = parseInt((d + c).slice(1)),
            d = parseInt("1" + d) / 3E3;
            a -= parseInt("1" + c) / 3E3 * (Math.ceil(f / 250) % 2 ? 1 : -1);
            b -= d * (1 < f / 500 ? 1 : -1);
            return new V.P(parseFloat(a).toFixed(5), parseFloat(b).toFixed(5))
        },
        CL: function(a) {
            return "undefined" !== typeof JSON && JSON.stringify ? V.g.lN(JSON.stringify(a)) : null
        },
        B7: function(a, b) {
            if (b || !a.hasOwnProperty("_amap_hash")) {
                var c = V.g.CL(a);
                c && (a._amap_hash = c)
            }
            return a._amap_hash
        },
        iepngFix: function(a) {
            function b() {
                for (var a; c.length;) a = c.shift(),
                window.DD_belatedPNG.fixPng(a);
                d.bB = !0
            }
            this.fM || (this.fM = [], this.bB = !1);
            var c = this.fM,
            d = this;
            if ("img" === a.tagName.toLowerCase()) c.push(a);
            else {
                a = a.getElementsByTagName("*");
                for (var f = 0; f < a.length; f += 1) c.push(a[f])
            }
            window.DD_belatedPNG && this.bB ? setTimeout(function() {
                b()
            },
            100) : this.bB || V.Ra.load("AMap.FixPng", b)
        },
        ma: function(a) {
            if (V.g.isArray(a)) if (V.g.isArray(a[0])) for (var b = 0; b < a.length; b += 1) a[b] = V.g.ma(a[b]);
            else if (b = typeof a[0], "string" === b || "number" === b) return new V.P(a[0], a[1]);
            return a
        },
        uj: function(a) {
            return V.g.isArray(a) ? new V.ac(a[0], a[1]) : a
        }
    }; (function() {
        function a(a) {
            window.clearTimeout(a)
        }
        function b(a) {
            var b, c, d = ["webkit", "moz", "o", "ms"];
            for (b = 0; b < d.length && !c; b += 1) c = window[d[b] + a];
            return c
        }
        function c(a) {
            var b = +new Date,
            c = Math.max(0, (V.j.Gg ? 50 : 20) - (b - d));
            d = b + c;
            return window.setTimeout(a, c)
        }
        var d = 0,
        f = window.requestAnimationFrame || b("RequestAnimationFrame") || c,
        g = window.cancelAnimationFrame || b("CancelAnimationFrame") || b("CancelRequestAnimationFrame") || a;
        V.g.Ve = function(a, b, c, d) {
            a = V.g.bind(a, b);
            if (c) a();
            else return f.call(window, a, d)
        };
        V.g.Gl = function(a) {
            a && g.call(window, a)
        }
    })();
    V.g.r1 = window.requestIdleCallback ? window.requestIdleCallback.bind(window) : function(a) {
        var b = Date.now();
        return setTimeout(function() {
            a({
                didTimeout: !1,
                timeRemaining: function() {
                    return Math.max(0, 70 - (Date.now() - b))
                }
            })
        },
        0)
    };
    V.g.QW = window.cancelIdleCallback ? window.cancelIdleCallback.bind(window) : function(a) {
        clearTimeout(a)
    }; (function(a) {
        var b = 1,
        c = {};
        a.g.R1 = function(a, b) {
            if (c[a]) {
                var g = c[a];
                g.zr = 1;
                g.result = b;
                if (g.nh) {
                    for (var h = g.nh,
                    k = 0,
                    l = h.length; k < l; k++) h[k].call(null, b);
                    g.nh = null
                }
            }
        };
        a.g.jX = function(a) {
            c[a] = null
        };
        a.g.k3 = function(a, b) {
            if (c[a]) {
                var g = c[a];
                0 < g.zr ? b(null, g.result) : (g.nh || (g.nh = []), g.nh.push(b))
            } else b(null, a)
        };
        a.g.rA = function(d, f) {
            var g = navigator.geolocation;
            if (!a.j.RZ || "https:" === document.location.protocol) return d(null, g);
            var h;
            f && f.l3 && (h = "f" + b++, c[h] = {
                zr: 0
            });
            var k = null,
            l = !1;
            f && f.timeout && (k = setTimeout(function() {
                k = void 0;
                d({
                    code: 3,
                    info: "TIME_OUT",
                    message: "Get geolocation time out."
                });
                l = !0
            },
            f.timeout));
            g.getCurrentPosition(function() {
                l || (clearTimeout(k), k = void 0, d(null, g))
            },
            function(b) {
                l || (clearTimeout(k), k = void 0, 2 === b.code && 0 < b.message.indexOf("permission") ? a.Ra.load("AMap.GeoRemoteLoc",
                function() {
                    d(null, a.cO, h)
                }) : d(null, g))
            });
            return h
        }
    })(V); (function(a) {
        var b = a.W.extend({
            ka: [a.ea],
            D: function() {}
        });
        a.Hm = new b
    })(V); (function(a) {
        var b = a.W.extend({
            ka: [a.ea],
            D: function() {
                this.ZR()
            },
            ZR: function() {
                a.Hm && a.Hm.e("vecTileParsed.buildings", this.JR, this)
            },
            RK: function(a) {
                return a.map.QF
            },
            TJ: function(a) {
                return this.RK(a) ? a.map.Dx: null
            },
            P1: function(a, b) {
                if (b) {
                    var f = b.map;
                    f && (f.Dx ? f.Dx.toString() : "") !== (a ? a.toString() : "") && (f.Dx = a || [], f.set("display", 0))
                }
            },
            TM: function(a, b) {
                if (b) {
                    var f = b.map;
                    f && f.QF !== a && (f.QF = a, f.set("display", 0))
                }
            },
            g4: function() {},
            LF: function(a, b) {
                if (a) for (var f = 0,
                g = a.length; f < g; f++) a[f] && 0 > b.indexOf(a[f]) && b.push(a[f])
            },
            DJ: function(b) {
                if (!b) return null;
                b = b.map.Ba;
                for (var d = 0,
                f = b.length; d < f; d++) if (a.S.Tg && b[d] instanceof a.S.Tg && b[d].xa && b[d].xa.length && ( - 1 !== b[d].xa.indexOf("building") || -1 !== b[d].xa.indexOf("poilabel"))) return b[d];
                return null
            },
            JY: function(a) {
                if (a = this.DJ(a)) {
                    if (a = a.Qa.get("tiles", null, !0)) a = a[0];
                    else return null;
                    if (!a || !a.length) return null;
                    for (var b = [], f = 0, g = a.length; f < g; f++) {
                        var h = a[f];
                        h.ag && h.ag.bd && this.LF(h.ag.bd, b)
                    }
                    return b
                }
            },
            JR: function(a) {
                if (a.Gv && a.Gv.ag && (a = a.Gv.ag.bd)) {
                    var b = [];
                    this.LF(a, b);
                    this.w("vecTileParsed.builds.found", {
                        KI: b
                    })
                }
            }
        });
        a.Ze = new b
    })(V); (function(a) {
        function b() {
            return {
                checkup: function() {
                    var a = Array.prototype.slice.call(arguments, 0);
                    a.pop()(null, a)
                }
            }
        }
        function c(a) {
            return {
                injectCode: function(b, c) {
                    var d = null,
                    f = null;
                    try {
                        d = (new Function("self", b))(a)
                    } catch(g) {
                        f = g.toString()
                    }
                    c(f, d)
                }
            }
        }
        function d(a) {
            function b(c, d) {
                function f(a, b, c) {
                    a = {
                        Ko: Date.now(),
                        Fo: h,
                        error: a,
                        result: b
                    };
                    if (c) for (var g in c) c.hasOwnProperty(g) && (a[g] = c[g]);
                    d(a)
                }
                var g = c.LA,
                h = c.Fo,
                l = c.Gz,
                m = c.pq,
                v = c.oW || [],
                s = a._wkHandlers[g];
                s ? s[l] ? m ? s[l].apply(s, v.concat(f)) : f(null, s[l].apply(s, v)) : f("Unknown cmd: " + l) : f("Can not find handler for: " + g)
            }
            var c = [];
            a.Ct = function(a) {
                c.push.apply(c, a)
            };
            a.addEventListener("message",
            function(d) {
                function f(b) {
                    if (w) {
                        w.push(b);
                        var d = !!b.O_;
                        d || u++;
                        if (u > h) console.error("Resp len wrong!!");
                        else if (b = u === h, d || b) {
                            d = 1 < w.length ? {
                                s1: w
                            }: w[0];
                            d.Ko = Date.now();
                            d.p7 = t;
                            if (c.length) {
                                try {
                                    a.postMessage(d, c)
                                } catch(g) {
                                    a.postMessage(d),
                                    console.error(g)
                                }
                                c.length = 0
                            } else a.postMessage(d);
                            w.length = 0;
                            b && (f = w = null)
                        }
                    } else console.error("Seemed callback already sent!!")
                }
                var g = d.data;
                d = g.p1 || [g];
                for (var h = d.length,
                u = 0,
                t = Date.now() - g.Ko, w = [], g = 0; g < h; g++) b(d[g], f)
            },
            !1)
        }
        function f(d, h) {
            this.G = a.extend({
                batchSend: !0,
                lazy: !1,
                libPolyfills: null
            },
            h);
            this.xn = [];
            this.lp = this.G.clientId || "w" + g++;
            this.G.onReady && this.FB(this.G.onReady);
            this.xs = this.ZQ();
            if ("function" === typeof d) {
                var m = {};
                m[this.xs] = d;
                d = m
            }
            d[f.EA] = c;
            d[this.cF()] = b;
            this.Ks = d;
            this.lH();
            this.G.lazy || this.Fn();
            a.ru || !1 === this.G.hostWorker || (a.ru = this)
        }
        var g = 1,
        h = 1;
        a.extend(f, {
            EA: "_g_",
            b2: function(a) {
                if (!a.dP) {
                    var b = [];
                    a.addEventListener("message",
                    function(a) {
                        a = a.data;
                        a = a.s1 || [a];
                        for (var c = 0,
                        d = a.length; c < d; c++) {
                            var f = a[c],
                            g;
                            a: {
                                g = f.Fo;
                                for (var h = !!f.O_,
                                k = 0,
                                w = b.length; k < w; k++) {
                                    var v = b[k];
                                    if (g === v.Fo) {
                                        h || b.splice(k, 1);
                                        g = v;
                                        break a
                                    }
                                }
                                g = void 0
                            }
                            g ? g.pq.call(null, f.error, f.result, !0) : console.warn("Receive worker msg: ", f)
                        }
                    },
                    !1);
                    a.SO = b;
                    a.dP = !0
                }
            }
        });
        a.extend(f.prototype, {
            ZQ: function() {
                return "_def_" + this.lp
            },
            cF: function() {
                return "_cln_" + this.lp
            },
            DU: function() {
                var a = Array.prototype.slice.call(arguments, 0);
                this.oH = a;
                if (this.sn) {
                    for (var b = 0,
                    c = this.sn.length; b < c; b++) this.sn[b].apply(null, a);
                    this.sn.length = 0
                }
            },
            Ct: function(a) {
                this.xU && this.xn.push.apply(this.xn, a)
            },
            FB: function(a) {
                this.oH ? a.apply(null, this.oH) : (this.sn || (this.sn = []), this.sn.push(a))
            },
            Fn: function(b) {
                var c = this;
                if (!c.iE) {
                    c.iE = !0;
                    var d = function(d, f) {
                        d && a.j.WK && console.warn(d);
                        c.DU.call(c, d, f);
                        b && b(d, f)
                    };
                    a.j.WK ? this.wU(function(a, b) {
                        b ? this.gS(b,
                        function(a, c) {
                            a ? d(a) : (this.$s(c), this.dz = c, this.xn.length = 0, this.Qs = null, d(null, {
                                yW: b,
                                v3: c
                            }))
                        }) : d("Worker start failed!")
                    }) : d("Worker not supported!")
                }
            },
            IK: function(a, b, c) {
                var d = this;
                a = a || d.xs;
                var g = {};
                d.XD(a, b, g);
                d.$s(null, g);
                d.FB(function(h) {
                    h ? c(h) : d.dz ? (h = d.iF(b, d.qx(d.lp, a)), d.dz.sendMessage(f.EA + ":injectCode", h,
                    function(a, b) {
                        a || d.$s(d.dz, g);
                        c(a, b)
                    })) : c("Worker msger missing!!")
                })
            },
            qx: function(a, b) {
                if (!a || !b) throw Error("clientId or ns missing!!");
                return a + "_" + b
            },
            oR: function(a, b, c) {
                function d() {
                    var b = Array.prototype.slice.call(arguments, 0);
                    c.sendMessage.apply(c, [a].concat(b))
                }
                var f = this;
                if (!c) return function() {
                    f.iE || "utilCall" === f.G.lazy && f.Fn();
                    b.apply(this.Qs, arguments)
                };
                d._proxy2Worker = !0;
                return d
            },
            lH: function() {
                this.$s(null)
            },
            OP: function(a) {
                var b = {},
                c;
                for (c in a) a.hasOwnProperty(c) && this.XD(c, a[c], b);
                return b
            },
            XD: function(a, b, c) {
                b = b.call(null, !1);
                for (var d in b) b.hasOwnProperty(d) && (c[a + ":" + d] = b[d], a === this.xs && (c[d] = b[d]))
            },
            $s: function(a, b) {
                b || (this.Qs || (this.Qs = this.OP(this.Ks)), b = this.Qs);
                for (var c in b) if (b.hasOwnProperty(c)) {
                    var d = b[c];
                    "function" === typeof d && (this[c] = this.oR(c, d, a))
                }
                this.xU = !!a
            },
            iF: function(a, b) {
                var c = a.toString(),
                d,
                c = c.replace(/^function([^\(]*)\(/,
                function() {
                    d = "_prep_h" + h++;
                    return "function " + d + "("
                });
                return d ? c + ';if(self._wkHandlers["' + b + '"]){ console.log(self._wkHandlers["' + b + '"]); throw new Error("' + b + ' already exists!"); }self._wkHandlers["' + b + '"]=' + d + ".call(null,self)||{};" + d + "=null;": (console.error("No function match!!"), !1)
            },
            wU: function(a) {
                var b = this.lp,
                c = [],
                d;
                for (d in this.Ks) if (this.Ks.hasOwnProperty(d)) {
                    var g = this.iF(this.Ks[d], this.qx(b, d));
                    g && c.push(g)
                }
                b = this.G.libPolyfills || [];
                d = 0;
                for (g = b.length; d < g; d++) b[d] = "(" + b[d].toString() + ")(self);";
                var h = b.join(";\n") + ";\n" + c.join(";\n"),
                c = this.G.hostWorker,
                r = this;
                c && c !== r ? c.FB(function(b, c) {
                    b ? a.call(r, b) : c.v3.sendMessage(f.EA + ":injectCode", h,
                    function(b) {
                        b ? a.call(r, b) : a.call(r, null, c.yW)
                    })
                }) : setTimeout(function() {
                    a.call(r, null, r.zV(h))
                },
                0)
            },
            zV: function(a) {
                var b = {
                    type: "text/javascript; charset=utf-8"
                };
                a = "self._wkHandlers={};(" + d.toString() + ")(self);\n" + a;
                var c;
                try {
                    var f = window.URL || window.webkitURL,
                    g = f.createObjectURL(new Blob([a], b));
                    c = new Worker(g);
                    setTimeout(function() {
                        f.revokeObjectURL(g);
                        g = null
                    },
                    3E3)
                } catch(h) {
                    console.error(h);
                    return
                }
                return c
            },
            sQ: function(b) {
                var c = 1,
                d = b.SO,
                f = this,
                g = !!f.G.batchSend;
                return function(h) {
                    var r = Array.prototype.slice.call(arguments, 1),
                    u = "function" === typeof r[r.length - 1] ? r.pop() : null,
                    t = f.lp,
                    w = h.split(":"),
                    v = f.xs;
                    1 < w.length && (h = w[1], v = w[0]);
                    r = {
                        Ko: a.g.xh(),
                        LA: f.qx(t, v),
                        pq: !!u,
                        Fo: t + "_" + c++,
                        Gz: h,
                        oW: r
                    };
                    u && d.push({
                        Gz: r.Gz,
                        LA: r.LA,
                        Ko: r.Ko,
                        Fo: r.Fo,
                        pq: u
                    });
                    g ? f.wP(b, r) : f.qn(b, r)
                }
            },
            qn: function(a, b) {
                if (this.xn.length) {
                    try {
                        a.postMessage(b, this.xn)
                    } catch(c) {
                        a.postMessage(b),
                        console.error(c)
                    }
                    this.xn.length = 0
                } else a.postMessage(b)
            },
            wP: function(b, c) {
                b.by || (b.by = []);
                b.by.push(c);
                if (!b.jH) {
                    var d = this;
                    b.jH = setTimeout(function() {
                        b.jH = null;
                        var c = b.by;
                        c.length && (d.qn(b, 1 === c.length ? c[0] : {
                            Ko: a.g.xh(),
                            p1: c
                        }), c.length = 0)
                    },
                    0)
                }
            },
            rV: function(a) {
                var b = this;
                a.addEventListener("error",
                function(a) {
                    console.error(a);
                    b.lH(null)
                },
                !1);
                f.b2(a)
            },
            gS: function(a, b) {
                var c = this;
                c.rV(a);
                var d = this.sQ(a);
                if (f.gQ) b.call(c, null, {
                    sendMessage: d
                });
                else {
                    f.gQ = !0;
                    var g = [c.cF() + ":checkup", Math.random().toFixed(5) + "", Math.round(1E3 * Math.random()), !1,
                    function(a, f) {
                        var h = !0;
                        if (a || !f || f.length !== g.length - 2) h = !1;
                        else for (var k = 0,
                        w = f.length; k < w; k++) if (f[k] !== g[k + 1]) {
                            h = !1;
                            break
                        }
                        h ? b.call(c, null, {
                            sendMessage: d
                        }) : (console.error(a), b.call(c, "Self checkup failed!!"))
                    }];
                    d.apply(c, g)
                }
            }
        });
        a.es = f
    })(V); (function() {
        if (!V.Ld) {
            V.Ld = {
                Ce: {},
                Zq: {}
            };
            var a = V.Ld,
            b = V.Ld.Ce,
            c = V.g;
            b.start = function(b) {
                a.Zq[b.id] = {
                    C: b.C,
                    time: {
                        HK: c.xh()
                    },
                    OW: function() {
                        return c.xh() - this.time.HK
                    }
                }
            };
            b.end = function(b) {
                var d = a.Zq[b.id],
                h = d.time,
                d = c.bind(d.OW, d),
                k = b.index,
                l = b.key;
                "function" !== typeof b.sc && (b.sc = function() {});
                if (void 0 === h[l]) void 0 === k ? h[l] = d() : (h[l] = [], h[l][k] = d());
                else if (void 0 !== k && void 0 === h[l][k]) h[l][k] = d();
                else return b.sc(Error("Duplicate Invoke"));
                b.sc(null)
            };
            b.push = function(b) {
                var c = a.Zq[b.id].time,
                d = b.key,
                k = b.Vk;
                "function" !== typeof b.sc && (b.sc = function() {});
                if (void 0 === c[d]) c[d] = k;
                else return b.sc(Error("Duplicate Invoke"));
                b.sc(null)
            };
            b.send = function(b) {
                var c = V.q.dc + "://webapi.amap.com/count?",
                h = V.extend(d({
                    C: a.Zq[b.id].C
                }), b.params || {}),
                k = V.g;
                b.params && b.params.rs && !b.params.type && (b = a.Zq[b.id].time, delete b.HK, h = V.extend(h, b));
                b = [];
                for (var l in h) k.isArray(h[l]) ? b.push([l, h[l].join("-")].join("=")) : b.push([l, h[l]].join("="));
                new V.ra.Ca(c + b.join("&"))
            };
            var d = function(a) {
                var b = V.j,
                c = V.q;
                a = V.f.MJ(a.C);
                return {
                    type: "q",
                    resolution: a.width + "*" + a.height,
                    k: c.key,
                    u: c.Dl,
                    iw: b.Zd ? 1 : 0,
                    cw: b.PW ? 1 : 0,
                    gc: b.mK,
                    m: b.U ? 1 : 0,
                    cv: b.Ke ? 1 : 0,
                    pf: b.lr,
                    dpr: window.devicePixelRatio,
                    screenwidth: screen.width,
                    scale: b.TC || 0,
                    detect: b.ha ? 1 : 0
                }
            }
        }
    })();
    V.f = {
        get: function(a) {
            return "string" === typeof a ? document.getElementById(a) : a
        },
        z6: function(a, b) {
            var c = document.head || document.getElementsByTagName("head")[0];
            if (c) {
                var d = document.createElement("link");
                d.setAttribute("rel", "stylesheet");
                d.setAttribute("type", "text/css");
                d.setAttribute("href", a);
                b ? c.appendChild(d) : c.insertBefore(d, c.firstChild)
            } else document.write("<link rel='stylesheet' href='" + a + "'/>")
        },
        Ic: function(a, b) {
            var c = a.style[b]; ! c && a.currentStyle && (c = a.currentStyle[b]);
            c && "auto" !== c || !document.defaultView || (c = (c = document.defaultView.getComputedStyle(a, null)) ? c[b] : null);
            c && "auto" !== c || "height" !== b || (c = a.clientHeight + "px");
            c && "auto" !== c || "width" !== b || (c = a.clientWidth + "px");
            return "auto" === c ? null: c
        },
        Nq: function(a) {
            if (a) return new V.ac(a.clientWidth || document.body.clientWidth, a.clientHeight || (V.j.bo ? "CSS1Compat" === document.compatMode ? document.documentElement.clientHeight: document.body.clientHeight: document.body.clientHeight), !0)
        },
        MJ: function(a) {
            return new V.ac(a.clientWidth, a.clientHeight)
        },
        DA: function(a) {
            var b = 0,
            c = 0,
            d = a,
            f = document.body,
            g = document.documentElement,
            h, k = V.j.Vq;
            do {
                b += d.offsetTop || 0;
                c += d.offsetLeft || 0;
                b += parseInt(V.f.Ic(d, "borderTopWidth"), 10) || 0;
                c += parseInt(V.f.Ic(d, "borderLeftWidth"), 10) || 0;
                h = V.f.Ic(d, "position");
                if (d.offsetParent === f && "absolute" === h) break;
                if ("fixed" === h) {
                    b += f.scrollTop || g.scrollTop || 0;
                    c += f.scrollLeft || g.scrollLeft || 0;
                    break
                }
                d = d.offsetParent
            } while ( d );
            d = a;
            do {
                if (d === f) break;
                b -= d.scrollTop || 0;
                c -= d.scrollLeft || 0;
                V.f.dY() || !V.j.p3 && !k || (c += d.scrollWidth - d.clientWidth, k && "hidden" !== V.f.Ic(d, "overflow-y") && "hidden" !== V.f.Ic(d, "overflow") && (c += 17));
                d = d.parentNode
            } while ( d );
            return new V.K(c, b)
        },
        dY: function() {
            V.f.CQ || (V.f.CQ = !0, V.f.BQ = "ltr" === V.f.Ic(document.body, "direction"));
            return V.f.BQ
        },
        create: function(a, b, c) {
            a = document.createElement(a);
            c && (a.className = c);
            b && b.appendChild(a);
            return a
        },
        kJ: function() {
            document.selection && document.selection.empty && document.selection.empty();
            this.NT || (this.NT = document.onselectstart, document.onselectstart = V.g.AJ)
        },
        sJ: function() {},
        Zn: function(a, b) {
            if (a && b) return 0 < a.className.length && RegExp("(^|\\s)" + b + "(\\s|$)").test(a.className)
        },
        tb: function(a, b) {
            a && b && !V.f.Zn(a, b) && (a.className += (a.className ? " ": "") + b)
        },
        Ab: function(a, b) {
            function c(a, c) {
                return c === b ? "": a
            }
            a && b && (a.className = a.className.replace(/(\S+)\s*/g, c).replace(/(^\s+|\s+$)/, ""))
        },
        YJ: function(a, b) {
            return 1 === b ? "": "opacity" in a.style ? "opacity:" + b: 8 <= document.documentMode ? "-ms-filter:'progid:DXImageTransform.Microsoft.Alpha(opacity=" + Math.ceil(100 * b) + ")'": "filter:alpha(opacity=" + Math.ceil(100 * b) + ")"
        },
        Nk: function(a, b) {
            if ("opacity" in a.style) a.style.opacity = b;
            else if ("filter" in a.style) {
                a = a.childNodes.length ? a.childNodes: [a];
                for (var c = Math.round(100 * b), d = 0; d < a.length; d += 1) a[d].childNodes && a[d].childNodes.length ? this.Nk(a[d], b) : a[d].style && (a[d].style.filter = "", 100 !== c && (a[d].style.filter = " progid:DXImageTransform.Microsoft.Alpha(opacity=" + c + ")"))
            }
        },
        FC: function(a) {
            for (var b = document.documentElement.style,
            c = 0; c < a.length; c += 1) if (a[c] in b) return a[c];
            return ! 1
        },
        iK: function(a) {
            var b = V.j.q3;
            return "translate" + (b ? "3d": "") + "(" + a.x + "px," + a.y + "px" + ((b ? ",0": "") + ")")
        },
        V5: function(a, b) {
            return V.f.iK(b.add(b.Bc( - 1 * a))) + (" scale(" + a + ") ")
        },
        x7: function(a, b, c) {
            a.df = b; ! c && V.j.jW ? (b = V.f.iK(b), c = a.style[V.f.Nd].split("rotate"), 1 < c.length ? (c[0] = b, a.style[V.f.Nd] = c.join("rotate")) : a.style[V.f.Nd] = b, V.j.C_ && (a.style.WebkitBackfaceVisibility = "hidden")) : (a.style.left = b.x + "px", a.style.top = b.y + "px")
        },
        Vc: function(a) {
            a.df || (a.df = a.style.left ? new V.K(parseInt(a.style.left), parseInt(a.style.top)) : new V.K(0, 0));
            return a.df
        },
        v7: function(a, b) {
            a = a instanceof Array ? a: [a];
            for (var c = 0; c < a.length; c += 1) a[c].style.cssText = b
        },
        QM: function(a, b) {
            ";" !== b[b.length - 1] && (b += ";");
            return b.toLowerCase() !== a.style.cssText.replace(/ /g, "").toLowerCase() ? (a.style.cssText = b, !0) : !1
        },
        na: function(a, b) {
            a = a instanceof Array ? a: [a];
            for (var c = 0; c < a.length; c += 1) for (var d in b) b.hasOwnProperty(d) && (a[c].style[d] = b[d]);
            return this
        },
        pM: function(a) {
            for (; a.childNodes.length;) a.removeChild(a.childNodes[0])
        },
        remove: function(a) {
            a && a.parentNode && a.parentNode.removeChild(a)
        },
        rotate: function(a, b, c) {
            var d = V.f.Nd;
            c = c || {
                x: a.clientWidth / 2,
                y: a.clientHeight / 2
            };
            d ? (a.style[d] = "" + (" rotate(" + b + "deg)"), a.style[V.f.Sk[d] + "-origin"] = c.x + "px " + c.y + "px") : (d = Math.cos(b * Math.PI / 180), b = Math.sin(b * Math.PI / 180), a.style.filter = "progid:DXImageTransform.Microsoft.Matrix()", 0 < a.filters.length && (a = a.filters.item(0), a.H3 = -c.x * d + c.y * b + c.x, a.I3 = -c.x * b - c.y * d + c.y, a.M11 = a.M22 = d, a.M12 = -(a.M21 = b)))
        },
        rZ: function(a, b, c) {
            var d = V.f.Nd;
            c = c || {
                x: a.clientWidth / 2,
                y: a.clientHeight / 2
            };
            return d ? V.f.Sk[d] + ":" + ("" + (" rotate(" + b + "deg)")) + ";" + (V.f.Sk[d] + "-origin:" + c.x + "px " + c.y + "px") : ""
        },
        Fi: function(a, b, c) {
            a.width = b;
            a.height = c
        },
        getElementsByClassName: function(a, b, c) {
            b = b || "*";
            c = c || document;
            if (c.getElementsByClassName) return c.getElementsByClassName(a);
            b = c.getElementsByTagName(b);
            a = RegExp("(^|\\s)" + a + "(\\s|$)");
            c = [];
            for (var d = 0,
            f; d < b.length; d++) f = b[d],
            a.test(f.className) && c.push(f);
            return c
        },
        fillText: function(a, b) {
            if (a) return void 0 !== a.textContent ? a.textContent = b: void 0 !== a.innerText ? a.innerText = b: a.innerHTML = b,
            a
        }
    }; (function() {
        var a = V.f.FC(["userSelect", "WebkitUserSelect", "OUserSelect", "MozUserSelect", "msUserSelect"]),
        b;
        V.extend(V.f, {
            kJ: function() {
                V.B.e(window, "selectstart", V.B.preventDefault);
                if (a) {
                    var c = document.documentElement.style;
                    "none" !== c[a] && (b = c[a], c[a] = "none")
                }
            },
            sJ: function() {
                V.B.F(window, "selectstart", V.B.preventDefault);
                a && "none" !== b && (document.documentElement.style[a] = b, b = "none")
            },
            YX: function() {
                V.B.e(window, "dragstart", V.B.preventDefault)
            },
            wY: function() {
                V.B.F(window, "dragstart", V.B.preventDefault)
            }
        })
    })();
    V.f.Nd = V.f.FC(["WebkitTransform", "OTransform", "MozTransform", "msTransform", "transform"]);
    V.f.Sk = {
        transform: "transform",
        WebkitTransform: "-webkit-transform",
        OTransform: "-o-transform",
        MozTransform: "-moz-transform",
        msTransform: "-ms-transform"
    };
    V.f.kw = V.f.FC(["webkitTransition", "transition", "OTransition", "MozTransition", "msTransition"]);
    V.f.U3 = "webkitTransition" === V.f.kw || "OTransition" === V.f.kw ? V.f.kw + "End": "transitionend";
    V.B = {
        e: function(a, b, c, d) {
            function f(b) {
                b = b || window.event;
                b.target = b.target || b.srcElement;
                return c.call(d || a, b, k)
            }
            var g = V.g.Bb(a) + "_" + V.g.Bb(c) + "_" + V.g.Bb(d || a),
            h = b + g;
            if (a[h]) return this;
            var k = b;
            V.j.EJ && "mousewheel" === b && (b = "DOMMouseScroll");
            if (V.j.bo && ("mouseover" === b || "mouseout" === b)) {
                var l = f;
                b = "mouseover" === b ? "mouseenter": "mouseleave";
                f = function(a) {
                    l(a)
                }
            }
            if (V.j.hM && 0 === b.indexOf("touch")) return a[h] = f,
            this.bW(a, b, f, g);
            V.j.vd && "dblclick" === b && this.$V && this.$V(a, f, g);
            "addEventListener" in a ? a.addEventListener(b, f, !1) : "attachEvent" in a ? a.attachEvent("on" + b, f) : a["on" + b] = f;
            a[h] = f;
            return this
        },
        Fk: function(a, b, c, d) {
            var f = this;
            this.e(a, b,
            function h(k) {
                f.F(a, b, h, d);
                return c.call(d || a, k || window.event, b)
            },
            d)
        },
        F: function(a, b, c, d) {
            c = V.g.Bb(a) + "_" + V.g.Bb(c) + "_" + V.g.Bb(d || a);
            d = b + c;
            var f = a[d];
            V.j.EJ && "mousewheel" === b && (b = "DOMMouseScroll"); ! V.j.bo || "mouseover" !== b && "mouseout" !== b || (b = "mouseover" === b ? "mouseenter": "mouseleave");
            V.j.hM && -1 < b.indexOf("touch") ? this.V0(a, b, c) : V.j.vd && "dblclick" === b && this.R0 ? this.R0(a, c) : "removeEventListener" in a ? a.removeEventListener(b, f, !1) : "detachEvent" in a && -1 === b.indexOf("touch") ? f && a.detachEvent("on" + b, f) : a["on" + b] = null;
            a[d] = null;
            return this
        },
        z7: function(a, b) {
            var c = document.createEvent("MouseEvents");
            c.initMouseEvent(a, !0, !0, window, 1, b.screenX, b.screenY, b.clientX, b.clientY, !1, !1, !1, !1, 0, null);
            b.target.dispatchEvent(c)
        },
        stopPropagation: function(a) {
            a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0;
            return this
        },
        n2: function(a) {
            var b = V.B.stopPropagation;
            V.j.vd && (V.B.e(a, "touchstart", b, this), V.B.e(a, "touchmove", b, this), V.B.e(a, "touchend", b, this));
            V.j.U || (V.B.e(a, "mousedown", b, this), V.B.e(a, "mouseup", b, this), V.B.e(a, "mousemove", b, this));
            V.j.gM && (V.B.e(a, "pointerdown", b, this), V.B.e(a, "pointerup", b, this), V.B.e(a, "pointermove", b, this));
            V.j.I_ && (V.B.e(a, "MSPointerDown", b, this), V.B.e(a, "MSPointerUp", b, this), V.B.e(a, "MSPointerMove", b, this))
        },
        preventDefault: function(a) {
            a.preventDefault ? a.preventDefault() : a.returnValue = !1;
            return this
        },
        stop: function(a) {
            return V.B.preventDefault(a).stopPropagation(a)
        },
        J1: function(a) {
            return a && a.getBoundingClientRect ? (a.nw = a.getBoundingClientRect(), a.KD = [a.clientLeft, a.clientTop], !0) : !1
        },
        U2: function(a) {
            a.nw && (a.nw = null, a.KD = null)
        },
        AY: function(a, b) {
            var c = b.nw || b.getBoundingClientRect(),
            d = b.KD || [b.clientLeft, b.clientTop];
            return new V.K(a.clientX - c.left - d[0], a.clientY - c.top - d[1])
        },
        Jg: function(a, b) {
            if (b && b.getBoundingClientRect) return this.AY(a, b);
            var c = document.body,
            d = document.documentElement,
            c = new V.K(V.j.vd ? a.pageX: a.clientX + (c.scrollLeft || d.scrollLeft), V.j.vd ? a.pageY: a.clientY + (c.scrollTop || d.scrollTop));
            return b ? c.Xa(V.f.DA(b)) : c
        },
        UK: function(a) {
            return 1 === a.which || 0 === a.button || 1 === a.button
        }
    };
    V.extend(V.B, {
        ay: [],
        qG: !1,
        bW: function(a, b, c, d) {
            switch (b) {
            case "touchstart":
                return this.eW(a, b, c, d);
            case "touchend":
                return this.cW(a, b, c, d);
            case "touchmove":
                return this.dW(a, b, c, d)
            }
        },
        qi: function(a) {
            if (V.j.gM) return a;
            switch (a) {
            case "pointerdown":
                return "MSPointerDown";
            case "pointerup":
                return "MSPointerUp";
            case "pointercancel":
                return "MSPointerCancel";
            case "pointermove":
                return "MSPointerMove"
            }
        },
        eW: function(a, b, c, d) {
            function f(a) {
                for (var b = !1,
                d = 0; d < g.length; d += 1) if (g[d].pointerId === a.pointerId) {
                    b = !0;
                    break
                }
                b || g.push(a);
                a.touches = g.slice();
                a.changedTouches = [a];
                c(a)
            }
            var g = this.ay;
            a["_amap_touchstart" + d] = f;
            a.addEventListener(this.qi("pointerdown"), f, !1);
            this.qG || (a = function(a) {
                for (var b = 0; b < g.length; b += 1) if (g[b].pointerId === a.pointerId) {
                    g.splice(b, 1);
                    break
                }
            },
            document.documentElement.addEventListener(this.qi("pointerup"), a, !1), document.documentElement.addEventListener(this.qi("pointercancel"), a, !1), this.qG = !0);
            return this
        },
        dW: function(a, b, c, d) {
            function f(a) {
                if (a.pointerType !== a.MSPOINTER_TYPE_MOUSE || 0 !== a.buttons) {
                    for (var b = 0; b < g.length; b += 1) if (g[b].pointerId === a.pointerId) {
                        g[b] = a;
                        break
                    }
                    a.touches = g.slice();
                    a.changedTouches = [a];
                    c(a)
                }
            }
            var g = this.ay;
            a["_amap_touchmove" + d] = f;
            a.addEventListener(this.qi("pointermove"), f, !1);
            return this
        },
        cW: function(a, b, c, d) {
            function f(a) {
                for (var b = 0; b < g.length; b += 1) if (g[b].pointerId === a.pointerId) {
                    g.splice(b, 1);
                    break
                }
                a.touches = g.slice();
                a.changedTouches = [a];
                c(a)
            }
            var g = this.ay;
            a["_amap_touchend" + d] = f;
            a.addEventListener(this.qi("pointerup"), f, !1);
            a.addEventListener(this.qi("pointercancel"), f, !1);
            return this
        },
        V0: function(a, b, c) {
            c = a["_amap_" + b + c];
            switch (b) {
            case "touchstart":
                a.removeEventListener(this.qi("pointerdown"), c, !1);
                break;
            case "touchmove":
                a.removeEventListener(this.qi("pointermove"), c, !1);
                break;
            case "touchend":
                a.removeEventListener(this.qi("pointerup"), c, !1),
                a.removeEventListener(this.qi("pointercancel"), c, !1)
            }
            return this
        }
    }); (function() {
        function a(a) {
            var b = a.target || a.srcElement;
            b.SD && g(b.SD);
            b.SD = f(function() {
                var c = b.Oi;
                if (c && c.Ni) for (var d = 0; d < c.Ni.length; d += 1) c.Ni[d].call(c, a)
            })
        }
        function b() {
            var b = this.contentDocument.defaultView;
            b.Oi = this.bP;
            b.addEventListener("resize", a);
            a.call(b, {
                target: b
            })
        }
        var c = document.attachEvent,
        d = navigator.userAgent.match(/(Trident|Edge)/),
        f = V.g.Ve,
        g = V.g.Gl;
        V.extend(V.B, {
            gW: function(f, g) {
                if (!f.Ni) if (f.Ni = [], c) f.Oi = f,
                f.attachEvent("onresize", a);
                else {
                    "static" === window.getComputedStyle(f).position && (f.style.position = "relative");
                    var l = f.Oi = document.createElement("object");
                    l.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;");
                    l.bP = f;
                    l.onload = b;
                    l.type = "text/html";
                    d && f.appendChild(l);
                    l.data = "about:blank";
                    d || f.appendChild(l)
                }
                f.Ni.push(g)
            },
            h7: function(b, d) {
                b.Ni.splice(b.Ni.indexOf(d), 1);
                b.Ni.length || (c ? b.detachEvent("onresize", a) : (b.Oi.contentDocument.defaultView.removeEventListener("resize", a), b.Oi = !b.removeChild(b.Oi)))
            },
            kX: function(a) {
                a.Ni = null;
                if (a.Oi) {
                    var b = a.Oi;
                    b.parentNode === a && b.parentNode.removeChild(b);
                    a.Oi = null
                }
            }
        })
    })();
    V.Ra = {
        D_: V.q.pb + "/maps",
        Nn: V.W.Nn,
        pB: 0,
        vo: [],
        Ll: {},
        tf: function(a, b) {
            function c() {
                d += 1;
                d === f.length && b && b()
            }
            a.length || b();
            for (var d = 0,
            f = [], g = 0; g < a.length; g += 1) {
                var h = this.Nn[a[g]];
                if (h) for (var k = 0; k < h.length; k += 1) f.push(h[k]);
                f.push(a[g])
            }
            for (g = 0; g < f.length; g += 1) this.$z(f[g], c)
        },
        Cu: function(a) {
            for (var b = 0; b < a.length; b += 1) if (1 !== this.Zt(a[b]).status) return ! 1;
            return ! 0
        },
        $z: function(a, b) {
            var c = this.Zt(a);
            if (1 === c.status) b && b();
            else {
                b && c.Hn.push(b);
                try {
                    if (V.j.qj && window.localStorage) {
                        var d = window.localStorage["_AMap_" + a];
                        d && (d = JSON.parse(d), d.version === V.q.wg ? (window._jsload_(a, d.script, !0), d.css && window._cssload_(a, d.css, !0)) : window.localStorage.removeItem("_AMap_" + a))
                    }
                } catch(f) {}
                if (0 === c.status) {
                    this.H0(a);
                    var g = this;
                    g.pB || (g.pB = 1, window.setTimeout(function() {
                        g.pB = 0;
                        var a = g.D_ + "/modules?v=" + V.q.bz + "&key=" + V.q.key + "&m=" + g.vo.join(",") + "&vrs=" + V.q.wg;
                        V.Ra.Nw(g.vo.join(","));
                        g.vo = [];
                        c.uv = g.l_(a)
                    },
                    1));
                    c.status = -1
                }
            }
        },
        Nw: function(a) {
            new V.ra.Ca(V.q.ec + "/v3/log/init?" + ["s=rsv3&product=JsModule&key=" + V.q.key, "m=" + a].join("&"), {
                callback: "callback"
            })
        },
        load: function(a, b) {
            var c = this.Nn[a];
            if (c) {
                for (var d = [], f = 0; f < c.length; f += 1) d.push(c[f]);
                d.push(a);
                for (var g = 0,
                c = function() {
                    g += 1;
                    g === d.length && b && b()
                },
                f = 0; f < d.length; f += 1) this.$z(d[f], c)
            } else this.$z(a, b)
        },
        H0: function(a) {
            for (var b = 0; b < this.vo.length; b += 1) if (this.vo[b] === a) return;
            this.vo.push(a)
        },
        Lk: function(a, b) {
            var c = this.Zt(a);
            try {
                eval(b)
            } catch(d) {
                return
            }
            c.status = 1;
            for (var f = 0,
            g = c.Hn.length; f < g; f += 1) c.Hn[f]();
            c.Hn = []
        },
        Y4: function(a, b) {
            var c = this;
            c.timeout = setTimeout(function() {
                1 !== c.Ll[a].status ? (c.remove(a), c.load(a, b)) : clearTimeout(c.timeout)
            },
            5E3)
        },
        Zt: function(a) {
            this.Ll[a] || (this.Ll[a] = {},
            this.Ll[a].status = 0, this.Ll[a].Hn = []);
            return this.Ll[a]
        },
        remove: function(a) {
            this.Ll[a] = null
        },
        l_: function(a) {
            V.q.mode && (a += "&mode=" + V.q.mode);
            var b = document.createElement("script");
            b.charset = "utf-8";
            b.src = a;
            document.body.appendChild(b);
            return b
        }
    };
    window._jsload_ = function(a, b, c) {
        var d = V.Ra.Zt(a);
        d.uv && V.g.indexOf(document.body.childNodes, d.uv) && document.body.removeChild(d.uv);
        d.uv = null;
        try {
            if (!c && window.localStorage && b && "" !== b && V.j.qj) {
                var f = window.localStorage["_AMap_" + a],
                f = f || "{}",
                f = JSON.parse(f);
                f.version !== V.q.wg || f.script ? window.localStorage.setItem("_AMap_" + a, JSON.stringify({
                    script: b,
                    version: V.q.wg
                })) : window.localStorage.setItem("_AMap_" + a, JSON.stringify({
                    script: b,
                    css: f.css,
                    version: V.q.wg
                }))
            }
        } catch(g) {}
        V.Ra.Lk(a, b)
    };
    window._cssload_ = function(a, b, c) {
        try { ! c && window.localStorage && b && "" !== b && V.j.qj && window.localStorage.setItem("_AMap_" + a, JSON.stringify({
                css: b,
                version: V.q.wg
            }))
        } catch(d) {}
        var f = document.createElement("style");
        f.type = "text/css"; - 1 === V.q.pb.indexOf("webapi.amap.com") && (b = b.replace(eval("/webapi.amap.com/gi"), V.q.pb.split("://")[1]));
        "https" === V.q.dc && (b = b.replace(eval("/http:/gi"), "https:"));
        f.styleSheet ? (a = function() {
            try {
                f.styleSheet.cssText = b
            } catch(a) {}
        },
        f.styleSheet.disabled ? setTimeout(a, 10) : a()) : f.appendChild(document.createTextNode(b));
        a = document.head || document.getElementsByTagName("head")[0];
        2 > a.childNodes.length ? a.appendChild(f) : a.insertBefore(f, a.childNodes[1])
    }; (function(a) {
        var b = V.j;
        if (!V.indexedDB && b.ud) {
            var c = a.indexedDB || a.webkitIndexedDB || a.msIndexedDB || a.mozIndexedDB,
            d = a.IDBKeyRange || a.X7 || a.K6 || a.J6;
            if (c) {
                var f = V.g,
                g = null;
                a = "amap-jsapi" + (a.J3 ? "-debug": "");
                var h = V.extend({},
                V.ea),
                k;
                try {
                    k = c.open(a),
                    k.onsuccess = function() {
                        g = this.result;
                        h.w("dbReady", {
                            status: "success"
                        })
                    },
                    k.onerror = function() {
                        h.w("dbReady", {
                            status: "error"
                        })
                    },
                    k.onblocked = function() {
                        h.w("dbReady", {
                            status: "blocked"
                        })
                    },
                    k.onupgradeneeded = function(a) {
                        a.currentTarget.result.createObjectStore("tile", {
                            keyPath: "tileKey"
                        })
                    }
                } catch(l) {
                    b.ud = !1
                } finally {
                    if (!b.ud) return
                }
                var b = function(a) {
                    return function() {
                        try {
                            return a.apply(this, arguments)
                        } catch(b) {
                            var c = arguments[arguments.length - 1];
                            "function" === typeof c && setTimeout(function() {
                                c({
                                    code: 4
                                })
                            },
                            1)
                        }
                    }
                },
                m = b(function(a, b) {
                    return null === g ? (setTimeout(function() {
                        b && b({
                            code: 3
                        })
                    },
                    1), null) : g.transaction("tile", a).objectStore("tile")
                }),
                n = function(a, b) {
                    for (var c = -1,
                    d = 0,
                    f = b.length; d < f; d++) if (b[d] > a) {
                        c = d;
                        break
                    }
                    return c
                };
                V.indexedDB = {
                    fq: b(function(a, b) {
                        g ? "function" === typeof a && a() : h.e("dbReady",
                        function(c) {
                            "success" === c.status ? "function" === typeof a && a() : "function" === typeof b && b({
                                code: 3,
                                status: status
                            })
                        })
                    }),
                    count: b(function(a) {
                        var b = this,
                        c = arguments;
                        this.fq(function() {
                            b.Nw.apply(b, c)
                        },
                        a)
                    }),
                    Nw: b(function(a) {
                        var b = m("readonly", a).count();
                        b.onsuccess = function() {
                            a(null, b.result)
                        };
                        b.onerror = function() {
                            a({
                                code: 7
                            })
                        }
                    }),
                    get: b(function(a, b) {
                        var c = this,
                        d = arguments;
                        this.fq(function() {
                            c.UQ.apply(c, d)
                        },
                        b)
                    }),
                    UQ: b(function(a, b) {
                        var c = m("readonly", b);
                        if (f.isArray(a)) {
                            var g = [],
                            h = a.slice(0);
                            a.sort();
                            c.openCursor(d.bound(a[0], a[a.length - 1])).onsuccess = function(c) {
                                if (c = c.target.result) {
                                    var d = f.indexOf(h, c.value.tileKey); - 1 !== d && (g[d] = c.value);
                                    c["continue"](a[n(c.value.tileKey, a)])
                                } else b && b(null, g.filter(function(a) {
                                    return void 0 !== a
                                }))
                            }
                        } else c = c.get(a),
                        c.onsuccess = function(a) {
                            b && b(null, a.target.result)
                        },
                        c.onerror = function() {
                            b && b({
                                code: 1
                            })
                        }
                    }),
                    add: b(function(a, b) {
                        var c = this,
                        d = arguments;
                        this.fq(function() {
                            c.fP.apply(c, d)
                        },
                        b)
                    }),
                    fP: b(function(a, b) {
                        f.isArray(a) || (a = [a]);
                        for (var c = a.length,
                        d = 0,
                        g = c; d < g; d++) {
                            var h = m("readwrite", b).add(a[d]);
                            h.onsuccess = function() {
                                0 === --c && b(null)
                            };
                            h.onerror = function(a) { - 1 === a.target.error.message.indexOf("Key already exists") ? (b({
                                    code: 5
                                }), c = 0) : 0 === --c && b(null)
                            }
                        }
                    }),
                    remove: b(function(a, b) {
                        var c = this,
                        d = arguments;
                        this.fq(function() {
                            c.JU.apply(c, d)
                        },
                        b)
                    }),
                    JU: b(function(a, b) {
                        var c = m("readwrite", b);
                        f.isArray(a) || (a = [a]);
                        a = a.sort();
                        c.openCursor(d.bound(a[0], a[a.length - 1])).onsuccess = function(c) {
                            if (c = c.target.result) {
                                if (f.ka(c.value.tileKey, a)) c["delete"]();
                                c["continue"](a[n(c.value.tileKey, a)])
                            } else b && b(null)
                        }
                    }),
                    clear: b(function(a) {
                        var b = this,
                        c = arguments;
                        this.fq(function() {
                            b.ms.apply(b, c)
                        },
                        a)
                    }),
                    ms: b(function(a) {
                        var b = m("readwrite", a).clear();
                        b.onsuccess = function() {
                            a && a(null)
                        };
                        b.onerror = function() {
                            a && a({
                                code: 2
                            })
                        }
                    })
                }
            } else b.ud = !1
        }
    })(window); (function() {
        function a(a) {
            t.data.keys = t.data.keys.filter(function(b) {
                return ! q.ka(a, b)
            }).concat(a)
        }
        function b(a) {
            return [V.q.wg, a.yf.replace(/\//g, ","), a.Zd ? "w": "v", u(a.ha, a.td), l(a.url)].join("|")
        }
        function c() {
            t.data.keys.length >= t.Zv && d()
        }
        function d() {
            var a = t.data.keys.length,
            b = Math.floor(a / 2);
            a > t.Zv && (b = Math.floor(a - t.Zv / 2));
            a = t.data.keys.slice(0, b);
            t.data.keys = t.data.keys.slice(b + 1);
            r.remove(a,
            function(a) {
                a && 3 === a.code && (p.ud = !1)
            })
        }
        function f() {
            h();
            v.setItem(t.key, t.data, !0);
            p.ud && r && r.clear(function(a) {
                a && 3 === a.code && (p.ud = !1)
            })
        }
        function g() {
            h();
            var a = v.getItem(t.key, !0);
            a && (a.Pv === t.data.Pv && a.uI === t.data.uI ? t.data = a: f())
        }
        function h() {
            t.data = {
                Pv: p.Qo,
                uI: V.q.wg,
                keys: [],
                Hf: {},
                mg: {}
            };
            t.Cj = {}
        }
        function k(a) {
            a && (t.data.Pv = a, p.Qo = a)
        }
        function l(a) {
            var b = "limg";
            /flds=([^&]+)/.test(a) && (b = RegExp.$1);
            return b
        }
        function m(a) {
            if ("object" === typeof a && null !== a) {
                var b = [];
                if (q.isArray(a)) if (Object.keys(a).length == a.length) b = a.map(function(a) {
                    return m(a)
                });
                else {
                    b.push("__arrayObject");
                    var c = {},
                    d;
                    for (d in a)(0 > parseInt(d) || isNaN(parseInt(d))) && a.hasOwnProperty(d) && (c[d] = m(a[d]));
                    b.push(c);
                    b.push(a.map(function(a) {
                        return m(a)
                    }))
                } else if (q.zu(a, "Float32Array")) b.push("__Float32Array"),
                b.push(Array.prototype.slice.call(a));
                else if (q.zu(a, "Uint16Array")) b.push("__Uint16Array"),
                b.push(Array.prototype.slice.call(a));
                else for (d in b = {},
                a) a.hasOwnProperty(d) && (b[d] = m(a[d]));
                return b
            }
            return a
        }
        function n(a) {
            if ("object" === typeof a && null !== a) {
                var b = {};
                if (q.isArray(a)) if ("__Float32Array" === a[0]) b = new Float32Array(a[1]);
                else if ("__Uint16Array" === a[0]) b = new Uint16Array(a[1]);
                else if ("__arrayObject" === a[0]) {
                    b = n(a[2]);
                    a = a[1];
                    for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c])
                } else b = a.map(function(a) {
                    return n(a)
                });
                else for (c in a) a.hasOwnProperty(c) && (b[c] = n(a[c]));
                return b
            }
            return a
        }
        var p = V.j,
        q = V.g;
        if (!V.Lm && (p.ud || p.qj)) {
            var r = V.indexedDB,
            u = function(a, b) {
                return [a ? 1 : 0, p.U ? 1 : 0, b ? 1 : 0].join()
            },
            t = {
                Zv: 1E3,
                key: "_AMap_data.tileKeys"
            },
            w = [],
            v = {
                getItem: function(a, b) {
                    var c = localStorage.getItem(a);
                    if (c && b) {
                        var d;
                        try {
                            d = JSON.parse(c)
                        } catch(f) {
                            d = null
                        }
                        c = d
                    }
                    return c
                },
                setItem: function(a, b, c) {
                    var d = b;
                    c && (d = JSON.stringify(b), 1.5 < d.length / 1024 / 1024 && Object.keys(b.mg).length && (b.mg = {},
                    d = JSON.stringify(b)));
                    try {
                        localStorage.setItem(a, d)
                    } catch(g) {
                        f()
                    }
                }
            };
            V.Lm = {
                get: function(c, d) {
                    function g(a) {
                        var b = {
                            NA: u,
                            B_: M,
                            Hf: t.data.Hf
                        };
                        /\|limg/.test(W[0]) ? b.e_ = h(a) : b.ce = k(a);
                        d && d(null, b)
                    }
                    function h(a) {
                        var b = [];
                        a.forEach(function(a) {
                            a.data.forEach(function(a) {
                                b.push(a)
                            })
                        });
                        return b
                    }
                    function k(a) {
                        var b = [];
                        l(c.url).split(",").forEach(function(c) {
                            a.forEach(function(a) {
                                if (a = a.data[c]) {
                                    var d = a.Hi;
                                    a.Hi = new V.Qh(d.z, d.x, d.y);
                                    a.Hi.N = d.N;
                                    for (var f in a.yb) a.yb.hasOwnProperty(f) && delete a.yb[f].Zk;
                                    b.push(a)
                                }
                            })
                        });
                        return b
                    }
                    var v = c.A2,
                    u = [],
                    W = [],
                    M = [],
                    Q = [];
                    if ("FS" !== c.type && !t.data.keys.length) return d({
                        code: 1
                    });
                    v.forEach(function(a) {
                        var d = b({
                            yf: a.key,
                            url: c.url,
                            Zd: c.Zd,
                            ha: c.S.ha,
                            td: c.td
                        });
                        "FS" !== c.type || p.ud ? "FS" !== c.type || /\|w\|/.test(d) ? q.ka(t.data.keys, d) ? (u.push(a), W.push(d)) : M.push(a) : (w.push(d), t.data.mg[d] ? (u.push(a), W.push(d), Q.push({
                            data: n(t.data.mg[d]),
                            yf: d
                        })) : q.ka(t.data.keys, d) ? (u.push(a), W.push(d)) : M.push(a)) : /\|w\|/.test(d) ? M.push(a) : (w.push(d), t.data.mg[d] ? (u.push(a), W.push(d), Q.push({
                            data: n(t.data.mg[d]),
                            yf: d
                        })) : M.push(a))
                    });
                    if (W.length) {
                        if (!p.ud) return g(Q);
                        var x = W.slice(0);
                        if (Q.length) {
                            if (Q.length === x.length) return g(Q);
                            Q.forEach(function(a) {
                                a = q.indexOf(x, a.yf);
                                x.splice(a, 1)
                            })
                        }
                        r.get(x,
                        function(b, h) {
                            if (b) 3 === b.code ? p.ud = !1 : f(),
                            d && d({
                                code: 1
                            });
                            else {
                                "FS" === c.type && h.length && h.forEach(function(a) { / \ | w\ | /.test(a.tileKey)||(t.data.mg[a.tileKey]=m(a.data))});if(Q.length){var k=[];h=
h.concat(Q);h.forEach(function(a){var b=q.indexOf(w,a.yf);k[b]=a});h=k=k.filter(function(a){return void 0!==a})}h.length===W.length?(g(h),a(W)):(f(),d&&d({code:1}))}})}else d&&d({code:1})},Dj:function(a){a.Io.forEach(function(c){c=b({yf:c.key,url:a.url,Zd:a.Zd,ha:a.S.ha,td:a.td});t.Cj[c]&&delete t.Cj[c]})},set:function(a,c){a.vdataVersion&&a.vdataVersion!==t.data.Pv&&(k(a.vdataVersion),f(),c&&c({code:2}));if(a.Ng){var d=b({yf:a.yf,url:a.url,Zd:a.Zd,ha:a.S.ha,td:a.td});if(p.ud||q.ka(w,d)){var g=t.Cj[d]||
[];g.push(q.Jb(a.data));t.Cj[d]=g}}else a.ce.forEach(function(c){var d=b({yf:c.yf,url:a.url,Zd:a.Zd,ha:a.S.ha,td:a.td});if(p.ud||q.ka(w,d)){var f=t.Cj[d]||{};f[c.Mc]=q.Jb(c);t.Cj[d]=f}});t.data.Hf={"x-vd-v":a["x-vd-v"],tv:a.tv,vdv:a.vdv,bgc:a.bgc}},flush:function(){var a=!0;return function(){var b=this;if(a){if(Object.keys(t.data.mg).length)for(var c in t.data.mg)t.data.mg.hasOwnProperty(c)&&!q.ka(w,c)&&delete t.data.mg[c];p.ud?r.count(function(a,c){a||(c!==t.data.keys.length?(r.clear(function(a){!a&&
b.As()}),t.data.keys=[]):b.As())}):b.As();a=!1}else b.As()}}(),As:function(){var a={},b=[],d=Object.keys(t.Cj),g=[];d.length?(d.forEach(function(c){var d=t.Cj[c];c.split("|").pop().split(",").every(function(a){return"limg"===a?d&&3===d.length:d&&void 0!==d[a]})?(g.push(c),q.ka(w,c)&&void 0===t.data.mg[c]&&(t.data.mg[c]=m(d)),b.push({tileKey:c,data:d})):a[c]=d}),b.length&&(p.ud?r.add(b,function(a){a?3!==a.code?f():p.ud=!1:(t.data.keys=t.data.keys.concat(g),v.setItem(t.key,t.data,!0),c())}):v.setItem(t.key,
t.data,!0)),t.Cj=a):(v.setItem(t.key,t.data,!0),c())}};g()}})();V.P=V.W.extend({D:function(a,b,c){var d=parseFloat(b),f=parseFloat(a);if(isNaN(a)||isNaN(b))throw"Invalid Object: LngLat("+f+", "+d+")";!0!==c&&(d=Math.max(Math.min(d,90),-90),f=(f+180)%360+(-180>f||180===f?180:-180));this.O=d;this.M=f},XJ:function(){return V.g.qf(this.M,6)},VJ:function(){return V.g.qf(this.O,6)},add:function(a,b){return new V.P(this.M+a.M,this.O+a.O,b)},Xa:function(a,b){return new V.P(this.M-a.M,this.O-a.O,b)},Ob:function(a,b){return new V.P(this.M/a,
                                    this.O / a,
                                    b)
                                },
                                Bc: function(a, b) {
                                    return new V.P(this.M * a, this.O * a, b)
                                },
                                Kf: function(a) {
                                    a = V.g.ma(a);
                                    if (a instanceof V.P) {
                                        var b = Math.cos,
                                        c = 0.017453292519943295 * this.O,
                                        d = 0.017453292519943295 * a.O;
                                        a = 0.017453292519943295 * a.M - 0.017453292519943295 * this.M;
                                        b = (1 - b(d - c) + (1 - b(a)) * b(c) * b(d)) / 2;
                                        return 12756274 * Math.asin(Math.sqrt(b))
                                    }
                                    if (a instanceof Array) return this.ZX(a)
                                },
                                ZX: function(a) {
                                    a = V.g.ma(a);
                                    for (var b = Infinity,
                                    c = 0,
                                    d = 1,
                                    f = a.length; d < f; c = d, d += 1) c = V.Tc.XI([this.M, this.O], [[a[c].M, a[c].O], [a[d].M, a[d].O]]),
                                    b = Math.min(b, this.Kf(new V.P(c[0], c[1])));
                                    return b
                                },
                                offset: function(a, b) {
                                    if (isNaN(a) || isNaN(b)) return ! 1;
                                    var c = 2 * Math.asin(Math.sin(Math.round(a) / 12756274) / Math.cos(this.O * Math.PI / 180)),
                                    c = this.M + 180 * c / Math.PI,
                                    d = 2 * Math.asin(Math.round(b) / 12756274);
                                    return new V.P(c, this.O + 180 * d / Math.PI)
                                },
                                Lb: function(a) {
                                    a = V.g.ma(a);
                                    return a instanceof V.P ? 1E-9 >= Math.max(Math.abs(this.O - a.O), Math.abs(this.M - a.M)) : !1
                                },
                                toString: function() {
                                    return V.g.qf(this.M, 6) + "," + V.g.qf(this.O, 6)
                                },
                                Jb: function() {
                                    return new V.P(this.M, this.O)
                                }
                            }); V.P.gZ = function(a, b, c) {
                                c = c + 1 || Math.round(Math.abs(a.M - b.M));
                                if (!c || 0.001 > Math.abs(a.M - b.M)) return [];
                                var d = [],
                                f = V.gD.TX,
                                g = V.gD.J0,
                                h = Math.asin,
                                k = Math.sqrt,
                                l = Math.sin,
                                m = Math.pow,
                                n = Math.cos,
                                p = Math.atan2,
                                q = a.O * f;
                                a = a.M * f;
                                var r = b.O * f;
                                b = b.M * f;
                                for (var h = 2 * h(k(m(l((q - r) / 2), 2) + n(q) * n(r) * m(l((a - b) / 2), 2))), u, t, w, v, f = 1; f < c; f += 1) u = 1 / c * f,
                                t = l((1 - u) * h) / l(h),
                                w = l(u * h) / l(h),
                                u = t * n(q) * n(a) + w * n(r) * n(b),
                                v = t * n(q) * l(a) + w * n(r) * l(b),
                                t = t * l(q) + w * l(r),
                                t = p(t, k(m(u, 2) + m(v, 2))),
                                u = p(v, u),
                                d.push(new V.P(u * g, t * g));
                                return d
                            }; V.P.Pn({
                                XJ: "getLng",
                                VJ: "getLat",
                                add: "add",
                                Xa: "subtract",
                                Ob: "divideBy",
                                Bc: "multiplyBy",
                                Kf: "distance",
                                offset: "offset",
                                Lb: "equals",
                                toString: "toString"
                            }); V.wd = V.W.extend({
                                D: function() {
                                    if (2 === arguments.length) this.mb = V.g.ma(arguments[0]),
                                    this.eb = V.g.ma(arguments[1]);
                                    else if (4 === arguments.length) this.mb = new V.P(arguments[0], arguments[1]),
                                    this.eb = new V.P(arguments[2], arguments[3]);
                                    else throw "Invalid Object: Bounds(" + arguments.join(",") + ")";
                                },
                                Mq: function() {
                                    return this.mb
                                },
                                Kq: function() {
                                    return this.eb
                                },
                                wh: function() {
                                    return new V.P(this.mb.M, this.eb.O, !0)
                                },
                                sk: function() {
                                    return new V.P(this.eb.M, this.mb.O, !0)
                                },
                                contains: function(a) {
                                    var b = this.mb,
                                    c = this.eb,
                                    d;
                                    a instanceof V.wd ? (d = a.mb, a = a.eb) : d = a = V.g.ma(a);
                                    var f = d.M,
                                    g = b.M,
                                    h = a.M,
                                    k = c.M;
                                    g > k && (k += 360, 0 > f && (f += 360), 0 > h && (h += 360));
                                    return d.O >= b.O && a.O <= c.O && f >= g && h <= k
                                },
                                Yd: function(a) {
                                    var b = this.mb,
                                    c = this.eb,
                                    d = a.mb;
                                    a = a.eb;
                                    var f = a.M >= b.M && d.M <= c.M;
                                    return a.O >= b.O && d.O <= c.O && f
                                },
                                Mf: function() {
                                    return new V.P(this.mb.M > this.eb.M ? (this.mb.M + this.eb.M + 360) / 2 % 360 : (this.mb.M + this.eb.M) / 2, (this.mb.O + this.eb.O) / 2)
                                },
                                extend: function(a) {
                                    this.mb.M = Math.min(this.mb.M, a.M);
                                    this.mb.O = Math.min(this.mb.O, a.O);
                                    this.eb.M = Math.max(this.eb.M, a.M);
                                    this.eb.O = Math.max(this.eb.O, a.O);
                                    return this
                                },
                                T2: function(a) {
                                    return this.extend(a.mb).extend(a.eb)
                                },
                                toString: function() {
                                    return this.mb.toString() + ";" + this.eb.toString()
                                },
                                Jb: function() {
                                    return new V.wd(this.mb.Jb(), this.eb.Jb())
                                },
                                Lb: function(a) {
                                    return a instanceof V.wd ? this.mb.Lb(a.mb) && this.eb.Lb(a.eb) : !1
                                },
                                Pe: function() {
                                    return Math.abs(this.eb.M - this.mb.M)
                                },
                                Ne: function() {
                                    return Math.abs(this.mb.O - this.eb.O)
                                }
                            }); V.wd.Pn({
                                Mq: "getSouthWest",
                                Kq: "getNorthEast",
                                wh: "getNorthWest",
                                sk: "getSouthEast",
                                contains: "contains",
                                Yd: "intersects",
                                Mf: "getCenter"
                            }); V.K = V.W.extend({
                                D: function(a, b, c) {
                                    if (isNaN(a) || isNaN(b)) throw "Invalid Object: Pixel(" + a + ", " + b + ")";
                                    this.x = c ? Math.round(a) : Number(a);
                                    this.y = c ? Math.round(b) : Number(b)
                                },
                                cd: function() {
                                    return this.x
                                },
                                Fc: function() {
                                    return this.y
                                },
                                add: function(a, b) {
                                    return new V.K(this.x + a.x, this.y + a.y, b)
                                },
                                Xa: function(a, b) {
                                    return new V.K(this.x - a.x, this.y - a.y, b)
                                },
                                Ob: function(a, b) {
                                    return new V.K(this.x / a, this.y / a, b)
                                },
                                Bc: function(a, b) {
                                    return new V.K(this.x * a, this.y * a, b)
                                },
                                Kf: function(a) {
                                    var b = a.x - this.x;
                                    a = a.y - this.y;
                                    return Math.sqrt(b * b + a * a)
                                },
                                floor: function() {
                                    return new V.K(Math.floor(this.x), Math.floor(this.y))
                                },
                                round: function() {
                                    return new V.K(this.x, this.y, !0)
                                },
                                Lb: function(a) {
                                    return a instanceof V.K && this.x === a.x && this.y === a.y
                                },
                                Jb: function(a) {
                                    return new V.K(this.x, this.y, a)
                                },
                                toString: function() {
                                    return this.x + "," + this.y
                                }
                            }); V.K.Pn({
                                cd: "getX",
                                Fc: "getY",
                                add: "add",
                                Xa: "subtract",
                                Ob: "divideBy",
                                Bc: "multiplyBy",
                                Kf: "distance",
                                Lb: "equals",
                                toString: "toString"
                            }); V.ac = V.W.extend({
                                D: function(a, b, c) {
                                    if (isNaN(a) || isNaN(b)) throw "Invalid Object: Size(" + a + ", " + b + ")";
                                    this.width = c ? Math.round(a) : Number(a);
                                    this.height = c ? Math.round(b) : Number(b)
                                },
                                Pe: function() {
                                    return this.width
                                },
                                Ne: function() {
                                    return this.height
                                },
                                Lo: function() {
                                    return new V.K(this.Pe(), this.Ne())
                                },
                                contains: function(a) {
                                    return Math.abs(a.x) <= Math.abs(this.width) && Math.abs(a.y) <= Math.abs(this.height)
                                },
                                Lb: function(a) {
                                    return a instanceof V.ac && this.width === a.width && this.height === a.height
                                },
                                toString: function() {
                                    return this.Pe() + "," + this.Ne()
                                }
                            }); V.ac.Pn({
                                Pe: "getWidth",
                                Ne: "getHeight",
                                toString: "toString"
                            }); V.fe = V.W.extend({
                                D: function() {
                                    if (2 === arguments.length) this.hb = arguments[0],
                                    this.$b = arguments[1];
                                    else if (1 === arguments.length && arguments[0] instanceof Array || 4 === arguments.length) {
                                        var a = arguments[0] instanceof Array ? arguments[0] : arguments;
                                        this.hb = new V.K(a[0], a[1]);
                                        this.$b = new V.K(a[2], a[3])
                                    } else throw "Invalid Object: PixelBounds(" + arguments.join(",") + ")";
                                },
                                Mf: function(a) {
                                    return new V.K((this.hb.x + this.$b.x) / 2, (this.hb.y + this.$b.y) / 2, a)
                                },
                                contains: function(a) {
                                    var b;
                                    a instanceof V.fe ? (b = a.hb, a = a.$b) : b = a;
                                    return b.x > this.hb.x && a.x < this.$b.x && b.y > this.hb.y && a.y < this.$b.y
                                },
                                Pe: function() {
                                    return this.$b.x - this.hb.x
                                },
                                Ne: function() {
                                    return this.$b.y - this.hb.y
                                },
                                Yd: function(a, b) {
                                    b || 0 === b || (b = 20);
                                    var c = this.hb,
                                    d = this.$b,
                                    f = a.hb,
                                    g = a.$b,
                                    h = g.y >= c.y - b && f.y <= d.y + b;
                                    return g.x >= c.x - b && f.x <= d.x + b && h
                                },
                                toString: function() {
                                    return this.hb + ";" + this.$b
                                },
                                Jb: function() {
                                    return new V.fe(this.hb.Jb(), this.$b.Jb())
                                }
                            }); V.A = {}; V.A.CI = function(a) {
                                for (var b = [Infinity, Infinity, -Infinity, -Infinity], c = 0, d = a.length; c < d; c += 1) V.A.xJ(b, a[c]);
                                return b
                            }; V.A.DI = function(a, b, c) {
                                var d = Math.min.apply(null, a);
                                a = Math.max.apply(null, a);
                                var f = Math.min.apply(null, b);
                                b = Math.max.apply(null, b);
                                return V.A.GX(d, a, f, b, c)
                            }; V.A.buffer = function(a, b) {
                                a[0] -= b;
                                a[1] -= b;
                                a[2] += b;
                                a[3] += b
                            }; V.A.Jb = function(a) {
                                return a.slice()
                            }; V.A.Dd = function(a, b) {
                                return a[0] <= b[0] && b[0] <= a[2] && a[1] <= b[1] && b[1] <= a[3]
                            }; V.A.$I = function(a, b) {
                                return a[0] <= b[0] && b[2] <= a[2] && a[1] <= b[1] && b[3] <= a[3]
                            }; V.A.j5 = function() {
                                return [Infinity, Infinity, -Infinity, -Infinity]
                            }; V.A.GX = function(a, b, c, d, f) {
                                return "undefined" !== typeof f ? (f[0] = a, f[2] = b, f[1] = c, f[3] = d, f) : [a, c, b, d]
                            }; V.A.empty = function(a) {
                                a[0] = a[1] = Infinity;
                                a[2] = a[3] = -Infinity;
                                return a
                            }; V.A.Lb = function(a, b) {
                                return a[0] === b[0] && a[2] === b[2] && a[1] === b[1] && a[3] === b[3]
                            }; V.A.extend = function(a, b) {
                                b[0] < a[0] && (a[0] = b[0]);
                                b[2] > a[2] && (a[2] = b[2]);
                                b[1] < a[1] && (a[1] = b[1]);
                                b[3] > a[3] && (a[3] = b[3])
                            }; V.A.xJ = function(a, b) {
                                b[0] < a[0] && (a[0] = b[0]);
                                b[0] > a[2] && (a[2] = b[0]);
                                b[1] < a[1] && (a[1] = b[1]);
                                b[1] > a[3] && (a[3] = b[1])
                            }; V.A.C5 = function(a) {
                                return [a[0], a[1]]
                            }; V.A.D5 = function(a) {
                                return [a[2], a[1]]
                            }; V.A.Mf = function(a) {
                                return [(a[0] + a[2]) / 2, (a[1] + a[3]) / 2]
                            }; V.A.K5 = function(a, b, c, d, f) {
                                var g = b * d[0] / 2;
                                d = b * d[1] / 2;
                                b = Math.cos(c);
                                c = Math.sin(c);
                                g = [ - g, -g, g, g];
                                d = [ - d, d, -d, d];
                                var h, k, l;
                                for (h = 0; 4 > h; h += 1) k = g[h],
                                l = d[h],
                                g[h] = a[0] + k * b - l * c,
                                d[h] = a[1] + k * c + l * b;
                                return V.A.DI(g, d, f)
                            }; V.A.Ne = function(a) {
                                return a[3] - a[1]
                            }; V.A.W5 = function(a) {
                                return [a[2] - a[0], a[3] - a[1]]
                            }; V.A.a6 = function(a) {
                                return [a[0], a[3]]
                            }; V.A.b6 = function(a) {
                                return [a[2], a[3]]
                            }; V.A.Pe = function(a) {
                                return a[2] - a[0]
                            }; V.A.Yd = function(a, b) {
                                return a[0] <= b[2] && a[2] >= b[0] && a[1] <= b[3] && a[3] >= b[1]
                            }; V.A.ar = function(a) {
                                return a[2] < a[0] || a[3] < a[1]
                            }; V.A.normalize = function(a, b) {
                                return [(b[0] - a[0]) / (a[2] - a[0]), (b[1] - a[1]) / (a[3] - a[1])]
                            }; V.A.r7 = function(a, b) {
                                var c = (a[2] - a[0]) / 2 * (b - 1),
                                d = (a[3] - a[1]) / 2 * (b - 1);
                                a[0] -= c;
                                a[2] += c;
                                a[1] -= d;
                                a[3] += d
                            }; V.A.touches = function(a, b) {
                                return V.A.Yd(a, b) && (a[0] === b[2] || a[2] === b[0] || a[1] === b[3] || a[3] === b[1])
                            }; V.A.transform = function(a, b, c) {
                                a = [a[0], a[1], a[0], a[3], a[2], a[1], a[2], a[3]];
                                b(a, a, 2);
                                return V.A.DI([a[0], a[2], a[4], a[6]], [a[1], a[3], a[5], a[7]], c)
                            }; V.wd.Yb({
                                D: function() {
                                    var a = V.wd.prototype.D;
                                    return function() {
                                        a.apply(this, arguments);
                                        this.southwest = this.mb;
                                        this.northeast = this.eb
                                    }
                                } (),
                                extend: function() {
                                    var a = V.wd.prototype.extend;
                                    return function() {
                                        a.apply(this, arguments);
                                        this.mb.lng = this.mb.M;
                                        this.mb.lat = this.mb.O;
                                        this.eb.lng = this.eb.M;
                                        this.eb.lat = this.eb.O;
                                        return this
                                    }
                                } ()
                            }); V.P.Yb({
                                D: function() {
                                    var a = V.P.prototype.D;
                                    return function() {
                                        a.apply(this, arguments);
                                        this.lng = parseFloat(this.M.toFixed(6));
                                        this.lat = parseFloat(this.O.toFixed(6))
                                    }
                                } ()
                            }); V.bs = V.W.extend({
                                D: function(a, b, c, d) {
                                    this.UD = a;
                                    this.dE = b;
                                    this.kE = c;
                                    this.EE = d
                                },
                                transform: function(a, b) {
                                    return this.ZH(a.Jb(), b)
                                },
                                ZH: function(a, b) {
                                    b = b || 1;
                                    a.x = b * (this.UD * a.x + this.dE);
                                    a.y = b * (this.kE * a.y + this.EE);
                                    return a
                                },
                                V2: function(a, b) {
                                    b = b || 1;
                                    return new V.K((a.x / b - this.dE) / this.UD, (a.y / b - this.EE) / this.kE)
                                }
                            }); V.Mi = V.W.extend({
                                D: function(a) {
                                    this.Yv = a.MAX_LATITUDE || 85.0511287798;
                                    a.project && a.unproject && (this.rb = a.project, this.Bf = a.unproject)
                                }
                            }); V.Mi.wD = {
                                rb: function(a) {
                                    return new V.K(a.M, a.O)
                                },
                                Bf: function(a, b) {
                                    return new V.P(a.x, a.y, b)
                                }
                            }; V.Mi.DO = new V.Mi({
                                MAX_LATITUDE: 85.0511287798,
                                project: function(a) {
                                    var b = Math.PI / 180,
                                    c = this.Yv,
                                    c = Math.max(Math.min(c, a.O), -c);
                                    a = a.M * b;
                                    b = Math.log(Math.tan(Math.PI / 4 + c * b / 2));
                                    return new V.K(a, b, !1)
                                },
                                unproject: function(a, b) {
                                    var c = 180 / Math.PI;
                                    return new V.P(a.x * c, (2 * Math.atan(Math.exp(a.y)) - Math.PI / 2) * c, b)
                                }
                            }); V.Mi.xD = {
                                Yv: 85.0840591556,
                                fw: 6356752.3142,
                                ew: 6378137,
                                rb: function(a) {
                                    var b = Math.PI / 180,
                                    c = this.Yv,
                                    d = Math.max(Math.min(c, a.O), -c),
                                    f = this.ew,
                                    c = this.fw;
                                    a = a.M * b * f;
                                    b *= d;
                                    f = c / f;
                                    f = Math.sqrt(1 - f * f);
                                    d = f * Math.sin(b);
                                    d = Math.pow((1 - d) / (1 + d), 0.5 * f);
                                    b = -c * Math.log(Math.tan(0.5 * (0.5 * Math.PI - b)) / d);
                                    return new V.K(a, b)
                                },
                                Bf: function(a, b) {
                                    for (var c = 180 / Math.PI,
                                    d = this.ew,
                                    f = this.fw,
                                    g = a.x * c / d,
                                    d = f / d,
                                    d = Math.sqrt(1 - d * d), f = Math.exp( - a.y / f), h = Math.PI / 2 - 2 * Math.atan(f), k = 15, l = 0.1; 1E-7 < Math.abs(l) && (k -= 1, 0 < k);) l = d * Math.sin(h),
                                    l = Math.PI / 2 - 2 * Math.atan(f * Math.pow((1 - l) / (1 + l), 0.5 * d)) - h,
                                    h += l;
                                    return new V.P(g, h * c, b)
                                }
                            }; V.xg = {}; V.xg.Qr = {
                                kB: function(a, b) {
                                    var c = this.te.rb(a),
                                    d = this.scale(b);
                                    return this.Gr.ZH(c, d)
                                },
                                YB: function(a, b, c) {
                                    b = this.scale(b);
                                    a = this.Gr.V2(a, b);
                                    return this.te.Bf(a, c)
                                },
                                rb: function(a) {
                                    return this.te.rb(a)
                                },
                                scale: function(a) {
                                    return 256 << a
                                },
                                xA: function(a) {
                                    return 12756274 * Math.PI / (256 * Math.pow(2, a))
                                }
                            }; V.xg.ZN = V.extend({},
                            V.xg.Qr, {
                                code: "EPSG:3857",
                                te: V.Mi.DO,
                                Gr: new V.bs(0.5 / Math.PI, 0.5, -0.5 / Math.PI, 0.5),
                                rb: function(a) {
                                    return this.te.rb(a).Bc(6378137)
                                }
                            }); V.xg.YN = V.extend({},
                            V.xg.Qr, {
                                code: "EPSG:3395",
                                te: V.Mi.xD,
                                Gr: function() {
                                    var a = V.Mi.xD;
                                    return new V.bs(0.5 / (Math.PI * a.ew), 0.5, -0.5 / (Math.PI * a.fw), 0.5)
                                } ()
                            }); V.xg.$N = V.extend({},
                            V.xg.Qr, {
                                code: "EPSG:4326",
                                te: V.Mi.wD,
                                Gr: new V.bs(1 / 360, 0.5, -1 / 360, 0.25)
                            }); V.xg.S3 = V.extend({},
                            V.xg.Qr, {
                                te: V.Mi.wD,
                                Gr: new V.bs(1, 0, 1, 0)
                            }); V.nL = {
                                rb: function(a, b) {
                                    a = V.g.ma(a);
                                    return this.wq.kB(a, b || this.get("zoom"))
                                },
                                Bf: function(a, b, c) {
                                    return this.wq.YB(a, b || this.get("zoom"), c)
                                },
                                x6: function(a, b) {
                                    return this.rb(a, b)
                                },
                                B5: function(a, b) {
                                    return this.Bf(a, b)
                                },
                                ek: function(a, b) {
                                    var c = this.get("size").Lo().Ob(2);
                                    if (a.Lb(c)) return this.get("center");
                                    c = this.fk(a, b);
                                    return this.uf(c)
                                },
                                jB: function(a) {
                                    a = this.Db(a);
                                    return this.sg(a)
                                },
                                zX: function(a) {
                                    return this.uf(a.Ob(this.get("resolution", 20)))
                                },
                                Db: function(a) {
                                    a = V.g.ma(a);
                                    return this.rb(a, 20)
                                },
                                uf: function(a) {
                                    return this.Bf(a, 20)
                                },
                                w6: function(a, b, c) {
                                    a = V.g.ma(a);
                                    return this.Db(a).Bc(c || this.get("resolution", 20))
                                },
                                G5: function(a) {
                                    return a ? this.rb(this.get("center"), a) : this.get("centerPixel")
                                }
                            };
                            var yc = V.W.extend({
                                ka: [V.ea, V.yd],
                                G: {
                                    center: new V.P(116.397128, 39.916527),
                                    zoom: 13,
                                    rotation: 0,
                                    crs: "EPSG3857"
                                },
                                D: function(a) {
                                    this.CLASS_NAME = "AMap.View2D";
                                    V.a.Za("AMap.View2D", a);
                                    a = a || {};
                                    a.center && (a.center = V.g.ma(a.center));
                                    this.G = a
                                }
                            });
                            var Gc = V.W.extend({
                                ka: [V.ea, V.yd, V.nL],
                                G: {
                                    features: "all",
                                    dragEnable: !0,
                                    showIndoorMap: V.j.U ? !1 : !0,
                                    lang: "zh_cn",
                                    keyboardEnable: !0,
                                    doubleClickZoom: !0,
                                    "3rdpartyDataEnable": !1,
                                    scrollWheel: !0,
                                    zoomEnable: !0,
                                    jogEnable: !0,
                                    continuousZoomEnable: !0,
                                    resizeEnable: !1,
                                    animateEnable: !0,
                                    rotateEnable: !1,
                                    labelzIndex: 99,
                                    touchZoom: !0,
                                    zooms: [3, V.j.U ? V.j.Rc ? 19 : 20 : 18],
                                    defaultCursor: "url(" + V.q.pb + "/theme/v1.3/openhand.cur),default",
                                    limitBounds: null,
                                    logoUrl: V.q.pb + "/theme/v1.3/autonavi.png",
                                    logoUrlRetina: V.q.pb + "/theme/v1.3/mapinfo_05.png",
                                    copyright: "\x3c!--v1.3.28--\x3e &copy " + (new Date).getFullYear() + " AutoNavi ",
                                    isHotspot: !V.j.U,
                                    baseRender: V.j.xW,
                                    overlayRender: V.j.f0,
                                    mapStyle: "normal",
                                    showBuildingBlock: !V.j.U,
                                    crs: "EPSG3857",
                                    rotation: 0,
                                    pitch: 0,
                                    yaw: 0,
                                    scale: 1,
                                    center: new V.P(116.397128, 39.916527),
                                    zoom: 13
                                },
                                poiOnAMAP: function(a) {
                                    V.a.add(this.CLASS_NAME, "poiOnAMAP");
                                    var b = {},
                                    c = V.g.ma(a.location);
                                    b.id = a.id;
                                    c && (b.y = c.O, b.x = c.M);
                                    b.name = a.name;
                                    b.address = a.address;
                                    V.ze.Qk(V.ze.cK(b))
                                },
                                detailOnAMAP: function(a) {
                                    V.a.add(this.CLASS_NAME, "detailOnAMAP");
                                    var b = {},
                                    c = V.g.ma(a.location);
                                    b.id = a.id;
                                    c && (b.y = c.O, b.x = c.M);
                                    b.name = a.name;
                                    V.ze.Qk(V.ze.aK(b))
                                },
                                setLabelzIndex: function(a) {
                                    return this.set("labelzIndex", a)
                                },
                                getLabelzIndex: function() {
                                    return this.get("labelzIndex", null, !0)
                                },
                                setMapStyle: function(a) {
                                    V.a.add(this.CLASS_NAME, "setMapStyle", a); - 1 === a.indexOf("amap://styles/") ? (this.set("styleUrl", "", !0), this.set("mapStyle", a)) : this.set("styleUrl", a);
                                    this.mL()
                                },
                                getMapStyle: function() {
                                    V.a.add(this.CLASS_NAME, "getMapStyle");
                                    return this.get("styleUrl") || this.get("mapStyle", null, !0)
                                },
                                getFeatures: function() {
                                    V.a.add(this.CLASS_NAME, "getFeatures");
                                    return this.get("features", null, !0)
                                },
                                setFeatures: function(a) {
                                    V.a.add(this.CLASS_NAME, "setFeatures");
                                    this.set("features", a)
                                },
                                setLang: function(a) {
                                    V.a.add(this.CLASS_NAME, "setLang", a);
                                    "en" !== a && "zh_cn" !== a && "zh_en" !== a || a === this.getLang() || (this.set("lang", a), this.ti && this.ti.GM(this))
                                },
                                getLang: function() {
                                    V.a.add(this.CLASS_NAME, "getLang");
                                    return this.get("lang", null, !0)
                                },
                                setCity: function(a, b) {
                                    V.a.add(this.CLASS_NAME, "setCity");
                                    var c = this; (new V.ra.Ca(V.q.ec + "/v3/config/district?subdistrict=0&extensions=all&key=" + V.q.key + "&s=rsv3&output=json&keywords=" + a, {
                                        callback: "callback"
                                    })).e("complete",
                                    function(a) {
                                        if ((a = a.districts) && a.length) try {
                                            var f = a[0].center.split(","),
                                            g;
                                            switch (a[0].level) {
                                            case "city":
                                                g = 10;
                                                break;
                                            case "province":
                                                g = 7;
                                                break;
                                            case "district":
                                                g = 12;
                                                break;
                                            case "country":
                                                g = 4;
                                                break;
                                            default:
                                                g = 12
                                            } - 1 !== a[0].name.indexOf("\u5e02") && (g = 10);
                                            c.setZoomAndCenter(g, new V.P(f[0], f[1]), !0);
                                            b && b.call(c, f, g)
                                        } catch(h) {}
                                    },
                                    this)
                                },
                                getCity: function(a, b) {
                                    V.a.add(this.CLASS_NAME, "getCity");
                                    var c = V.q.ec + "/v3/geocode/regeo?&extensions=&&key=" + V.q.key + "&s=rsv3&output=json&location=" + (b || this.get("center", null, !0)); (new V.ra.Ca(c, {
                                        callback: "callback"
                                    })).e("complete",
                                    function(b) {
                                        b = b.regeocode.addressComponent;
                                        a({
                                            province: b.province,
                                            city: b.city instanceof Array ? "": b.city,
                                            citycode: b.citycode instanceof Array ? "": b.citycode,
                                            district: b.district instanceof Array ? "": b.district
                                        })
                                    },
                                    this)
                                },
                                D: function(a, b) {
                                    this.id = V.g.Bb(this);
                                    this.CLASS_NAME = "AMap.Map";
                                    V.a.Za("AMap.Map", b);
                                    b = b || {};
                                    b.mapStyle && -1 !== b.mapStyle.indexOf("amap://styles/") && (b.styleUrl = b.mapStyle, delete b.mapStyle);
                                    b.bgColor && V.extend(V.q.ge, b.bgColor);
                                    V.q.Mt = b.buildingColor || null;
                                    b.mobile && (V.j.U = !0);
                                    b.noPoi && (V.q.N_ = !0);
                                    b.editEnable && (b.nolimg = 1, b.showIndoorMap = !1);
                                    this.ho = b.disableSocket ? !1 : V.j.ho;
                                    b.server && (V.q.ec = b.server);
                                    b.vdataUrl && (V.q.Jr = b.vdataUrl);
                                    if ("string" === typeof a) {
                                        if (a = this.C = document.getElementById(a), !a) return
                                    } else "DIV" === a.tagName && (this.C = a);
                                    this.C.zw && this.C.zw.destroy();
                                    V.Ld.Ce.start({
                                        id: this.id,
                                        C: this.C
                                    });
                                    this.C.zw = this;
                                    var c = this.G.zooms[1],
                                    d = this.G.zooms[0];
                                    b.zooms ? (b.zooms[0] = Math.max(d, b.zooms[0]), !0 === b.expandZoomRange && (c = V.j.U ? V.j.Rc ? 19 : 20 : 20), b.zooms[1] = Math.min(c, b.zooms[1])) : b.zooms = [d, c];
                                    b.forceZooms && (b.zooms = b.forceZooms);
                                    b = this.WW(b);
                                    c = this.getSize();
                                    b.center && (b.center = V.g.ma(b.center));
                                    this.wq = this.HX(b.crs || this.G.crs, b.center || this.G.center);
                                    this.rW(c, b);
                                    d = b.lang;
                                    "en" !== d && "zh_cn" !== d && "zh_en" !== d && (b.lang = "zh_cn");
                                    V.j.nd && (b.rotateEnable = !1);
                                    V.g.fb(this, b);
                                    this.xe(this.G);
                                    b.forceVector && (V.j.Zd ? this.set("baseRender", "vw") : this.set("baseRender", "v"));
                                    b.disableVector && this.set("baseRender", "d");
                                    "dom" === b.renderer && (this.set("baseRender", "d"), this.set("overlayRender", "d"));
                                    V.j.Ke || (b.baseRender = "d");
                                    b.baseRender && this.set("baseRender", b.baseRender);
                                    c = Math.max(c.width, c.height);
                                    V.j.ha && (c *= Math.min(2, window.devicePixelRatio || 1));
                                    "vw" === this.get("baseRender") && c > V.j.w_ && this.set("baseRender", "dv");
                                    this.wz();
                                    V.j.$q && this.YV();
                                    c = this.get("zoom", null, !0);
                                    d = this.get("zooms");
                                    c > d[1] ? c = d[1] : c < d[0] && (c = d[0]);
                                    this.set("zoom", c);
                                    this.G.zoom = c;
                                    this.IX(this.G);
                                    var f = this;
                                    this.xe({
                                        overlays: [],
                                        infos: {},
                                        controls: {}
                                    });
                                    c = [];
                                    b.forceVector && (c.push("vectorlayer"), c.push("overlay"));
                                    b.editEnable && (c.push("edit"), c.push("labelDir"));
                                    V.Ra.tf(c,
                                    function() {
                                        if (!f.get("destroy")) {
                                            var b = new V.$c(a, f);
                                            b.Uc("size zoom center centerCoords rotation yaw pitch resolution".split(" "), f.view, !0);
                                            b.e("complete",
                                            function() {
                                                this.w("complete")
                                            },
                                            f, !0);
                                            b.wq = f.wq;
                                            f.Uc(["zoomSlow", "panTo", "targetLevel", "render"], b);
                                            b.Uc(["size", "bounds"], f);
                                            f.loaded = !0;
                                            f.w("coreMapCreated")
                                        }
                                    })
                                },
                                NY: function(a, b, c) {
                                    var d = new V.P(a[4], a[5]);
                                    if ((a = new V.wd(a[0], a[1], a[2], a[3])) && b && d) {
                                        for (var f = c[1]; f > c[0]; f -= 1) {
                                            var g = this.rb(a.mb, f),
                                            h = this.rb(a.eb, f);
                                            if (Math.abs(h.x - g.x) < b.width && Math.abs(g.y - h.y) < b.height) break
                                        }
                                        return [d, Math.min(f + 1, c[1])]
                                    }
                                    return null
                                },
                                rW: function(a, b) {
                                    if (! (b && b.center && b.zoom)) {
                                        var c = this.NY(V.q.Bd, a, b.zooms);
                                        b.center = b.center || c && c[0];
                                        "number" !== typeof b.zoom && (b.zoom = c && c[1])
                                    }
                                },
                                HX: function(a, b) {
                                    if (b instanceof V.P) {
                                        if ("string" === typeof a) {
                                            switch (a) {
                                            case "EPSG3395":
                                                return V.xg.YN;
                                            case "EPSG4326":
                                                return V.xg.$N
                                            }
                                            return V.xg.ZN
                                        }
                                        if (a.pointToLngLat && a.lngLatToPoint) return {
                                            YB: a.pointToLngLat,
                                            kB: a.lngLatToPoint,
                                            xA: a.getResolution
                                        };
                                        throw "illegal projection";
                                    }
                                    var c = this.get("zoom", null, !0);
                                    return {
                                        xA: function(a) {
                                            return Math.pow(2, c - a)
                                        },
                                        kB: function() {},
                                        YB: function() {}
                                    }
                                },
                                IX: function(a) {
                                    this.view = new V.PO(this, a)
                                },
                                featuresChanged: function() {
                                    this.wz()
                                },
                                mL: function() {
                                    this.wz();
                                    this.wC()
                                },
                                wC: function() {
                                    if (this.zh) {
                                        var a = !0,
                                        b = this.getMapStyle();
                                        if (!1 === this.get("showIndoorMap") || "normal" !== b && "amap://styles/normal" !== b) a = !1;
                                        var b = this.getLayers(),
                                        c;
                                        for (c in b)"AMap.IndoorMap" === b[c].CLASS_NAME && b[c] !== this.zh && (a = !1);
                                        this.zh.getMap() !== this && this.zh.setMap(this);
                                        this.zh.set("visible", a)
                                    }
                                },
                                wz: function() {
                                    var a = this.get("baseRender");
                                    if (a && !("dv" < a)) {
                                        var b = this.get("features", null, !0),
                                        c = this.getMapStyle(),
                                        d = this.get("editEnable");
                                        b && c && (V.j.Ke && (d || "all" !== b || "normal" !== c && "amap://styles/normal" !== c) ? (this.set("baseRender", "v"), this.OB = a) : this.OB && (this.set("baseRender", this.OB), this.OB = null))
                                    }
                                },
                                YV: function() {
                                    var a = this;
                                    AMap.plugin(["AMap.IndoorMap"],
                                    function() { ! a.zh && a.C && (a.indoorMap = a.zh = new AMap.IndoorMap({
                                            innerLayer: !0,
                                            map: a
                                        }), a.wC(), V.g.Ve(function() {
                                            a.w("indoor_create", {
                                                target: a
                                            });
                                            a.set("display")
                                        }))
                                    })
                                },
                                layersChanged: function() {
                                    var a = this.getLayers();
                                    this.Nu = !1;
                                    for (var b = 0; b < a.length; b += 1) a[b].getMap() !== this && a[b].setMap(this),
                                    a[b].Nu && (this.Nu = !0);
                                    this.wC()
                                },
                                getMapNumber: function() {
                                    if (this.map) return this.map.gv()
                                },
                                getAdcode: function() {
                                    V.a.add(this.CLASS_NAME, "getAdcode");
                                    return V.q.VV
                                },
                                WW: function(a) {
                                    a || (a = {});
                                    if (a.hasOwnProperty("defaultLayer")) {
                                        a.layers = [a.defaultLayer];
                                        var b = a.defaultLayer;
                                        b.hz = !0;
                                        this.set("defaultLayer", b, !0)
                                    }
                                    a.layers && 0 !== a.layers.length || (b = new X, a.layers = [b], b.hz = !0, this.set("defaultLayer", b, !0));
                                    if (b = a.view) b.G.rotation && (a.rotation = b.G.rotation),
                                    b.G.center && (a.center = b.G.center),
                                    b.G.zoom && (a.zoom = Math.max(a.zooms[0], Math.min(a.zooms[1], b.G.zoom))),
                                    b.G.crs && (a.crs = b.G.crs);
                                    a.level && !a.zoom && (a.zoom = a.level);
                                    return a
                                },
                                setLimitBounds: function(a) {
                                    V.a.add(this.CLASS_NAME, "setLimitBounds");
                                    a instanceof V.wd || (a = null);
                                    this.set("limitBounds", a)
                                },
                                clearLimitBounds: function() {
                                    V.a.add(this.CLASS_NAME, "clearLimitBounds");
                                    this.set("limitBounds", null)
                                },
                                getLimitBounds: function() {
                                    V.a.add(this.CLASS_NAME, "getLimitBounds");
                                    return this.get("limitBounds", null, !0)
                                },
                                nI: function(a) {
                                    var b = this.get("layers");
                                    0 <= V.g.indexOf(b, a) || (b.push(a), this.set("layers", b))
                                },
                                qI: function(a) {
                                    var b = this.get("overlays");
                                    0 <= V.g.indexOf(b, a) || (a instanceof zc ? (this.get("overlays").push(a), this.Wt instanceof zc && this.Wt.close(), this.Wt = a, this.set("contextmenu", a, !0)) : (a instanceof Ac && (this.vi instanceof Ac && this.iv(this.vi), this.vi = a), this.get("overlays").push(a)), this.w("overlays"))
                                },
                                yo: function(a) {
                                    var b = this.get("layers");
                                    a = V.g.indexOf(b, a); - 1 !== a && this.set("layers", V.g.jj(b, a))
                                },
                                iv: function(a) {
                                    var b = this.get("overlays");
                                    this.set("overlays", V.g.jj(b, V.g.indexOf(b, a)))
                                },
                                setZoom: function(a, b) {
                                    V.a.add(this.CLASS_NAME, "setZoom");
                                    a = Math.round(a);
                                    var c = this.get("zooms");
                                    a > c[1] && (a = c[1]);
                                    a < c[0] && (a = c[0]);
                                    this.get("zoomEnable") && (b || !this.loaded ? (this.set("zoom", a), this.w("zoomstart"), this.w("zoomchange"), this.w("zoomend")) : this.set("zoomSlow", a))
                                },
                                getZoom: function() {
                                    V.a.add(this.CLASS_NAME, "getZoom");
                                    return Math.round(this.get("targetLevel") || this.get("zoom", null, !0))
                                },
                                getCenter: function() {
                                    V.a.add(this.CLASS_NAME, "getCenter");
                                    return this.get("center", null, !0)
                                },
                                setCenter: function(a, b) {
                                    V.a.add(this.CLASS_NAME, "setCenter");
                                    a = V.g.ma(a);
                                    b || !this.loaded ? (this.w("movestart"), this.set("center", a), this.w("mapmove"), this.map ? this.map.w("moveend") : this.w("moveend")) : this.panTo(a)
                                },
                                getCoordsBound: function() {
                                    return this.view.Un()
                                },
                                setRotation: function(a) {
                                    V.a.add(this.CLASS_NAME, "setRotation"); ! V.j.nd && this.get("rotateEnable") && this.set("rotation", a)
                                },
                                getRotation: function() {
                                    V.a.add(this.CLASS_NAME, "getRotation");
                                    return this.get("rotateEnable") && this.get("rotation") || 0
                                },
                                getBounds: function() {
                                    V.a.add(this.CLASS_NAME, "getBounds");
                                    var a = this.getCoordsBound(),
                                    b = a.$b.x,
                                    c = a.hb.y,
                                    a = new V.K(a.hb.x, a.$b.y),
                                    b = new V.K(b, c);
                                    return new V.wd(this.uf(a), this.uf(b))
                                },
                                getStatus: function() {
                                    V.a.add(this.CLASS_NAME, "getStatus");
                                    for (var a = "isHotspot dragEnable zoomEnable keyboardEnable jogEnable doubleClickZoom scrollWheel resizeEnable touchZoom rotateEnable animateEnable".split(" "), b = {},
                                    c = 0; c < a.length; c += 1) b[a[c]] = this.get(a[c], null, !0);
                                    return b
                                },
                                setStatus: function(a) {
                                    V.a.add(this.CLASS_NAME, "setStatus");
                                    for (var b in a) a.hasOwnProperty(b) && -1 !== "isHotspot,dragEnable,keyboardEnable,doubleClickZoom,scrollWheel,zoomEnable,jogEnable,continuousZoomEnable,resizeEnable,animateEnable,rotateEnable,touchZoom".indexOf(b) && this.set(b, a[b])
                                },
                                getResolution: function(a) {
                                    V.a.add(this.CLASS_NAME, "getResolution");
                                    a = (a = V.g.ma(a)) ? a.O: this.get("center", null, !0).O;
                                    return this.get("resolution") * Math.cos(a * Math.PI / 180)
                                },
                                getScale: function(a) {
                                    V.a.add(this.CLASS_NAME, "getScale");
                                    return this.getResolution() * (a || 96) / 0.0254
                                },
                                getDefaultCursor: function() {
                                    V.a.add(this.CLASS_NAME, "getDefaultCursor");
                                    return this.get("defaultCursor", null, !0)
                                },
                                setDefaultCursor: function(a) {
                                    V.a.add(this.CLASS_NAME, "setDefaultCursor");
                                    return this.set("defaultCursor", a, !0)
                                },
                                zoomIn: function(a) {
                                    V.a.add(this.CLASS_NAME, "zoomIn");
                                    this.setZoom(this.getZoom() + 1, a)
                                },
                                zoomOut: function(a) {
                                    V.a.add(this.CLASS_NAME, "zoomOut");
                                    this.setZoom(this.getZoom() - 1, a)
                                },
                                setZoomAndCenter: function(a, b, c) {
                                    V.a.add(this.CLASS_NAME, "setZoomAndCenter");
                                    b = V.g.ma(b);
                                    a = Math.round(a);
                                    var d = this.get("zooms");
                                    a > d[1] && (a = d[1]);
                                    a < d[0] && (a = d[0]);
                                    this.loaded ? this.set("zoomAndCenter", [a, b, c]) : (this.setZoom(a, !0), this.setCenter(b, !0))
                                },
                                setBounds: function(a, b, c, d, f, g) {
                                    V.a.add(this.CLASS_NAME, "setBounds");
                                    b = b ? Number(b) : 0;
                                    var h = this.UL || this.get("zooms")[1];
                                    g = this.getSize().Lo();
                                    var k = 0,
                                    l = 0;
                                    if (f) {
                                        var l = f[0],
                                        m = f[1],
                                        k = f[2];
                                        f = f[3];
                                        g.x -= k + f;
                                        g.y -= l + m;
                                        k = (k - f) / 2;
                                        l = (l - m) / 2
                                    }
                                    f = this.get("zooms");
                                    for (c && (g = g.Xa(c)); h > f[0] && !(c = this.rb(a.mb, h), m = this.rb(a.eb, h), a.mb.M > a.eb.M && (m.x += this.rb(new V.P(180, 0), h).x), Math.abs(m.x - c.x) < g.x && Math.abs(c.y - m.y) < g.y); h -= 1);
                                    g = V.j.U ? 17 : 18;
                                    d = d || !this.getBounds().contains(a.Mf()) || V.j.U && 1 < Math.abs(h + b - this.get("zoom", null, !0));
                                    b = Math.min(f[1], g, Math.max(f[0], h + b));
                                    h = this.Bf(this.rb(a.Mf(), b).Xa(new V.K(k, l)), b);
                                    this.setZoomAndCenter(b, h, d);
                                    return a
                                },
                                clearMap: function() {
                                    V.a.add(this.CLASS_NAME, "clearMap");
                                    for (var a = this.get("overlays"), b = 0; b < a.length; b += 1) a[b].set("map", null, !0);
                                    this.set("overlays", []);
                                    if (this.map && this.map.Ba) for (var a = this.map.Ba,
                                    c = a.length,
                                    b = 0; b < c; b += 1) a[b].Qa instanceof Bc && a[b].Qa.setMap(null)
                                },
                                destroy: function() {
                                    V.a.add(this.CLASS_NAME, "destroy");
                                    this.zh && (this.zh.setMap(), this.indoorMap = this.zh = null);
                                    this.set("overlays", []);
                                    this.set("layers", []);
                                    var a = this.get("controls");
                                    a.remove = [];
                                    for (var b in a.zc) a.zc.hasOwnProperty(b) && a.remove.push(a.zc[b]);
                                    a.zc = [];
                                    a.add = [];
                                    this.set("controls", a);
                                    this.set("destroy", !0);
                                    this.Va = !1;
                                    this.Cm();
                                    this.C = null
                                },
                                addControl: function(a) {
                                    V.a.add(this.CLASS_NAME, "addControl");
                                    var b = V.g.Bb(a),
                                    c = this.get("controls") || {};
                                    c.zc = c.zc || {};
                                    c.zc[b] || (c.zc[b] = a);
                                    c.add = c.add || [];
                                    c.add.push(a);
                                    this.set("controls", c)
                                },
                                removeControl: function(a) {
                                    V.a.add(this.CLASS_NAME, "removeControl");
                                    var b = V.g.Bb(a),
                                    c = this.get("controls") || {};
                                    c.zc = c.zc || {};
                                    c.zc[b] && delete c.zc[b];
                                    c.remove = c.remove || [];
                                    c.remove.push(a);
                                    this.set("controls", c)
                                },
                                clearControl: function() {
                                    V.a.add(this.CLASS_NAME, "clearControl");
                                    var a = this.get("controls") || {};
                                    a.remove = a.remove || [];
                                    a.zc = a.zc || {};
                                    for (var b in a.zc) a.zc.hasOwnProperty(b) && (a.remove.push(a.zc[b]), delete a.zc[b]);
                                    this.set("controls", a)
                                },
                                plugin: function(a, b) {
                                    "string" === typeof a && (a = [a]);
                                    for (var c = 0; c < a.length; c += 1) {
                                        var d = a[c].split(".");
                                        "function" === typeof window[d[0]][d[1]] && (a.splice(c, 1), c -= 1)
                                    }
                                    if (0 === a.length) return b(),
                                    this;
                                    for (var f = a.length,
                                    c = 0; c < a.length; c += 1) V.Ra.load(a[c],
                                    function() {
                                        f -= 1;
                                        0 === f && b()
                                    });
                                    return this
                                },
                                clearInfoWindow: function() {
                                    V.a.add(this.CLASS_NAME, "clearInfoWindow");
                                    var a = this.get("overlays");
                                    a && 0 !== a.length && this.vi && this.vi.close()
                                },
                                remove: function(a) {
                                    V.a.add(this.CLASS_NAME, "remove");
                                    a instanceof Array || (a = [a]);
                                    for (var b = 0; b < a.length; b += 1) {
                                        var c = a[b];
                                        c.getMap && c.getMap() === this && (c.close ? c.close() : c.setMap && c.setMap(null))
                                    }
                                },
                                add: function(a) {
                                    V.a.add(this.CLASS_NAME, "add");
                                    a instanceof Array || (a = [a]);
                                    for (var b = 0; b < a.length; b += 1) {
                                        var c = a[b];
                                        c.getMap && c.getMap() !== this && !c.open && c.setMap && c.setMap(this)
                                    }
                                },
                                getAllOverlays: function(a, b) {
                                    V.a.add(this.CLASS_NAME, "getAllOverlays");
                                    var c = this.get("overlays"),
                                    d;
                                    if (a) switch (a) {
                                    case "marker":
                                        d = Z;
                                        break;
                                    case "circle":
                                        d = Cc;
                                        break;
                                    case "polyline":
                                        d = Dc;
                                        break;
                                    case "polygon":
                                        d = Ec
                                    }
                                    if (d) {
                                        for (var f = [], g = 0; g < c.length; g += 1) c[g] instanceof d && (b || !c[g].ga && !c[g].isOfficial) && f.push(c[g]);
                                        return f
                                    }
                                    if (!b) {
                                        f = [];
                                        for (g = 0; g < c.length; g += 1) c[g].ga || c[g].isOfficial || f.push(c[g]);
                                        c = f
                                    }
                                    d = this.get("layers");
                                    f = [];
                                    if (d) for (var g = 0,
                                    h = d.length; g < h; g += 1) d[g] instanceof Bc && f.push(d[g]);
                                    return c.concat(f)
                                },
                                triggerResize: function() {
                                    this.map && this.map.Ay()
                                },
                                refreshSize: function() {
                                    this.ps = this.PY()
                                },
                                PY: function() {
                                    return V.f.MJ(this.C)
                                },
                                getSize: function() {
                                    V.a.add(this.CLASS_NAME, "getSize"); (!this.ps || 10 > this.ps.width * this.ps.height) && this.refreshSize();
                                    return this.ps
                                },
                                getContainer: function() {
                                    V.a.add(this.CLASS_NAME, "getContainer");
                                    return this.C
                                },
                                panTo: function(a) {
                                    V.a.add(this.CLASS_NAME, "panTo");
                                    a = V.g.ma(a);
                                    this.loaded ? this.set("panTo", a) : this.setCenter(a)
                                },
                                panBy: function(a, b, c) {
                                    V.a.add(this.CLASS_NAME, "panBy");
                                    var d = this.get("rotation") * Math.PI / 180,
                                    f = a * Math.cos(d) + Math.sin(d) * b;
                                    a = -Math.sin(d) * a + Math.cos(d) * b;
                                    f = (this.loaded && this.map && this.map.Wb ? this.rb(this.map.Wb.rN) : this.rb(this.get("center"))).add(new V.K( - f, -a));
                                    f = this.Bf(f); ! this.loaded || c ? this.setCenter(f, c) : this.set("panTo", f)
                                },
                                setFitView: function(a, b, c, d) {
                                    V.a.add(this.CLASS_NAME, "setFitView");
                                    var f;
                                    if (a) if (a instanceof Fc) a = [a];
                                    else {
                                        if (! (a instanceof Array)) return null
                                    } else a = this.getAllOverlays();
                                    for (var g = 0; g < a.length; g += 1) {
                                        var h = a[g]; ! h.get("visible") || h instanceof Ac || h instanceof zc || (h = h.getBounds()) && (f = f ? h.T2(f) : h)
                                    }
                                    f && this.setBounds(f, null, new V.K(50, 50), b, c, d);
                                    return f
                                },
                                setLayers: function(a) {
                                    V.a.add(this.CLASS_NAME, "setLayers");
                                    for (var b = 0; b < a.length; b += 1) a[b].set("map", this, !0);
                                    this.set("layers", a)
                                },
                                getLayers: function() {
                                    V.a.add(this.CLASS_NAME, "getLayers");
                                    return this.get("layers", null, !0)
                                },
                                getDefaultLayer: function() {
                                    V.a.add(this.CLASS_NAME, "getDefaultLayer");
                                    return this.get("defaultLayer", null, !0)
                                },
                                setDefaultLayer: function(a) {
                                    V.a.add(this.CLASS_NAME, "setDefaultLayer");
                                    a.hz = !0;
                                    var b = this.get("defaultLayer"),
                                    c = this.get("layers");
                                    if (b) {
                                        if (a === b) return;
                                        b.hz = !1;
                                        c = V.g.jj(c, V.g.indexOf(c, b))
                                    }
                                    this.set("defaultLayer", a, !0);
                                    c.push(a);
                                    this.setLayers(c)
                                },
                                pixelToLngLat: function(a, b) {
                                    V.a.add(this.CLASS_NAME, "pixelToLngLat");
                                    return this.Bf(a, b)
                                },
                                lnglatToPixel: function(a, b) {
                                    V.a.add(this.CLASS_NAME, "lnglatToPixel");
                                    return this.rb(a, b)
                                },
                                drawPolyline: function(a) {
                                    V.a.add(this.CLASS_NAME, "drawPolyline");
                                    this.set("draw", "polyline");
                                    this.set("drawStyle", a || {
                                        strokeColor: "#006600",
                                        ya: 0.9
                                    })
                                },
                                drawPolygon: function(a) {
                                    V.a.add(this.CLASS_NAME, "drawPolygon");
                                    this.set("draw", "polygon");
                                    this.set("drawStyle", a || {
                                        strokeColor: "#006600",
                                        ya: 0.9,
                                        fillColor: "#FFAA00",
                                        kc: 0.9
                                    })
                                },
                                drawCircle: function(a) {
                                    V.a.add(this.CLASS_NAME, "drawCircle");
                                    this.set("draw", "circle");
                                    this.set("drawStyle", a || {
                                        strokeColor: "#006600",
                                        ya: 0.9,
                                        fillColor: "#006600",
                                        kc: 0.9
                                    })
                                },
                                CA: function() {
                                    return this.view.CA()
                                },
                                endDraw: function() {
                                    this.set("draw", null)
                                },
                                isGoogleTileVisible: function() {
                                    return this.map && this.map.Hx()
                                },
                                sg: function(a, b) {
                                    return this.view.sg(a, b)
                                },
                                fk: function(a, b) {
                                    return this.view.fk(a, b)
                                }
                            }); Gc.Pn({
                                jB: "lnglatTocontainer",
                                lnglatTocontainer: "lngLatToContainer",
                                ek: "containTolnglat",
                                containTolnglat: "containerToLngLat",
                                Db: "lngLatToP20",
                                uf: "p20ToLngLat",
                                sg: "p20ToContainer",
                                fk: "containerToP20",
                                rb: "project",
                                Bf: "unproject"
                            }); Gc.Yb({
                                isHotspotChanged: function() {
                                    if ("undefined" !== typeof this.Qq && (this.nX(), this.get("isHotspot"))) {
                                        var a = this.get("layers", null, !0);
                                        a && a.length && !this.Qq && this.Nu && this.d0()
                                    }
                                },
                                d0: function() {
                                    if (this.ti) this.BK();
                                    else {
                                        var a = this;
                                        this.plugin("AMap.HotSpot",
                                        function() {
                                            if (!a.Qq) {
                                                if (!a.ti) {
                                                    var b = new V.Ae;
                                                    new Ac;
                                                    a.ti = b
                                                }
                                                a.BK()
                                            }
                                        })
                                    }
                                },
                                nX: function() {
                                    this.ti && this.BZ()
                                },
                                QL: function(a) {
                                    a.type = "hotspotover";
                                    a.isIndoorPOI = !1;
                                    this.w("hotspotover", a)
                                },
                                OL: function(a) {
                                    a.type = "hotspotclick";
                                    a.isIndoorPOI = !1;
                                    this.w("hotspotclick", a)
                                },
                                PL: function(a) {
                                    a.type = "hotspotout";
                                    a.isIndoorPOI = !1;
                                    this.w("hotspotout", a)
                                },
                                BK: function() {
                                    var a = this.ti;
                                    this.ti.setMap(this);
                                    a.e("mouseover", this.QL, this);
                                    a.e("click", this.OL, this);
                                    a.e("mouseout", this.PL, this)
                                },
                                BZ: function() {
                                    var a = this.ti;
                                    a.F("mouseover", this.QL, this);
                                    a.F("click", this.OL, this);
                                    a.F("mouseout", this.PL, this);
                                    this.ti.setMap(null);
                                    this.ti = null
                                }
                            });
                            var $ = {
                                V: function(a, b, c, d) {
                                    V.a.add("AMap.event", "addDomListener");
                                    V.B.e(a, b, c, d);
                                    return new V.Tr(0, a, b, c, d)
                                },
                                ZV: function() {},
                                addListener: function(a, b, c, d) {
                                    V.a.add("AMap.event", "addListener");
                                    a.rf || (a.rf = V.ea.rf);
                                    V.ea.e.call(a, b, c, d);
                                    return new V.Tr(1, a, b, c, d)
                                },
                                oI: function(a, b, c, d) {
                                    V.a.add("AMap.event", "addListenerOnce");
                                    a.rf || (a.rf = V.ea.rf);
                                    V.ea.e.call(a, b, c, d, !0);
                                    return new V.Tr(1, a, b, c, d)
                                },
                                TI: function(a) {
                                    V.ea.gj.call(a)
                                },
                                Qt: function(a, b) {
                                    V.ea.gj.call(a, b)
                                },
                                removeListener: function(a) {
                                    V.a.add("AMap.event", "removeListener");
                                    a instanceof V.Tr && (0 === a.type ? V.B.F(a.dm, a.vJ, a.vK, a.Me) : 1 === a.type && (a.dm.rf || (a.dm.rf = V.ea.rf), V.ea.F.call(a.dm, a.vJ, a.vK, a.Me)))
                                },
                                H: function(a, b) {
                                    V.a.add("AMap.event", "trigger");
                                    a.rf || (a.rf = V.ea.rf);
                                    var c = Array.prototype.slice.call(arguments, 1);
                                    V.ea.w.apply(a, c)
                                }
                            }; V.Tr = V.W.extend({
                                D: function(a, b, c, d, f) {
                                    this.type = a;
                                    this.dm = b;
                                    this.vJ = c;
                                    this.vK = d;
                                    this.Me = f
                                }
                            });
                            var Hc = {
                                V: "addDomListener",
                                ZV: "addDomListenerOnce",
                                addListener: "addListener",
                                oI: "addListenerOnce",
                                TI: "clearInstanceListeners",
                                Qt: "clearListeners",
                                removeListener: "removeListener",
                                H: "trigger"
                            },
                            Ic;
                            for (Ic in Hc) Hc.hasOwnProperty(Ic) && ($[Hc[Ic]] = $[Ic]); V.event = $; V.event.V(window, "beforeunload", V.a.send);
                            var Jc = V.W.extend({
                                ka: [V.ea, V.yd],
                                D: function(a) {
                                    this.CLASS_NAME = "AMap.Layer";
                                    V.g.fb(this, a);
                                    this.xe(this.G)
                                },
                                getContainer: function() {
                                    if (this.S && this.S.J) return this.S.J.Nf()
                                },
                                getZooms: function() {
                                    V.a.add(this.CLASS_NAME, "getZooms");
                                    return this.get("zooms", null, !0)
                                },
                                setOpacity: function(a) {
                                    V.a.add(this.CLASS_NAME, "setOpacity");
                                    a !== this.get("opacity", null, !0) && this.set("opacity", a)
                                },
                                getOpacity: function() {
                                    return this.get("opacity", null, !0)
                                },
                                show: function() {
                                    V.a.add(this.CLASS_NAME, "show");
                                    this.set("visible", !0);
                                    this.Ek && this.S.l.layersChanged()
                                },
                                hide: function() {
                                    V.a.add(this.CLASS_NAME, "hide");
                                    this.set("visible", !1);
                                    this.Ek && this.S.l.layersChanged()
                                },
                                setMap: function(a) {
                                    V.a.add(this.CLASS_NAME, "setMap");
                                    var b = this.get("map");
                                    a ? (b && a !== b && b.yo(this), this.set("map", a)) : b && (b.yo(this), this.set("map", null, !0), this.mh = !1, this.Ue && this.Ue())
                                },
                                getMap: function() {
                                    V.a.add(this.CLASS_NAME, "getMap");
                                    return this.get("map", null, !0)
                                },
                                mapChanged: function() {
                                    this.get("map") && this.get("map").nI(this)
                                },
                                setzIndex: function(a) {
                                    V.a.add(this.CLASS_NAME, "setzIndex");
                                    this.set("zIndex", a)
                                },
                                getzIndex: function() {
                                    return this.get("zIndex", null, !0)
                                }
                            });
                            var X = Jc.extend({
                                G: {
                                    tileSize: 256,
                                    visible: !0,
                                    opacity: 1,
                                    zIndex: 0,
                                    noLimg: 1,
                                    zooms: [3, 20],
                                    getTileUrl: V.j.U ? V.q.Fr: V.q.fr,
                                    errorUrl: V.g.uY,
                                    detectRetina: !0,
                                    className: "amap-layer",
                                    mapNumber: ""
                                },
                                D: function(a) {
                                    V.a.Za("AMap.TileLayer", a); (a = a || {}) && a.tileUrl && (a.getTileUrl = a.tileUrl);
                                    this.bX(a);
                                    var b = a.zooms;
                                    b && b[1] >= this.qg[0] ? (b[0] < this.qg[0] && (b[0] = this.qg[0]), b[1] > this.qg[1] && (b[1] = this.qg[1])) : a.zooms = [this.qg[0], this.qg[1]];
                                    arguments.callee.cb.call(this, a);
                                    this.CLASS_NAME = "AMap.TileLayer"
                                },
                                setTextIndex: function(a) {
                                    V.a.add(this.CLASS_NAME, "setTextIndex");
                                    this.set("textIndex", a)
                                },
                                $A: function() {
                                    var a = this.get("getTileUrl");
                                    return a !== V.q.fr && a !== V.q.Fr ? !1 : !0
                                },
                                xz: function() {
                                    if (!this.$A() || !V.j.Ke) return ! 1;
                                    var a = this.get("map");
                                    return ! a || "zh_cn" !== a.get("lang") || "d" === a.get("baseRender") || this.noVector ? !1 : !0
                                },
                                jg: function(a) {
                                    var b = this.get("map");
                                    this.$A() && (this.xz() ? this.set("mapNumber", "GS(2016)710") : this.set("mapNumber", "GS(2015)2681"));
                                    if (this.xz()) if (this.Ek = !0, V.S.Tg) {
                                        if ("dv" === b.get("baseRender") && !this.get("watermark")) {
                                            var c = V.q.Iu;
                                            V.j.ha && this.get("detectRetina") && (c = V.q.Iu.replace("scl=1", "scl=2"));
                                            var d = b.get("showBuildingBlock");
                                            d || (c = c.replace("ltype=3", "ltype=11"));
                                            c = new V.S.Yf(this, a, this.yp(c), void 0, !0);
                                            d && (c.Ok = new V.S.Od(new X({
                                                zooms: [16, 20],
                                                innerLayer: "true"
                                            }), a), c.Ok.type = "\u697c\u5757\u56fe\u5c42", c.Ok.Uc(["visible", "opacity", "zIndex"], c, !0), c.Ok.xa = ["building"], c.Ok.Lt(b.get("mapStyle") || "normal"));
                                            c.type = "\u6805\u683c\u5e95\u56fe";
                                            return c
                                        }
                                        if ("v" <= b.get("baseRender") || this.get("watermark")) return a = new V.S.Od(this, a),
                                        a.type = "\u77e2\u91cf\u5e95\u56fe",
                                        a
                                    } else return ["vectorlayer", "overlay"];
                                    else return this.Ek = !1,
                                    new V.S.Yf(this, a, null, this.G.maxDataZoom)
                                },
                                getTileUrlChanged: function() {
                                    var a = this.get("getTileUrl");
                                    if (a === V.q.fr || a === V.q.Fr || a === V.q.ov) this.Nu = !0;
                                    "string" === typeof a && (a = this.yp(a));
                                    this.set("tileFun", a)
                                },
                                bX: function(a) {
                                    this.qg || (this.qg = [this.G.zooms[0], this.G.zooms[1]]);
                                    var b;
                                    a.hasOwnProperty("detectRetina") && !1 === a.detectRetina && (b = !0);
                                    V.j.U && V.j.ha && this.G.detectRetina && !b && (this.qg[1] -= 1)
                                },
                                getTiles: function() {
                                    V.a.add(this.CLASS_NAME, "getTiles");
                                    var a = this.get("tiles", null, !0);
                                    if (a && a.length) a = a[0];
                                    else return [];
                                    for (var b = [], c, d = 0; d < a.length; d += 1) a[d].key && (c = a[d].key.split("/"), b.push("" + c[1] + "," + c[2]));
                                    return b
                                },
                                reload: function() {
                                    V.a.add(this.CLASS_NAME, "reload");
                                    this.set("reload", 1)
                                },
                                tm: function() {
                                    var a = this.get("map", null, !0);
                                    this.setMap(null);
                                    this.mh = !1;
                                    this.setMap(a)
                                },
                                setTileUrl: function(a) {
                                    V.a.add(this.CLASS_NAME, "setTileUrl");
                                    this.xz() ? (this.set("getTileUrl", a), this.tm()) : this.set("getTileUrl", a)
                                },
                                yp: function(a) {
                                    var b = this,
                                    c, d, f;
                                    return function(g, h, k) {
                                        g = (g + Math.pow(2, k)) % Math.pow(2, k);
                                        if ("number" !== typeof(g + h + k)) return null;
                                        var l = b.get("map"),
                                        m = "zh_cn";
                                        l && (m = l.get("lang") || "zh_cn");
                                        k = a.replace("[x]", g).replace("[y]", h).replace("[z]", k).replace("[lang]", m);
                                        if (!c) {
                                            if (d = a.match(/\{.*\}/)) f = d.toString().replace("{", "").replace("}", ""),
                                            f = f.split(",");
                                            c = !0
                                        }
                                        f && f.length && (k = k.replace(d, f[Math.abs(g + h) % f.length]));
                                        return k
                                    }
                                },
                                getTileUrl: function(a, b, c) {
                                    V.a.add(this.CLASS_NAME, "getTileUrl");
                                    return this.get("tileFun", null, !0)(a, b, c)
                                },
                                getZooms: function() {
                                    V.a.add(this.CLASS_NAME, "getZooms");
                                    return this.get("zooms", null, !0)
                                }
                            }); X.Uv = X.extend({
                                G: {
                                    getTileUrl: function(a, b, c) {
                                        var d = "zh_cn";
                                        if (this && this.get) {
                                            var f = this.get("map");
                                            f && (d = f.get("lang") || "zh_cn")
                                        }
                                        return "http://grid.amap.com/grid/" + c + "/" + a + "/" + b + "?src=jsapi&key=" + V.q.key + "&lang=" + d + "&dpiType=" + (V.j.Rc ? "wprd": "webrd")
                                    },
                                    zooms: [10, 18],
                                    zIndex: 2
                                },
                                D: function(a) {
                                    arguments.callee.cb.apply(this, arguments)
                                }
                            }); X.CD = X.extend({
                                G: {
                                    getTileUrl: V.q.nC,
                                    zooms: [3, 20],
                                    zIndex: 2,
                                    maxDataZoom: 18,
                                    detectRetina: !1,
                                    mapNumber: "GS(2017)154",
                                    className: "amap-layer amap-satellite"
                                },
                                D: function(a) {
                                    this.qg = [3, 20];
                                    arguments.callee.cb.apply(this, arguments);
                                    this.CLASS_NAME = "AMap.TileLayer.Satellite";
                                    V.a.Za(this.CLASS_NAME, a)
                                }
                            }); X.AD = X.extend({
                                G: {
                                    getTileUrl: V.q.ov,
                                    zooms: [3, 20],
                                    zIndex: 3,
                                    type: "overlayer",
                                    maxDataZoom: 18,
                                    className: "amap-layer amap-roadnet"
                                },
                                D: function(a) {
                                    this.qg = [3, 20];
                                    arguments.callee.cb.apply(this, arguments);
                                    this.CLASS_NAME = "AMap.TileLayer.RoadNet";
                                    V.a.Za(this.CLASS_NAME, a)
                                },
                                jg: function(a) {
                                    var b = this.get("map");
                                    V.j.Ke && "d" !== b.get("baseRender") ? (this.Ek = !0, b = V.q.pv, V.j.ha && this.get("detectRetina") && (b = V.q.pv.replace("scl=1", "scl=2")), a = new V.S.Yf(this, a, this.yp(b), this.G.maxDataZoom)) : (this.Ek = !1, a = new V.S.Yf(this, a));
                                    return a
                                }
                            }); X.ED = X.extend({
                                G: {
                                    getTileUrl: function(a, b, c) {
                                        return V.q.dc + "://tm.amap.com/trafficengine/mapabc/traffictile?v=1.0&t=1&zoom=" + (17 - c) + "&x=" + a + "&y=" + b
                                    },
                                    zooms: [6, 20],
                                    zIndex: 4,
                                    type: "overlayer",
                                    autoRefresh: !1,
                                    interval: 180,
                                    maxDataZoom: 17,
                                    alwaysRender: !V.j.Sz,
                                    className: "amap-layer amap-traffic"
                                },
                                D: function(a) {
                                    this.qg = [6, 20];
                                    arguments.callee.cb.apply(this, arguments);
                                    this.startRefresh();
                                    this.CLASS_NAME = "AMap.TileLayer.Traffic";
                                    V.a.Za(this.CLASS_NAME, a)
                                },
                                stopRefresh: function() {
                                    V.a.add(this.CLASS_NAME, "stopRefresh");
                                    this.fv && (clearInterval(this.fv), this.fv = null)
                                },
                                startRefresh: function() {
                                    V.a.add(this.CLASS_NAME, "startRefresh");
                                    if (this.get("autoRefresh") && !this.fv) {
                                        var a = this;
                                        this.fv = setInterval(function() {
                                            a.reload();
                                            a.w("refresh")
                                        },
                                        Math.max(1E3 * (this.get("interval") || 180), 1E4))
                                    }
                                },
                                reload: function() {
                                    V.a.add(this.CLASS_NAME, "reload");
                                    V.g.Ve(function() {
                                        this.set("reload")
                                    },
                                    this)
                                },
                                Ue: function() {
                                    this.stopRefresh();
                                    this.get("map") && this.get("map").F("zoomstart", this.reload, this)
                                },
                                jg: function(a) {
                                    var b = this.get("map"),
                                    b = a.da;
                                    b.e("zoomstart", this.reload, this);
                                    return "d" !== b.get("baseRender") ? V.S.ep ? a = new V.S.ep(this, a) : ["vt"] : a = new V.S.Yf(this, a, null, this.G.maxDataZoom)
                                }
                            });
                            var Kc = Jc.extend({
                                G: {
                                    visible: !0,
                                    zooms: [3, 25],
                                    type: "overlay",
                                    zIndex: 5,
                                    alwaysRender: !0
                                },
                                D: function(a) {
                                    arguments.callee.cb.apply(this, arguments)
                                },
                                jg: function(a) {
                                    return new V.S.jd(this, a)
                                }
                            });
                            var Lc = Jc.extend({
                                G: {
                                    zooms: [17, 20],
                                    zIndex: 8,
                                    url: V.q.Kr + "/vector/buildings",
                                    wallColor: [200, 190, 180],
                                    strokeColor: [145, 140, 135],
                                    CAM_Z: 400,
                                    lineCap: "round",
                                    lineJoin: "round",
                                    lineWidth: 1,
                                    fadeFactor: 1,
                                    visible: !0
                                },
                                D: function() {
                                    arguments.callee.cb.apply(this, arguments);
                                    this.CLASS_NAME = "AMap.Buildings"
                                },
                                jg: function(a) {
                                    if (V.S.Yo) return new V.S.Yo(this, a);
                                    if (V.j.$q) return ["building", "overlay"]
                                }
                            });
                            var Mc = Jc.extend({
                                G: {
                                    visible: !0,
                                    zooms: [3, V.j.U ? 20 : 18],
                                    opacity: 1,
                                    type: "overlay",
                                    zIndex: 6
                                },
                                D: function(a) {
                                    arguments.callee.cb.apply(this, arguments);
                                    this.CLASS_NAME = "AMap.ImageLayer";
                                    V.a.Za(this.CLASS_NAME, a)
                                },
                                jg: function(a) {
                                    return V.S.mD ? new V.S.mD(this, a) : ["imagelayer"]
                                },
                                getMap: function() {
                                    V.a.add(this.CLASS_NAME, "getMap");
                                    return this.Qi.map
                                },
                                show: function() {
                                    V.a.add(this.CLASS_NAME, "show");
                                    this.set("visible", !0);
                                    this.w("options")
                                },
                                getOpacity: function() {
                                    V.a.add(this.CLASS_NAME, "getOpacity");
                                    return this.get("opacity", null, !0)
                                },
                                setOpacity: function(a) {
                                    V.a.add(this.CLASS_NAME, "setOpacity");
                                    this.set("opacity", a)
                                },
                                getBounds: function() {
                                    V.a.add(this.CLASS_NAME, "getBounds");
                                    return this.get("bounds", null, !0).Jb()
                                },
                                setBounds: function(a) {
                                    V.a.add(this.CLASS_NAME, "setBounds");
                                    this.setOptions({
                                        bounds: a
                                    })
                                },
                                getImageUrl: function() {
                                    V.a.add(this.CLASS_NAME, "getImageUrl");
                                    return this.get("url")
                                },
                                setImageUrl: function(a) {
                                    V.a.add(this.CLASS_NAME, "setImageUrl");
                                    return this.set("url", a)
                                },
                                hide: function() {
                                    V.a.add(this.CLASS_NAME, "hide");
                                    this.set("visible", !1);
                                    this.w("options")
                                },
                                setOptions: function(a) {
                                    V.a.add(this.CLASS_NAME ? this.CLASS_NAME: "AMap.ImageLayer", "setOptions");
                                    this.xe(a);
                                    this.w("options")
                                },
                                getOptions: function() {
                                    V.a.add(this.CLASS_NAME, "getOptions");
                                    var a = {},
                                    b;
                                    for (b in this.G) this.G.hasOwnProperty(b) && (a[b] = this.get(b));
                                    return a
                                }
                            });
                            var Nc = Jc.extend({
                                G: {
                                    visible: !0,
                                    zooms: [3, V.j.U ? 20 : 18],
                                    type: "overlay",
                                    zIndex: 5,
                                    cursor: "pointer",
                                    alwaysRender: !0,
                                    stable: !0,
                                    bubble: !0,
                                    className: "amap-mass"
                                },
                                D: function(a, b) {
                                    this.CLASS_NAME = "AMap.MassMarks";
                                    V.a.Za(this.CLASS_NAME, b);
                                    V.j.$q && (this.yi = !0, b.size && (b.size = V.g.uj(b.size)), this.setData(a), V.g.fb(this, b), b.style ? (this.xe(this.G, !0), this.setStyle(b.style)) : this.setStyle(this.G))
                                },
                                clear: function() {
                                    this.set("dataSources", "")
                                },
                                getStyle: function() {
                                    V.a.add(this.CLASS_NAME, "getStyle");
                                    return this.Lh
                                },
                                setStyle: function(a) {
                                    V.a.add(this.CLASS_NAME, "setStyle");
                                    if (a instanceof Array) {
                                        for (var b = 0; b < a.length; b += 1) a[b].size = V.g.uj(a[b].size),
                                        a.wf = Math.max(a.wf || 0, a[b].size.width + a[b].anchor.x),
                                        a.tg = Math.max(a.wf || 0, a[b].size.height + a[b].anchor.y);
                                        this.Lh = a
                                    } else a.size && (a.size = V.g.uj(a.size)),
                                    this.xe(a, !0),
                                    this.Lh = {
                                        anchor: this.get("anchor"),
                                        url: this.get("url"),
                                        size: this.get("size")
                                    },
                                    this.Lh.wf = this.Lh.size.width + this.Lh.anchor.x,
                                    this.Lh.tg = this.Lh.size.height + this.Lh.anchor.y;
                                    this.w("style")
                                },
                                setData: function(a) {
                                    V.a.add(this.CLASS_NAME, "setData");
                                    this.set("dataSources", a)
                                },
                                getData: function() {
                                    V.a.add(this.CLASS_NAME, "getData");
                                    return this.get("datas") || this.get("dataSources")
                                },
                                setMap: function(a) {
                                    V.a.add(this.CLASS_NAME, "setMap");
                                    V.j.$q && (a ? (this.get("map") && this.get("map").yo(this), this.set("map", a)) : this.get("map") && (this.get("map").yo(this), this.set("map", null, !0), this.mh = !1, this.Ue && this.Ue()))
                                },
                                jg: function(a) {
                                    return V.Ra.Cu(["cvector"]) ? (a = new V.S.jd(this, a), this.Q("datas", a), a) : ["cvector"]
                                }
                            });
                            var Bc = Mc.extend({
                                D: function(a, b, c) {
                                    V.a.Za("AMap.GroundImage", c);
                                    c = c || {};
                                    this.pj = !0;
                                    var d = parseFloat(c.opacity);
                                    isNaN(d) && (d = 1);
                                    arguments.callee.cb.call(this, {
                                        url: a,
                                        bounds: b,
                                        clickable: c.clickable,
                                        opacity: d,
                                        map: c.map,
                                        zooms: c.zooms || [3, 20]
                                    });
                                    this.CLASS_NAME = "AMap.GroundImage"
                                },
                                W_: function(a) {
                                    this.get("bounds").contains(a.lnglat) && (a.target = this, this.w("click", a))
                                },
                                X_: function(a) {
                                    this.get("bounds").contains(a.lnglat) && (a.target = this, this.w("dblclick", a))
                                },
                                setMap: function(a) {
                                    V.a.add(this.CLASS_NAME, "setMap");
                                    a ? (this.get("map") && (this.get("map").yo(this), this.WI && $.removeListener(this.WI), this.gJ && $.removeListener(this.gJ)), this.set("map", a)) : this.get("map") && (this.get("map").yo(this), this.Qi.map = null)
                                },
                                mapChanged: function() {
                                    this.get("map") && (this.get("map").nI(this), this.get("clickable") && (this.WI = $.addListener(this.get("map"), "click", this.W_, this), this.gJ = $.addListener(this.get("map"), "dblclick", this.X_, this)))
                                }
                            });
                            var Fc = V.W.extend({
                                ka: [V.ea, V.yd, {
                                    ma: V.g.ma
                                }],
                                G: {
                                    extData: {},
                                    bubble: !1,
                                    clickable: !0,
                                    draggable: !1
                                },
                                D: function() {
                                    this.Ns = V.g.Bb(this)
                                },
                                O5: function() {
                                    return this.Ns
                                },
                                Z4: function() {
                                    this.get("map", null, !0) && this.setMap(this.get("map"))
                                },
                                mapChanged: function() {
                                    this.get("map", null, !0) && this.get("map", null, !0).qI(this)
                                },
                                show: function() {
                                    V.a.add(this.CLASS_NAME, "show");
                                    this.set("visible", !0)
                                },
                                hide: function() {
                                    V.a.add(this.CLASS_NAME, "hide");
                                    this.set("visible", !1)
                                },
                                setMap: function(a) {
                                    V.a.add(this.CLASS_NAME, "setMap");
                                    a !== this.get("map", null, !0) && (a ? (this.get("map", null, !0) && this.get("map", null, !0).iv(this), this.set("map", a)) : this.get("map", null, !0) && (this.get("map", null, !0).iv(this), this.set("map", null, !0)))
                                },
                                getMap: function() {
                                    V.a.add(this.CLASS_NAME, "getMap");
                                    return this.get("map", null, !0)
                                },
                                setExtData: function(a) {
                                    V.a.add(this.CLASS_NAME, "setExtData");
                                    this.set("extData", a)
                                },
                                getExtData: function() {
                                    V.a.add(this.CLASS_NAME, "getExtData");
                                    return this.get("extData", null, !0)
                                }
                            });
                            var Oc = Fc.extend({
                                D: function(a) {
                                    Oc.De.D.apply(this, arguments)
                                },
                                show: function() {
                                    this.set("visible", !0);
                                    this.w("show", {
                                        type: "show",
                                        target: this
                                    })
                                },
                                hide: function() {
                                    this.set("visible", !1);
                                    this.w("hide", {
                                        type: "hide",
                                        target: this
                                    })
                                },
                                getVisible: function() {
                                    return this.get("visible", null, !0)
                                },
                                getOptions: function() {
                                    var a = {},
                                    b = "map zIndex strokeColor strokeOpacity strokeWeight strokeStyle strokeDasharray extData bubble clickable".split(" "),
                                    c = "isOutline outlineColor geodesic path lineJoin lineCap borderWeight showDir".split(" "),
                                    d = ["fillColor", "fillOpacity", "path", "lineJoin"],
                                    f = ["center", "radius"],
                                    g = [];
                                    this instanceof Dc && (g = b.concat(c));
                                    this instanceof Ec && (g = b.concat(d));
                                    this instanceof Cc && (g = b.concat(f).concat(d));
                                    for (b = 0; b < g.length; b += 1) a[g[b]] = this.get(g[b], null, !0);
                                    return a
                                },
                                setOptions: function(a) {
                                    a.hasOwnProperty("path") && (a.path && a.path.length || (a.path = []), a.path = V.g.ma(a.path));
                                    a.center && (a.center = V.g.ma(a.center));
                                    a.hasOwnProperty("map") && this.setMap(a.map);
                                    this.xe(a);
                                    this.w("options");
                                    this.w("change", {
                                        type: "change",
                                        target: this
                                    })
                                },
                                setDraggable: function(a) {
                                    this.set("draggable", a)
                                }
                            });
                            var Pc = Oc.extend({
                                G: {
                                    visible: !0,
                                    zIndex: 10,
                                    strokeColor: "#006600",
                                    strokeOpacity: 0.9,
                                    strokeWeight: 3,
                                    strokeStyle: "solid",
                                    strokeDasharray: [10, 5],
                                    lineJoin: "miter",
                                    path: []
                                },
                                D: function(a) {
                                    Pc.De.D.apply(this, arguments)
                                },
                                setPath: function(a, b) {
                                    V.a.add(this.CLASS_NAME, "setPath");
                                    a && a.length || (a = []);
                                    a = this.ma(a);
                                    this.set("path", a);
                                    this.w("change", {
                                        type: "change",
                                        target: this
                                    });
                                    b || this.w("setPath")
                                },
                                getPath: function() {
                                    V.a.add(this.CLASS_NAME, "getPath");
                                    return this.get("path", null, !0)
                                },
                                lc: function() {
                                    var a = this.get("path");
                                    if (!a || !a.length) return null;
                                    a[0] instanceof V.P && (a = [a]);
                                    for (var b = new V.wd(180, 90, -180, -90), c = 0; c < a.length; c += 1) for (var d = a[c], f = d.length - 1; 0 <= f; f -= 1) b.extend(d[f]);
                                    return b
                                }
                            }); Pc.Pn({
                                lc: "getBounds"
                            });
                            var Qc = V.W.extend({
                                ka: [V.ea, V.yd],
                                G: {
                                    size: new V.ac(36, 36),
                                    imageOffset: new V.K(0, 0),
                                    image: V.q.pb + "/theme/v1.3/markers/0.png",
                                    imageSize: null
                                },
                                D: function(a) {
                                    this.CLASS_NAME = "AMap.Icon";
                                    V.a.Za(this.CLASS_NAME, a);
                                    a = a || {};
                                    a.size && (a.size = V.g.uj(a.size));
                                    a.imageSize && (a.imageSize = V.g.uj(a.imageSize));
                                    V.g.fb(this, a);
                                    this.xe(this.G)
                                },
                                setImageSize: function(a) {
                                    V.a.add(this.CLASS_NAME, "setImageSize");
                                    a = V.g.uj(a);
                                    this.set("imageSize", a)
                                },
                                getImageSize: function() {
                                    V.a.add(this.CLASS_NAME, "getImageSize");
                                    return this.get("imageSize", null, !0)
                                }
                            });
                            var Rc = V.W.extend({
                                ka: [V.ea, V.yd],
                                G: {
                                    coords: [],
                                    type: ""
                                },
                                D: function(a) {
                                    this.CLASS_NAME = "AMap.MarkerShape";
                                    V.a.Za(this.CLASS_NAME, a);
                                    V.g.fb(this, a);
                                    this.xe(this.G)
                                }
                            });
                            var Z = Fc.extend({
                                G: {
                                    cursor: "pointer",
                                    visible: !0,
                                    zIndex: 100,
                                    angle: 0,
                                    autoRotation: !1,
                                    opacity: 1,
                                    offset: new V.K( - 9, -31),
                                    size: new V.K(19, 33),
                                    raiseOnDrag: !1,
                                    topWhenClick: !1,
                                    topWhenMouseOver: !1,
                                    animation: "AMAP_ANIMATION_NONE"
                                },
                                D: function(a) {
                                    this.CLASS_NAME = "AMap.Marker";
                                    V.a.Za(this.CLASS_NAME, a);
                                    a = a || {};
                                    this.pj = !0;
                                    a.position && (a.position = this.ma(a.position));
                                    V.g.fb(this, a);
                                    V.j.nd && (this.G.angle = 0);
                                    this.xe(this.G, !0);
                                    this.mapChanged()
                                },
                                setRaiseOnDrag: function(a) {
                                    V.a.add(this.CLASS_NAME, "setRaiseOnDrag");
                                    this.set("raiseOnDrag", a)
                                },
                                setPosition: function(a) {
                                    V.a.add(this.CLASS_NAME, "setPosition");
                                    a = this.ma(a);
                                    this.set("position", a)
                                },
                                getBounds: function() {
                                    var a = this.getPosition().Jb();
                                    return new V.wd(a, a.Jb())
                                },
                                mapChanged: function() {
                                    this.get("map", null, !0) && (this.get("position", null, !0) || this.set("position", this.get("map").get("center")), this.get("map", null, !0).qI(this))
                                },
                                getPosition: function() {
                                    V.a.add(this.CLASS_NAME, "getPosition");
                                    return this.get("position", null, !0)
                                },
                                setIcon: function(a) {
                                    V.a.add(this.CLASS_NAME, "setIcon");
                                    this.set("icon", a)
                                },
                                getIcon: function() {
                                    V.a.add(this.CLASS_NAME, "getIcon");
                                    return this.get("icon", null, !0)
                                },
                                setContent: function(a) {
                                    V.a.add(this.CLASS_NAME, "setContent");
                                    this.set("content", a)
                                },
                                getContent: function() {
                                    V.a.add(this.CLASS_NAME, "getContent");
                                    return this.get("content", null, !0)
                                },
                                getContentDom: function() {
                                    return this.get("contentDom", null, !0)
                                },
                                hide: function() {
                                    V.a.add(this.CLASS_NAME, "hide");
                                    this.set("visible", !1)
                                },
                                show: function() {
                                    V.a.add(this.CLASS_NAME, "show");
                                    this.set("visible", !0)
                                },
                                setCursor: function(a) {
                                    V.a.add(this.CLASS_NAME, "setCursor");
                                    this.set("cursor", a)
                                },
                                setRotation: function(a) {
                                    V.a.add(this.CLASS_NAME, "setRotation");
                                    V.j.nd || this.set("angle", a)
                                },
                                setAngle: function(a) {
                                    V.a.add(this.CLASS_NAME, "setAngle");
                                    V.j.nd || "number" !== typeof a || this.set("angle", a)
                                },
                                getAngle: function() {
                                    V.a.add(this.CLASS_NAME, "getAngle");
                                    return this.get("angle", null, !0)
                                },
                                setOffset: function(a) {
                                    V.a.add(this.CLASS_NAME, "setOffset");
                                    this.set("offset", a)
                                },
                                getOffset: function() {
                                    V.a.add(this.CLASS_NAME, "getOffset");
                                    return this.get("offset", null, !0)
                                },
                                setzIndex: function(a) {
                                    V.a.add(this.CLASS_NAME, "setzIndex");
                                    this.set("zIndex", a)
                                },
                                getzIndex: function() {
                                    V.a.add(this.CLASS_NAME, "getzIndex");
                                    return this.get("zIndex", null, !0)
                                },
                                setOpacity: function(a) {
                                    V.a.add(this.CLASS_NAME, "setOpacity");
                                    this.set("opacity", a)
                                },
                                setDraggable: function(a) {
                                    V.a.add(this.CLASS_NAME, "setDraggable");
                                    this.set("draggable", a)
                                },
                                getDraggable: function() {
                                    V.a.add(this.CLASS_NAME, "getDraggable");
                                    return this.get("draggable", null, !0)
                                },
                                moveTo: function(a, b, c) {
                                    V.a.add(this.CLASS_NAME, "moveTo");
                                    a = this.ma(a);
                                    this.set("move", {
                                        Qe: a,
                                        speed: b,
                                        La: c
                                    })
                                },
                                moveAlong: function(a, b, c, d) {
                                    V.a.add(this.CLASS_NAME, "moveAlong");
                                    this.set("move", {
                                        Qe: a,
                                        speed: b,
                                        La: c,
                                        eX: d
                                    })
                                },
                                stopMove: function() {
                                    V.a.add(this.CLASS_NAME, "stopMove");
                                    this.set("move", !1)
                                },
                                pauseMove: function() {
                                    V.a.add(this.CLASS_NAME, "pauseMove");
                                    var a = this.get("move");
                                    if (!a) return ! 1;
                                    a.action = "pause";
                                    this.set("move", a);
                                    return ! 0
                                },
                                resumeMove: function() {
                                    V.a.add(this.CLASS_NAME, "resumeMove");
                                    var a = this.get("move");
                                    if (!a) return ! 1;
                                    a.action = "resume";
                                    this.set("move", a);
                                    return ! 0
                                },
                                setShadow: function(a) {
                                    V.a.add(this.CLASS_NAME, "setShadow");
                                    this.set("shadow", a)
                                },
                                getShadow: function() {
                                    V.a.add(this.CLASS_NAME, "getShadow");
                                    return this.get("shadow", null, !0)
                                },
                                setClickable: function(a) {
                                    V.a.add(this.CLASS_NAME, "setClickable");
                                    a !== this.getClickable() && this.set("clickable", a)
                                },
                                getClickable: function() {
                                    V.a.add(this.CLASS_NAME, "getClickable");
                                    return this.get("clickable", null, !0)
                                },
                                setTitle: function(a, b) {
                                    V.a.add(this.CLASS_NAME, "setTitle");
                                    "string" === typeof a && this.set("title", a, b)
                                },
                                getTitle: function() {
                                    V.a.add(this.CLASS_NAME, "getTitle");
                                    return this.get("title", null, !0)
                                },
                                setLabel: function(a) {
                                    V.a.add(this.CLASS_NAME, "setLabel");
                                    a && (a.hasOwnProperty("content") || a.hasOwnProperty("offSet")) || (a = {
                                        content: ""
                                    });
                                    a = V.extend({},
                                    this.get("label"), a);
                                    this.set("label", a)
                                },
                                getLabel: function() {
                                    V.a.add(this.CLASS_NAME, "getLabel");
                                    return this.get("label", null, !0)
                                },
                                setTop: function(a, b) {
                                    V.a.add(this.CLASS_NAME, "setTop");
                                    this.set("isTop", a, b)
                                },
                                getTop: function() {
                                    V.a.add(this.CLASS_NAME, "getTop");
                                    return this.get("isTop", null, !0)
                                },
                                setShape: function(a, b) {
                                    V.a.add(this.CLASS_NAME, "setShape");
                                    this.set("shape", a, b)
                                },
                                getShape: function() {
                                    V.a.add(this.CLASS_NAME, "getShape");
                                    return this.get("shape", null, !0)
                                },
                                setAnimation: function(a, b) {
                                    V.a.add(this.CLASS_NAME, "setAnimation");
                                    this.set("animation", a, b)
                                },
                                getAnimation: function() {
                                    V.a.add(this.CLASS_NAME, "getAnimation");
                                    return this.get("animation", null, !0)
                                },
                                getMap: function() {
                                    V.a.add(this.CLASS_NAME, "getMap");
                                    return this.get("map", null, !0)
                                },
                                markOnAMAP: function(a) {
                                    V.a.add(this.CLASS_NAME, "markOnAMAP");
                                    a = a || {};
                                    var b = {};
                                    b.name = a.name || this.get("name", null, !0) || "";
                                    a = this.ma(a.position) || this.get("position", null, !0);
                                    b.y = a.O;
                                    b.x = a.M;
                                    V.ze.Qk(V.ze.nZ(b))
                                }
                            }); V.en = {
                                fC: 12,
                                h4: function(a) {
                                    if (V.j.Ke && !V.j.U && a.position && (new Date).getHours() === V.en.fC && (V.sa || (V.sa = []), a.title || a.content)) {
                                        var b = {
                                            p: [a.position.M, a.position.O]
                                        };
                                        a.title && (b.t = a.title);
                                        a.content && (b.c = a.content.outerHTML || a.content);
                                        a.name && (b.n = a.name);
                                        V.sa.push(b)
                                    }
                                },
                                iH: function() {
                                    if (V.sa && V.sa.length) {
                                        var a = V.en.Cq(JSON.stringify({
                                            mks: V.sa,
                                            from: V.q.HY,
                                            key: V.q.key
                                        }));
                                        new V.ra.XMLHttpRequest(V.q.pb + "/count", {
                                            yX: "data=" + a,
                                            Mc: "POST"
                                        });
                                        V.sa = []
                                    }
                                },
                                Cq: function(a) {
                                    for (var b = "",
                                    c = 0,
                                    d = a.length; c < d; c++) b += String.fromCharCode((a.charCodeAt(c) + 256) % 65535);
                                    return b
                                },
                                If: function(a) {
                                    for (var b = "",
                                    c = 0,
                                    d = a.length; c < d; c++) b += String.fromCharCode((a.charCodeAt(c) - 256 + 65535) % 65535);
                                    return b
                                }
                            };
                            if (V.j.Ke && !V.j.U && (new Date).getHours() === V.en.fC) {
                                var Sc = setInterval(function() { (new Date).getHours() !== V.en.fC ? clearInterval(Sc) : V.en.iH()
                                },
                                6E3);
                                V.event.V(window, "beforeunload", V.en.iH)
                            };
                            var zc = Fc.extend({
                                G: {
                                    visible: !1,
                                    items: []
                                },
                                D: function(a) {
                                    this.CLASS_NAME = "AMap.ContextMenu";
                                    V.a.Za(this.CLASS_NAME, a);
                                    this.pj = !0;
                                    V.g.fb(this, a);
                                    this.G.items = [];
                                    this.xe(this.G)
                                },
                                addItem: function(a, b, c) {
                                    V.a.add(this.CLASS_NAME, "addItem");
                                    this.get("items").push({
                                        GN: a,
                                        La: b,
                                        Tu: c
                                    });
                                    this.w("items")
                                },
                                removeItem: function(a, b) {
                                    V.a.add(this.CLASS_NAME, "removeItem");
                                    var c = this.get("items"),
                                    d,
                                    f;
                                    for (f = 0; f < c.length; f += 1) if (d = c[f], d.GN === a && d.La === b) {
                                        c.splice(f, 1);
                                        break
                                    }
                                    this.w("items")
                                },
                                open: function(a, b) {
                                    V.a.add(this.CLASS_NAME, "open");
                                    b = V.g.ma(b);
                                    this.set("position", b);
                                    this.map ? this.map && this.map !== a && (this.map.iv(this), this.map = a, this.setMap(a)) : (this.map = a, this.setMap(a));
                                    this.w("open", {
                                        type: "open",
                                        target: this
                                    })
                                },
                                close: function() {
                                    V.a.add(this.CLASS_NAME, "close");
                                    this.setMap(null);
                                    this.map && (this.map = this.map.Wt = null, this.w("close", {
                                        type: "close",
                                        target: this
                                    }))
                                }
                            });
                            var Ac = Fc.extend({
                                G: {
                                    visible: !0,
                                    offset: new V.K(0, 0),
                                    showShadow: !1,
                                    closeWhenClickMap: !1,
                                    retainWhenClose: !0,
                                    autoMove: !0
                                },
                                D: function(a) {
                                    this.CLASS_NAME = "AMap.InfoWindow";
                                    V.a.Za(this.CLASS_NAME, a);
                                    a = a || {};
                                    this.pj = !0;
                                    a && a.size && (a.size = V.g.uj(a.size));
                                    V.g.fb(this, a);
                                    this.xe(this.G);
                                    a.position && this.set("position", V.g.ma(a.position), !0)
                                },
                                open: function(a, b) {
                                    V.a.add(this.CLASS_NAME, "open");
                                    b = V.g.ma(b);
                                    if (a) if (this.get("toBeClose")) this.set("toBeClose", !1);
                                    else if (b = b || this.get("position", null, !0)) {
                                        this.w("change", {
                                            type: "change",
                                            target: this
                                        });
                                        var c = this.get("map", null, !0);
                                        c && c === a ? this.set("position", b) : (this.map = a, a.vi && a.vi.close(), this.set("position", b, !0), this.setMap(a));
                                        this.w("open", {
                                            type: "open",
                                            target: this
                                        })
                                    }
                                },
                                close: function() {
                                    V.a.add(this.CLASS_NAME, "close");
                                    this.setMap(null);
                                    this.map = null;
                                    this.w("change", {
                                        type: "change",
                                        target: this
                                    })
                                },
                                setContent: function(a) {
                                    V.a.add(this.CLASS_NAME, "setContent");
                                    this.set("content", a);
                                    this.w("change", {
                                        type: "change",
                                        target: this
                                    })
                                },
                                getContentU: function() {
                                    V.a.add(this.CLASS_NAME, "getContentU");
                                    return this.get("content", null, !0)
                                },
                                getContentDom: function() {
                                    return this.get("contentDom", null, !0)
                                },
                                getContent: function() {
                                    V.a.add(this.CLASS_NAME, "getContent");
                                    return this.get("content", null, !0)
                                },
                                setPosition: function(a) {
                                    V.a.add(this.CLASS_NAME, "setPosition");
                                    a = V.g.ma(a);
                                    this.set("position", a);
                                    this.w("change", {
                                        type: "change",
                                        target: this
                                    })
                                },
                                setOffset: function(a) {
                                    V.a.add(this.CLASS_NAME, "setOffset");
                                    this.set("offset", a);
                                    this.w("change", {
                                        type: "change",
                                        target: this
                                    })
                                },
                                getPosition: function() {
                                    V.a.add(this.CLASS_NAME, "getPosition");
                                    return this.get("position", null, !0)
                                },
                                setSize: function(a) {
                                    V.a.add(this.CLASS_NAME, "setSize");
                                    a = V.g.uj(a);
                                    this.set("size", a);
                                    this.w("change", {
                                        type: "change",
                                        target: this
                                    })
                                },
                                getSize: function(a) {
                                    V.a.add(this.CLASS_NAME, "getSize");
                                    var b = this.get("size", null, !0);
                                    if (b) return b;
                                    if (this.Ia && !a) return new V.ac(this.Ia.Le.offsetWidth, this.Ia.Le.offsetHeight)
                                },
                                getIsOpen: function() {
                                    V.a.add(this.CLASS_NAME, "getIsOpen");
                                    return !! this.get("map")
                                }
                            });
                            var Dc = Pc.extend({
                                G: {
                                    isOutline: !1,
                                    outlineColor: "#000000",
                                    geodesic: !1,
                                    borderWeight: 1
                                },
                                D: function(a) {
                                    Dc.De.D.apply(this, arguments);
                                    this.CLASS_NAME = "AMap.Polyline";
                                    V.a.Za(this.CLASS_NAME, a);
                                    this.pj = !0;
                                    a = a || {};
                                    a.zIndex = "number" === typeof a.zIndex ? a.zIndex: 50;
                                    a.path && (a.path = this.ma(a.path));
                                    V.g.fb(this, a);
                                    this.setOptions(this.G)
                                },
                                getLength: function() {
                                    V.a.add(this.CLASS_NAME, "getLength");
                                    for (var a = this.get("path"), b = 0, c = 0; c < a.length - 1; c += 1) b += a[c].Kf(a[c + 1]);
                                    return parseFloat(b.toFixed(2))
                                }
                            });
                            var Ec = Pc.extend({
                                D: function(a) {
                                    Ec.De.D.apply(this, arguments);
                                    this.CLASS_NAME = "AMap.Polygon";
                                    V.a.Za(this.CLASS_NAME, a);
                                    this.pj = !0;
                                    a = a || {};
                                    a.zIndex = "number" === typeof a.zIndex ? a.zIndex: 10;
                                    a.path && (a.path = this.ma(a.path));
                                    V.g.fb(this, V.extend({
                                        fillColor: "#FFAA00",
                                        fillOpacity: 0.9
                                    },
                                    a));
                                    this.setOptions(this.G)
                                },
                                vA: function(a) {
                                    var b = 6378137 * Math.PI / 180,
                                    c = 0,
                                    d = a.length;
                                    if (3 > d) return 0;
                                    for (var f = 0; f < d - 1; f += 1) var g = a[f],
                                    h = a[f + 1],
                                    c = c + (g.M * b * Math.cos(g.O * Math.PI / 180) * h.O * b - h.M * b * Math.cos(h.O * Math.PI / 180) * g.O * b);
                                    d = a[f];
                                    a = a[0];
                                    c += d.M * b * Math.cos(d.O * Math.PI / 180) * a.O * b - a.M * b * Math.cos(a.O * Math.PI / 180) * d.O * b;
                                    return 0.5 * Math.abs(c)
                                },
                                getArea: function() {
                                    V.a.add(this.CLASS_NAME, "getArea");
                                    var a = this.get("path", null, !0),
                                    b;
                                    if (!a.length || a[0] instanceof V.P) b = this.vA(a);
                                    else {
                                        b = this.vA(a[0]);
                                        for (var c = 1; c < a.length; c += 1) b -= this.vA(a[c])
                                    }
                                    return Number(b.toFixed(2))
                                },
                                toString: function() {
                                    V.a.add(this.CLASS_NAME, "toString");
                                    return this.get("path").join(";")
                                },
                                contains: function(a) {
                                    V.a.add(this.CLASS_NAME, "contains");
                                    a = V.g.ma(a);
                                    var b = this.get("path");
                                    b.length && b[0] instanceof V.P && (b = [b]);
                                    a = [a.M, a.O];
                                    for (var c, d = 0,
                                    f = b.length; d < f && (c = this.UW(b[d]), V.Tc.vk(c) || c.reverse(), c = V.Tc.Dd(a, c, 0 === d ? !0 : !1), 0 < d && (c = !c), c); d += 1);
                                    return c
                                },
                                UW: function(a) {
                                    for (var b = [], c = 0; c < a.length; c += 1) b.push([a[c].M, a[c].O]);
                                    return b
                                }
                            });
                            var Cc = Oc.extend({
                                G: {
                                    visible: !0,
                                    zIndex: 10,
                                    strokeColor: "#006600",
                                    strokeOpacity: 0.9,
                                    strokeWeight: 3,
                                    strokeStyle: "solid",
                                    strokeDasharray: [10, 5],
                                    radius: 1E3,
                                    fillColor: "#006600",
                                    fillOpacity: 0.9
                                },
                                D: function(a) {
                                    Cc.De.D.apply(this, arguments);
                                    this.CLASS_NAME = "AMap.Circle";
                                    V.a.Za(this.CLASS_NAME, a);
                                    a = a || {};
                                    a.center && (a.center = V.g.ma(a.center));
                                    a.zIndex = "number" === typeof a.zIndex ? a.zIndex: 10;
                                    V.g.fb(this, a);
                                    this.pj = this.G.center ? !0 : !1;
                                    this.setOptions(this.G)
                                },
                                setCenter: function(a, b) {
                                    V.a.add(this.CLASS_NAME, "setCenter"); (a = V.g.ma(a)) && a instanceof V.P && (this.set("center", a), this.w("change", {
                                        type: "change",
                                        target: this
                                    }), this.pj || (this.pj = !0, this.get("map") && this.get("map").w("overlays")), b || this.w("setCenter"))
                                },
                                getCenter: function() {
                                    V.a.add(this.CLASS_NAME, "getCenter");
                                    return this.get("center", null, !0)
                                },
                                setRadius: function(a, b) {
                                    V.a.add(this.CLASS_NAME, "setRadius");
                                    this.set("radius", a);
                                    this.w("change", {
                                        type: "change",
                                        target: this
                                    });
                                    b || this.w("setRadius")
                                },
                                getRadius: function() {
                                    V.a.add(this.CLASS_NAME, "getRadius");
                                    return this.get("radius", null, !0)
                                },
                                getBounds: function() {
                                    var a = this.get("center"),
                                    b = this.get("radius");
                                    if (!a) return null;
                                    var c = a.offset( - b, -b),
                                    a = a.offset(b, b);
                                    return new V.wd(c, a)
                                },
                                contains: function(a) {
                                    V.a.add(this.CLASS_NAME, "contains");
                                    return this.get("center").Kf(a) <= this.get("radius") ? !0 : !1
                                }
                            }); V.rO = Gc.extend({
                                D: function(a, b) {
                                    b && (b.center = b.position, b.zoom = 11);
                                    arguments.callee.cb.apply(this, arguments);
                                    window.console && window.console.log && window.console.log("\u9ad8\u5fb7\u5730\u56feJSAPI\u8857\u666f\u5df2\u4e0b\u7ebf\uff0c\u611f\u8c22\u60a8\u7684\u652f\u6301\u3002")
                                }
                            }); V.sO = Z.extend({
                                D: function(a) {
                                    arguments.callee.cb.apply(this, arguments)
                                }
                            }); V.Tc = {
                                jk: function(a, b) {
                                    for (var c = Infinity,
                                    d = 0,
                                    f = 1,
                                    g = b.length; f < g; d = f, f += 1) c = Math.min(c, V.Tc.i2(a, [b[d], b[f]]));
                                    return Math.sqrt(c)
                                },
                                i2: function(a, b) {
                                    return this.h2(a, this.XI(a, b))
                                },
                                h2: function(a, b) {
                                    var c = a[0] - b[0],
                                    d = a[1] - b[1];
                                    return c * c + d * d
                                },
                                XI: function(a, b) {
                                    var c = a[0],
                                    d = a[1],
                                    f = b[0],
                                    g = b[1],
                                    h = f[0],
                                    f = f[1],
                                    k = g[0],
                                    g = g[1],
                                    l = k - h,
                                    m = g - f,
                                    c = 0 === l && 0 === m ? 0 : (l * (c - h) + m * (d - f)) / (l * l + m * m || 0);
                                    0 >= c || (1 <= c ? (h = k, f = g) : (h += c * l, f += c * m));
                                    return [h, f]
                                },
                                vk: function(a) {
                                    for (var b = a.length,
                                    c = 0,
                                    d = a[b - 1], f = d[0], d = d[1], g, h, k = 0; k < b; k += 1) h = a[k],
                                    g = h[0],
                                    h = h[1],
                                    c += (g - f) * (h + d),
                                    f = g,
                                    d = h;
                                    return 0 < c
                                },
                                Dd: function(a, b, c) {
                                    var d = a[0];
                                    a = a[1];
                                    var f = !1,
                                    g, h, k, l, m = b.length,
                                    n = 0;
                                    for (l = m - 1; n < m; l = n, n += 1) {
                                        var p = !1;
                                        g = b[n][0];
                                        h = b[n][1];
                                        k = b[l][0];
                                        l = b[l][1];
                                        if (g === d && h === a || k === d && l === a) return c ? !0 : !1;
                                        if (h < a === l >= a) {
                                            g = (k - g) * (a - h) / (l - h) + g;
                                            if (d === g) return c ? !0 : !1;
                                            p = d < g
                                        }
                                        p && (f = !f)
                                    }
                                    return f
                                }
                            };
                            var Tc = {
                                Pixel: V.K,
                                LngLat: V.P,
                                Size: V.ac,
                                Bounds: V.wd,
                                PixelBounds: V.fe,
                                event: $,
                                Panorama: V.rO,
                                PanoramaMarker: V.sO,
                                Map: Gc,
                                View2D: yc,
                                GroundImage: Bc,
                                Marker: Z,
                                ImageMarker: wc.L3,
                                Text: wc.V3,
                                Icon: Qc,
                                MarkerShape: Rc,
                                Polyline: Dc,
                                Polygon: Ec,
                                Circle: Cc,
                                ContextMenu: zc,
                                InfoWindow: Ac,
                                Buildings: Lc,
                                TileLayer: X,
                                ImageLayer: Mc,
                                VectorLayer: Kc,
                                MassMarks: Nc,
                                CANVAS: "canvas",
                                DOM: "dom"
                            }; Tc.plugin = Tc.service = Gc.prototype.plugin; Tc.TileLayer.Satellite = X.CD; Tc.TileLayer.RoadNet = X.AD; Tc.TileLayer.Traffic = X.ED; Tc.Panorama.Events = $; Tc.TileLayer.PanoramaLayer = X.N3; Tc.UA = {
                                ie: V.j.bo,
                                ielt9: V.j.nd,
                                ielt11: V.j.FZ,
                                mobile: V.j.U,
                                android: V.j.Gg,
                                ios: V.j.KK
                            }; Tc.User = {
                                key: V.q.key
                            }; window.AMap = Tc; window.AMap.BuryPoint = V.BuryPoint; window.AMap.Class = V.W;
                            if ("undefined" !== typeof arguments && arguments.callee) try {
                                V.j.qj && window.localStorage && ((tc = window.localStorage["_AMap_" + V.Fd]) && JSON.parse(tc).version === V.q.wg || window.localStorage.setItem("_AMap_" + V.Fd, JSON.stringify({
                                    script: "(" + arguments.callee + ")()",
                                    version: V.q.wg
                                })))
                            } catch(Uc) {}; window.AMap.convertFrom = function(a, b, c) {
                                V.a.add("AMap", "convertFrom", b);
                                var d = V.q.ec + "/v3/assistant/coordinate/convert";
                                a = V.g.ma(a);
                                var f = [];
                                if (a instanceof Array) {
                                    for (var g = 0,
                                    h = a.length; g < h; g += 1) f.push(a[g] + "");
                                    f = f.join(";")
                                } else f = a + "";
                                b = ["key=" + V.q.key, "s=rsv3", "locations=" + f, "coordsys=" + (b || "gps")];
                                d += 0 < b.length ? "?" + b.join("&") : "";
                                d = new V.ra.Ca(d, {
                                    callback: "callback"
                                });
                                d.e("complete",
                                function(a) {
                                    if ("1" === a.status) {
                                        a = a.locations.split(";");
                                        for (var b = 0; b < a.length; b += 1) {
                                            var d = a[b].split(",");
                                            a[b] = new AMap.LngLat(d[0], d[1])
                                        }
                                        c && "function" === typeof c && c("complete", {
                                            info: "ok",
                                            locations: a
                                        })
                                    } else c && "function" === typeof c && c("error", a.info)
                                },
                                this);
                                d.e("error",
                                function(a) {
                                    c && "function" === typeof c && c("error", a.info)
                                },
                                this)
                            }; _jsload_('http', 'V.ra=V.ra||{}; V.ra.gw=V.W.extend({ka:[V.ea],D:function(a,b){this.G={callback:"cbk",type:"json",charset:"utf-8"};b=b||{};V.g.fb(this,b);this.url=a;this.send(a,b.Mc,b.yX)},send:function(a){var b=V.f.create("script");b.type="text/javascript";b.charset=this.G.charset;var c=this;V.j.nd?b.onreadystatechange=function(){"loaded"!==this.readyState&&"complete"!==this.readyState||c.w("complete")}:(b.onload=function(){c.w("complete")},b.onerror=function(){c.w("error",{status:0,info:"service error",url:a})});b.src=a;document.getElementsByTagName("head")[0].appendChild(b)}});V.ra.Ca=V.ra.gw.extend({XW:function(){if(V.g.PM)return V.g.Dv.push(this),!0},t1:function(){this.w("error",{info:"TIME_OUT_A"})},send:function(a,b,c,d){function f(){window[g]=null;try{window[g]=null}catch(a){}h.onerror=null;h.parentNode&&h.parentNode.removeChild(h)}if(!this.G.nq||!this.XW()){a=encodeURI(a);var g=this.G.fun;if(!g||window[g])g=V.g.RJ("jsonp_",6)+"_";var h=document.createElement("script");h.type="text/javascript";h.charset="utf-8";h.async=!0;var k=this;V.j.nd||(h.onerror=function(){f(); k.w("error",{info:"REQUEST_FAILED",url:a})});window[g]=function(a){f();if(k.G.callbackFunction)k.G.callbackFunction.call(k.G.context,a);else if(3E4===a.errcode&&a.data)V.g.PM=!0,V.Ra.load("AMap.AntiCrabFrame",function(){V.g.nq||(V.g.nq=new V.RN);V.g.Dv.push(k);V.g.nq.open(k.G.Mc,a.data.host,k.UB||"",k.url)});else{if(a instanceof Array||"string"===typeof a)a={data:a};a.z5=g;k.w("complete",a)}};b="?";-1!==a.indexOf("?")&&(b="&");b=a+b+this.G.callback+"="+g;if(-1!==a.indexOf(V.q.ec+"/v")||-1!==a.indexOf("yuntuapi.amap.com/datasearch"))b+= "&platform=JS&logversion=2.0&sdkversion="+V.q.bz,b+="&appname="+V.q.Dl;b+="&csid="+this.d3();if(c=this.G.fu){var l=[],m;for(m in c)c.hasOwnProperty(m)&&(l.push(m+"="+c[m]),b+="&"+m+"="+encodeURIComponent(c[m]));k.UB=l.join("&")}h.src=d?b+"&rereq=true":b;V.ra.Ca.KE||(V.ra.Ca.KE=document.getElementsByTagName("head")[0]);V.ra.Ca.KE.appendChild(h)}},d3:function(){var a="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");return function(b,c){var d=[],f;c=c||a.length;if(b)for(f=0;f< b;f++)d[f]=a[0|Math.random()*c];else{var g;d[8]=d[13]=d[18]=d[23]="-";d[14]="4";for(f=0;36>f;f++)d[f]||(g=0|16*Math.random(),d[f]=a[19===f?g&3|8:g])}return d.join("")}}()});window.AMap.Http={};window.AMap.Http.JSONP=V.ra.Ca;V.ra.XMLHttpRequest=V.ra.gw.extend({send:function(a,b,c){var d=this.y3=new XMLHttpRequest,f=this;d.onreadystatechange=function(){4===d.readyState&&200===d.status?f.w("complete",{url:a,data:d.responseText}):404===d.status&&(d.abort(),f.w("error",{url:a,data:"404"}))};d.open(b||"GET",a);"POST"===b&&d.setRequestHeader("Content-type","application/x-www-form-urlencoded");d.send(c||void 0)},abort:function(){this.y3.abort()}}); ', true), _jsload_('map', 'V.Ph=V.W.extend({D:function(a,b,c,d){this.start=a;this.end=b;this.transition=c;this.precision=d||0;this.Mk=!1;return this},Lk:function(a){this.ai=+new Date;this.frames=0;this.Me=a;this.startTime=+new Date;this.Mk=!0;this.tI=V.g.Ve(this.update,this,!1)},update:function(){this.tI=V.g.Ve(this.update,this,!1);this.frames+=1;var a=+new Date,b=a-this.startTime,b=this.transition?this.transition(this.start,this.end,b,this.frames,a-this.ai):null;"number"===typeof b&&Math.abs(b-this.end)<this.precision&&(this.stop(), b=this.end);this.ai=a;this.so.call(this.Me||this,b)},stop:function(a){V.g.Gl(this.tI);a&&this.update();this.Mk=!1}});V.Ph.Easing={Linear:{None:function(a){return a}},Bounce:{In:function(a){return 1-(a<1/2.75?7.5625*a*a:a<2/2.75?7.5625*(a-=1.5/2.75)*a+0.75:a<2.5/2.75?7.5625*(a-=2.25/2.75)*a+0.9375:7.5625*(a-=2.625/2.75)*a+0.984375)},Out:function(a){return V.Ph.Easing.Bounce.In(1-a)}},Cubic:{In:function(a){return 1-a*a*a},Out:function(a){a=1-a;return 1-a*a*a}}};V.$c=V.W.extend({ka:[V.ea,V.yd,V.nL],D:function(a,b){this.da=b;this.Aj="";this.Wg=this.bh=this.Fg=!1;this.C=a;this.yS();this.OZ();this.Q("zooms",b,!0);this.Q("size",b,!0);this.Q("limitBounds",b);this.Q("view",b);this.Q("nolimg",b,!0);this.Q("mapNumber",b,!0);this.Q("lang",b,!0);this.Q("features",b,!0);this.Q("styleID",b,!0);this.Q("forceBig",b,!0);this.Q("mode",b,!0);this.Q("showBuildingBlock",b,!0);this.Q("mapStyle",b);var c=this.get("mapStyle");this.ge=V.q.ge[c]||V.q.ge["default"];this.Q("editEnable", b);this.Hc&&this.Q("style",b,!0);this.Q("styleUrl",b);this.Q("hightlight",b,!0);this.Q("labelzIndex",b,!0);V.j.Ke&&(this.Ac=new V.S.yg(new X({zIndex:b.get("labelzIndex"),visible:!1}),this),this.Ac.type="\\u77e2\\u91cf\\u6807\\u6ce8",b.labelsLayer=this.Ac.Qa,this.Ac.Qa.e("complete",this.Kj,this,!0),this.Ac.Qa.e("renderComplete",this.Kj,this),this.Ac.Ep=this.Ac.fo=!0);this.Ak=new V.J.canvas.$c(this);this.Q("isHotspot",b,!0);this.Q("layers",b);this.Q("overlays",b);this.Q("infos",b,!0);this.Q("contextmenus", b,!0);this.Q("controls",b);this.Q("bounds",b);this.Q("draw",b);this.Uc("zoomAndCenter destroy defaultCursor jogEnable animateEnable baseRender overlayRender 3rdpartyDataEnable".split(" "),b);this.Uc("rotateEnable dragEnable keyboardEnable doubleClickZoom scrollWheel zoomEnable touchZoom".split(" "),b,!0);this.get("jogEnable")?this.Yq=!0:this.Yq=!1;this.YR();this.dS();this.$R();this.Q("resizeEnable",b);this.da.map=this;c=this.get("size");c=c.width*c.height/65536;V.j.Rc&&3<c&&(this.AI=!0);this.EM()}, editEnableChanged:function(){location.hostname.match(/.amap.com/)&&(this.Hc=this.get("editEnable"))},labelzIndexChanged:function(){this.Ac&&this.Ac.set("zIndex",this.get("labelzIndex"))},styleChanged:function(){this.Dh=!0},mapStyleChanged:function(){if(V.j.Ke){this.Aj&&(this.set("style",""),this.Jz=this.Aj="");var a=this.get("mapStyle");this.Dh=!0;this.ge=V.q.ge[a]||V.q.ge["default"];this.gv()}},styleUrlChanged:function(){if(V.j.Ke){var a=this.get("styleUrl")||"";if(a!==this.Aj){var a=a.substr(0, 46),b=a.split("amap://styles/")[1];"normal"===b?(this.Aj="",this.set("nolimg",!1),this.set("style",""),this.Jz=""):(this.PC=!0,this.set("nolimg",!0),b=new V.ra.Ca(32>b.length?V.q.pb+"/style?name="+b+"&key="+V.q.key:V.q.ec+"/v4/map/styles?styleid="+b+"&s=rsv3&key="+V.q.key,{callback:"callback"}),b.e("complete",function(a){a.data&&a.data.content?this.set("style",JSON.parse(a.data.content)):this.set("style","");this.PC=!1},this),b.e("error",function(){this.PC=!1},this),this.Aj=a)}}},I1:function(a){this.C.style.background= a},resizeEnableChanged:function(){},ZW:function(){var a=this.get("limitBounds"),b=this.get("bounds");b.mb.M>b.eb.M&&(b.eb.M+=360);if(!a.contains(b)){var c=this.get("center").Jb();a.Pe()<b.Pe()?c.M=a.Mf().M:(a.mb.M>b.mb.M&&(c.M+=a.mb.M-b.mb.M),a.eb.M<b.eb.M&&(c.M+=a.eb.M-b.eb.M));a.Ne()<b.Ne()?c.O=a.Mf().O:(a.mb.O>b.mb.O&&(c.O+=a.mb.O-b.mb.O),a.eb.O<b.eb.O&&(c.O+=a.eb.O-b.eb.O));return c}},Ay:function(){var a=this.xC;this.da.refreshSize();var b=this.get("size");b&&a&&!b.Lb(a)&&(this.xC=b,this.Av=!0, this.set("display"),this.FM(b),this.get("resizeEnable")&&this.pa("resize",{Q_:a,BL:b}))},dH:function(){var a=this;a.Ay();a.xy=setTimeout(function(){a.dH()},200)},eQ:function(){this.xy&&(clearTimeout(this.xy),this.xy=null)},yS:function(){this.xC=this.da.getSize();if(V.j.nd||V.j.r3&&V.j.KK||V.j.x_)this.dH();else{var a=this;V.B.gW(this.C,function(b){a.Ay(b)})}},OZ:function(){var a=this.C;V.f.tb(a,"amap-container");var b={};b.Ed=V.f.create("div",a,"amap-maps");this.jl=V.f.create("div",a);this.jl.style.display= "none";b.ak=V.f.create("div",b.Ed,"amap-drags");b.S=V.f.create("div",b.ak,"amap-layers");b.Ia=V.f.create("div",b.ak,"amap-overlays");b.controls=V.f.create("div",a,"amap-controls");b.qB=V.f.create("a",a,"amap-logo");var c=window.location.host;-1===c.indexOf("amap.com")&&-1===c.indexOf("gaode.com")&&(b.qB.href=V.j.U?"http://m.amap.com":"http://gaode.com",b.qB.target="_blank");V.f.create("img",b.qB).src=V.j.Rc?this.da.G.logoUrlRetina:this.da.G.logoUrl;b.ji=V.f.create("div",a,"amap-copyright");b.ji.style.display= "none";350<V.f.Nq(this.C).width&&(b.ji.innerHTML=this.da.G.copyright,b.ji.lL=V.f.create("span",b.ji,"amap-mcode"),this.gv());this.ab=b},gv:function(){var a=this.get("layers");if(a){for(var b=-1,c="",d=0;d<a.length;d+=1){var f=a[d].get("mapNumber"),g=a[d].getzIndex();f&&g>b&&a[d].get("visible")&&(c=f,b=g)}this.set("mapNumber",c);a=this.da.getMapStyle();"GS(2016)710"===c&&a&&"normal"!==a&&"amap://styles/normal"!==a&&(c="");c&&this.ab.ji.lL&&(this.ab.ji.lL.innerHTML="- "+c+"\\u53f7");return c}},WE:function(){V.j.qj&& V.Lm.flush()},Kj:function(){if(!this.Mz)if(this.da.Va)1===this.kl&&13===this.get("zoom")&&(V.g.Dq.stop(this.Bs),V.Ld.Ce.send({id:this.da.id,params:{fps:this.Bs.Dq,type:"fps",rs:this.get("baseRender")}}),this.kl=2),this.WE();else{for(var a=this.get("layers"),b=this.get("zoom"),c=0;c<a.length;c+=1){var d=a[c].get("zooms");if(!(!d||b>d[1]||b<d[0]||!a[c].get("visible")||a[c].S&&a[c].S.xa&&0===a[c].S.xa.length||a[c].S&&a[c].S.Va))return}this.Ac&&this.Ac.get("visible")&&!this.Ac.Va||(a={id:this.da.id}, V.Ld.Ce.end(V.extend(a,{key:"rd"})),V.Ld.Ce.send(V.extend(a,{params:{rs:this.get("baseRender")}})),this.da.Va=!0,this.set("display"),V.g.Ve(function(){this.w("complete");this.da&&this.da.zh&&this.da.zh.yy();this.WE()},this))}},layersChanged:function(){this.Ba=this.Ba||[];for(var a=this.get("layers"),b=this.Ba.length-1;0<=b;b-=1)this.Ba[b]===this.Zb||this.Ba[b]===this.Hk||this.Ba[b].Ep||this.Ba[b].Qa.Ep||-1!==V.g.indexOf(a,this.Ba[b].Qa)||(this.Ba[b].Ue(),this.Ba[b].Ok&&this.Ba[b].Ok.Ue(),this.Ba[b].Qa.F("complete", this.Kj,this),this.Ba[b].Qa.F("renderComplete",this.Kj,this),this.Ba=V.g.jj(this.Ba,b));for(var c=!1,d=!0,f=this.get("labelzIndex"),b=0;b<a.length;b+=1){if(a[b].mh)-1===V.g.indexOf(this.Ba,a[b].S)&&this.Ba.push(a[b].S);else{var g=this.jg(a[b]);g&&(this.Ba.push(g),a[b].mh=!0,a[b].S=g);a[b].e("complete",this.Kj,this,!0);a[b].e("renderComplete",this.Kj,this)}a[b].Ek&&a[b].get("visible")&&!a[b].pt&&(c=!0,!1===a[b].get("detectRetina")&&(d=!1),f=a[b].get("textIndex")||f)}a=V.g.indexOf(this.Ba,this.Ac); c?(-1===a&&this.Ba.push(this.Ac),this.Ac.ha=d&&V.j.ha,this.Ac.Lt(this.get("mapStyle")||"normal"),this.Ac.set("zIndex",f),this.Ac.set("visible",!0),this.da.Qq=!0,this.da.get("isHotspot")?this.Ac.b0():this.Ac.Dz()):(this.Ac&&(this.Ac.set("visible",!1),this.da.Qq=!1,this.Ac.Dz()),this.da.Qq=!1);this.da.isHotspotChanged();this.set("display",0);this.gv()},isHotspotChanged:function(){this.layersChanged()},controlsChanged:function(){var a=this.get("controls"),b,c;if(a.add&&0<a.add.length)for(;0<a.add.length;)b= a.add.shift(),(c=b.Dn||b.addTo)&&c.call(b,this.da,this.ab.controls);else if(a.remove&&a.remove.length)for(;0<a.remove.length;)b=a.remove.shift(),(c=b.xo||b.removeFrom)&&c.call(b,this.da,this.ab.controls)},eI:function(){if(!this.Mz){var a=this;this.hI=!1;a.Zb||(a.Zb=new V.S.jd(new Kc,a),a.Zb.wf=36,a.Zb.tg=36,a.Zb.set("zIndex",120),a.Ba.push(a.Zb),a.Zb.du=!0);for(var b=a.get("overlays"),c=[],d=0;d<a.Hb.length;d+=1)-1===V.g.indexOf(b,a.Hb[d].bc)&&(a.Hb[d].bc instanceof Ac||a.Hb[d].bc instanceof zc?a.Hb[d].Ue(): (a.Zb&&a.Hb[d]instanceof V.Ia.ee?(a.Zb.Hh=V.g.VX(a.Zb.Hh,a.Hb[d].I),a.Zb.qM([a.Hb[d].I])):a.Hk&&a.Hk.qM([a.Hb[d].I]),a.Hb[d].I.Z?(V.f.remove(a.Hb[d].I.Z),a.Hb[d].I.Z=null):a.Hb[d].I.la&&(V.f.remove(a.Hb[d].I.la.Pc),V.f.remove(a.Hb[d].I.la.jb),a.Hb[d].I.la=null),a.Hb[d].Eh&&a.Hb[d].Eh.stop(),a.Hb[d].bc.mh=!1,a.Hb[d].bc.Qi.map=null,a.Hb[d].bc.Ia=null,a.Hb[d].bc=null,a.Hb[d].I.$X(),a.Hb[d].I=null,a.Hb[d].Cm(),a.Hb[d].Qi=null,a.Hb[d].gj(),a.Hb[d].map=null),c.push(a.Hb[d]));for(d=0;d<c.length;d+=1)a.Hb= V.g.jj(a.Hb,V.g.indexOf(a.Hb,c[d]));var f=[],g=[];V.g.G1(function(b){if(!b.mh&&b.pj){var c=b.Ia||a.IW(b);c&&(a.Hb.push(c),c instanceof V.Ia.Rh||c instanceof V.Ia.Tv?c.FL(a):c instanceof V.Ia.ee?f.push(c.I):g.push(c.I),b.mh=!0)}},b);f.length&&a.Zb.Bl(f);g.length&&(a.Hk||(a.Hk=new V.S.jd(new Kc,a),a.Hk.set("zIndex",110),a.Ba.push(a.Hk)),a.Hk.Bl(g));a.set("display",0)}},overlaysChanged:function(){this.Hb=this.Hb||[];this.get("overlays")&&0===this.get("overlays").length?this.eI():this.hI||(V.g.Ve(this.eI, this),this.hI=!0)},contextmenusChanged:function(){var a=this.get("contextmenu");if(a){var b=this;V.Ra.load("overlay",function(){b.Wt=new V.Ia.Tv(a,b);b.set("display",0)})}},infosChanged:function(){var a=this.get("infos");if(a){this.vi=this.vi||{};var b,c=this;V.Ra.load("overlay",function(){for(var d in a)a.hasOwnProperty(d)&&(b=a[d],c.vi[d]=c.vi[d]||new V.Ia.Rh(b,c))})}},IW:function(a){var b=null;if(a instanceof Z)b=new V.Ia.ee(a,this);else if(a instanceof zc)b=new V.Ia.Tv(a,this);else if(a instanceof Ac)b=new V.Ia.Rh(a,this);else{var c=["overlay"];"d"===this.get("overlayRender")?(c.push("dvector"),V.j.oj?c.push("svg"):c.push("vml")):c.push("cvector");if(!this.g3&&!V.Ra.Cu(c)){var d=this;V.Ra.tf(c,function(){this.g3=!0;d.overlaysChanged()});return}a instanceof Ec?b=new V.Ia.hd(a,this):a instanceof Dc?b=new V.Ia.zd(a,this):a instanceof Cc&&(b=new V.Ia.Ji(a,this))}return b},N4:function(){function a(){}var b=new V.S.jd,c=[],d=new V.P(116.405467,39.907761);new V.style.Ad.Vr;for(var f=0;100>f;f+=1)for(var g= 0;100>g;g+=1){var h=new V.P(d.M+0.02*g,d.O+0.02*f),h=new V.de({name:"point"+(100*f+g),map:this,za:new V.fa.Be(this.Db(h))});c[100*f+g]=h;h.e("hover",a,h)}b.Bl(c);this.Ba.push(b)},bb:function(){},M4:function(a){var b=new V.S.jd,c=[],c=(new V.dO({map:this})).dv(a);b.Bl(c);this.Ba.push(b);this.set("display",0)},jg:function(a){a=a.jg(this);if(!a)return null;if(a.length){var b=this;V.Ra.tf(a,function(){b.layersChanged()})}else return a;return null},S5:function(){return this.ab},i7:function(){this.set("display", 0)},displayChanged:function(a){this.EM(a)},EM:function(a){if(a)if(V.g.Gl(this.lv),V.j.Gg){var b=this;setTimeout(function(){b.ve()},0)}else this.ve();else this.To||(this.lv=V.g.Ve(this.ve,this),this.To=!0)},ve:function(){if(!this.Mz){this.w("render");this.To=!1;var a={};if(this.Ba){for(var b=[],c=0,d=this.Ba.length;c<d;c+=1)b.push(this.Ba[c]),this.Ba[c].Ok&&b.push(this.Ba[c].Ok);b.sort(function(a,b){var c=a.get("zIndex"),d=b.get("zIndex");return c>d?1:c===d?a.sw>b.sw?1:-1:-1});a.Ba=b;a.size=this.get("size"); b=V.j.ha?Math.min(window.devicePixelRatio||1,2):1;a.zW=15E5<a.size.width*a.size.height*b*b;a.U=V.j.U;a.Y=this.da.CA();a.N=this.da.view.get("resolution");a.hm=this.get("mapStyle");a.Dh=this.Dh;a.xc=this.Wg;a.Kd=this.Fg;a.pg=this.bh;a.IC=this.bh&&V.j.U;a.BN=V.j.U&&this.Fg;a.Iv=V.j.U&&this.Wg;this.Iv=a.Iv;a.Xo=a.Y.zoom>this.get("targetLevel");a.J_=!0;a.AI=this.AI;for(var b=!1,f,c=!1,d=0;d<this.Ba.length;d+=1)this.Ba[d].zi&&this.Ba[d].get("visible")&&a.Y.zoom<=this.Ba[d].get("zooms")[1]&&(a.iC=!0),this.Ba[d].tk().Rc&& (b=!0);for(d=0;d<this.Ba.length;d+=1)this.Ba[d].Qa.yI&&a.iC&&(!this.Fg&&this.Ba[d].Qa.get("visible")&&(f=this.Ba[d].Qa.yI(),f.m6=1,f.zoom=a.Y.zoom),c=!0);c?f&&this.Gb!==f&&(this.Gb=f):this.Gb=[];a.Gb=this.Gb;a.Rc=b;a.scale=Math.pow(2,a.Y.zoom-a.Y.Kc);this.Eq=a;this.Ak.ve(a);this.Dh=!1}}},Q5:function(){return this.Ak},QY:function(){var a=[],b=this.get("controls").zc,c;for(c in b)b[c].Wn&&b[c].Wn()&&a.push(b[c].Wn());return a},destroyChanged:function(){this.Mz=1;this.R={};this.Ac&&(this.Ac.Qa.F("complete", this.Kj,this),this.Ac.Ue(),this.Ba=V.g.jj(this.Ba,V.g.indexOf(this.Ba,this.Ac)));this.cV&&clearTimeout(this.cV);this.LU();this.TS();this.hy&&this.hy();this.LV();this.Cm();this.da=this.da.map=null;this.C=this.C.zw=null;this.Wd&&(this.Wd.stop(),this.Wd=null);this.Yc&&(this.Yc.stop(),this.Yc=null);this.Wb&&(this.Wb.stop(),this.Wb=null)},LV:function(){var a=this.C;this.eQ();V.B.kX(a);V.f.pM(a);this.jl=null;V.f.Ab(a,"amap-container");this.ab=null},jogEnableChanged:function(){this.get("jogEnable")?this.Yq= !0:this.Yq=!1},drawChanged:function(){var a=this,b,c,d=this.get("draw");if(d){this.nj||(this.nj=[]);b=0;for(c=this.nj.length;b<c;b+=1)this.nj[b].S0();V.Ra.load("interaction",function(){var b=new V.M3({type:d,S:a.Hk},a);a.nj.push(b);a.loaded=!0})}else if(this.nj)for(b=0,c=this.nj.length;b<c;b+=1)this.nj[b].S0(),this.nj[b].c5(),this.F("click",this.nj[b].d6,this)},sg:function(a,b){return this.da.view.sg(a,b)},fk:function(a,b){return this.da.view.fk(a,b)}});V.$c.Yb({YR:function(){this.Ip=!1;V.j.vd&&this.DP();V.j.U||this.AP()},LU:function(){V.j.vd&&this.YS();V.j.U||this.US()},rotateEnableChanged:function(){this.ur=this.get("rotateEnable");V.j.vd&&(this.ur?this.AW():this.P_());this.rotation=this.ur?this.get("rotation"):0;this.set("rotation",this.rotation);this.set("display")},zoomEnableChanged:function(){this.get("zoomEnable")?(V.j.vd&&this.BI(),V.j.U||this.CP()):(V.j.vd&&this.DL(),V.j.U||this.XS())},mousewheelChanged:function(){},jL:function(a){a&&this.s_(a.xl)}, s_:function(a){this.Ip=a},IN:function(){this.Ip=!1},Og:function(a,b){var c,d={};a||(a=window.event);var f=V.B.Jg(a,this.ab.Ed);V.j.vd&&("touchend"!==a.type?this.R.cG=f:f=this.R.cG);d.Ub=f;d.Ik=this.fk(f);d.Qe=this.ek(f);(f=!1!==this.Ip?this.Ip?[this.Ip]:null:this.bR(d.Ik))&&0<f.length&&f[0].Uj&&(c=f[0].Uj,d.xl=f[0]);c||(c=this);d.le=c;d.d4=a.altKey;d.ctrlKey=a.ctrlKey;d.button=void 0===a.button?0:a.button;!b&&a.preventDefault&&a.preventDefault();return d},SF:function(a){return a&&a!==this&&a!==document}, hH:function(){if((!this.rh||this.rh.Mk)&&this.R.yq&&this.R&&this.R.Pf){var a=this.R.yq.Ub.Xa(this.R.Pf);a.x||a.y?(this.R.bh=!0,this.R.il||(this.R.zq.w("dragstart",this.R.lJ),this.R.il=!0),this.R.zq.w("dragging",this.R.yq),this.R.Pf=this.R.yq.Ub):this.R.bh=!1}},g2:function(a){for(var b=[],c=0;c<a.length;c+=1)a[c]&&(b=b.concat(a[c]));return b},kr:function(a,b){return a&&b&&(a.x-b.x)*(a.x-b.x)+(a.y-b.y)*(a.y-b.y)<(V.j.U?18:10)},bR:function(a){var b,c=this;this.Ba.sort(function(a,b){return a.get("zIndex")> b.get("zIndex")?-1:1});this.Ak.mA(a,this.Ba,function(a){b=a;b=c.g2(b)},function(){b=[]});return b}});V.$c.Yb({dS:function(){this.e("moveend",this.ML,this);V.j.Gg&&(V.j.LC||V.j.mz)&&this.e("zoomend",this.WC,this);this.e("movestart",this.NL,this);this.e("zoomstart",this.SL,this);this.e("zoomend",this.RL,this);this.Fw();this.kl=0;this.Bs={};"undefined"===typeof window.requestAnimationFrame&&(this.kl=2)},SL:function(){2!==this.kl&&12===this.get("zoom")&&(this.kl=1,V.g.Dq.start(this.Bs));this.Fg=!0},RL:function(){1===this.kl&&13!==this.get("zoom")&&(this.kl=0,V.g.Dq.cancel(this.Bs));this.Fg=!1;this.set("display")}, TS:function(){this.F("moveend",this.ML,this);V.j.Gg&&(V.j.LC||V.j.mz)&&this.F("zoomend",this.WC,this);this.F("movestart",this.NL,this);this.F("zoomstart",this.SL,this);this.F("zoomend",this.RL,this);this.VS()},ML:function(a){this.bh=!1;this.FM();!a.VK&&this.get("limitBounds")?(a=this.ZW())&&!a.Lb(this.get("center"))?this.yv(this.get("zoom"),a,!1,!0):this.pa("moveend"):this.pa("moveend");this.set("display")},NL:function(){this.bh=!0},dragEnableChanged:function(){(this.eu=this.get("dragEnable"))?this.Ew(): this.gy()},pa:function(a,b){var c;b&&(c=b.BL?{type:a,newsize:b.BL,oldsize:b.Q_}:{type:a,pixel:b.Ub,target:this.da,lnglat:b.Qe});this.da.w(a,c)},Fw:function(){this.e("click",this.zG);this.e("dblclick",this.BG);V.j.vd&&this.FP();V.j.U||this.BP()},VS:function(){this.F("click",this.zG);this.F("dblclick",this.BG);V.j.vd&&this.ZS();V.j.U||this.WS()},Zs:function(a,b){var c=this.get("targetLevel")||this.get("zoom"),c=0<b?Math.floor(c)+1:Math.ceil(c)-1,c=Math.min(Math.max(c,this.get("zooms")[0]),this.get("zooms")[1]); c===this.get("zoom")||this.Yc&&this.Yc.Mk&&c===this.Yc.end||this.Pr(c,!1,a)},zG:function(a){this.pa("click",a)},BG:function(a){this.get("doubleClickZoom")&&this.get("zoomEnable")&&this.Zs(a.Ik,1);this.pa("dblclick",a)},x4:function(a){this.Zs(a.F7,a.G7);this.pa("touchend",a)},Ew:function(){this.eu&&(this.e("dragstart",this.EG),this.e("dragging",this.CG),this.e("dragend",this.DG))},gy:function(){this.eu||(this.F("dragstart",this.EG),this.F("dragging",this.CG),this.F("dragend",this.DG))},EG:function(a){this.jL(a); this.Wg=!0;this.R.mJ=a.Ub.x;this.R.nJ=a.Ub.y;this.Wd&&(this.Wd.stop(),this.gu(!0));this.pa("dragstart");this.pa("movestart");this.w("movestart",a);this.m2()},CG:function(a){var b=this.R,c=a.Ub.x-b.mJ,d=a.Ub.y-b.nJ;if(d||c){this.R.bh=!0;b.mJ=a.Ub.x;b.nJ=a.Ub.y;a=c;var b=d,f=this.ur?this.rotation:0;f&&(f*=Math.PI/180,a=c*Math.cos(f)+Math.sin(f)*d,b=-Math.sin(f)*c+Math.cos(f)*d);a=this.get("centerCoords").Xa((new V.K(a,b)).Bc(this.N));(b=this.QI(a))&&(d=Math.round(this.sg(b).Xa(this.sg(a)).y));this.tj(this.ab.ak, c,d);a.x=(a.x+V.g.Wa)%V.g.Wa;this.set("centerCoords",a,!0);this.set("center",this.uf(a),!0);this.Yq&&(this.ai?(a=new Date,this.ll=100<a-this.ai?new V.K(0,0):new V.K(c,d),this.ai=a):this.ai=new Date);this.pa("dragging");this.pa("mapmove")}else this.R.bh=!1,this.ll=null},tj:function(a,b,c){if(a&&!(1>Math.abs(b)&&1>Math.abs(c))){var d=parseFloat(a.style.top)||0,f=parseFloat(a.style.left)||0,g="";this.rotation&&(g=V.f.Sk[V.f.Nd]+":rotate("+this.rotation+"deg);overflow:visible;");a.style.cssText="position:absolute;top:"+ (d+c)+"px;left:"+(f+b)+"px;"+g}},QI:function(a){var b=this.da.view.PD(),c=this.xC.height*this.N/2;return a.y<b.pd+c?(a.y=b.pd+c,a):a.y>b.od-c?(a.y=b.od-c,a):null},DG:function(){this.IN();100<new Date-this.ai&&(this.ll=null);this.R.Pf=null;this.Wg=!1;this.pa("dragend");if(this.Yq&&this.ll)if(this.R.bh){var a=this.ll,b=new V.K(0,0);this.Wd=new V.Ph(a,b,function(a,b,f){return 600<=f?b:a.Bc(1-Math.pow(f/600,2)).floor()},1);this.Wd.so=function(a){if(2>Math.abs(a.x)&&2>Math.abs(a.y))this.Wd.stop(),this.w("moveend"), this.gu(),this.ll=this.ai=null;else{var b=a.x,f=a.y,g=this.ur?this.rotation:0;g&&(g*=Math.PI/180,b=a.x*Math.cos(g)+Math.sin(g)*a.y,f=-Math.sin(g)*a.x+Math.cos(g)*a.y);b=this.get("centerCoords").Xa((new V.K(b,f)).Bc(this.N));f=this.QI(b);g=a.y;f&&(g=Math.round(this.sg(f).Xa(this.sg(b)).y));this.tj(this.ab.ak,a.x,g);b.x=(b.x+V.g.Wa)%V.g.Wa;this.set("centerCoords",b,!0);this.set("center",this.uf(b),!0);this.pa("mapmove")}};this.Wd.Lk(this)}else this.w("moveend"),this.gu(!0),this.ll=this.ai=null;else this.w("moveend"), this.gu(),this.ll=this.ai=null},m2:function(){if(!this.R.refresh){var a=this;this.R.refresh=setInterval(function(){a.set("display",0)},V.j.U?400:100)}},WC:function(){if(V.j.Gg&&(V.j.LC||V.j.mz)){for(var a=this.ab.S.childNodes,b=0;b<a.length;b+=1){var c=a[b];c instanceof HTMLCanvasElement&&(c.width=0);"amap-e"===c.className&&(c.style.height="0")}for(b=0;b<this.Ba.length;b+=1)c=this.Ba[b],"undefined"!==typeof AMap.IndoorMap&&c instanceof AMap.IndoorMap&&(c.yl&&(c.yl.width=0),c.zn&&(c.zn.width=0))}}, gu:function(a){this.R.refresh&&(clearInterval(this.R.refresh),this.R.refresh=null);a||(this.WC(),this.set("display",0))},FM:function(a){this.set("refresh",a)}});V.$c.Yb({setZoomSlow:function(a){this.yv(a,null,!this.get("animateEnable"))},setPanTo:function(a){this.yv(null,a,!this.get("animateEnable"))},zoomAndCenterChanged:function(a){var b=a[0];b<this.get("zooms")[0]&&(b=this.get("zooms")[0]);b>this.get("zooms")[1]&&(b=this.get("zooms")[1]);this.yv(b,a[1],a[2]||!this.get("animateEnable"))},zoomChanged:function(){this.N=Math.pow(2,20-this.get("zoom"));this.w("closeOverlays");this.set("display",0)},rotationChanged:function(){this.rotation=this.get("rotateEnable")? this.get("rotation"):0;this.set("display",0)},centerCoordsChanged:function(){this.w("closeOverlays");this.set("display",0)}});V.$c.Uv=V.W.extend({D:function(a){this.wc=a;this.wl=["zooms","visible","opacity","zIndex"];this.Hp=!1;this.hQ=this.HP();this.wc.e("zoomend",this.Jy,this);this.wc.e("moveend",this.Jy,this);this.Jy()},HP:function(){for(var a=[[69,2],[72,14],[89,4],[96,4],[193,2],[196,14],[213,4],[220,4],[317,2],[320,14],[337,4],[344,4],[441,1],[444,14],[461,4],[468,4],[565,1],[568,14],[585,4],[592,4],[689,1],[692,14],[709,4],[716,4],[813,1],[816,14],[833,4],[840,4],[940,14],[957,4],[964,4],[1064,15],[1081,4],[1088, 4],[1188,16],[1205,4],[1212,4],[1312,21],[1336,4],[1436,21],[1460,4],[1560,21],[1584,4],[1684,21],[1708,4],[1808,21],[1832,4],[1932,21],[1956,4],[2056,21],[2080,4],[2180,21],[2204,4],[2304,21],[2328,4],[2428,21],[2452,4],[2552,22],[2576,4],[2676,22],[2700,4],[2800,22],[2824,4],[2924,22],[2948,4],[3048,22],[3072,4],[3172,22],[3196,4],[3295,23],[3320,4],[3418,24],[3444,4],[3541,26],[3568,4],[3664,27],[3692,4],[3788,27],[3816,4],[3912,32],[4036,32],[4160,32],[4285,31],[4394,4],[4409,31],[4517,5],[4531, 33],[4640,9],[4655,33],[4764,12],[4777,35],[4887,50],[5009,1],[5011,50],[5133,53],[5257,53],[5381,60],[5506,59],[5631,58],[5742,4],[5755,58],[5859,2],[5865,6],[5879,58],[5977,8],[5987,10],[5999,2],[6002,59],[6100,78],[6222,80],[6344,82],[6464,1],[6466,84],[6586,88],[6708,90],[6831,91],[6955,91],[7078,92],[7202,92],[7327,91],[7451,91],[7575,91],[7698,92],[7820,94],[7942,96],[8065,97],[8187,99],[8310,100],[8435,99],[8558,100],[8681,101],[8805,101],[8929,102],[9053,104],[9179,3],[9183,100],[9307,104], [9435,101],[9561,48],[9613,49],[9663,1],[9686,44],[9745,44],[9810,33],[9871,42],[9934,32],[9997,40],[10058,32],[10120,41],[10181,30],[10244,42],[10306,27],[10369,3],[10374,39],[10434,18],[10501,37],[10558,19],[10626,36],[10683,18],[10752,35],[10807,17],[10880,32],[10937,10],[10997,39],[11061,9],[11121,31],[11155,5],[11186,5],[11245,31],[11311,3],[11370,29],[11494,26],[11624,18],[11748,17],[11873,16],[11997,15],[12123,13],[12246,13],[12370,12],[12498,1],[12500,2]],b=[],c=0,d=a.length;c<d;c++)for(var f= a[c][0],g=f+a[c][1];f<g;f++)b[f]=1;return b},BS:function(a,b){var c=parseInt((a-73)/0.5),d=parseInt((b-3.5)/0.5);return 0>d||101<=d||0>c||124<=c?!1:1===this.hQ[124*d+c]},qP:function(){var a=this.wc.da.getBounds();if(a){for(var a=[a.Mf(),a.Mq(),a.Kq(),a.wh(),a.sk()],b=0,c=a.length;b<c;b++)if(this.BS(a[b].XJ(),a[b].VJ()))return!0;return!1}},Jy:function(){if(!this.yH){var a=this;a.yH=setTimeout(function(){a.yH=null;a.yQ()},0)}},yQ:function(){var a=this.hR();0<a.length&&10<=this.wc.get("zoom")&&!1=== this.qP()?this.tV(a):this.LR(a)},jQ:function(a){if(a.pt)for(var b=0,c=this.wl.length;b<c;b++)a.F(this.wl[b],a.pt.Zx)},qV:function(a,b){this.jQ(a);if(a.pt=b)for(var c=0,d=this.wl.length;c<d;c++)a.e(this.wl[c],b.Zx)},JH:function(a,b){b&&(b.JS=a);for(var c=0,d=a.length;c<d;c++)this.qV(a[c],b)},hR:function(){for(var a=this.wc.Ba,b=[],c=0,d=a.length;c<d;c++)a[c]!==this.bf&&a[c].Qa instanceof X&&a[c].Qa.$A()&&b.push(a[c]);return b},pV:function(a){var b=this;a.Zx=function(){a.pG||(a.pG=setTimeout(function(){a.pG= null;b.KS(a)},0))}},nQ:function(a,b){for(var c=0,d=this.wl.length;c<d;c++)a.set(this.wl[c],b.get(this.wl[c]))},KS:function(a){var b=a.JS;if(b&&b.length)for(var c=0,d=b.length;c<d;c++){if(!(b[c]instanceof V.S.yg)){this.nQ(a,b[c]);break}}else console.warn("No moni layers")},tV:function(a){if(!this.Hp){this.Hp=!0;this.bf||(this.bf=new V.S.Yf(new X.Uv,this.wc),this.bf.Ek=!1,this.bf.Ep=!0,this.pV(this.bf));var b=this.wc.Ba;0>b.indexOf(this.bf)&&b.push(this.bf);this.JH(a,this.bf);this.bf.Zx();this.sV(); this.wc.layersChanged();this.wc.da.w("googleTileVisibleChanged",{display:!0})}},Hx:function(){return this.Hp},LR:function(a){this.Hp&&(this.Hp=!1,this.JH(a,null),this.bf&&(this.bf.set("visible",!1),a=this.wc.Ba,V.g.jj(a,a.indexOf(this.bf)),this.bf.Ue(),this.bf.Qa.F("complete",this.wc.Kj,this.wc),this.bf=null),this.KR(),this.wc.layersChanged(),this.wc.da.w("googleTileVisibleChanged",{display:!1}))},gF:function(a,b,c){if(!a)return null;a=V.f.getElementsByClassName(b,c,a);return a.length?a[0]:null}, gR:function(a){var b=this.wc.ab;if(b&&b.ji){var c=this.gF(b.ji,"google-copyright","span");!c&&a&&(c=V.f.create("span",b.ji,"google-copyright"),c.innerHTML=" - Data &copy; Google");return c}},XH:function(a){var b=this.gR(a);b&&(b.style.display=a?"":"none");this.wc.ab&&(b=this.gF(this.wc.ab.ji,"amap-mcode","span"))&&(b.style.display=a?"none":"")},sV:function(){this.XH(!0)},KR:function(){this.XH(!1)}});V.$c.Yb({$R:function(){this.get("3rdpartyDataEnable")&&(this.xF=new V.$c.Uv(this))},Hx:function(){return this.xF&&this.xF.Hx()}});V.OO=V.W.extend({ka:[V.ea,V.yd],D:function(a,b){this.map=a;this.xe(b,!0);this.centerChanged();a.Uc("center centerCoords zoom scale rotation resolution".split(" "),this);this.Uc(["crs"],a)},getResolution:function(a){return this.map.wq.xA(a||this.get("zoom"))},PD:function(){this.tw||this.sX();return this.tw},sX:function(){var a;if(this.get("center")instanceof V.P){a=new V.wd(-180,-85,180,85);var b=this.map.Db(a.wh());a=this.map.Db(a.sk());this.tw={Se:b.x,pd:b.y,be:a.x,od:a.y}}else a=this.map.get("limitBounds"), this.tw={Se:a[0],pd:a[1],be:a[2],od:a[3]}},CA:function(){var a=this.map,b=this.get("zoom");return{zoom:b,hi:this.get("center"),ta:this.Un(),Ga:this.get("centerCoords"),rotation:a.get("rotateEnable")&&parseInt(this.get("rotation"))||0,te:a.get("crs"),N:Math.pow(2,20-b),Kc:Math.round(b),Gd:Math.pow(2,20-Math.round(this.get("zoom")))}},centerChanged:function(){this.set("centerCoords",this.map.Db(this.get("center")),!0)},centerCoordsChanged:function(){var a=this.map,b=this.PD(),c=this.get("centerCoords"), d=a.getSize(),f=this.get("zoom",null,!0),a=this.get("center",null,!0),d=d.height*Math.pow(2,20-f)/2;a instanceof V.P?c.x=(c.x+268435456)%268435456:0>c.x?c.x=0:c.x>b.be&&(c.x=b.be);c.y<b.pd+d?c.y=b.pd+d:c.y>b.od-d&&(c.y=b.od-d);this.set("center",this.map.uf(c),!0)}});V.PO=V.OO.extend({Un:function(){var a=this.map.get("size"),b=this.get("centerCoords"),c=(this.map.get("rotateEnable")&&parseInt(this.get("rotation")))%360||0,d=this.get("zoom",null,!0),f=Math.pow(2,20-d),c=Math.PI*c/180,a=new V.K((Math.abs(a.width*Math.cos(c))+Math.abs(a.height*Math.sin(c)))/2,(Math.abs(a.width*Math.sin(c))+Math.abs(a.height*Math.cos(c)))/2),f=new V.fe(b.Xa(a.Bc(f)),b.add(a.Bc(f))),c=this.map.get("targetLevel");if(c>d-1){var g=Math.pow(2,20-c);f.ON=new V.fe(b.Xa(a.Bc(g)),b.add(a.Bc(g)))}f.u2= c||d;f.gb=a;return f},sg:function(a,b){this.map.get("size");var c=a.Jb(),d=this.get("centerCoords"),c=c.Xa(d);c.x<-V.g.Wa/2?c.x+=V.g.Wa:c.x>V.g.Wa/2&&(c.x-=V.g.Wa);var d=this.map.get("size").Lo().Ob(2),f=(this.map.get("rotateEnable")?this.get("rotation"):0)*Math.PI/180;return d.add((new V.K(c.x*Math.cos(f)-Math.sin(f)*c.y,Math.sin(f)*c.x+Math.cos(f)*c.y)).Bc(Math.pow(2,(b||this.get("zoom"))-20)))},fk:function(a,b){var c=this.map.get("size").Lo().Ob(2),d=a.Xa(c),f=(this.map.get("rotateEnable")?this.get("rotation"): 0)*Math.PI/180,c=d.x*Math.cos(f)+Math.sin(f)*d.y,d=-Math.sin(f)*d.x+Math.cos(f)*d.y,c=this.get("centerCoords").add((new V.K(c,d)).Bc(Math.pow(2,20-(b||this.get("zoom")))));c.x=(c.x+268435456)%268435456;return c}}); ', true), _jsload_('anip', 'V.$c.Yb({Pr:function(a,b,c,d){function f(b){var d=this.sg(c);this.set("zoom",b);var f=this.sg(c).Xa(d),k=(this.ur?this.rotation:0)*Math.PI/180,d=f.x*Math.cos(k)+Math.sin(k)*f.y,f=-Math.sin(k)*f.x+Math.cos(k)*f.y;this.set("centerCoords",this.get("centerCoords").add((new V.K(d,f)).Bc(this.N)));d&&f&&this.pa("mapmove");b===a&&Math.floor(a)===a&&(this.set("targetLevel",null),g&&(this.pa("zoomchange"),this.pa("zoomend")),h&&this.w("moveend"),this.w("zoomend"),this.Yc=null)}if(V.j.U||V.j.nd)b=!0;a=a||this.get("zoom"); a=Math.min(Math.max(a,this.get("zooms")[0]),this.get("zooms")[1]);var g=a!==this.get("zoom"),h=!!c;this.Wd&&(this.Wd.stop(),this.Wd=null);c=c||this.get("centerCoords");var k;this.Wb&&this.Wb.Mk&&(this.Wb.stop(),this.Wb.KA&&(d=!0),this.Wb.Pq&&(k=!0),this.Wb=null,this.set("targetLevel",null));this.Yc&&this.Yc.Mk&&(this.Yc.stop(),d=!0,this.Yc.Pq&&(k=!0),this.Yc=null,this.set("targetLevel",null));g&&!d&&this.pa("zoomstart");h&&!k&&this.pa("movestart");this.w("zoomstart");b?f.call(this,a):(this.Yc=new V.Ph(this.get("zoom"), a,null,0.02),this.Yc.KA=g,this.Yc.Pq=h,this.Yc.transition=function(a,b,c){return c>=V.q.Dt?b:(b-a)*(1-Math.pow(1-c/V.q.Dt,4))+a},this.Yc.so=f,this.Yc.Lk(this),this.set("targetLevel",a))},yv:function(a,b,c,d){a||(a=this.Wb?this.Wb.t2:this.get("targetLevel")||this.get("zoom"));b||(b=this.Wb?this.Wb.rN:this.get("center"));var f=a!==this.get("zoom"),g=!b.Lb(this.get("center")),h=!1,k=!1;this.Yc&&this.Yc.Mk&&(this.Yc.stop(),h=!0,this.Yc.Pq&&(k=!0),this.Yc=null,this.set("targetLevel",null));this.Wb&&this.Wb.Mk&& (this.Wb.stop(),this.Wb.KA&&(h=!0),this.Wb.Pq&&(k=!0),this.Wb=null,this.set("targetLevel",null));this.Wd&&(this.Wd.stop(),this.Wd=null);if(f||g){if(!this.get("bounds").contains(b)||f&&(V.j.U||V.j.nd))c=!0;if(c)f&&(h||(this.w("zoomstart"),this.pa("zoomstart")),this.set("zoom",a),this.pa("zoomchange"),this.pa("zoomend"),this.w("zoomend")),g&&(k||d||(this.pa("movestart"),this.w("movestart")),this.set("center",b),this.pa("mapmove"),this.w("moveend",{VK:d})),this.set("targetLevel",null);else{this.set("targetLevel", a);var l=a-this.get("zoom"),m=b.Xa(this.get("center"));this.Wb=new V.Ph(1,0,null,0.001);this.Wb.KA=f;this.Wb.Pq=g;this.Wb.rN=b;this.Wb.t2=a;this.Wb.transition=function(a,b,c){return Math.pow(1-Math.min(V.q.Dt,c)/V.q.Dt,2)};this.Wb.so=function(c){if(0.02>c)this.Wb&&(this.Wb.stop(),this.Wb=null),f&&(this.set("zoom",a),this.pa("zoomchange"),this.pa("zoomend"),f=!1,this.w("zoomend")),g&&(c=b,this.set("center",c),this.w("mapmove"),this.w("moveend",{VK:d})),this.set("targetLevel",null);else if(f&&this.set("zoom", a-l*c),g){c=b.Xa(m.Bc(c));if(V.j.U){var h=this.rb(this.get("center")),k=this.rb(c);this.tj(this.ab.ak,h.x-k.x,h.y-k.y);this.set("center",c,!0);this.set("centerCoords",this.Db(c),!0)}else this.set("center",c);this.pa("mapmove")}this.set("display",1)};this.Wb.Lk(this);f&&!h&&(this.w("zoomstart"),this.pa("zoomstart"));!g||k||d||(this.w("movestart"),this.pa("movestart"))}}}}); ', true), _jsload_('layers', 'V.S={}; V.S.Wf=V.W.extend({ka:[V.ea,V.yd],D:function(a,b){this.Qa=a;this.Zc=[3,18];this.sw=V.g.Bb(this);a&&this.Uc(["opacity","visible","zIndex","zooms"],a);this.l=b;this.Q("display",b)},Ue:function(){this.zi&&this.Dz();if(V.Aa&&V.Aa.Wk&&V.Aa.Wk.length){var a=V.g.indexOf(V.Aa.Wk,this);-1!==a&&(V.Aa.Wk=V.g.jj(V.Aa.Wk,a))}if(a=this.ob){if(a.length)for(var b=0;b<a.length;b+=1)a[b].parentNode&&a[b].parentNode.removeChild(a[b]);else a.parentNode&&a.parentNode.removeChild(a);this.ob=null}this.Qa.Ue&&this.Qa.Ue();this.Qa.mh= !1;this.Qa.S=null;this.Cm();this.J&&(this.J.iJ(),this.J=null)},pa:function(a,b){this.Qa.w(a,b)},visibleChanged:function(){this.set("display",0)},zIndexChanged:function(){this.set("display",0)},tC:function(a){V.f.Nk(a,this.opacity)},opacityChanged:function(){var a=this.get("opacity");this.opacity=Math.min(Math.max(0,a),1);if(a=this.ob)if(a.length)for(var b=0;b<a.length;b+=1)this.tC(a[b]);else this.tC(a)},lA:function(){var a=this.get("bounds");if(a){if(a instanceof V.wd){var b=a.wh(),c=a.sk(),d=this.l.Db(new V.P(180, 0)).x,f=this.l.Db(b),g=this.l.Db(c),h=this.l.get("center");b.M>c.M&&(0<h.M?g.x+=d:f.x-=d);this.A=[f.x,f.y,g.x,g.y]}a instanceof V.fe&&(this.A=[a.hb.x,a.hb.y,a.$b.x,a.$b.y]);return this.A}return null}});function Vc(a,b,c){this.z=a;this.x=b;this.y=c}Vc.prototype.Jb=function(){return new Vc(this.z,this.x,this.y)};Vc.prototype.toString=function(){return[this.z,this.x,this.y].join("/")};V.Yf=function(a,b){this.Fa=a;this.key=a.toString();this.url=b};V.Qh=Vc;V.S.Yf=V.S.Wf.extend({D:function(a,b,c,d,f){arguments.callee.cb.apply(this,arguments);this.Q("tileSize",a);this.Q("tiles",a);this.Uc(["zooms","type","detectRetina","tileFun","errorUrl"],a);this.Q("lang",b,!0);this.Q("mapStyle",b,!0);this.Q("style",b,!0);this.Q("features",b,!0);var g="overlayer"===a.get("type");this.Ug=!g&&!V.j.U;if(V.j.nd||V.j.f8)this.Ug=!1;var h=b.get("size"),h=h.width*h.height/65536;this.ha=V.j.U&&V.j.ha&&this.get("detectRetina");V.j.Rc&&V.j.U&&9<h&&(this.Ug=!1);this.Vh=!g;this.Wh= !g;this.Q("reload",a);this.B2=c;this.Rf=d;this.GZ=f},langChanged:function(){this.set("reload");this.Qa.tm()},mapStyleChanged:function(){this.set("reload");this.Qa.tm()},styleChanged:function(){this.l.Hc||(this.set("reload"),this.Qa.tm())},featuresChanged:function(){this.set("reload");this.Qa.tm()},reloadChanged:function(){this.set("display",0)},tileFunChanged:function(){this.set("reload")},tk:function(){return{fd:this.get("tileSize"),visible:this.get("visible"),A:this.lA(),Zc:this.get("zooms"),It:this.Ug, Vh:this.Vh,Wh:this.Wh,opacity:this.get("opacity"),ri:this.B2||this.get("tileFun"),Rc:this.Qa.Ek?!1:this.get("detectRetina")&&V.j.ha&&V.j.U}},ki:function(a){if(V.J.uc.Sg)return new V.J.uc.Sg(this,a)}});V.S.jd=V.S.Wf.extend({D:function(a,b){this.Eb=Math.min(2,window.devicePixelRatio||1);this.Rc=V.j.ha&&!a.yi;this.map=b;this.Rk=0;this.yh=!1;this.tg=this.wf=0;this.Hh=[];arguments.callee.cb.apply(this,arguments);this.lm=[];this.Lf=new V.S.hD;a&&(this.Q("style",a),this.Q("cursor",a,!0),this.j2=a.get("stable")||!1,this.Q("dataSources",a),this.Q("bubble",a));this.Q("display",b);this.xP()},tk:function(){return{visible:this.get("visible"),Zc:this.get("zooms"),opacity:this.get("opacity"),zIndex:this.get("zIndex"), mq:this.Qa.get("alwaysRender")||!1}},dataSourcesChanged:function(){var a=this.get("dataSources");a&&a.length?"string"===typeof a?(new V.ra.Ca(a)).e("complete",function(a){this.ZL(a.data);this.ik=a.data;this.yh=!0;this.set("display");this.Va=!0;this.Qa.w("complete")},this):a.length&&(this.ZL(a),this.ik=a,this.yh=!0,this.set("display"),this.Va=!0,this.Qa.w("complete")):this.clear()},getDatas:function(){return this.ik},X2:function(){if(this.Qa.yi){var a=this.Lh;this.wf=a.wf;this.tg=a.tg}},pa:function(a, b){var c={type:a,data:"mouseout"===a?this.uS||null:b.xl.Da,target:this.Qa};this.uS="mouseout"===a?null:b.xl.Da;this.Qa.w(a,c)},y4:function(){},wb:function(a){this.pa(a.type,a)},xP:function(){this.e("click",this.wb);this.e("dblclick",this.wb);this.e("mousedown",this.wb);this.e("mouseup",this.wb);this.e("mouseover",this.wb);this.e("mouseout",this.wb);this.e("touchstart",this.wb);this.e("touchend",this.wb)},H4:function(){this.F("click",this.wb);this.F("dblclick",this.wb);this.F("mousedown",this.wb); this.F("mouseup",this.wb);this.F("mouseover",this.wb);this.F("mouseout",this.wb);this.F("touchstart",this.wb);this.F("touchend",this.wb)},styleChanged:function(){this.Lh=this.get("style");this.X2();this.set("display",0)},ZL:function(a){if(a){this.clear();for(var b=0;b<a.length;b+=1){var c=a[b].lnglat;a[b].lnglat=V.g.ma(c);c=this.map.Db(c);c=new V.de({name:"point-"+V.g.Bb(this),za:new V.fa.Be([c.x,c.y],!0)});c.Uj=this;c.Da=a[b];this.Bt(c)}}},$J:function(a){if("geojson"===a)return new V.dO({map:this.map}); if("topjson"===a)return new V.W3({map:this.map});if("subway"===a)return new V.T3({map:this.map})},w0:function(a){if(a){var b=[],b=[],c={};if(a.rules){for(var b=a.rules,d=0,f=b.length;d<f;d+=1){for(var g=[],h=b[d].symbolizers,k=0,l=h.length;k<l;k+=1)h[k].fill&&(g[k]=new V.style.Ad.iD(h[k].fill)),h[k].stroke&&(g[k]=new V.style.Ad.DD(h[k].stroke));h=g;b[d].Ev=h;b[d]=new V.style.zO(b[d])}c.rules=b}if(a.symbolizers){b=a.symbolizers;a=0;for(d=b.length;a<d;a+=1)b[a].fill&&(b[a]=new V.style.Ad.iD(b[a].fill)), b[a].stroke&&(b[a]=new V.style.Ad.DD(b[a].stroke));c.Ev=b}a=new V.jw(c)}else a=new V.jw({});this.set("style",a);return a},G4:function(a,b){if(-1===V.g.indexOf(a,V.q.pb)){var c=new V.ra.Ca(a);c.e("complete",function(c){c=this.xa[a]=this.$J(b).dv(c);this.Bl(c);this.pa("complete")},this);c.e("error",this.bb,this)}else(new V.ra.XMLHttpRequest(a)).e("complete",function(c){c=eval("("+c.data+")");c=this.xa[a]=this.$J(b).dv(c);this.Bl(c)},this)},K0:function(a){a.Jk>this.Ck&&(this.Ck=a.Jk,this.no=this.Ck/ this.map.get("resolution",20))},Bt:function(a){this.Lf.add(a);if(!this.du&&!this.Qa.yi){if(0===a.name.indexOf("circle")){a.e("rad",this.K0,this);var b=a.get("radius");this.Ck?b>this.Ck&&(this.Ck=b,this.no=this.Ck/this.map.get("resolution",20)):(this.Ck=b,this.no=this.Ck/this.map.get("resolution",20))}b=a.get("strokeWeight")||0;if(!this.oo||b>this.oo)this.oo=b}this.j2||a.Q("feature",this,!0)},Bl:function(a){this.yh=!0;for(var b=0,c=a.length;b<c;b+=1)this.Bt(a[b])},clear:function(){this.yh=!0;this.ik= [];this.Lf.clear();this.set("display",0)},vh:function(a){var b;return 0>a[0]?(b=[a[0]+V.g.Wa,a[1],V.g.Wa,a[3]],a=[0,a[1],a[2],a[3]],b=this.Lf.vh(b),a=this.Lf.vh(a),V.extend(b,a)):a[2]>V.g.Wa?(b=[a[0],a[1],V.g.Wa,a[3]],a=[0,a[1],a[2]-V.g.Wa,a[3]],b=this.Lf.vh(b),a=this.Lf.vh(a),V.extend(b,a)):this.Lf.vh(a)},P5:function(a){var b,c=this.get("style"),d=a.vg;c instanceof V.jw||(c=this.w0(c));if(d&&0<d.length)b=c.cJ(d,a);else{if(c.KM.length||c.vg.length)b=c.FX(a);b||(b=a.XY())}return b},nK:function(a){function b(a, b){return a.Rn-b.Rn}var c=[],d,f,g,h,k,l={};for(d in a)if(a.hasOwnProperty(d)){g=a[d];h=g.get("zIndex");for(f in l)if(l.hasOwnProperty(f)&&(k=c[l[f]][2],k===h))break;"undefined"===typeof l[h]&&(c.push([[],[],h]),l[h]=c.length-1);h=c[l[h]];h[0].push(g)}c.sort(this.f2);a=0;for(d=c.length;a<d;a+=1)c[a][0].sort(b);return c},featureChanged:function(a){this.yh=!0;var b=a.target,c=b.za;0!==this.Lf.bZ([V.g.Bb(b)]).length&&(this.Lf.remove(b,a.mm),c&&!a.UX&&this.Lf.add(b))},qM:function(a){this.yh=!0;for(var b, c=0,d=a.length;c<d;c+=1)b=a[c],b.za.mm=null,b.nk(!0),b.Ii("feature")},A7:function(a,b){return a[1].zIndex===b[1].zIndex?V.g.Bb(a[1])-V.g.Bb(b[1]):a[1].zIndex-b[1].zIndex},f2:function(a,b){return a[2]-b[2]},s7:function(a){return a.T5()===V.S.b4.R3},ki:function(a){return this.du?new V.J.dd.dl(this,a):"c"===this.map.get("overlayRender")&&V.J.canvas.dl?new V.J.canvas.dl(this,a):V.J.uc.dl&&"d"===this.map.get("overlayRender")?new V.J.uc.dl(this,a):null}});V.S.hD=V.W.extend({D:function(){this.clear()},clear:function(){this.am=[];this.cC=new V.Xf},add:function(a){var b=V.g.Bb(a),c=a.za;this.am[b]||(this.count+=1,this.am[b]=a,c&&!V.A.Lb(c.lc(),[Infinity,Infinity,-Infinity,-Infinity])&&this.cC.xu(c.lc(),a))},J5:function(){return this.am},vh:function(a){return this.cC.B1(a)},bZ:function(a){var b=a.length,c=[],d;for(d=0;d<b;d+=1)this.am[a[d]]&&c.push(this.am[a[d]]);return c},remove:function(a,b){var c=V.g.Bb(a).toString(),d=a.za;this.am[c]&&(this.am[c]= null,d&&(c="undefined"!==typeof b?b:d.lc(),this.cC.remove(c,a)))}});function Wc(a,b,c){this.url=a;this.sc=b;this.IJ=c;this.fj=this.lC=!1}function Xc(a,b,c){var d=Yc;return function(){return d.call(this,a,b,c)}}function Yc(a,b,c){a.w5=+new Date;a.loaded=b;clearTimeout(a.D2);var d=a.o_;d.vj.remove(a.url)&&d.vS();d=a.WZ?a.xa:a.va;a.xa=null;(c||b||a.IJ)&&a.sc(b?d:null,a);a.YK?(a.YK.gj(),a.YK=null):d&&(d.onload=null,d.onerror=null,d.onabort=null,a.va=null)} V.oD=V.W.extend({f4:"assets/image/blank.gif",D:function(a,b,c){this.timeout=b||15E3;this.rm=new V.xd(1024);this.vj=new V.xd(1024);this.ZI=a;this.uJ=c},oE:function(a){a&&this.vj.count>=this.ZI&&(a=this.vj.Cb.Ma.value,a.fj&&(this.vj.remove(a.url),this.VD(a)));for(;this.rm.count&&!(this.vj.count>=this.ZI);)this.zQ(this.rm.shift())},vS:function(){if(!this.qE){this.qE=!0;var a=this;setTimeout(function(){a.qE=!1;a.oE()},0)}},zQ:function(a){var b=document.createElement("img");b.src=a.url;a.va=b;a.o_=this; a.startTime=+new Date;a.lC=!0;b.complete?Yc(a,!0):(this.vj.set(a.url,a),b.onload=Xc(a,!0),b.onerror=Xc(a,!1,!0),b.onabort=Xc(a,!1),a.D2=setTimeout(Xc(a,!1,!0),this.timeout))},VD:function(a){a.lC&&(Yc(a,!1),a.fj=!0,a.L4=!0)},y6:function(a,b,c){return this.fL(a.url,b,c,!0,a.Fa.z+"_"+a.Fa.x+"_"+a.Fa.y)},fL:function(a,b,c,d,f){var g=this.vj.get(a);if(g&&g.fj)g.fj=!1,g.sc=b,g.IJ=c;else{g=new Wc(a,b,c);g.WZ=d;g.key=f;if(this.rm.get(V.g.Bb(g)))return;this.rm.set(V.g.Bb(g),g);this.oE(!0)}return g},RW:function(a){a.fj|| (a.fj=!0,this.rm.remove(V.g.Bb(a)))},clear:function(a){this.rm.forEach(function(a){a.fj=!0});this.rm.clear();if(a)for(;a=this.vj.pop();)this.VD(a);else this.vj.forEach(function(a){a.fj=!0})}});var Zc=function(){function a(a){this.ow[V.g.Bb(a)]=a;return this}function b(a){this.ow[V.g.Bb(a)]=null;return this}return function(){function c(){var a=c.ow,b,g=[],h;for(h in a)Object.prototype.hasOwnProperty.call(a,h)&&g.push(a[h]);for(a=g.length-1;0<=a;a-=1)h=g[a].apply(this,arguments),void 0!==h&&(b=h);return b}c.ow={};c.WV=a;c.g7=b;return c}}(); V.xd=V.W.extend({ka:[V.ea],D:function(a,b){this.Lj=a|0;this.hs=!!b;this.count=0;this.IL=Zc();this.clear();this.Rs=[]},ar:function(){return!this.count},l6:function(){return this.count>=this.Lj},w7:function(a){this.Lj!==a&&(this.Lj=a|0)&&this.aI(this.Lj)},zc:function(a){return!!this.l[a]},get:function(a,b){var c=this.UE(a);return c?c.value:b},set:function(a,b){var c=this.UE(a);c?c.value=b:(c=new V.xd.bl(a,b),this.l[a]=c,this.KF(c),this.count+=1)},Dj:function(a){this.remove(a)},remove:function(a){return Object.prototype.hasOwnProperty.call(this.l, a)?(this.Up(this.l[a]),!0):!1},forEach:function(a,b){for(var c=this.Cb.next;c!==this.Cb;c=c.next)a.call(b,c.value,c.key,this)},uo:function(a,b){return Object.prototype.hasOwnProperty.call(this.l,a)?this.l[a].value:b},Y6:function(){return this.Cb.next.value},Z6:function(){return this.Cb.Ma.value},shift:function(){return this.eH(this.Cb.next)},iX:function(){this.Rs.length=0},r_:function(a){this.Rs.push(a)},push:function(a){a=new V.xd.bl("",a);0===this.count?(this.Cb.Ma=null,a.Ma=this.Cb,this.Cb.next= a):(this.cq.next=a,a.Ma=this.cq);this.count+=1;this.cq=a},Nv:function(a){a=new V.xd.bl("",a);0===this.count?(this.Cb.Ma=null,a.Ma=this.Cb,this.cq=this.Cb.next=a):(this.Cb.next.Ma=a,a.next=this.Cb.next,a.Ma=this.Cb,this.Cb.next=a);this.count+=1},M_:function(){if(this.count){this.count-=1;var a=this.Cb.next;a.next?(a.next.Ma=this.Cb,this.Cb.next=a.next):(this.Cb.next=null,this.cq=this.Cb.Ma=null);a.next=null;a.Ma=null;return a.value}return null},pop:function(){return this.eH(this.Cb.Ma)},UE:function(a){if(Object.prototype.hasOwnProperty.call(this.l, a))return a=this.l[a],this.hs&&(a.remove(),this.KF(a)),a},KF:function(a){this.hs?(a.next=this.Cb.next,a.Ma=this.Cb,this.Cb.next=a,a.next.Ma=a):(a.Ma=this.Cb.Ma,a.next=this.Cb,this.Cb.Ma=a,a.Ma.next=a);this.Lj&&this.hV(this.Lj)},hV:function(){var a=this;a.dq||(a.dq=setTimeout(function(){a.dq=null;a.aI(a.Lj)},0))},aI:function(a){this.dq&&(clearTimeout(this.dq),this.dq=null);for(var b=this.hs?this.Cb.Ma:this.Cb.next,c={},d=0,f=this.Rs.length;d<f;d++)c[this.Rs[d]]=!0;for(;b&&this.count>a&&(d=this.hs? b.Ma:b.next,b.key&&!c[b.key]&&(this.Up(b),this.IL(b.value)),b=d,b!==this.Cb&&b!==this.cq););},Up:function(a){a.remove();delete this.l[a.key];this.count-=1},eH:function(a){this.Cb!==a&&this.Up(a);return a.value},clear:function(){this.l={};this.Cb=new V.xd.bl("",null);this.Cb.Ma=this.Cb.next=this.Cb;this.count=0}});V.xd.bl=function(a,b){this.key=a;this.value=b};V.xd.bl.prototype.Ma=null;V.xd.bl.prototype.next=null; V.xd.bl.prototype.remove=function(){this.Ma.next=this.next;this.next.Ma=this.Ma;this.next=this.Ma=null};V.Xf=V.W.extend({D:function(a){this.qL="undefined"!==typeof a?a:6;this.Lu=Math.floor(this.qL/2);this.rv={A:[Infinity,Infinity,-Infinity,-Infinity],Ha:[]};this.count=0},cX:function(a,b){var c=-1,d=[],f;d.push(b);var g=b.Ha;do{-1!==c&&(d.push(g[c]),g=g[c].Ha,c=-1);for(var h=g.length-1;0<=h;h-=1){var k=g[h];if("undefined"!==typeof k.fm){c=-1;break}var l=V.Xf.Ho(k.A[2]-k.A[0],k.A[3]-k.A[1],k.Ha.length+1),k=V.Xf.Ho((k.A[2]>a.A[2]?k.A[2]:a.A[2])-(k.A[0]<a.A[0]?k.A[0]:a.A[0]),(k.A[3]>a.A[3]?k.A[3]:a.A[3])- (k.A[1]<a.A[1]?k.A[1]:a.A[1]),k.Ha.length+2);if(0>c||Math.abs(k-l)<f)f=Math.abs(k-l),c=h}}while(-1!==c);return d},xu:function(a,b,c){a={A:a,fm:b};"undefined"!==typeof c&&(a.type=c);this.JK(a,this.rv);this.count+=1},JK:function(a,b){var c;if(0===b.Ha.length)b.A=V.A.Jb(a.A),b.Ha.push(a);else{var d=this.cX(a,b),f=a;do{if(c&&"undefined"!==typeof c.Ha&&0===c.Ha.length){var g=c;c=d.pop();for(var h=0,k=c.Ha.length;h<k;h+=1)if(c.Ha[h]===g||0===c.Ha[h].Ha.length){c.Ha.splice(h,1);break}}else c=d.pop();g=f instanceof Array;if("undefined"!==typeof f.fm||"undefined"!==typeof f.Ha||g){if(g){g=0;for(h=f.length;g<h;g+=1)V.A.extend(c.A,f[g].A);c.Ha=c.Ha.concat(f)}else V.A.extend(c.A,f.A),c.Ha.push(f);c.Ha.length<=this.qL?f={A:V.A.Jb(c.A)}:(f=g=this.h_(c.Ha),1>d.length&&(c.Ha.push(g[0]),d.push(c),f=g[1]))}else V.A.extend(c.A,f.A),f={A:V.A.Jb(c.A)}}while(0<d.length)}},h_:function(a){for(var b=this.z0(a);0<a.length;)this.A0(a,b[0],b[1]);return b},z0:function(a){for(var b=a.length-1,c=0,d=a.length-1,f=0,g=a.length-2;0<= g;g-=1){var h=a[g];h.A[0]>a[c].A[0]?c=g:h.A[2]<a[b].A[1]&&(b=g);h.A[1]>a[f].A[1]?f=g:h.A[3]<a[d].A[3]&&(d=g)}Math.abs(a[b].A[2]-a[c].A[0])>Math.abs(a[d].A[3]-a[f].A[1])?b>c?(b=a.splice(b,1)[0],c=a.splice(c,1)[0]):(c=a.splice(c,1)[0],b=a.splice(b,1)[0]):d>f?(b=a.splice(d,1)[0],c=a.splice(f,1)[0]):(c=a.splice(f,1)[0],b=a.splice(d,1)[0]);return[{A:V.A.Jb(b.A),Ha:[b]},{A:V.A.Jb(c.A),Ha:[c]}]},A0:function(a,b,c){for(var d=V.Xf.Ho(b.A[2]-b.A[0],b.A[3]-b.A[1],b.Ha.length+1),f=V.Xf.Ho(c.A[2]-c.A[0],c.A[3]- c.A[1],c.Ha.length+1),g,h,k,l=a.length-1;0<=l;l-=1){var m=a[l],n=[b.A[0]<m.A[0]?b.A[0]:m.A[0],b.A[2]>m.A[2]?b.A[2]:m.A[2],b.A[1]<m.A[1]?b.A[1]:m.A[1],b.A[3]>m.A[3]?b.A[3]:m.A[3]],n=Math.abs(V.Xf.Ho(n[1]-n[0],n[3]-n[2],b.Ha.length+2)-d),m=[c.A[0]<m.A[0]?c.A[0]:m.A[0],c.A[2]>m.A[2]?c.A[2]:m.A[2],c.A[1]<m.A[1]?c.A[1]:m.A[1],c.A[3]>m.A[3]?c.A[3]:m.A[3]],m=Math.abs(V.Xf.Ho(m[1]-m[0],m[3]-m[2],c.Ha.length+2)-f),p=Math.abs(m-n);if(!h||!g||p<g)h=l,g=p,k=m<n?c:b}d=a.splice(h,1)[0];b.Ha.length+a.length+1<= this.Lu?(b.Ha.push(d),V.A.extend(b.A,d.A)):c.Ha.length+a.length+1<=this.Lu?(c.Ha.push(d),V.A.extend(c.A,d.A)):(k.Ha.push(d),V.A.extend(k.A,d.A))},remove:function(a,b){var c=[];c[0]={A:a};(c[1]=b)||(c[1]=!1);c[2]=this.rv;this.count-=1;if(!1===c[1]){var d=0,f=[];do d=f.length,f=f.concat(this.tM.apply(this,c));while(d!==f.length);return f}return this.tM.apply(this,c)},tM:function(a,b,c){var d=[],f=[],g=[];if(!a||!V.A.Yd(a.A,c.A))return g;a=V.A.Jb(a.A);var h;f.push(c.Ha.length);d.push(c);do{c=d.pop(); var k=f.pop()-1;if("undefined"!==typeof b)for(;0<=k;){var l=c.Ha[k];if(V.A.Yd(a,l.A))if(b&&"undefined"!==typeof l.fm&&l.fm===b||!b&&("undefined"!==typeof l.fm||V.A.$I(a,l.A))){"undefined"!==typeof l.Ha?(g=this.Eo(l,!0,[],l),c.Ha.splice(k,1)):g=c.Ha.splice(k,1);V.Xf.eC(c);b=void 0;c.Ha.length<this.Lu&&(h=this.Eo(c,!0,[],c));break}else"undefined"!==typeof l.Ha&&(f.push(k),d.push(c),c=l,k=l.Ha.length);k-=1}else if("undefined"!==typeof h){c.Ha.splice(k+1,1);0<c.Ha.length&&V.Xf.eC(c);k=0;for(l=h.length;k< l;k+=1)this.JK(h[k],c);h.length=0;0===d.length&&1>=c.Ha.length?(h=this.Eo(c,!0,h,c),c.Ha.length=0,d.push(c),f.push(1)):0<d.length&&c.Ha.length<this.Lu?(h=this.Eo(c,!0,h,c),c.Ha.length=0):h=void 0}else V.Xf.eC(c)}while(0<d.length);return g},search:function(a,b){return this.Eo({A:a},!1,[],this.rv,b)},B1:function(a,b){return this.Eo({A:a},!1,[],this.rv,b,!0)},Eo:function(a,b,c,d,f,g){var h={},k=[];if(!V.A.Yd(a.A,d.A))return c;k.push(d.Ha);do{d=k.pop();for(var l=d.length-1;0<=l;l-=1){var m=d[l];if(V.A.Yd(a.A, m.A))if("undefined"!==typeof m.Ha)k.push(m.Ha);else if("undefined"!==typeof m.fm)if(b)c.push(m);else if("undefined"===typeof f||m.type===f)m=m.fm,"undefined"!==typeof g?h[V.g.Bb(m)]=m:c.push(m)}}while(0<k.length);return"undefined"!==typeof g?h:c}});V.Xf.eC=function(a){var b=a.Ha.length,c=a.A;if(0===b)V.A.empty(c);else{var d=a.Ha[0].A;c[0]=d[0];c[2]=d[2];c[1]=d[1];c[3]=d[3];for(d=1;d<b;d+=1)V.A.extend(c,a.Ha[d].A)}};V.Xf.Ho=function(a,b,c){var d=(a+b)/2;a*=b;return a*c/(a/(d*d))}; ', true), _jsload_('overlay0', 'V.Ia=V.Ia||{}; V.Ia.Fj=V.W.extend({ka:[V.ea,V.yd],k0:["position","visible","clickable","bubble"],D:function(a,b){this.map=b;this.Uc(this.k0,a);this.Q("zIndex",a);this.Q("draggable",a);V.j.vd&&this.EP();V.j.U||this.Fw();this.bc=a;this.bc.Ia=this},draggableChanged:function(){this.get("draggable")?this.Ew():this.gy()},pa:function(a,b){var c;c=b?{type:a,pixel:b.Ub,target:this.bc,lnglat:b.Qe}:{type:a};this.bc&&this.bc.w(a,c)},wb:function(a){("click"!==a.type&&"rightclick"!==a.type&&"dblclick"!==a.type||this.get("clickable"))&& this.pa(a.type,a)},Dw:function(){this.e("click",this.wb);this.e("rightclick",this.wb);this.e("dblclick",this.wb)},cI:function(){this.F("click",this.wb);this.F("rightclick",this.wb);this.F("dblclick",this.wb)},Fw:function(){this.get("clickable")&&this.Dw();this.e("mousemove",this.wb);this.e("mouseout",this.wb);this.e("mouseover",this.wb);this.e("mousedown",this.wb);this.e("mouseup",this.wb)},J4:function(){this.cI();this.F("mousemove",this.wb);this.F("mouseout",this.wb);this.F("mouseover",this.wb); this.F("mousedown",this.wb);this.F("mouseup",this.wb)},clickableChanged:function(){this.get("clickable")?this.Dw():this.cI()},EP:function(){this.get("clickable")&&this.Dw();this.e("touchstart",this.wb,this);this.e("touchmove",this.wb,this);this.e("touchend",this.wb,this)},Ew:function(){this.e("dragstart",this.rl);this.e("dragging",this.pl);this.e("dragend",this.ql)},rl:function(a){this.map.jL(a);this.Pf=a.Ub;this.pa("dragstart",a)},pl:function(a){var b=a.Ub.Xa(this.Pf),c=b.x,b=b.y;this.Pf=a.Ub;var d= this.map.get("rotation")*Math.PI/180;this.tj(new V.K(c*Math.cos(d)+Math.sin(d)*b,-Math.sin(d)*c+Math.cos(d)*b));this.pa("dragging",a)},ql:function(a){this.map.IN();this.pa("dragend",a)},gy:function(){this.F("dragstart",this.rl);this.F("dragging",this.pl);this.F("dragend",this.ql)},eF:function(a){var b,c,d=[];b=0;for(c=a.length;b<c;b+=1)d.push(this.nx(a[b]));return d},nx:function(a){a=this.map.Db(a);return[a.x,a.y]},ed:function(a){var b=this.I.Ua||this.map.get("centerCoords"),c=Math.pow(2,20-this.map.get("zoom")); return[(a[0]-b.x)/c,(a[1]-b.y)/c]}});V.Ia.ee=V.Ia.Fj.extend({UB:"content contentDom icon opacity angle autoRotation offset shadow title label isTop shape topWhenClick topWhenMouseOver noSelect".split(" "),iW:{AMAP_ANIMATION_NONE:!1,AMAP_ANIMATION_DROP:V.Ph.Easing.Bounce,AMAP_ANIMATION_BOUNCE:V.Ph.Easing.Cubic},D:function(a,b){arguments.callee.cb.apply(this,arguments);this.Uc(this.UB,a);this.Q("move",a);this.JW();this.Fl();this.set("AnimationOffset",new V.K(0,0),!0);this.Q("raiseOnDrag",a);this.Q("animation",a)},Ex:function(a,b,c){if(this.get("animation")&& "AMAP_ANIMATION_NONE"!==this.get("animation")){var d=this;this.Eh=new V.Ph;this.Eh.transition=function(c,g,h){if(a&&600<=h)return d.Eh.stop(),0;c=0===Math.floor(h/600)%2?"Out":"In";"out"===b?c="Out":"in"===b&&(c="In");return d.iW[d.get("animation")][c](h%600/600)};c=c||40;this.Eh.so=function(a){d.set("AnimationOffset",d.iy.add(new V.K(0,-1*c*a)))};this.iy=new V.K(0,0);this.Eh.Lk()}},AnimationOffsetChanged:function(){this.positionChanged()},nH:function(){this.Eh&&(this.Eh.stop(),this.set("AnimationOffset", this.iy));this.set("AnimationOffset",new V.K(0,-40));if(this.Vo)this.Vo.set("position",this.get("position"));else{var a=new Z({zIndex:this.get("zIndex")-1,icon:new Qc({image:V.q.pb+"/theme/v1.3/dragCross.png",size:new V.ac(14,11)}),offset:new V.K(-4,-5),position:this.get("position")});a.ga=!0;this.Vo=a}this.Vo.setMap(this.map.da)},LE:function(){this.set("animation","AMAP_ANIMATION_DROP",!0);this.Ex(!0,"in");this.Vo.setMap(null)},animationChanged:function(){this.Eh&&(this.Eh.stop(),this.set("AnimationOffset", this.iy),this.Eh=null);var a=this.get("animation");a&&"AMAP_ANIMATION_NONE"!==a&&("AMAP_ANIMATION_DROP"===a?this.Ex(!0,"in",100):this.Ex())},Wg:function(){this.Vo&&this.Vo.set("position",this.get("position"))},raiseOnDragChanged:function(){this.get("raiseOnDrag")?(this.e("dragstart",this.nH,this),this.e("dragging",this.Wg,this),this.e("dragend",this.LE,this)):(this.F("dragstart",this.nH,this),this.F("dragging",this.Wg,this),this.F("dragend",this.LE,this))},tj:function(a){var b=this.get("position"); a=this.map.Db(b).add(a.Bc(Math.pow(2,20-this.map.get("zoom"))));b instanceof V.P?this.set("position",this.map.uf(a)):this.set("position",a)},JW:function(){var a=this.get("content"),b=this.get("shadow"),c=this.get("offset"),d=this.get("label"),a=a?this.FI(a,c):this.sz(this.get("icon"),c);this.set("contentDom",a,!0);b&&(b=this.II(b,c),this.set("shadowDom",b,!0));d&&d.content&&this.set("labelDom",this.HI(d.content),!0)},HI:function(a){var b=document.createElement("div");b.className="amap-marker-label"; b.innerHTML=a;return b},Fl:function(){var a=this.get("position");if(this.map&&a&&!this.I){var b=this.map,a=this.map.Db(a),a=this.I=new V.de({name:"marker-"+V.g.Bb(this),map:b,za:new V.fa.Be([a.x,a.y])});a.Uj=this;this.Q("coords",a,!0);a.Uc(["offset","isTop","zIndex","params","noSelect"],this)}},getParams:function(){return{zIndex:this.get("zIndex"),rI:this.get("angle"),gk:this.get("contentDom"),$Z:this.get("labelDom"),c2:this.get("shadowDom"),opacity:this.get("opacity"),title:this.get("title"),label:this.get("label"), aD:this.get("AnimationOffset"),offset:this.get("offset"),ZZ:this.get("isTop"),shape:this.get("shape"),visible:this.get("visible")}},offsetChanged:function(){if(this.I&&this.I.Z){var a=this.map.Db(this.get("position")).Xa(this.I.oa).Ob(Math.pow(2,20-this.map.get("zoom")));this.I.Z&&(this.I.Z.style.left=Math.round(a.x)+this.get("offset").x+this.get("AnimationOffset").x+"px",this.I.Z.style.top=Math.round(a.y)+this.get("offset").y+this.get("AnimationOffset").y+"px")}},positionChanged:function(){if(this.I){var a= this.map.Db(this.get("position"));this.set("coords",[a.x,a.y]);this.map&&(this.I.vO=!0,this.offsetChanged())}},contentChanged:function(){if(this.I){this.map.Zb.Oq=!0;-1===V.g.indexOf(this.map.Zb.Hh,this.I)&&this.map.Zb.Hh.push(this.I);this.I.Z&&this.I.Z.removeChild(this.get("contentDom"));var a=this.get("content"),b=this.get("offset"),a=this.FI(a,b);this.set("contentDom",a);this.I.Z?(V.j.Mg&&V.g.iepngFix(a),this.I.Z.appendChild(a),this.I.gk=a):this.map&&this.map.set("display")}},iconChanged:function(){if(this.I&& this.I.Z&&!this.get("content")){this.map.Zb.Oq=!0;-1===V.g.indexOf(this.map.Zb.Hh,this.I)&&this.map.Zb.Hh.push(this.I);this.I.Z&&this.get("contentDom")&&this.I.Z.removeChild(this.get("contentDom"));var a=this.get("icon"),b=this.get("offset"),a=this.sz(a,b);this.set("contentDom",a);this.I.Z?(V.j.Mg&&V.g.iepngFix(a),this.I.Z.appendChild(a),this.I.gk=a):this.map&&this.map.set("display")}},shadowChanged:function(){if(this.I&&this.I.Z){var a=this.get("shadowDom");this.I.Z&&a&&a.parentNode===this.I.Z&& this.I.Z.removeChild(a);if(a=this.get("shadow")){var b=this.get("offset"),a=this.II(a,b);this.set("shadowDom",a);this.I.Z&&this.I.Z.appendChild(a)}}},titleChanged:function(){this.I&&this.I.gk&&"string"===typeof this.get("title")&&this.I.gk&&this.get("title")&&(this.I.gk.title=this.get("title"))},labelChanged:function(){if(this.I&&this.I.Z){var a=this.get("label"),b=this.I.Z;if(b&&a&&a.hasOwnProperty("content")){this.get("labelDom")&&b.removeChild(this.get("labelDom"));var c="";if(a.content){var c= this.HI(a.content),d=0,f=0;a.offset&&(d=a.offset.y+"px",f=a.offset.x+"px");c.style.top=d;c.style.left=f;b.appendChild(c)}this.set("labelDom",c)}}},isTopChanged:function(){var a=this.map.Zb.Hv,b=this.get("isTop"),c=this.get("zIndex");a?a===this?this.I&&this.I.Z&&(this.I.Z.style.zIndex=b?this.map.Zb.Rk+10:c,this.map.Zb.Hv=b?this:null):(a.I&&a.I.Z&&(a.I.Z.style.zIndex=b?a.get("zIndex"):this.map.Zb.Rk+10),this.I&&this.I.Z&&(this.I.Z.style.zIndex=b?this.map.Zb.Rk+10:c),this.map.Zb.Hv=b?this:a):(this.map.Zb.Hv= this,this.I&&this.I.Z&&(this.I.Z.style.zIndex=b?this.map.Zb.Rk+10:c))},visibleChanged:function(){this.I&&this.I.Z&&(this.get("visible")?this.I.Z.style.display="block":this.I.Z.style.display="none")},angleChanged:function(){if(this.I&&this.I.Z){var a={x:-1*this.get("offset").x,y:-1*this.get("offset").y};V.f.rotate(this.I.Z,this.get("angle")||0,a)}},zIndexChanged:function(){var a=this.get("zIndex");if(a>this.map.Zb.Rk){this.map.Zb.Rk=a;var b=this.map.Zb.Hv;b&&b.I&&b.I.Z&&(b.I.Z.style.zIndex=a+10)}this.I&& this.I.Z&&(this.I.Z.style.zIndex=this.get("isTop")?this.map.Zb.Rk+10:this.get("zIndex"))},opacityChanged:function(){var a=this.get("contentDom"),b=this.get("shadowDom");a&&V.f.Nk(a,this.get("opacity"));b&&V.f.Nk(b,this.get("opacity"))},FI:function(a){var b;b=document.createElement("div");b.className="amap-marker-content";"string"!==typeof a?b.appendChild(a):(b.innerHTML=a,b.childNodes[0]&&!b.childNodes[0].style&&(b.style["white-space"]="pre"));V.f.Nk(b,this.get("opacity"));return b},sz:function(a){var b, c=0,d=0,f,g,h,k;a?("string"===typeof a?(b=a,k=!0):(b=a.get("image"),d=a.get("size"),f=a.get("imageSize"),c=d.width,d=d.height,f&&(g=f.width,h=f.height)),c||(c=0),d||(d=0),a="string"!==typeof a?a.get("imageOffset"):{x:0,y:0}):(b=V.q.Re+"/mark_bs.png",a={x:0,y:0},c=19,d=33,g=19,h=33);f=document.createElement("div");f.className="amap-icon";f.style.position="absolute";k&&!V.j.nd&&(f.style.overflow="inherit");c&&(f.style.width=c+"px");d&&(f.style.height=d+"px");c=document.createElement("img");c.src=b; g&&h&&(c.style.width=g+"px",c.style.height=h+"px");c.style.top=a.y+"px";c.style.left=a.x+"px";V.j.nd&&k||f.appendChild(c);V.f.Nk(V.j.nd&&k?c:f,this.get("opacity"));return V.j.nd&&k?c:f},II:function(a,b){var c=this.sz(a,b);c.style.zIndex=-1;return c},moveChanged:function(){var a=this.get("move");if(!1===a)return this.o2();void 0!==a&&("pause"===a.action?this.y0():"[object Array]"===Object.prototype.toString.call(a.Qe)?a.Qe&&("resume"===a.action&&this.Os?this.moveTo(a.Qe[a.Qe.Xi||0],a.speed,a.La):(this.Os&& this.w("movestop"),a.Qe.Xi=0,this.set("position",a.Qe[0]),this.G_(a.Qe,a.speed,a.La,a.eX))):this.moveTo(a.Qe,a.speed,a.La,!0))},moveTo:function(a,b,c,d){var f=this.get("position");a.Xa(f);var g=Math.round(a.Kf(f)/1E3/b*36E5);if(0===g)return this.w("moveend");this.Te&&(this.Te.stop(),this.Te=null);this.Te=new V.Ph(f,a);c=c||function(a){return a};this.Te.transition=function(a,b,d){if(d>=g)return b;var f=(b.M-a.M)*c(d/g)+a.M;a=(b.O-a.O)*c(d/g)+a.O;return new V.P(f,a)};this.Te.so=function(b){this.set("position", b);d&&this.bc.w("moving",{passedPath:[this.Te.start,this.get("position")]});this.w("moving");b.Lb(a)&&(this.Te&&(this.Te.stop(),this.Te=null),this.bc.w("moveend"),this.w("moveend"))};this.get("autoRotation")&&!V.j.nd&&(b=this.aR(f,a),this.set("angle",b));this.Te.Lk(this)},o2:function(){this.Te&&(this.Te.stop(),this.Te=null,this.w("movestop"))},y0:function(){this.Te&&(this.Te.stop(),this.Te=null,this.w("movepause"))},G_:function(a,b,c,d){function f(){var b=a.slice(0,a.Xi||0);b.push(this.get("position")); this.bc.w("moving",{passedPath:b})}function g(){a.Xi<a.length-1?(a.Xi+=1,this.moveTo(a[a.Xi],b,c)):(this.pa("movealong"),d?(a.Xi=0,this.set("position",a[0]),this.moveTo(a[a.Xi],b,c)):this.w("movestop"))}var h=Math.min(a.Xi||0,a.length-1);this.Os||(this.Os=!0,this.e("moving",f,this),this.e("moveend",g,this),this.e("movestop",function l(){this.Os=!1;this.F("moveend",g,this);this.F("moving",f,this);this.F("movestop",l,this)},this));this.moveTo(a[h],b,c)},aR:function(a,b){var c=this.map,d=c.Db(a),c=c.Db(b), f=0;c.Kf(d);var g=c.y-d.y,h=c.x-d.x;0!==c.x-d.x?(f=Math.atan((c.y-d.y)/(c.x-d.x)),0<=g&&0>h?f=Math.PI+f:0>g&&0>=h?f=Math.PI+f:0>g&&0<=h&&(f=2*Math.PI+f)):f=c.y>d.y?Math.PI/2:3*Math.PI/2;return V.g.qf(180*f/Math.PI,1)}});V.Ia.Tv=V.Ia.Fj.extend({D:function(a,b){arguments.callee.cb.apply(this,arguments);this.Q("items",a,!0);this.Q("content",a,!0);this.Q("resolution",b);this.Q("centerCoords",b);this.oq=a},FL:function(){this.qe();this.No();this.Uk();this.map.e("movestart",this.dh,this);this.map.e("mapmove",this.dh,this);this.map.e("zoomstart",this.dh,this);this.map.e("click",this.dh,this);this.map.e("closeOverlays",this.dh,this);this.map.e("rotate",this.dh,this)},dh:function(){this.oq.map&&this.oq.close()},mapChanged:function(){}, positionChanged:function(){this.Uk()},qe:function(){this.C&&(this.C.parentNode&&this.C.parentNode.removeChild(this.C),this.C=null);var a=V.f.create("div",null,"amap-menu");V.B.e(a,"mousedown",function(a){V.B.stopPropagation(a)},this);this.C=a;this.map.ab.Ia.appendChild(this.C)},No:function(){var a=this,b=this.C;b.innerHTML="";var c=this.get("content");if("object"===typeof c)b.appendChild(c);else if("string"===typeof c)b.innerHTML=c;else if((c=this.get("items"))&&c.length){var d=V.f.create("ul",b, "amap-menu-outer");c.sort(function(a,b){return isNaN(a.Tu)||isNaN(b.Tu)?0:a.Tu-b.Tu});for(b=0;b<c.length;b+=1)(function(b){var c=b.GN,h=b.La,k=V.f.create("li",d);k.innerHTML=c;V.B.e(k,"click",function(){h.call(k);a.oq.close()},k)})(c[b])}else this.C.innerHTML=""},Uk:function(){var a=this.map,b=this.C;if(a&&b){var c=Math.pow(2,20-this.map.get("zoom")),d=a.Db(this.get("position")),f=this.get("centerCoords"),b=(d.x-f.x)/c,c=(d.y-f.y)/c,a=a.get("size"),c=c+a.height/2,b=b+a.width/2,d=V.f.Nq(this.C);b> a.width-d.width-5&&(b-=d.width);c>a.height-d.height-5&&(c-=d.height);this.C.style.right="";this.C.style.bottom="";this.C.style.left=b+"px";this.C.style.top=c+"px"}},Ue:function(){this.C&&(this.map.F("click",this.tE,this),this.map.ab.Ia.removeChild(this.C),this.oq.mh=!1,this.C=this.oq.Qi.map=null,this.map.F("movestart",this.dh,this),this.map.F("zoomstart",this.dh,this),this.map.F("click",this.dh,this),this.map.F("closeOverlays",this.dh,this),this.map.F("rotate",this.dh,this))},visibleChanged:function(){this.C&& (this.get("visible")?this.C.style.display="block":this.C.style.display="none")},itemsChanged:function(){this.C&&this.No()}});V.Ia.Rh=V.Ia.Fj.extend({D:function(a,b){arguments.callee.cb.apply(this,arguments);this.Uc("content contentDom position contentU isCustom autoMove showShadow closeWhenClickMap size offset".split(" "),a);this.Q("retainWhenClose",a,!0);a.Q("toBeClose",this);this.Cl=a},FL:function(a){this.wX||(this.qe(),this.No(),this.oX());this.Ii("resolution");this.Ii("centerCoords");this.Ii("render");this.Q("resolution",a);this.Q("centerCoords",a);this.Q("render",a);this.map=a;a.ab.Ia.appendChild(this.jb);this.OC(); this.Uk();this.ZD();this.wX=!0;this.bc.w("onAdd",{type:"onAdd",target:this.bc})},qe:function(){var a=V.f.create("div");a.className="amap-info";var b=V.f.create("div",a),c=V.f.create("div",a),d=V.f.create("div",c);a.style.position="absolute";c.style.position="absolute";c.style.bottom=-1*(this.get("offset").y||0)+"px";c.style.left=(this.get("offset").x||0)+"px";b.style.position="absolute";b.style.bottom=-1*(this.get("offset").y||0)+"px";b.style.left=(this.get("offset").x||0)+"px";this.jb=a;this.Pc= c;this.yr=b;this.Le=d;this.set("contentDom",this.Le,!0)},No:function(){var a=this.get("contentU");if(a){var b=this.get("isCustom"),c=this.Le,d=this.yr;c.innerHTML="";var f=null;if(b){if("string"===typeof a)c.innerHTML=a;else if(a instanceof Array)for(f=0;f<a.length;f+=1)c.appendChild(a[f]);else c.appendChild(a);f=c;d.parentNode&&d.parentNode.removeChild(d)}else{f=d=V.f.create("div",c,"amap-info-content amap-info-outer");"string"===typeof a?d.innerHTML=a:d.appendChild(a);this.xX=d;a=V.f.create("a", this.Le,"amap-info-close");a.innerHTML="\\u00d7";this.Cz=a;a.href="javascript: void(0)";V.j.vd&&(V.B.e(a,"touchstart",function(a){V.B.stop(a)},this),V.B.e(a,"touchend",function(a){V.B.stop(a);this.Cl.close()},this),V.B.e(a,"click",function(a){V.B.stop(a);this.Cl.close()},this));V.j.U||(V.B.e(a,"mousedown",function(a){V.B.stop(a)},this),V.B.e(a,"click",function(a){V.B.stop(a);this.Cl.close()},this));if(a=this.get("size",!0))0!==a.width&&(d.style.width=a.width+"px"),0!==a.height&&(d.style.height=a.height+ "px");a=V.f.create("div",c,"amap-info-sharp");a.style.height="23px";if(V.j.Mg||V.j.Vq)a.style.marginLeft=c.childNodes[0].offsetWidth/2-5;this.yr.style.display="block"}V.B.n2(f)}},OC:function(){var a=this.get("isCustom"),b=this.get("showShadow");if(!a&&b){var a=this.yr,b=V.f.Nq(this.Le),c=b.height-23,d=b.width;if(V.j.Mg||V.j.Vq)c=this.Le.childNodes[0].offsetHeight,d=this.Le.childNodes[0].offsetWidth+26;b="background-image:url("+V.q.pb+(V.j.Mg?"/theme/v1.3/iws.gif);":"/theme/v1.3/iws.png);");a.innerHTML= "";var f=[],g;g=f[1]={};g.height=0.5*c+4;g.width=d;g.offsetX=400;g.offsetY=16;g.top=-g.height-10-15;g.left=23;g=f[2]={};g.height=f[1].height;g.width=f[1].height;g.offsetX=1075-g.width;g.offsetY=f[1].offsetY;g.top=f[1].top;g.left=23+f[1].width;g=f[3]={};g.height=10;g.width=22;g.offsetX=30;g.offsetY=445;g.top=-25;g.left=23+(V.j.Vq||V.j.Mg?5:0);g=f[4]={};g.height=10;g.width=d/2-15-f[3].left-f[3].width;g.offsetX=132;g.offsetY=445;g.top=-25;g.left=f[3].left+f[3].width;g=f[5]={};g.height=10;g.width=70; g.offsetX=80;g.offsetY=445;g.top=-25;g.left=f[4].left+f[4].width;g=f[6]={};g.height=10;g.width=d-f[5].left-f[5].width;g.offsetX=132;g.offsetY=445;g.top=-25;g.left=f[5].left+f[5].width;g=f[7]={};g.height=10;g.width=30;g.offsetX=621;g.offsetY=445;g.top=-25;g.left=d;g=f[8]={};g.height=15;g.width=70;g.offsetX=47;g.offsetY=470;g.top=-15;g.left=d/2-15;for(c=1;8>=c;c+=1)d=V.f.create("div",a),g=[],g.push("position:absolute;"),g.push(b),g.push("top:"+f[c].top+"px;"),g.push("left:"+f[c].left+"px;"),g.push("width:"+ f[c].width+"px;"),g.push("height:"+f[c].height+"px;"),g.push("background-position:"+-f[c].offsetX+"px "+-f[c].offsetY+"px;"),d.style.cssText=g.join("")}},O7:function(){},Uk:function(){var a=this.map,b=this.jb,c=this.get("position");if(a&&b&&c){var c=Math.pow(2,20-this.map.get("zoom")),d=a.Db(this.get("position")),f=this.get("centerCoords"),b=(d.x-f.x)/c,c=(d.y-f.y)/c,a=a.get("size"),d=V.f.Nq(this.Le);if(V.j.Mg||V.j.Vq)d.width=this.Le.childNodes[0].offsetWidth+14;d=this.get("isCustom")?d.width/2:(d.width- 30)/2;this.jb.style.left=Math.round(b+a.width/2-d)+"px";this.jb.style.top=Math.round(c+a.height/2)+"px";b=this.xX;if(this.Cz&&b.childNodes[0]){for(c=a=0;c<b.childNodes.length;c+=1)a+=b.childNodes[0].clientHeight||0;a>(this.get("size").height||b.clientHeight)?this.Cz.style.right="20px":this.Cz.style.right="5px"}}},lQ:function(){var a=new V.K(2-this.Le.offsetWidth/2,2-this.Le.offsetHeight),b=this.get("offset")||new V.K(0,0);this.get("isCustom")||(a=a.add(new V.K(0,-23)));return a.add(b)},ZD:function(){if(this.get("position")&& this.get("autoMove")&&this.Le){var a=this.map,b=new V.ac(this.Le.offsetWidth,this.Le.offsetHeight);a.jB(this.get("position"));for(var c=a.jB(this.get("position")).add(this.lQ()),d=c.add(b.Lo()),f=a.get("size"),g=a.QY(),h=0,k=0,l=0;l<g.length;l+=1){var m=g[l],n=0,p=0;0===m[1]&&0===m[2]?(n=m[3]-(c.x+h),p=m[0]-(c.y+k),0<n&&0<p&&(Math.abs(n)<Math.abs(p)?h+=n:k+=p)):0===m[2]&&0===m[3]?(n=f.Pe()-m[1]-(d.x+h),p=m[0]-(c.y+k),0>n&&0<p&&(Math.abs(n)<Math.abs(p)?h+=n:k+=p)):0===m[0]&&0===m[3]?(n=f.Pe()-m[1]- (d.x+h),p=f.Ne()-m[2]-(d.y+k),0>n&&0>p&&(Math.abs(n)<Math.abs(p)?h+=n:k+=p)):0===m[0]&&0===m[1]&&(n=m[3]-(c.x+h),p=f.Ne()-m[2]-(d.y+k),0<n&&0>p&&(Math.abs(n)<Math.abs(p)?h+=n:k+=p))}c=c.add(new V.K(h,k));d=d.add(new V.K(h,k));l=g=0;0>c.x||b.Pe()>f.Pe()?g=20-c.x:f.Pe()<d.x&&(g=f.Pe()-d.x-25);0>c.y||b.Ne()>f.Ne()?l=5-c.y:f.Ne()<d.y&&(l=f.Ne()-d.y-15);g+=h;l+=k;(g||l)&&a.da.panBy(g,l)}},oX:function(){this.get("closeWhenClickMap")&&this.map.e("closeInfo",this.tE,this,!1)},tE:function(){this.Cl.mh&&this.Cl.close()}, Ue:function(){this.jb&&(this.get("retainWhenClose")?this.map.jl.appendChild(this.jb):(this.jb.parentNode===this.map.ab.Ia&&this.map.ab.Ia.removeChild(this.jb),this.Cl.Ia=null),this.map=null,this.Cl.mh=!1,this.bc.w("close",{type:"close",target:this.bc}))},o4:function(){if(!this.get("isCustom"))return this.Le.offsetWidth;for(var a=this.Fe,b=a.firstChild,c=a.lastChild;b&&c&&b.style&&c.style&&b===c;)a=b,b=a.firstChild,c=a.lastChild;a=V.f.Ic(a,"width");return a=parseInt(a.replace("px",""),10)},renderChanged:function(){this.Uk()}, positionChanged:function(){this.map&&this.jb&&(this.Uk(),this.ZD())},offsetChanged:function(){var a=this.get("offset");this.Pc.style.bottom=-1*(a.y||0)+"px";this.Pc.style.left=(a.x||0)+"px";this.yr.style.bottom=-1*(a.y||0)+"px";this.yr.style.left=(a.x||0)+"px"},contentChanged:function(){this.No();this.OC();this.Uk()},sizeChanged:function(){this.No();this.OC();this.Uk()}});V.fa={};V.fa.$k=V.W.extend({ka:[V.ea,V.yd],D:function(){},Jb:function(){return new this.D(this.Ka)},iA:function(){return this.Ka},setCoords:function(a){this.L1(a)},L1:function(a){this.mm=this.lc();this.Cd=null;if(V.fa.hd&&this instanceof V.fa.hd){var b=a.length;this.xf=Array(b);for(var c,d,f=0;f<b;f+=1)if(c=a[f],d=new V.fa.vD(c),this.xf[f]=d,0===f){if(0===c.length)break;d.vk(c)||c.reverse()}else 0!==c.length&&d.vk(c)&&c.reverse()}else this.Ka=a}}); V.fa.Cc=V.extend({},{Jm:"point",Xv:"linestring",tD:"linearring",Zr:"polygon",aw:"multipoint",$v:"multilinestring",Xr:"multipolygon",K3:"geometrycollection"});V.de=V.W.extend({ka:[V.ea,V.yd],D:function(a){a=a||{};this.Ms=a.Ms;this.map=a.map;this.Rn=a.ix||V.g.Bb(this);this.name=a.name||"";this.Ig=!1;this.set("visible",!0,!0);this.rC(a.za);this.vg=a.Ev;this.style=a.style},$X:function(){this.style=this.vg=this.Uj=this.d_=this.za=this.name=this.map=null;this.Cm();this.gj()},uZ:function(){return this.vg},W1:function(a){this.vg=a;this.zIndex=this.vg[0].Vf||this.zIndex},L5:function(){return this.za},rC:function(a){a&&(this.za=a,this.Q("coords",a,!0),this.Ms&& (a.Q("radius",this),a.Q("center",this),a.Q("resolution",this),a.Q("strokeWeight",this)))},setStyle:function(a){this.W1(a);this.nk()},coordsChanged:function(){this.nk()},radiusChanged:function(){this.za.mm=this.za.lc();this.za.Cd=null;this.nk()},nk:function(a){this.set("feature",{target:this,UX:a,mm:this.za.mm||this.za.lc(),K_:this.za.lc()});this.za.mm=this.za.lc()},visibleChanged:function(){this.nk()},Y5:function(a){for(var b=0;b<this.vg.length;b+=1){var c=this.vg[b];if(a.Lb(c.Kn(this)))return c}}, XY:function(){var a=this.za,b=[];a.Oe()===V.fa.Cc.Zr||a.Oe()===V.fa.Cc.Xr?b.push(new V.style.vc.hd({fillColor:"#78cdd1",kc:0.2,strokeColor:"#122e29",ya:0.5,nb:1})):a.Oe()===V.fa.Cc.Xv||a.Oe()===V.fa.Cc.tD||a.Oe()===V.fa.Cc.$v?b.push(new V.style.vc.uD({color:"#888888",width:1,zIndex:10})):a.Oe()!==V.fa.Cc.Jm&&a.Oe()!==V.fa.Cc.aw||b.push(new V.style.vc.Vr({url:V.q.pb+"/theme/v1.3/markers/0.png",width:36,height:36,rotation:0,g8:-12,h8:-36,zIndex:100}));return b}});V.de.E3="geometry";V.fa.Be=V.fa.$k.extend({D:function(a,b){this.Ka=a;this.yi=b;this.Cd=null},lc:function(){if(!this.Cd){var a=this.Ka[0],b=this.Ka[1];if(this.yi)this.Cd=[a,b,a,b];else{var c=this.get("radius"),c=c?c/Math.cos(Math.PI*this.get("center").O/180):0,d=this.get("resolution")*this.get("strokeWeight")||0;this.Cd=[a-c-d,b-c-d,a+c+d,b+c+d]}}return this.Cd},Oe:function(){return V.fa.Cc.Jm}}); ', true), _jsload_('brender', 'V.J={canvas:{},uc:{},We:{},dd:{}};V.J.Wf=V.W.extend({ka:[V.ea,V.yd],D:function(a,b){this.r=a;this.yi=a.Qa.yi;this.Nb=b;this.l=b.l;this.Q("display",b)},iJ:function(){this.LL&&this.LL();this.Cm();this.l=this.Nb=this.r=null},mA:function(a,b){var c=this.zoom,d=[],f=this.r;if(Math.floor(c)!==c)b(d,f);else{c=[a.x,a.y];if(f.Oq){for(var g=f.Hh,h=!0,k=[],l=0;l<g.length;l+=1){var m=g[l].gk;if(m)if(m.parentNode&&m.parentNode.parentNode&&this.Nb&&m.parentNode.parentNode!==this.Nb.jl&&"none"!==m.parentNode.style.display){var n=m.clientWidth,p= m.clientHeight;m.childNodes[0]&&(n=n||m.childNodes[0].clientWidth,p=p||m.childNodes[0].clientHeight);window.opera&&(n=Math.max(n,m.childNodes[0].scrollWidth),p=Math.max(p,m.childNodes[0].scrollHeight));n&&p?(m=Math.max(Math.abs(g[l].get("offset").x),Math.abs(g[l].get("offset").y))+Math.max(n,p),f.wf=Math.max(f.wf,m),f.tg=Math.max(f.tg,m),g[l].width=n,g[l].height=p):(h=!1,k.push(g[l]))}else h=!1,k.push(g[l])}h?(f.Oq=!1,f.Hh=[]):f.Hh=k}g=Math.max(f.wf,f.oo||0)*this.N;h=Math.max(f.tg,f.oo||0)*this.N; k=0;f.no&&(k=f.no/Math.cos(Math.PI*this.l.get("center").O/180));h=Math.max(h,k||0);g=Math.max(g,k||0);if(g=f.vh([c[0]-g,c[1]-h,c[0]+g,c[1]+h])){for(var q in g)if(g.hasOwnProperty(q)&&(h=g[q],h.get("visible")&&!h.get("noSelect")))if(l=h.za,l instanceof V.fa.Be)if(this.yi){k=this.r.Lh;k instanceof Array&&(k="number"===typeof h.Da.style&&k[h.Da.style]?k[h.Da.style]:k[0]);var p=k.size.width*this.N,m=k.size.height*this.N,r=k.anchor.x*this.N,u=k.anchor.y*this.N,p=V.A.CI([[c[0]-p+r,c[1]-m+u],[c[0]+r,c[1]+ u]]);V.A.Dd(p,l.Ka)&&d.push(h)}else if("undefined"!==typeof l.get("radius"))k=l.Ka,k=new V.K(k[0],k[1]),(new V.K(c[0],c[1])).Kf(k)*Math.cos(h.get("center").O*Math.PI/180)<=l.get("radius")/this.Bk*Math.pow(2,20-this.zoom)&&d.push(h);else{if(k=h.get("params"),k.visible){l=l.Ka;r=k.rI%360;n=[c[0],c[1]];if(r){var p=(c[0]-l[0])/this.N,m=(c[1]-l[1])/this.N,u=Math.PI*r/180,r=Math.cos(-u),u=Math.sin(-u),t=p*u+m*r;n[0]=l[0]+(p*r-m*u)*this.N;n[1]=l[1]+t*this.N}p=h.width*this.N;m=h.height*this.N;r=k.offset.x* this.N;u=k.offset.y*this.N;p=V.A.CI([[n[0]-p-r,n[1]-m-u],[n[0]-r,n[1]-u]]);l[0]instanceof Array||(l=[l]);for(m=l.length-1;0<=m;m-=1)if(V.A.Dd(p,l[m])){k.shape?this.UZ(h,n,l)&&d.push(h):d.push(h);break}}}else l.Dd?l.Dd(c)&&d.push(h):l.cu&&1.8*l.cu(c)<=h.get("strokeWeight")*this.N&&d.push(h);this.yi?d.sort(function(a,b){return a.Rn>b.Rn?-1:1}):d.sort(function(a,b){return a.get("isTop")?-1:b.get("isTop")?1:a.get("zIndex")>b.get("zIndex")||a.get("zIndex")===b.get("zIndex")&&a.Rn>b.Rn?-1:1});b(d,f)}else b([], f)}},UZ:function(a,b,c){var d=(b[0]-c[0][0])/this.N;b=(b[1]-c[0][1])/this.N;a=a.get("params");c=a.offset;var d=[d-c.x,b-c.y],f;a=a.shape;if("circle"===a.G.type){if(b=a.G.coords[0],c=a.G.coords[1],Math.sqrt((d[0]-b)*(d[0]-b)+(d[1]-c)*(d[1]-c))<=a.G.coords[2])return!0}else{if("poly"===a.G.type)return f=a.G.coords,f=this.TW(f),V.Tc.Dd(d,f);if("rect"===a.G.type)return f=a.G.coords,a=f[0],b=f[1],c=f[2],f=f[3],f=[[a,b],[c,b],[c,f],[a,f]],V.Tc.Dd(d,f)}return!1},TW:function(a){for(var b=[],c=0;c/2<a.length/ 2;c+=2)b.push([a[c],a[c+1]]);return b},SJ:function(a,b,c,d,f,g,h){var k=["position:absolute;"];k.push("top:"+Math.round(c)+"px;");k.push("left:"+Math.round(b)+"px;");k.push("width:"+Math.round(d)+"px;");k.push("height:"+Math.round(f)+"px;");1>g&&("opacity"in a.style?(k.push("opacity"),k.push(":"),k.push(g),k.push(";")):8<=document.documentMode?(k.push("-ms-filter:\'progid:DXImageTransform.Microsoft.Alpha(opacity="),k.push(Math.ceil(100*g)),k.push(")\';")):(k.push("filter:alpha(opacity="),k.push(Math.ceil(100* g)),k.push(");")));k.push("z-index:"+h+";");V.f.QM(a,k.join(""))}});V.J.$c=V.W.extend({ka:[V.ea,V.yd],D:function(a){this.l=a;this.jl=a.jl;this.C=a.ab.S;this.Q("display",a);this.Q("rotateEnable",a);this.Q("style",a);this.Q("hightlight",a)},mA:function(a,b,c,d){function f(a,d){a.length&&(h[V.g.indexOf(b,d)]=a);k-=1;0>=k&&(c(h),k=0)}for(var g=b.length,h=[],k=0,l,m=[],n=0;n<g;n+=1)l=b[n],l instanceof V.S.jd&&l.get("visible")&&(m.push(this.nu(l)),k+=1);for(g=0;g<m.length;g+=1)m[g].mA(a,f,d)}});V.J.$c.Yb({Gf:function(a,b){for(var c=[],d=0,f=a.length;d<f;d+=2){var g=0,g="str"===b?V.g.qf(parseInt(a.substr(d,2),16)/(0===d?255:1),3):V.g.qf(parseInt(a.substr(d,2),16)/255,3);c.push(g)}c.push(c.shift());return"str"===b?"rgba("+c.join(",")+")":c},o0:function(a,b,c){if(b[c])console.log("customType repeat!!",c);else{var d={};d.visible=void 0===a.visible?!0:a.visible;d.d2=void 0===a.showLabel?!0:a.showLabel;d.xm=void 0===a.showIcon?!0:a.showIcon;if(void 0!==a.color){var f="",g="";a.color&&(f=this.Gf(a.color, "str"),g=this.Gf(a.color));d.color={canvas:f,We:g}}else d.opacity=a.opacity;void 0!==a.fillColor?(g=f="",a.fillColor&&(f=this.Gf(a.fillColor,"str"),g=this.Gf(a.fillColor)),d.fillColor={canvas:f,We:g}):d.kc=a.fillOpacity;void 0!==a.strokeColor?(g=f="",a.strokeColor&&(f=this.Gf(a.strokeColor,"str"),g=this.Gf(a.strokeColor)),d.strokeColor={canvas:f,We:g}):d.ya=a.strokeOpacity;void 0!==a.textFillColor?(g=f="",a.textFillColor&&(f=this.Gf(a.textFillColor,"str"),g=this.Gf(a.textFillColor)),d.v2={canvas:f, We:g}):d.w2=a.textFillOpacity;void 0!==a.textStrokeColor?(g=f="",a.textStrokeColor&&(f=this.Gf(a.textStrokeColor,"str"),g=this.Gf(a.textStrokeColor)),d.x2={canvas:f,We:g}):d.y2=a.textStrokeOpacity;void 0!==a.backgroundColor?(g=f="",a.backgroundColor&&(f=this.Gf(a.backgroundColor,"str"),g=this.Gf(a.backgroundColor)),d.backgroundColor={canvas:f,We:g}):d.tW=a.backgroundOpacity;b[c]=d}},$L:function(a,b,c){if(a)for(var d in a)if(a.hasOwnProperty(d)){var f=a[d],g=d;c&&(g=c+":"+d);f.subType?this.$L(f.subType, b,g):this.o0(f,b,g)}},styleChanged:function(){if(V.j.Ke){var a={};this.$L(this.get("style"),a);this.eJ=a;var b=this.eJ["regions:land"];b&&(a="rgba(0,0,0,0)",b.visible&&(b=this.Vl(this.l.ge,b.opacity,b.color))&&(a=b),this.l.Jz=a);this.set("display")}},Vl:function(a,b,c){if(a){if(void 0!==b)return a=a.split(","),a[3]=V.g.qf(parseFloat(b),3)+")",a.join(",");if(c)return c.canvas}return a},jA:function(a,b,c){if(a){if(void 0!==b)return[a[0],a[1],a[2],V.g.qf(parseFloat(b),3)];if(c)return c.We}return a}, ou:function(a){return this.eJ[a]},rk:function(a,b,c,d){var f=null,g=a;d=d?this.Vl:this.jA;if(f=this.ou(b))if(f.visible){var g=1,h="";if(c)if(f.fillColor||f.kc)g=f.kc,h=f.fillColor;else{if(f.color||f.opacity)g=f.opacity,h=f.color}else if(f.strokeColor||f.ya)g=f.ya,h=f.strokeColor;else if(f.color||f.opacity)g=f.opacity,h=f.color;g=d(a,g,h)}else g="";this.Uq===b&&(g=this.Wl(g||a));return g},mu:function(a,b,c){c=c?this.Vl:this.jA;var d=null,f=a;(d=this.ou(b))&&(f=d.visible?c(a,d.opacity,d.color):""); this.Uq===b&&(f=this.Wl(f||a));return f},lu:function(a,b,c,d){var f=a,g=b,h=c,k=!0,l=!0,m=1,n=this.ou(d);n&&(n.visible&&n.d2?(f=this.Vl(a,n.w2,n.v2),g=this.Vl(b,n.y2,n.x2),h=this.Vl(c,n.tW,n.backgroundColor),k=n.xm):(l=k=!1,f=g=h=""));this.Uq===d&&(f=this.Wl(f||a),g=this.Wl(g||b),h=this.Wl(h||c),m=1-1.6*this.vu,l=k=!0);return[f,g,h,k,l,m]},Gq:function(a,b,c,d){var f=null,g=a,h=b;d=d?this.Vl:this.jA;if(f=this.ou(c))f.visible?(g=d(a,f.kc,f.fillColor),h=d(b,f.ya,f.strokeColor)):g=h="";this.Uq===c&&(b= h||b,g=this.Wl(g||a),h=this.Wl(b));return[g,h]}});V.J.canvas.$c=V.J.$c.extend({D:function(a){arguments.callee.cb.apply(this,arguments)},nu:function(a){if(!a.J){var b=a.ki(this);b&&!b.k5&&(a.J=b)}return a.J},ve:function(a){var b=this.l.Jz||this.l.ge;this.M0!==b&&V.j.Ke&&(this.l.I1(b),this.M0=b);this.l.ab.ak.style.cssText="";for(var c=a.Ba,b=a.Y,d=a.size.width,f=a.size.height,g=0;g<c.length;g+=1){var h=c[g],k=this.nu(h),l=c[g].tk();if(k&&k.r)if(!l.visible||l.Zc[0]>b.zoom||l.Zc[1]<b.zoom||h.pt||h.xa&&0===h.xa.length){if(k=k.Nf())if(k.length)for(l=0;l< k.length;l+=1)k[l].parentNode===this.C&&this.C.removeChild(k[l]);else k.parentNode===this.C&&this.C.removeChild(k)}else{k.ve(a,l);var h=k.Nf(),m,n,p=k.transform;if(!p||!h||k.fo&&!this.l.da.Va)c[g].xi&&(h.parentNode!==this.C||V.j.Gg)&&(this.C.appendChild(h),c[g].ob=h);else{c[g].ob=h;h.length||(h=[h],p=[p]);for(var q=0;q<h.length;q+=1){m=h[q];n=p[q];var r=n.translate.x,u=n.translate.y;c[g].Bu||(r=V.g.qf(r,2),u=V.g.qf(u,2));var t=n.scale;1E-5>Math.abs(r)&&(r=0);1E-5>Math.abs(u)&&(u=0);var w=[];w.push("position:absolute"); w.push("z-index:"+(n.Vf||c[g].get("zIndex")));c[g].du?(w.push("top:"+Math.floor(f/2+u)+"px"),w.push("left:"+Math.floor(d/2+r)+"px")):m.TK?(w.push("height:"+m.height*t+"px"),w.push("width:"+m.width*t+"px"),w.push("top:"+(f/2-u*t)+"px"),w.push("left:"+(d/2-r*t)+"px")):(1!==t&&(w.push(V.f.Sk[V.f.Nd]+"-origin:"+r+"px "+u+"px"),w.push(V.f.Sk[V.f.Nd]+":scale3d("+t+","+t+",1)")),w.push("top:"+Math.floor(f/2-u)+"px"),w.push("left:"+Math.floor(d/2-r)+"px"),k.Bh&&(w.push("height:"+m.height+"px"),w.push("width:"+ m.width+"px")));k.Bu||1===l.opacity||"number"!==typeof l.opacity||w.push(V.f.YJ(m,l.opacity));(m.parentNode!==this.C||V.j.Gg)&&this.C.appendChild(m);V.f.QM(m,w.join(";"))}}}}a=this.l.ab.ak;h=this.l.ab.S;c=this.l.ab.Ia;V.f.Nd&&"number"===typeof b.rotation&&0!==b.rotation?(a.style[V.f.Nd+"Origin"]=d/2+"px "+f/2+"px",a.style[V.f.Nd]="rotate("+b.rotation+"deg)",a.style.overflow="visible",h.style.overflow="visible",c.style.overflow="visible"):(a.style.cssText="",h.style.cssText="-webkit-transform: translateZ(0);", c.style.cssText="");this.l.Av=!1}});V.J.Sg=V.J.Wf.extend({D:function(a,b){arguments.callee.cb.apply(this,arguments);this.Q("reload",a,!0);var c=V.j.size;if(this.l&&this.l.da){var d=this.l.da.get("tileCacheSize");d&&0<d&&(c=d)}this.Na=new V.xd(c);var f=this;this.Na.IL.WV(function(a){f.bx(a)});this.fc=1;this.Om=50;this.nP=!0;this.r.Na=this.Na;this.SA=new V.oD(6,null,a.uJ);new V.oD(5,null,a.uJ)},LL:function(){this.clear();this.Na.clear();this.ub&&(this.ub.F("tiles",this.KL,this),this.ub.F("ack",this.JL,this),this.ub.F("disable",this.HL, this),this.ub=null);this.Bh&&V.B.F(this.wa,"webglcontextlost",this.AB,this);this.l.F("zoomend",this.th,this);this.l.F("moveend",this.th,this)},reloadChanged:function(){this.r&&(this.r.Va=!1);this.Na.clear();this.reload=!0;this.set("display")},hL:function(a,b,c){if(!a.io||a.io.fj){var d=this;a.loaded=!1;a.io=b.fL(a.url,function(b){a.io=null;a.loaded=!0;d.Na.set(a.key,a);d.r&&(a.va=!0,a.cc=b,a.io=null,d.set("display",0),"function"===typeof c&&c())},!1)}},F2:function(a,b,c,d){var f=[];c=c||18;b=Math.pow(2, b-c);for(var g=0;g<a.length;g+=1){var h=a[g].Fa,k=Math.floor(h.x/b),h=Math.floor(h.y/b);d?(k=c+"/"+k+"/"+h,h=this.Na.get(k)):(h=new V.Qh(c,k,h),k=h+"",h=new V.Yf(h));!f[k]&&h&&(f.push(h),f[k]=1)}return f},iL:function(a){for(var b=a.length-1;0<=b;b-=1){var c=a[b];if(c.length)if(this.zi){if(this.l.PC)break;var d=c[0].Fa.z;18<d&&(c=this.F2(c,d));this.fN(c,this.Bh?1:0);for(var f=0,g=0;f<c.length;)this.n_(c.slice(50*g,50*g+50),d),f+=50,g+=1}else{var h=this,d=function(){var a=c.length;return function(){if(0=== --a){var b={id:h.l.da.id,key:"rb",index:0};V.Ld.Ce.end(b);V.Ld.Ce.end(V.extend(b,{index:1}))}}}();this.fN(c);this.oB+=c.length;for(f=c.length-1;0<=f;f-=1)this.hL(c[f],this.SA,d)}}},pu:function(a,b){var c=a+"";return(b?this.Na.uo(c):this.Na.get(c))||new V.Yf(a.Jb(),this.ri&&this.ri(a.x,a.y,a.z))},Bv:function(a,b){return this.fd*Math.pow(2,a-b)},bx:function(a){a.io&&this.SA.RW(a.io);a.lC=!1;a.loaded=!1},Tt:function(a,b){var c=this.qc,d=a.$b.x,f=a.$b.y,g=a.hb.x,h=a.hb.y;new V.K(0,0);var k=this.Bv(20, c);b&&(g=Math.max(b[0],g)-b[0],h=Math.max(b[1],h)-b[1],d=Math.min(b[2],d)-b[0],f=Math.min(b[3],f)-b[1],new V.K(Math.floor(b[0]/k),Math.floor(b[1]/k)));d/=k;f/=k;d={be:0===d%1?d-1:Math.floor(d),od:0===f%1?f-1:Math.floor(f),Se:Math.floor(g/k),pd:Math.floor(h/k)};d.bv=d.be-d.Se+1;d.nM=d.od-d.pd+1;d.z=c;d.N=this.N*Math.pow(2,this.zoom-c);return d},VA:function(a,b,c){return b<a.Se||b>a.be||c<a.pd||c>a.od?!1:!0},fN:function(a,b){if(a.length){var c=this.Ga.Ob(this.fd<<20-a[0].Fa.z),d=Math.floor(c.x),f=Math.floor(c.y); a.sort(function(a,c){var k=a.Fa,l=c.Fa,m=k.x-d,k=k.y-f,n=l.x-d,l=l.y-f;return(b?-1:1)*(n*n+l*l-(m*m+k*k))})}},clear:function(){this.SA.clear()},Zu:function(a,b){this.ej=!1;b.ri!==this.ri&&(this.ri=b.ri,this.Na.clear());this.clear();this.Wh=b.Wh;this.Vh=b.Vh;this.fd=b.fd;var c=a.Y;this.te=b.te||a.Y.te;this.hi=c.hi;this.size=a.size;this.rotation=c.rotation;this.Ga=c.Ga;this.ta=a.Y.ta;this.zoom&&(this.HB=c.zoom>this.zoom?"in":c.zoom<this.zoom?"out":!1);this.Kd=a.Kd;this.pg=a.pg;this.zoom=c.zoom;this.Kc= c.Kc;this.qc=!1===this.zi&&!this.r.GZ&&this.r.ha?this.Kc+1:this.Kc;this.Rf&&this.qc>this.Rf&&(this.qc=this.Rf);this.N=c.N;this.Gd=c.Gd;c=a.Y.ta;this.rg=this.Tt(c,b.A);this.Nr=c.ON?this.Tt(c.ON,b.A):null;var d=this.rg,f=this.ta.u2,g=null,g=f<this.zoom&&this.Nr?this.Nr:d,h=[],k=[],l,m=[],n=[],p=[],q=new V.Qh(0,0,0),r,u=this.zoom,n=this.Vm||"",t={},w={},v,s,K,I,B,R;this.Jd=1E6*Math.random()<<0;for(r=n.length-1;0<=r;r-=1)if(l=n[r],!(l.gs<b.opacity))if(q.z=l.Fa.z,q.x=l.Fa.x,q.y=l.Fa.y,q.z===this.qc)t[q+ ""]|=16;else if(q.z<this.qc){if(t[q+""]|=64,this.Wh)for(R=this.qc-q.z,v=Math.max(d.Se,q.x<<R),u=Math.min(d.be,(q.x+1<<R)-1),s=Math.max(d.pd,q.y<<R),K=Math.min(d.od,(q.y+1<<R)-1),q.z=this.qc,I=v;I<=u;I+=1)for(q.x=I,B=s;B<=K;B+=1)q.y=B,R=q+"",t[R]|=32,w[R]=w[R]?Math.max(l.Fa.z,w[R]):l.Fa.z}else if(this.Vh)for(R=1;q.z>=this.qc;){t[q+""]|=R;v=q.x>>1;s=q.y>>1;u=v<<1;K=s<<1;l=0;for(I=2;0<I;I-=1)for(q.x=u+I,B=2;0<B;B-=1)q.y=K+B,t[q+""]&5&&(l+=1);q.z-=1;q.x=v;q.y=s;R=4===l?4:2}n=[];q.z=this.qc;r=!0;this.Na.iX(); for(I=g.Se;I<=g.be;I+=1)for(q.x=I,B=g.pd;B<=g.od;B+=1)q.y=B,this.Na.r_(""+q),l=this.pu(q),v=!1,l.va?(l.Jd=this.Jd,this.VA(d,I,B)&&(n.push(l),this.Ug&&(l.fc!==this.fc||1>l.gs)&&(v=!0))):(r=!1,this.VA(d,I,B)&&(v=!0),l.status||this.Kc!==f||this.Nr&&!this.VA(this.Nr,I,B)||m.push(l)),v&&p.push(l);r?(this.FJ||(this.FJ=!0),this.r.Va||(l={key:"rb",index:1,id:this.l.da.id},this.r.fo&&(l.key="rl"),V.Ld.Ce.end(l),V.Ld.Ce.push({key:"ftc",Vk:n.length,id:this.l.da.id}))):this.r.Va=!1;this.ej=r;n.length&&this.FJ&& (h.push(n),n.ej=r);k.push(m);m=!1;if(this.Vh){p=p.slice(0);g=[];for(r=p.length-1;0<=r;r-=1)l=p[r],t[l.key]&4||g.push(l);l=b.Zc[1];for(u=this.qc+1;p.length&&u<=l;u+=1){n=[];f=p;p=[];q.z=u;for(r=f.length-1;0<=r;r-=1)if(I=f[r],R=t[I.key],R&7)for(v=I.Fa.x<<1,s=I.Fa.y<<1,I=1;0<=I;I-=1)for(q.x=v+I,B=1;0<=B;B-=1)q.y=s+B,R=q+"",K=this.Na.uo(R),t[R]&5&&K&&K.va?(K.ey=!0,K.Jd=this.Jd,n.push(K)):p.push(new V.Yf(q.Jb(),""));n.length&&(m=!0,h.push(n))}p=g}if(!m&&this.Wh)for(I=!h.length||this.Bh?b.Zc[0]:Math.max(b.Zc[0], this.qc-2),B=Math.max(I,this.qc-this.u4),u=this.qc-1;p.length&&u>=I;u-=1){s=u>=B;m=[];n=[];g={};f=p;p=[];for(r=f.length-1;0<=r;r-=1)l=f[r],q.z=u,q.x=l.Fa.x>>1,q.y=l.Fa.y>>1,l=this.pu(q,!s),g[l.key]||(g[l.key]=1,v=!1,l.va&&(!this.z4||t[l.key]&64)?(q.x=Math.min(d.be,Math.max(d.Se,q.x<<this.qc-u)),q.y=Math.min(d.od,Math.max(d.pd,q.y<<this.qc-u)),q.z=this.qc,R=q+"","number"===typeof w[R]&&l.Fa.z>w[R]?v=!0:l.ey=!0,l.Jd=this.Jd,n.push(l)):v=!0,v&&p.push(l));n.length&&h.push(n);s&&m.length&&k.push(m)}this.nB= this.oB=0;this.iL(k,c);this.Dr=h;this.r.set("tiles",h)},c7:function(){if(!this.zi){for(var a=this.rg.be+1,b=this.rg.od+1,c=this.rg.Se-1,d=this.rg.pd-1,f,g=[],h=c;h<=a;h+=1)for(var k=d;k<=b;k+=1)if(h===c||h===a||k===d||k===b)f=new V.Qh(this.Kc,h,k),this.Na.uo(void 0)||(f=this.pu(f),g.push(f));this.iL([g])}}});V.J.uc.Sg=V.J.Sg.extend({D:function(a,b){arguments.callee.cb.apply(this,arguments);this.Om=120;this.zi=!1;this.qe();this.Rf=a.Rf},Nf:function(){return this.ob},qe:function(){this.ob=document.createElement("div");this.ob.className=this.r.Qa.get("className")||"amap-layer";this.Sl=document.createDocumentFragment()},um:function(a){var b=Math.pow(2,a.Y.zoom-this.qd),c=a.Y.Ga.Xa(this.wk).Ob(this.Sf);this.transform={translate:this.transform.translate.add(c),scale:b,rotate:0};this.Ga=a.Y.Ga},oz:function(a, b){if(!this.oa||3E4<Math.abs(this.Ga.x-this.oa.x)/this.N||3E4<Math.abs(this.Ga.y-this.oa.y)/this.N)this.oa=this.Ga;this.qd=this.Kc;this.Sf=this.Gd;this.zj=!1;this.currentTime=+new Date;this.RC=b.RC;var c=this.rg;this.Ug=this.Om&&b.It;var d=this.Dr,f=256*c.bv,c=256*c.nM;this.Kd=this.zoom<<0!==this.zoom;var g=this.Ga.Xa(this.oa);g.x<-V.g.Wa/2&&(g.x+=V.g.Wa);g.x>V.g.Wa/2&&(g.x-=V.g.Wa);this.uz=g.Ob(this.Gd);return[d,f,c,b]},Bo:function(a,b){var c=this.oz(a,b);this.mv.apply(this,c);this.Sc(a);this.ej&& !this.r.Va&&(c=this.r,V.Ld.Ce.end({id:this.l.da.id,key:"rb",index:2}),c.Va=!0,c.of?c.pa("renderComplete"):(c.of=!0,c.pa("complete")))},ve:function(a,b){this.Xo=a.Xo;this.pg=a.pg;this.Zu(a,b);this.wk&&V.j.Gg&&(a.Kd||a.pg)?this.um(a,b):this.Bo(a,b);this.wk=this.Ga;this.zj&&this.set("display",0)},pr:function(){for(var a=this.ob.childNodes,b=a.length-1;0<=b;b-=1)a[b]&&a[b].fc!==this.fc&&this.ob.removeChild(a[b])},dC:function(a,b){return a.pd===b.pd&&a.Se===b.Se&&a.od===b.od&&a.be===b.be},mv:function(a){var b= this.fc;this.fc+=1;var c=!1,d,f,g;f=!1;var h=[];this.oa.x-this.Ga.x<-V.g.Wa/2?this.oa=new V.K(this.oa.x+V.g.Wa,this.oa.y):this.oa.x-this.Ga.x>V.g.Wa/2&&(this.oa=new V.K(this.oa.x-V.g.Wa,this.oa.y));for(d=a.length-1;0<=d;d-=1)if(g=a[d],g.length){f=g[0].Fa.z;for(var k,l,m=this.Bv(this.Kc,f),n=g.length-1;0<=n;n-=1){l=g[n];this.CM(l);if(!l.pc&&this.oa===l.oa&&l.qd===this.qd){var p=l.cc;if(p&&p.parentNode===this.ob&&1===l.gs){h.push(l);p.fc=this.fc;l.fc=this.fc;continue}}l.oa=this.oa;l.qd=this.qd;k=l.Fa; var c=!0,q=(new V.K((k.x<<20-f)*this.fd,(k.y<<20-f)*this.fd)).Xa(this.oa),q=q.Ob(this.Gd);q.x=Math.floor(q.x);q.y=Math.floor(q.y);var r=1;if(!l.ME||this.nP&&l.fc!==b)l.ME=this.currentTime;this.Ug&&!l.ey?(p=Math.max(0,Math.abs(k.z-this.zoom)-1),r=Math.min(1,(this.currentTime-l.ME)/(1/Math.pow(1.32,p)*this.Om)),1!==r&&(this.zj=!0)):l.ey=!1;l.fc=this.fc;l.gs=r;l.va?(p=l.cc,!p&&l.pc&&l.pc.cc&&(p=l.pc.cc),0!==r&&p&&(this.SJ(p,q.x,q.y,m,m,r,k.z),p.parentNode!==this.ob&&(V.j.Mg&&"overlayer"===this.r.get("type")&& (p.style.display="none"),this.Sl.appendChild(p)),p.fc=this.fc,l.Kc=this.Kc,h.push(l))):l.Jd=null}f=!0}1<a.length&&(this.zj=!0);this.Vm=h;this.pr();this.ob.appendChild(this.Sl);return c||!f},CM:function(){},Sc:function(){this.transform={translate:this.uz,scale:Math.pow(2,this.zoom-this.Kc),rotate:0}}});window.CanvasRenderingContext2D&&(window.CanvasRenderingContext2D.prototype.Lz=function(a,b,c,d,f){"undefined"===typeof f&&(f=[10,10]);this.moveTo(a,b);var g=c-a,h=d-b,k=Math.floor(Math.sqrt(g*g+h*h));d=g/k;c=h/k;f.gB=0;for(var l=[],g=this.$t,m=0,n=0,p=!1,q=h=0;q<f.length;q+=1)f.gB+=f[q],l[q]={Tz:f[q]*d,Uz:f[q]*c,sf:h+=f[q]},g-=f[q],0>g&&!p&&(m=q,n=-g,p=!0);for(p=0;n+p<=k;)n<f[m]?(g=n*d,h=n*c):(g=l[m].Tz,h=l[m].Uz),a+=g,b+=h,this.Ar?this.moveTo(a,b):this.lineTo(a,b),p+=n,this.Ar=!this.Ar,n=f[(m+1)% f.length],m=(m+1)%f.length;k-=p;a+=k*d;b+=k*c;this.Ar?this.moveTo(a,b):this.lineTo(a,b);this.$t=(this.$t+p+k)%f.gB},window.CanvasRenderingContext2D.prototype.KX=function(a,b,c,d){"undefined"===typeof d&&(d=[10,10]);var f=2*Math.PI*c,g=0>=d?f:Math.round(f/(d[0]+d[1])),h=(d[0]+d[1])/f*2*Math.PI;d=d[0]/f*2*Math.PI;for(f=0;f<g;f+=1)this.beginPath(),this.arc(a,b,c,f*h,f*h+d),this.stroke()}); ', true), _jsload_('mrender', 'V.J.dd.dl=V.J.Sg.extend({D:function(a,b){arguments.callee.cb.apply(this,arguments);this.qe()},gK:function(){return this.Pa.oN},Nf:function(){return this.ob},qe:function(){this.ob=document.createElement("div");this.ob.className="amap-markers";this.Pa=new V.J.dd.jd(this.ob);this.Pa.r=this.r;this.Nb.C.appendChild(this.ob)},Ir:function(a,b){this.Sl=b.Sl;this.er=b;this.te=a.Y.te;this.N=a.Y.N;this.zoom=a.Y.zoom;this.size=a.size;this.ta=a.Y.ta;this.Bk=a.N;this.Ua=a.Y.Ga;this.hi=a.Y.hi;var c=!1;if(!this.oa|| 3E4<Math.abs(this.Ua.x-this.oa.x)/this.N||3E4<Math.abs(this.Ua.y-this.oa.y)/this.N)c=!0;if(c||this.zoom<<0!==this.zoom||this.qd!==this.zoom)this.oa=this.Ua,this.qd=this.zoom},BA:function(a){var b=a.Y.ta.gb.y*this.N;a=a.Y.ta.gb.x*this.N;return[this.Ua.x-a,this.Ua.y-b,this.Ua.x+a,this.Ua.y+b]},pr:function(){if(this.Ih&&this.Ih)for(var a in this.Ih)if(this.Ih.hasOwnProperty(a)){var b=this.Ih[a];b.Jd!==this.Jd&&b.Z&&this.Nb.jl.appendChild(b.Z)}},ve:function(a,b){this.Jd=1E6*Math.random()<<0;this.Ir(a, b);this.Y=a.Y;this.size=a.size;var c=this.r;this.fd=256;var d,f;f=this.BA(a);var g=0;c.Oq&&(g=50*this.N);f[0]-=this.r.wf*this.N+g;f[1]-=this.r.tg*this.N+g;f[2]+=this.r.wf*this.N+g;f[3]+=this.r.tg*this.N+g;c=c.vh(f);for(d in c)c.hasOwnProperty(d)&&(c[d].Jd=this.Jd,c[d].d_=this);this.pr(c);this.Ir.call(this.Pa,a,b);this.Pa.g1(c);this.Ih=c;this.Sc(a)},Sc:function(){var a=Math.pow(2,this.zoom-this.Kc);this.transform={translate:this.oa.Xa(this.Ua).Ob(this.N),scale:a,rotate:0}}});V.J.dd.jd=V.W.extend({D:function(a){this.pm=a},g1:function(a){var b=document.createDocumentFragment(),c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c],f,g=d.get("params");if(d.Z)f=d.Z;else{f=V.f.create("div");f.className="amap-marker";var h=g.gk,k=g.c2;h&&f.appendChild(h);k&&f.appendChild(k);d.Z=f;d.gk=h;if(k=g.title)h.title=k;this.r.Oq=!0;-1===V.g.indexOf(this.r.Hh,d)&&this.r.Hh.push(d);d.Ig=!0}var h=g.offset,k=h.x,l=h.y,m,n;if(d.Ig){var p=[];m=this.ii(d.za.Ka);d.oa=this.oa;n=g.aD;h=Math.round(m[1]+ l+n.y);m=Math.round(m[0]+k+n.x);p.push("top:"+h+"px");p.push("left:"+m+"px");p.push("z-index:"+(g.ZZ?this.r.Rk+10:g.zIndex));V.j.nd||p.push(V.f.rZ(f,g.rI,{x:-k,y:-l}));p.push("display:"+(g.visible?"block":"none")+";");f.style.cssText=p.join(";");(k=g.label)&&k.content&&(g=g.$Z,m=h=0,k.offset&&(h=k.offset.y+"px",m=k.offset.x+"px"),g.style.top=h,g.style.left=m,f.appendChild(g))}else if(d.vO||this.zoom<<0!==this.zoom||d.zoom!==this.zoom||f.parentNode!==this.pm||d.oa!==this.oa)m=this.ii(d.za.Ka),d.oa= this.oa,n=g.aD,h=Math.round(m[1]+l+n.y),m=Math.round(m[0]+k+n.x),f.style.top=h+"px",f.style.left=m+"px";d.zoom=this.zoom;f.parentNode!==this.pm&&(V.j.Mg&&V.g.iepngFix(f),b.appendChild(f),d.Ig=!1);f.B4=this.pm}this.pm.appendChild(b)},ii:function(a){return[(a[0]-this.oa.x)/this.N,(a[1]-this.oa.y)/this.N]}}); ', true), _jsload_('mouse', 'V.$c.Yb({cx:"_docMsMov",AP:function(){var a=this.ab.Ed;V.B.e(a,"mousedown",this.pK,this);this.GA||(this.GA=function(){this.Gx=!1},this.eN=function(a){var c=this.Og(a,!0);this.w(this.cx,{event:a,kL:c})});V.B.e(document,"mousedown",this.GA,this);V.B.e(document,"mousemove",this.eN,this);V.B.e(a,"mousemove",this.qK,this);V.B.e(a,"mouseup",this.rK,this);V.B.e(a,"contextmenu",this.as,this);V.B.e(a,"rightclick",this.as,this);this.e(this.cx,this.vL,this)},US:function(){var a=this.ab.Ed;V.B.F(a,"mousedown", this.pK,this);V.B.F(document,"mousedown",this.GA,this);this.F(this.cx,this.vL,this);V.B.F(document,"mousemove",this.eN,this);V.B.F(a,"mousemove",this.qK,this);V.B.F(a,"mouseup",this.rK,this);V.B.F(a,"contextmenu",this.as,this);V.B.F(a,"rightclick",this.as,this)},CP:function(){V.B.e(this.ab.Ed,"mousewheel",this.oK,this)},XS:function(){V.B.F(this.ab.Ed,"mousewheel",this.oK,this)},BP:function(){this.e("mousemove",this.GG);this.e("mouseout",this.HG);this.e("mouseover",this.IG);this.e("mouseup",this.JG); this.e("mousedown",this.FG);this.e("rightclick",this.LG);this.e("contextmenu",this.AG);this.e("rdblclick",this.MG)},WS:function(){this.F("mousemove",this.GG);this.F("mouseout",this.HG);this.F("mouseover",this.IG);this.F("mouseup",this.JG);this.F("mousedown",this.FG);this.F("rightclick",this.LG);this.F("contextmenu",this.AG);this.F("rdblclick",this.MG)},keyboardEnableChanged:function(){this.get("keyboardEnable")?this.yP():this.hy()},scrollWheelChanged:function(){this.get("scrollWheel")?this.e("mousewheel", this.KG):this.F("mousewheel",this.KG)},as:function(a){V.B.preventDefault(a)},LS:function(a){var b=this.Og(a),c=0;a.wheelDelta?(c=a.wheelDelta/120,window.opera&&9.5>parseFloat(window.opera.version())&&(c=-c)):a.detail&&(c=-a.detail);this.R.xq=(this.R.xq||0)+c;this.w("mousewheel",b)},oK:function(a){if(this.get("scrollWheel"))if(this.LS(a),a.preventDefault)a.preventDefault();else return!1},HA:function(a,b){V.B.preventDefault(a);b=this.Og(a);var c=this.R;if(!this.kr(b.Ub,c.nl)){c.nl=b.Ub;if(c.Jj){if(!c.xc&& (b.Ub.x!==this.R.Ui.x||b.Ub.y!==this.R.Ui.y)){var d;this.SF(c.ml)&&c.ml.get("draggable")&&(d=c.ml);!d&&this.get("dragEnable")&&(d=this);d&&(c.xc=!0,c.zq=d,c.Pf=c.Ui,c.lJ=c.ZB)}c.xc&&(c.yq=b,this.hH())}if(a.preventDefault)a.preventDefault();else return!1}},tu:function(a){V.f.Ab(this.C,"amap-drag");a=this.Og(a);V.f.wY();V.f.sJ();this.R&&(this.R.xc=!1);this.rh&&(this.rh.stop(),this.R.xc=!1,this.set("display"));this.R.il&&(this.R.il=!1,this.R.xc=!1,this.R.zq.w("dragend",a));this.R.Jj=!1;this.R.nl=null; this.R.Pf=null;V.B.F(document,"mousemove",this.HA,this);V.B.F(document,"mouseup",this.tu,this);try{V.B.F(window.parent.document,"mouseup",this.tu,this)}catch(b){}V.B.U2(this.ab.Ed)},xZ:function(a,b){b=b||this.Og(a);var c=this.get("size"),d;0<=b.Ub.x&&b.Ub.x<=c.width&&0<=b.Ub.y&&b.Ub.y<=c.height&&(d=!0);this.QK&&!d?this.w("mouseout",b):!this.QK&&d&&this.w("mouseover",b);this.QK=d},qK:function(a){V.B.preventDefault(a);V.j.bo&&(a=window.event);if(a){a=this.Og(a);var b=this.R,c=a.le,d;this.R.Jj||(c instanceof V.Ia.Fj?d=c.bc.get("cursor"):c instanceof V.S.Wf?d=c.get("cursor"):c===this&&(d=c.get("defaultCursor")),d=this.da.get("optimalCursor")||d,this.C.style.cursor=d||"");d=b.tS;var f=a.xl;d!==f&&(d&&b.bG&&b.bG.w("mouseout",a),f&&c&&(c.w("mouseover",a),c.get("topWhenMouseOver")&&c.bc.setTop(!0)));a.le.w("mousemove",a);a.le!==this&&this.w("mousemove",a);b.tS=a.xl||null;b.bG=a.le||null}},R:{xc:!1},pK:function(a){this.Gx=!0;V.f.YX();V.f.kJ();this.rh&&(this.rh.stop(),this.R.xc=!1);this.R.nl=null;this.R.Pf= null;var b=this.Og(a,!0);this.R.fY=new Date;this.R.ml=b.le;this.R.Ui=b.Ub;this.R.rS=b.button;this.R.Jj=!0;this.R.sS=b;this.R.xc||(this.R.ZB=b);this.Wd&&this.Wd.stop();var c=b.le;!c.bc&&c.get("dragEnable")&&(this.R.Jj=!0);V.f.tb(this.C,"amap-drag");b.le.w("mousedown",b);b.le!==this&&this.w("mousedown",b);V.B.J1(this.ab.Ed);V.B.e(document,"mousemove",this.HA,this);V.B.e(document,"mouseup",this.tu,this);try{window.parent.document&&V.j.bo&&V.B.e(window.parent.document,"mouseup",this.tu,this)}catch(d){}V.B.stopPropagation(a)}, vL:function(a){this.xZ(a.event,a.kL)},q5:function(a){this.HA(a.event,a.kL)},rK:function(a){a=this.Og(a);var b=a.le,c=this.da.get("allBubble")||b.get("bubble");b!==document&&(b.w("mouseup",a),a.le!==this&&c&&this.w("mouseup",a));this.kr(a.Ub,this.R.Ui)&&(this.hg&&this.kr(this.R.Kx,a.Ub)&&a.button===this.R.rS?(clearTimeout(this.hg),this.hg=null,V.B.UK(a)?c?(b.w("dblclick",a),b!==this&&this.w("dblclick",a)):b.w("dblclick",a):b.w("rdblclick",a),this.R.Kx=null):(V.B.UK(a)?(c?(b.w("click",a),b!==this&& this.w("click",a)):(b.w("click",a),this.w("closeOverlays",a)),this.w("closeInfo",a),b.get("topWhenClick")&&b.bc.setTop(!0)):c?(b.w("rightclick",a),b!==this&&this.w("rightclick",a),this.w("contextmenu",a)):(b.w("rightclick",a),b.w("contextmenu",a)),this.R.Kx=a.Ub,this.hg&&clearTimeout(this.hg),this.hg=setTimeout(V.g.bind(function(){clearTimeout(this.hg);this.hg=null;this.R.Kx=null},this),260)))}});V.$c.Yb({KG:function(a){this.pa("mousewheel",a);var b=this;if(1<=Math.abs(this.R.xq)&&!this.NN){var c=this.R.xq;if(1<=c)c=1;else if(-1>=c)c=-1;else return;b.Zs(a.Ik,c);this.R.xq=0;this.NN=!0;setTimeout(function(){b.NN=!1;b.R.xq=0},V.j.Hu?50:40)}},GG:function(a){this.pa("mousemove",a)},HG:function(a){this.pa("mouseout",a)},IG:function(a){this.pa("mouseover",a)},JG:function(a){this.pa("mouseup",a)},FG:function(a){this.pa("mousedown",a)},LG:function(a){this.pa("rightclick",a)},AG:function(a){this.pa("contextmenu", a)},MG:function(a){this.get("doubleClickZoom")&&this.get("zoomEnable")&&this.Zs(a.Ik,-1);this.pa("rdblclick",a)}});V.$c.Yb({cS:function(){this.Fp={left:[37],right:[39],eY:[40],NC:[38],z3:[187,107,61],A3:[189,109,173]};this.bQ={left:this.Bn(this.Xs(100,0)),right:this.Bn(this.Xs(-100,0)),eY:this.Bn(this.Xs(0,-100)),NC:this.Bn(this.Xs(0,100)),z3:this.Bn(this.kI(1)),A3:this.Bn(this.kI(-1))}},yP:function(){this.get("keyboardEnable")&&(this.Fp||this.cS(),V.B.e(document,"keydown",this.Vs,this),V.B.e(document,"keyup",this.yG,this))},hy:function(){V.B.F(document,"keydown",this.Vs,this);V.B.F(document,"keyup",this.yG,this)}, yG:function(a){var b=a.keyCode;!a.ctrlKey||37!==b&&39!==b||this.set("refresh",1)},Vs:function(a){var b=a.keyCode,c;for(c in this.Fp)if(this.Fp.hasOwnProperty(c))for(var d=0;d<this.Fp[c].length;d+=1)if(b===this.Fp[c][d]){if(!this.Gx)return;if(!a.ctrlKey){this.bQ[c]();V.B.preventDefault(a);return}37===b?(this.wS(),V.B.preventDefault(a)):39===b&&(this.gV(),V.B.preventDefault(a))}},Bn:function(a){return function(){a()}},wS:function(){this.get("rotateEnable")&&(this.w("rotate"),this.set("rotation",-15+ parseFloat(this.get("rotation"))%360))},gV:function(){this.get("rotateEnable")&&(this.w("rotate"),this.set("rotation",(15+parseFloat(this.get("rotation")))%360))},kI:function(a){var b=this.da;return function(){1===a?b.zoomIn():b.zoomOut()}},Xs:function(a,b){var c=this.da;return function(){c.panBy(a,b)}}}); ', true), _jsload_('vectorlayer', '(function(a){a.Dk=a.j.ho?new a.es(function(){function a(b,c,d){for(var f=0,g=d.length;f<g;f++){var h=d.charCodeAt(f);if(128>h)b.setUint8(c++,h>>>0&127|0);else if(2048>h)b.setUint8(c++,h>>>6&31|192),b.setUint8(c++,h>>>0&63|128);else if(65536>h)b.setUint8(c++,h>>>12&15|224),b.setUint8(c++,h>>>6&63|128),b.setUint8(c++,h>>>0&63|128);else if(1114112>h)b.setUint8(c++,h>>>18&7|240),b.setUint8(c++,h>>>12&63|128),b.setUint8(c++,h>>>6&63|128),b.setUint8(c++,h>>>0&63|128);else throw Error("bad codepoint "+h); }}function c(a,b,c){var d="",f=b;for(b+=c;f<b;f++)if(c=a.getUint8(f),0===(c&128))d+=String.fromCharCode(c);else if(192===(c&224))d+=String.fromCharCode((c&15)<<6|a.getUint8(++f)&63);else if(224===(c&240))d+=String.fromCharCode((c&15)<<12|(a.getUint8(++f)&63)<<6|(a.getUint8(++f)&63)<<0);else if(240===(c&248))d+=String.fromCharCode((c&7)<<18|(a.getUint8(++f)&63)<<12|(a.getUint8(++f)&63)<<6|(a.getUint8(++f)&63)<<0);else throw Error("Invalid byte "+c.toString(16));return d}function d(a){for(var b=0,c= 0,d=a.length;c<d;c++){var f=a.charCodeAt(c);if(128>f)b+=1;else if(2048>f)b+=2;else if(65536>f)b+=3;else if(1114112>f)b+=4;else throw Error("bad codepoint "+f);}return b}function f(a,b){this.offset=b||0;this.view=a}function g(c,f,h){var k=typeof c;if("string"===k){var q=d(c);if(32>q)return f.setUint8(h,q|160),a(f,h+1,c),1+q;if(256>q)return f.setUint8(h,217),f.setUint8(h+1,q),a(f,h+2,c),2+q;if(65536>q)return f.setUint8(h,218),f.setUint16(h+1,q),a(f,h+3,c),3+q;if(4294967296>q)return f.setUint8(h,219), f.setUint32(h+1,q),a(f,h+5,c),5+q}if(c instanceof ArrayBuffer){q=c.byteLength;if(256>q)return f.setUint8(h,196),f.setUint8(h+1,q),(new Uint8Array(f.buffer)).set(new Uint8Array(c),h+2),2+q;if(65536>q)return f.setUint8(h,197),f.setUint16(h+1,q),(new Uint8Array(f.buffer)).set(new Uint8Array(c),h+3),3+q;if(4294967296>q)return f.setUint8(h,198),f.setUint32(h+1,q),(new Uint8Array(f.buffer)).set(new Uint8Array(c),h+5),5+q}if("number"===k){if(c<<0!==c)return f.setUint8(h,203),f.setFloat64(h+1,c),9;if(0<= c){if(128>c)return f.setUint8(h,c),1;if(256>c)return f.setUint8(h,204),f.setUint8(h+1,c),2;if(65536>c)return f.setUint8(h,205),f.setUint16(h+1,c),3;if(4294967296>c)return f.setUint8(h,206),f.setUint32(h+1,c),5;throw Error("Number too big 0x"+c.toString(16));}if(-32<=c)return f.setInt8(h,c),1;if(-128<=c)return f.setUint8(h,208),f.setInt8(h+1,c),2;if(-32768<=c)return f.setUint8(h,209),f.setInt16(h+1,c),3;if(-2147483648<=c)return f.setUint8(h,210),f.setInt32(h+1,c),5;throw Error("Number too small -0x"+ (-c).toString(16).substr(1));}if("undefined"===k)return f.setUint8(h,212),f.setUint8(h+1,0),f.setUint8(h+2,0),3;if(null===c)return f.setUint8(h,192),1;if("boolean"===k)return f.setUint8(h,c?195:194),1;if("object"===k){var k=0,r=Array.isArray(c),u=null;r?q=c.length:(u=Object.keys(c),q=u.length);16>q?(f.setUint8(h,q|(r?144:128)),k=1):65536>q?(f.setUint8(h,r?220:222),f.setUint16(h+1,q),k=3):4294967296>q&&(f.setUint8(h,r?221:223),f.setUint32(h+1,q),k=5);if(r)for(r=0;r<q;r++)k+=g(c[r],f,h+k);else for(r= 0;r<q;r++)var t=u[r],k=k+g(t,f,h+k),k=k+g(c[t],f,h+k);return k}throw Error("Unknown type "+k);}function h(a){var b=typeof a;if("string"===b){var c=d(a);if(32>c)return 1+c;if(256>c)return 2+c;if(65536>c)return 3+c;if(4294967296>c)return 5+c}if(a instanceof ArrayBuffer){c=a.byteLength;if(256>c)return 2+c;if(65536>c)return 3+c;if(4294967296>c)return 5+c}if("number"===b){if(a<<0!==a)return 9;if(0<=a){if(128>a)return 1;if(256>a)return 2;if(65536>a)return 3;if(4294967296>a)return 5;if(1.8446744073709552E19> a)return 9;throw Error("Number too big 0x"+a.toString(16));}if(-32<=a)return 1;if(-128<=a)return 2;if(-32768<=a)return 3;if(-2147483648<=a)return 5;if(-9223372036854775E3<=a)return 9;throw Error("Number too small -0x"+a.toString(16).substr(1));}if("undefined"===b)return 3;if("boolean"===b||null===a)return 1;if("object"===b){b=0;if(Array.isArray(a))for(var c=a.length,f=0;f<c;f++)b+=h(a[f]);else for(var g=Object.keys(a),c=g.length,f=0;f<c;f++)var k=g[f],b=b+(h(k)+h(a[k]));if(16>c)return 1+b;if(65536> c)return 3+b;if(4294967296>c)return 5+b;throw Error("Array or object too long 0x"+c.toString(16));}throw Error("Unknown type "+b);}var k={j6:function(a){if(void 0===a)return"undefined";var b,c;a instanceof ArrayBuffer?(c="ArrayBuffer",b=new DataView(a)):a instanceof DataView&&(c="DataView",b=a);if(!b)return JSON.stringify(a);for(var d=[],f=0;f<a.byteLength;f++){if(20<f){d.push("...");break}var g=b.getUint8(f).toString(16);1===g.length&&(g="0"+g);d.push(g)}return"<"+c+" "+d.join(" ")+">"}};k.S7=a; k.R7=c;k.Q7=d;f.prototype.map=function(a){for(var b={},c=0;c<a;c++){var d=this.parse();b[d]=this.parse()}return b};f.prototype.pz=function(a){var b=new ArrayBuffer(a);(new Uint8Array(b)).set(new Uint8Array(this.view.buffer,this.offset,a),0);this.offset+=a;return b};f.prototype.Cv=function(a){var b=c(this.view,this.offset,a);this.offset+=a;return b};f.prototype.gz=function(a){for(var b=Array(a),c=0;c<a;c++)b[c]=this.parse();return b};f.prototype.parse=function(){var a=this.view.getUint8(this.offset); if(160===(a&224))return this.offset++,this.Cv(a&31);if(128===(a&240))return this.offset++,this.map(a&15);if(144===(a&240))return this.offset++,this.gz(a&15);if(0===(a&128))return this.offset++,a;if(224===(a&224))return a=this.view.getInt8(this.offset),this.offset++,a;if(212===a&&0===this.view.getUint8(this.offset+1))this.offset+=3;else{switch(a){case 217:return a=this.view.getUint8(this.offset+1),this.offset+=2,this.Cv(a);case 218:return a=this.view.getUint16(this.offset+1),this.offset+=3,this.Cv(a); case 219:return a=this.view.getUint32(this.offset+1),this.offset+=5,this.Cv(a);case 196:return a=this.view.getUint8(this.offset+1),this.offset+=2,this.pz(a);case 197:return a=this.view.getUint16(this.offset+1),this.offset+=3,this.pz(a);case 198:return a=this.view.getUint32(this.offset+1),this.offset+=5,this.pz(a);case 192:return this.offset++,null;case 194:return this.offset++,!1;case 195:return this.offset++,!0;case 204:return a=this.view.getUint8(this.offset+1),this.offset+=2,a;case 205:return a= this.view.getUint16(this.offset+1),this.offset+=3,a;case 206:return a=this.view.getUint32(this.offset+1),this.offset+=5,a;case 207:var a=this.view.getUint32(this.offset+1),b=this.view.getUint32(this.offset+5);this.offset+=9;return 4294967296*a+b;case 208:return a=this.view.getInt8(this.offset+1),this.offset+=2,a;case 209:return a=this.view.getInt16(this.offset+1),this.offset+=3,a;case 210:return a=this.view.getInt32(this.offset+1),this.offset+=5,a;case 211:return a=this.view.getInt32(this.offset+ 1),b=this.view.getUint32(this.offset+5),this.offset+=9,4294967296*a+b;case 222:return a=this.view.getUint16(this.offset+1),this.offset+=3,this.map(a);case 223:return a=this.view.getUint32(this.offset+1),this.offset+=5,this.map(a);case 220:return a=this.view.getUint16(this.offset+1),this.offset+=3,this.gz(a);case 221:return a=this.view.getUint32(this.offset+1),this.offset+=5,this.gz(a);case 202:return a=this.view.getFloat32(this.offset+1),this.offset+=5,a;case 203:return a=this.view.getFloat64(this.offset+ 1),this.offset+=9,a}throw Error("Unknown type 0x"+a.toString(16));}};k.If=function(a){var b=new DataView(a),b=new f(b),c=b.parse();if(b.offset!==a.byteLength)throw Error(a.byteLength-b.offset+" trailing bytes");return c};k.Cq=function(a){var b=new ArrayBuffer(h(a)),c=new DataView(b);g(a,c,0);return b};return{Cq:function(a,b){b(null,{ao:a.ao,Mc:a.Mc,yb:k.Cq(a.yb)})},If:function(a,b){b(null,{ao:a.ao,Mc:a.Mc,yb:k.If(a.yb)})}}},{hostWorker:a.ru,clientId:"msg",lazy:!0}):new a.es(function(){},{hostWorker:a.ru, clientId:"msg",lazy:!0})})(V);V.CO=V.W.extend({ka:[V.ea],D:function(){this.xV=V.q.MN+"://"+V.q.Jr;this.cj=[];this.Yh=V.g.Bb(this);this.uP=1;this.Sb="closed";this.count=0;this.kC=[];V.event.V(window,"beforeunload",this.t_,this);V.Dk&&V.Dk.Fn()},t_:function(){this.kC.length&&new V.ra.Ca(V.q.dc+"://webapi.amap.com/count?"+["type=v","k="+V.q.key,"u="+V.q.Dl,"m="+(V.j.U?1:0),"pf="+V.j.lr,"frq="+this.kC.join(",")].join("&"))},close:function(){this.ub&&(this.Sb="closed",this.cj=[],this.hx())},tX:function(){var a=this;if("closed"===a.Sb){var b= new WebSocket(this.xV);b.binaryType="arraybuffer";a.Sb="connecting";b.onopen=V.g.bind(this.zT,this);b.onclose=V.g.bind(this.fT,this);b.onerror=V.g.bind(this.bb,this);b.ontimeout=V.g.bind(this.bb,this);b.onmessage=V.g.bind(this.IT,this);this.ub=b;b.vX=setTimeout(function(){b.readyState!==WebSocket.OPEN&&a.hr()},1200)}},MK:function(){return"connected"===this.Sb},hr:function(){this.Sb="unsupport";this.cj=[];this.hx();this.w("disable")},bb:function(){this.hr()},zT:function(){this.uX=!0;this.flush();this.w("open")}, fT:function(){this.uX?(this.Sb="closed",this.hx()):this.hr()},xG:function(a,b){if("unsupport"===this.Sb)return!1;"connected"===this.Sb?this.EH(a):("closed"===this.Sb&&this.tX(),this.cj.push({data:a,wr:b}));this.count+=1},nT:function(a){if("ack"===a.type)switch(a.command){case "tiles":this.w("ack",a);break;case "retain":this.Sb="connected";this.flush();break;case "close":this.hr()}else 0===a.content.errcode&&("tiles"===a.type?this.w("tiles",a):"traffic"===a.type&&this.w("traffic",a))},$_:function(a){"encode"=== a.Mc?this.xG(a.yb):"decode"===a.Mc&&this.nT(a.yb)},send:function(a){var b=this.uP++,c=this;V.Dk.Cq({Mc:"encode",yb:a,ao:this.Yh},function(a,f){a||c.xG(f.yb,b)});return b},EH:function(a){var b=this,c=b.ub;c.readyState===WebSocket.OPEN&&(c.send(a),b.So&&clearTimeout(b.So),b.So=setTimeout(function(){b.hr();b.So=null},5E3),b.VC&&clearTimeout(b.VC),b.VC=setTimeout(function(){b.close();b.VC=null},1E4))},hx:function(){var a=this.ub;a&&(clearTimeout(a.vX),a.onopen=a.onmessage=a.onerror=null,a.close(),this.ub= null)},flush:function(){if("connected"===this.Sb){for(var a=0;a<this.cj.length;a+=1)this.EH(this.cj[a].data);this.cj=[]}},qY:function(a){for(var b=0;b<this.cj.length;b+=1)if(this.cj[b].wr===a)return this.cj.splice(b,1),!0;return!1},IT:function(a){this.So&&(clearTimeout(this.So),this.So=null);var b=this;V.Dk.Ct([a.data]);V.Dk.If({ao:b.Yh,Mc:"decode",yb:a.data},function(a,d){a||b.$_(d)})}});V.ui={FN:function(){0===V.Aa.Jc&&V.ui.uK()},P7:function(a,b){if(!a)return!1;for(var c=0,d=a.length;c<d;c++)if(a[c]&&a[c].Oo===b)return!0},hX:function(a,b){var c="limg-"+a.key+"-"+b.r.Yh;V.Aa[c]&&delete V.Aa[c]},MY:function(a){return V.Aa[a.Oo?a.Oo:a]},gm:function(a){var b=null,c=null,d=!1;a.Oo?(b=a,c=b.Oo,(a=b.url)&&(d=!0)):c=a;var f=V.Aa[c];d&&f&&f.src!==a&&(f=V.Aa[c]=null);if(!f&&a){d="data:"===a.substr(0,5);f=document.createElement("img");d||(f.crossOrigin="Anonymous");V.Aa[c]=f;f.loaded=!1;V.Aa.Jc+= 1;V.B.e(f,"load",this.uu,this);V.B.e(f,"error",this.tK,this);var g=this;f.Jo=setTimeout(function(){f.loaded||g.uK()},300);f.src=a;b&&(f.K4=c,b.url=null)}},uK:function(){for(var a=0;a<V.Aa.Wk.length;a+=1)V.Aa.Wk[a].set("display")},SI:function(a){V.B.F(a,"load",this.uu,this);V.B.F(a,"error",this.tK,this)},uu:function(a){a=a.target;a.loaded=!0;V.Aa.Jc-=1;this.SI(a);this.FN();a.Jo&&(clearTimeout(a.Jo),a.Jo=null)},tK:function(a){a=a.target;a.loaded=!1;V.Aa.Jc-=1;this.SI(a);this.FN();a.Jo&&(clearTimeout(a.Jo), a.Jo=null)}};V.S.Tg=V.S.Wf.extend({D:function(a,b){V.Aa.Wk.push(this);this.Yh=V.g.RJ("layer");this.Eb=2;a.get("textRatio");this.jD=25;this.Q("tiles",a);this.e3=a.get("vdataUrl")||b.da.get("vdataUrl")||V.q.Jr;this.zi=!0;this.Qa=a;this.Ug=V.j.U?!1:!0;this.l=b;this.Wh=this.Vh=!0;this.Uc("zoom center centerCoords resolution coordsBound styleID iconsID businessIconsID forceBig mode display".split(" "),b);this.Uc("zooms detectRetina visible zIndex textIndex watermark opacity".split(" "),a);this.Q("lang",b,!0);this.get("watermark")&& (this.Uo=new Image,this.Uo.src=this.get("watermark"));this.Na={};this.Lf={};this.fd=256;this.lm=[];this.wf=this.tg=0;this.ha=V.j.ha&&this.get("detectRetina");this.fd=256*(this.ha?2:1);this.Q("mapStyle",b);this.Q("style",b);this.ij=0;this.Q("features",b);this.Rf=18;this.Q("reload",a)},mapStyleChanged:function(){this.get("mapStyle");this.td=!1;if(this.l.get("styleUrl")||"normal"===this.get("mapStyle"))this.td=!!this.l.get("showBuildingBlock");this.featuresChanged()},featuresChanged:function(){this.set("reload")}, langChanged:function(){this.set("reload");this.Qa.tm()},JV:function(){var a=!1,b=this.sF();if(b){if(this.$e){var c="active"===this.$e.zp;b.Mw(this.$e);c&&(b.$m(this.$e,"active"),a=!0)}V.j.dX&&!a&&b.Ty()}},yw:function(){this.JV()},Hr:function(a,b){var c=!0;if("hotspotout"===a)this.l.da.set("optimalCursor",null);else if("hotspotover"===a)this.l.da.set("optimalCursor","pointer");else if("mouseup"===a||"mousedown"===a)c=!1;var d=this.sF();if(d)switch(a){case "hotspotout":d.az(b);break;case "hotspotover":d.$m(b, "hover");break;case "mouseup":d.$m(b,"hoverup");break;case "mousedown":d.$m(b,"active")}c&&(c=b.Ka,c=new V.K(c[0],c[1]),c=this.l.uf(c,3),this.l.da.w(a,{name:b.name,lnglat:c,id:b.jr,isIndoorPOI:b.SK}))},sF:function(){if(!V.j.DZ){if(!this.J)return null;var a=this.l?this.l.da.get("hotspotOptions"):{},a=V.extend({},a);if(a.disableHighlight)return null;this.Zp||(this.Zp=new V.S.Tg.EO(this.J));return this.Zp}},Nj:function(a){(a=this.ZJ(a))&&this.Hr("hotspotclick",a)},kn:function(a){if(!this.l.Wg||"mousemove"!== a.type){var b=this.ZJ(a);switch(a.type){case "mousemove":b&&this.$e!==b&&(this.$e&&this.Hr("hotspotout",this.$e),this.Hr("hotspotover",b));!b&&this.$e&&this.Hr("hotspotout",this.$e);break;case "mouseup":case "mousedown":b&&this.Hr(a.type,b)}this.$e=b}},textIndexChanged:function(){this.set("display")},b0:function(){this.l.e("click",this.Nj,this);this.l.e("mousemove",this.kn,this);this.l.e("mousedown",this.kn,this);this.l.e("mouseup",this.kn,this)},Dz:function(){this.l.F("click",this.Nj,this);this.l.F("mousemove", this.kn,this);this.l.F("mousedown",this.kn,this);this.l.F("mouseup",this.kn,this)},ri:function(){return null},tk:function(){return{zi:!0,fd:256,visible:this.get("visible"),Zc:this.get("zooms"),It:this.Ug&&this.Va,Vh:!this.l.Iv,Wh:!this.l.Iv,opacity:this.get("opacity"),Rc:!1}},ki:function(a){if(V.J.canvas.Tg)return new V.J.canvas.Tg(this,a)},Lt:function(a){0===a.indexOf("amap://styles/")&&(a="normal");var b=this.get("forceBig")||V.j.U&&!this.ha?"6":"5";this.url=V.q.dc+"://"+this.e3+"/tiles?mapType="+ a+"&v=2&style="+b;this.url+=this.ha?"&rd=2":"&rd=1";this.url+="&flds="+this.xa;this.url+="&t="},styleChanged:function(){this.l.Hc||this.featuresChanged()}}); V.S.Od=V.S.Tg.extend({ki:function(a){var b=this;if(!b.Uo&&V.j.Zd&&"vw"===b.l.get("baseRender")){var c=["wgl"];this.l.Hc&&c.push("wgl2");if(V.Ra.Cu(c))return new V.J.We.Od(b,a)}else if(c=["cmng","cgl"],this.l.Hc&&c.push("cgl2"),V.Ra.Cu(c))return new V.J.canvas.Od(b,a);V.Ra.tf(c,function(){b.set("display")})},featuresChanged:function(){var a=this.get("features"),b=[];"all"===a?b=["region","building","road"]:a&&(-1!==V.g.indexOf(a,"bg")&&b.push("region"),-1!==V.g.indexOf(a,"building")&&b.push("building"), -1!==V.g.indexOf(a,"road")&&b.push("road"));this.xa=b;this.Lt(this.get("mapStyle")||"normal");this.set("reload")}}); V.S.yg=V.S.Tg.extend({ki:function(a){var b=this;if(this.CK()){if(this.Ov=!0,V.J.canvas.HD)return this.HW(),a=new V.J.canvas.HD(this,a),a.e("afterLabelRender",this.yw,this),a}else{b.Ov=!1;if(V.J.canvas.GD)return a=new V.J.canvas.GD(this,a),a.e("afterLabelRender",this.yw,this),a;a=["cmng","labelcanvas"];V.j.Sz&&a.push("labelDir");V.Ra.tf(a,function(){b.set("display")})}},CK:function(){var a=this.get("mapStyle");return"normal"!==a&&"amap://styles/normal"!==a||this.l.get("nolimg")?!1:V.j.Ov?!0:!1},JZ:function(){var a= this.get("mapStyle");return"normal"!==a&&"amap://styles/normal"!==a||this.l.get("nolimg")||V.j.Rc||V.j.U?!1:!0},featuresChanged:function(){var a=this.get("features"),b=this.get("mapStyle"),c=[];"all"===a?c=["roadlabel","poilabel"]:a&&(-1!==V.g.indexOf(a,"road")&&c.push("roadlabel"),-1!==V.g.indexOf(a,"point")&&c.push("poilabel"));a=this.CK();c.length&&(a||this.JZ())&&c.unshift("limg");this.xa=c;this.Lt(b);this.set("reload");this.J&&a^this.Ov&&(this.Zp&&(this.Zp=this.Zp.J=null),this.J.F("afterLabelRender", this.yw,this),this.J.iJ(),this.J=null)},HW:function(){this.em=V.q.dc+"://"+(this.Qa.get("vdataUrl")||this.l.da.get("vdataUrl")||V.q.Jr)+"/limg?";var a=this.ha?2:1;this.em+="&font="+(V.j.U&&!this.ha?"big":"small");this.em+="&scl="+a;this.em+="&t="},ZJ:function(a){return(a=this.PJ(this.l.rb(a.Qe,20),!0))?a[0]:null},PJ:function(a,b){var c=this.l.Ak.nu(this);if(c)return c.Iq(a,b)}});V.S.Tg.EO=V.W.extend({D:function(a){this.nV(a)},nV:function(a){this.J=a},az:function(a){if(a.zp){a.zp=!1;var b=this.J;b&&b.az.apply(b,arguments)}},Mw:function(a){a.zp=!1;var b=this.J;b&&b.Mw.apply(b,arguments)},$m:function(a,b){b||(console.warn("hlStyle is required, e.g. hover, active.."),b="hover");if(a.zp!==b){a.zp=b;var c=this.J;c&&c.$m.apply(c,arguments)}},Ty:function(){var a=this.J;a&&a.Ty()}});V.lw={Gw:function(a,b){this.Qd={};this.Qd.ao=V.g.Bb(this.Qd);b.ub||(b.ub=new V.CO);this.ub=b.ub;this.ub.e("tiles",this.KL,this);this.ub.e("ack",this.JL,this);this.ub.e("disable",this.HL,this)},EB:function(a){if(this.r&&a.bL===this.r.Yh){var b=this.r.xa,b=b[b.length],c=null,c="poilabel"===b||"roadlabel"===b?"labels":"allbase";this.Kd||this.pg?this.aC([this.r,"groupcomplete",null,null,c]):(this.th(),this.mn.Xt(this.r,"groupcomplete",null,null,c));b=0;for(c=a.ce.length;b<c;b+=1)this.DB(a.ce[b],a.Gu, a.tr,a.U)}},DB:function(a,b){var c=a.Mc,d=this.Na.get(a.yf);if(d){var f=this.r.xa;d.xa||(d.Mb={},d.xa=[]);var g="";this.l.Aj&&!this.l.Hc&&this.GJ(c,a.yb);"poilabel"===c||"roadlabel"===c?(a.Ng||(g=a.yb,a.Ng=null),d.xa.push.apply(d.xa,a.yb),c===this.r.xa[this.r.xa.length-1]&&(d.Ng=null)):d.Mb[c]=a.yb;"building"!==c&&"poilabel"!==c||!a.cm||d.ag||(d.ag={},d.ag.bd=a.cm,V.Hm&&V.Hm.w("vecTileParsed.buildings",{Gv:d}));if("roadlabel"!==c&&"poilabel"!==c||!V.j.Sz&&!this.l.Hc)this.Kd||this.pg?this.aC([this.r, g,d,b,c]):(this.th(),this.mn.Xt(this.r,g,d,b,c));c===f[f.length-1]&&(c="roadlabel"===c||"poilabel"===c?"labels":"allbase",this.Kd||this.pg?this.aC([this.r,"tileComplete",d,b,c]):(this.th(),this.mn.Xt(this.r,"tileComplete",d,b,c)))}},vz:function(){if(this.l){var a=this.l.da.getMapStyle();this.hm=a;this.nS(a);this.ub&&"unsupport"!==this.ub.Sb&&(-1!==a.indexOf("amap://styles")&&(a="normal"),this.ub.send({command:"status",payload:{mapType:a,style:V.j.U&&!this.r.ha?"6":"5",rd:this.r.ha?2:1}}))}},mapStyleChanged:function(){this.vz()}, styleChanged:function(){this.vz()},HL:function(){for(var a in this.Qd)this.Qd.hasOwnProperty(a)&&this.Qd[a].Io&&(this.pp(this.Qd[a].Io,this.Qd[a].Bi),delete this.Qd[a]);this.ub=null;this.Ii("mapStyle");this.set("display",1)},JL:function(a){var b=a.reqId;this.Qd[b]&&(!a.content.status&&this.Qd[b]&&this.pp(this.Qd[b].Io,this.Qd[b].Bi),delete this.Qd[b])},KL:function(a){if(this.Qd[a.reqId]){var b=a.content.opt;b===this.qc?this.CB(a.content.data,b):this.pp(this.Qd[a.reqId].Io,this.Qd[a.reqId].Bi)}},n_:function(a, b){if(a.length){var c=1,d=[];18<b&&(c=Math.pow(2,b-18));for(var f=Math.pow(2,20-a[0].Fa.z),g=0;g<a.length;g+=1){var h=a[g],k=h.Fa;h.Bi=b;k.N=f;if(18<b&&!this.Bh){for(var l=0;l<c;l+=1)for(var m=0;m<c;m+=1){var n=new V.Yf(new V.Qh(b,c*k.x+l,c*k.y+m));this.Na.zc(n.key)||(this.Na.set(n.key,n),n.status="loading")}this.Na.set(h.key+"/"+b,h)}else this.Na.set(h.key,h),this.Bh&&10>k.z&&this.IY(h)?this.set("display",0):h.status="loading"}this.zU(a,b,V.g.bind(function(a,c){if(c.length){for(var f=0,g=c.length;f< g;f++){var h=c[f].Fa,k=h.x,l=h.y,h=h.z;if(10>h){var m=Math.pow(2,h);if(k>=m||0>k)k=(k+m)%m}d.push(V.g.Wz(k,l,h).join(","))}!this.fo&&this.ub&&"unsupport"!==this.ub.Sb?(1>this.ub.count||3<this.Oy?this.mB(c,b,d):(2!==this.ub.count&&"connected"===this.ub.Sb||this.vz(),this.m_(c,b,d)),this.ub.count+=1,this.ub.aL&&this.ub.kC.push(Math.ceil((new Date-this.ub.aL)/1E3)),this.ub.aL=new Date):this.mB(c,b,d)}},this))}},nS:function(a){a&&"normal"!==a&&0!==a.indexOf("amap://styles/")?this.QC=!0:this.QC=!1},zU:function(a, b,c){if((V.j.ud||V.j.qj&&!this.l.da.Va)&&(this.aB||!this.QC)&&18>=b){var d=this;V.Lm.get({type:this.l.da.Va?"NFS":"FS",td:this.l.da.get("showBuildingBlock"),A2:a,Zd:!!this.Bh,S:this.r,url:this.Tn(b,[])},function(f,g){if(!f&&g.NA.length){g.NA.length===a.length&&V.Ld.Ce.end({key:d.rF(),index:0,id:d.l.da.id});if(g.ce){d.hk=g.Hf["x-vd-v"];d.$n=g.Hf.tv;var h="#"+g.Hf.bgc;d.l.ge!==h&&(d.l.ge=h);g.NA.forEach(function(a){a.status="loaded"});h=d.oF(b,g.ce);d.EB(h)}else g.e_.forEach(function(a){d.Su(a,b,[], g.Hf["x-vd-v"],!0)}),d.set("display");a=g.B_}c(null,a)})}else c(null,a)},m_:function(a,b,c){var d=(new Date).getTime()+"-"+(this.ub.count+1&65535),f={command:"tiles",reqId:d,payload:{t:c,opt:b,cs:{level:b,flds:this.r.xa.join(",")}}},g;if(!this.ub.MK()){var h=this;setTimeout(function(){h.ub&&!h.ub.MK()&&(h.Oy?h.Oy++:h.Oy=1,h.ub.qY(g)&&(delete h.Qd[d],h.mB(a,b,c)))},300)}g=this.ub.send(f);this.Qd[d]={Io:a,Bi:b}},GB:function(a){a.Va||(a.status="",a.Va=void 0,a.va=null,a.cc=null,a.pc&&(a.pc.cc=null,a.pc.pc= null,a.pc=null),this.Na.Dj(a.key))},oF:function(a,b){return{KW:this.r.td,Mt:V.q.Mt||null,X4:this.r.get("businessIconsID"),hk:this.hk,$n:this.$n,f6:this.r.get("iconsID"),bL:this.r.Yh,Gu:a,ce:b,U:this.r.get("forceBig")||V.j.U,mode:this.r.get("mode"),G0:V.q.dc,HM:this.r.get("forceBig")?1:this.r.Eb,tr:this.r.get("forceBig")?!1:this.r.ha}},NX:function(a){a=a.split(";");for(var b=0,c=a.length;b<c;b+=1){a[b]=a[b].split(",");for(var d=0,f=a[b].length;d<f;d+=1)a[b][d]=parseInt(a[b][d],36)}return a},CB:function(a, b,c){if(this.r){for(var d=[],f=0,g=a.length;f<g;f+=1){var h=a[f];h&&(c&&(h=JSON.parse(h)),h["x-vd-v"]?(this.hk=h["x-vd-v"],this.$n=h.tv,this.Qo=[h.tv,h.vdv].join("-"),h.bgc&&(h="#"+h.bgc.substring(2),this.l.ge!==h&&(this.l.ge=h))):this.Su(h,b,d))}if(d.length){var k=this;a=null;var l;this.Bh?(a=V.o3,l=a.VB):(a=V.Dk,l=this.fo?a["label:parseLabel"]:a["base:parseData"]);k.r.get("iconsID");k.r.get("businessIconsID");k.r.get("mode");(function(){l(k.oF(b,d),function(a,c){if(k.r&&!a){var d=c.icons;if(d)for(var f= 0;f<d.length;f+=1)V.ui.gm(d[f]);(V.j.ud||V.j.qj&&!k.l.da.Va)&&(k.aB||!k.QC)&&18>=b&&V.Lm.set({ce:c.data.ce,"x-vd-v":k.hk,tv:k.$n,vdataVersion:k.Qo,bgc:k.l.ge,Zd:!!k.Bh,url:k.Tn(10,[]),S:k.r,td:k.l.da.get("showBuildingBlock")},function(){});c.data&&k.EB(c.data)}})})()}}},Su:function(a,b,c){function d(d,f,g){f=[g,d,f].join("/");18<b&&!l.Bh&&(f+="/"+b);if((d=l.Na.get(f))&&"loaded"!==d.status)if(l.vN(d,p)){if(-1!==n.indexOf(m))if("limg"===m){if(f=a[1],d.Ng=f,"string"===typeof f.b&&(f.b=l.NX(f.b)),g="", g="object"===typeof f.u?f.u.url:f.u)d={url:g,Oo:"limg-"+d.key+"-"+l.r.Yh},f.u=d,V.ui.gm(d,!0)}else{f={Hi:d.Fa,yf:f,yb:a,Mc:m,zI:l.l.ge,SZ:"building"===m,eo:"poilabel"===m||"roadlabel"===m||"building"===m&&l.r.td};if("poilabel"===m||"roadlabel"===m)f.Ng=d.Ng;m===n[n.length-1]&&(d.status="loaded");c.push(f)}}else l.uC(b,d,p,V.g.bind(l.GB,l)),18<b&&l.Na.Dj(f)}var f=a[0].split("-"),g=parseInt(f[1]),h=parseInt(f[2]),k=parseInt(f[0]),l=this,m=f[3],n=this.r.xa,p=18<b?Math.pow(2,b-18):1,f=Math.ceil(l.rg.bv/ 2),q=Math.pow(2,k);10>k&&(g<=f&&d(g+q,h,k),g>=q-f&&d(g-q,h,k));d(g,h,k)},aC:function(a){this.zl||(this.zl=[]);this.zl.push(a)},th:function(){if(this.zl&&this.zl.length){for(var a=0,b=this.zl.length;a<b;a+=1)this.mn.Xt.apply(this.mn,this.zl[a]);this.zl=[]}},pp:function(a,b,c){c||(c=18<b?Math.pow(2,b-18):1);for(var d=0;d<a.length;d+=1){var f=a[d];this.uC(b,f,c,V.g.bind(this.GB,this));18<b&&this.Na.Dj(f.key+"/"+b)}V.j.ud&&V.Lm.Dj({Io:a,url:this.Tn(b,[]),S:this.r,Zd:!!this.Bh,td:this.l.da.get("showBuildingBlock")})}, Tn:function(a,b){return this.r.url+b.join(";")+"&lv="+a},rF:function(){var a=this.r.url,b="rb";if(/\\/limg/.test(a)||/flds=[^&]+label/.test(a))b="rl";return b},mB:function(a,b,c){function d(c,d){if(b!==h.qc)h.pp(a,b,k),f.NE=!0,f.startTime||(f.onreadystatechange="");else{var g=c.split("|");g[0]=d+g[0];var p=g,q="";g[g.length-1]&&(q=g[g.length-1],p=g.splice(0,g.length-1));h.CB(p,b,!0);return q}}var f=new XMLHttpRequest;c=this.Tn(b,c,a);var g=0,h=this;f.$u="";var k=18<b?Math.pow(2,b-18):1;f.onreadystatechange= function(){if(h.r)if(3===f.readyState){if(!f.NE){var c=f.responseText.substring(g);f.$u=d(c,f.$u);g=f.responseText.length;f.xE=!0}}else 4===f.readyState&&(V.Ld.Ce.end({key:h.rF(),index:0,id:h.l.da.id}),f.NE||(c=f.responseText.substring(g),h.fo&&(c+="|"),d(c,f.$u),f.$u="",f.xE=!0),f.startTime&&V.Ld.Ce.push({id:h.l.da.id,key:"ds",Vk:f.responseText.length/2}),f.xE||h.pp(a,b,k))};f.onerror=function(){};this.yZ||(this.yZ=1);f.open("GET",c,!0);f.send()},vN:function(a,b){var c=this.Nr||this.rg,d=a.Fa.x, f=a.Fa.y;return d>Math.floor(c.be/b)||d<Math.floor(c.Se/b)||f>Math.floor(c.od/b)||f<Math.floor(c.pd/b)?!1:!0},uC:function(a,b,c,d){if(18<a){b=b.Fa;for(var f=0;f<c;f+=1)for(var g=0;g<c;g+=1){var h=new V.Qh(a,c*b.x+f,c*b.y+g)+"";(h=this.Na.get(h))&&d(h)}}else d(b),b.pc&&d(b.pc)}};V.J.canvas.yg=V.J.Sg.extend({ka:[V.lw],D:function(a,b){arguments.callee.cb.apply(this,arguments);this.Yh=V.g.Bb(this);this.Om=300;this.Rf=a.Rf;this.fo=this.zi=!0;this.Q("mapStyle",a.l);this.Q("style",a.l);this.aB=!0;this.vn=1;var c=this;this.EF=function(){c.L_=!0;c.set("display",0)};this.qe();this.j_(a)},j_:function(a){a=V.j.U||a.ha?"big":"small";var b=V.q.dc+"://vdata.amap.com/style_icon/icon-biz-"+a+".png";V.ui.gm(V.q.dc+"://vdata.amap.com/style_icon/icon-normal-"+a+".png",!0);V.ui.gm(b,!0)},bx:function(a){V.ui.hX(a, this);var b=V.J.canvas.yg.De.bx;b&&b.apply(this,arguments)},qe:function(){this.$g=document.createElement("canvas");this.$g.className="amap-labels";this.$g.draggable=!1;this.$g.TK=!0;this.Bg=this.$g.getContext("2d");this.Rq=[];this.dr=[];this.uk=this.r.ha?16:8},um:function(a){var b=Math.pow(2,a.Y.zoom-this.Kc),c=this.r.ha?this.r.Eb:1,d=a.Y.Ga.Xa(this.wk).Ob(this.Gd);this.transform={translate:this.transform.translate.add(d.Bc(c)),scale:b/c,rotate:0};this.Ga=a.Y.Ga},Bo:function(a,b){if(!this.oa||3E4< Math.abs(this.Ga.x-this.oa.x)/this.N||3E4<Math.abs(this.Ga.y-this.oa.y)/this.N)this.oa=this.Ga;this.qd=this.Kc;this.Sf=this.Gd;this.zj=!1;this.currentTime=+new Date;this.RC=b.RC;this.oc=[this.ta.hb.x,this.ta.hb.y];this.Ug=b.It;var c=this.Dr;this.Kd=this.zoom<<0!==this.zoom;var d=this.Ga.Xa(this.oa);d.x<-V.g.Wa/2&&(d.x+=V.g.Wa);d.x>V.g.Wa/2&&(d.x-=V.g.Wa);this.uz=d.Ob(this.Gd);for(d=c.length-1;0<=d;d-=1){var f=c[d];if(f.length){var g=f[0].Fa.z,h=!1;!1===a.uW||!f.ej||V.Aa.Jc||!(g<=this.zoom&&"in"=== this.HB||g>=this.zoom&&"out"===this.HB)&&this.HB||this.labels&&this.labels.length&&!a.Dh&&this.dC(this.labels.Cr,this.rg)||(h=!0,this.labels&&this.labels.Ch?(this.xk=this.labels.Ch,this.xk.zoom=this.labels.zoom):(this.xk=[],this.xk.zoom=null),this.labels=[],this.labels.zoom=g,this.labels.Cr=this.rg);if(h){for(g=f.length-1;0<=g;g-=1){var k=f[g],h=!1,l=k.xa;!l&&k.pc&&k.pc.xa&&(l=k.pc.xa,h=!0);if(l){for(var k=0,m=l.length;k<m;k+=1)l[k].reverse=h;Array.prototype.push.apply(this.labels,l)}}this.labels.sort(function(a, b){return a.Kk>b.Kk?-1:a.oe>=b.oe?-1:1})}}}this.YW(a)&&this.c1(a);this.L_=!1;this.Sc(a);this.ej&&!this.r.Va&&(c=this.r,V.Ld.Ce.end({id:this.l.da.id,key:"rl",index:2}),c.Va=!0,c.of?c.pa("renderComplete"):(c.of=!0,c.pa("complete")))},ve:function(a,b){this.hm=a.hm;this.Xo=a.Xo;this.Zu(a,b);this.Kd||this.th();this.wk&&(a.BN||a.IC&&V.j.Gg||a.pg&&!a.Kd&&a.zW)?this.um(a,b):this.Bo(a,b);this.wk=this.Ga;this.kj=this.labels;this.zj&&this.set("display",0)},Sc:function(a){var b=this.Ga.Xa(this.oa);b.x<-V.g.Wa/ 2&&(b.x+=V.g.Wa);b.x>V.g.Wa/2&&(b.x-=V.g.Wa);this.transform={translate:new V.K(a.Y.ta.gb.x*(this.r.ha?this.r.Eb:1),a.Y.ta.gb.y*(this.r.ha?this.r.Eb:1)),scale:1/(this.r.ha?this.r.Eb:1),rotate:0}},dC:function(a,b){return a.pd===b.pd&&a.Se===b.Se&&a.od===b.od&&a.be===b.be},Iq:function(a,b){var c;if(this.zoom){var d=a.Ob(Math.pow(2,20-this.zoom));this.labels&&(c=this.aZ(d,b))&&(c.SK=!1);!c&&this.Gb&&(c=this.$Y(d))&&(c.SK=!0)}return c?[c]:[]},aZ:function(a,b){for(var c=a.x,d=a.y,f=this.labels.Ch||this.labels, g=f.length-1;0<=g;g-=1){var h=f[g],k=h.Ka[0]/this.N,l=h.Ka[1]/this.N;if((h.jr||!b)&&this.OK(h,c,d,k,l))return h}},$Y:function(a){var b=a.x;a=a.y;for(var c=this.Gb.length-1;0<=c;c-=1){var d=this.Gb[c],f=d.Ka[0]/this.N,g=d.Ka[1]/this.N;if(d.jr&&this.OK(d,b,a,f,g))return d}},OK:function(a,b,c,d,f){for(var g=0;g<a.lb.length;g+=1){var h=a.lb[g][2],k=a.lb[g][3],l=a.lb[g][0],m=a.lb[g][1];this.r.ha&&(h/=this.r.Eb,k/=this.r.Eb,l/=this.r.Eb,m/=this.r.Eb);if(b>=d+l-1&&b<=d+l+h+1&&c>=f+m-1&&c<=f+m+k+1)return!0}return!1}, reloadChanged:function(){this.r&&(this.r.Va=!1);this.Na.clear();this.labels=[];this.Rq=[];this.dr=[];this.ob&&this.ob.parentNode&&this.ob.parentNode.removeChild(this.ob);this.$g&&this.$g.parentNode&&this.$g.parentNode.removeChild(this.$g);this.set("display")},Nf:function(){return this.$g},GJ:function(a,b){if("roadlabel"===a||"poilabel"===a)for(var c=0;c<b.length;c+=1){var d=b[c];if(d.xb){var f="",g="",h="";d.gd&&(h=d.gd[0],f=h[3],g=h[4],h=d.co?"":h[7]);if(f=this.Nb.lu&&this.Nb.lu(f,g,h,d.xb))d.visible= f[4],d.xm=f[3];if(d.gd)for(g=0;g<d.gd.length;g+=1)h=d.gd[g],h[3]=f[0],h[4]=f[1],h[7]=f[2]}}}});V.J.canvas.HD=V.J.canvas.yg.extend({Tn:function(a,b){return this.r.em+b.join(";")+"&lv="+a},CB:function(a,b){if(this.r){for(var c=[],d=0,f=a.length;d<f;d+=1){var g=a[d];g&&(g=JSON.parse(g),g["x-vd-v"]?(this.hk=g["x-vd-v"],this.Qo=[g.tv||"",g.vdv].join("-"),this.$n=g.tv,this.l.ge="#"+g.bgc.substring(2)):(this.Su(g,b,c,this.hk||"v4"),(V.j.ud||V.j.qj&&!this.l.da.Va)&&18>=b&&V.Lm.set({Ng:!0,data:g,url:this.Tn(b,[]),yf:g[0].split("-").slice(0,3).join("/"),S:this.r,vdataVersion:this.Qo,"x-vd-v":this.hk, tv:this.$n,bgc:this.l.ge,td:this.l.da.get("showBuildingBlock")})))}this.set("display")}},iM:function(a,b){var c=0,d=0,f=1,c=256*b.x,d=256*b.y,f=b.N;return[(c+a[0])*f,(d+a[1])*f]},Su:function(a,b,c,d,f){function g(c,g,l){if(c=p.Na.get([l,c,g].join("/"))){g=c.Fa;var m=V.q.dc+"://vdata.amap.com/icons/"+(h||k?"b":"n")+(10>g.z?"39":"18")+"/1/";if(c&&"loaded"!==c.status)if(p.vN(c,u)){if(-1!==r.indexOf(q))if("limg"===q)a[1]&&(c.Ng={url:"data:image/png;base64,"+a[1],Oo:"limg-"+c.key+"-"+p.r.Yh},V.ui.gm(c.Ng, !0));else{if("roadlabel"===q)for(var n=1;n<a.length;n+=1){var w=a[n];w.Fv=w[0];var O=V.g.MC(w[1]);if(!(0>O[0]||256<=O[0]||0>O[1]||256<=O[1])){var J=p.iM(O,g),O={Ka:J,name:w[0],co:!0,Ik:O,Aa:[],lb:[],visible:!0,xm:!0},W=O.name;O.vr=15>w[2]%90||75<w[2]%90?90*Math.floor((w[2]+15)/90):w[2];var J=w[3],M=J[2];l=J[3];var Q=-Math.floor(l/2);if(w[4])if("v5"===d){var x=w[5].split(":"),C=x[1],C=parseInt(C)-1,x=V.q.dc+"://vdata.amap.com/style_icon/icon-normal-"+(h||k?"big":"small")+".png";O.Aa.push(x);var x= Math.floor(C/10),G=C%10,y=0,A=0,D=0;k?(y=48,D=A=40):h?(y=A=40,D=36):(y=A=24,D=20);var z=y*Math.max(M+2,D)/D,x=[-z/2,-y/2,z,y,A*G,A*x,A,A];O.oe=7;O.lb.push(x)}else{Q=!1;C=parseInt(w[5]);153===C&&(0===W.indexOf("G")?(C="153g",Q=!0):0===W.indexOf("S")&&(C="153s",Q=!0));if(151===C||150===C)Q=!1,0===W.indexOf("G")&&(C=150,Q=!0),0===W.indexOf("S")&&(C=151,Q=!0);152===C&&(C=151);!0===Q&&(m=V.q.dc+"://webapi.amap.com/theme/v1.3/icons/"+(h||k?"b/":"n/"));x=m+C+".png";V.ui.gm(x);O.Aa.push(x);z=w[4][0]*t;w= w[4][1]*t;x=[-z/2,-w/2,z,w];O.lb.push(x);M=Math.min(z-3,M);l=Math.min(w,l);Q=-Math.floor(l/2)+(k?3:1)}O.Aa.push(c.Ng);O.oe=11;O.lb.push([-Math.floor(M/2),Q,M,l,J[0],J[1],J[2],J[3]]);c.xa||(c.xa=[]);c.xa.push(O)}}else if("poilabel"===q){W=[];for(n=1;n<a.length;n+=1)if(w=a[n],w.Fv=w[0],O=V.g.MC(w[1]),!(0>O[0]||256<=O[0]||0>O[1]||256<=O[1])){J=p.iM(O,g);O={Ka:J,name:w[0].replace("^",""),Eu:!0,Ik:O,Aa:[],lb:[],visible:!0,xm:!0};C=0;O.Kk=w[8];w[6]&&("v5"===d?(x=w[6].split(":"),C=x[1],Q=Math.floor((parseInt(x[0].split("_")[1])- 28)/2)):C=w[6]);if(C&&w[3]){if("v5"===d){x=V.q.dc+"://vdata.amap.com/style_icon/icon-"+(1===Q?"biz-":"normal-")+(h||k?"big":"small")+".png";O.Aa.push(x);C=parseInt(C)-1;x=Math.floor(C/10);G=C%10;k?(y=48,A=40,D=28):h?(y=A=40,D=28):(y=A=24,D=20);z=y;if(151===C||152===C||153===C)D-=4,M=w[7][0][2],z=y*Math.max(M+2,D)/D;x=[-z/2,-y/2,z,y,A*G,A*x,A,A]}else x=m+C+".png",V.ui.gm(x),O.Aa.push(x),x=[-Math.round(w[3][0]/2),-Math.round(w[3][1]/2),w[3][0],w[3][1]],k&&!f&&(x[0]*=t,x[1]*=t,x[2]*=t,x[3]*=t);O.lb.push(x)}if(w[2]&& w[7])for(M=w[2],x=0;x<w[2].length;x+=1){O.Aa.push(c.Ng);J=w[7][x];k&&!f&&(M[x][0]=Math.round(M[x][0]*t),M[x][1]=Math.round(M[x][1]*t),M[x][2]=Math.round(M[x][2]*t),M[x][3]=Math.round(M[x][3]*t));z=M[x][0];G=M[x][1]-(k?4:2);y=J[3];A=J[2];z<-A&&C&&w[3]&&(z=-A+O.lb[0][0]);if("v5"!==d){if("375"===C||"3751"===C)A=Math.min(M[x][2],k?24:14),z=-Math.floor(A/2),G=-Math.floor(y/2)}else z-=2;O.oe=y-4;4===l&&"\\u5317\\u4eac"===O.name&&(G=k?-50:-26);O.lb.push([z,G,A,J[3],J[0],J[1],J[2],J[3]])}O.bm=w[5];O.bm&&W.push(O.bm); O.jr=w[4];O.jm=w[9];O.F6=w[10];c.xa||(c.xa=[]);c.xa.push(O)}c.ag||(c.ag={},c.ag.bd=W)}q===r[r.length-1]&&(c.status="loaded",c.Va=c.va=!0,c.pc&&(c.pc.Va=c.pc.va=!0))}}else p.uC(b,c,u,V.g.bind(p.GB,p))}}var h=V.j.U,k=this.r.ha,l=a[0].split("-");1===l.length&&(l=a[0].split("_"));c=parseInt(l[1]);var m=parseInt(l[2]),n=parseInt(l[0]),p=this,q=l[3],r=this.r.xa,u=18<b?Math.pow(2,b-18):1,l=Math.ceil(p.rg.bv/2),t=this.r.ha?this.r.Eb:1,w=Math.pow(2,n);10>n&&(c<=l&&g(c+w,m,n),c>=w-l&&g(c-w,m,n));g(c,m,n)}});V.J.canvas.yg.Yb({c1:function(a){this.vn++;var b=this.$g,c=this.Bg;this.Xn={};var d=this.r.ha?this.r.Eb:1,f;0!==a.Y.rotation?(f=2*Math.floor(a.Y.ta.gb.x)*d,d*=2*Math.floor(a.Y.ta.gb.y)):(f=a.size.width*d,d*=a.size.height);V.f.Fi(b,f,d,!0);c.textBaseline="bottom";this.wK=0;a.Gb&&(this.jM(a.Gb,1,a.Gb),0===a.Gb.length&&this.labels&&this.labels.Ch&&this.labels.zoom===this.zoom&&this.labels.Ch.length!==this.labels.length&&(this.labels.Ch=null));this.labels&&this.jM(this.labels,0,a.Gb);!V.j.U&&this.xk&& this.xk.length&&this.ZY(a);this.Rq=this.Rq&&this.vM(c,this.Rq,480);this.dr=this.dr&&this.vM(c,this.dr,200);a.Gb&&this.yM(a.Gb,c,V.Ze.TJ(this.l.da),this.fc,f,d);this.labels&&this.yM(this.labels,c,V.Ze.TJ(this.l.da),this.fc,f,d);this.xk=[];this.labels&&(this.labels.Co=this.zoom,this.labels.zo=this.Ga,this.labels.sr=this.rotation,this.labels.zM=this.r.ha,this.labels.size=a.size);a.Gb&&(this.Gb=a.Gb);this.Gb&&(this.Gb.Co=this.zoom,this.Gb.zo=this.Ga,this.Gb.sr=this.rotation,this.Gb.size=a.size);this.w("afterLabelRender")}, wM:function(a,b,c){var d=void 0===b.xm?!0:b.xm,f=1,g=void 0===b.visible?!0:b.visible,h=null;if(b.xb&&this.l.Hc){var k=h="",l="";b.gd&&this.Qz&&(l=b.gd[0],h=l[3],k=l[4],l=b.co?"":l[7]);if(h=this.Nb.lu&&this.Nb.lu(h,k,l,b.xb))g=h[4],d=h[3],f=h[5]}if(g){if(this.Bg.globalAlpha!==c||f)this.Bg.globalAlpha=c||f;g=0;for(k=b.Aa.length;g<k;g+=1)(d||"CANVAS"===b.Aa[g].tagName)&&this.jY(a,b.Aa[g],b.lb[g],b.vr,c||f);this.Bg.globalAlpha!==c&&(this.Bg.globalAlpha=c);b.gd&&this.Qz&&this.Qz(a,b,h)}},jY:function(a, b,c,d){var f=this.Bg;b=this.Jq(b);if(!b)return 1;var g=c[2],h=c[3],k=c[0],l=c[1];d=(d||0)%360*-Math.PI/180;if(0!==d){var m=Math.cos(d),n=Math.sin(d),p=a[0],q=a[1];f.transform(m,n,-n,m,(1-m)*p+n*q,(1-m)*q-n*p)}k=a[0]+k;a=a[1]+l;4===c.length?b.loaded&&f.drawImage(b,k,a,g,h):f.drawImage(b,c[4],c[5],c[6],c[7],k,a,g,h);0!==d&&f.setTransform(1,0,0,1,0,0)},Jq:function(a){if("IMG"===a.tagName||"CANVAS"===a.tagName||(a=V.ui.MY(a))&&a.loaded)return a},qu:function(a){var b=a.Ka,c=b[0];a.reverse&&(c>V.g.Wa/2? c-=V.g.Wa:c<-V.g.Wa/2&&(c+=V.g.Wa));return this.ii(c,b[1])},ii:function(a,b){var c=this.r.ha?this.r.Eb:1,d=this.N,f=0,g=0,f=(a-this.oc[0])/d,g=(b-this.oc[1])/d;return[Math.round(f*c),Math.round(g*c)]},fZ:function(a){var b=a.Ka,c=b[0];a.reverse&&(c>V.g.Wa/2?c-=V.g.Wa:c<V.g.Wa/2&&(c+=V.g.Wa));return[c/this.N,b[1]/this.N]},a_:function(a,b){var c=a.Ka;return c[0]>b.$b.x||c[1]>b.$b.y||c[0]<b.hb.x||c[1]<b.hb.y?!1:!0},ZY:function(a){var b=this.xk;if(this.xk.zoom!==this.labels.zoom)for(var c=0,d=b.length;c< d;c+=1){var f=b[c];f.Eu&&this.a_(f,a.Y.ta)&&(this.dr.push(f),f.zoom=b.zoom,f.MA=new Date)}},jM:function(a,b,c){var d=!(!c||!c.length),f=a.zoom-this.zoom,g=a.Ch||a;if(0<f||d){a.Ch=[];for(var h=0,k=g.length;h<k;h+=1){var l=g[h],m=this.fZ(l);l.Eu||b?l.bm&&d&&c.zL&&-1!==V.g.indexOf(c.zL,l.bm)||(5>f&&this.HZ(m,l,0<f,b,d)?a.Ch.push(l):V.j.U||0===f&&!b||(this.Rq.push(l),l.zoom=this.labels?this.labels.zoom:this.Kc,l.MA=new Date)):l.co&&a.Ch.push(l)}}else a.Ch=a;return!1},vM:function(a,b,c,d,f){a=new Date; for(var g=[],h=0,k=b.length;h<k;h+=1){var l=b[h],m=Math.max(0,Math.abs(l.zoom-this.zoom)),m=Math.max(0,1-(a-l.MA)/(1/Math.pow(1.3,m)*c));if(0<m){g.push(l);var n=this.qu(l);-20>n[0]||n[0]>d+20||-20>n[1]||n[1]>f+20||this.wM(n,l,m)}else l.MA=void 0}g.length&&(this.wK=this.zj=1);return g},yM:function(a,b,c,d,f,g){d=a.zoom!==this.zoom;18===a.zoom&&18<this.zoom&&(d=!1);b.globalAlpha=1;a=a.Ch;b=0;for(var h=a.length;b<h;b+=1){var k=a[b];if(!(d&&k.co||k.Ri&&c&&0<=c.indexOf(k.Ri))){var l=this.qu(k);-20>l[0]|| l[0]>f+20||-20>l[1]||l[1]>g+20||this.wM(l,k)}}},YW:function(a){this.kj&&this.kj.zM!==this.r.ha&&this.r.set("reload");if(this.wK)return!0;if(a.Gb&&a.Gb.length)if(this.Gb&&this.Gb.length){if(this.Gb!==a.Gb||this.Gb.Co!==this.zoom||this.Gb.zo!==this.Ga||this.Gb.sr!==this.rotation||!this.Gb.size.Lb(a.size))return!0}else return!0;else if(this.Gb&&this.Gb.length)return!0;return!this.labels||this.labels===this.kj&&this.kj&&this.kj.Co===this.zoom&&this.kj.zo===this.Ga&&!a.Dh&&this.kj.sr===this.rotation&& this.kj.zM===this.r.ha&&this.kj.size.Lb(a.size)?!1:!0},HZ:function(a,b,c,d,f){if(!f&&!c&&!d)return!0;var g;f=b.Aa.length;if(b.jm>this.zoom)g=!0;else if(!c&&d)g=!1;else for(var h=0;h<f;h+=1){var k=b.lb[h],l=k[2],m=k[3],n=k[0],k=k[1],n=a[0]+n,k=a[1]+k;this.IZ(n,k,l,m)||(g=!0)}if(!g&&(c||d))for(h=0;h<f;h+=1)for(k=b.lb[h],l=k[2],m=k[3],n=k[0],k=k[1],n=a[0]+n,k=a[1]+k,l=Math.ceil((n+l)/this.uk),c=Math.ceil((k+m)/this.uk),n=Math.floor(n/this.uk),k=Math.floor(k/this.uk),d=0,m=l-n;d<=m;d+=1)for(var l=0,p= c-k;l<=p;l+=1)this.Xn[n+d]||(this.Xn[n+d]={}),this.Xn[n+d][k+l]=1;return!g},IZ:function(a,b,c,d){var f=Math.ceil((a+c)/this.uk);d=Math.ceil((b+d)/this.uk);a=Math.floor(a/this.uk);b=Math.floor(b/this.uk);c=0;for(f-=a;c<=f;c+=1)if(this.Xn[a+c])for(var g=0,h=d-b;g<=h;g+=1){if(1===this.Xn[a+c][b+g])return!1}else this.Xn[a+c]={};return!0}});V.J.canvas.yg.gO=V.W.extend({D:function(a){this.J=a},mV:function(a){this.hm=a;return this.Hy([0,0,0])?!0:this.hm=!1},TF:function(){return this.J.Kd?!1:!0},OR:function(a){if(a){var b=Array.prototype.slice.call(arguments,0);switch(a.type){case "icon":return this.RR.apply(this,b);case "label":return this.SR.apply(this,b);default:console.error("Unknown type",a)}}},lF:function(a,b,c){a=null;try{a=b.getImageData.apply(b,c)}catch(d){console.error(d),a=null}return a},IV:function(a){return 0>a?0:255<a?255: Math.round(a)},bI:function(a,b){for(var c=0;4>c;c++)a[b+c]=this.IV(a[b+c]);return a},Gy:function(a,b){var c=259*(b+255)/(255*(259-b));return[c*(a[0]-128)+128,c*(a[1]-128)+128,c*(a[2]-128)+128]},eV:function(a){return[255-a[0],255-a[1],255-a[2]]},Hy:function(a,b){isNaN(b)&&(b=20);var c=Math.max(0,0.299*a[0]+0.587*a[1]+0.114*a[2]-b);switch(this.hm){case "amap://styles/normal":case "normal":return[1*c,1.2*c,255];case "amap://styles/light":case "light":return[1*c,1*c,255];case "amap://styles/fresh":case "fresh":return[1* c,1*c,220];case "amap://styles/grey":case "amap://styles/dark":case "insight":case "dark":return[1.5*a[0],1.5*a[1],1*a[2]];case "amap://styles/blue":case "amap://styles/darkblue":case "blue_night":case "mapv":return[2*a[0],1.5*a[1],1*a[2]]}return!1},TR:function(a,b){var c=20,d=10;switch(b.$l){case "active":c+=20,d+=20}return this.Gy(this.Hy(a,c),d)},CF:function(a,b){var c=-110;switch(b.$l){case "active":c+=30}return this.Gy(this.Hy(this.eV(a),c),50)},QR:function(a){return this.Gy(a,20)},BF:function(a, b,c,d,f,g){var h=a[b],k=a[b+1],l=a[b+2];a=a[b+3];0<a?(f=f.call(this,[h,k,l,a],g),c[d]=f[0],c[d+1]=f[1],c[d+2]=f[2]):(c[d]=h,c[d+1]=k,c[d+2]=l);c[d+3]=a;this.bI(c,d)},jR:function(a){var b=a.data,c=a.width;a=a.height;for(var d=0,f=0,g=[Infinity,Infinity],h=[-Infinity,-Infinity],k=0;k<c;k++)for(var l=0;l<a;l++){var m=4*this.rx(k,l,c,a);if(!(76.5>b[m+3])){f++;k<g[0]&&(g[0]=k);l<g[1]&&(g[1]=l);k>h[0]&&(h[0]=k);l>h[1]&&(h[1]=l);for(var n=!0,p=0;4>p;p++)if(220>b[m+p]){n=!1;break}n&&d++}}return{t3:0<f?d/ f:0,pX:[g[0],g[1],h[0]-g[0]+1,h[1]-g[1]+1]}},rx:function(a,b,c){return b*c+a},rt:function(a,b,c,d,f,g,h){var k=this.rx(b,c,d,f);d=a[4*k+0];f=a[4*k+1];var l=a[4*k+2];a=a[4*k+3];if(a/255<h.tL||h.tN&&!h.tN.call(this,d,f,l,a))return!1;g.push([b,c]);return!0},tU:function(a,b){var c=Math.abs(a[0]-b[0]),d=Math.abs(a[1]-b[1]);return Math.sqrt(c*c+d*d)},nn:function(a,b){return 0.1>Math.abs(a[0]-b[0])&&0.1>Math.abs(a[1]-b[1])},wV:function(a,b){for(var c=[a[0]],d=1,f=a.length;d<f;d++){var g=a[d];this.tU(g,c[c.length- 1])<=b&&c.push(g)}return this.nn(c[c.length-1],a[a.length-1])?c:null},E4:function(){},aQ:function(a,b,c,d){d=V.extend({tL:0.2,pL:4},d);var f,g,h=[],k=[],l=[],m=[];for(f=0;f<c;f++){for(g=0;g<b&&!this.rt(a,g,f,b,c,h,d);g++);for(g=b-1;0<=g&&!this.rt(a,g,f,b,c,k,d);g--);}if(!h.length||!k.length)return null;for(g=0;g<b;g++){var n;f=h[0][0];n=k[0][0];if(g>=f&&g<=n)for(f=0;f<c&&!this.rt(a,g,f,b,c,l,d);f++);f=h[h.length-1][0];n=k[k.length-1][0];if(g>=f&&g<=n)for(f=c-1;0<=f&&!this.rt(a,g,f,b,c,m,d);f--);}if(!l.length|| !m.length)return null;m.reverse();h.reverse();if(this.nn(l[l.length-1],k[0])&&this.nn(k[k.length-1],m[0])&&this.nn(m[m.length-1],h[0])&&this.nn(h[h.length-1],l[0])){b=[m,h,l,k];f=0;for(a=b.length;f<a;f++)if(!(2>b[f].length||(b[f]=this.wV(b[f],d.pL),b[f])))return null;return[].concat(b[0]).concat(b[1].slice(1)).concat(b[2].slice(1)).concat(b[3].slice(1))}return null},VQ:function(a){for(var b=[Infinity,Infinity],c=[-Infinity,-Infinity],d=0,f=a.length;d<f;d++){var g=a[d][0],h=a[d][1];b[0]>g&&(b[0]=g); b[1]>h&&(b[1]=h);c[0]<g&&(c[0]=g);c[1]<h&&(c[1]=h)}return b.concat([c[0]-b[0]+1,c[1]-b[1]+1])},tF:function(a,b){this.UH||(this.UH=document.createElement("canvas"));var c=this.UH;c.width=a;c.height=b;return c},nR:function(a){switch(a.length){case 2:return"lineTo";case 4:return"quadraticCurveTo"}return null},SE:function(a){switch(a.length){case 2:return[a[0]+0.5,a[1]+0.5];case 4:return[a[0]+0.5,a[1]+0.5,a[2]+0.5,a[3]+0.5]}return a},fE:function(a,b){a.beginPath();for(var c=0,d=b.length;c<d;c++){var f= b[c];0===c?(2<f.length&&(4===f.length?f=f.slice(-2):console.error("Unknown start point: ",b)),a.moveTo.apply(a,this.SE(f))):a[this.nR(f)].apply(a,this.SE(f))}},YQ:function(a){a=this.CF([255,255,255],{$l:a.$l});this.bI(a,0);return"rgba("+a.slice(0,3).join(",")+", 0.8)"},PR:function(a,b,c){function d(a){return[Math.round((a[0]-n)*q+n-m[0]),Math.round((a[1]-p)*r+p-m[1])]}c=V.extend({$l:"hover",sI:!0,padding:[1.5,1.5]},c);var f=a.width,g=a.height,h=this.tF(2*f+10,g),k=h.getContext("2d"),l=this.VQ(b), m=c.padding;V.j.Rc&&(m[0]+=2.5,m[1]+=2.5);for(var n=l[0],p=l[1],q=(l[2]+2*m[0])/l[2],r=(l[3]+2*m[1])/l[3],l=0,u=b.length;l<u;l++)switch(b[l].length){case 2:b[l]=d(b[l]);break;case 4:b[l]=d(b[l]).concat(d(b[l].slice(2)));break;default:console.error("Unknown point: ",b[l])}k.save();this.fE(k,b);k.closePath();k.fillStyle=c.fillStyle||"rgba(255,255,255,0.85)";k.fill();k.putImageData(a,f+6,0);k.drawImage(h,f+6,0,f,g,0,0,f,g);a=c.sI&&10<b.length;var t=c.strokeStyle||this.YQ(c);k.strokeStyle=a?"#fff":t; k.lineCap="butt";k.lineJoin="round";k.lineWidth=V.j.Rc?2:1.2;k.stroke();k.restore();return{va:h,me:[0,0,f,g],fz:a?function(a,c){this.yV(a,c,b,t)}:null}},yV:function(a,b,c,d){this.dQ();var f=this.J.vn;this.$D(a,c,{duration:200,XB:0,startTime:Date.now(),K1:function(a){a.strokeStyle=d;a.lineCap="butt";a.lineJoin="round";a.lineWidth=V.j.Rc?2:1;a.translate(b[0],b[1])},u3:function(){return this.J.vn!==f}})},dQ:function(){this.Aw&&V.g.Gl(this.Aw)},$D:function(a,b,c,d){this.TF()?this.Aw=V.g.Ve(function(){this.Aw= null;if(c.u3.call(this))d&&d.call(this);else{var f=(Date.now()-c.startTime)/c.duration;1<f&&(f=1);var g=Math.round(b.length*f);if(c.XB<g){var h=1===f?b:b.slice(c.XB,g+1);h.length&&(a.save(),c.K1.call(this,a,f),this.fE(a,h),a.stroke(),a.restore());c.XB=g}1>f?this.$D(a,b,c,d):d&&d.call(this)}},this):d&&d.call(this)},kQ:function(a,b,c){a=a.createImageData(b.width,b.height);var d=a.data,f=a.width,g=a.height,h=c[0]+c[2],k=c[1],l=c[1]+c[3];for(c=c[0];c<h;c++)for(var m=k;m<l;m++)for(var n=4*this.rx(c,m, f,g),p=0;4>p;p++)d[n+p]=b.data[n+p];return a},xS:function(a,b,c){var d=a[1]+(b[1]-a[1])*c;return[Math.round(a[0]+(b[0]-a[0])*c),Math.round(d)]},iS:function(a,b,c){for(var d=1/c,f=[],g=1;g<c;g++){var h=this.xS(a,b,d*g);f.length&&this.nn(h,f[f.length-1])||f.push(h)}return f},jS:function(a,b){for(var c=1,d=a.length;c<d;c++){var f=a[c-1],g=a[c];2===g.length&&(4===f.length&&(f=f.slice(2)),2===f.length&&(f=this.iS(f,g,b),a.splice.apply(a,[c,0].concat(f)),c+=f.length,d+=f.length))}},pR:function(a,b,c,d, f){f=Math.round(Math.min(c,d)*f);c--;d--;f?a=[[a+c,b+d-f],[a+c,b+d,a+c-f,b+d],[a+f,b+d],[a,b+d,a,b+d-f],[a,b+f],[a,b,a+f,b],[a+c-f,b],[a+c,b,a+c,b+f],[a+c,b+d-f]]:(f=[a+c,b+d],a=[f,[a,b+d],[a,b],[a+c,b],f]);this.jS(a,5);return a},RR:function(a,b,c,d,f,g){b=a.me;var h=c?c.RA:this.lF(d,f,b);if(h){var k=c?c.zK:null,l=h,m=a.padding,n=m?m[0]:0,p=m?m[1]:0;(m=0<n*p)&&(l=this.kQ(f,l,[n,p,l.width-2*n,l.height-2*p]));d=l.data;b=l.width;var q=l.height;if(b&&q){c=(c=this.J.l)&&c.da?c.da.get("hotspotOptions"): {};c=V.extend({borderAnimation:!0},c);l=this.jR(l);a=!a.VZ&&0.46<=l.t3;var r=f.createImageData(b,q);f=r.data;for(var u=a?this.CF:this.QR,t=0,w=d.length;t<w;t+=4)this.BF(d,t,f,t,u,{$l:g});if(m&&(f=a&&!V.j.Rc?this.aQ(d,b,q,{tN:a?function(a,b,c){return!(220<a&&220<b&&220<c)}:null,tL:0.2,pL:4}):null,f||(f=l.pX,f=this.pR(f[0],f[1],f[2],f[3],0.2)),f)){var v=this.PR(r,f,{$l:g,fillStyle:"active"!==g?null:"#ddd",Pu:h,sI:c.borderAnimation&&"hover"===g&&!k,padding:a?[1.5,1.5]:[2.5,2.5]}),r=null;return{Pu:h, Ao:function(a,b){k&&h&&a.putImageData(h,b[0],b[1]);a.drawImage(v.va,v.me[0],v.me[1],v.me[2],v.me[3],b[0],b[1],b[2],b[3]);v.fz&&(v.fz.call(this,a,b),v.fz=null)}}}return{Pu:h,Ao:function(a,b){if(m){var c=this.tF(r.width,r.height);c.getContext("2d").putImageData(r,0,0);a.clearRect(b[0]+n,b[1]+p,b[2]-2*n,b[3]-2*p);a.drawImage(c,0,0,c.width,c.height,b[0],b[1],b[2],b[3])}else a.putImageData(r,b[0],b[1]);r=null}}}}},SR:function(a,b,c,d,f,g){a=a.me;if(c=c?c.RA:this.lF(d,f,a))if(d=c.data,a=c.width,b=c.height, a&&b){var h=f.createImageData(a,b);f=h.data;a=0;for(b=d.length;a<b;a+=4)this.BF(d,a,f,a,this.TR,{$l:g});return{Pu:c,Ao:function(a,b){a.putImageData(h,b[0],b[1]);h=null}}}},vF:function(a,b,c){var d=c[2],f=c[3],g=a[0]+c[0];a=a[1]+c[1];if(4===c.length||c.PF){if((b=this.J.Jq(b))&&b.loaded)return c=[4,4],V.j.Rc&&(c[0]*=2,c[1]*=2),{type:"icon",VZ:b.src&&b.src.indexOf&&0<=b.src.indexOf("/indoor_icon/"),padding:c,me:[g-c[0],a-c[1],d+2*c[0],f+2*c[1]]}}else return{type:"label",me:[g,a,d,f]}}}); V.J.canvas.yg.Yb({jF:function(){this.Ax||(this.Ax=new V.J.canvas.yg.gO(this));return!1===this.Ax.mV(this.hm)?null:this.Ax},$m:function(a,b){var c=this.jF();if(c&&c.TF()&&a&&a.Aa&&a.lb&&0===this.rotation){var d=this.vn,f=this.qu(a),g=[],h;a.Qj||(a.Qj=[]);var k=a.Qj;for(h=a.lb.length-1;0<=h;h--){if(k[h]){if(k[h].rev!==d)continue;if(k[h].zK===b)continue}var l=c.vF(f,a.Aa[h],a.lb[h]);if(l){var m=c.OR(l,a,k[h],this.$g,this.Bg,b);m&&(k[h]={zK:b,rev:d,RA:m.Pu},g.push({Ao:m.Ao,me:l.me,nr:"icon"===l.type? 2:1}))}}g.sort(function(a,b){return a.nr-b.nr});h=0;for(d=g.length;h<d;h++)g[h].Ao.call(c,this.Bg,g[h].me),g[h].Ao=null}},Mw:function(a){a.Qj&&(a.Qj.length=0,a.Qj=null)},Ty:function(){var a=this.Bg;a&&a.putImageData&&a.putImageData(a.getImageData(0,0,1,1),0,0)},az:function(a){if(a&&a.Aa&&a.lb&&a.Qj){var b=this.Bg,c=this.jF();if(c){for(var d=this.vn,f=this.qu(a),g=a.Qj,h=0,k=a.lb.length;h<k;h++){var l=g[h];if(l&&(g[h]=null,d===l.rev)){var m=c.vF(f,a.Aa[h],a.lb[h]);m&&m.me&&b.putImageData(l.RA,m.me[0], m.me[1])}}a.Qj=null;this.vn++}}}}); ', true), _jsload_('overlay', 'V.fa.hd=V.fa.$k.extend({D:function(a,b){var c=a.length;this.xf=Array(c);for(var d,f,g=0;g<c;g+=1)if(d=a[g],f=new V.fa.vD(d),this.xf[g]=f,!b)if(0===g){if(0===d.length)break;f.vk(d)||d.reverse()}else 0!==d.length&&f.vk(d)&&d.reverse()},lc:function(){if(0===this.xf.length)return[Infinity,Infinity,-Infinity,-Infinity];if(!this.Cd){for(var a=this.xf[0].lc(),b=1;b<this.xf.length;b+=1){var c=this.xf[b].lc();V.A.$I(a,c)||V.A.extend(a,c)}this.Cd=a}return this.Cd},eK:function(){return this.xf},Oe:function(){return V.fa.Cc.Zr}, Dd:function(a){for(var b=this.xf,c,d=0,f=b.length;d<f&&(c=b[d].Dd(a),0<d&&(c=!c),c);d+=1);return c}});V.fa.dp=V.fa.$k.extend({D:function(a){var b=a.length;this.Ud=Array(b);for(var c=0;c<b;c+=1){var d=new V.fa.hd(a[c]);this.Ud[c]=d}},lc:function(){if(!this.Cd){for(var a=[Infinity,Infinity,-Infinity,-Infinity],b=this.Ud,c=0,d=b.length;c<d;c+=1)V.A.extend(a,b[c].lc());this.Cd=a}return this.Cd},iA:function(){return this.Ka},Oe:function(){return V.fa.Cc.Xr},OJ:function(){return this.Ud},Dd:function(a){for(var b=!1,c=0,d=this.Ud.length;c<d;c+=1)if(this.Ud[c].Dd(a)){b=!0;break}return b}});V.fa.al=V.fa.$k.extend({D:function(a){this.Ka=a},lc:function(){if(!this.Cd){for(var a=[Infinity,Infinity,-Infinity,-Infinity],b=0,c=this.Ka.length;b<c;b+=1)V.A.xJ(a,this.Ka[b]);this.Cd=a}return this.Cd},iA:function(){return this.Ka},Oe:function(){return V.fa.Cc.Xv},RY:function(){return this.Ka.length},cu:function(a){return V.Tc.jk(a,this.Ka)}});V.fa.vD=V.fa.al.extend({Oe:function(){return V.fa.Cc.tD},vk:V.Tc.vk,Dd:function(a){return V.Tc.Dd(a,this.Ka)}});V.fa.Yr=V.fa.$k.extend({D:function(a){var b=a.length;this.Ud=Array(b);for(var c=0;c<b;c+=1){var d=new V.fa.al(a[c]);this.Ud[c]=d}},OJ:function(){return this.Ud},lc:function(){if(!this.Cd){for(var a=[Infinity,Infinity,-Infinity,-Infinity],b=this.Ud,c=0,d=b.length;c<d;c+=1)V.A.extend(a,b[c].lc());this.Cd=a}return this.Cd},iA:function(){return this.Ka},Oe:function(){return V.fa.Cc.$v},RY:function(){return this.Ka.length},cu:function(a){for(var b=Infinity,c=0,d=this.Ud.length;c<d;c+=1)b=Math.min(b,this.Ud[c].cu(a)); return b}});V.Ia.zd=V.Ia.Fj.extend({D:function(a,b){arguments.callee.cb.apply(this,arguments);this.mW=a;this.Q("options",a);this.Q("geodesic",a);this.Q("path",a);this.Q("noSelect",a);this.Fl();this.Q("display",b);b.e("zoomend",this.Pj,this)},geodesicChanged:function(){this.pathChanged()},tj:function(a){var b=Math.pow(2,20-this.map.get("zoom")),c=this.get("path"),b=a.Bc(b),d=[],f,g,h;f=0;for(g=c.length;f<g;f+=1)h=this.map.Db(c[f]).add(b),d.push(this.map.uf(h));0<d.length&&this.set("path",d);if(this.wy&&0<this.wy.length)for(f= 0,c=this.wy.length;f<c;f+=1)this.wy[f].tj(a);this.mW.w("movepoly",{dM:b})},wp:function(a){this.get("options");return this.NF()?this.fR(a):this.eF(a)},NF:function(){var a=this.get("options");return a&&!!a.geodesic},getStrokeWeight:function(){return this.get("options").strokeWeight},fR:function(a){if(!a||!a.length)return[];var b,c=[],d,f,g=[],h,k=this.map.get("resolution"),l=this.get("options").geodesicInterpolatePixelWidth||17;c.push(a[0]);g.push(this.nx(a[0]));d=1;for(f=a.length;d<f;d+=1)h=this.nx(a[d]), b=Math.round(Math.abs(h[0]-g[g.length-1][0])/k),b=Math.min(31,Math.round(b/l),Math.round(Math.abs(a[d-1].M-a[d].M))),b=V.P.gZ(a[d-1],a[d],b),c.push.apply(c,b),g.push.apply(g,this.eF(b)),c.push(a[d]),g.push(h);return g},Jt:function(a){var b=[],c=[],d,f,g,h,k,l,m=a.za;m instanceof V.fa.al?l=[m]:m instanceof V.fa.Yr&&(l=m.Ud);m=[];a=a.la.rotation;b=this.map.get("size");d=Math.PI*a/180;a=(Math.abs(b.width*Math.cos(d))+Math.abs(b.height*Math.sin(d)))/2;var n=(Math.abs(b.width*Math.sin(d))+Math.abs(b.height* Math.cos(d)))/2;d=0;for(f=l.length;d<f;d+=1)if(g=l[d].Ka,g.length)for(h=0,k=g.length;h<k;h+=1)if(b=g[h],b=this.ed(b),b[0]=Math.round(b[0]+a),b[1]=Math.round(b[1]+n),0===h)c[0]=NaN,c[1]=NaN,m.push("M"+b[0]+" "+b[1]);else if(b[0]!==c[0]||b[1]!==c[1])m.push("L"+b[0]+" "+b[1]),c[0]=b[0],c[1]=b[1];return m},Fl:function(){if(this.map&&!this.I){var a=this.map,b=this.get("path"),b=this.I=new V.de({ix:this.bc.Ns,name:"polyline-"+V.g.Bb(this),zIndex:this.get("options").zIndex||1,map:a,za:new V.fa.al(this.wp(b)), style:this.get("options")});b.Uj=this;this.Q("resolution",a);this.Q("center",a);this.Q("coords",b);this.Q("style",b);b.Uc(["noSelect","visible","zIndex","strokeWeight","isOutline"],this)}},pathChanged:function(){var a=this.I,b=this.get("path");a&&(this.set("coords",this.wp(b)),a.Ig=!0,"c"!==this.map.get("overlayRender")&&a.la?(b=this.Jt(a),V.j.oj||b.push("e"),b=b.join(" "),0===b.length&&a.la?(a.la.Pc.parentNode.removeChild(a.la.Pc),a.la.jb.parentNode&&a.la.jb.parentNode.removeChild(a.la.jb),a.la= null):V.j.oj?(a.la.Pc.setAttribute("d",b),a.la.jb&&a.la.jb.setAttribute("d",b)):(a.la.Pc.path=b,a.la.jb&&(a.la.jb.path=b))):this.set("display"))},Pj:function(){this.NF()&&this.pathChanged()},visibleChanged:function(){this.I&&(this.I.la?this.get("visible")?(this.I.la.Pc.style.display="block",this.I.la.jb&&(this.I.la.jb.style.display="block")):(this.I.la.Pc.style.display="none",this.I.la.jb&&(this.I.la.jb.style.display="none")):this.set("display"))},optionsChanged:function(){this.I&&(this.I.style=this.get("options"), this.I.zIndex=this.get("options").zIndex,this.I.nk(),this.I.la&&(this.I.la.Pc.parentNode&&this.I.la.Pc.parentNode.removeChild(this.I.la.Pc),this.I.la.jb&&this.I.la.jb.parentNode&&this.I.la.jb.parentNode.removeChild(this.I.la.jb)));this.set("display")}});V.Ia.hd=V.Ia.Fj.extend({D:function(a,b){arguments.callee.cb.apply(this,arguments);this.lW=a;this.Q("options",a);this.Q("path",a);this.Fl();this.Q("display",b)},tj:function(a){var b=Math.pow(2,20-this.map.get("zoom")),c=this.get("path");a=a.Bc(b);var b=[],d,f;c.length&&c[0]instanceof V.P&&(c=[c],f=!0);for(var g=0,h=c.length;g<h;g+=1){for(var k=c[g],l=[],m=0,n=k.length;m<n;m+=1)d=this.map.Db(k[m]).add(a),l.push(this.map.uf(d));b.push(l)}0<b.length&&this.set("path",f?b[0]:b);this.lW.w("movepoly",{dM:a})}, wp:function(a){a.length&&a[0]instanceof V.P&&(a=[a]);for(var b,c,d=[],f,g=this.map,h=0;h<a.length;h+=1){var k=a[h];f=[];b=0;for(c=k.length;b<c;b+=1){var l=g.Db(k[b]);f.push([l.x,l.y])}d.push(f)}return d},Fl:function(){if(this.map&&!this.I){var a=this.map,b=this.get("path"),b=this.I=new V.de({ix:this.bc.Ns,name:"polygon-"+V.g.Bb(this),zIndex:this.get("options").zIndex||1,map:a,za:new V.fa.hd(this.wp(b)),style:this.get("options")});b.Uj=this;this.Q("resolution",a);this.Q("center",a);this.Q("coords", b);this.Q("style",b);b.Uc(["visible","zIndex","strokeWeight"],this)}},pathChanged:function(){var a=this.I,b=this.get("path");a&&(this.set("coords",this.wp(b)),a.Ig=!0,"c"!==this.map.get("overlayRender")&&a.Z?(b=this.Kt(a),0===b.length?(a.Z.parentNode.removeChild(a.Z),a.Z=null):V.j.oj?a.Z.setAttribute("d",b.join(" ")):(b.push("e"),a.Z.path=b.join(" "))):this.set("display"))},getStrokeWeight:function(){return this.get("options").strokeWeight},visibleChanged:function(){this.I&&(this.I.Z?this.get("visible")? this.I.Z.style.display="block":this.I.Z.style.display="none":this.set("display"))},optionsChanged:function(){this.I&&(this.I.style=this.get("options"),this.I.zIndex=this.get("options").zIndex,this.I.nk());this.set("display")},Kt:function(a){var b=[NaN,NaN,0],c=[NaN,NaN],d,f,g,h,k,l,m,n=a.Z.rotation,p=this.map.get("size");f=Math.PI*n/180;n=(Math.abs(p.width*Math.cos(f))+Math.abs(p.height*Math.sin(f)))/2;p=(Math.abs(p.width*Math.sin(f))+Math.abs(p.height*Math.cos(f)))/2;a=a.za;a instanceof V.fa.hd? d=[a]:a instanceof V.fa.dp&&(d=a.Ud);var q=[];a=0;for(f=d.length;a<f;a+=1)if(b=d[a],g=b.xf,h=g.length,0<h)for(var r=0;r<h;r+=1){var u;k=g[r].Ka;l=0;for(m=k.length;l<m;l+=1)if(b=k[l],b=this.ed(b),b[0]=Math.ceil(b[0]+n),b[1]=Math.ceil(b[1]+p),0===l)c[0]=NaN,c[1]=NaN,u=b,q.push("M"+b[0]+" "+b[1]);else if(b[0]!==c[0]||b[1]!==c[1])q.push("L"+b[0]+" "+b[1]),c=b;u&&q.push("L"+u[0]+" "+u[1])}return q}});V.Ia.Ji=V.Ia.Fj.extend({D:function(a,b){arguments.callee.cb.apply(this,arguments);this.kW=a;this.Q("center",a);this.Q("draggable",a);this.Q("radius",a);this.Q("options",a);this.Fl();this.Q("display",b)},tj:function(a){var b=this.get("center");a=a.Bc(Math.pow(2,20-this.map.get("zoom")));var c=this.map.Db(b).add(a);b instanceof V.P?this.set("center",this.map.uf(c)):this.set("center",c);this.kW.w("movepoly",{dM:a})},Fl:function(){if(this.map&&!this.I){var a=this.map,b=a.Db(this.get("center")),b=this.I= new V.de({Ms:!0,ix:this.bc.Ns,name:"circle-"+V.g.Bb(this),zIndex:this.get("options").zIndex||1,map:a,za:new V.fa.Be([b.x,b.y]),style:this.get("options")});b.Uj=this;this.Q("resolution",a);this.Q("coords",b);this.Q("style",b);b.Q("visible",this,!0);b.Uc(["radius","center","resolution","zIndex","strokeWeight"],this)}},getStrokeWeight:function(){return this.get("options").strokeWeight},centerChanged:function(){var a=this.I,b=this.map.Db(this.get("center"));a&&(a.za.Ka=[b.x,b.y],this.set("coords",[b.x, b.y]),this.Ig=!0,a.Z?this.oM():this.set("display"))},visibleChanged:function(){this.I&&(this.I.Z?this.get("visible")?this.I.Z.style.display="block":this.I.Z.style.display="none":this.set("display"))},optionsChanged:function(){this.I&&(this.I.style=this.get("options"),this.I.zIndex=this.get("options").zIndex,this.I.nk(),this.I.Ig=!0,this.set("display"))},rz:function(a){var b=[],c=[],d,c=a.za;c instanceof V.fa.Be&&(d=[c]);var c=this.map.get("resolution",Math.floor(this.map.get("zoom"))),f=a.Z.rotation, b=this.map.get("size"),g=Math.PI*f/180,f=(Math.abs(b.width*Math.cos(g))+Math.abs(b.height*Math.sin(g)))/2,g=(Math.abs(b.width*Math.sin(g))+Math.abs(b.height*Math.cos(g)))/2,b=this.ed(d[0].Ka);b[0]=Math.round(b[0]+f);b[1]=Math.round(b[1]+g);a=a.get("remain")?5.23:this.get("radius")/(c*Math.cos(Math.PI*this.get("center").O/180));return c=["M",b[0],b[1]-a,"A",a,a,0,1,1,b[0]-0.01,b[1]-a,"Z"].join(" ")},oM:function(){var a=this.I,b=this.get("radius");if("c"!==this.map.get("overlayRender")&&a.Z)if(V.j.oj)b= this.rz(a),a.Z.setAttribute("d",b);else{b=this.map.get("resolution",Math.floor(this.map.get("zoom")));b=this.get("radius")/(b*Math.cos(Math.PI*this.get("center").O/180));a.Z.style.width=Math.round(2*b);a.Z.style.height=Math.round(2*b);var c=this.map.get("size").width/2,d=this.map.get("size").height/2,f=this.ed(a.za.Ka);f[0]=Math.round(f[0]+c);f[1]=Math.round(f[1]+d);a.Z.style.top=Math.round(f[1]-b);a.Z.style.left=Math.round(f[0]-b)}else this.set("display")},radiusChanged:function(){var a=this.I,b= this.get("radius");a&&(a.Ig=!0,a.w("rad",{Jk:b}),this.oM())}}); ', true), _jsload_('wgl', '(function(){V.j.Zd&&(V.o3=new V.es(function(a){function b(a,b,d){for(var f=a.yb,g=[],h=a.Hi,m=null,p=null,q={},J=1,W=f.length;J<W;J+=1){var M=f[J],Q=M[1].split("&"),m=k(r?r:Q[0]),p=k(Q[2]),x=Q[0]+Q[2];q[x]||(q[x]={CN:[],JM:[],yk:[],aA:[],zY:m,borderColor:p,xb:M[2]});var m=q[x].CN,p=q[x].JM,Q=q[x].yk,x=q[x].aA,C=M[0],G=M[3]*Math.pow(2,2);if((M=M[5])&&M.length)for(var y=0,A=M.length;y<A;y+=1)for(var D=M[y].split("-")[1].split("^"),z=0,L=D.length;z<L;z+=1)-1===c(g,D[z])&&g.push(D[z]);M=0;for(y=C.length;M< y;M+=1){for(var E=C[M],E=n(E),A=l(E,h,b),E=A[1],D=A[2],A=[],z=0,L=E.length-1;z<L;z+=1){var F=E[z],H=E[z+1],N=[F[0]-0*G,F[1]-0.3*G],P=[H[0]-0*G,H[1]-0.3*G],U=D[z],Y=D[z+1],S=U[0],ca=Y[0],U=U[1],Y=Y[1];0===S&&S===ca||256===S&&S===ca||0===U&&U===Y||256===U&&U===Y||(d?((H[0]-F[0])*(N[1]-F[1])<(N[0]-F[0])*(H[1]-F[1])&&(m.push(N[0],N[1],2),m.push(H[0],H[1],-1),m.push(F[0],F[1],-1),m.push(N[0],N[1],2),m.push(P[0],P[1],2),m.push(H[0],H[1],-1),x.push([F,H,P,N])),Q.push(N[0],N[1],-1,P[0],P[1],-1)):Q.push(F[0], F[1],-1,H[0],H[1],-1));A.push([N[0],N[1]])}E.pop();D=u.DN(d?A:E,[],0,1);x.push(d?A:E);E=0;for(A=D.length;E<A;E+=1)for(z=0;3>z;z+=1)p.push(D[E][z][0],D[E][z][1],3)}}a.yb=[];for(E in q)q.hasOwnProperty(E)&&(Q=[q[E].zY,q[E].borderColor,q[E].xb],q[E].aA.qo=!0,a.yb.push([new Float32Array(q[E].CN),new Float32Array(q[E].JM),new Float32Array(q[E].yk),Q,q[E].aA]));a.cm=g;return a}function c(a,b){if(a&&!a.length)return-1;if(a.indexOf)return a.indexOf(b);for(var c=0;c<a.length;c+=1)if(a[c]===b)return c;return-1} function d(a,b,c,d){for(var g="solid solid_roundcap solid_squarecap dash railway dash_crewel".split(" "),h=a.yb.slice(1),l=h.length-1;0<=l;l--)h[l].EK=l;h.sort(function(a,b){return a[2]>b[2]?1:a.EK>b.EK?1:-1});for(var m={},l=0,n=h.length;l<n;l+=1){var p=h[l],r=p[1].split("&"),u,Q,x,C,G;u=Q=x=C=G=null;var y,A,D,z,L=null,E=!1;y=A=D=z=null;r[1]&&(u=k(r[1]));Q=parseInt(r[0]);x=r[2];x!==g[0]&&(x===g[1]?y="round":x===g[2]?y="square":0===x.indexOf(g[5])?(L=!0,D=[3,2]):0===x.indexOf(g[3])?D=eval("["+x.substring(5).split(")")[0]+ "]"):0===x.indexOf(g[4])&&(C=u,u=r[4]?k(r[4]):[1,1,1,u[3]],D=[12,12],E=!0,G=3,Q=1));r[3]&&r[4]&&3<r.length&&(G=Q+parseInt(r[3]),C=k(r[4]),x=r[5],x!==g[0]&&(x===g[1]?A="round":x===g[2]?A="square":0!==x.indexOf(g[5])&&0===x.indexOf(g[3])&&(G+=1,z=eval("["+x.substring(5).split(")")[0]+"]"))));if(b){if(D)for(r=D.length-1;0<=r;r-=1)D[r]*=d;if(z)for(r=z.length-1;0<=r;r-=1)z[r]*=d}x=[];x.Vd=0;var F=[],H=[];f(x,H,F,p[0],a.Hi,b,c,d,y);"app"===q&&(Q/=4,G/=4);r=[Q,u,D,G,C,z,L,E,y,A,p[3]];r.L6=!0;p=p[2];m[p]|| (m[p]=[]);F.qo=!0;m[p].push([new Float32Array(x),new Uint16Array(H),r,F])}a.yb=m;return a}function f(a,b,c,d,f,g,h,k,m){for(var p=0,q=d.length;p<q;p+=1){var r=a.length/11,u=r+6,x=n(d[p]),C=l(x,f,h);if(1<C[1].length){for(var x=C[0],G=C[2],y=0,C=C[1].length;y<C;y+=1){if(0<y){var A=x[2*y]-x[2*y-2],D=x[2*y+1]-x[2*y-1];a.Vd+=Math.sqrt(A*A+D*D)*(g?k:1)}var A=x[2*y],D=x[2*y+1],z=G[y][0],L=G[y][1],E,F;y===C-1?(E=x[2*C-2],F=x[2*C-1]):(E=x[2*y+2],F=x[2*y+3]);var H,N;0===y?(H=A,N=D):(H=x[2*y-2],N=x[2*y-1]); if(0!==y){var P=y===C-1?0:-1;a.push(A,D,z,L,1,H,N,P,E,F,a.Vd);a.push(A,D,z,L,-1,H,N,P,E,F,a.Vd)}else a.push(A,D,z,L,0,H,N,0,E,F,a.Vd),a.push(A,D,z,L,1,H,N,0,E,F,a.Vd),a.push(A,D,z,L,1,H,N,1,E,F,a.Vd),a.push(A,D,z,L,0,H,N,1,E,F,a.Vd),a.push(A,D,z,L,-1,H,N,1,E,F,a.Vd),a.push(A,D,z,L,-1,H,N,0,E,F,a.Vd),m&&(b.push(r+2,r+0,r+3),b.push(r+2,r+1,r+0),b.push(r+3,r+0,r+4),b.push(r+4,r+0,r+5));y!==C-1?(P=0===y?0:1,a.push(A,D,z,L,1,H,N,P,E,F,a.Vd),a.push(A,D,z,L,-1,H,N,P,E,F,a.Vd)):(a.push(A,D,z,L,0,H,N,0,E, F,a.Vd),a.push(A,D,z,L,1,H,N,0,E,F,a.Vd),a.push(A,D,z,L,1,H,N,-1,E,F,a.Vd),a.push(A,D,z,L,0,H,N,-1,E,F,a.Vd),a.push(A,D,z,L,-1,H,N,-1,E,F,a.Vd),a.push(A,D,z,L,-1,H,N,0,E,F,a.Vd));y!==C-1?(b.push(u+4*y,u+4*y+3,u+4*y+1),b.push(u+4*y,u+4*y+2,u+4*y+3)):m&&(A=u+4*(C-1),b.push(A+1,A+2,A+0),b.push(A+2,A+3,A+0),b.push(A+0,A+4,A+5),b.push(A+0,A+3,A+4))}c.push(G)}}}function g(a,b){var c=a.yb,d=[],f=[],g=[];h(a,f,g,b);var l=[[[0,0],[255,0],[255,255],[0,255]]];l.qo=!0;d.push([new Float32Array(f),new Uint16Array(g), k("ff"+a.zI.substr(1)),"regions:land",l]);c.sort(function(a,b){return"string"===typeof a?-1:"string"===typeof b?1:a[2]>b[2]?1:a[2]<b[2]?-1:0});for(var n=1,p=c.length;n<p;n+=1){var q=c[n],f=[],g=[],l=[],r=k(q[1].split("&")[0]);m(f,g,l,q[0],a.Hi,b);l.qo=!0;d.push([new Float32Array(f),new Uint16Array(g),r,q[3],l])}a.yb=d;return a}function h(a,b,c,d){var f=a.Hi,g=Math.pow(2,2);a=256*f.x*d-53109887*g;f=256*f.y*d-26262068*g;b.push(a,f);g=256*d;d=a+g;b.push(d,f);f+=g;b.push(a,f);b.push(d,f);c.push(0,1,2, 1,3,2)}function k(a){for(var b=[],c=0,d=a.length;c<d;c+=2)b.push(parseInt(a.substr(c,2),16)/255);b.push(b.shift());return b}function l(a,b,c){var d=0,f=0,d=256*b.x,f=256*b.y;b=[];for(var g=[],h=[],k=Math.pow(2,2),l=0,m=a.length;l<m;l+=2){var n=(d+a[l])*c-53109887*k,p=(f+a[l+1])*c-26262068*k,q=h.length;if(0===b.length||n!==h[q-2]||p!==h[q-1])1<b.length?n===h[q-2]&&n===h[q-4]?(h[q-1]=p,b[b.length-1][1]=p,g[b.length-1][1]=a[l+1]):p===h[q-1]&&p===h[q-3]?(h[q-2]=n,b[b.length-1][0]=n,g[b.length-1][0]=a[l]): (h.push(n),h.push(p),b.push([n,p]),g.push([a[l],a[l+1]])):(h.push(n),h.push(p),b.push([n,p]),g.push([a[l],a[l+1]]))}return[h,b,g]}function m(a,b,c,d,f,g){for(var h=0,k=d.length;h<k;h+=1){var m=a.length/2,p=l(n(d[h]),f,g);2<p[1].length&&(m=u.DN(p[1],[],m),m.length&&(a.push.apply(a,p[0]),b.push.apply(b,m),c.push(p[2])))}}function n(a){var b,c,d,f,g;c=[];d=NaN;var h=null,k=null;f=0;for(g=a.length;f<g;f+=1)(b=a[f],b="ASDFGHJKLQWERTYUIO!sdfghjkl".indexOf(b),isNaN(d))?d=27*b:(h?k||(k=h=null):h=d+b-333, c.push(d+b-333),d=NaN);return c}var p=Number.EPSILON||2E-16,q,r=null,u={me:function(a){for(var b=a.length,c=0,d=b-1,f=0;f<b;d=f++)c+=a[d][0]*a[f][1]-a[f][0]*a[d][1];return 0.5*c},H2:function(){return function(a,b){var c=a.length;if(3>c)return null;var d=[],f=[],g=[],h,k,l;if(0<u.me(a))for(k=0;k<c;k++)f[k]=k;else for(k=0;k<c;k++)f[k]=c-1-k;var m=2*c;for(k=c-1;2<c&&!(0>=m--);){h=k;c<=h&&(h=0);k=h+1;c<=k&&(k=0);l=k+1;c<=l&&(l=0);var n;a:{var q=n=void 0,r=void 0,x=void 0,C=void 0,G=void 0,y=void 0,A= void 0,D=void 0,q=a[f[h]][0],r=a[f[h]][1],x=a[f[k]][0],C=a[f[k]][1],G=a[f[l]][0],y=a[f[l]][1];if(p>(x-q)*(y-r)-(C-r)*(G-q))n=!1;else{var z=void 0,L=void 0,E=void 0,F=void 0,H=void 0,N=void 0,P=void 0,U=void 0,Y=void 0,S=void 0,Y=U=P=D=A=void 0,z=G-x,L=y-C,E=q-G,F=r-y,H=x-q,N=C-r;for(n=0;n<c;n++)if(A=a[f[n]][0],D=a[f[n]][1],!(A===q&&D===r||A===x&&D===C||A===G&&D===y)&&(P=A-q,U=D-r,Y=A-x,S=D-C,A-=G,D-=y,Y=z*S-L*Y,P=H*U-N*P,U=E*D-F*A,Y>=-p&&U>=-p&&P>=-p)){n=!1;break a}n=!0}}if(n){d.push([a[f[h]],a[f[k]], a[f[l]]]);g.push([f[h],f[k],f[l]]);h=k;for(l=k+1;l<c;h++,l++)f[h]=f[l];c--;m=2*c}}return b?g:d}}(),DN:function(a,b,c,d){var f,g,h,k={};b=0;for(f=a.length;b<f;b++)h=a[b][0]+":"+a[b][1],k[h]=b;a=u.H2(a,!1);if(!a)return[];if(d)return a;var l=[];b=0;for(f=a.length;b<f;b++)for(g=a[b],d=0;3>d;d++)h=g[d][0]+":"+g[d][1],h=k[h],l.push(h+c);return l},k6:function(a){return 0>u.me(a)}};return{VB:function(c,f){q=c.mode;var h=c.Gu,k=c.tr;r=c.Mt;for(var l=[],m=Math.pow(2,20-h),h=0,n=c.ce.length;h<n;h+=1){var p= c.ce[h];switch(p.Mc){case "region":l.push(g(p,m));break;case "road":l.push(d(p,k,m,c.HM));break;case "building":l.push(b(p,m,c.KW))}}c.ce=l;if(a){k=[];h=0;for(n=l.length;h<n;h++)if((m=l[h].yb)&&m.length)for(var p=0,u=m.length;p<u;p++)m[p].buffer&&m[p].buffer instanceof ArrayBuffer&&k.push(m[p].buffer);a.Ct(k)}f(null,{data:c})},b7:function(){}}},{}))})(V);(function(a){function b(a){var b=new Float32Array(3);a&&"object"===typeof a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2]);this.elements=b}function c(a){var b,c;if(a&&"object"===typeof a&&a.hasOwnProperty("elements")){b=a.elements;c=new Float32Array(16);for(a=0;16>a;++a)c[a]=b[a];this.elements=c}else this.elements=new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}c.prototype.set=function(a){var b,c;b=a.elements;c=this.elements;if(b!==c){for(a=0;16>a;++a)c[a]=b[a];return this}};c.prototype.concat=function(a){var b, c,h,k,l,m,n;c=b=this.elements;h=a.elements;if(b===h)for(h=new Float32Array(16),a=0;16>a;++a)h[a]=b[a];for(a=0;4>a;a++)k=c[a],l=c[a+4],m=c[a+8],n=c[a+12],b[a]=k*h[0]+l*h[1]+m*h[2]+n*h[3],b[a+4]=k*h[4]+l*h[5]+m*h[6]+n*h[7],b[a+8]=k*h[8]+l*h[9]+m*h[10]+n*h[11],b[a+12]=k*h[12]+l*h[13]+m*h[14]+n*h[15];return this};c.prototype.T1=function(a,b,c,h){var k,l,m;if(a===b||c===h)throw"null frustum";l=1/(b-a);m=1/(h-c);k=this.elements;k[0]=2*l;k[1]=0;k[2]=0;k[3]=0;k[4]=0;k[5]=2*m;k[6]=0;k[7]=0;k[8]=0;k[9]=0;k[10]= -2;k[11]=0;k[12]=-(b+a)*l;k[13]=-(h+c)*m;k[14]=-1;k[15]=1;return this};c.prototype.scale=function(a,b,c){var h=this.elements;h[0]*=a;h[4]*=b;h[8]*=c;h[1]*=a;h[5]*=b;h[9]*=c;h[2]*=a;h[6]*=b;h[10]*=c;h[3]*=a;h[7]*=b;h[11]*=c;return this};c.prototype.translate=function(a,b,c){var h=this.elements;h[12]+=h[0]*a+h[4]*b+h[8]*c;h[13]+=h[1]*a+h[5]*b+h[9]*c;h[14]+=h[2]*a+h[6]*b+h[10]*c;h[15]+=h[3]*a+h[7]*b+h[11]*c;return this};c.prototype.U1=function(a,b,c,h){var k,l,m,n,p,q,r,u;a=Math.PI*a/180;k=this.elements; l=Math.sin(a);a=Math.cos(a);0!==b&&0===c&&0===h?(0>b&&(l=-l),k[0]=1,k[4]=0,k[8]=0,k[12]=0,k[1]=0,k[5]=a,k[9]=-l,k[13]=0,k[2]=0,k[6]=l,k[10]=a,k[14]=0,k[3]=0,k[7]=0,k[11]=0):0===b&&0!==c&&0===h?(0>c&&(l=-l),k[0]=a,k[4]=0,k[8]=l,k[12]=0,k[1]=0,k[5]=1,k[9]=0,k[13]=0,k[2]=-l,k[6]=0,k[10]=a,k[14]=0,k[3]=0,k[7]=0,k[11]=0):0===b&&0===c&&0!==h?(0>h&&(l=-l),k[0]=a,k[4]=-l,k[8]=0,k[12]=0,k[1]=l,k[5]=a,k[9]=0,k[13]=0,k[2]=0,k[6]=0,k[10]=1,k[14]=0,k[3]=0,k[7]=0,k[11]=0):(m=Math.sqrt(b*b+c*c+h*h),1!==m&&(m=1/ m,b*=m,c*=m,h*=m),m=1-a,n=b*c,p=c*h,q=h*b,r=b*l,u=c*l,l*=h,k[0]=b*b*m+a,k[1]=n*m+l,k[2]=q*m-u,k[3]=0,k[4]=n*m-l,k[5]=c*c*m+a,k[6]=p*m+r,k[7]=0,k[8]=q*m+u,k[9]=p*m-r,k[10]=h*h*m+a,k[11]=0,k[12]=0,k[13]=0,k[14]=0);k[15]=1;return this};c.prototype.rotate=function(a,b,g,h){return this.concat((new c).U1(a,b,g,h))};a.dw=c;b.prototype.normalize=function(){var a=this.elements,b=a[0],c=a[1],h=a[2],k=Math.sqrt(b*b+c*c+h*h);if(k){if(1===k)return this}else return a[0]=0,a[1]=0,a[2]=0,this;k=1/k;a[0]=b*k;a[1]= c*k;a[2]=h*k;return this};a.Z3=b;a.a4=function(a){var b=new Float32Array(4);a&&"object"===typeof a&&(b[0]=a[0],b[1]=a[1],b[2]=a[2],b[3]=a[3]);this.elements=b}})(V);V.Rv={QZ:function(a,b,c){b=V.Rv.createProgram(a,b,c);if(!b)return console.log("Failed to create program"),!1;a.useProgram(b);a.se=b;return!0},createProgram:function(a,b,c){b=V.Rv.gL(a,a.VERTEX_SHADER,b);c=V.Rv.gL(a,a.FRAGMENT_SHADER,c);if(!b||!c)return null;var d=a.createProgram();if(!d)return null;a.attachShader(d,b);a.attachShader(d,c);a.linkProgram(d);return a.getProgramParameter(d,a.LINK_STATUS)?d:(console.log("Failed to link program: "+a.getProgramInfoLog(d)),a.deleteProgram(d),a.deleteShader(c), a.deleteShader(b),null)},gL:function(a,b,c){b=a.createShader(b);if(null===b)return console.log("unable to create shader"),null;a.shaderSource(b,c);a.compileShader(b);return a.getShaderParameter(b,a.COMPILE_STATUS)?b:(console.log("Failed to compile shader: "+a.getShaderInfoLog(b)),a.deleteShader(b),null)}};V.J.We.Od=V.J.uc.Sg.extend({ka:[V.lw],D:function(a,b){this.Gt=20;this.Eb=Math.min(2,window.devicePixelRatio||1);this.Ou=1;arguments.callee.cb.apply(this,arguments);this.Q("mapStyle",a.l);this.Q("style",a.l);this.Bh=this.zi=!0;a.l.da.ho&&this.Gw(a,b);this.Om=0;this.FK()||this.set("reload")},LO:"precision highp float;attribute vec4 a_Position;attribute vec3 a_op,a_Next,a_Previous;attribute float a_Tags;uniform float u_xDelta,u_width;uniform lowp int u_type;uniform mat4 u_othMatrix,u_zoomMatrix,u_modelMatrix;uniform float u_scale;varying float v_distance;varying vec2 v_op;varying float v_TB;varying float v_cap;varying lowp float v_Tags;void main() {vec4 position=a_Position;position.x+=u_xDelta;if (u_type==0) {gl_Position=u_othMatrix*u_zoomMatrix*u_modelMatrix*position;}else if(u_type>1) {v_op=a_op.xy;v_TB=a_op.z;vec3 curPos=position.xyz;v_distance=a_Next.z;float ddis=0.0;vec3 previous=vec3(a_Previous.x+u_xDelta,a_Previous.y,0);vec3 next=vec3(a_Next.x+u_xDelta,a_Next.y,0);vec4 up,dir;v_distance *= u_scale;if(previous==curPos){ dir= vec4(normalize(next-curPos).xy,0,0);}else if(next==curPos){dir= -vec4(normalize(previous-curPos).xy,0,0);}else {vec3 dir0=previous-curPos;vec3 dir1=next-curPos;vec3 dir2=normalize(dir0);vec3 dir3=normalize(dir1);float f0=dir0.x*dir1.y-dir1.x*dir0.y;dir = vec4(0); v_cap=1.0;if(f0==0.0){up = vec4(dir3.y,-dir3.x,0,0); }else{vec3 dir4=normalize(dir2+dir3);float sinA=length(cross(dir4,dir2));float cosA=dot(dir4,dir2);if(sinA<0.5){sinA=0.5;}up= vec4(dir4,0)/sinA;ddis=abs(length(up)*cosA*u_width*0.5);if(f0<0.0){up=-up;ddis=-ddis;}v_distance += v_TB*a_Previous.z*ddis;}}if(previous==curPos||next==curPos){ up = vec4(dir.y,-dir.x,0,0); if(u_type==4){v_cap=sqrt(v_TB*v_TB+a_Previous.z*a_Previous.z);}else if(u_type==3){v_cap=1.0;}else{dir = vec4(0);}}vec4 pos=u_zoomMatrix*u_modelMatrix*position;pos=pos+(up*v_TB-dir*a_Previous.z)*u_width*0.5;gl_Position=u_othMatrix*pos;}else if (u_type==1) {v_Tags=a_Tags;gl_Position=u_othMatrix*u_zoomMatrix*u_modelMatrix*position;}}", aO:"precision lowp float;uniform vec4 u_FragColor,u_FragColor2;varying lowp float v_distance,v_TB;varying vec2 v_op;varying lowp float v_Tags;varying float v_cap;uniform lowp int u_type;uniform int u_isDash,u_onlyBorder;uniform vec4 u_dash;void main() {vec4 color=u_FragColor;if (u_type==0) {}else if(u_type>1) {if(v_op.x<-0.2||v_op.x>256.2||v_op.y<-0.2||v_op.y>256.2){discard;}if(v_cap>1.0){discard;}if(u_isDash==1){float all = u_dash[0] + u_dash[1] + u_dash[2] + u_dash[3];float off = mod(v_distance - u_dash[0], all);if(off> u_dash[0]&&off<=(u_dash[0]+u_dash[1])||off>(all-u_dash[3])){discard;}}if(u_onlyBorder==1&&v_TB<=0.7&&v_TB>=-0.7){discard;}}else if(u_type==1) {color=v_Tags==3.0?u_FragColor2:vec4((u_FragColor+(u_FragColor2-u_FragColor)*v_Tags/3.0).xyzw);}gl_FragColor=color;}", reloadChanged:function(){this.r&&(this.r.Va=!1);this.Na.clear();this.wa&&this.wa.parentNode&&this.wa.parentNode.removeChild(this.wa);this.set("display")},EB:function(a){if(this.r&&a.bL===this.r.Yh)for(var b=0,c=a.ce.length;b<c;b+=1)this.DB(a.ce[b],a.Gu,a.tr,a.U)},P0:function(a){for(var b=0,c=a.length;b<c;b+=1){var d=a[b];this.l.Aj&&d[3]&&!this.l.Hc&&(d[2]=this.Nb.mu(d[2],d[3]));d.Mu=d[1].length;d[0]=this.gl(this.Kg.ARRAY_BUFFER,d[0]);d[1]=this.gl(this.Kg.ELEMENT_ARRAY_BUFFER,d[1])}},z1:function(a){for(var b= 0,c=a.length;b<c;b+=1){var d=a[b];d.Mu=d[1].length;d[0]=this.gl(this.Kg.ARRAY_BUFFER,d[0]);d[1]=this.gl(this.Kg.ELEMENT_ARRAY_BUFFER,d[1]);this.l.Aj&&d[2][10]&&!this.l.Hc&&(d[2][1]=this.Nb.rk(d[2][1],d[2][10],1),d[2][4]=this.Nb.rk(d[2][4],d[2][10],0))}},MW:function(a){for(var b=0,c=a.length;b<c;b+=1){var d=a[b];d.wL=d[0].length/3;d[0]=this.gl(this.Kg.ARRAY_BUFFER,d[0]);d.xL=d[1].length/3;d[1]=this.gl(this.Kg.ARRAY_BUFFER,d[1]);d.yL=d[2].length/3;d[2]=this.gl(this.Kg.ARRAY_BUFFER,d[2]);if(this.l.Aj&& d[3][2]&&!this.l.Hc){var f=this.Nb.Gq(d[3][0],d[3][1],d[3][2]);d[3][0]=f[0];d[3][1]=f[1]}}},gl:function(a,b){if(b.length){var c=this.Kg,d=c.createBuffer();c.bindBuffer(a,d);c.bufferData(a,b,c.STATIC_DRAW);return d}},IY:function(a){var b=a.Fa,c=b.x,d=b.y,f=b.z,g=Math.pow(2,f),h=(c+g)%g,k=h+g,l=h-g,m=null;h!==c&&(m=this.AA(f,h,d));m||l===c||(m=this.AA(f,l,d));m||k===c||(m=this.AA(f,k,d));return m?(a.status=m.status,a.va=m.va,a.fc=m.fc,a.Jd=m.Jd,a.Mb={building:m.Mb.building,region:m.Mb.region,road:m.Mb.road, au:(b.x-m.Fa.x)/g+m.Mb.au},!0):!1},AA:function(a,b,c){if((a=this.Na.get(a+"/"+b+"/"+c))&&a.Mb)return a},DB:function(a){var b=a.Mc,c=this.Na.get(a.yf);if(c){c.Mb||(c.Mb={au:0});c.Mb[b]=a.yb;if("region"===b)this.P0(a.yb);else if("road"===b)for(var d in a.yb)a.yb.hasOwnProperty(d)&&this.z1(a.yb[d]);else"building"===b&&(this.MW(a.yb),a.cm&&a.cm.length&&!c.ag&&(c.ag={},c.ag.bd=a.cm,V.Hm&&V.Hm.w("vecTileParsed.buildings",{Gv:c})));b===this.r.xa[this.r.xa.length-1]&&(c.va=!0,this.set("display"))}},ve:function(a, b){this.Xo=a.Xo;this.Zu(a,b);a.uW=this.ej;this.Bo(a,b);if(this.ej&&!this.r.Va){var c=this.r;V.Ld.Ce.end({id:this.l.da.id,key:"rb",index:2});c.Va=!0;c.of?c.pa("renderComplete"):(c.of=!0,c.pa("complete"))}this.wk=this.Ga;this.zj&&this.set("display",0)},Nf:function(){return this.wa},AB:function(){V.J.We.Od.uq+=1;this.wa&&V.B.F(this.wa,"webglcontextlost",this.AB,this);this.wa.parentNode&&this.wa.parentNode.removeChild(this.wa);if(1<V.J.We.Od.uq)this.BB();else{var a=this.wa.className;this.wa=document.createElement("canvas"); this.wa.className=a;this.FK()}this.set("reload");new V.ra.Ca(V.q.dc+"://webapi.amap.com/count?"+["type=glfail","c="+V.J.We.Od.uq,"crd="+V.j.mK,"k="+V.q.key,"u="+V.q.Dl,"m="+(V.j.U?1:0),"pf="+V.j.lr,"dpr="+window.devicePixelRatio,"scale="+(V.j.TC||0),"detect="+V.j.ha].join("&"))},BB:function(){V.j.Zd=!1;this.r&&this.r.l.da&&(this.r.l.set("baseRender",V.j.xY?"dv":"d"),this.r.l.da.mL(),this.r.J=null,this.r.Qa.tm(),this.r=null);this.wa=this.Nb=null},qe:function(a){this.wa=document.createElement("canvas"); this.wa.className=a||"amap-layer"},FK:function(){if(1<V.J.We.Od.uq)return this.BB(),!1;var a=this.Kg=this.wa.getContext(V.j.m3,V.j.n3);if(a)V.B.e(this.wa,"webglcontextlost",this.AB,this);else return this.BB(),!1;V.Rv.QZ(a,this.LO,this.aO);this.R2=a.getUniformLocation(a.se,"u_xDelta");this.P2=a.getUniformLocation(a.se,"u_othMatrix");this.S2=a.getUniformLocation(a.se,"u_zoomMatrix");this.N2=a.getUniformLocation(a.se,"u_modelMatrix");this.Al=a.getAttribLocation(a.se,"a_Position");this.kq=a.getAttribLocation(a.se, "a_op");this.jq=a.getAttribLocation(a.se,"a_Previous");this.iq=a.getAttribLocation(a.se,"a_Next");this.Cn=a.getAttribLocation(a.se,"a_Tags");a.enableVertexAttribArray(this.Al);this.Lv=a.getUniformLocation(a.se,"u_FragColor");this.K2=a.getUniformLocation(a.se,"u_FragColor2");this.Mv=a.getUniformLocation(a.se,"u_type");this.HN=a.getUniformLocation(a.se,"u_width");this.M2=a.getUniformLocation(a.se,"u_isDash");this.O2=a.getUniformLocation(a.se,"u_onlyBorder");this.L2=a.getUniformLocation(a.se,"u_dash"); this.Q2=a.getUniformLocation(a.se,"u_scale");a.enable(a.BLEND);a.enable(a.CULL_FACE);a.cullFace(a.FRONT);a.blendEquationSeparate(a.FUNC_ADD,a.FUNC_ADD);a.blendFuncSeparate(a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.SRC_ALPHA,a.ONE);a.clearColor(0,0,0,0);this.TL=this.fJ=this.NK=void 0;this.Mr=0;return!0},um:function(a){var b=Math.pow(2,a.Y.zoom-this.qd),c=a.Y.Ga.Xa(this.wk).Ob(this.Sf);this.transform={translate:this.transform[0].translate.add(c),scale:b,rotate:0};this.Ga=a.Y.Ga},Bo:function(a,b){var c=this.oz(a, b),d=this.Kg;d.clear(d.COLOR_BUFFER_BIT);var f=this.r.ha?this.Eb:this.Ou,g=0,h=0;0!==a.Y.rotation?(g=2*Math.floor(a.Y.ta.gb.x)*f,h=2*Math.floor(a.Y.ta.gb.y)*f):(g=a.size.width*f,h=a.size.height*f);g&&h&&(this.wa.width=g,this.wa.height=h,d.viewport(0,0,this.wa.width,this.wa.height),this.mv.apply(this,c),this.Sc(a))},yC:256*Math.pow(2,20),nY:function(a,b){var c=b.Mb.region;if(c){this.Pt(b.Mb.au*this.yC);for(var d=0;d<c.length;d+=1){var f=c[d],g=f[2],h=f[3];h&&this.l.Hc&&(g=this.Nb.mu(g,h),f.Wc=g);g&& (a.bindBuffer(a.ARRAY_BUFFER,f[0]),a.vertexAttribPointer(this.Al,2,a.FLOAT,!1,8,0),a.uniform4f(this.Lv,g[0],g[1],g[2],g[3]),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,f[1]),a.drawElements(a.TRIANGLES,f.Mu,a.UNSIGNED_SHORT,0))}}},oY:function(a,b,c){var d=this.r.ha?this.Eb:this.Ou,f;for(f in b)if(b.hasOwnProperty(f)){for(var g=b[f],h=0;h<g.length;h+=1){var k=g[h],l=k[2],m=l[4],n=l[10];n&&this.l.Hc&&(m=this.Nb.rk(m,n,0),k.Wc=m);m&&(n="square"===k[2][9]?3:"round"===k[2][9]?4:2,a.uniform1i(this.Mv,n),k[2][3]&& (this.Pt(k.Mr*this.yC),a.bindBuffer(a.ARRAY_BUFFER,k[0]),a.vertexAttribPointer(this.Al,2,a.FLOAT,!1,44,0),a.vertexAttribPointer(this.kq,3,a.FLOAT,!1,44,8),a.vertexAttribPointer(this.jq,3,a.FLOAT,!1,44,20),a.vertexAttribPointer(this.iq,3,a.FLOAT,!1,44,32),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,k[1]),k=k.Mu,n=l[7]?l[3]:l[3]*c,a.uniform1f(this.HN,n*d),a.uniform4f(this.Lv,m[0],m[1],m[2],m[3]),this.Ot(l[5]?1:0,l[5],0),a.drawElements(a.TRIANGLES,k,a.UNSIGNED_SHORT,0)))}for(h=0;h<g.length;h+=1)k=g[h],l=k[2], l[0]&&(m=l[1],(n=l[10])&&this.l.Hc&&(m=this.Nb.rk(m,n,1),k.Wc=m),m&&(n="square"===k[2][8]?3:"round"===k[2][8]?4:2,a.uniform1i(this.Mv,n),this.Pt(k.Mr*this.yC),a.bindBuffer(a.ARRAY_BUFFER,k[0]),a.vertexAttribPointer(this.Al,2,a.FLOAT,!1,44,0),a.vertexAttribPointer(this.kq,3,a.FLOAT,!1,44,8),a.vertexAttribPointer(this.jq,3,a.FLOAT,!1,44,20),a.vertexAttribPointer(this.iq,3,a.FLOAT,!1,44,32),a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,k[1]),k=k.Mu,n=l[7]?l[0]:l[0]*c,a.uniform1f(this.HN,n*d),a.uniform4f(this.Lv, m[0],m[1],m[2],m[3]),this.Ot(l[2]?1:0,l[2],l[6]?1:0),a.drawElements(a.TRIANGLES,k,a.UNSIGNED_SHORT,0)))}},mw:new V.K(212439548,105048272),mv:function(a,b,c){if(a.length){this.fc+=1;b=this.wa.width;c=this.wa.height;var d=this.Kg;b=(new V.dw).T1(-b/2,b/2,c/2,-c/2);c=Math.pow(2,this.zoom-this.Gt)*(this.r.ha?this.Eb:this.Ou);c=(new V.dw).scale(c,c,1);var f=this.Ga.Ob(this.N/Math.pow(2,this.Gt-this.zoom)).Xa(this.mw),f=(new V.dw).translate(-f.x,-f.y,0);d.uniformMatrix4fv(this.P2,!1,b.elements);d.uniformMatrix4fv(this.S2, !1,c.elements);d.uniformMatrix4fv(this.N2,!1,f.elements);d.uniform1f(this.Q2,Math.pow(2,this.zoom-this.Gt)*(this.r.ha?this.Eb:1));b=this.Vm=[];for(c=a.length-1;0<=c;c-=1){f=a[c];d.disableVertexAttribArray(this.kq);d.disableVertexAttribArray(this.jq);d.disableVertexAttribArray(this.iq);d.disableVertexAttribArray(this.Cn);this.Ot(0,void 0,void 0);d.uniform1i(this.Mv,0);this.Pt(0);for(var g=0,h=f.length;g<h;g+=1){var k=f[g];f[g].Mb&&(k.fc=this.fc,b.push(k),this.nY(d,k))}d.enableVertexAttribArray(this.kq); d.enableVertexAttribArray(this.jq);d.enableVertexAttribArray(this.iq);d.disableVertexAttribArray(this.Cn);if(f.length){for(var l={},g=0,h=f.length;g<h;g+=1){var k=f[g],m=k.Mb.road;if(m)for(var n in m)if(m.hasOwnProperty(n)){l[n]||(l[n]=[]);for(var p=0,q=m[n].length;p<q;p+=1)m[n][p].Mr=k.Mb.au,l[n].push(m[n][p])}}this.oY(d,l,Math.pow(1.3,this.zoom-f[0].Fa.z))}if(!(14>this.zoom))for(d.uniform1i(this.Mv,1),this.Ot(0,void 0,void 0),d.disableVertexAttribArray(this.kq),d.disableVertexAttribArray(this.jq), d.disableVertexAttribArray(this.iq),d.enableVertexAttribArray(this.Cn),g=0,h=f.length;g<h;g+=1)k=f[g],k.Mb.building&&this.gY(d,k)}}},gY:function(a,b){for(var c=b.Mb.building,d=0;d<c.length;d+=1){var f=c[d],g=f[3][0],h=f[3][1];if(!f||!g)break;var k=f[3][2];k&&this.l.Hc&&(h=this.Nb.Gq(g,h,k),g=h[0],h=h[1],f.Wc=g);if(g||h)g||(g=[0,0,0,0]),h||(h=[0,0,0,0]),a.uniform4f(this.K2,g[0],g[1],g[2],g[3]),a.uniform4f(this.Lv,h[0],h[1],h[2],h[3]),f.wL&&(a.bindBuffer(a.ARRAY_BUFFER,f[0]),a.vertexAttribPointer(this.Al, 2,a.FLOAT,!1,12,0),a.vertexAttribPointer(this.Cn,1,a.FLOAT,!1,12,8),a.drawArrays(a.TRIANGLES,0,f.wL)),f.yL&&(a.bindBuffer(a.ARRAY_BUFFER,f[2]),a.vertexAttribPointer(this.Al,2,a.FLOAT,!1,12,0),a.vertexAttribPointer(this.Cn,1,a.FLOAT,!1,12,8),a.drawArrays(a.LINES,0,f.yL)),f.xL&&(a.bindBuffer(a.ARRAY_BUFFER,f[1]),a.vertexAttribPointer(this.Al,2,a.FLOAT,!1,12,0),a.vertexAttribPointer(this.Cn,1,a.FLOAT,!1,12,8),a.drawArrays(a.TRIANGLES,0,f.xL))}},Ot:function(a,b,c){var d=this.Kg;a!==this.NK&&(d.uniform1i(this.M2, a),this.NK=a);a&&b!==this.fJ&&(this.fJ=b,d.uniform4f(this.L2,b[0],b[1],b[2]||0,b[3]||0));c!==this.TL&&(d.uniform1i(this.O2,c),this.TL=c)},Pt:function(a){a!==this.Mr&&(this.Kg.uniform1f(this.R2,a),this.Mr=a)},Sc:function(){this.transform={translate:{x:this.wa.width/2,y:this.wa.height/2},scale:this.r.ha?1/this.Eb:1/this.Ou,rotate:0}}});V.J.We.Od.uq=0; ', true), _jsload_('sync', '(function(){if(V.q.sc){var a=function(){var a=V.q.sc.split("."),b=window;do if(b=b[a.shift()],!b)return null;while(a.length);return b||null},b=function(b){var c=a();if(c){if("function"!==typeof c)throw Error(V.q.sc+" is not a function!");c()}else if(b)throw Error("Can not find callback: "+V.q.sc+", try define it before load JsApi!");};document.body&&a()?b():setTimeout(function(){b(!0)},300)}var c=["s=rsv3&product=JsInit&key="+V.q.key,"t="+(new Date).getTime()];c.push("resolution="+window.innerWidth+ "*"+window.innerHeight);c.push("mob="+(V.j.U?1:0));c.push("vt="+(V.j.Ke?1:0));c.push("dpr="+window.devicePixelRatio);c.push("scale="+V.j.TC||0);c.push("detect="+V.j.ha);new V.ra.Ca(V.q.ec+"/v3/log/init?"+c.join("&"),{callback:"callback"})})(); ', true)
                        })()