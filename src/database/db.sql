
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8;

USE `mydb`;

-- -----------------------------------------------------
-- Table `mydb`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`product` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `img_url` VARCHAR(400) NOT NULL,
  `public_id_img` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB;

