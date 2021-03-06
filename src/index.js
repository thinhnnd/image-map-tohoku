import React, {useState} from 'react'

import ImageMapper from "react-image-mapper";
import { useWindowSize } from "./hook/useWindowSize";
import { useImageMapResponsive } from "./hook/useImageMapResponsive";
import styles from './styles.module.css'

const IMAGE_WIDTH = 1900
const URL = "https://v-messe.jp/hat/mirai2020chubu/map/img/base_off.png";
const MAP = {
  name: "my-map",
  areas: [
    {
      name: "100",
      shape: "rect",
      coords: [95, 95, 522, 210],
    },
    {
      name: "101",
      shape: "circle",
      coords: [217, 788, 44],
    },
    {
      name: "102",
      shape: "circle",
      coords: [340, 939, 44],
    },
    {
      name: "01",
      shape: "poly",
      coords: [
        1400,
        192,
        1351,
        215,
        1351,
        240,
        1384,
        260,
        1434,
        237,
        1434,
        213,
      ],
    },
    {
      name: "02",
      shape: "poly",
      coords: [1280, 243, 1228, 266, 1283, 305, 1314, 293, 1313, 265],
    },
    {
      name: "03",
      shape: "poly",
      coords: [
        1226,
        268,
        1171,
        291,
        1172,
        317,
        1204,
        340,
        1203,
        315,
        1260,
        291,
      ],
    },
    {
      name: "04",
      shape: "poly",
      coords: [
        1263,
        291,
        1206,
        314,
        1205,
        340,
        1239,
        363,
        1240,
        338,
        1296,
        315,
      ],
    },
    {
      name: "05",
      shape: "poly",
      coords: [
        1296,
        315,
        1241,
        339,
        1241,
        363,
        1276,
        390,
        1275,
        362,
        1331,
        338,
      ],
    },
    {
      name: "06",
      shape: "poly",
      coords: [
        1332,
        337,
        1275,
        362,
        1275,
        388,
        1312,
        414,
        1312,
        389,
        1368,
        363,
      ],
    },
    {
      name: "07",
      shape: "poly",
      coords: [
        1368,
        364,
        1314,
        388,
        1312,
        414,
        1349,
        441,
        1351,
        415,
        1405,
        389,
      ],
    },
    {
      name: "08",
      shape: "poly",
      coords: [
        1406,
        389,
        1352,
        415,
        1351,
        440,
        1388,
        468,
        1444,
        441,
        1444,
        413,
      ],
    },
    {
      name: "09",
      shape: "poly",
      coords: [1097, 323, 1039, 347, 1073, 372, 1129, 346],
    },
    {
      name: "10",
      shape: "poly",
      coords: [1130, 347, 1073, 372, 1177, 450, 1235, 422],
    },
    {
      name: "11",
      shape: "poly",
      coords: [1236, 423, 1178, 450, 1216, 477, 1273, 449],
    },
    {
      name: "12",
      shape: "poly",
      coords: [
        1274,
        450,
        1217,
        478,
        1252,
        506,
        1254,
        534,
        1311,
        506,
        1310,
        476,
      ],
    },
    {
      name: "13",
      shape: "poly",
      coords: [1037, 349, 981, 373, 979, 400, 1013, 426, 1012, 397, 1071, 372],
    },
    {
      name: "14",
      shape: "poly",
      coords: [
        1073,
        372,
        1014,
        397,
        1013,
        425,
        1046,
        451,
        1046,
        424,
        1105,
        398,
      ],
    },
    {
      name: "15",
      shape: "poly",
      coords: [
        1106,
        399,
        1047,
        425,
        1048,
        451,
        1081,
        478,
        1081,
        451,
        1141,
        424,
      ],
    },
    {
      name: "16",
      shape: "poly",
      coords: [
        1142,
        424,
        1082,
        451,
        1082,
        479,
        1118,
        506,
        1117,
        480,
        1177,
        450,
      ],
    },
    {
      name: "17",
      shape: "poly",
      coords: [
        1177,
        451,
        1118,
        479,
        1118,
        508,
        1154,
        535,
        1153,
        507,
        1216,
        477,
      ],
    },
    {
      name: "18",
      shape: "poly",
      coords: [
        1216,
        477,
        1155,
        507,
        1154,
        535,
        1191,
        562,
        1253,
        536,
        1252,
        505,
      ],
    },
    {
      name: "19",
      shape: "poly",
      coords: [901, 408, 839, 434, 868, 459, 930, 432],
    },
    {
      name: "20",
      shape: "poly",
      coords: [931, 433, 868, 461, 902, 487, 965, 460],
    },
    {
      name: "21",
      shape: "poly",
      coords: [965, 461, 902, 488, 938, 517, 1000, 488],
    },
    {
      name: "22",
      shape: "poly",
      coords: [1000, 488, 939, 516, 972, 546, 1035, 515],
    },
    {
      name: "23",
      shape: "poly",
      coords: [1037, 516, 974, 545, 1008, 574, 1072, 544],
    },
    {
      name: "24",
      shape: "poly",
      coords: [
        1072,
        546,
        1010,
        575,
        1083,
        634,
        1083,
        662,
        1143,
        633,
        1143,
        602,
      ],
    },
    {
      name: "25",
      shape: "poly",
      coords: [837, 434, 773, 462, 773, 489, 804, 517, 804, 490, 867, 460],
    },
    {
      name: "26",
      shape: "poly",
      coords: [867, 460, 805, 490, 804, 519, 838, 545, 838, 516, 902, 487],
    },
    {
      name: "27",
      shape: "poly",
      coords: [902, 487, 839, 517, 838, 543, 906, 606, 906, 575, 970, 545],
    },
    {
      name: "28",
      shape: "poly",
      coords: [972, 545, 907, 575, 907, 607, 941, 637, 941, 605, 1006, 576],
    },
    {
      name: "29",
      shape: "poly",
      coords: [1009, 576, 942, 606, 943, 637, 979, 666, 1045, 636, 1043, 604],
    },
    {
      name: "30",
      shape: "poly",
      coords: [687, 499, 620, 528, 651, 555, 718, 527],
    },
    {
      name: "31",
      shape: "poly",
      coords: [719, 528, 652, 556, 685, 586, 749, 555],
    },
    {
      name: "32",
      shape: "poly",
      coords: [750, 557, 686, 587, 715, 616, 784, 585],
    },
    {
      name: "33",
      shape: "poly",
      coords: [784, 587, 718, 616, 750, 648, 818, 617],
    },
    {
      name: "34",
      shape: "poly",
      coords: [819, 618, 751, 649, 819, 712, 821, 743, 890, 710, 891, 678],
    },
    {
      name: "35",
      shape: "poly",
      coords: [617, 529, 549, 558, 549, 588, 611, 648, 682, 617, 682, 587],
    },
    {
      name: "36",
      shape: "poly",
      coords: [443, 602, 370, 636, 461, 732, 534, 698],
    },
    {
      name: "37",
      shape: "poly",
      coords: [533, 698, 461, 732, 592, 875, 593, 907, 668, 871, 668, 832],
    },
    {
      name: "38",
      shape: "poly",
      coords: [370, 636, 116, 744, 200, 848, 459, 732],
    },
    {
      name: "39",
      shape: "poly",
      coords: [460, 734, 202, 849, 346, 1030, 593, 908, 591, 873],
    },
    {
      name: "40",
      shape: "poly",
      coords: [
        1545,
        445,
        1536,
        498,
        1538,
        518,
        1727,
        518,
        1726,
        497,
        1719,
        445,
      ],
    },
    {
      name: "41",
      shape: "poly",
      coords: [
        1545,
        549,
        1537,
        601,
        1540,
        622,
        1727,
        624,
        1726,
        601,
        1721,
        549,
      ],
    },
    {
      name: "42",
      shape: "poly",
      coords: [
        1545,
        651,
        1538,
        705,
        1540,
        726,
        1726,
        725,
        1727,
        705,
        1719,
        652,
      ],
    },
  ],
};

const getTipPosition = (area) => {
  return { top: `${area.center[1] - 50}px`, left: `${area.center[0]}px` };
}


export default function ImageMapTohoku() {
  const { width } = useWindowSize()
  const { areas } = useImageMapResponsive(MAP.areas, IMAGE_WIDTH)
  const [hoveredArea, setHoveredArea] = useState(null)
  return (
    <div style={{ position: "relative" }}>

    <ImageMapper
      src={URL}
      fillColor='rgba(0, 0, 0, 0.2)'
      map={{ ...MAP, areas: areas || MAP.areas }}
      width={width}
      onMouseEnter={(area) => setHoveredArea(area)}
      onMouseLeave={() => setHoveredArea(null)}
    />
    {hoveredArea && (
              <div
              className={styles.tooltip}
    style={getTipPosition(hoveredArea)}>
      <img height={80} src='https://japaneast1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=fFNQTw&docid=https%3A%2F%2Fskyace.sharepoint.com%3A443%2F_api%2Fv2.0%2Fdrives%2Fb!xYO_mk_WfEKPmR70JDqzsw6hxdSOm1VGrVcrhFYPlZj7OeH58rxDRYpH44vvY_q7%2Fitems%2F01CPZLCDM725CNYDLEX5FZKP56JSD3TKQI%3Fversion%3DPublished&access_token=eyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0.eyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvc2t5YWNlLnNoYXJlcG9pbnQuY29tQGNhYzViNzIyLWFkMjYtNDk0ZC1hODcxLTg1MzU2YjAxYjYxYyIsImlzcyI6IjAwMDAwMDAzLTAwMDAtMGZmMS1jZTAwLTAwMDAwMDAwMDAwMCIsIm5iZiI6IjE2MDYxODY4MDAiLCJleHAiOiIxNjA2MjA4NDAwIiwiZW5kcG9pbnR1cmwiOiJSanNCQnl3UDJ1R3VFQ29MbjZZRVk0dkdndVZNbDQya2JBODh3MSs3OW1FPSIsImVuZHBvaW50dXJsTGVuZ3RoIjoiMTEzIiwiaXNsb29wYmFjayI6IlRydWUiLCJ2ZXIiOiJoYXNoZWRwcm9vZnRva2VuIiwic2l0ZWlkIjoiT1dGaVpqZ3pZelV0WkRZMFppMDBNamRqTFRobU9Ua3RNV1ZtTkRJME0yRmlNMkl6Iiwic2lnbmluX3N0YXRlIjoiW1wia21zaVwiXSIsIm5hbWVpZCI6IjAjLmZ8bWVtYmVyc2hpcHxoYWlfdGdsLXNvbC5jb20jZXh0I0Bza3lhY2Uub25taWNyb3NvZnQuY29tIiwibmlpIjoibWljcm9zb2Z0LnNoYXJlcG9pbnQiLCJpc3VzZXIiOiJ0cnVlIiwiY2FjaGVrZXkiOiIwaC5mfG1lbWJlcnNoaXB8MTAwMzIwMDA1MzFiMjE3YUBsaXZlLmNvbSIsInR0IjoiMCIsInVzZVBlcnNpc3RlbnRDb29raWUiOiIzIn0.a3dWOEJNZXlJVlZSZWFzTGQ2SE1DcDRoWjZKU2ZkV3c4TFM5K2xLcVovbz0&encodeFailures=1&srcWidth=&srcHeight=&width=310&height=163&action=Preview'/>
      {hoveredArea.name}
    
    
    </div>
            )}
    </div>
  );
}
