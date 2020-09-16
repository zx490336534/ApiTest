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

 Date: 06/11/2019 17:49:57
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for tb_debugtalks
-- ----------------------------
DROP TABLE IF EXISTS `tb_debugtalks`;
CREATE TABLE `tb_debugtalks`  (
  `create_time` datetime(6) NOT NULL,
  `update_time` datetime(6) NOT NULL,
  `is_delete` tinyint(1) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(200) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `debugtalk` longtext CHARACTER SET utf8 COLLATE utf8_general_ci NULL,
  `project_id` int(11) NOT NULL,
  PRIMARY KEY (`id`) USING BTREE,
  UNIQUE INDEX `project_id`(`project_id`) USING BTREE,
  CONSTRAINT `tb_debugtalks_project_id_6a5cce25_fk_tb_projects_id` FOREIGN KEY (`project_id`) REFERENCES `tb_projects` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of tb_debugtalks
-- ----------------------------
INSERT INTO `tb_debugtalks` VALUES ('2019-11-06 06:21:19.360131', '2019-11-06 06:49:14.871642', 0, 1, 'debugtalk.py', '# debugtalk.py\nimport random\nimport time\n\n\ndef sleep(n_secs):\n    time.sleep(n_secs)\n\n\ndef get_user_agent():\n    user_agents = [\"Mozilla/5.0 BenBen\", \"Mozilla/5.0 MaZai\", \"Mozilla/5.0 icon\"]\n    return random.choice(user_agents)\n\n\ndef get_accounts():\n    accounts = [\n        {\"title\": \"正常登录\", \"username\": \"keyou1\", \"password\": \"123456\",\n            \"status_code\": 200, \"contain_msg\": \"token\"},\n        {\"title\": \"密码错误\", \"username\": \"keyou1\", \"password\": \"123457\",\n            \"status_code\": 400, \"contain_msg\": \"non_field_errors\"},\n        {\"title\": \"账号错误\", \"username\": \"keyou1111\", \"password\": \"123456\",\n            \"status_code\": 400, \"contain_msg\": \"non_field_errors\"},\n        {\"title\": \"用户名为空\", \"username\": \"\", \"password\": \"123456\",\n            \"status_code\": 400, \"contain_msg\": \"username\"},\n        {\"title\": \"密码为空\", \"username\": \"keyou1\", \"password\": \"\",\n            \"status_code\": 400, \"contain_msg\": \"password\"},\n    ]\n    return accounts\n\n\ndef get_project_name():\n    old_project_name = []\n    while True:\n        project_name = \"这是一个跨时代的{}项目\".format(random.randint(0, 10000))\n        if project_name not in old_project_name:\n            old_project_name.append(project_name)\n            return project_name\n\n\ndef create_project():\n    projects = [\n        {\n            \"title\": \"正常创建项目\",\n            \"name\": get_project_name(),\n            \"leader\": \"可优\",\n            \"tester\": \"可可\",\n            \"programmer\": \"优优\",\n            \"publish_app\": \"国产大飞机C919研制应用\",\n            \"desc\": \"此项目会提升民族自信心\",\n            \"status_code\": 201\n        },\n        {\n            \"title\": \"项目名为空\",\n            \"name\": None,\n            \"leader\": \"小可可\",\n            \"tester\": \"可可\",\n            \"programmer\": \"优优\",\n            \"publish_app\": \"国产大飞机C919研制应用\",\n            \"desc\": \"此项目会提升民族自信心\",\n            \"status_code\": 400\n        },\n        {\n            \"title\": \"leader为空\",\n            \"name\": get_project_name(),\n            \"leader\": None,\n            \"tester\": \"可可\",\n            \"programmer\": \"优优\",\n            \"publish_app\": \"国产大飞机C919研制应用\",\n            \"desc\": \"此项目会提升民族自信心\",\n            \"status_code\": 400\n        },\n        {\n            \"title\": \"tester为空\",\n            \"name\": get_project_name(),\n            \"leader\": \"小优优\",\n            \"tester\": None,\n            \"programmer\": \"优优\",\n            \"publish_app\": \"国产大飞机C919研制应用\",\n            \"desc\": \"此项目会提升民族自信心\",\n            \"status_code\": 400\n        },\n    ]\n\n    return projects', 1);
INSERT INTO `tb_debugtalks` VALUES ('2019-11-06 06:22:54.353212', '2019-11-06 06:22:54.353212', 0, 2, 'debugtalk.py', '#debugtalk.py', 2);
INSERT INTO `tb_debugtalks` VALUES ('2019-11-06 06:24:43.991607', '2019-11-06 06:24:43.991607', 0, 3, 'debugtalk.py', '#debugtalk.py', 3);
INSERT INTO `tb_debugtalks` VALUES ('2019-11-06 06:27:33.711910', '2019-11-06 06:27:33.711910', 0, 4, 'debugtalk.py', '#debugtalk.py', 4);
INSERT INTO `tb_debugtalks` VALUES ('2019-11-06 06:28:54.272985', '2019-11-06 06:28:54.272985', 0, 5, 'debugtalk.py', '#debugtalk.py', 5);
INSERT INTO `tb_debugtalks` VALUES ('2019-11-06 06:30:42.766064', '2019-11-06 06:30:42.766064', 0, 6, 'debugtalk.py', '#debugtalk.py', 6);
INSERT INTO `tb_debugtalks` VALUES ('2019-11-06 06:33:38.921017', '2019-11-06 06:33:38.921017', 0, 7, 'debugtalk.py', '#debugtalk.py', 7);
INSERT INTO `tb_debugtalks` VALUES ('2019-11-06 06:41:12.377633', '2019-11-06 06:41:12.377633', 0, 8, 'debugtalk.py', '#debugtalk.py', 8);
INSERT INTO `tb_debugtalks` VALUES ('2019-11-06 06:42:00.173348', '2019-11-06 06:42:00.173348', 0, 9, 'debugtalk.py', '#debugtalk.py', 9);
INSERT INTO `tb_debugtalks` VALUES ('2019-11-06 06:42:19.647412', '2019-11-06 06:42:19.647412', 0, 10, 'debugtalk.py', '#debugtalk.py', 10);
INSERT INTO `tb_debugtalks` VALUES ('2019-11-06 06:42:40.071642', '2019-11-06 06:42:40.071642', 0, 11, 'debugtalk.py', '#debugtalk.py', 11);
INSERT INTO `tb_debugtalks` VALUES ('2019-11-06 07:23:44.155142', '2019-11-06 07:23:44.155142', 0, 12, 'debugtalk.py', '#debugtalk.py', 12);
INSERT INTO `tb_debugtalks` VALUES ('2019-11-06 07:26:12.085863', '2019-11-06 07:26:12.085863', 0, 13, 'debugtalk.py', '#debugtalk.py', 13);
INSERT INTO `tb_debugtalks` VALUES ('2019-11-06 08:47:57.446151', '2019-11-06 08:47:57.446151', 0, 14, 'debugtalk.py', '#debugtalk.py', 14);
INSERT INTO `tb_debugtalks` VALUES ('2019-11-06 09:05:50.811505', '2019-11-06 09:05:50.811505', 0, 15, 'debugtalk.py', '#debugtalk.py', 15);
INSERT INTO `tb_debugtalks` VALUES ('2019-11-06 09:11:57.000275', '2019-11-06 09:11:57.000275', 0, 16, 'debugtalk.py', '#debugtalk.py', 16);
INSERT INTO `tb_debugtalks` VALUES ('2019-11-06 09:13:34.350873', '2019-11-06 09:13:34.351849', 0, 17, 'debugtalk.py', '#debugtalk.py', 17);
INSERT INTO `tb_debugtalks` VALUES ('2019-11-06 09:13:35.760004', '2019-11-06 09:13:35.760004', 0, 18, 'debugtalk.py', '#debugtalk.py', 18);

SET FOREIGN_KEY_CHECKS = 1;
