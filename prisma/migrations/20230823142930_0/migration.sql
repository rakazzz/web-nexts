-- CreateTable
CREATE TABLE `post` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NOT NULL,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `content` TEXT NOT NULL,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `kontak` VARCHAR(50) NOT NULL DEFAULT '0',
    `price` VARCHAR(20) NOT NULL DEFAULT '0',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `profile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bio` TEXT NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `userId`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `alamat` VARCHAR(100) NOT NULL DEFAULT '',
    `nowa` VARCHAR(16) NOT NULL,
    `ttl` VARCHAR(20) NOT NULL DEFAULT '-',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `spfromdesa` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `name` VARCHAR(255) NULL,
    `nohp` VARCHAR(16) NOT NULL,
    `nik` VARCHAR(16) NOT NULL DEFAULT '0',
    `alamat` VARCHAR(100) NOT NULL DEFAULT '',
    `wargaN` VARCHAR(20) NOT NULL DEFAULT '',
    `tempatL` VARCHAR(20) NOT NULL DEFAULT '',
    `tglL` VARCHAR(20) NOT NULL DEFAULT '-',
    `agama` VARCHAR(10) NOT NULL DEFAULT '',
    `work` VARCHAR(15) NOT NULL DEFAULT '-',
    `tujuan` VARCHAR(20) NOT NULL DEFAULT '-',
    `status` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `imbS` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `name` VARCHAR(255) NULL,
    `nohp` VARCHAR(16) NOT NULL,
    `tempatL` VARCHAR(20) NOT NULL DEFAULT '',
    `tglL` VARCHAR(20) NOT NULL DEFAULT '-',
    `nik` VARCHAR(16) NOT NULL DEFAULT '0',
    `gender` VARCHAR(11) NOT NULL DEFAULT '0',
    `agama` VARCHAR(10) NOT NULL DEFAULT '',
    `work` VARCHAR(15) NOT NULL DEFAULT '-',
    `alamat` VARCHAR(100) NOT NULL DEFAULT '',
    `alamatB` VARCHAR(50) NOT NULL DEFAULT '-',
    `type` VARCHAR(50) NOT NULL DEFAULT '',
    `buildsize` VARCHAR(30) NOT NULL DEFAULT '',
    `status` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `suketwaliortu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `name` VARCHAR(255) NULL,
    `nohp` VARCHAR(16) NOT NULL,
    `tempatL` VARCHAR(20) NOT NULL DEFAULT '',
    `tglL` VARCHAR(20) NOT NULL DEFAULT '-',
    `alamat` VARCHAR(100) NOT NULL DEFAULT '',
    `agama` VARCHAR(10) NOT NULL DEFAULT '',
    `gender` VARCHAR(11) NOT NULL DEFAULT '0',
    `sekolah` VARCHAR(50) NOT NULL DEFAULT '-',
    `namewali` VARCHAR(255) NULL,
    `tempatLwali` VARCHAR(20) NOT NULL DEFAULT '',
    `tglLwali` VARCHAR(20) NOT NULL DEFAULT '-',
    `genderwali` VARCHAR(11) NOT NULL DEFAULT '0',
    `agamawali` VARCHAR(10) NOT NULL DEFAULT '',
    `workwali` VARCHAR(15) NOT NULL DEFAULT '-',
    `alamatwali` VARCHAR(50) NOT NULL DEFAULT '-',
    `status` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `sukettelahmenikah` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `namepria` VARCHAR(255) NULL,
    `nohppria` VARCHAR(16) NOT NULL,
    `tempatLpria` VARCHAR(20) NOT NULL DEFAULT '',
    `tglLpria` VARCHAR(20) NOT NULL DEFAULT '-',
    `agamapria` VARCHAR(10) NOT NULL DEFAULT '',
    `workpria` VARCHAR(15) NOT NULL DEFAULT '-',
    `alamatpria` VARCHAR(100) NOT NULL DEFAULT '',
    `namewanita` VARCHAR(255) NULL,
    `nohpwanita` VARCHAR(16) NOT NULL,
    `tempatLwanita` VARCHAR(20) NOT NULL DEFAULT '',
    `tglLwanita` VARCHAR(20) NOT NULL DEFAULT '-',
    `agamawanita` VARCHAR(10) NOT NULL DEFAULT '',
    `workwanita` VARCHAR(15) NOT NULL DEFAULT '-',
    `alamatwanita` VARCHAR(100) NOT NULL DEFAULT '',
    `tglnikah` VARCHAR(20) NOT NULL DEFAULT '',
    `lokasinikah` VARCHAR(30) NOT NULL DEFAULT '-',
    `status` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `suketpengurusankk` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `name` VARCHAR(255) NULL,
    `nohp` VARCHAR(16) NOT NULL,
    `tempatL` VARCHAR(20) NOT NULL DEFAULT '',
    `tglL` VARCHAR(20) NOT NULL DEFAULT '-',
    `alamat` VARCHAR(100) NOT NULL DEFAULT '',
    `agama` VARCHAR(10) NOT NULL DEFAULT '',
    `gender` VARCHAR(11) NOT NULL DEFAULT '0',
    `work` VARCHAR(15) NOT NULL DEFAULT '-',
    `status` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `suketmenantu` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `name` VARCHAR(255) NULL,
    `nohp` VARCHAR(16) NOT NULL,
    `tempatL` VARCHAR(20) NOT NULL DEFAULT '',
    `tglL` VARCHAR(20) NOT NULL DEFAULT '-',
    `alamat` VARCHAR(100) NOT NULL DEFAULT '',
    `nameMertua` VARCHAR(255) NULL,
    `tempatLMertua` VARCHAR(20) NOT NULL DEFAULT '',
    `tglLMertua` VARCHAR(20) NOT NULL DEFAULT '-',
    `alamatmertua` VARCHAR(100) NOT NULL DEFAULT '',
    `status` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `suketdomisili` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `name` VARCHAR(255) NULL,
    `tempatL` VARCHAR(20) NOT NULL DEFAULT '',
    `tglL` VARCHAR(20) NOT NULL DEFAULT '-',
    `gender` VARCHAR(11) NOT NULL DEFAULT '0',
    `agama` VARCHAR(10) NOT NULL DEFAULT '',
    `work` VARCHAR(15) NOT NULL DEFAULT '-',
    `nik` VARCHAR(16) NOT NULL DEFAULT '0',
    `stsnkh` VARCHAR(20) NOT NULL DEFAULT '0',
    `alamat` VARCHAR(100) NOT NULL DEFAULT '',
    `status` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `suketblmktp` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `name` VARCHAR(255) NULL,
    `nik` VARCHAR(16) NOT NULL DEFAULT '0',
    `tempatL` VARCHAR(20) NOT NULL DEFAULT '',
    `tglL` VARCHAR(20) NOT NULL DEFAULT '-',
    `alamat` VARCHAR(100) NOT NULL DEFAULT '',
    `dusun` VARCHAR(20) NOT NULL DEFAULT '',
    `thnktp` VARCHAR(10) NOT NULL DEFAULT '',
    `status` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `suketjabatan` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `name` VARCHAR(255) NULL,
    `tempatL` VARCHAR(20) NOT NULL DEFAULT '',
    `tglL` VARCHAR(20) NOT NULL DEFAULT '-',
    `gender` VARCHAR(11) NOT NULL DEFAULT '0',
    `alamat` VARCHAR(100) NOT NULL DEFAULT '',
    `lamajabatan` VARCHAR(50) NOT NULL DEFAULT '',
    `jabatan` VARCHAR(20) NOT NULL DEFAULT '',
    `status` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `suketblmpunyarumah` (
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NULL,
    `nik` VARCHAR(16) NOT NULL DEFAULT '0',
    `alamat` VARCHAR(100) NOT NULL DEFAULT '',
    `gender` VARCHAR(11) NOT NULL DEFAULT '0',
    `work` VARCHAR(15) NOT NULL DEFAULT '-',
    `agama` VARCHAR(10) NOT NULL DEFAULT '',
    `rtrw` VARCHAR(15) NULL DEFAULT '-',
    `dusun` VARCHAR(15) NOT NULL DEFAULT '-',
    `status` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `suketlokasitanah` (
    `createdAt` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `namepemilik` VARCHAR(255) NULL,
    `alamattanah` VARCHAR(100) NOT NULL DEFAULT '',
    `luastanah` VARCHAR(100) NOT NULL DEFAULT '',
    `luasbangunan` VARCHAR(100) NOT NULL DEFAULT '',
    `dusun` VARCHAR(15) NOT NULL DEFAULT '-',
    `nosertiftanah` VARCHAR(16) NOT NULL DEFAULT '-',
    `status` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `profile` ADD CONSTRAINT `profile_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
