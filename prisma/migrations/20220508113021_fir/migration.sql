-- CreateTable
CREATE TABLE `Hero` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `uron` VARCHAR(191) NOT NULL,
    `shit` VARCHAR(191) NOT NULL,
    `short_disc` VARCHAR(191) NULL,
    `disc` VARCHAR(191) NULL,
    `image_url` VARCHAR(191) NOT NULL,
    `gif_url` VARCHAR(191) NOT NULL,
    `bashara` VARCHAR(191) NOT NULL,
    `typeOfAttackId` INTEGER NOT NULL,
    `hardlyId` INTEGER NOT NULL,
    `attributeId` INTEGER NOT NULL,
    `rolesId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Roles` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `short_disc` VARCHAR(191) NULL,
    `disc` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TypeOfAttack` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Hardly` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `level` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Attribute` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(191) NOT NULL,
    `image_url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Hero` ADD CONSTRAINT `Hero_rolesId_fkey` FOREIGN KEY (`rolesId`) REFERENCES `Roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Hero` ADD CONSTRAINT `Hero_typeOfAttackId_fkey` FOREIGN KEY (`typeOfAttackId`) REFERENCES `TypeOfAttack`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Hero` ADD CONSTRAINT `Hero_hardlyId_fkey` FOREIGN KEY (`hardlyId`) REFERENCES `Hardly`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Hero` ADD CONSTRAINT `Hero_attributeId_fkey` FOREIGN KEY (`attributeId`) REFERENCES `Attribute`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
