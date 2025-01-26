-- CreateTable
CREATE TABLE `news` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `tanggal` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `deskripsi` VARCHAR(191) NOT NULL,
    `gambar` VARCHAR(191) NOT NULL,
    `paragraf2` VARCHAR(191) NOT NULL,
    `paragraf1` VARCHAR(191) NOT NULL,
    `paragraf3` VARCHAR(191) NOT NULL,
    `paragraf4` VARCHAR(191) NOT NULL,
    `paragraf5` VARCHAR(191) NOT NULL,
    `paragraf6` VARCHAR(191) NOT NULL,
    `paragraf7` VARCHAR(191) NOT NULL,
    `paragraf8` VARCHAR(191) NOT NULL,
    `paragraf9` VARCHAR(191) NOT NULL,
    `paragraf10` VARCHAR(191) NOT NULL,
    `point1` VARCHAR(191) NOT NULL,
    `point2` VARCHAR(191) NOT NULL,
    `point3` VARCHAR(191) NOT NULL,
    `point4` VARCHAR(191) NOT NULL,
    `point5` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
