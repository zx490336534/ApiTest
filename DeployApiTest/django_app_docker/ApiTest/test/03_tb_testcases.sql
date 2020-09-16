/*
 Navicat Premium Data Transfer

 Source Server         : classes_loc
 Source Server Type    : MySQL
 Source Server Version : 50726
 Source Host           : localhost:3306
 Source Schema         : test2

 Target Server Type    : MySQL
 Target Server Version : 50726
 File Encoding         : 65001

 Date: 06/11/2019 17:48:41
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tb_testcases
-- ----------------------------
DROP TABLE IF EXISTS `tb_testcases`;
CREATE TABLE `tb_testcases`  (
  `create_time` datetime(6) NOT NULL,
  `update_time` datetime(6) NOT NULL,
  `is_delete` tinyint(1) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `include` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `author` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `request` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `interface_id` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `name`(`name`) USING BTREE,
  INDEX `tb_testcases_interface_id_2dd34cbc_fk_tb_interfaces_id`(`interface_id`) USING BTREE,
  CONSTRAINT `tb_testcases_interface_id_2dd34cbc_fk_tb_interfaces_id` FOREIGN KEY (`interface_id`) REFERENCES `tb_interfaces` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 7 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_testcases
-- ----------------------------
INSERT INTO `tb_testcases` VALUES ('2019-11-06 07:03:59.035206', '2019-11-06 08:35:48.352484', 0, 1, '登录接口_正向用例', '{\"config\":1,\"testcases\":[]}', '可优', '{\"test\":{\"name\":\"登录接口_正向用例\",\"request\":{\"url\":\"/user/login/\",\"method\":\"POST\",\"json\":{\"username\":\"$username\",\"password\":\"$password\"}},\"variables\":[{\"username\":\"keyou1\"},{\"password\":\"123456\"}],\"extract\":[{\"token\":\"content.token\"}],\"validate\":[{\"check\":\"status_code\",\"expected\":200,\"comparator\":\"equals\"}]}}', 1);
INSERT INTO `tb_testcases` VALUES ('2019-11-06 07:20:56.780181', '2019-11-06 08:36:48.365589', 0, 2, '登录接口_参数化用例_$title', '{\"config\":1,\"testcases\":[]}', '柠檬小姐姐', '{\"test\":{\"name\":\"登录接口_参数化用例_$title\",\"request\":{\"url\":\"/user/login/\",\"method\":\"POST\",\"json\":{\"username\":\"$username\",\"password\":\"$password\"}},\"parameters\":[{\"title-username-password-status_code-contain_msg\":\"${get_accounts()}\"}],\"validate\":[{\"check\":\"status_code\",\"expected\":\"$status_code\",\"comparator\":\"equals\"},{\"check\":\"content\",\"expected\":\"$contain_msg\",\"comparator\":\"contains\"}]}}', 1);
INSERT INTO `tb_testcases` VALUES ('2019-11-06 08:47:08.173015', '2019-11-06 08:49:33.053917', 0, 3, '创建项目接口_正向用例', '{\"config\":null,\"testcases\":[1]}', '小优优', '{\"test\":{\"name\":\"创建项目接口_正向用例\",\"request\":{\"url\":\"/projects/\",\"method\":\"POST\",\"json\":{\"name\":\"$name\",\"leader\":\"$leader\",\"tester\":\"$tester\",\"programmer\":\"$programmer\",\"publish_app\":\"$publish_app\",\"desc\":\"$desc\"},\"headers\":{\"User-Agent\":\"Mozilla/5.0 Lemon Little Girl\",\"Content-Type\":\"application/json\",\"Accept\":\"application/json\",\"Authorization\":\"JWT $token\"}},\"variables\":[{\"name\":\"${get_project_name()}\"},{\"leader\":\"可优\"},{\"tester\":\"柠檬小姐姐\"},{\"programmer\":\"优优\"},{\"publish_app\":\"国产大飞机C919研制应用\"},{\"desc\":\"此项目会提升民族自信心\"}],\"validate\":[{\"check\":\"status_code\",\"expected\":201,\"comparator\":\"equals\"}]}}', 1);
INSERT INTO `tb_testcases` VALUES ('2019-11-06 08:53:53.652009', '2019-11-06 09:11:47.639794', 0, 4, '创建项目接口_参数化用例_$title', '{\"config\":null,\"testcases\":[1]}', '柠檬小姐姐', '{\"test\":{\"name\":\"创建项目接口_参数化用例_$title\",\"request\":{\"url\":\"/projects/\",\"method\":\"POST\",\"json\":{\"name\":\"$name\",\"leader\":\"$leader\",\"tester\":\"$tester\",\"programmer\":\"$programmer\",\"publish_app\":\"$publish_app\",\"desc\":\"$desc\"},\"headers\":{\"User-Agent\":\"Mozilla/5.0 Lemon Little Girl\",\"Content-Type\":\"application/json\",\"Accept\":\"application/json\",\"Authorization\":\"JWT $token\"}},\"parameters\":[{\"title-name-leader-tester-programmer-publish_app-desc-status_code\":\"${create_project()}\"}],\"validate\":[{\"check\":\"status_code\",\"expected\":\"$status_code\",\"comparator\":\"equals\"}]}}', 3);
INSERT INTO `tb_testcases` VALUES ('2019-11-06 09:27:05.067557', '2019-11-06 09:31:00.082747', 0, 5, '查看项目列表接口_正向用例', '{\"config\":2,\"testcases\":[]}', '可优', '{\"test\":{\"name\":\"查看项目列表接口_正向用例\",\"request\":{\"url\":\"/loans\",\"method\":\"GET\",\"params\":{\"pageIndex\":\"$pageIndex\",\"pageSize\":\"$pageSize\"}},\"variables\":[{\"pageIndex\":2},{\"pageSize\":3}],\"validate\":[{\"check\":\"status_code\",\"expected\":200,\"comparator\":\"equals\"},{\"check\":\"content.code\",\"expected\":0,\"comparator\":\"equals\"}]}}', 6);
INSERT INTO `tb_testcases` VALUES ('2019-11-06 09:47:49.566260', '2019-11-06 09:47:49.566260', 0, 6, '这是一个演示用例', '{\"config\":1,\"testcases\":[1,2,3]}', '小优优', '{\"test\":{\"name\":\"这是一个演示用例\",\"request\":{\"url\":\"/user/login/\",\"method\":\"POST\",\"json\":{\"username\":\"haha\",\"age\":18,\"sex\":null},\"headers\":{\"uname\":\"keyou\",\"age\":\"18\"}},\"parameters\":[{\"name-age\":\"[[\\\"name\\\":\\\"keyou\\\",\\\"age\\\":18],[\\\"name\\\":\\\"lemon\\\",\\\"age\\\":19],[\\\"name\\\":\\\"youyou\\\",\\\"age\\\":20]]\"},{\"n-a\":\"${getname()}\"}],\"variables\":[{\"var1\":\"val1\"},{\"var2\":100}],\"extract\":[{\"username\":\"content.username\"},{\"myAge\":\"content.age\"}],\"validate\":[{\"check\":\"status_code\",\"expected\":200,\"comparator\":\"equals\"},{\"check\":\"love\",\"expected\":\"lemon\",\"comparator\":\"equals\"}],\"setup_hooks\":[\"sh1\",\"sh2\"],\"teardown_hooks\":[\"th1\",\"th2\"]}}', 1);

SET FOREIGN_KEY_CHECKS = 1;
