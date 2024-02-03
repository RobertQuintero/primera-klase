"use client";
import { cn } from "@nextui-org/react";
import { motion } from "framer-motion";

type LogoProps = {
  className?: string;
  props?: any;
  url?: string;
  delay?: number;
  hidden?: string;
  hidden2?: string;
};

const AnimatedLogo = ({ url, delay=1,hidden,hidden2, className, ...props }: LogoProps) => {
  const draw = {
    hidden: { pathLength: 0, opacity: 0, fillOpacity: 0, fill: "none" },
    visible: (i: number) => {
      return {
        pathLength: 1,
        opacity: 1,
        fillOpacity: 1,
        fill: "url(#paint0_linear_5_12)",
        transition: {
          pathLength: { delay:delay , type: "spring", duration: 8, bounce: 0 },
          opacity: { delay, duration: 0.01 },
          fillOpacity: { delay, duration: 0.9 },
        },
      };
    },
  };
  return (
    <div className={cn("flex flex-col items-center ", className)} {...props}>
      <motion.svg
        className={`w-full relative h-52 ${hidden2} ` }
        width="1888"
        height="2627"
        viewBox="0 0 1888 2627"
        xmlns="http://www.w3.org/2000/svg"
        initial="hidden"
        animate="visible"

      >
        <motion.path
          transition={{ ease: "easeInOut" }}
          strokeWidth={20}
          stroke="url(#paint0_linear_5_12)"
          fill="url(#paint0_linear_5_12)"
          variants={draw}

          d="M115.68 2626.8C168.658 2357.76 212.802 2221.69 339.448 2007.89C513.723 1729.96 643.227 1592.79 926.423 1383.95C935.007 1377.85 943.445 1371.86 951.742 1365.96C1150.45 1224.85 1268.17 1141.26 1357.51 986.402C1405.38 863.978 1420.86 799.889 1428.85 693.475C1438.11 562.7 1421.79 478.531 1408.04 432.514C1335.58 236.812 1283.3 136.285 1156.64 0.152102C1290.22 159.597 1366.74 312.847 1357.51 636.998C1357.51 915.499 1190.55 1065.02 1095.37 1140.94C1053.37 1174.44 1006.05 1204.88 953.013 1238.99L953.011 1238.99C885.863 1282.18 809.551 1331.27 723.258 1399.94C708.796 1412.32 694.829 1424.21 681.291 1435.74C538.247 1557.55 443.268 1638.42 320.927 1822.4C231.659 1962.78 182.825 2107.38 153.686 2251.04C124.547 2394.71 118.317 2477.96 115.68 2626.8ZM1049.13 1451.48L1049.14 1451.48L1049.14 1451.48C1056.35 1451.17 1063.55 1450.87 1070.73 1450.5C1128.99 1445.84 1178.66 1455.83 1225.01 1479.59C1234.99 1484.7 1246.4 1491.25 1258.94 1498.45L1258.94 1498.45L1258.94 1498.45C1304.64 1524.69 1365.39 1559.57 1427.12 1565.28C1496.1 1572.31 1523.68 1556.64 1525.88 1517.93C1525.64 1510.98 1525.62 1505.23 1525.6 1499.88V1499.87C1525.57 1490.91 1525.53 1483.03 1524.51 1472.46C1523.63 1452.32 1529.05 1447.32 1546.43 1446.59L1575.53 1444.44C1587.58 1444.09 1591.17 1440.57 1589.72 1426.12L1585.94 1402.58C1584.2 1390.94 1585.94 1388.98 1598.34 1389.65L1619.11 1390.27C1627.47 1390.16 1631.13 1387.92 1631.13 1375.69L1630.78 1341.82C1631.22 1323.5 1637.1 1320.33 1652.29 1321.19C1685.15 1322.6 1702.67 1323.25 1733.02 1324.25C1762.16 1323.97 1769.23 1317.15 1762.67 1289.98L1760.6 1282.42L1760.6 1282.42L1760.6 1282.42C1743.89 1221.43 1733.91 1184.98 1719.28 1123.29C1709.78 1076.07 1711.08 1054.59 1739.47 1035.87C1749.64 1029.57 1755.98 1026.39 1768.25 1021.26C1779.25 1013.94 1781.23 1007.36 1782 993.981C1801.34 886.001 1807.41 825.249 1813.31 724.304C1811.25 650.029 1783.38 600.257 1767.33 585.652C1658.84 486.884 1613.79 454.124 1480.31 380.082C1589.72 900.455 1428.85 1230.29 916.922 1472.46C959.285 1455.27 1004.42 1453.37 1049.13 1451.48ZM142.069 1963.45C312.611 1595.74 619.191 1319.23 1009.66 1105.79C991.499 1096.89 971.247 1083.66 948.42 1068.75C909.542 1043.36 863.198 1013.09 807.002 991.014C782.631 984.06 741.023 988.369 685.071 1001C636.49 1018.9 610.561 1034.45 566.788 1072.62C553.698 1045.19 552.053 1025.78 549.577 996.572C549.423 994.759 549.266 992.907 549.103 991.014C547.984 1024.95 548.611 1048.98 551.857 1084.76C515.468 1105.04 461.719 1095.64 303.306 1051.3C275.823 1044.9 270.255 1047.51 267.38 1067.96C264.641 1087.44 266.571 1104.34 269.829 1132.86C269.992 1134.29 270.158 1135.75 270.327 1137.24C274.969 1167.79 269.339 1171.7 239.97 1166.28C210.601 1160.87 193.014 1156.45 193.014 1156.45C181.551 1153.6 175.681 1152.51 169.265 1154.36C164.805 1157.73 164.698 1166.82 164.847 1184.05C165.647 1195.74 162.578 1198.83 150.718 1198.09C137.79 1197.04 130.507 1196.69 117.313 1197.53C111.664 1198.22 110.105 1199.98 109.638 1205.11C110.746 1221.03 107.586 1250.61 107.586 1250.61C105.379 1269.06 98.8142 1274.08 80.0783 1276C57.1314 1278.45 45.5543 1280.45 28.8983 1285.92C17.3894 1290.44 12.3054 1294.11 7.76017 1304.45C-6.26584 1330.28 -1.13042 1380.88 43.8434 1464.09C118.264 1563.06 147.117 1609.27 162.722 1665.86C181.495 1733.39 178.03 1796.63 142.069 1963.45Z"
        />
        <motion.defs>
          <linearGradient
            id="paint0_linear_5_12"
            x1="907.082"
            y1="0.15212"
            x2="942.213"
            y2="2668.72"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#f3b10b" />
            <stop offset="1" stopColor="#f3b10b" stopOpacity="0" />
          </linearGradient>
        </motion.defs>
      </motion.svg>
      <motion.svg
        width="1875"
        height="964"
        viewBox="0 0 1875 964"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`w-40  h-full relative ${hidden} ` }
        initial="hidden"
        animate="visible"
      >
        <motion.path
          strokeWidth={10}
          stroke={url ? "url(#paint0_linear_5_12)" : "#FFB100"}
          d="M55.1155 231.54C55.1155 261.185 56.0718 267.401 75.6761 276.008H0.127983C20.2104 267.401 20.6885 261.185 20.6885 232.974V45.0602C20.6885 15.4147 20.2104 9.19871 0.127983 0.591958H90.977C157.44 0.591958 200.474 27.3685 200.474 71.8367C200.474 119.652 161.744 156.948 96.7148 156.948H55.1155V231.54ZM100.54 7.28609C82.3702 7.28609 68.5038 8.72056 55.1155 14.4584V149.776H87.1517C132.576 149.776 167.96 123.955 165.569 71.8367C163.178 31.6719 141.661 7.28609 100.54 7.28609ZM278.316 231.54C278.316 261.185 279.272 267.401 298.876 276.008H223.328C243.41 267.401 243.889 261.185 243.889 232.974V45.0602C243.889 15.4147 243.41 9.19871 223.328 0.591958H314.177C380.64 0.591958 423.674 27.3685 423.674 71.8367C423.674 116.305 390.203 151.21 334.259 156.47C367.73 158.86 398.332 189.94 415.545 225.324C449.494 298.003 476.749 317.129 515.001 307.566C515.001 307.566 504.004 319.52 477.227 319.52C434.193 319.52 402.635 282.702 380.64 239.668C346.213 172.249 329 159.339 313.221 156.948H278.316V231.54ZM323.74 7.28609C305.57 7.28609 291.704 8.72056 278.316 14.4584V149.776H310.352C355.776 149.776 391.16 122.521 388.769 71.8367C386.378 32.6282 364.861 7.28609 323.74 7.28609ZM531.867 231.54C531.867 261.185 532.824 267.401 552.428 276.008H476.88C496.484 267.401 497.44 261.185 497.44 232.974V45.0602C497.44 15.4147 496.962 9.19871 476.88 0.591958H552.428C533.302 8.72056 531.867 14.9365 531.867 43.6257V231.54ZM852.554 231.54C852.554 261.185 853.032 267.401 873.115 276.008H797.567C817.171 267.879 817.649 261.185 817.649 232.974V19.7181L721.541 276.008H713.89L610.609 32.15V231.54C610.609 261.185 610.609 267.879 630.692 276.486H582.876C602.481 267.879 603.437 261.663 603.437 232.974V45.5383C603.437 16.8491 601.046 8.24241 582.876 0.591958H633.56L731.104 230.105L817.171 0.591958H873.115C853.511 9.19871 852.554 15.4147 852.554 43.6257V231.54ZM1009.82 269.314C1058.59 269.314 1073.89 248.275 1100.19 187.55L1078.19 276.008H903.668C923.75 267.401 924.229 261.185 924.229 232.974V45.0602C924.229 15.4147 923.75 9.19871 903.668 0.591958H1074.37L1077.24 70.8804C1057.16 16.8491 1049.98 7.28609 1005.99 7.28609H958.656V135.431H1000.25C1030.86 135.431 1032.77 131.606 1043.29 94.3099V183.246C1032.77 146.428 1030.86 142.603 1000.25 142.125H958.656V238.712C958.656 261.663 964.872 269.314 983.52 269.314H1009.82ZM1185.59 231.54C1185.59 261.185 1186.55 267.401 1206.15 276.008H1130.6C1150.69 267.401 1151.16 261.185 1151.16 232.974V45.0602C1151.16 15.4147 1150.69 9.19871 1130.6 0.591958H1221.45C1287.92 0.591958 1330.95 27.3685 1330.95 71.8367C1330.95 116.305 1297.48 151.21 1241.54 156.47C1275.01 158.86 1305.61 189.94 1322.82 225.324C1356.77 298.003 1384.02 317.129 1422.28 307.566C1422.28 307.566 1411.28 319.52 1384.5 319.52C1341.47 319.52 1309.91 282.702 1287.92 239.668C1253.49 172.249 1236.28 159.339 1220.5 156.948H1185.59V231.54ZM1231.02 7.28609C1212.85 7.28609 1198.98 8.72056 1185.59 14.4584V149.776H1217.63C1263.05 149.776 1298.44 122.521 1296.04 71.8367C1293.65 32.6282 1272.14 7.28609 1231.02 7.28609ZM1416.67 227.236C1406.15 255.447 1400.41 267.401 1420.97 276.008H1372.68C1392.28 267.401 1399.46 253.056 1409.5 226.758L1494.61 0.591958H1503.69L1585.46 216.239C1595.5 244.45 1605.06 267.401 1625.14 276.008H1549.6C1568.72 267.401 1562.98 255.447 1553.42 228.671L1534.77 179.899H1434.36L1416.67 227.236ZM1484.57 46.4946L1436.75 173.205H1532.38L1484.57 46.4946ZM272.012 713.54C272.012 743.185 272.968 749.401 292.572 758.008H217.024C236.629 749.401 237.585 743.185 237.585 714.974V527.06C237.585 497.415 237.107 491.199 217.024 482.592H292.572C273.446 490.721 272.012 496.937 272.012 525.626V620.3C311.699 591.133 382.465 529.451 403.026 513.194C422.63 498.371 428.846 488.808 415.458 482.592H469.489C447.494 489.764 434.106 499.327 411.632 516.063C407.329 518.932 338.475 575.354 302.614 605.477C318.393 620.3 409.242 709.714 414.979 714.974C448.928 744.141 457.057 749.401 487.18 758.486H414.501L272.012 626.038V713.54ZM510.266 482.592H585.814C566.21 490.721 565.254 496.937 565.254 525.626V720.712C565.254 743.663 571.47 751.314 590.118 751.314H616.416C665.188 751.314 680.489 730.275 706.787 669.55L684.792 758.008H510.266C530.349 749.401 530.827 743.185 530.827 714.974V527.06C530.827 497.415 530.349 491.199 510.266 482.592ZM762.245 709.236C751.726 737.447 745.988 749.401 766.549 758.008H718.255C737.859 749.401 745.032 735.056 755.073 708.758L840.184 482.592H849.269L931.033 698.239C941.074 726.45 950.637 749.401 970.72 758.008H895.172C914.298 749.401 908.56 737.447 898.997 710.671L880.349 661.899H779.937L762.245 709.236ZM830.143 528.495L782.328 655.205H877.958L830.143 528.495ZM1014.3 530.407C1014.3 588.742 1169.69 617.431 1169.69 690.11C1169.69 725.015 1143.87 758.008 1090.32 758.008C1060.2 758.008 1029.12 745.098 1009.51 730.275C1001.38 724.537 995.169 725.972 989.909 740.316C987.997 744.62 987.04 749.401 986.562 751.314L987.04 670.984C1008.08 725.015 1040.59 750.836 1089.84 750.836C1122.84 750.836 1141.96 732.188 1141.96 704.933C1141.96 646.12 986.084 614.084 986.084 545.708C986.084 502.196 1036.77 481.636 1073.59 481.636C1099.41 481.636 1124.27 493.111 1140.05 506.021C1144.35 509.368 1152.48 510.325 1158.7 497.415L1163 487.852V564.834C1149.13 517.497 1119.97 489.286 1073.11 489.286C1044.42 489.286 1014.3 500.762 1014.3 530.407ZM1306.56 751.314C1355.33 751.314 1370.63 730.275 1396.93 669.55L1374.94 758.008H1200.41C1220.49 749.401 1220.97 743.185 1220.97 714.974V527.06C1220.97 497.415 1220.49 491.199 1200.41 482.592H1371.11L1373.98 552.88C1353.9 498.849 1346.73 489.286 1302.74 489.286H1255.4V617.431H1297C1327.6 617.431 1329.51 613.606 1340.03 576.31V665.246C1329.51 628.428 1327.6 624.603 1297 624.125H1255.4V720.712C1255.4 743.663 1261.62 751.314 1280.26 751.314H1306.56Z"
          variants={draw}
        />
      </motion.svg>
    </div>
  );
};

export { AnimatedLogo };
